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
    renderNoEnrollmentState();
    return;
  }
  var assignments = LMSDemo.getAssignments(courseId);
  var course = LMSDemo.getCourseView(courseId);

  updateNavigation(courseId);
  renderSidebar(assignments, course);
  loadAssignment(assignments[0] || null, course);
});

var currentAssignment = null;
var currentCourse = null;

function renderNoEnrollmentState() {
  var sidebar = document.querySelector(".week-sidebar");
  var weekTitle = document.getElementById("weekTitle");
  var assignmentForm = document.getElementById("assignmentForm");
  var submissionMessage = document.getElementById("submissionMessage");

  if (sidebar) {
    sidebar.innerHTML = "<h3>Assignments</h3><ul><li class='active'><strong>No courses enrolled</strong><span>Enroll to unlock course assignments</span></li></ul>";
  }

  if (weekTitle) {
    weekTitle.innerText = "No assignments yet";
  }

  if (assignmentForm) {
    assignmentForm.style.display = "block";
    assignmentForm.innerHTML = "<div class='assignment-meta'><p>Your assignment workspace is empty because you have not enrolled in a course yet.</p><p><a href='courses.html' style='color:#2563eb;font-weight:600;text-decoration:none;'>Browse available courses</a></p></div>";
  }

  if (submissionMessage) {
    submissionMessage.style.display = "none";
  }
}

function updateNavigation(courseId) {
  var projectLink = document.querySelector('a[href^="project.html"]');
  var notesLink = document.querySelector('a[href^="notes.html"]');
  if (projectLink) projectLink.href = "project.html?course=" + courseId;
  if (notesLink) notesLink.href = "notes.html?course=" + courseId;
}

function renderSidebar(assignments, course) {
  var sidebar = document.querySelector(".week-sidebar");
  if (!sidebar || !course) return;

  sidebar.innerHTML = "<h3>" + course.title + " Assignments</h3><ul></ul>";
  var list = sidebar.querySelector("ul");

  assignments.forEach(function (assignment, index) {
    var li = document.createElement("li");
    li.className = index === 0 ? "active" : "";
    li.innerHTML = "<strong>" + assignment.title + "</strong><span>" + (assignment.submitted ? "Submitted" : assignment.statusLabel) + "</span>";
    li.onclick = function () {
      document.querySelectorAll(".week-sidebar li").forEach(function (item) {
        item.classList.remove("active");
      });
      li.classList.add("active");
      loadAssignment(assignment, course);
    };
    list.appendChild(li);
  });
}

function loadAssignment(assignment, course) {
  currentAssignment = assignment;
  currentCourse = course;

  var assignmentForm = document.getElementById("assignmentForm");
  var submissionMessage = document.getElementById("submissionMessage");
  var weekTitle = document.getElementById("weekTitle");
  if (!assignmentForm || !weekTitle || !course) return;

  submissionMessage.style.display = "none";

  if (!assignment) {
    weekTitle.innerText = course.title + " - No assignments available";
    assignmentForm.innerHTML = "<div class='assignment-meta'><p>No active assignment is linked to this course right now.</p></div>";
    return;
  }

  weekTitle.innerText = assignment.title;
  assignmentForm.style.display = "block";
  assignmentForm.innerHTML = "";

  assignmentForm.innerHTML += "<div class='assignment-meta'>" +
    "<p><strong>Course:</strong> " + assignment.courseTitle + "</p>" +
    "<p><strong>Module:</strong> " + assignment.moduleTitle + "</p>" +
    "<p><strong>Due Date:</strong> " + assignment.dueDate + "</p>" +
    "<p><strong>Status:</strong> " + (assignment.submitted ? "Submitted" : "Pending") + "</p>" +
    (assignment.referencePath ? "<p><strong>Reference:</strong> <a href='" + assignment.referencePath + "' target='_blank' rel='noopener' style='color:#2563eb;font-weight:600;text-decoration:none;'>" + (assignment.referenceName || "Open reference file") + "</a></p>" : "") +
    "</div>";

  assignmentForm.innerHTML += "<div class='question-block'><h4>Instructions</h4><p>" + assignment.instructions + "</p><ul class='detail-list'>" +
    assignment.deliverables.map(function (item) { return "<li>" + item + "</li>"; }).join("") +
    "</ul></div>";

  assignment.questions.forEach(function (question, index) {
    var block = document.createElement("div");
    block.className = "question-block";
    block.innerHTML = "<h4>" + (index + 1) + ". " + question.question + "</h4>";

    if (question.type === "mcq") {
      question.options.forEach(function (option) {
        var label = document.createElement("label");
        var checked = assignment.answers && assignment.answers[question.id] === option ? "checked" : "";
        label.innerHTML = '<input type="radio" name="' + question.id + '" value="' + option + '" ' + checked + '> ' + option;
        block.appendChild(label);
      });
    } else {
      var textarea = document.createElement("textarea");
      textarea.name = question.id;
      textarea.rows = 5;
      textarea.placeholder = "Write your academic response here...";
      textarea.value = assignment.answers && assignment.answers[question.id] ? assignment.answers[question.id] : "";
      block.appendChild(textarea);
    }

    assignmentForm.appendChild(block);
  });

  assignmentForm.innerHTML += "<div class='question-block'><h4>Submission Notes</h4><textarea id='assignmentResponse' rows='6' placeholder='Summarize your final response, assumptions, or references used...'>" +
    (assignment.responseText || "") +
    "</textarea><div class='upload-placeholder'><span>Attachment</span><input id='attachmentName' type='text' placeholder='Enter file name for demo upload' value='" +
    (assignment.attachmentName || "") +
    "'></div></div>";

  if (assignment.submitted) {
    assignmentForm.innerHTML += "<div class='question-block feedback-card'><h4>Faculty Review</h4><p><strong>Submitted:</strong> " + (assignment.submittedAt || "Recently") + "</p><p><strong>Marks:</strong> " + (assignment.marks || "Awaiting evaluation") + "</p><p><strong>Feedback:</strong> " + (assignment.feedback || assignment.feedbackPlaceholder) + "</p></div>";
  }

  var actions = document.createElement("div");
  actions.className = "form-actions";
  actions.innerHTML = "<button type='button' class='submit-btn' " + (assignment.submitted ? "disabled" : "") + ">" + (assignment.submitted ? "Submitted" : "Submit Assignment") + "</button>";
  actions.querySelector("button").onclick = submitAssignment;
  assignmentForm.appendChild(actions);
}

function submitAssignment() {
  if (!currentAssignment || !currentCourse) return;

  var answers = {};
  currentAssignment.questions.forEach(function (question) {
    if (question.type === "mcq") {
      var selected = document.querySelector('input[name="' + question.id + '"]:checked');
      answers[question.id] = selected ? selected.value : "";
    } else {
      var textField = document.querySelector('[name="' + question.id + '"]');
      answers[question.id] = textField ? textField.value.trim() : "";
    }
  });

  var responseField = document.getElementById("assignmentResponse");
  var attachmentField = document.getElementById("attachmentName");
  var responseText = responseField ? responseField.value.trim() : "";
  var attachmentName = attachmentField ? attachmentField.value.trim() : "";

  var updated = LMSDemo.submitAssignment(currentAssignment.id, {
    responseText: responseText,
    answers: answers,
    attachmentName: attachmentName
  });

  var submissionMessage = document.getElementById("submissionMessage");
  if (submissionMessage) {
    submissionMessage.style.display = "block";
    submissionMessage.innerHTML = "<strong>Status Updated:</strong> " + updated.title + " is now submitted for " + updated.courseTitle + ". Faculty review and marks will appear here once evaluated.";
  }

  var refreshedAssignments = LMSDemo.getAssignments(currentCourse.id);
  renderSidebar(refreshedAssignments, currentCourse);
  var active = refreshedAssignments.find(function (assignment) {
    return assignment.id === currentAssignment.id;
  });
  loadAssignment(active, currentCourse);
}
