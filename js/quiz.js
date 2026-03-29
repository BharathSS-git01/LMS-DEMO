document.addEventListener("DOMContentLoaded", function () {
  var quizDashboard = document.querySelector(".quiz-dashboard");
  if (!quizDashboard || !window.LMSDemo) return;

  if (!LMSDemo.getSessionStudent()) {
    window.location.href = "login.html";
    return;
  }

  var params = new URLSearchParams(window.location.search);
  var firstEnrolledCourse = LMSDemo.getEnrolledCourses()[0];
  var courseId = params.get("course") || (firstEnrolledCourse && firstEnrolledCourse.id);
  var quizzes = LMSDemo.getQuizzes(courseId);
  var summary = LMSDemo.getDashboardSummary();

  updateNavigation(courseId);

  quizDashboard.innerHTML = "<section class='quiz-hero'><h1>Assessment Readiness</h1><p>Attempt quizzes linked to your enrolled courses and review answers immediately after submission.</p><div class='quiz-summary'><div><strong>Ready</strong><span>" + summary.readyQuizzesCount + "</span></div><div><strong>Completed</strong><span>" + quizzes.filter(function (quiz) { return quiz.completed; }).length + "</span></div><div><strong>Assignments Pending</strong><span>" + summary.pendingAssignmentsCount + "</span></div></div></section><section class='quiz-list'></section>";

  var list = quizDashboard.querySelector(".quiz-list");
  if (!quizzes.length) {
    list.innerHTML = "<div class='quiz-card'><div class='quiz-info'><h3>No quizzes available</h3><p>" + (courseId ? "This course does not currently have a quiz assigned. Continue lessons or check assignments and notes instead." : "Your quiz workspace is empty because you have not enrolled in a course yet.") + "</p><p><a href='courses.html' style='color:#2563eb;font-weight:600;text-decoration:none;'>Browse Courses</a></p></div></div>";
    return;
  }

  quizzes.forEach(function (quiz) {
    var card = document.createElement("div");
    card.className = "quiz-card";
    var instructionText = Array.isArray(quiz.instructions)
      ? (quiz.instructions[0] || "Complete all questions before submitting.")
      : (quiz.instructions || "Complete all questions before submitting.");

    var statusClass = quiz.status === "completed" ? "completed" : quiz.status === "review" ? "review" : "ready";
    var statusLabel = quiz.status === "completed" ? "Completed" : quiz.status === "review" ? "Ready for Review" : "Ready to Attempt";
    var actionLabel = quiz.completed ? "Review Attempt" : "Open Exam";
    var actionHref = "exam.html?quiz=" + quiz.id + "&course=" + quiz.courseId;

    card.innerHTML = "<div class='quiz-info'>" +
      "<h3>" + quiz.courseTitle + " - " + quiz.title + "</h3>" +
      "<p><strong>Questions:</strong> " + quiz.totalQuestions + "</p>" +
      "<p><strong>Duration:</strong> " + quiz.durationMinutes + " minutes</p>" +
      "<p><strong>Total Marks:</strong> " + quiz.totalMarks + "</p>" +
      "<p><strong>Instructions:</strong> " + instructionText + "</p>" +
      (quiz.referencePath ? "<p><strong>Reference:</strong> <a href='" + quiz.referencePath + "' target='_blank' rel='noopener' style='color:#2563eb;font-weight:600;text-decoration:none;'>" + (quiz.referenceName || "Open reference file") + "</a></p>" : "") +
      "<span class='status " + statusClass + "'>" + statusLabel + "</span>" +
      (quiz.completed ? "<p class='score-line'><strong>Latest Score:</strong> " + quiz.score + "/" + quiz.totalMarks + " | " + quiz.correctCount + "/" + quiz.totalQuestions + " correct</p>" : "") +
      "</div>" +
      "<div class='quiz-action'><a href='" + actionHref + "'><button>" + actionLabel + "</button></a></div>";

    list.appendChild(card);
  });
});

function updateNavigation(courseId) {
  var projectLink = document.querySelector('a[href^="project.html"]');
  var notesLink = document.querySelector('a[href^="notes.html"]');
  if (projectLink) projectLink.href = courseId ? "project.html?course=" + courseId : "project.html";
  if (notesLink) notesLink.href = courseId ? "notes.html?course=" + courseId : "notes.html";
}
