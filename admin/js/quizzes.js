var quizQuestions = [];
var adminQuizzes = [];

document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  fillQuizCourses();
  addQuestionEditor();
  bindQuizEvents();
  refreshQuizzes();
});

function bindQuizEvents() {
  document.getElementById('addQuestionBtn').onclick = function () {
    addQuestionEditor();
  };
  document.getElementById('quizReset').onclick = resetQuizForm;
  document.getElementById('quizCsvImportBtn').onclick = importQuizCsv;
  document.getElementById('quizSearch').addEventListener('input', applyQuizFilters);
  document.getElementById('quizStatusFilter').addEventListener('change', applyQuizFilters);
  bindFileMeta('quizReferenceFile', 'quizReferenceMeta', 'Optional reference sheet or instructions file for the quiz setup.');

  document.getElementById('quizForm').addEventListener('submit', saveQuizRecord);
}

async function saveQuizRecord(event) {
  event.preventDefault();
  var courseId = document.getElementById('quizCourse').value;
  var course = AdminLMS.getCourseOptions().find(function (item) { return item.id === courseId; });
  var existing = AdminLMS.getQuizzes().find(function (item) {
    return item.id === document.getElementById('quizId').value;
  }) || {};
  var referenceAsset = await resolveFileAsset('quizReferenceFile');
  var questions = collectQuestions();

  if (!questions.length) {
    alert('Please add at least one quiz question.');
    return;
  }

  AdminLMS.saveQuiz({
    id: document.getElementById('quizId').value,
    title: document.getElementById('quizTitle').value.trim(),
    courseId: courseId,
    courseTitle: course ? course.title : '',
    durationMinutes: Number(document.getElementById('quizDuration').value),
    totalMarks: questions.length * 5,
    passScore: Number(document.getElementById('quizPassScore').value),
    instructions: document.getElementById('quizInstructions').value.trim(),
    attemptsCount: existing.attemptsCount || 0,
    status: document.getElementById('quizStatus').value,
    referencePath: referenceAsset.path,
    referenceName: referenceAsset.name,
    questions: questions
  });

  refreshQuizzes();
  resetQuizForm();
}

function fillQuizCourses() {
  var select = document.getElementById('quizCourse');
  select.innerHTML = '<option value="">Select Course</option>';
  AdminLMS.getCourseOptions().forEach(function (course) {
    select.innerHTML += '<option value="' + course.id + '">' + course.title + '</option>';
  });
}

function addQuestionEditor(question) {
  quizQuestions.push(question || {
    prompt: '',
    options: ['', '', '', ''],
    correctOption: 0,
    explanation: ''
  });
  renderQuestionEditors();
}

function renderQuestionEditors() {
  var container = document.getElementById('quizQuestions');
  container.innerHTML = '';
  quizQuestions.forEach(function (question, index) {
    container.innerHTML += '<div class="question-item">' +
      '<div class="question-builder-head"><h4>Question ' + (index + 1) + '</h4><button type="button" class="btn btn-secondary" data-remove-question="' + index + '">Remove</button></div>' +
      '<input data-field="prompt" data-index="' + index + '" type="text" placeholder="Question Prompt" value="' + escapeHtml(question.prompt) + '">' +
      '<div class="form-grid">' +
      question.options.map(function (option, optionIndex) {
        return '<input data-field="option-' + optionIndex + '" data-index="' + index + '" type="text" placeholder="Option ' + String.fromCharCode(65 + optionIndex) + '" value="' + escapeHtml(option) + '">';
      }).join('') +
      '</div>' +
      '<div class="form-grid">' +
      '<select data-field="correct" data-index="' + index + '">' +
      [0, 1, 2, 3].map(function (optionIndex) {
        return '<option value="' + optionIndex + '" ' + (question.correctOption === optionIndex ? 'selected' : '') + '>Correct Option ' + String.fromCharCode(65 + optionIndex) + '</option>';
      }).join('') +
      '</select>' +
      '<input data-field="explanation" data-index="' + index + '" type="text" placeholder="Answer Explanation" value="' + escapeHtml(question.explanation) + '">' +
      '</div>' +
      '</div>';
  });

  container.querySelectorAll('button[data-remove-question]').forEach(function (button) {
    button.addEventListener('click', function () {
      removeQuestionEditor(Number(button.getAttribute('data-remove-question')));
    });
  });

  container.querySelectorAll('input, select').forEach(function (field) {
    field.addEventListener('input', syncQuestionState);
    field.addEventListener('change', syncQuestionState);
  });
}

function removeQuestionEditor(index) {
  quizQuestions.splice(index, 1);
  if (!quizQuestions.length) addQuestionEditor();
  renderQuestionEditors();
}

function syncQuestionState(event) {
  var index = Number(event.target.dataset.index);
  var field = event.target.dataset.field;
  if (field === 'prompt') quizQuestions[index].prompt = event.target.value;
  if (field === 'correct') quizQuestions[index].correctOption = Number(event.target.value);
  if (field === 'explanation') quizQuestions[index].explanation = event.target.value;
  if (field.indexOf('option-') === 0) {
    quizQuestions[index].options[Number(field.split('-')[1])] = event.target.value;
  }
}

function collectQuestions() {
  return quizQuestions.filter(function (question) {
    return question.prompt.trim();
  }).map(function (question, index) {
    return {
      id: 'admin-question-' + index + '-' + Date.now(),
      prompt: question.prompt,
      options: question.options.slice(),
      correctOption: question.correctOption,
      explanation: question.explanation || 'Review the course concepts linked to this question.'
    };
  });
}

function importQuizCsv() {
  var fileInput = document.getElementById('quizCsvUpload');
  var file = fileInput.files && fileInput.files[0];
  if (!file) {
    alert('Choose a CSV file to import quiz questions.');
    return;
  }

  var reader = new FileReader();
  reader.onload = function () {
    var parsedQuestions = parseCsvQuestions(String(reader.result || ''));
    if (!parsedQuestions.length) {
      alert('No valid questions were found in the CSV.');
      return;
    }

    quizQuestions = parsedQuestions;
    renderQuestionEditors();
    alert(parsedQuestions.length + ' question(s) imported from CSV.');
  };
  reader.readAsText(file);
}

function parseCsvQuestions(csvText) {
  var rows = csvText.trim().split(/\r?\n/).filter(Boolean);
  if (rows.length < 2) return [];

  var headers = splitCsvRow(rows[0]).map(function (header) {
    return header.trim().toLowerCase();
  });

  return rows.slice(1).map(function (row) {
    var values = splitCsvRow(row);
    var record = {};
    headers.forEach(function (header, index) {
      record[header] = values[index] || '';
    });

    var correctAnswer = String(record.correctanswer || record.correctoption || 'A').trim().toUpperCase();
    var correctIndex = ['A', 'B', 'C', 'D'].indexOf(correctAnswer);
    if (correctIndex < 0) correctIndex = Math.max(0, Number(correctAnswer) - 1);

    return {
      prompt: record.question || '',
      options: [record.optiona || '', record.optionb || '', record.optionc || '', record.optiond || ''],
      correctOption: correctIndex >= 0 ? correctIndex : 0,
      explanation: record.explanation || ''
    };
  }).filter(function (question) {
    return question.prompt && question.options.some(function (option) { return option; });
  });
}

function splitCsvRow(row) {
  var values = [];
  var current = '';
  var insideQuotes = false;

  for (var index = 0; index < row.length; index += 1) {
    var char = row.charAt(index);
    var next = row.charAt(index + 1);
    if (char === '"' && insideQuotes && next === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  values.push(current.trim());
  return values;
}

function refreshQuizzes() {
  adminQuizzes = AdminLMS.getQuizzes();
  applyQuizFilters();
}

function applyQuizFilters() {
  var query = document.getElementById('quizSearch').value.trim().toLowerCase();
  var status = document.getElementById('quizStatusFilter').value;

  var filtered = adminQuizzes.filter(function (quiz) {
    var searchable = [quiz.title, quiz.courseTitle].join(' ').toLowerCase();
    return searchable.indexOf(query) >= 0 && (status === 'all' || quiz.status === status);
  });

  renderQuizzes(filtered);
}

function renderQuizzes(quizzes) {
  var tbody = document.getElementById('quizzesTable');
  if (!tbody) return;

  if (!quizzes.length) {
    tbody.innerHTML = '<tr><td colspan="6"><div class="empty-state">No quizzes match the current filters.</div></td></tr>';
    return;
  }

  tbody.innerHTML = quizzes.map(function (quiz) {
    return '<tr data-clickable="true" data-quiz-id="' + escapeHtml(quiz.id) + '">' +
      '<td><strong>' + escapeHtml(quiz.title) + '</strong><br><span class="helper-text">' + (quiz.questionCount || quiz.questions.length) + ' questions configured</span></td>' +
      '<td>' + escapeHtml(quiz.courseTitle) + '</td>' +
      '<td>' + quiz.durationMinutes + ' min | ' + quiz.totalMarks + ' marks<br><span class="helper-text">Pass score: ' + (quiz.passScore || 50) + '%</span></td>' +
      '<td>' + (quiz.attemptsCount || 0) + '</td>' +
      '<td><span class="badge badge-' + quiz.status + '">' + escapeHtml(quiz.status.replace(/-/g, ' ')) + '</span></td>' +
      '<td class="table-actions"><button class="secondary" type="button" data-action="review">Review</button><button class="secondary" type="button" data-action="edit">Edit</button><button class="danger" type="button" data-action="delete">Delete</button></td>' +
      '</tr>';
  }).join('');

  Array.prototype.forEach.call(tbody.querySelectorAll('tr[data-quiz-id]'), function (row) {
    row.querySelectorAll('button[data-action]').forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.stopPropagation();
        var action = button.getAttribute('data-action');
        var quizId = row.getAttribute('data-quiz-id');
        if (action === 'review') reviewQuiz(quizId);
        if (action === 'edit') editQuiz(quizId);
        if (action === 'delete') deleteQuizRecord(quizId);
      });
    });
    row.addEventListener('click', function () {
      reviewQuiz(row.getAttribute('data-quiz-id'));
    });
  });
}

function reviewQuiz(quizId) {
  var quiz = AdminLMS.getQuizzes().find(function (item) { return item.id === quizId; });
  if (!quiz || !window.AdminUI) return;

  AdminUI.openModal({
    title: quiz.title,
    subtitle: quiz.courseTitle + ' | ' + quiz.questions.length + ' question(s)',
    content:
      '<div class="record-summary-grid">' +
        summaryCard('Course', quiz.courseTitle) +
        summaryCard('Duration', quiz.durationMinutes + ' min') +
        summaryCard('Pass Score', (quiz.passScore || 50) + '%') +
        summaryCard('Attempts', String(quiz.attemptsCount || 0)) +
      '</div>' +
      '<div class="record-detail-section"><h4>Instructions</h4><div class="record-detail-list"><div>' + escapeHtml(Array.isArray(quiz.instructions) ? quiz.instructions.join(' | ') : (quiz.instructions || 'No instructions added.')) + '</div></div></div>' +
      '<div class="record-detail-section"><h4>Question Preview</h4><div class="record-detail-list">' + quiz.questions.slice(0, 5).map(function (question, index) {
        return '<div>' + escapeHtml((index + 1) + '. ' + question.prompt) + '</div>';
      }).join('') + '</div></div>' +
      '<div class="record-detail-section"><h4>Student Reflection</h4><div class="record-detail-list"><div>' + escapeHtml(quiz.referenceName || (quiz.referencePath ? 'Reference file attached for quiz setup.' : 'No reference file attached.')) + '</div></div></div>' +
      '<div class="action-row">' +
        '<button type="button" class="btn btn-primary" onclick="editQuiz(\'' + escapeJs(quiz.id) + '\'); if (window.AdminUI) AdminUI.closeModal();">Edit Quiz</button>' +
        '<button type="button" class="btn btn-secondary" onclick="window.location.href=\'../quiz.html?course=' + encodeURIComponent(quiz.courseId) + '\'">Open Student Quiz</button>' +
        '<button type="button" class="btn btn-danger" onclick="deleteQuizRecord(\'' + escapeJs(quiz.id) + '\')">Delete Quiz</button>' +
      '</div>'
  });
}

function editQuiz(quizId) {
  var quiz = AdminLMS.getQuizzes().find(function (item) { return item.id === quizId; });
  if (!quiz) return;
  document.getElementById('quizId').value = quiz.id;
  document.getElementById('quizTitle').value = quiz.title;
  document.getElementById('quizCourse').value = quiz.courseId;
  document.getElementById('quizDuration').value = quiz.durationMinutes;
  document.getElementById('quizPassScore').value = quiz.passScore || 50;
  document.getElementById('quizStatus').value = quiz.status || 'active';
  document.getElementById('quizInstructions').value = Array.isArray(quiz.instructions) ? quiz.instructions.join('\n') : (quiz.instructions || '');
  setFileMetaState('quizReferenceFile', 'quizReferenceMeta', quiz.referencePath || '', quiz.referenceName || '', 'Optional reference sheet or instructions file for the quiz setup.');
  quizQuestions = quiz.questions.map(function (question) {
    return {
      prompt: question.prompt,
      options: question.options.slice(),
      correctOption: question.correctOption,
      explanation: question.explanation || ''
    };
  });
  renderQuestionEditors();
}

function resetQuizForm() {
  document.getElementById('quizForm').reset();
  document.getElementById('quizId').value = '';
  setFileMetaState('quizReferenceFile', 'quizReferenceMeta', '', '', 'Optional reference sheet or instructions file for the quiz setup.');
  quizQuestions = [];
  addQuestionEditor();
}

function deleteQuizRecord(quizId) {
  if (!confirm('Delete this quiz from the admin workspace?')) return;
  AdminLMS.deleteQuiz(quizId);
  refreshQuizzes();
  resetQuizForm();
  if (window.AdminUI) AdminUI.closeModal();
}

function bindFileMeta(inputId, metaId, emptyMessage) {
  var input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('change', function () {
    var file = input.files && input.files[0];
    setFileMetaState(inputId, metaId, '', file ? file.name : '', emptyMessage);
  });
}

async function resolveFileAsset(inputId) {
  var input = document.getElementById(inputId);
  if (!input) return { path: '', name: '' };
  var file = input.files && input.files[0];
  if (file && window.AdminUI && AdminUI.readFileAsDataUrl) {
    var upload = await AdminUI.readFileAsDataUrl(file);
    return { path: upload.dataUrl, name: upload.name };
  }
  return { path: input.dataset.current || '', name: input.dataset.name || '' };
}

function setFileMetaState(inputId, metaId, currentPath, currentName, message) {
  var input = document.getElementById(inputId);
  var meta = document.getElementById(metaId);
  if (!input || !meta) return;
  input.value = '';
  input.dataset.current = currentPath || '';
  input.dataset.name = currentName || '';
  meta.textContent = currentName ? ('Current file: ' + currentName + '. Choose a new file to replace it.') : message;
}

function summaryCard(label, value) {
  return '<div class="record-summary-card"><strong>' + escapeHtml(label) + '</strong><span>' + escapeHtml(value) + '</span></div>';
}

function escapeHtml(value) {
  return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeJs(value) {
  return String(value || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
