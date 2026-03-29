var examState = {
  quiz: null,
  review: null,
  currentIndex: 0,
  answers: {},
  timer: null,
  remainingSeconds: 0
};

document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  if (!LMSDemo.getSessionStudent()) {
    window.location.href = "login.html";
    return;
  }

  var params = new URLSearchParams(window.location.search);
  var firstQuiz = LMSDemo.getQuizzes()[0];
  var quizId = params.get("quiz") || (firstQuiz && firstQuiz.id);
  var quiz = LMSDemo.getQuizById(quizId);
  if (!quiz) {
    window.location.href = "quiz.html";
    return;
  }

  examState.quiz = quiz;
  examState.answers = Object.assign({}, quiz.selectedAnswers || {});
  examState.review = quiz.completed ? LMSDemo.getQuizReview(quiz.id) : null;
  examState.remainingSeconds = quiz.durationMinutes * 60;

  bindActions();
  renderHeader();
  renderPalette();

  if (examState.review) {
    renderQuestion();
    renderReview();
  } else {
    startTimer();
    renderQuestion();
  }
});

function bindActions() {
  document.getElementById("prevBtn").onclick = function () {
    if (examState.currentIndex > 0) {
      examState.currentIndex -= 1;
      renderQuestion();
    }
  };

  document.getElementById("nextBtn").onclick = function () {
    saveCurrentSelection();
    if (examState.currentIndex < examState.quiz.questions.length - 1) {
      examState.currentIndex += 1;
      renderQuestion();
    }
  };

  document.getElementById("clearBtn").onclick = function () {
    var question = examState.quiz.questions[examState.currentIndex];
    delete examState.answers[question.id];
    renderQuestion();
  };

  document.getElementById("submitExamBtn").onclick = submitExam;
}

function renderHeader() {
  document.getElementById("examTitle").innerText = examState.quiz.title;
  document.getElementById("examMeta").innerText = examState.quiz.courseTitle + " | " + examState.quiz.totalQuestions + " questions | " + examState.quiz.totalMarks + " marks";
}

function renderPalette() {
  var palette = document.getElementById("questionPalette");
  palette.innerHTML = "";

  examState.quiz.questions.forEach(function (question, index) {
    var button = document.createElement("div");
    button.className = "p-btn";
    if (index === examState.currentIndex) button.classList.add("current");
    if (typeof examState.answers[question.id] === "number") button.classList.add("answered");
    button.innerText = index + 1;
    button.onclick = function () {
      saveCurrentSelection();
      examState.currentIndex = index;
      renderQuestion();
    };
    palette.appendChild(button);
  });
}

function renderQuestion() {
  var question = examState.quiz.questions[examState.currentIndex];
  document.getElementById("questionNumber").innerText = "Question " + (examState.currentIndex + 1) + " of " + examState.quiz.questions.length;
  document.getElementById("questionBox").innerText = question.prompt;

  var optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  question.options.forEach(function (option, index) {
    var label = document.createElement("label");
    var selected = examState.answers[question.id] === index;
    if (selected) label.classList.add("selected");

    if (examState.review) {
      if (index === question.correctOption) label.classList.add("correct");
      if (selected && index !== question.correctOption) label.classList.add("wrong");
    }

    label.innerHTML = '<input type="radio" name="questionOption" value="' + index + '" ' + (selected ? "checked" : "") + ' ' + (examState.review ? "disabled" : "") + '> <span>' + option + '</span>';
    label.onclick = function () {
      if (examState.review) return;
      examState.answers[question.id] = index;
      renderPalette();
      renderQuestion();
    };
    optionsContainer.appendChild(label);
  });

  document.getElementById("prevBtn").disabled = examState.review || examState.currentIndex === 0;
  document.getElementById("clearBtn").disabled = !!examState.review;
  document.getElementById("nextBtn").disabled = !!examState.review || examState.currentIndex === examState.quiz.questions.length - 1;
  document.getElementById("submitExamBtn").disabled = !!examState.review;
}

function saveCurrentSelection() {
  var selected = document.querySelector('input[name="questionOption"]:checked');
  if (!selected) return;
  var question = examState.quiz.questions[examState.currentIndex];
  examState.answers[question.id] = Number(selected.value);
  renderPalette();
}

function startTimer() {
  updateTimerDisplay();
  examState.timer = setInterval(function () {
    examState.remainingSeconds -= 1;
    updateTimerDisplay();
    if (examState.remainingSeconds <= 0) {
      clearInterval(examState.timer);
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  var minutes = String(Math.max(Math.floor(examState.remainingSeconds / 60), 0)).padStart(2, "0");
  var seconds = String(Math.max(examState.remainingSeconds % 60, 0)).padStart(2, "0");
  document.getElementById("time").innerText = minutes + ":" + seconds;
}

function submitExam() {
  if (examState.review) return;

  saveCurrentSelection();
  if (examState.timer) {
    clearInterval(examState.timer);
  }

  examState.review = LMSDemo.submitQuiz(examState.quiz.id, examState.answers);
  examState.quiz = LMSDemo.getQuizById(examState.quiz.id);
  renderPalette();
  renderQuestion();
  renderReview();
}

function renderReview() {
  var panel = document.getElementById("resultPanel");
  if (!panel || !examState.review) return;

  panel.classList.add("visible");
  panel.innerHTML = "<h3>Attempt Result</h3><div class='result-summary'>" +
    "<div><strong>Score</strong><p>" + examState.review.score + "/" + examState.review.totalMarks + "</p></div>" +
    "<div><strong>Correct</strong><p>" + examState.review.correctCount + "/" + examState.review.totalQuestions + "</p></div>" +
    "<div><strong>Submitted</strong><p>" + examState.review.submittedAt + "</p></div>" +
    "</div><h4>Answer Review</h4>";

  examState.review.review.forEach(function (item) {
    panel.innerHTML += "<div class='review-item " + (item.isCorrect ? "correct" : "wrong") + "'>" +
      "<p><strong>Q" + item.index + ":</strong> " + item.prompt + "</p>" +
      "<p><strong>Your answer:</strong> " + (item.selectedOption === null ? "Not answered" : item.options[item.selectedOption]) + "</p>" +
      "<p><strong>Correct answer:</strong> " + item.options[item.correctOption] + "</p>" +
      "<p><strong>Why:</strong> " + item.explanation + "</p>" +
      "</div>";
  });
}
