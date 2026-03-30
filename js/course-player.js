var playerState = {
  course: null,
  selectedLessonId: null,
  activeTab: "overview"
};

document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  if (!LMSDemo.getSessionStudent()) {
    window.location.href = "login.html";
    return;
  }

  var params = new URLSearchParams(window.location.search);
  var firstEnrolledCourse = LMSDemo.getEnrolledCourses()[0];
  var courseId = params.get("course") || (firstEnrolledCourse && firstEnrolledCourse.id);
  if (!courseId) {
    window.location.href = "courses.html";
    return;
  }
  var course = LMSDemo.getCourseView(courseId);
  if (!course) return;
  if (!course.isEnrolled) {
    window.location.href = "course-details.html?course=" + courseId;
    return;
  }
  if (!course.totalLessons) {
    playerState.course = course;
    renderEmptyCoursePlayer(course);
    renderCompleteCourseButton();
    return;
  }

  playerState.course = course;
  playerState.selectedLessonId = (course.lastAccessedLesson && course.lastAccessedLesson.id) || (course.nextLesson && course.nextLesson.id) || null;

  bindTabs();
  refreshPlayer();
});

function refreshPlayer() {
  playerState.course = LMSDemo.getCourseView(playerState.course.id);
  renderCourseSummary();
  renderCurriculum();
  renderSelectedLesson();
  renderCompleteCourseButton();
}

function renderCourseSummary() {
  var summaryPanel = document.getElementById("courseSummaryPanel");
  if (!summaryPanel || !playerState.course) return;

  var course = playerState.course;
  var currentLesson = LMSDemo.getLessonById(course.id, playerState.selectedLessonId);
  var nextLessonTitle = course.nextLesson && course.nextLesson.title ? course.nextLesson.title : "Course roadmap available soon";

  summaryPanel.innerHTML = `
    <div class="summary-copy">
      <span class="summary-badge">${course.status === "completed" ? "Completed" : "In Progress"}</span>
      <h1>${course.title}</h1>
      <div class="summary-progress">
        <div class="summary-progress-fill" style="width:${course.progress}%"></div>
      </div>
      <small>${course.progress}% complete | ${course.completedLessons}/${course.totalLessons} lessons completed</small>
    </div>
    <div class="summary-metrics">
      <div class="summary-metric">
        <strong>Current lesson</strong>
        <span>${currentLesson ? currentLesson.title : "Select a lesson"}</span>
      </div>
      <div class="summary-metric">
        <strong>Next lesson</strong>
        <span>${nextLessonTitle}</span>
      </div>
      <div class="summary-metric">
        <strong>Assignments</strong>
        <span>${course.submittedAssignments}/${course.assignments.length}</span>
      </div>
      <div class="summary-metric">
        <strong>Quizzes</strong>
        <span>${course.completedQuizzes}/${course.quizzes.length}</span>
      </div>
    </div>
  `;
}

function renderCurriculum() {
  var curriculum = document.querySelector(".curriculum");
  if (!curriculum || !playerState.course) return;
  var completedLessonIds = LMSDemo.getCompletedLessonIds(playerState.course.id);

  curriculum.innerHTML =
    "<h3>" + playerState.course.title + " Curriculum</h3>" +
    "<button class=\"curriculum-toggle\" type=\"button\">Curriculum <span>" + getLessonCountLabel(playerState.course) + "</span></button>" +
    "<div class=\"curriculum-panel\"></div>";

  var curriculumPanel = curriculum.querySelector(".curriculum-panel");
  var curriculumToggle = curriculum.querySelector(".curriculum-toggle");

  if (curriculumToggle) {
    curriculumToggle.onclick = function () {
      curriculum.classList.toggle("expanded");
    };
  }

  playerState.course.modules.forEach(function (module) {
    var div = document.createElement("div");
    div.className = "module";
    div.innerHTML =
      "<h4>Week " + module.position + " - " + module.title + " <span class=\"module-count\">" + module.lessons.length + " lessons</span></h4>";

    var ul = document.createElement("ul");
    module.lessons.forEach(function (lesson) {
      var lessonItem = document.createElement("li");
      var isCompleted = completedLessonIds.indexOf(lesson.id) >= 0;
      lessonItem.className = "lesson" + (lesson.id === playerState.selectedLessonId ? " active" : "");
      lessonItem.innerHTML =
        "<span>" + lesson.title + "</span><small>" + (isCompleted ? "Completed" : lesson.duration) + "</small>";

      lessonItem.onclick = function () {
        playerState.selectedLessonId = lesson.id;
        LMSDemo.setLastAccessed(playerState.course.id, lesson.id);
        refreshPlayer();
      };
      ul.appendChild(lessonItem);
    });

    div.appendChild(ul);
    if (curriculumPanel) {
      curriculumPanel.appendChild(div);
    }
  });

  var toolsDiv = document.createElement("div");
  toolsDiv.className = "sidebar-tools";
  toolsDiv.innerHTML = getCourseToolButtons(playerState.course.id);
  curriculum.appendChild(toolsDiv);

  renderMobileCourseContent(playerState.course);
}

function getLessonContext(course, lesson) {
  return {
    overview:
      lesson.description ||
      lesson.content ||
      (lesson.title +
        " builds practical understanding within " +
        lesson.moduleTitle +
        " and contributes directly to the " +
        course.title +
        " completion path."),
    objectives: [
      "Understand the core concepts behind " + lesson.title.toLowerCase(),
      "Connect the topic to your " + course.category.toLowerCase() + " workflow",
      "Prepare for the next lesson and related assessment checkpoints"
    ],
    resources: [
      lesson.moduleTitle + " recap sheet",
      course.title + " implementation checklist",
      "Faculty notes for " + lesson.title
    ],
    discussion:
      "How would you apply " +
      lesson.title +
      " within a realistic " +
      course.title +
      " project or academic deliverable?"
  };
}

function renderSelectedLesson() {
  if (!playerState.selectedLessonId) {
    renderEmptyCoursePlayer(playerState.course);
    return;
  }

  var lesson = LMSDemo.getLessonById(playerState.course.id, playerState.selectedLessonId);
  var course = LMSDemo.getCourseView(playerState.course.id);
  if (!lesson || !course) return;

  var lessonTitle = document.getElementById("lessonTitle");
  var mobileCourseTitle = document.getElementById("mobileCourseTitle");
  var videoPlayer = document.getElementById("videoPlayer");
  var lessonMediaShell = document.getElementById("lessonMediaShell");
  var lessonMediaImage = document.getElementById("lessonMediaImage");
  var mediaBadge = document.getElementById("mediaBadge");
  var mediaMeta = document.getElementById("mediaMeta");
  var playerMeta = document.getElementById("playerMeta");
  var lessonControls = document.getElementById("lessonControls");
  var tabContent = document.getElementById("tabContent");
  var allLessons = course.modules.flatMap(function (module) {
    return module.lessons;
  });
  var currentIndex = allLessons.findIndex(function (item) {
    return item.id === lesson.id;
  });
  var lessonContext = getLessonContext(course, lesson);
  var completedLessons = LMSDemo.getCompletedLessonIds(course.id);
  var activeModule = course.modules.find(function (module) {
    return module.id === lesson.moduleId;
  });
  var moduleLessonIds = activeModule
    ? activeModule.lessons.map(function (item) { return item.id; })
    : [];
  var completedInModule = moduleLessonIds.filter(function (lessonId) {
    return completedLessons.indexOf(lessonId) >= 0;
  }).length;
  var currentCompleted = completedLessons.indexOf(lesson.id) >= 0;

  if (lessonTitle) {
    lessonTitle.innerText = lesson.title;
  }

  if (mobileCourseTitle) {
    mobileCourseTitle.innerText = course.title;
  }

  updateLessonMedia(course, lesson, {
    player: videoPlayer,
    shell: lessonMediaShell,
    image: lessonMediaImage,
    badge: mediaBadge,
    meta: mediaMeta
  });

  if (playerMeta) {
    playerMeta.innerHTML = `
      <div class="meta-card">
        <strong>${course.title}</strong>
        <span>${course.progress}% complete</span>
      </div>
      <div class="meta-card">
        <strong>Current Module</strong>
        <span>${lesson.moduleTitle}</span>
      </div>
      <div class="meta-card">
        <strong>Lesson Duration</strong>
        <span>${lesson.duration}</span>
      </div>
      <div class="meta-card">
        <strong>Lesson Status</strong>
        <span>${currentCompleted ? "Completed" : "Pending completion"}</span>
      </div>
      <div class="meta-card">
        <strong>Module Progress</strong>
        <span>${completedInModule}/${moduleLessonIds.length} lessons complete</span>
      </div>
      <div class="meta-card">
        <strong>Path Position</strong>
        <span>Lesson ${currentIndex + 1} of ${allLessons.length}</span>
      </div>
      <div class="meta-card">
        <strong>Next Up</strong>
        <span>${course.nextLesson && course.nextLesson.title ? course.nextLesson.title : "Course roadmap available soon"}</span>
      </div>
    `;
  }

  if (lessonControls) {
    lessonControls.innerHTML = `
      <button class="tool-btn" ${currentIndex <= 0 ? "disabled" : ""} onclick="moveLesson(-1)">Previous Lesson</button>
      <button class="tool-btn" onclick="completeCurrentLesson()">${currentCompleted ? "Completed" : "Mark Lesson Complete"}</button>
      <button class="tool-btn" ${currentIndex >= allLessons.length - 1 ? "disabled" : ""} onclick="moveLesson(1)">Next Lesson</button>
    `;
  }

  if (!tabContent) return;

  if (playerState.activeTab === "overview") {
    tabContent.innerHTML = `
      <div class="lesson-panel">
        <h3>Lesson Summary</h3>
        <p>${lessonContext.overview}</p>
      </div>
      <div class="lesson-panel">
        <h3>Learning Objectives</h3>
        <ul class="lesson-list">
          ${lessonContext.objectives.map(function (objective) { return "<li>" + objective + "</li>"; }).join("")}
        </ul>
      </div>
    `;
  } else if (playerState.activeTab === "resources") {
    tabContent.innerHTML = `
      <div class="lesson-panel">
        <h3>Lesson Resources</h3>
        <ul class="lesson-list">
          ${lessonContext.resources.map(function (resource) { return "<li>" + resource + "</li>"; }).join("")}
        </ul>
        ${lesson.resourcePath ? "<p><a href='" + lesson.resourcePath + "' target='_blank' rel='noopener' style='color:#2563eb;font-weight:600;text-decoration:none;'>Open uploaded lesson resource</a></p>" : ""}
      </div>
    `;
  } else if (playerState.activeTab === "discussion") {
    tabContent.innerHTML = `
      <div class="lesson-panel">
        <h3>Discussion Prompt</h3>
        <p>${lessonContext.discussion}</p>
      </div>
    `;
  } else if (playerState.activeTab === "assignments") {
    var assignments = LMSDemo.getAssignments(playerState.course.id);
    var quizzes = LMSDemo.getQuizzes(playerState.course.id);
    tabContent.innerHTML = assignments.length
      ? `
        <div class="lesson-panel">
          <h3>Assignments and Checkpoints</h3>
          ${assignments.map(function (assignment) {
            return "<p><strong>" + assignment.title + "</strong> | " + (assignment.submitted ? "Submitted" : assignment.statusLabel) + "</p>";
          }).join("")}
          ${quizzes.length ? "<p><strong>Quiz status:</strong> " + quizzes.map(function (quiz) { return quiz.title + " - " + quiz.status; }).join(", ") + "</p>" : ""}
        </div>
      `
      : "<div class=\"lesson-panel\"><h3>Assignments</h3><p>No assignments linked to this lesson yet.</p>" + (quizzes.length ? "<p><strong>Quiz status:</strong> " + quizzes.map(function (quiz) { return quiz.title + " - " + quiz.status; }).join(", ") + "</p>" : "") + "</div>";
  }
}

function renderEmptyCoursePlayer(course) {
  var curriculum = document.querySelector(".curriculum");
  var lessonTitle = document.getElementById("lessonTitle");
  var mobileCourseTitle = document.getElementById("mobileCourseTitle");
  var playerMeta = document.getElementById("playerMeta");
  var lessonControls = document.getElementById("lessonControls");
  var tabContent = document.getElementById("tabContent");
  var lessonMediaShell = document.getElementById("lessonMediaShell");
  var mediaBadge = document.getElementById("mediaBadge");
  var mediaMeta = document.getElementById("mediaMeta");
  var lessonMediaImage = document.getElementById("lessonMediaImage");
  var videoPlayer = document.getElementById("videoPlayer");

  if (curriculum) {
    curriculum.innerHTML =
      "<h3>" + course.title + " Curriculum</h3>" +
      "<button class=\"curriculum-toggle\" type=\"button\">Curriculum <span>No lessons yet</span></button>" +
      "<div class=\"curriculum-panel\"><p>No lessons are published for this course yet.</p></div>";

    var curriculumToggle = curriculum.querySelector(".curriculum-toggle");
    if (curriculumToggle) {
      curriculumToggle.onclick = function () {
        curriculum.classList.toggle("expanded");
      };
    }
  }

  renderMobileCourseContent(course);

  if (lessonTitle) {
    lessonTitle.innerText = course.title;
  }

  if (mobileCourseTitle) {
    mobileCourseTitle.innerText = course.title;
  }

  if (videoPlayer) {
    videoPlayer.pause();
    videoPlayer.removeAttribute("src");
    videoPlayer.load();
  }

  if (lessonMediaImage) {
    lessonMediaImage.src = course.image || "assets/DEVOPS.jpg";
    lessonMediaImage.alt = course.title;
  }

  if (lessonMediaShell) {
    lessonMediaShell.classList.remove("video-active");
    lessonMediaShell.classList.add("image-active");
  }

  if (mediaBadge) {
    mediaBadge.innerText = "Course Preview";
  }

  if (mediaMeta) {
    mediaMeta.innerText = "Lessons will appear here after publishing";
  }

  if (playerMeta) {
    playerMeta.innerHTML = `
      <div class="meta-card">
        <strong>${course.title}</strong>
        <span>${course.progress}% complete</span>
      </div>
      <div class="meta-card">
        <strong>Status</strong>
        <span>No lessons published yet</span>
      </div>
    `;
  }

  if (lessonControls) {
    lessonControls.innerHTML = "";
  }

  if (tabContent) {
    tabContent.innerHTML = `
      <div class="lesson-panel">
        <h3>Course Content Pending</h3>
        <p>This course is enrolled and available in your workspace, but lesson content has not been published yet.</p>
      </div>
    `;
  }
}

function updateLessonMedia(course, lesson, mediaNodes) {
  if (!mediaNodes || !mediaNodes.player || !mediaNodes.shell || !mediaNodes.image) return;

  var player = mediaNodes.player;
  var shell = mediaNodes.shell;
  var image = mediaNodes.image;
  var badge = mediaNodes.badge;
  var meta = mediaNodes.meta;
  var poster = lesson.image || course.image;
  var videoSrc =
    (lesson.videoUrl && String(lesson.videoUrl).trim()) ||
    (lesson.video && String(lesson.video).trim()) ||
    (lesson.videoSrc && String(lesson.videoSrc).trim()) ||
    (course.videoUrl && String(course.videoUrl).trim()) ||
    (course.video && String(course.video).trim()) ||
    (course.videoSrc && String(course.videoSrc).trim()) ||
    "";

  player.pause();
  player.removeAttribute("src");
  player.poster = poster;
  image.src = poster;
  image.alt = lesson.title;

  shell.classList.remove("video-active");
  shell.classList.add("image-active");

  if (badge) {
    badge.innerText = videoSrc ? "Lesson Video" : "Lesson Preview";
  }

  if (meta) {
    meta.innerText = videoSrc
      ? "Local MP4 playback available"
      : "Image preview shown for this lesson";
  }

  player.onerror = function () {
    shell.classList.remove("video-active");
    shell.classList.add("image-active");
    if (meta) {
      meta.innerText = "Video unavailable, showing lesson preview";
    }
  };

  player.onloadeddata = function () {
    shell.classList.remove("image-active");
    shell.classList.add("video-active");
    if (meta) {
      meta.innerText = "Local MP4 ready to play";
    }
  };

  if (videoSrc) {
    player.src = videoSrc;
  }

  player.load();
}

function moveLesson(direction) {
  var latestCourseView = LMSDemo.getCourseView(playerState.course.id);
  var allLessons = latestCourseView.modules.flatMap(function (module) {
    return module.lessons;
  });
  var currentIndex = allLessons.findIndex(function (item) {
    return item.id === playerState.selectedLessonId;
  });
  var nextLesson = allLessons[currentIndex + direction];
  if (!nextLesson) return;

  playerState.selectedLessonId = nextLesson.id;
  LMSDemo.setLastAccessed(playerState.course.id, nextLesson.id);
  refreshPlayer();
}

function completeCurrentLesson() {
  if (!playerState.course || !playerState.selectedLessonId) return;

  var beforeProgress = playerState.course.progress;
  playerState.course = LMSDemo.markLessonComplete(playerState.course.id, playerState.selectedLessonId);
  var afterProgress = playerState.course.progress;

  if (beforeProgress < 100 && afterProgress >= 100) {
    alert("Course completed. Your certificate is now unlocked on the certificates page.");
  } else if (afterProgress === beforeProgress) {
    alert("This lesson is already marked complete.");
  } else {
    alert("Lesson marked complete. Progress is now " + afterProgress + "%.");
  }

  refreshPlayer();
}

function completeEntireCourse() {
  if (!playerState.course) return;

  var beforeProgress = playerState.course.progress;
  playerState.course = LMSDemo.markCourseComplete(playerState.course.id, playerState.selectedLessonId);

  if (!playerState.course) return;

  if (beforeProgress >= 100) {
    alert("This course is already marked complete.");
  } else {
    alert("All lessons marked complete. Your certificate is now unlocked on the certificates page.");
  }

  refreshPlayer();
}

function renderCompleteCourseButton() {
  var completeButton = document.getElementById("completeCourseBtn");
  if (!completeButton || !playerState.course) return;

  if (playerState.course.progress >= 100) {
    completeButton.innerText = "Course Completed";
    completeButton.disabled = true;
  } else if (!playerState.course.totalLessons) {
    completeButton.innerText = "No Lessons Yet";
    completeButton.disabled = true;
  } else {
    completeButton.innerText = "Mark Course as Completed";
    completeButton.disabled = false;
  }
}

function renderMobileCourseContent(course) {
  var curriculum = document.querySelector(".curriculum");
  if (!curriculum || !course) return;

  var existingDescription = curriculum.querySelector(".mobile-course-description");
  if (existingDescription) {
    existingDescription.remove();
  }

  var existingTools = curriculum.querySelector(".mobile-course-tools");
  if (existingTools) {
    existingTools.remove();
  }

  var mobileDescription = document.createElement("div");
  mobileDescription.className = "mobile-course-description";
  mobileDescription.innerHTML = "<p>" + getMinimalCourseDescription(course.description) + "</p>";
  curriculum.appendChild(mobileDescription);

  var mobileTools = document.createElement("div");
  mobileTools.className = "mobile-course-tools";
  mobileTools.innerHTML = getCourseToolButtons(course.id);
  curriculum.appendChild(mobileTools);
}

function getCourseToolButtons(courseId) {
  return `
    <button class="tool-btn" onclick="window.location.href='assignments.html?course=${courseId}'">Assignments</button>
    <button class="tool-btn" onclick="window.location.href='quiz.html?course=${courseId}'">Quizzes</button>
    <button class="tool-btn" onclick="window.location.href='project.html?course=${courseId}'">Project</button>
    <button class="tool-btn" onclick="window.location.href='notes.html?course=${courseId}'">Notes</button>
    <button class="tool-btn" onclick="window.location.href='certificates.html?course=${courseId}'">Certificates</button>
  `;
}

function getMinimalCourseDescription(description) {
  if (!description) return "A short guided course path with lessons, progress tracking, and learning support.";

  var normalized = String(description).trim().replace(/\s+/g, " ");
  if (normalized.length <= 110) return normalized;

  return normalized.slice(0, 107).trim() + "...";
}

function getLessonCountLabel(course) {
  var count = 0;

  course.modules.forEach(function (module) {
    count += module.lessons.length;
  });

  return count + " lessons";
}

function bindTabs() {
  var tabs = document.querySelectorAll(".tab");
  if (!tabs.length) return;

  tabs.forEach(function (tab) {
    tab.onclick = function () {
      tabs.forEach(function (button) {
        button.classList.remove("active");
      });
      tab.classList.add("active");
      playerState.activeTab = tab.dataset.tab;
      renderSelectedLesson();
    };
  });
}
