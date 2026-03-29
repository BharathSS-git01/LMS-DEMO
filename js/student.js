document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  var student = LMSDemo.getSessionStudent();
  if (!student) {
    window.location.href = "login.html";
    return;
  }
  var studentProfile = LMSDemo.getStudentProfile();
  var summary = LMSDemo.getDashboardSummary();
  var enrolledCourses = LMSDemo.getEnrolledCourses();
  var assignments = LMSDemo.getAssignments();
  var quizzes = LMSDemo.getQuizzes();
  var notifications = LMSDemo.getNotifications();
  var recentActivity = LMSDemo.getRecentActivity();
  var certificates = LMSDemo.getCertificates();

  var menuToggle = document.getElementById("menuToggle");
  var sidebar = document.getElementById("sidebar");
  var sidebarOverlay = document.createElement("div");
  sidebarOverlay.className = "mobile-sidebar-overlay";
  document.body.appendChild(sidebarOverlay);

  if (menuToggle && sidebar) {
    menuToggle.onclick = function () {
      sidebar.classList.toggle("active");
      sidebarOverlay.classList.toggle("active");
      document.body.classList.toggle("mobile-nav-open");
    };

    sidebarOverlay.onclick = function () {
      sidebar.classList.remove("active");
      sidebarOverlay.classList.remove("active");
      document.body.classList.remove("mobile-nav-open");
    };
  }

  syncDashboardStatCards(summary, quizzes);

  var searchInput = document.querySelector(".search-section input");
  if (searchInput) {
    searchInput.placeholder = "Search your courses, lessons, or certificates...";
    searchInput.addEventListener("keydown", function (event) {
      if (event.key !== "Enter") return;

      var query = searchInput.value.trim().toLowerCase();
      var matchedCourse = enrolledCourses.find(function (course) {
        return course.title.toLowerCase().indexOf(query) >= 0;
      });

      window.location.href = matchedCourse
        ? "course-details.html?course=" + matchedCourse.id
        : "my-courses.html";
    });
  }

  renderWhyCards(summary, studentProfile, recentActivity);
  renderSnapshotSection(summary, assignments, quizzes, enrolledCourses, certificates);
  renderContinueLearning(enrolledCourses);
  renderAssignmentSnapshot(assignments, summary);
  renderAchievementSnapshot(summary, certificates, enrolledCourses);
  renderNotifications(notifications, recentActivity, enrolledCourses);
  updateHero(summary, studentProfile);
});

function setStat(key, value) {
  var stat = document.querySelector('[data-stat="' + key + '"]');
  if (stat) {
    stat.innerText = value;
  }
}

function syncDashboardStatCards(summary, quizzes) {
  setStat("enrolled", summary.enrolledCount);
  setStat("completed", summary.completedCount);
  setStat("running", summary.pendingAssignmentsCount);
  setStat(
    "quiz",
    quizzes.filter(function (quiz) {
      return quiz.completed;
    }).length
  );
}

function renderWhyCards(summary, student, recentActivity) {
  var sectionTitle = document.querySelector(".why h2");
  var cards = document.querySelectorAll(".why-card");

  if (sectionTitle) {
    sectionTitle.innerText = "Learning Overview";
  }

  if (cards[0]) {
    cards[0].innerHTML = summary.continueCourse
      ? `
        <h3>Welcome back, ${student.name}</h3>
        <p>
          Your strongest momentum is in ${summary.continueCourse.title}. You have completed
          ${summary.continueCourse.completedLessons} of ${summary.continueCourse.totalLessons}
          lessons and your next lesson is ${summary.continueCourse.nextLesson.title}.
        </p>
      `
      : `
        <h3>Welcome, ${student.name}</h3>
        <p>
          Your student profile is ready. Enroll in a course to start building progress,
          assignments, quizzes, and certificates in your own dashboard.
        </p>
      `;
  }

  if (cards[1]) {
    cards[1].innerHTML = `
      <h3>Progress Snapshot</h3>
      <p>
        ${summary.averageProgress}% average progress across ${summary.enrolledCount} active enrollments,
        ${summary.pendingAssignmentsCount} pending assignment,
        and ${summary.readyQuizzesCount} quiz ready for review or attempt.
      </p>
    `;
  }

  if (cards[2]) {
    var certificateActivity = recentActivity.find(function (item) {
      return item.title === "Certificate earned";
    });

    cards[2].innerHTML = `
      <h3>Completion Milestone</h3>
      <p>
        ${
          certificateActivity
            ? certificateActivity.description + ". The certificate is now available from your certificates page."
            : "Complete any enrolled course to unlock your first verified certificate."
        }
      </p>
    `;
  }
}

function renderContinueLearning(enrolledCourses) {
  var sectionTitle = document.querySelector(".popular h2");
  var intro = document.getElementById("dashboardCourseIntro");
  var courseGrid = document.getElementById("dashboardCourseGrid") || document.querySelector(".popular .course-grid");

  if (sectionTitle) {
    sectionTitle.innerText = enrolledCourses.length ? "Continue Learning" : "Start Your Learning Journey";
  }

  if (intro) {
    intro.innerText = enrolledCourses.length
      ? "Resume your active courses and continue where you left off."
      : "You have not enrolled in any courses yet. Explore the catalog to begin.";
  }

  if (!courseGrid) return;

  courseGrid.innerHTML = "";

  if (!enrolledCourses.length) {
    courseGrid.innerHTML = `
      <div class="dashboard-empty-state">
        <h3>You have not enrolled in any courses yet</h3>
        <p>Start your learning journey today by exploring the course catalog and enrolling in your first guided course.</p>
        <a href="courses.html">Explore Courses</a>
      </div>
    `;
    return;
  }

  enrolledCourses.slice(0, 4).forEach(function (course) {
    var actionLabel = course.status === "completed" ? "Review Course" : "Continue Course";
    var actionHref = course.status === "completed"
      ? "certificates.html?course=" + course.id
      : "course-player.html?course=" + course.id;
    var statusText = course.status === "completed"
      ? "Completed | Certificate unlocked"
      : "In Progress | Next: " + course.nextLesson.title;
    var assignmentText = course.assignments.length
      ? course.submittedAssignments + "/" + course.assignments.length + " assignments submitted"
      : "No pending assignments";
    var quizText = course.quizzes.length
      ? course.completedQuizzes + "/" + course.quizzes.length + " quizzes completed"
      : "No course quiz yet";

    courseGrid.innerHTML += `
      <div class="course-card">
        <img src="${course.image}" alt="${course.title}">
        <h4>${course.title}</h4>
        <p>${course.subtitle}</p>
        <p>${course.progress}% complete | ${course.completedLessons}/${course.totalLessons} lessons</p>
        <p>${statusText}</p>
        <p>${assignmentText}</p>
        <p>${quizText}</p>
        <p><a href="${actionHref}" style="color:#2563eb;font-weight:600;text-decoration:none;">${actionLabel}</a></p>
      </div>
    `;
  });
}

function renderAssignmentSnapshot(assignments, summary) {
  var container = document.getElementById("dashboardAssignmentsList");
  if (!container) return;

  var pendingAssignments = assignments.filter(function (assignment) {
    return !assignment.submitted;
  });

  if (!pendingAssignments.length) {
    container.innerHTML = `
      <div class="dashboard-list-item">
        <strong>No upcoming assignments</strong>
        <span>${summary.enrolledCount ? "You are currently up to date. Continue your course progress or attempt available quizzes next." : "Enroll in a course to unlock assignments and weekly work here."}</span>
      </div>
    `;
    return;
  }

  container.innerHTML = pendingAssignments.slice(0, 3).map(function (assignment) {
    return `
      <div class="dashboard-list-item">
        <strong>${assignment.title}</strong>
        <span>${assignment.courseTitle} | Due ${assignment.dueDate} | ${assignment.statusLabel}</span>
        <a href="assignments.html?course=${assignment.courseId}">Open Assignment</a>
      </div>
    `;
  }).join("");
}

function renderAchievementSnapshot(summary, certificates, enrolledCourses) {
  var container = document.getElementById("dashboardAchievementPanel");
  if (!container) return;

  if (!enrolledCourses.length) {
    container.innerHTML = `
      <div class="achievement-card">
        <strong>No achievements yet</strong>
        <span>Enroll in a course to begin building progress, completions, and certificate milestones.</span>
        <a href="courses.html">Explore Courses</a>
      </div>
    `;
    return;
  }

  var activeCourse = summary.continueCourse || enrolledCourses[0] || null;

  container.innerHTML = `
    <div class="achievement-card">
      <strong>Course Progress Snapshot</strong>
      <span>${summary.averageProgress}% average progress across ${summary.enrolledCount} enrolled course(s).</span>
      ${activeCourse ? `<a href="course-player.html?course=${activeCourse.id}">Resume ${activeCourse.title}</a>` : ""}
    </div>
    <div class="achievement-card">
      <strong>Certificate Readiness</strong>
      <span>${certificates.length ? certificates[0].courseTitle + " certificate is ready from your certificates page." : "Complete a course to unlock your first verified certificate."}</span>
      <a href="${certificates.length ? "certificates.html" : "my-courses.html"}">${certificates.length ? "View Certificates" : "Review My Learning"}</a>
    </div>
  `;
}

function updateHero(summary, student) {
  var heroTitle = document.getElementById("dashboardWelcomeTitle");
  var heroText = document.getElementById("dashboardWelcomeText");
  if (!heroTitle || !heroText) return;

  if (summary.continueCourse) {
    heroTitle.innerText = "Welcome back, " + student.name;
    heroText.innerText =
      "Continue " +
      summary.continueCourse.title +
      ", stay on track this week, and keep moving toward completion with a clear next lesson and assessment path.";
    return;
  }

  heroTitle.innerText = "Welcome, " + student.name;
  heroText.innerText =
    "Your dashboard is ready. Explore the course catalog, enroll in your first course, and begin building progress, assessments, and certificates.";
}

function renderSnapshotSection(summary, assignments, quizzes, enrolledCourses, certificates) {
  var section = document.querySelector(".institutions");
  var container = document.querySelector(".institution-logos");
  if (!section || !container) return;

  section.querySelector("h2").innerText = "Learning Snapshot";
  container.className = "snapshot-grid";

  if (!enrolledCourses.length) {
    container.innerHTML = `
      <div class="snapshot-card">
        <h3>Ready to Begin</h3>
        <p>No enrolled courses yet</p>
        <span>Explore the catalog and enroll in your first course to start your learner dashboard.</span>
      </div>
      <div class="snapshot-card">
        <h3>Assessments</h3>
        <p>Assignments and quizzes unlock after enrollment</p>
        <span>Your coursework and deadlines will appear here once you join a course.</span>
      </div>
      <div class="snapshot-card">
        <h3>Certificates</h3>
        <p>No certificates yet</p>
        <span>Completion milestones and certificate readiness will appear here as you progress.</span>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="snapshot-card">
      <h3>Continue Learning</h3>
      <p>${summary.continueCourse ? summary.continueCourse.title : "No active course"}</p>
      <span>${summary.continueCourse ? summary.continueCourse.nextLesson.title : "Enroll to begin your first learning path"}</span>
    </div>
    <div class="snapshot-card">
      <h3>Pending Work</h3>
      <p>${summary.pendingAssignmentsCount} assignment pending</p>
      <span>${quizzes.filter(function (quiz) { return !quiz.completed; }).length} quiz available and ${assignments.filter(function (assignment) { return assignment.submitted; }).length} assignment submission record(s) stored</span>
    </div>
    <div class="snapshot-card">
      <h3>Certificate Status</h3>
      <p>${certificates.length ? certificates[0].courseTitle + " certificate ready" : "No certificate yet"}</p>
      <span>${certificates.length ? "Your certificate is now available to view and download." : "Course completion will unlock certificates here."}</span>
    </div>
  `;
}

function renderNotifications(notifications, recentActivity, enrolledCourses) {
  var headerTitle = document.querySelector(".notification-header h3");
  var viewAll = document.querySelector(".notification-header .view-all");
  var list = document.querySelector(".notification-list");
  if (!list) return;

  if (headerTitle) {
    headerTitle.innerText = "Learning Alerts";
  }

  if (viewAll) {
    viewAll.innerText = "My Courses";
    viewAll.href = "my-courses.html";
  }

  list.innerHTML = "";

  var mergedAlerts = [];
  var seen = {};

  notifications.forEach(function (notification) {
    var key = notification.type + "|" + notification.message;
    if (seen[key]) return;
    seen[key] = true;
    mergedAlerts.push({
      type: notification.type,
      text: notification.message,
      time: notification.time
    });
  });

  if (recentActivity && recentActivity.length) {
    recentActivity.forEach(function (activity) {
      var key = "activity|" + activity.title + "|" + activity.description;
      if (seen[key]) return;
      seen[key] = true;
      mergedAlerts.push({
        type: "info",
        text: activity.title + " - " + activity.description,
        time: activity.meta
      });
    });
  }

  if (!mergedAlerts.length) {
    list.innerHTML = `
      <div class="notification-item info">
        <div class="notification-text">${enrolledCourses.length ? "No new alerts right now. Your next lesson, submissions, and certificate updates will appear here." : "No alerts yet. Once you enroll in a course, your assignments, quizzes, progress, and achievements will appear here."}</div>
        <span class="notification-time">Just now</span>
      </div>
    `;
    return;
  }

  mergedAlerts.slice(0, 6).forEach(function (notification) {
    var item = document.createElement("div");
    item.className = "notification-item " + notification.type;
    item.innerHTML = `
      <div class="notification-text">${notification.text}</div>
      <span class="notification-time">${notification.time}</span>
    `;
    list.appendChild(item);
  });
}
