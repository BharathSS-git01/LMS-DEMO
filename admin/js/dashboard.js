document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  var summary = AdminLMS.getDashboardSummary();
  var reports = AdminLMS.getReports();
  var students = AdminLMS.getStudents();
  var admins = AdminLMS.getAdmins();
  var courses = AdminLMS.getCourses();
  var assignments = AdminLMS.getAssignments();
  var quizzes = AdminLMS.getQuizzes();
  var lessons = AdminLMS.getLessons();
  var notes = AdminLMS.getNotes();
  var projects = AdminLMS.getProjects();
  var certificates = AdminLMS.getCertificates();
  var announcements = AdminLMS.getAnnouncements();
  var statsGrid = document.getElementById('statsGrid');
  var quickActions = document.getElementById('quickActions');
  var snapshotList = document.getElementById('snapshotList');
  var recentActivityFeed = document.getElementById('recentActivityFeed');
  var announcementBoard = document.getElementById('announcementBoard');
  var latestContentFeed = document.getElementById('latestContentFeed');
  var studentActivitySnapshot = document.getElementById('studentActivitySnapshot');
  var coursesOverview = document.getElementById('coursesOverview');
  var assessmentQueue = document.getElementById('assessmentQueue');
  var analyticsPreview = document.getElementById('analyticsPreview');
  var adminControlCard = document.getElementById('adminControlCard');
  var priorityBoard = document.getElementById('priorityBoard');
  var topCourseBoard = document.getElementById('topCourseBoard');
  var completionWatch = document.getElementById('completionWatch');
  var dashboardLiveStamp = document.getElementById('dashboardLiveStamp');
  var refreshDashboardBtn = document.getElementById('refreshDashboardBtn');

  if (refreshDashboardBtn) {
    refreshDashboardBtn.addEventListener('click', function () {
      window.location.reload();
    });
  }

  renderAdminControlCard(adminControlCard, summary, admins);
  renderDashboardLiveStamp(dashboardLiveStamp);
  renderAnalyticsCards(statsGrid, summary, {
    courses: courses,
    assignments: assignments,
    quizzes: quizzes,
    lessons: lessons,
    notes: notes,
    projects: projects,
    certificates: certificates,
    announcements: announcements,
    students: students
  });
  renderQuickActions(quickActions);
  renderOperationalSnapshot(snapshotList, summary, students, assignments, quizzes, certificates);
  renderPriorityBoard(priorityBoard, summary, courses, students, assignments, quizzes, certificates, announcements);
  renderRecentActivity(recentActivityFeed, summary.recentActivity || []);
  renderAnnouncements(announcementBoard, announcements);
  renderLatestContent(latestContentFeed, courses, lessons, notes, assignments, quizzes, projects, announcements);
  renderStudentSnapshot(studentActivitySnapshot, students);
  renderTopCourseBoard(topCourseBoard, reports.coursePopularity || []);
  renderCompletionWatch(completionWatch, students);
  renderCourseOverview(coursesOverview, courses, reports.coursePopularity || []);
  renderAssessmentQueue(assessmentQueue, assignments, quizzes, projects);
  renderAnalyticsPreview(analyticsPreview, reports.coursePopularity || []);
});

function renderDashboardLiveStamp(container) {
  if (!container) return;
  container.textContent = 'Live LMS snapshot | ' + formatDateTime(new Date().toISOString());
}

function renderAdminControlCard(container, summary, admins) {
  if (!container) return;
  var currentAdmin = AdminLMS.getCurrentAdmin ? AdminLMS.getCurrentAdmin() : null;
  var lastLogin = currentAdmin && currentAdmin.loggedInAt ? formatDateTime(currentAdmin.loggedInAt) : 'Active session';

  container.innerHTML =
    '<div class="admin-focus-eyebrow">Admin Workspace</div>' +
    '<h3>' + escapeHtml(currentAdmin ? currentAdmin.name : 'Admin Session') + '</h3>' +
    '<p>' + escapeHtml(currentAdmin && currentAdmin.email ? currentAdmin.email : 'Control center is connected to the live LMS store.') + '</p>' +
    '<div class="admin-focus-meta">' +
      '<span>' + summary.totalAdmins + ' admin account(s)</span>' +
      '<span>' + summary.totalStudents + ' student record(s)</span>' +
      '<span>' + lastLogin + '</span>' +
    '</div>';
}

function renderAnalyticsCards(container, summary, datasets) {
  if (!container) return;

  var cards = [
    {
      key: 'students',
      title: 'Students',
      value: summary.totalStudents,
      note: summary.atRiskStudents + ' need attention',
      meta: summary.activeEnrollments + ' active enrollments',
      description: 'Live learner roster from registered users and student progress state.'
    },
    {
      key: 'courses',
      title: 'Courses',
      value: summary.totalCourses,
      note: datasets.courses.filter(function (course) { return course.status === 'published'; }).length + ' published',
      meta: datasets.courses.reduce(function (sum, course) {
        return sum + course.lessonsCount + course.notesCount + course.assignmentsCount + course.quizzesCount + course.projectsCount;
      }, 0) + ' linked content items',
      description: 'Managed catalog with lesson, note, assignment, quiz, and project depth.'
    },
    {
      key: 'lessons',
      title: 'Lessons',
      value: summary.lessonsCount,
      note: datasets.lessons.slice(0, 1).map(function (lesson) { return lesson.title; })[0] || 'No lessons yet',
      meta: 'Structured across ' + summary.totalCourses + ' course(s)',
      description: 'Actual lesson count pulled from published and admin-created modules.'
    },
    {
      key: 'notes',
      title: 'Notes',
      value: summary.notesCount,
      note: datasets.notes.filter(function (note) { return note.resourcePath; }).length + ' with resources',
      meta: datasets.notes.slice(0, 1).map(function (note) { return note.title; })[0] || 'No notes yet',
      description: 'Course notes and reference materials visible in the LMS.'
    },
    {
      key: 'assignments',
      title: 'Assignments',
      value: datasets.assignments.length,
      note: summary.pendingAssignments + ' awaiting submissions',
      meta: datasets.assignments.filter(function (assignment) { return assignment.submissionCount > 0; }).length + ' with activity',
      description: 'Assignment workflows tied to real course records and learner submissions.'
    },
    {
      key: 'quizzes',
      title: 'Quizzes',
      value: datasets.quizzes.length,
      note: summary.quizActivity + ' attempt(s) tracked',
      meta: datasets.quizzes.filter(function (quiz) { return quiz.status === 'draft'; }).length + ' drafts',
      description: 'Quiz banks, completion activity, and review-ready checks from live data.'
    },
    {
      key: 'projects',
      title: 'Projects',
      value: datasets.projects.length,
      note: datasets.students.reduce(function (sum, student) { return sum + (student.projectActivityCount || 0); }, 0) + ' learner submission path(s)',
      meta: datasets.projects.slice(0, 1).map(function (project) { return project.title; })[0] || 'No projects yet',
      description: 'Practical workspaces connected to actual courses and student progress.'
    },
    {
      key: 'certificates',
      title: 'Certificates',
      value: summary.issuedCertificates,
      note: datasets.students.filter(function (student) { return student.certificatesCount > 0; }).length + ' learner(s) certified',
      meta: datasets.certificates.slice(0, 1).map(function (certificate) { return certificate.courseTitle; })[0] || 'No certificates yet',
      description: 'Issued certificate records derived from completed LMS course journeys.'
    },
    {
      key: 'announcements',
      title: 'Announcements',
      value: summary.announcementsCount,
      note: datasets.announcements.slice(0, 1).map(function (announcement) { return announcement.category; })[0] || 'No notices posted',
      meta: datasets.announcements.slice(0, 1).map(function (announcement) { return announcement.title; })[0] || 'Publish the first announcement',
      description: 'Admin-posted notices from the shared announcement board.'
    },
    {
      key: 'reports',
      title: 'Reports & Analytics',
      value: summary.reportsInsightsCount,
      note: summary.atRiskStudents + ' intervention signal(s)',
      meta: (AdminLMS.getReports().coursePopularity || []).filter(function (course) { return course.enrolled > 0; }).length + ' course trend(s)',
      description: 'Insights generated from live enrollments, completion, and assessment data.'
    },
    {
      key: 'admins',
      title: 'Admins',
      value: summary.totalAdmins,
      note: admins.slice(0, 1).map(function (admin) { return admin.name; })[0] || 'No admin accounts',
      meta: admins.filter(function (admin) { return admin.isDefault; }).length + ' protected default account(s)',
      description: 'Administrative accounts stored in the frontend LMS admin system.'
    }
  ];

  container.innerHTML = cards.map(function (card) {
    return '' +
      '<article class="stat-card dashboard-stat dashboard-stat-' + card.key + '">' +
        '<div class="dashboard-stat-head">' +
          '<h3>' + escapeHtml(card.title) + '</h3>' +
          '<span class="dashboard-stat-meta">' + escapeHtml(card.meta) + '</span>' +
        '</div>' +
        '<p>' + card.value + '</p>' +
        '<strong class="dashboard-stat-note">' + escapeHtml(card.note) + '</strong>' +
        '<span>' + escapeHtml(card.description) + '</span>' +
      '</article>';
  }).join('');
}

function renderQuickActions(container) {
  if (!container) return;
  container.innerHTML = AdminLMS.getQuickActions().map(function (action) {
    return '<a class="btn btn-primary quick-action-btn" href="' + action.href + '">' + escapeHtml(action.label) + '</a>';
  }).join('');
}

function renderOperationalSnapshot(container, summary, students, assignments, quizzes, certificates) {
  if (!container) return;

  var activeStudents = students.filter(function (student) { return student.status === 'active'; }).length;
  var completedLearners = students.filter(function (student) { return student.completedCourses > 0; }).length;
  var reviewReadyQuizzes = quizzes.filter(function (quiz) { return quiz.status === 'review-ready'; }).length;
  var submittedAssignments = assignments.filter(function (assignment) { return assignment.submissionCount > 0; }).length;

  container.innerHTML = [
    activeStudents + ' student account(s) are currently active in the LMS roster.',
    completedLearners + ' learner(s) have completed at least one course journey.',
    submittedAssignments + ' assignment workflow(s) already contain real learner submissions.',
    reviewReadyQuizzes + ' quiz record(s) are ready for review or follow-up.',
    certificates.length + ' certificate record(s) are available across all student profiles.',
    summary.atRiskStudents + ' learner(s) are below the 50% progress threshold.'
  ].map(function (item) {
    return '<li>' + escapeHtml(item) + '</li>';
  }).join('');
}

function renderPriorityBoard(container, summary, courses, students, assignments, quizzes, certificates, announcements) {
  if (!container) return;

  var draftCourses = courses.filter(function (course) { return course.status === 'draft'; }).length;
  var hiddenCertificates = certificates.filter(function (certificate) { return certificate.visible === false; }).length;
  var inactiveStudents = students.filter(function (student) { return student.status === 'inactive'; }).length;
  var quietAnnouncements = announcements.length ? announcements.filter(function (announcement) {
    return String(announcement.audience || '').toLowerCase().indexOf('student') === -1;
  }).length : 0;

  var priorities = [
    {
      tone: summary.atRiskStudents ? 'warning' : 'good',
      title: 'Learner Support',
      detail: summary.atRiskStudents
        ? (summary.atRiskStudents + ' student(s) are below 50% progress and may need follow-up.')
        : 'No student is currently flagged below the intervention threshold.'
    },
    {
      tone: summary.pendingAssignments ? 'warning' : 'good',
      title: 'Assignment Queue',
      detail: summary.pendingAssignments
        ? (summary.pendingAssignments + ' assignment(s) are still waiting for submissions.')
        : 'Assignment workflows are not showing pending submission pressure right now.'
    },
    {
      tone: draftCourses ? 'neutral' : 'good',
      title: 'Publishing Check',
      detail: draftCourses
        ? (draftCourses + ' course(s) are still saved as draft and not visible in the main catalog.')
        : 'All current courses are in published state.'
    },
    {
      tone: hiddenCertificates || inactiveStudents || quietAnnouncements ? 'neutral' : 'good',
      title: 'Admin Cleanup',
      detail: hiddenCertificates + ' hidden certificate(s), ' + inactiveStudents + ' inactive student record(s), and ' + quietAnnouncements + ' internal-only announcement(s) are still in admin control.'
    },
    {
      tone: quizzes.filter(function (quiz) { return quiz.status === 'draft'; }).length ? 'neutral' : 'good',
      title: 'Assessment Readiness',
      detail: quizzes.filter(function (quiz) { return quiz.status === 'draft'; }).length + ' quiz draft(s) remain outside the active learner flow.'
    }
  ];

  container.innerHTML = priorities.map(function (item) {
    return '<li class="dashboard-priority dashboard-priority-' + item.tone + '"><strong>' + escapeHtml(item.title) + '</strong><br><span class="helper-text">' + escapeHtml(item.detail) + '</span></li>';
  }).join('');
}

function renderRecentActivity(container, items) {
  if (!container) return;
  if (!items.length) {
    container.innerHTML = '<li class="empty-state">No recent admin-visible activity yet.</li>';
    return;
  }

  container.innerHTML = items.map(function (item) {
    return '<li><strong>' + escapeHtml(item.title) + '</strong><br><span class="helper-text">' + escapeHtml(item.description) + '</span><br><span class="helper-text">' + escapeHtml(item.meta) + '</span></li>';
  }).join('');
}

function renderAnnouncements(container, announcements) {
  if (!container) return;
  if (!announcements.length) {
    container.innerHTML = '<li class="empty-state">No announcements posted yet. Use the announcement module to publish academic notices.</li>';
    return;
  }

  container.innerHTML = announcements.slice(0, 4).map(function (announcement) {
    return '<li><strong>' + escapeHtml(announcement.title) + '</strong><br><span class="helper-text">' + escapeHtml(announcement.category) + ' | ' + escapeHtml(announcement.publishDate) + '</span><br><span class="helper-text">' + escapeHtml(announcement.content) + '</span></li>';
  }).join('');
}

function renderLatestContent(container, courses, lessons, notes, assignments, quizzes, projects, announcements) {
  if (!container) return;

  var contentItems = [];

  contentItems = contentItems
    .concat(courses.slice(0, 2).map(function (course) {
      return { label: 'Course', title: course.title, meta: course.category + ' | ' + course.status };
    }))
    .concat(lessons.slice(0, 2).map(function (lesson) {
      return { label: 'Lesson', title: lesson.title, meta: lesson.courseTitle + ' | ' + lesson.moduleTitle };
    }))
    .concat(notes.slice(0, 1).map(function (note) {
      return { label: 'Note', title: note.title, meta: note.courseTitle + ' | ' + note.category };
    }))
    .concat(assignments.slice(0, 1).map(function (assignment) {
      return { label: 'Assignment', title: assignment.title, meta: assignment.courseTitle + ' | ' + assignment.status };
    }))
    .concat(quizzes.slice(0, 1).map(function (quiz) {
      return { label: 'Quiz', title: quiz.title, meta: quiz.courseTitle + ' | ' + quiz.status };
    }))
    .concat(projects.slice(0, 1).map(function (project) {
      return { label: 'Project', title: project.title, meta: project.courseTitle + ' | ' + project.difficulty };
    }))
    .concat(announcements.slice(0, 1).map(function (announcement) {
      return { label: 'Announcement', title: announcement.title, meta: announcement.category + ' | ' + announcement.publishDate };
    }))
    .slice(0, 6);

  if (!contentItems.length) {
    container.innerHTML = '<li class="empty-state">Admin-created content will appear here as soon as courses, lessons, notes, or announcements are added.</li>';
    return;
  }

  container.innerHTML = contentItems.map(function (item) {
    return '<li><span class="content-type-pill">' + escapeHtml(item.label) + '</span><br><strong>' + escapeHtml(item.title) + '</strong><br><span class="helper-text">' + escapeHtml(item.meta) + '</span></li>';
  }).join('');
}

function renderStudentSnapshot(container, students) {
  if (!container) return;
  if (!students.length) {
    container.innerHTML = '<li class="empty-state">No student activity is available yet.</li>';
    return;
  }

  var ranked = students.slice().sort(function (a, b) {
    if (a.needsAttention !== b.needsAttention) return a.needsAttention ? -1 : 1;
    return (b.averageProgress || 0) - (a.averageProgress || 0);
  }).slice(0, 5);

  container.innerHTML = ranked.map(function (student) {
    var focus = student.activeCourse ? student.activeCourse.title + ' at ' + student.activeCourse.progress + '%' : 'No current enrollment';
    return '<li><strong>' + escapeHtml(student.name) + '</strong><br><span class="helper-text">' + escapeHtml(student.department) + ' | ' + escapeHtml(student.semester) + '</span><br><span class="helper-text">' + escapeHtml(focus) + '</span></li>';
  }).join('');
}

function renderTopCourseBoard(container, coursePopularity) {
  if (!container) return;
  if (!coursePopularity.length) {
    container.innerHTML = '<div class="empty-state">Top course trends will appear once students start enrolling.</div>';
    return;
  }

  var maxEnrolled = coursePopularity.reduce(function (max, item) {
    return Math.max(max, Number(item.enrolled) || 0);
  }, 0) || 1;

  container.innerHTML = coursePopularity.slice(0, 5).map(function (item) {
    var enrollmentWidth = Math.max(12, Math.round(((Number(item.enrolled) || 0) / maxEnrolled) * 100));
    return '' +
      '<article class="dashboard-progress-card">' +
        '<div class="dashboard-progress-head">' +
          '<strong>' + escapeHtml(item.courseTitle) + '</strong>' +
          '<span>' + item.enrolled + ' enrolled</span>' +
        '</div>' +
        '<div class="dashboard-progress-track"><span style="width:' + enrollmentWidth + '%"></span></div>' +
        '<p>' + item.completed + ' completed | ' + item.completionRate + '% completion rate</p>' +
      '</article>';
  }).join('');
}

function renderCompletionWatch(container, students) {
  if (!container) return;
  if (!students.length) {
    container.innerHTML = '<div class="empty-state">Student completion watch will appear once learner data is available.</div>';
    return;
  }

  var watchList = students.slice().sort(function (a, b) {
    if (a.needsAttention !== b.needsAttention) return a.needsAttention ? -1 : 1;
    return (a.averageProgress || 0) - (b.averageProgress || 0);
  }).slice(0, 5);

  container.innerHTML = watchList.map(function (student) {
    var progressWidth = Math.max(10, Number(student.averageProgress) || 0);
    return '' +
      '<article class="dashboard-progress-card">' +
        '<div class="dashboard-progress-head">' +
          '<strong>' + escapeHtml(student.name) + '</strong>' +
          '<span>' + escapeHtml(student.averageProgress + '% avg') + '</span>' +
        '</div>' +
        '<div class="dashboard-progress-track"><span style="width:' + progressWidth + '%"></span></div>' +
        '<p>' + escapeHtml((student.activeCourse ? student.activeCourse.title : 'No active course') + ' | ' + (student.needsAttention ? 'Needs attention' : 'On track')) + '</p>' +
      '</article>';
  }).join('');
}

function renderCourseOverview(container, courses, popularity) {
  if (!container) return;
  var popularityMap = {};
  popularity.forEach(function (item) {
    popularityMap[item.courseTitle] = item;
  });

  container.innerHTML = courses.slice(0, 6).map(function (course) {
    var analytics = popularityMap[course.title] || { enrolled: 0, completed: 0 };
    return '<tr>' +
      '<td>' + escapeHtml(course.title) + '<br><span class="helper-text">' + analytics.enrolled + ' enrolled | ' + analytics.completed + ' completed</span></td>' +
      '<td>' + escapeHtml(course.category) + '</td>' +
      '<td>' + escapeHtml(course.instructor) + '</td>' +
      '<td><span class="badge badge-' + escapeHtml(course.status) + '">' + escapeHtml(course.status) + '</span></td>' +
    '</tr>';
  }).join('');
}

function renderAssessmentQueue(container, assignments, quizzes, projects) {
  if (!container) return;

  var queueItems = assignments.slice().sort(function (a, b) {
    return String(a.dueDate || '').localeCompare(String(b.dueDate || ''));
  }).slice(0, 3).map(function (assignment) {
    return { name: assignment.title, course: assignment.courseTitle, state: assignment.status };
  }).concat(
    quizzes.slice(0, 2).map(function (quiz) {
      return { name: quiz.title, course: quiz.courseTitle, state: quiz.status };
    }),
    projects.slice(0, 1).map(function (project) {
      return { name: project.title, course: project.courseTitle, state: 'active' };
    })
  );

  if (!queueItems.length) {
    container.innerHTML = '<tr><td colspan="3"><div class="empty-state">No active assignments, quizzes, or projects are waiting in the queue.</div></td></tr>';
    return;
  }

  container.innerHTML = queueItems.map(function (item) {
    return '<tr><td>' + escapeHtml(item.name) + '</td><td>' + escapeHtml(item.course) + '</td><td><span class="badge badge-' + escapeHtml(item.state).replace(/\s+/g, '-') + '">' + escapeHtml(String(item.state).replace(/-/g, ' ')) + '</span></td></tr>';
  }).join('');
}

function renderAnalyticsPreview(container, coursePopularity) {
  if (!container) return;
  if (!coursePopularity.length) {
    container.innerHTML = '<tr><td colspan="4"><div class="empty-state">Analytics will appear once courses and enrollments are available.</div></td></tr>';
    return;
  }

  container.innerHTML = coursePopularity.slice(0, 6).map(function (item) {
    return '<tr><td>' + escapeHtml(item.courseTitle) + '</td><td>' + item.enrolled + '</td><td>' + item.completed + '</td><td>' + item.completionRate + '%</td></tr>';
  }).join('');
}

function formatDateTime(value) {
  var date = new Date(value);
  if (isNaN(date.getTime())) return 'Active session';
  return date.toLocaleString();
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
