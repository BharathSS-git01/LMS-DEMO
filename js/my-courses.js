document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  var student = LMSDemo.getSessionStudent();
  if (!student) {
    window.location.href = "login.html";
    return;
  }

  var enrolledCourses = LMSDemo.getEnrolledCourses();
  var summary = LMSDemo.getDashboardSummary();
  var quizzes = LMSDemo.getQuizzes();
  var assignments = LMSDemo.getAssignments();
  var certificates = LMSDemo.getCertificates();
  var runningCourses = enrolledCourses.filter(function (course) {
    return course.status !== "completed";
  });
  var completedCourses = enrolledCourses.filter(function (course) {
    return course.status === "completed";
  });

  updatePageCopy(student, enrolledCourses, runningCourses, completedCourses);
  updateStatCards(enrolledCourses, runningCourses, completedCourses, summary, quizzes, assignments, certificates);
  renderCourses("runningCourses", runningCourses, {
    emptyTitle: "You have not enrolled in any courses yet",
    emptyDescription: "Explore the catalog and enroll in your first course to start building progress, assignments, quizzes, and certificates.",
    actionLabel: "Explore Courses",
    actionHref: "courses.html"
  });
  renderCourses("completedCourses", completedCourses, {
    emptyTitle: enrolledCourses.length ? "No completed courses yet" : "No completed courses yet",
    emptyDescription: enrolledCourses.length
      ? "Complete your current learning paths to unlock certificates here."
      : "Completed courses and certificates will appear here after you finish enrolled courses.",
    actionLabel: enrolledCourses.length ? "Continue Learning" : "Explore Courses",
    actionHref: enrolledCourses.length && runningCourses[0] ? "course-player.html?course=" + runningCourses[0].id : "courses.html"
  });
});

function updatePageCopy(student, enrolledCourses, runningCourses, completedCourses) {
  var heroTitle = document.querySelector(".hero h1");
  var heroText = document.querySelector(".hero p");
  var runningHeading = document.getElementById("runningCoursesHeading");
  var completedHeading = document.getElementById("completedCoursesHeading");

  if (heroTitle) {
    heroTitle.innerText = enrolledCourses.length
      ? "Welcome back, " + (student.name || "Student")
      : "Start your learning journey";
  }

  if (heroText) {
    heroText.innerText = enrolledCourses.length
      ? "Review your enrolled courses, continue where you left off, and move smoothly into assignments, quizzes, and certificate-ready completion."
      : "You do not have any enrolled courses yet. Explore the catalog, enroll in a course, and your learning workspace will begin reflecting your progress here.";
  }

  if (runningHeading) {
    runningHeading.innerText = runningCourses.length ? "In Progress" : "My Learning";
  }

  if (completedHeading) {
    completedHeading.innerText = completedCourses.length ? "Completed Courses" : "Completed and Certificate Ready";
  }
}

function updateStatCards(enrolledCourses, runningCourses, completedCourses, summary, quizzes, assignments, certificates) {
  var enrolledCard = document.querySelector('[data-card="enrolled"]');
  var completedCard = document.querySelector('[data-card="completed"]');
  var certificatesCard = document.querySelector('[data-card="certificates"]');
  var nextStepCard = document.querySelector('[data-card="next-step"]');

  if (enrolledCard) {
    setCardCopy(
      enrolledCard,
      "Enrolled Courses (" + enrolledCourses.length + ")",
      enrolledCourses.length
        ? enrolledCourses.length + " course(s) are connected to your current student account."
        : "No enrolled courses yet. Browse the catalog to begin your learning workspace.",
      enrolledCourses.length ? "100%" : "10%",
      enrolledCourses.length ? "View My Courses" : "Explore Courses"
    );
    enrolledCard.onclick = function () {
      window.location.href = enrolledCourses.length ? "my-courses.html" : "courses.html";
    };
  }

  if (completedCard) {
    setCardCopy(
      completedCard,
      "Completed Courses (" + completedCourses.length + ")",
      completedCourses.length
        ? completedCourses[0].title + " is completed and ready for review."
        : "Your completed learning paths will appear here as you finish enrolled courses.",
      enrolledCourses.length ? Math.round((completedCourses.length / Math.max(enrolledCourses.length, 1)) * 100) + "%" : "0%",
      "View Completed"
    );
    completedCard.onclick = function () {
      window.location.href = "my-courses.html#completed";
    };
  }

  if (certificatesCard) {
    setCardCopy(
      certificatesCard,
      "Certificates (" + certificates.length + ")",
      certificates.length
        ? certificates[0].courseTitle + " certificate is available from your certificates page."
        : "Certificates unlock automatically after full course completion.",
      certificates.length ? "100%" : "16%",
      "View Certificates"
    );
    certificatesCard.onclick = function () {
      window.location.href = "certificates.html";
    };
  }

  if (nextStepCard) {
    if (runningCourses[0]) {
      setCardCopy(
        nextStepCard,
        "Continue " + runningCourses[0].title,
        "Next lesson: " + runningCourses[0].nextLesson.title + ". " + summary.pendingAssignmentsCount + " assignment(s) pending and " + quizzes.filter(function (quiz) { return !quiz.completed; }).length + " quiz(es) available.",
        Math.max(runningCourses[0].progress, assignments.length ? Math.round((assignments.filter(function (assignment) { return assignment.submitted; }).length / assignments.length) * 100) : 12) + "%",
        runningCourses[0].status === "completed" ? "Review Course" : "Continue Learning"
      );
      nextStepCard.onclick = function () {
        window.location.href = "course-player.html?course=" + runningCourses[0].id;
      };
    } else {
      setCardCopy(
        nextStepCard,
        "Explore Courses",
        "You have a clean learning space. Enroll in a course to start building progress, assignments, quizzes, and certificates.",
        "18%",
        "Browse Catalog"
      );
      nextStepCard.onclick = function () {
        window.location.href = "courses.html";
      };
    }
  }
}

function setCardCopy(card, title, description, width, buttonLabel) {
  if (!card) return;
  var titleNode = card.querySelector("h3");
  var descriptionNode = card.querySelector("p");
  var progressFill = card.querySelector(".progress-fill");
  var button = card.querySelector("button");

  if (titleNode) titleNode.innerText = title;
  if (descriptionNode) descriptionNode.innerText = description;
  if (progressFill) progressFill.style.width = width;
  if (button) button.innerText = buttonLabel;
}

function renderCourses(elementId, courses, emptyState) {
  var container = document.getElementById(elementId);
  if (!container) return;

  container.innerHTML = "";

  if (!courses.length) {
    container.innerHTML = `
      <div class="course-empty-state">
        <h3>${emptyState.emptyTitle}</h3>
        <p>${emptyState.emptyDescription}</p>
        <a href="${emptyState.actionHref}">${emptyState.actionLabel}</a>
      </div>
    `;
    return;
  }

  courses.forEach(function (course) {
    var actionLabel = course.status === "completed" ? "View Certificate" : "Continue Learning";
    var actionHref =
      course.status === "completed"
        ? "certificates.html?course=" + course.id
        : "course-player.html?course=" + course.id;
    var statusLabel = course.status === "completed" ? "Completed" : "In Progress";

    var card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <a href="${actionHref}">
        <img src="${course.image}" alt="${course.title}" style="width:100%;height:200px;object-fit:cover;border-radius:8px 8px 0 0;">
      </a>
      <div class="card-body" style="padding:15px;">
        <div class="badge" style="margin-bottom:10px; display:inline-block;">${statusLabel}</div>
        <h3 style="margin:10px 0; font-weight:600; color:#333;">${course.title}</h3>
        <p style="margin:8px 0; color:#555; font-size:14px;">${course.subtitle}</p>
        <p style="margin:8px 0; color:#777; font-size:13px;">${course.durationWeeks} Weeks | ${course.difficulty}</p>
        <div style="width:100%; background:#e0e0e0; height:8px; border-radius:4px; overflow:hidden; margin:8px 0;">
          <div style="width:${course.progress}%; background:#f97316; height:100%;"></div>
        </div>
        <p style="margin:8px 0; color:#0b3a75; font-size:13px; font-weight:600;">
          ${course.completedLessons}/${course.totalLessons} lessons complete
        </p>
        <p style="margin:8px 0; color:#555; font-size:13px;">
          ${course.status === "completed" ? "Final lesson completed and certificate unlocked." : "Next lesson: " + course.nextLesson.title}
        </p>
        <a href="${actionHref}" style="display:inline-block;margin-top:8px;background:#2563eb;color:white;padding:10px 16px;border-radius:20px;text-decoration:none;">
          ${actionLabel}
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}
