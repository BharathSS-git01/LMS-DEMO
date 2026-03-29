var adminAssignments = [];

document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  fillCourseOptions();
  bindAssignmentEvents();
  refreshAssignments();
});

function bindAssignmentEvents() {
  document.getElementById('assignmentForm').addEventListener('submit', saveAssignmentRecord);
  document.getElementById('assignmentReset').onclick = resetAssignmentForm;
  document.getElementById('assignmentSearch').addEventListener('input', applyAssignmentFilters);
  document.getElementById('assignmentVisibilityFilter').addEventListener('change', applyAssignmentFilters);
  bindFileMeta('assignmentReferenceFile', 'assignmentReferenceMeta', 'Optional brief, rubric, or supporting file shown in the student assignment flow.');
}

async function saveAssignmentRecord(event) {
  event.preventDefault();
  var courseId = document.getElementById('assignmentCourse').value;
  var course = AdminLMS.getCourseOptions().find(function (item) { return item.id === courseId; });
  var existing = AdminLMS.getAssignments().find(function (item) {
    return item.id === document.getElementById('assignmentId').value;
  }) || {};
  var referenceAsset = await resolveFileAsset('assignmentReferenceFile');

  AdminLMS.saveAssignment({
    id: document.getElementById('assignmentId').value,
    title: document.getElementById('assignmentTitle').value.trim(),
    courseId: courseId,
    courseTitle: course ? course.title : '',
    dueDate: document.getElementById('assignmentDueDate').value,
    assignmentType: 'Assignment',
    instructions: document.getElementById('assignmentInstructions').value.trim(),
    deliverables: document.getElementById('assignmentDeliverables').value.trim(),
    expectations: document.getElementById('assignmentDeliverables').value.trim(),
    marks: Number(document.getElementById('assignmentMarks').value) || 25,
    referencePath: referenceAsset.path,
    referenceName: referenceAsset.name,
    visibility: document.getElementById('assignmentVisibility').value,
    status: existing.submissionCount > 0 ? 'submissions-open' : 'pending-submissions',
    submissionCount: existing.submissionCount || 0,
    submissionOverview: existing.submissionOverview || ''
  });

  refreshAssignments();
  resetAssignmentForm();
}

function fillCourseOptions() {
  var select = document.getElementById('assignmentCourse');
  select.innerHTML = '<option value="">Select Course</option>';
  AdminLMS.getCourseOptions().forEach(function (course) {
    select.innerHTML += '<option value="' + course.id + '">' + course.title + '</option>';
  });
}

function refreshAssignments() {
  adminAssignments = AdminLMS.getAssignments();
  applyAssignmentFilters();
}

function applyAssignmentFilters() {
  var query = document.getElementById('assignmentSearch').value.trim().toLowerCase();
  var visibility = document.getElementById('assignmentVisibilityFilter').value;

  var filtered = adminAssignments.filter(function (assignment) {
    var searchable = [assignment.title, assignment.courseTitle, assignment.instructions].join(' ').toLowerCase();
    return searchable.indexOf(query) >= 0 && (visibility === 'all' || assignment.visibility === visibility);
  });

  renderAssignments(filtered);
}

function renderAssignments(assignments) {
  var tbody = document.getElementById('assignmentsTable');
  if (!tbody) return;

  if (!assignments.length) {
    tbody.innerHTML = '<tr><td colspan="5"><div class="empty-state">No assignments match the current filters.</div></td></tr>';
    return;
  }

  tbody.innerHTML = assignments.map(function (assignment) {
    return '<tr data-clickable="true" data-assignment-id="' + escapeHtml(assignment.id) + '">' +
      '<td><strong>' + escapeHtml(assignment.title) + '</strong><br><span class="helper-text">' + (assignment.marks || 25) + ' marks</span><br><span class="helper-text">' + escapeHtml(assignment.instructions) + '</span></td>' +
      '<td>' + escapeHtml(assignment.courseTitle) + '<br><span class="helper-text">' + escapeHtml(assignment.visibility || 'visible') + '</span></td>' +
      '<td>' + escapeHtml(assignment.dueDate) + '</td>' +
      '<td><span class="badge badge-' + assignment.status + '">' + (assignment.submissionCount || 0) + ' submission(s)</span><br><span class="helper-text">' + escapeHtml(assignment.referenceName || (assignment.referencePath ? 'Reference attached' : 'No reference file')) + '</span></td>' +
      '<td class="table-actions"><button class="secondary" type="button" data-action="review">Review</button><button class="secondary" type="button" data-action="edit">Edit</button><button class="danger" type="button" data-action="delete">Delete</button></td>' +
      '</tr>';
  }).join('');

  Array.prototype.forEach.call(tbody.querySelectorAll('tr[data-assignment-id]'), function (row) {
    row.querySelectorAll('button[data-action]').forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.stopPropagation();
        var action = button.getAttribute('data-action');
        var assignmentId = row.getAttribute('data-assignment-id');
        if (action === 'review') reviewAssignment(assignmentId);
        if (action === 'edit') editAssignment(assignmentId);
        if (action === 'delete') deleteAssignmentRecord(assignmentId);
      });
    });
    row.addEventListener('click', function () {
      reviewAssignment(row.getAttribute('data-assignment-id'));
    });
  });
}

function reviewAssignment(assignmentId) {
  var assignment = AdminLMS.getAssignments().find(function (item) { return item.id === assignmentId; });
  if (!assignment || !window.AdminUI) return;

  AdminUI.openModal({
    title: assignment.title,
    subtitle: assignment.courseTitle + ' | Due ' + assignment.dueDate,
    content:
      '<div class="record-summary-grid">' +
        summaryCard('Course', assignment.courseTitle) +
        summaryCard('Due Date', assignment.dueDate) +
        summaryCard('Marks', String(assignment.marks || 25)) +
        summaryCard('Submissions', String(assignment.submissionCount || 0)) +
      '</div>' +
      '<div class="record-detail-section"><h4>Instructions</h4><div class="record-detail-list"><div>' + escapeHtml(assignment.instructions || '') + '</div></div></div>' +
      '<div class="record-detail-section"><h4>Expected Submission</h4><div class="record-detail-list"><div>' + escapeHtml(Array.isArray(assignment.deliverables) ? assignment.deliverables.join(', ') : (assignment.deliverables || assignment.expectations || 'No deliverables listed.')) + '</div></div></div>' +
      '<div class="record-detail-section"><h4>Student Reflection</h4><div class="record-detail-list"><div>' + escapeHtml(assignment.referenceName || (assignment.referencePath ? 'Reference file is attached for learners.' : 'No reference file attached.')) + '</div></div></div>' +
      '<div class="action-row">' +
        '<button type="button" class="btn btn-primary" onclick="editAssignment(\'' + escapeJs(assignment.id) + '\'); if (window.AdminUI) AdminUI.closeModal();">Edit Assignment</button>' +
        '<button type="button" class="btn btn-secondary" onclick="window.location.href=\'../assignments.html?course=' + encodeURIComponent(assignment.courseId) + '\'">Open Student Flow</button>' +
        '<button type="button" class="btn btn-danger" onclick="deleteAssignmentRecord(\'' + escapeJs(assignment.id) + '\')">Delete Assignment</button>' +
      '</div>'
  });
}

function editAssignment(assignmentId) {
  var assignment = AdminLMS.getAssignments().find(function (item) { return item.id === assignmentId; });
  if (!assignment) return;
  document.getElementById('assignmentId').value = assignment.id;
  document.getElementById('assignmentTitle').value = assignment.title;
  document.getElementById('assignmentCourse').value = assignment.courseId;
  document.getElementById('assignmentDueDate').value = assignment.dueDate;
  document.getElementById('assignmentMarks').value = assignment.marks || '';
  document.getElementById('assignmentVisibility').value = assignment.visibility || 'visible';
  document.getElementById('assignmentInstructions').value = assignment.instructions;
  document.getElementById('assignmentDeliverables').value = Array.isArray(assignment.deliverables) ? assignment.deliverables.join('\n') : (assignment.deliverables || assignment.expectations || '');
  setFileMetaState('assignmentReferenceFile', 'assignmentReferenceMeta', assignment.referencePath || '', assignment.referenceName || '', 'Optional brief, rubric, or supporting file shown in the student assignment flow.');
}

function resetAssignmentForm() {
  document.getElementById('assignmentForm').reset();
  document.getElementById('assignmentId').value = '';
  setFileMetaState('assignmentReferenceFile', 'assignmentReferenceMeta', '', '', 'Optional brief, rubric, or supporting file shown in the student assignment flow.');
}

function deleteAssignmentRecord(assignmentId) {
  if (!confirm('Delete this assignment from the admin workspace?')) return;
  AdminLMS.deleteAssignment(assignmentId);
  refreshAssignments();
  resetAssignmentForm();
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
