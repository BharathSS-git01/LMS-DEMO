document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  var authState = getAuthState();

  var params = new URLSearchParams(window.location.search);
  var courseId = params.get("course") || "devops";
  var course = getCourseForViewer(courseId, authState);

  if (!course) return;

  document.title = course.title + " - Vaaradhi LMS";

  setText(".breadcrumb", "Home > Explore Courses > " + course.title);
  setText(".course-hero h1", course.title);
  setText(".hero-desc", course.description);

  var heroImage = document.querySelector(".hero-image img");
  if (heroImage) {
    heroImage.src = course.bannerImage || course.image;
    heroImage.alt = course.title;
  }

  var heroTags = document.querySelector(".hero-tags");
  if (heroTags) {
    heroTags.innerHTML = `
      <span>${course.rating} Rating</span>
      <span>${course.learners}+ Learners</span>
      <span>${course.durationWeeks} Weeks</span>
      <span>${course.mode}</span>
      <span>${getHeroStatusLabel(course, authState)}</span>
    `;
  }

  renderHighlights(course);
  renderAbout(course);
  renderSyllabus(course);
  renderInstructor(course);
  renderEnrollCard(course, authState);
});

function getAuthState() {
  var currentUser = null;
  var token = localStorage.getItem("token") || "";

  try {
    currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
  } catch (error) {
    currentUser = null;
  }

  return {
    currentUser: currentUser,
    isLoggedIn: !!(token && currentUser && (currentUser.email || currentUser.id || currentUser.name)),
    isStudent: !!(currentUser && (!currentUser.role || currentUser.role === "student"))
  };
}

function getCourseForViewer(courseId, authState) {
  if (authState.isLoggedIn && authState.isStudent) {
    return LMSDemo.getCourseView(courseId);
  }

  return LMSDemo.getCourses().find(function (course) {
    return course.id === courseId;
  }) || null;
}

function getHeroStatusLabel(course, authState) {
  if (!authState.isLoggedIn || !authState.isStudent) {
    return "Preview Access";
  }

  if (course.isEnrolled) {
    return course.status === "completed" ? "Completed" : "Already Enrolled";
  }

  return "Enrollment Open";
}

function setText(selector, value) {
  var element = document.querySelector(selector);
  if (element) element.innerText = value;
}

function renderHighlights(course) {
  var grid = document.querySelector(".highlight-grid");
  if (!grid) return;

  grid.innerHTML = "";
  course.highlights.forEach(function (item) {
    var div = document.createElement("div");
    div.innerText = "Included: " + item;
    grid.appendChild(div);
  });
}

function renderAbout(course) {
  var aboutCard = document.querySelectorAll(".info-card")[1];
  if (!aboutCard) return;

  aboutCard.innerHTML = `
    <h2>About This Course</h2>
    <p>${getShortDescription(course.description)}</p>
  `;
}

function renderSyllabus(course) {
  var syllabusList = document.querySelector(".syllabus-list");
  if (!syllabusList) return;

  syllabusList.innerHTML = "";
  course.modules.forEach(function (module, index) {
    var item = document.createElement("li");
    item.innerText =
      "Week " +
      (index + 1) +
      ": " +
      module.title +
      " | " +
      module.lessons.length +
      " lessons";
    syllabusList.appendChild(item);
  });
}

function renderInstructor(course) {
  var instructorCard = document.querySelectorAll(".info-card")[3];
  if (!instructorCard) return;

  instructorCard.innerHTML = `
    <h2>Instructor</h2>
    <div class="instructor-box">
      <div class="instructor-photo"></div>
      <div>
        <h4>${course.instructor}</h4>
        <p>
          ${course.instructorTitle} with practical guidance, milestone support, and learner-focused delivery.
        </p>
      </div>
    </div>
  `;
}

function renderEnrollCard(course, authState) {
  var rows = document.querySelectorAll(".detail-row");
  var values = [
    course.durationWeeks + " Weeks",
    course.mode,
    course.language,
    course.difficulty,
    course.startDate,
    !authState.isLoggedIn || !authState.isStudent
      ? "Available After Login"
      : course.isEnrolled
        ? (course.status === "completed" ? "Unlocked" : "On Completion")
        : "Available After Enrollment"
  ];

  rows.forEach(function (row, index) {
    var spans = row.querySelectorAll("span");
    if (spans[1] && values[index]) {
      spans[1].innerText = values[index];
    }
  });

  var enrollButton = document.querySelector(".enroll-btn");
  var secondaryButton = document.querySelector(".secondary-btn");

  if (enrollButton) {
    enrollButton.innerText = !authState.isLoggedIn || !authState.isStudent
      ? "Get Started"
      : course.isEnrolled
        ? (course.status === "completed" ? "Completed" : "Continue")
        : "Enroll";
    enrollButton.onclick = function () {
      if (!authState.isLoggedIn || !authState.isStudent) {
        window.location.href = "auth.html";
      } else if (course.isEnrolled) {
        window.location.href = "course-player.html?course=" + course.id;
      } else {
        LMSDemo.enrollInCourse(course.id);
        window.location.href = "my-courses.html";
      }
    };
  }

  if (secondaryButton) {
    secondaryButton.innerText = !authState.isLoggedIn || !authState.isStudent
      ? "View Syllabus"
      : course.isEnrolled
        ? (course.status === "completed" ? "View Certificate" : "Open Learning Tools")
        : "View Syllabus";
    secondaryButton.onclick = function () {
      if (!authState.isLoggedIn || !authState.isStudent || !course.isEnrolled) {
        var syllabusSection = document.querySelector(".syllabus-list");
        if (syllabusSection) {
          syllabusSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
      }

      window.location.href =
        course.status === "completed"
          ? "certificates.html?course=" + course.id
          : "course-player.html?course=" + course.id;
    };
  }

  var heroPrimaryButton = document.querySelector(".hero-primary-btn");
  var heroSecondaryButton = document.querySelector(".hero-secondary-btn");

  if (heroPrimaryButton && enrollButton) {
    heroPrimaryButton.innerText = enrollButton.innerText;
    heroPrimaryButton.onclick = enrollButton.onclick;
  }

  if (heroSecondaryButton && secondaryButton) {
    heroSecondaryButton.innerText = secondaryButton.innerText;
    heroSecondaryButton.onclick = secondaryButton.onclick;
  }
}

function getShortDescription(description) {
  if (!description) return "A focused course path with lessons, practice, and progress tracking.";

  var normalized = String(description).trim().replace(/\s+/g, " ");
  if (normalized.length <= 170) return normalized;

  return normalized.slice(0, 167).trim() + "...";
}
