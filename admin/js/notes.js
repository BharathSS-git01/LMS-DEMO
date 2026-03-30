var adminNotes = [];

function resolveMediaUrl(path) {
  if (window.LMSMedia && typeof window.LMSMedia.resolveMediaUrl === 'function') {
    return window.LMSMedia.resolveMediaUrl(path);
  }

  return path || '';
}

document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  fillCourseOptions();
  fillModuleOptions();
  bindNoteEvents();
  refreshNotes();
});

function bindNoteEvents() {
  document.getElementById('noteCourse').addEventListener('change', fillModuleOptions);
  document.getElementById('noteForm').addEventListener('submit', saveNoteRecord);
  document.getElementById('noteReset').onclick = resetNoteForm;
  document.getElementById('noteSearch').addEventListener('input', applyNoteFilters);
  document.getElementById('noteCategoryFilter').addEventListener('change', applyNoteFilters);
  bindFileMeta('noteResourceFile', 'noteResourceMeta', 'Upload PDF, study material, or academic note file for students.');
}

async function saveNoteRecord(event) {
  event.preventDefault();
  var resourceAsset = await resolveFileAsset('noteResourceFile');

  AdminLMS.saveNote({
    id: document.getElementById('noteId').value,
    title: document.getElementById('noteTitle').value.trim(),
    courseId: document.getElementById('noteCourse').value,
    moduleId: document.getElementById('noteModule').value,
    moduleTitle: getSelectedText('noteModule') || 'General Module',
    type: document.getElementById('noteType').value,
    category: document.getElementById('noteType').value,
    summary: document.getElementById('noteSummary').value.trim(),
    description: document.getElementById('noteSummary').value.trim(),
    content: document.getElementById('noteContent').value.trim(),
    resourcePath: resourceAsset.path,
    resourceName: resourceAsset.name
  });

  refreshNotes();
  resetNoteForm();
}

function fillCourseOptions() {
  var select = document.getElementById('noteCourse');
  select.innerHTML = '<option value="">Select Course</option>';
  AdminLMS.getCourseOptions().forEach(function (course) {
    select.innerHTML += '<option value="' + course.id + '">' + course.title + '</option>';
  });
}

function fillModuleOptions() {
  var courseId = document.getElementById('noteCourse').value;
  var select = document.getElementById('noteModule');
  select.innerHTML = '<option value="">General Module</option>';
  AdminLMS.getModuleOptions(courseId).forEach(function (module) {
    select.innerHTML += '<option value="' + module.id + '">' + module.title + '</option>';
  });
}

function refreshNotes() {
  adminNotes = AdminLMS.getNotes();
  fillCategoryFilter(adminNotes);
  applyNoteFilters();
}

function fillCategoryFilter(notes) {
  var filter = document.getElementById('noteCategoryFilter');
  var selected = filter.value || 'all';
  var categories = {};
  filter.innerHTML = '<option value="all">All Categories</option>';
  notes.forEach(function (note) {
    var category = note.category || note.type || 'Academic Reference';
    if (!categories[category]) {
      categories[category] = true;
      filter.innerHTML += '<option value="' + escapeHtml(category) + '">' + escapeHtml(category) + '</option>';
    }
  });
  filter.value = categories[selected] ? selected : 'all';
}

function applyNoteFilters() {
  var query = document.getElementById('noteSearch').value.trim().toLowerCase();
  var category = document.getElementById('noteCategoryFilter').value;

  var filtered = adminNotes.filter(function (note) {
    var searchable = [note.title, note.courseTitle, note.category, note.summary, note.moduleTitle].join(' ').toLowerCase();
    return searchable.indexOf(query) >= 0 && (category === 'all' || (note.category || note.type) === category);
  });

  renderNotes(filtered);
}

function renderNotes(notes) {
  var tbody = document.getElementById('notesTable');
  if (!tbody) return;

  if (!notes.length) {
    tbody.innerHTML = '<tr><td colspan="5"><div class="empty-state">No notes match the current filters.</div></td></tr>';
    return;
  }

  tbody.innerHTML = notes.map(function (note) {
    return '<tr data-clickable="true" data-note-id="' + escapeHtml(note.id) + '">' +
      '<td><strong>' + escapeHtml(note.title) + '</strong><br><span class="helper-text">' + escapeHtml(note.summary || note.description) + '</span></td>' +
      '<td>' + escapeHtml(note.courseTitle || note.courseId) + '</td>' +
      '<td>' + escapeHtml(note.moduleTitle || 'General Module') + '</td>' +
      '<td>' + escapeHtml(note.type) + '<br><span class="helper-text">' + escapeHtml(note.resourceName || (note.resourcePath ? 'Resource attached' : 'No file attached')) + '</span></td>' +
      '<td class="table-actions"><button class="secondary" type="button" data-action="review">Review</button><button class="secondary" type="button" data-action="edit">Edit</button><button class="danger" type="button" data-action="delete">Delete</button></td>' +
      '</tr>';
  }).join('');

  Array.prototype.forEach.call(tbody.querySelectorAll('tr[data-note-id]'), function (row) {
    row.querySelectorAll('button[data-action]').forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.stopPropagation();
        var action = button.getAttribute('data-action');
        var noteId = row.getAttribute('data-note-id');
        if (action === 'review') reviewNote(noteId);
        if (action === 'edit') editNote(noteId);
        if (action === 'delete') deleteNoteRecord(noteId);
      });
    });
    row.addEventListener('click', function () {
      reviewNote(row.getAttribute('data-note-id'));
    });
  });
}

function reviewNote(noteId) {
  var note = AdminLMS.getNotes().find(function (item) { return item.id === noteId; });
  if (!note || !window.AdminUI) return;

  var resourceLink = note.resourcePath
    ? '<a class="inline-link" href="' + escapeHtml(resolveMediaUrl(note.resourcePath)) + '" target="_blank" rel="noopener">Open uploaded resource</a>'
    : '<span class="helper-text">No file uploaded.</span>';

  AdminUI.openModal({
    title: note.title,
    subtitle: note.courseTitle + ' | ' + (note.moduleTitle || 'General Module'),
    content:
      '<div class="record-summary-grid">' +
        summaryCard('Type', note.type || 'Study Notes') +
        summaryCard('Course', note.courseTitle) +
        summaryCard('Module', note.moduleTitle || 'General Module') +
        summaryCard('Resource', note.resourceName || (note.resourcePath ? 'Uploaded file' : 'No file')) +
      '</div>' +
      '<div class="record-detail-section"><h4>Summary</h4><div class="record-detail-list"><div>' + escapeHtml(note.summary || note.description || '') + '</div></div></div>' +
      '<div class="record-detail-section"><h4>Study Content</h4><div class="record-detail-list"><div>' + escapeHtml(note.content || '') + '</div></div></div>' +
      '<div class="record-detail-section"><h4>Student Reflection</h4><div class="record-detail-list"><div>Published notes appear in the student notes page for this course and module.</div><div>' + resourceLink + '</div></div></div>' +
      '<div class="action-row">' +
        '<button type="button" class="btn btn-primary" onclick="editNote(\'' + escapeJs(note.id) + '\'); if (window.AdminUI) AdminUI.closeModal();">Edit Note</button>' +
        '<button type="button" class="btn btn-secondary" onclick="window.location.href=\'../notes.html?course=' + encodeURIComponent(note.courseId) + '\'">Open Student Notes</button>' +
        '<button type="button" class="btn btn-danger" onclick="deleteNoteRecord(\'' + escapeJs(note.id) + '\')">Delete Note</button>' +
      '</div>'
  });
}

function editNote(noteId) {
  var note = AdminLMS.getNotes().find(function (item) { return item.id === noteId; });
  if (!note) return;
  document.getElementById('noteId').value = note.id;
  document.getElementById('noteTitle').value = note.title;
  document.getElementById('noteCourse').value = note.courseId;
  fillModuleOptions();
  document.getElementById('noteModule').value = note.moduleId || '';
  document.getElementById('noteType').value = note.type;
  document.getElementById('noteSummary').value = note.summary || '';
  document.getElementById('noteContent').value = note.content || '';
  setFileMetaState('noteResourceFile', 'noteResourceMeta', note.resourcePath || '', note.resourceName || '', 'Upload PDF, study material, or academic note file for students.');
}

function resetNoteForm() {
  document.getElementById('noteForm').reset();
  document.getElementById('noteId').value = '';
  fillModuleOptions();
  setFileMetaState('noteResourceFile', 'noteResourceMeta', '', '', 'Upload PDF, study material, or academic note file for students.');
}

function getSelectedText(id) {
  var select = document.getElementById(id);
  if (!select) return '';
  return select.options[select.selectedIndex] ? select.options[select.selectedIndex].text : '';
}

function deleteNoteRecord(noteId) {
  if (!confirm('Delete this note from the admin workspace?')) return;
  AdminLMS.deleteNote(noteId);
  refreshNotes();
  resetNoteForm();
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
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeJs(value) {
  return String(value || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
