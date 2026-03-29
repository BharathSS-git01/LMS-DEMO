var adminLessons = [];

document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  fillCourseOptions();
  fillModuleOptions();
  bindLessonEvents();
  refreshLessons();
});

function bindLessonEvents() {
  document.getElementById('lessonCourse').addEventListener('change', fillModuleOptions);
  document.getElementById('lessonForm').addEventListener('submit', saveLessonRecord);
  document.getElementById('lessonReset').onclick = resetLessonForm;
  document.getElementById('lessonSearch').addEventListener('input', applyLessonFilters);
  document.getElementById('lessonSort').addEventListener('change', applyLessonFilters);
  bindImageUploadPreview('lessonImageFile', 'lessonImagePreview', 'lessonImageMeta', 'Optional lesson cover for the student course player.');
  bindVideoUploadPreview('lessonVideoFile', 'lessonVideoPreview', 'lessonVideoMeta', 'Upload local lesson media for the student course player.');
  bindFileMeta('lessonResourceFile', 'lessonResourceMeta', 'Optional supporting file or resource linked to this lesson.');
}

async function saveLessonRecord(event) {
  event.preventDefault();

  var customModule = document.getElementById('lessonCustomModule').value.trim();
  var selectedModuleTitle = getSelectedText('lessonModule');
  var moduleId = document.getElementById('lessonModule').value || (customModule ? slugify(customModule) : null);
  var imageAsset = await resolveFileAsset('lessonImageFile');
  var videoAsset = await resolveFileAsset('lessonVideoFile');
  var resourceAsset = await resolveFileAsset('lessonResourceFile');

  AdminLMS.saveLesson({
    id: document.getElementById('lessonId').value,
    title: document.getElementById('lessonTitle').value.trim(),
    courseId: document.getElementById('lessonCourse').value,
    moduleId: moduleId,
    moduleTitle: customModule || selectedModuleTitle || 'Learning Module',
    position: Number(document.getElementById('lessonPosition').value),
    duration: document.getElementById('lessonDuration').value.trim(),
    image: imageAsset.path,
    imageName: imageAsset.name,
    videoUrl: videoAsset.path,
    videoName: videoAsset.name,
    resourcePath: resourceAsset.path,
    resourceName: resourceAsset.name,
    mediaType: videoAsset.path ? 'Video' : 'Reading',
    description: document.getElementById('lessonDescription').value.trim(),
    content: document.getElementById('lessonContent').value.trim()
  });

  refreshLessons();
  resetLessonForm();
}

function fillCourseOptions() {
  var select = document.getElementById('lessonCourse');
  select.innerHTML = '<option value="">Select Course</option>';
  AdminLMS.getCourseOptions().forEach(function (course) {
    select.innerHTML += '<option value="' + course.id + '">' + course.title + '</option>';
  });

  var params = new URLSearchParams(window.location.search);
  var courseId = params.get('course');
  if (courseId) {
    select.value = courseId;
  }
}

function fillModuleOptions() {
  var courseId = document.getElementById('lessonCourse').value;
  var select = document.getElementById('lessonModule');
  select.innerHTML = '<option value="">Create / Use Default Module</option>';
  AdminLMS.getModuleOptions(courseId).forEach(function (module) {
    select.innerHTML += '<option value="' + module.id + '">' + module.title + '</option>';
  });
}

function refreshLessons() {
  adminLessons = AdminLMS.getLessons();
  applyLessonFilters();
}

function applyLessonFilters() {
  var query = document.getElementById('lessonSearch').value.trim().toLowerCase();
  var sort = document.getElementById('lessonSort').value;

  var filtered = adminLessons.filter(function (lesson) {
    return [lesson.title, lesson.courseTitle, lesson.moduleTitle, lesson.description].join(' ').toLowerCase().indexOf(query) >= 0;
  });

  filtered.sort(function (a, b) {
    if (sort === 'course') return String(a.courseTitle || '').localeCompare(String(b.courseTitle || ''));
    if (sort === 'module') return String(a.moduleTitle || '').localeCompare(String(b.moduleTitle || ''));
    if (sort === 'order') return (a.position || 0) - (b.position || 0);
    return String(b.id || '').localeCompare(String(a.id || ''));
  });

  renderLessons(filtered);
}

function renderLessons(lessons) {
  var tbody = document.getElementById('lessonsTable');
  if (!tbody) return;

  if (!lessons.length) {
    tbody.innerHTML = '<tr><td colspan="5"><div class="empty-state">No lessons match the current filters.</div></td></tr>';
    return;
  }

  tbody.innerHTML = lessons.map(function (lesson) {
    return '<tr data-clickable="true" data-lesson-id="' + escapeHtml(lesson.id) + '">' +
      '<td><strong>' + escapeHtml(lesson.title) + '</strong><br><span class="helper-text">' + escapeHtml(lesson.description || '') + '</span><br><span class="helper-text">' + escapeHtml(lesson.duration || '') + '</span></td>' +
      '<td>' + escapeHtml(lesson.courseTitle || lesson.courseId) + '</td>' +
      '<td>' + escapeHtml(lesson.moduleTitle || 'Learning Module') + '</td>' +
      '<td>' + lesson.position + '<br><span class="helper-text">' + (lesson.videoUrl ? 'Video ready' : lesson.resourcePath ? 'Resource attached' : 'Text lesson') + '</span></td>' +
      '<td class="table-actions"><button class="secondary" type="button" data-action="review">Review</button><button class="secondary" type="button" data-action="edit">Edit</button><button class="danger" type="button" data-action="delete">Delete</button></td>' +
      '</tr>';
  }).join('');

  Array.prototype.forEach.call(tbody.querySelectorAll('tr[data-lesson-id]'), function (row) {
    row.querySelectorAll('button[data-action]').forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.stopPropagation();
        var action = button.getAttribute('data-action');
        var lessonId = row.getAttribute('data-lesson-id');
        if (action === 'review') reviewLesson(lessonId);
        if (action === 'edit') editLesson(lessonId);
        if (action === 'delete') deleteLessonRecord(lessonId);
      });
    });
    row.addEventListener('click', function () {
      reviewLesson(row.getAttribute('data-lesson-id'));
    });
  });
}

function reviewLesson(lessonId) {
  var lesson = AdminLMS.getLessons().find(function (item) { return item.id === lessonId; });
  if (!lesson || !window.AdminUI) return;

  AdminUI.openModal({
    title: lesson.title,
    subtitle: lesson.courseTitle + ' | ' + lesson.moduleTitle,
    content:
      '<div class="record-summary-grid">' +
        summaryCard('Course', lesson.courseTitle) +
        summaryCard('Module', lesson.moduleTitle || 'Learning Module') +
        summaryCard('Order', String(lesson.position || 1)) +
        summaryCard('Duration', lesson.duration || 'Not set') +
      '</div>' +
      '<div class="record-detail-section"><h4>Lesson Summary</h4><div class="record-detail-list"><div>' + escapeHtml(lesson.description || 'No summary added yet.') + '</div></div></div>' +
      '<div class="record-detail-section"><h4>Lesson Content</h4><div class="record-detail-list"><div>' + escapeHtml(lesson.content || 'No lesson content yet.') + '</div></div></div>' +
      '<div class="record-detail-section"><h4>Media Reflection</h4><div class="record-detail-list">' +
        '<div>' + escapeHtml(lesson.videoUrl ? 'Student player will use the uploaded lesson video.' : 'Student player will use the lesson or course image preview.') + '</div>' +
        '<div>' + escapeHtml(lesson.resourcePath ? 'A lesson resource is attached for supporting study material.' : 'No supporting file is attached.') + '</div>' +
      '</div></div>' +
      '<div class="action-row">' +
        '<button type="button" class="btn btn-primary" onclick="editLesson(\'' + escapeJs(lesson.id) + '\'); if (window.AdminUI) AdminUI.closeModal();">Edit Lesson</button>' +
        '<button type="button" class="btn btn-secondary" onclick="window.location.href=\'../course-player.html?course=' + encodeURIComponent(lesson.courseId) + '\'">Open Course Player</button>' +
        '<button type="button" class="btn btn-danger" onclick="deleteLessonRecord(\'' + escapeJs(lesson.id) + '\')">Delete Lesson</button>' +
      '</div>'
  });
}

function editLesson(lessonId) {
  var lesson = AdminLMS.getLessons().find(function (item) { return item.id === lessonId; });
  if (!lesson) return;

  document.getElementById('lessonId').value = lesson.id;
  document.getElementById('lessonTitle').value = lesson.title;
  document.getElementById('lessonCourse').value = lesson.courseId;
  fillModuleOptions();
  document.getElementById('lessonModule').value = lesson.moduleId || '';
  document.getElementById('lessonCustomModule').value = !lesson.moduleId ? (lesson.moduleTitle || '') : '';
  document.getElementById('lessonPosition').value = lesson.position;
  document.getElementById('lessonDuration').value = lesson.duration || '';
  document.getElementById('lessonDescription').value = lesson.description || '';
  document.getElementById('lessonContent').value = lesson.content || '';

  setImageUploadState('lessonImageFile', 'lessonImagePreview', 'lessonImageMeta', lesson.image || '', 'Optional lesson cover for the student course player.');
  setVideoUploadState('lessonVideoFile', 'lessonVideoPreview', 'lessonVideoMeta', lesson.videoUrl || '', 'Upload local lesson media for the student course player.');
  setFileMetaState('lessonResourceFile', 'lessonResourceMeta', lesson.resourcePath || '', lesson.resourceName || '', 'Optional supporting file or resource linked to this lesson.');
}

function resetLessonForm() {
  document.getElementById('lessonForm').reset();
  document.getElementById('lessonId').value = '';
  fillModuleOptions();
  clearUploadState('lessonImageFile', 'lessonImagePreview', 'lessonImageMeta', 'Optional lesson cover for the student course player.');
  clearVideoState('lessonVideoFile', 'lessonVideoPreview', 'lessonVideoMeta', 'Upload local lesson media for the student course player.');
  setFileMetaState('lessonResourceFile', 'lessonResourceMeta', '', '', 'Optional supporting file or resource linked to this lesson.');
}

function getSelectedText(id) {
  var select = document.getElementById(id);
  if (!select) return '';
  return select.options[select.selectedIndex] ? select.options[select.selectedIndex].text : '';
}

function deleteLessonRecord(lessonId) {
  if (!confirm('Delete this lesson from the admin workspace?')) return;
  AdminLMS.deleteLesson(lessonId);
  refreshLessons();
  resetLessonForm();
  if (window.AdminUI) AdminUI.closeModal();
}

function bindImageUploadPreview(inputId, previewId, metaId, emptyMessage) {
  var input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('change', function () {
    var file = input.files && input.files[0];
    var preview = document.getElementById(previewId);
    var meta = document.getElementById(metaId);
    if (!file || !preview || !meta) {
      clearUploadState(inputId, previewId, metaId, emptyMessage);
      return;
    }
    meta.textContent = file.name + ' selected';
    preview.hidden = false;
    preview.src = URL.createObjectURL(file);
  });
}

function bindVideoUploadPreview(inputId, previewId, metaId, emptyMessage) {
  var input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('change', function () {
    var file = input.files && input.files[0];
    var preview = document.getElementById(previewId);
    var meta = document.getElementById(metaId);
    if (!file || !preview || !meta) {
      clearVideoState(inputId, previewId, metaId, emptyMessage);
      return;
    }
    meta.textContent = file.name + ' selected';
    preview.hidden = false;
    preview.src = URL.createObjectURL(file);
  });
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

function setImageUploadState(inputId, previewId, metaId, path, message) {
  var input = document.getElementById(inputId);
  var preview = document.getElementById(previewId);
  var meta = document.getElementById(metaId);
  if (!input || !preview || !meta) return;
  input.value = '';
  input.dataset.current = path || '';
  meta.textContent = path ? 'Current image connected. Choose a new file to replace it.' : message;
  if (path) {
    preview.hidden = false;
    preview.src = path;
  } else {
    preview.hidden = true;
    preview.removeAttribute('src');
  }
}

function clearUploadState(inputId, previewId, metaId, message) {
  setImageUploadState(inputId, previewId, metaId, '', message);
}

function setVideoUploadState(inputId, previewId, metaId, path, message) {
  var input = document.getElementById(inputId);
  var preview = document.getElementById(previewId);
  var meta = document.getElementById(metaId);
  if (!input || !preview || !meta) return;
  input.value = '';
  input.dataset.current = path || '';
  meta.textContent = path ? 'Current video connected. Choose a new file to replace it.' : message;
  if (path) {
    preview.hidden = false;
    preview.src = path;
  } else {
    preview.hidden = true;
    preview.removeAttribute('src');
  }
}

function clearVideoState(inputId, previewId, metaId, message) {
  setVideoUploadState(inputId, previewId, metaId, '', message);
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

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || ('module-' + Date.now());
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeJs(value) {
  return String(value || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
