var adminStudents = [];
var selectedStudentId = null;
var studentModalState = {
  isOpen: false,
  lastFocusedElement: null
};

document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  bindStudentEvents();
  refreshStudents();
});

function bindStudentEvents() {
  document.getElementById('studentSearch').addEventListener('input', applyStudentFilters);
  document.getElementById('studentStatusFilter').addEventListener('change', applyStudentFilters);
  document.getElementById('studentDepartmentFilter').addEventListener('change', applyStudentFilters);
  document.getElementById('studentSort').addEventListener('change', applyStudentFilters);
  document.getElementById('closeStudentModal').addEventListener('click', closeStudentModal);
  document.getElementById('studentModalOverlay').addEventListener('click', closeStudentModal);
  document.getElementById('studentDetailModal').addEventListener('click', function (event) {
    if (event.target.id === 'studentDetailModal') {
      closeStudentModal();
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && studentModalState.isOpen) {
      closeStudentModal();
    }
  });
}

function refreshStudents() {
  adminStudents = AdminLMS.getStudents();
  fillDepartmentFilter(adminStudents);
  renderStudentStats(adminStudents);
  applyStudentFilters();

  if (selectedStudentId && AdminLMS.getStudentById(selectedStudentId)) {
    showStudentDetail(selectedStudentId);
    return;
  }

  if (adminStudents[0]) {
    showStudentDetail(adminStudents[0].id);
  }
}

function fillDepartmentFilter(students) {
  var filter = document.getElementById('studentDepartmentFilter');
  var selected = filter.value || 'all';
  var departments = {};

  filter.innerHTML = '<option value="all">All Departments</option>';
  students.forEach(function (student) {
    if (student.department && !departments[student.department]) {
      departments[student.department] = true;
      filter.innerHTML += '<option value="' + escapeHtml(student.department) + '">' + escapeHtml(student.department) + '</option>';
    }
  });

  filter.value = departments[selected] ? selected : 'all';
}

function applyStudentFilters() {
  var query = document.getElementById('studentSearch').value.trim().toLowerCase();
  var status = document.getElementById('studentStatusFilter').value;
  var department = document.getElementById('studentDepartmentFilter').value;
  var sort = document.getElementById('studentSort').value;

  var filtered = adminStudents.filter(function (student) {
    var courseTitles = student.enrolledCourses.map(function (course) { return course.title; }).join(' ').toLowerCase();
    return (
      (
        student.name.toLowerCase().indexOf(query) >= 0 ||
        student.email.toLowerCase().indexOf(query) >= 0 ||
        student.department.toLowerCase().indexOf(query) >= 0 ||
        courseTitles.indexOf(query) >= 0 ||
        String(student.registerNo || '').toLowerCase().indexOf(query) >= 0
      ) &&
      (status === 'all' || student.status === status) &&
      (department === 'all' || student.department === department)
    );
  });

  filtered.sort(function (a, b) {
    if (sort === 'progress') return (b.averageProgress || 0) - (a.averageProgress || 0);
    if (sort === 'completed') return (b.completedCourses || 0) - (a.completedCourses || 0);
    if (sort === 'certificates') return (b.certificatesCount || 0) - (a.certificatesCount || 0);
    return a.name.localeCompare(b.name);
  });

  renderStudents(filtered);
}

function renderStudentStats(students) {
  var stats = document.getElementById('studentStats');
  if (!stats) return;

  var activeCount = students.filter(function (student) { return student.status === 'active'; }).length;
  var completedPathCount = students.filter(function (student) { return student.completedCourses > 0; }).length;
  var certificateCount = students.reduce(function (sum, student) { return sum + (student.certificatesCount || 0); }, 0);
  var interventionCount = students.filter(function (student) { return student.needsAttention; }).length;

  stats.innerHTML = [
    ['Students', students.length, 'Real student accounts connected to the LMS data store'],
    ['Active', activeCount, 'Currently active learners with live roster visibility'],
    ['Completed Paths', completedPathCount, 'Students who have finished at least one course'],
    ['Certificates', certificateCount, 'Issued certificates linked to student records'],
    ['Needs Attention', interventionCount, 'Learners below 50% progress in at least one course']
  ].map(function (item) {
    return '<div class="stat-card"><h3>' + item[0] + '</h3><p>' + item[1] + '</p><span>' + item[2] + '</span></div>';
  }).join('');
}

function renderStudents(students) {
  var table = document.getElementById('studentsTable');
  if (!table) return;

  if (!students.length) {
    table.innerHTML = '<tr><td colspan="6"><div class="empty-state">No students match the current search.</div></td></tr>';
    return;
  }

  table.innerHTML = students.map(function (student) {
    var coursesLabel = student.enrolledCourses.length
      ? student.enrolledCourses.map(function (course) { return escapeHtml(course.title); }).join(', ')
      : 'No enrollments';
    var progressLabel = student.enrolledCourses.length
      ? student.enrolledCourses.map(function (course) {
          return escapeHtml(course.title) + ': ' + course.progress + '%';
        }).join('<br>')
      : 'No progress yet';

    return '<tr class="student-row" data-student-id="' + escapeHtml(student.id) + '">' +
      '<td><strong>' + escapeHtml(student.name) + '</strong><br><span class="helper-text">' + escapeHtml(student.email) + '</span><br><span class="helper-text">' + escapeHtml(student.registerNo || student.profileSummary || '') + '</span></td>' +
      '<td>' + escapeHtml(student.department) + '<br><span class="helper-text">' + escapeHtml(student.semester) + '</span></td>' +
      '<td>' + coursesLabel + '</td>' +
      '<td>' + progressLabel + '<br><span class="helper-text">' + student.certificatesCount + ' certificate(s)</span></td>' +
      '<td><span class="badge badge-' + escapeHtml(student.status) + '">' + escapeHtml(student.status) + '</span></td>' +
      '<td class="table-actions">' +
        '<button class="secondary" type="button" data-action="view">View</button>' +
        '<button class="secondary" type="button" data-action="toggle">' + (student.status === 'active' ? 'Pause' : 'Activate') + '</button>' +
        '<button class="danger" type="button" data-action="delete">Remove</button>' +
      '</td>' +
    '</tr>';
  }).join('');

  Array.prototype.forEach.call(table.querySelectorAll('.student-row'), function (row) {
    row.querySelectorAll('button[data-action]').forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.stopPropagation();
        var studentId = row.getAttribute('data-student-id');
        var action = button.getAttribute('data-action');
        if (action === 'view') openStudentModal(studentId);
        if (action === 'toggle') toggleStudentStatus(studentId);
        if (action === 'delete') deleteStudentRecord(studentId);
      });
    });
    row.addEventListener('click', function (event) {
      if (event.target.closest('button')) return;
      openStudentModal(row.getAttribute('data-student-id'));
    });
  });
}

function showStudentDetail(studentId) {
  var student = AdminLMS.getStudentById(studentId);
  var panel = document.getElementById('studentDetailPanel');
  if (!student || !panel) return;

  selectedStudentId = studentId;
  panel.className = 'student-detail-summary';
  panel.innerHTML =
    '<div class="detail-grid">' +
      detailBlock('Full Name', student.name) +
      detailBlock('Email', student.email) +
      detailBlock('Role', student.role || 'student') +
      detailBlock('Joined', student.joinedOn || 'Not available') +
      detailBlock('Enrollments', student.enrolledCount) +
      detailBlock('Completed', student.completedCourses) +
      detailBlock('Certificates', student.certificatesCount) +
      detailBlock('Progress', student.averageProgress + '% average') +
      detailBlock('Latest Quiz', student.latestQuiz ? student.latestQuiz.title : 'No completed quiz yet') +
      detailBlock('Latest Assignment', student.latestAssignment ? student.latestAssignment.title : 'No submitted assignment yet') +
      detailBlock('Current Focus', student.activeCourse ? student.activeCourse.title : 'No active course') +
      detailBlock('Support Flag', student.needsAttention ? 'Needs attention' : 'On track') +
    '</div>' +
    '<div class="student-summary-section">' +
      '<strong>Recent Course Activity</strong>' +
      '<div class="helper-text student-activity-list">' +
        (student.recentCourseActivity && student.recentCourseActivity.length
          ? student.recentCourseActivity.map(function (activity) {
              return '<div>' + escapeHtml(activity.title) + ' | ' + escapeHtml(activity.description) + '</div>';
            }).join('')
          : 'No recent course activity is available yet.') +
      '</div>' +
    '</div>' +
    '<div class="student-summary-actions">' +
      '<button class="btn btn-primary" type="button" data-student-summary-action="open">Open Full Record</button>' +
      '<button class="btn btn-secondary" type="button" data-student-summary-action="toggle">' + (student.status === 'active' ? 'Pause Student' : 'Activate Student') + '</button>' +
    '</div>';

  Array.prototype.forEach.call(panel.querySelectorAll('button[data-student-summary-action]'), function (button) {
    button.addEventListener('click', function () {
      var action = button.getAttribute('data-student-summary-action');
      if (action === 'open') openStudentModal(student.id);
      if (action === 'toggle') toggleStudentStatus(student.id);
    });
  });
}

function openStudentModal(studentId) {
  var student = AdminLMS.getStudentById(studentId);
  var modal = document.getElementById('studentDetailModal');
  var overlay = document.getElementById('studentModalOverlay');
  var title = document.getElementById('studentModalTitle');
  var subtitle = document.getElementById('studentModalSubtitle');
  var body = document.getElementById('studentModalBody');
  if (!student || !modal || !overlay || !body) return;

  closeStudentModal();
  studentModalState.lastFocusedElement = document.activeElement;
  studentModalState.isOpen = true;
  selectedStudentId = studentId;
  showStudentDetail(studentId);

  title.textContent = student.name;
  subtitle.textContent = student.email + (student.registerNo ? ' | ' + student.registerNo : '');
  body.innerHTML = buildStudentModalContent(student);
  bindStudentModalActions(student.id);

  overlay.hidden = false;
  overlay.setAttribute('aria-hidden', 'false');
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('student-modal-open');
}

function closeStudentModal() {
  var modal = document.getElementById('studentDetailModal');
  var overlay = document.getElementById('studentModalOverlay');
  var body = document.getElementById('studentModalBody');
  if (!modal || !overlay) return;
  studentModalState.isOpen = false;
  overlay.hidden = true;
  overlay.setAttribute('aria-hidden', 'true');
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  if (body) {
    body.innerHTML = '';
  }
  document.body.classList.remove('student-modal-open');
  if (studentModalState.lastFocusedElement && typeof studentModalState.lastFocusedElement.focus === 'function') {
    try {
      studentModalState.lastFocusedElement.focus();
    } catch (error) {}
  }
  studentModalState.lastFocusedElement = null;
}

function buildStudentModalContent(student) {
  var certificates = AdminLMS.getCertificates().filter(function (certificate) {
    return certificate.studentId === student.id || certificate.studentEmail === student.email || certificate.studentName === student.name;
  });

  return '' +
    '<section class="student-modal-grid">' +
      '<div class="student-modal-section">' +
        '<h4>Basic Info</h4>' +
        detailList([
          ['Full Name', student.name],
          ['Email', student.email],
          ['Role', student.role || 'student'],
          ['Joined Date', student.joinedOn || 'Not available'],
          ['Department', student.department],
          ['Semester', student.semester],
          ['Institution', student.institution || 'Vidhya Vaaradhi LMS']
        ]) +
      '</div>' +
      '<div class="student-modal-section">' +
        '<h4>Academic Info</h4>' +
        detailList([
          ['Enrolled Courses', student.enrolledCount],
          ['Completed Courses', student.completedCourses],
          ['Certificates', student.certificatesCount],
          ['Average Progress', student.averageProgress + '%'],
          ['Current Focus', student.activeCourse ? student.activeCourse.title : 'No active course']
        ]) +
      '</div>' +
    '</section>' +
    '<section class="student-modal-section">' +
      '<h4>Enrollments & Progress</h4>' +
      (student.enrolledCourses.length
        ? '<div class="student-course-list">' + student.enrolledCourses.map(function (course) {
            return '<article class="student-course-card">' +
              '<strong>' + escapeHtml(course.title) + '</strong>' +
              '<span>' + escapeHtml(course.status) + '</span>' +
              '<p>' + course.progress + '% complete • ' + course.completedLessons + '/' + course.totalLessons + ' lessons</p>' +
              '<small>' + escapeHtml(course.lastAccessedLesson ? ('Last lesson: ' + course.lastAccessedLesson.title) : 'No lesson activity yet') + '</small>' +
            '</article>';
          }).join('') + '</div>'
        : '<div class="empty-state">This student has not enrolled in any course yet.</div>') +
    '</section>' +
    '<section class="student-modal-grid">' +
      '<div class="student-modal-section">' +
        '<h4>Learning Activity</h4>' +
        detailList([
          ['Latest Quiz', student.latestQuiz ? (student.latestQuiz.title + ' | ' + student.latestQuiz.courseTitle) : 'No completed quiz yet'],
          ['Latest Assignment', student.latestAssignment ? (student.latestAssignment.title + ' | ' + student.latestAssignment.courseTitle) : 'No submitted assignment yet'],
          ['Latest Project', student.latestProject ? (student.latestProject.title + ' | ' + student.latestProject.courseTitle) : 'No submitted project yet']
        ]) +
        '<div class="student-inline-list">' +
          (student.recentCourseActivity && student.recentCourseActivity.length
            ? student.recentCourseActivity.map(function (activity) {
                return '<div>' + escapeHtml(activity.title) + ' • ' + escapeHtml(activity.description) + '</div>';
              }).join('')
            : 'No recent course activity is available yet.') +
        '</div>' +
      '</div>' +
      '<div class="student-modal-section">' +
        '<h4>Certificates</h4>' +
        (certificates.length
          ? '<div class="student-inline-list">' + certificates.map(function (certificate) {
              return '<div>' + escapeHtml(certificate.courseTitle) + ' • ' + escapeHtml(certificate.status) + ' • ' + escapeHtml(certificate.issueDate || 'Date unavailable') + '</div>';
            }).join('') + '</div>'
          : '<div class="empty-state">No certificate has been issued for this student yet.</div>') +
      '</div>' +
    '</section>' +
    '<section class="student-modal-actions">' +
      '<button class="btn btn-primary" type="button" data-student-modal-action="focus">View Full Record</button>' +
      '<button class="btn btn-secondary" type="button" data-student-modal-action="edit">Edit Student</button>' +
      '<button class="btn btn-secondary" type="button" data-student-modal-action="enrollments">View Enrollments</button>' +
      '<button class="btn btn-secondary" type="button" data-student-modal-action="certificates">View Certificates</button>' +
      '<button class="btn btn-secondary" type="button" data-student-modal-action="reset">Reset Progress</button>' +
      '<button class="btn btn-danger" type="button" data-student-modal-action="delete">Remove Student</button>' +
      '<button class="btn btn-secondary" type="button" data-student-modal-action="close">Close</button>' +
    '</section>';
}

function bindStudentModalActions(studentId) {
  var body = document.getElementById('studentModalBody');
  if (!body) return;

  Array.prototype.forEach.call(body.querySelectorAll('button[data-student-modal-action]'), function (button) {
    button.addEventListener('click', function () {
      var action = button.getAttribute('data-student-modal-action');
      if (action === 'focus') focusStudentRecord(studentId);
      if (action === 'edit') openStudentEditModal(studentId);
      if (action === 'enrollments') goToStudentLinkedPage('courses.html', studentId);
      if (action === 'certificates') goToStudentLinkedPage('certificates.html', studentId);
      if (action === 'reset') resetStudentRecordProgress(studentId);
      if (action === 'delete') deleteStudentRecord(studentId);
      if (action === 'close') closeStudentModal();
    });
  });
}

function openStudentEditModal(studentId) {
  var student = AdminLMS.getStudentById(studentId);
  var title = document.getElementById('studentModalTitle');
  var subtitle = document.getElementById('studentModalSubtitle');
  var body = document.getElementById('studentModalBody');
  if (!student || !body) return;

  if (title) title.textContent = 'Edit ' + student.name;
  if (subtitle) subtitle.textContent = 'Update live LMS student details';

  body.innerHTML =
    '<form id="studentEditForm" class="form-stack">' +
      '<input type="hidden" id="studentEditId" value="' + escapeHtml(student.id) + '">' +
      '<div class="student-modal-grid">' +
        '<div class="student-modal-section">' +
          '<h4>Identity</h4>' +
          '<div class="form-grid">' +
            '<input id="studentEditName" type="text" value="' + escapeHtml(student.name) + '" placeholder="Full Name" required>' +
            '<input id="studentEditEmail" type="email" value="' + escapeHtml(student.email) + '" placeholder="Email" disabled>' +
            '<input id="studentEditPhone" type="text" value="' + escapeHtml(student.phone || '') + '" placeholder="Phone">' +
            '<input id="studentEditRegisterNo" type="text" value="' + escapeHtml(student.registerNo || '') + '" placeholder="Register Number">' +
          '</div>' +
        '</div>' +
        '<div class="student-modal-section">' +
          '<h4>Academic Setup</h4>' +
          '<div class="form-grid">' +
            '<input id="studentEditDepartment" type="text" value="' + escapeHtml(student.department || '') + '" placeholder="Department">' +
            '<input id="studentEditSemester" type="text" value="' + escapeHtml(student.semester || '') + '" placeholder="Semester">' +
            '<input id="studentEditInstitution" type="text" value="' + escapeHtml(student.institution || '') + '" placeholder="Institution">' +
            '<input id="studentEditJoinedOn" type="date" value="' + escapeHtml(student.joinedOn || '') + '">' +
            '<select id="studentEditStatus">' +
              '<option value="active"' + (student.status === 'active' ? ' selected' : '') + '>Active</option>' +
              '<option value="inactive"' + (student.status === 'inactive' ? ' selected' : '') + '>Inactive</option>' +
            '</select>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<section class="student-modal-actions">' +
        '<button class="btn btn-primary" type="submit">Save Student</button>' +
        '<button class="btn btn-secondary" type="button" id="studentEditCancel">Cancel</button>' +
      '</section>' +
    '</form>';

  document.getElementById('studentEditForm').addEventListener('submit', saveStudentEdit);
  document.getElementById('studentEditCancel').addEventListener('click', function () {
    openStudentModal(studentId);
  });
}

function saveStudentEdit(event) {
  event.preventDefault();
  var studentId = document.getElementById('studentEditId').value;
  var updated = AdminLMS.updateStudent(studentId, {
    name: document.getElementById('studentEditName').value.trim(),
    phone: document.getElementById('studentEditPhone').value.trim(),
    registerNo: document.getElementById('studentEditRegisterNo').value.trim(),
    department: document.getElementById('studentEditDepartment').value.trim(),
    semester: document.getElementById('studentEditSemester').value.trim(),
    institution: document.getElementById('studentEditInstitution').value.trim(),
    joinedOn: document.getElementById('studentEditJoinedOn').value,
    status: document.getElementById('studentEditStatus').value
  });

  if (!updated) return;
  refreshStudents();
  openStudentModal(studentId);
}

function focusStudentRecord(studentId) {
  showStudentDetail(studentId);
  closeStudentModal();
}

function goToStudentLinkedPage(page, studentId) {
  window.location.href = page + '?student=' + encodeURIComponent(studentId);
}

function toggleStudentStatus(studentId) {
  var student = AdminLMS.getStudentById(studentId);
  if (!student) return;
  AdminLMS.updateStudentStatus(studentId, student.status === 'active' ? 'inactive' : 'active');
  refreshStudents();
  showStudentDetail(studentId);
}

function resetStudentRecordProgress(studentId) {
  if (!confirm('Reset this student progress across the LMS while keeping the account?')) return;
  if (AdminLMS.resetStudentProgress) {
    AdminLMS.resetStudentProgress(studentId);
    refreshStudents();
    openStudentModal(studentId);
  }
}

function deleteStudentRecord(studentId) {
  if (!confirm('Remove this student from the LMS roster and local progress store?')) return;
  AdminLMS.deleteStudent(studentId);
  closeStudentModal();
  selectedStudentId = null;
  refreshStudents();

  var panel = document.getElementById('studentDetailPanel');
  if (panel && !adminStudents.length) {
    panel.className = 'empty-state';
    panel.innerHTML = 'No student records remain in the admin workspace.';
  }
}

function detailBlock(label, value) {
  return '<div><strong>' + escapeHtml(label) + '</strong><br><span class="helper-text">' + escapeHtml(value) + '</span></div>';
}

function detailList(items) {
  return '<div class="student-detail-list">' + items.map(function (item) {
    return '<div><strong>' + escapeHtml(item[0]) + '</strong><span>' + escapeHtml(item[1]) + '</span></div>';
  }).join('') + '</div>';
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
