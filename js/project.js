var projectState = {
  course: null,
  project: null
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
    renderEmptyProjectWorkspace();
    return;
  }
  var projects = LMSDemo.getProjects(courseId);
  var course = LMSDemo.getCourseView(courseId);
  if (!course) return;

  updateNavigation(courseId);
  renderSidebar(projects, courseId);
  loadProject(projects[0] || null, course);
});

function updateNavigation(courseId) {
  var playerLink = document.querySelector('a[href^="course-player.html"]');
  if (playerLink) {
    playerLink.href = "course-player.html?course=" + courseId;
  }
}

function renderSidebar(projects, courseId) {
  var sidebar = document.getElementById("projectSidebar");
  if (!sidebar) return;

  sidebar.innerHTML = "<h3>Course Projects</h3>";
  if (!projects.length) {
    sidebar.innerHTML += "<div class='project-item active'><strong>No projects</strong><span>This course has no linked project yet</span></div>";
    return;
  }

  projects.forEach(function (project, index) {
    var item = document.createElement("div");
    item.className = "project-item" + (index === 0 ? " active" : "");
    item.innerHTML = "<strong>" + project.title + "</strong><span>" + project.courseTitle + " | " + formatStatus(project.status) + "</span>";
    item.onclick = function () {
      document.querySelectorAll(".project-item").forEach(function (entry) { entry.classList.remove("active"); });
      item.classList.add("active");
      loadProject(project, LMSDemo.getCourseView(courseId));
    };
    sidebar.appendChild(item);
  });
}

function renderEmptyProjectWorkspace() {
  var sidebar = document.getElementById("projectSidebar");
  var content = document.getElementById("projectContent");
  var headerMeta = document.getElementById("projectHeaderMeta");

  if (sidebar) {
    sidebar.innerHTML = "<h3>Course Projects</h3><div class='project-item active'><strong>No course enrolled</strong><span>Projects unlock after enrollment</span></div>";
  }

  if (headerMeta) {
    headerMeta.innerText = "No project workspace yet.";
  }

  if (content) {
    content.innerHTML = "<div class='project-panel'><h1>No active project</h1><p>Your project area is ready, but it is empty until you enroll in a course with a linked project.</p><p><a href='courses.html' style='color:#2563eb;font-weight:600;text-decoration:none;'>Browse Courses</a></p></div>";
  }
}

function loadProject(project, course) {
  projectState.project = project;
  projectState.course = course;

  var content = document.getElementById("projectContent");
  var headerMeta = document.getElementById("projectHeaderMeta");
  if (!content || !headerMeta) return;

  if (!project) {
    headerMeta.innerText = "No project linked to this course yet.";
    content.innerHTML = "<div class='project-panel'><h1>No active project</h1><p>This course does not currently have a project workspace.</p></div>";
    return;
  }

  headerMeta.innerText = project.courseTitle + " | " + project.title;
  content.innerHTML = "<div class='project-panel'><span class='status-badge'>" + formatStatus(project.status) + "</span><h1>" + project.title + "</h1><p>" + project.subtitle + "</p><p>" + project.description + "</p></div>" +
    "<div class='project-grid'><article><h3>Deadline</h3><p>" + project.deadline + "</p></article><article><h3>Course Progress</h3><p>" + course.progress + "% complete in " + course.title + "</p></article><article><h3>Submission Status</h3><p>" + formatStatus(project.status) + (project.submittedAt ? " on " + project.submittedAt : "") + "</p></article></div>" +
    "<div class='project-panel'><h3>Objectives</h3><ul>" + project.objectives.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul></div>" +
    "<div class='project-panel'><h3>Deliverables</h3><ul>" + project.deliverables.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul></div>" +
    "<div class='project-panel'><h3>Workspace Notes</h3><textarea id='projectResponse' rows='7' placeholder='Add your project summary, progress notes, or submission message...'>" + (project.responseText || "") + "</textarea><input id='projectAttachment' type='text' placeholder='Enter attachment file name for demo upload' value='" + (project.attachmentName || "") + "'><div class='project-actions'><button class='secondary' id='saveDraftBtn'>Save Draft</button><button class='primary' id='submitProjectBtn'>" + (project.status === "completed" || project.status === "submitted" ? "View Submission" : "Submit Project") + "</button></div></div>";

  document.getElementById("saveDraftBtn").onclick = saveDraft;
  document.getElementById("submitProjectBtn").onclick = submitProject;
}

function saveDraft() {
  if (!projectState.project) return;
  var updated = LMSDemo.saveProjectDraft(projectState.project.id, {
    status: "in-progress",
    responseText: document.getElementById("projectResponse").value.trim(),
    attachmentName: document.getElementById("projectAttachment").value.trim()
  });
  loadProject(updated, projectState.course);
}

function submitProject() {
  if (!projectState.project) return;
  var finalStatus = projectState.project.status === "completed" ? "completed" : "submitted";
  var updated = LMSDemo.submitProject(projectState.project.id, {
    status: finalStatus,
    responseText: document.getElementById("projectResponse").value.trim(),
    attachmentName: document.getElementById("projectAttachment").value.trim()
  });
  loadProject(updated, projectState.course);
  alert(updated.title + " is now marked as " + formatStatus(updated.status).toLowerCase() + ".");
}

function formatStatus(status) {
  if (status === "not-started") return "Not Started";
  if (status === "in-progress") return "In Progress";
  if (status === "submitted") return "Submitted";
  if (status === "completed") return "Completed";
  return status;
}
