var currentTab = "catalog";
var currentPage = 1;
var perPage = 4;

document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  var authState = getAuthState();
  configureCatalogTabs(authState.isLoggedIn);

  document.querySelectorAll(".tab").forEach(function (button) {
    button.onclick = function () {
      if (!authState.isLoggedIn && button.dataset.tab === "enrolled") {
        currentTab = "catalog";
        return;
      }
      document.querySelectorAll(".tab").forEach(function (tab) {
        tab.classList.remove("active");
      });
      button.classList.add("active");
      currentTab = button.dataset.tab;
      currentPage = 1;
      render();
    };
  });

  var searchInput = document.getElementById("searchInput");
  var modeFilter = document.getElementById("modeFilter");
  var durationFilter = document.getElementById("durationFilter");
  var languageFilter = document.getElementById("languageFilter");

  if (searchInput) searchInput.oninput = render;
  if (modeFilter) modeFilter.onchange = render;
  if (durationFilter) durationFilter.onchange = render;
  if (languageFilter) languageFilter.onchange = render;

  render();
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

function configureCatalogTabs(isLoggedIn) {
  var enrolledTab = document.querySelector('.tab[data-tab="enrolled"]');
  if (!enrolledTab) return;

  if (!isLoggedIn) {
    enrolledTab.style.display = "none";
    enrolledTab.classList.remove("active");
    currentTab = "catalog";
    var catalogTab = document.querySelector('.tab[data-tab="catalog"]');
    if (catalogTab) {
      catalogTab.classList.add("active");
    }
    return;
  }

  enrolledTab.style.display = "";
}

function getCatalogCourses() {
  var authState = getAuthState();

  if (!authState.isLoggedIn || !authState.isStudent) {
    return LMSDemo.getCourses().map(function (course) {
      return Object.assign({}, course, {
        isEnrolled: false,
        progress: 0,
        completedLessons: 0,
        totalLessons: (course.modules || []).reduce(function (count, module) {
          return count + ((module.lessons || []).length || 0);
        }, 0),
        status: "public-preview"
      });
    });
  }

  return LMSDemo.getCourses().map(function (course) {
    var courseView = LMSDemo.getCourseView(course.id);
    return courseView || course;
  });
}

function render() {
  var authState = getAuthState();
  var searchInput = document.getElementById("searchInput");
  var modeFilter = document.getElementById("modeFilter");
  var durationFilter = document.getElementById("durationFilter");
  var languageFilter = document.getElementById("languageFilter");
  var courseGrid = document.getElementById("courseGrid");

  if (!courseGrid) return;

  var courses = getCatalogCourses();

  if (authState.isLoggedIn && currentTab === "enrolled") {
    courses = courses.filter(function (course) {
      return course.isEnrolled;
    });
  }

  var filtered = courses.filter(function (course) {
    return (
      (!modeFilter || modeFilter.value === "All" || course.mode === modeFilter.value) &&
      (!durationFilter || durationFilter.value === "All" || String(course.durationWeeks) === durationFilter.value) &&
      (!languageFilter || languageFilter.value === "All" || course.language === languageFilter.value) &&
      (!searchInput || course.title.toLowerCase().indexOf(searchInput.value.toLowerCase()) >= 0)
    );
  });

  var start = (currentPage - 1) * perPage;
  var items = filtered.slice(start, start + perPage);

  courseGrid.innerHTML = "";

  if (!items.length) {
    courseGrid.innerHTML =
      '<div class="course-card" style="grid-column:1/-1;text-align:center;padding:30px;">' +
      '<div class="course-info">' +
      "<h4>" + (currentTab === "enrolled" ? "No enrolled courses yet" : "No courses match your filters") + "</h4>" +
      "<p>" + (currentTab === "enrolled"
        ? "Your enrollments will appear here once you join a course from the catalog."
        : "Try adjusting your search or filters to explore more learning options.") + "</p>" +
      (currentTab === "enrolled"
        ? '<a href="courses.html" style="display:inline-block;margin-top:12px;color:#2563eb;font-weight:600;text-decoration:none;">Browse catalog</a>'
        : "") +
      "</div></div>";
    renderPagination(filtered.length);
    return;
  }

  items.forEach(function (course) {
    var isPublicPreview = !authState.isLoggedIn || !authState.isStudent;
    var statusBadge = isPublicPreview
      ? "Enrollment Open"
      : course.isEnrolled
        ? (course.status === "completed" ? "Completed" : "Already Enrolled")
        : "Enrollment Open";
    var statusColor = isPublicPreview
      ? "#0b3a75"
      : course.isEnrolled
        ? (course.status === "completed" ? "#16a34a" : "#f97316")
        : "#0b3a75";
    var primaryAction = isPublicPreview
      ? "Get Started"
      : course.isEnrolled
        ? (course.status === "completed" ? "Completed" : "Continue")
        : "Enroll";

    courseGrid.innerHTML += `
      <div class="course-card">
        <a href="course-details.html?course=${course.id}">
          <img src="${course.image}" alt="${course.title}">
        </a>
        <div class="course-info">
          <span class="badge open" style="background:${statusColor};">${statusBadge}</span>
          <h4>${course.title}</h4>
          <p class="course-desc">${course.subtitle}</p>
          <p>${course.category} | ${course.durationWeeks} Weeks | ${course.difficulty}</p>
          <p>Instructor: ${course.instructor}</p>
          ${
            !isPublicPreview && course.isEnrolled
              ? `<p style="color:#0b3a75;font-weight:600;">${course.progress}% complete | ${course.completedLessons}/${course.totalLessons} lessons</p>`
              : `<p style="color:#475569;">${course.learners}+ learners | Starts ${course.startDate}</p>`
          }
          <div class="course-actions">
            <button class="enroll-btn" onclick="handleCourseAction('${course.id}')">
              ${primaryAction}
            </button>
          </div>
        </div>
      </div>
    `;
  });

  renderPagination(filtered.length);
}

function renderPagination(total) {
  var pagination = document.getElementById("pagination");
  if (!pagination) return;

  pagination.innerHTML = "";
  var pages = Math.max(Math.ceil(total / perPage), 1);
  for (var i = 1; i <= pages; i += 1) {
    pagination.innerHTML += '<button onclick="changePage(' + i + ')" ' + (i === currentPage ? 'class="active"' : "") + ">" + i + "</button>";
  }
}

function changePage(page) {
  currentPage = page;
  render();
}

function viewCourseDetails(courseId) {
  window.location.href = "course-details.html?course=" + courseId;
}

function handleCourseAction(courseId) {
  var authState = getAuthState();

  if (!authState.isLoggedIn || !authState.isStudent) {
    window.location.href = "auth.html";
    return;
  }

  var course = LMSDemo.getCourseView(courseId);
  if (!course) {
    viewCourseDetails(courseId);
    return;
  }

  if (course.status === "completed") {
    window.location.href = "course-player.html?course=" + course.id;
  } else if (course.isEnrolled) {
    window.location.href = "course-player.html?course=" + course.id;
  } else {
    LMSDemo.enrollInCourse(course.id);
    render();
  }
}
