document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  var reports = AdminLMS.getReports();
  var stats = document.getElementById('reportStats');

  [
    ['Total Students', reports.overview.totalStudents, 'Learners tracked in admin records'],
    ['Total Courses', reports.overview.totalCourses, 'Courses currently under LMS control'],
    ['Active Enrollments', reports.overview.activeEnrollments, 'Current student-course enrollments'],
    ['Completed Courses', reports.overview.completedCourses, 'Completed learning journeys'],
    ['Certificates Issued', reports.overview.certificatesIssued, 'Visible certificates available to students'],
    ['Pending Assignments', reports.overview.pendingAssignments, 'Assignments still awaiting learner action'],
    ['Quiz Activity', reports.overview.quizActivity, 'Total quiz attempts recorded']
  ].forEach(function (item) {
    stats.innerHTML += '<div class="stat-card"><h3>' + item[0] + '</h3><p>' + item[1] + '</p><span>' + item[2] + '</span></div>';
  });

  fillTable('coursePopularityTable', reports.coursePopularity.map(function (item) {
    return '<tr><td>' + item.courseTitle + '</td><td>' + item.enrolled + '</td><td>' + item.completed + '</td><td>' + item.completionRate + '%</td></tr>';
  }));

  fillTable('quizParticipationTable', reports.quizParticipation.map(function (item) {
    return '<tr><td>' + item.title + '</td><td>' + item.courseTitle + '</td><td>' + item.attemptsCount + '</td><td><span class="badge badge-' + item.status + '">' + item.status + '</span></td></tr>';
  }));

  fillTable('completionSummaryTable', reports.completionSummary.map(function (item) {
    return '<tr><td>' + item.studentName + '</td><td>' + item.enrolledCount + '</td><td>' + item.completedCourses + '</td><td>' + item.averageProgress + '%</td></tr>';
  }));

  fillTable('studentActivityTable', reports.studentActivity.map(function (item) {
    return '<tr><td>' + item.name + '</td><td><span class="badge badge-' + item.status + '">' + item.status + '</span></td><td>' + item.activeCourse + '</td><td>' + (item.needsAttention ? 'Needs follow-up' : 'Healthy') + '</td></tr>';
  }));
});

function fillTable(id, rows) {
  var tbody = document.getElementById(id);
  if (!tbody) return;
  tbody.innerHTML = rows.length ? rows.join('') : '<tr><td colspan="4"><div class="empty-state">No report data available yet.</div></td></tr>';
}
