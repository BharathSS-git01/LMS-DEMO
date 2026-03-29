var adminProjects = [];

document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  fillCourseOptions();
  bindProjectEvents();
  refreshProjects();
});

function bindProjectEvents() {
  document.getElementById('projectForm').addEventListener('submit', function (event) {
    event.preventDefault();
    AdminLMS.saveProject({
      id: document.getElementById('projectId').value,
      title: document.getElementById('projectTitle').value.trim(),
      courseId: document.getElementById('projectCourse').value,
      deadline: document.getElementById('projectDeadline').value,
      subtitle: document.getElementById('projectSubtitle').value.trim(),
      description: document.getElementById('projectDescription').value.trim(),
      objectives: document.getElementById('projectObjectives').value.trim(),
      requirements: document.getElementById('projectRequirements').value.trim(),
      tools: splitCommaValues(document.getElementById('projectTools').value.trim()).join('\n'),
      expectedOutcome: document.getElementById('projectExpectedOutcome').value.trim(),
      difficulty: document.getElementById('projectDifficulty').value
    });
    refreshProjects();
    resetProjectForm();
  });

  document.getElementById('projectReset').onclick = resetProjectForm;
  document.getElementById('projectSearch').addEventListener('input', applyProjectFilters);
  document.getElementById('projectDifficultyFilter').addEventListener('change', applyProjectFilters);
}

function fillCourseOptions() {
  var select = document.getElementById('projectCourse');
  select.innerHTML = '<option value="">Select Course</option>';
  AdminLMS.getCourseOptions().forEach(function (course) {
    select.innerHTML += '<option value="' + course.id + '">' + course.title + '</option>';
  });
}

function refreshProjects() {
  adminProjects = AdminLMS.getProjects();
  applyProjectFilters();
}

function applyProjectFilters() {
  var query = document.getElementById('projectSearch').value.trim().toLowerCase();
  var difficulty = document.getElementById('projectDifficultyFilter').value;

  var filtered = adminProjects.filter(function (project) {
    var searchable = [project.title, project.courseTitle, project.description, project.subtitle].join(' ').toLowerCase();
    return searchable.indexOf(query) >= 0 && (difficulty === 'all' || project.difficulty === difficulty);
  });

  renderProjects(filtered);
}

function renderProjects(projects) {
  var tbody = document.getElementById('projectsTable');
  tbody.innerHTML = '';

  if (!projects.length) {
    tbody.innerHTML = '<tr><td colspan="5"><div class="empty-state">No projects match the current filters.</div></td></tr>';
    return;
  }

  projects.forEach(function (project) {
    var requirements = Array.isArray(project.requirements) ? project.requirements.length : String(project.requirements || '').split(/\r?\n/).filter(Boolean).length;
    tbody.innerHTML += '<tr>' +
      '<td><strong>' + escapeHtml(project.title) + '</strong><br><span class="helper-text">' + escapeHtml(project.description) + '</span><br><span class="helper-text">' + escapeHtml(project.difficulty || 'Intermediate') + '</span></td>' +
      '<td>' + escapeHtml(project.courseTitle || project.courseId) + '</td>' +
      '<td>' + escapeHtml(project.deadline) + '</td>' +
      '<td>' + requirements + ' deliverable(s)<br><span class="helper-text">' + escapeHtml((project.expectedOutcome || '').slice(0, 90)) + '</span></td>' +
      '<td class="table-actions"><button class="secondary" onclick="editProject(\'' + project.id + '\')">Edit</button><button class="secondary" onclick="duplicateProjectRecord(\'' + project.id + '\')">Duplicate</button><button class="danger" onclick="deleteProjectRecord(\'' + project.id + '\')">Delete</button></td>' +
      '</tr>';
  });
}

function editProject(projectId) {
  var project = AdminLMS.getProjects().find(function (item) { return item.id === projectId; });
  if (!project) return;
  document.getElementById('projectId').value = project.id;
  document.getElementById('projectTitle').value = project.title;
  document.getElementById('projectCourse').value = project.courseId;
  document.getElementById('projectDeadline').value = project.deadline;
  document.getElementById('projectSubtitle').value = project.subtitle || '';
  document.getElementById('projectTools').value = Array.isArray(project.tools) ? project.tools.join(', ') : (project.tools || '');
  document.getElementById('projectDifficulty').value = project.difficulty || 'Intermediate';
  document.getElementById('projectDescription').value = project.description || '';
  document.getElementById('projectObjectives').value = Array.isArray(project.objectives) ? project.objectives.join('\n') : project.objectives || '';
  document.getElementById('projectRequirements').value = Array.isArray(project.requirements) ? project.requirements.join('\n') : project.requirements || '';
  document.getElementById('projectExpectedOutcome').value = project.expectedOutcome || '';
}

function duplicateProjectRecord(projectId) {
  var project = AdminLMS.getProjects().find(function (item) { return item.id === projectId; });
  if (!project) return;
  AdminLMS.saveProject({
    id: project.id + '-copy',
    title: project.title + ' Copy',
    courseId: project.courseId,
    deadline: project.deadline,
    subtitle: project.subtitle,
    description: project.description,
    objectives: Array.isArray(project.objectives) ? project.objectives.join('\n') : project.objectives,
    requirements: Array.isArray(project.requirements) ? project.requirements.join('\n') : project.requirements,
    tools: Array.isArray(project.tools) ? project.tools.join('\n') : project.tools,
    expectedOutcome: project.expectedOutcome,
    difficulty: project.difficulty
  });
  refreshProjects();
}

function resetProjectForm() {
  document.getElementById('projectForm').reset();
  document.getElementById('projectId').value = '';
}

function deleteProjectRecord(projectId) {
  if (!confirm('Delete this project from the admin workspace?')) return;
  AdminLMS.deleteProject(projectId);
  refreshProjects();
  resetProjectForm();
}

function splitCommaValues(value) {
  return String(value || '').split(',').map(function (item) {
    return item.trim();
  }).filter(Boolean);
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
