/* ===== LESSON SWITCH ===== */

const lessons = document.querySelectorAll(".lesson");
const videoPlayer = document.getElementById("videoPlayer");
const lessonTitle = document.getElementById("lessonTitle");

lessons.forEach(lesson => {

  lesson.addEventListener("click", () => {

    lessons.forEach(l => l.classList.remove("active"));
    lesson.classList.add("active");

    videoPlayer.src = lesson.dataset.video;
    lessonTitle.innerText = lesson.dataset.title;

  });

});



/* ===== TABS ===== */

const tabs = document.querySelectorAll(".tab");
const tabContent = document.getElementById("tabContent");

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const tabName = tab.dataset.tab;

    if(tabName==="overview"){
      tabContent.innerHTML="<p>Course overview content.</p>";
    }

    if(tabName==="resources"){
      tabContent.innerHTML="<p>Download PDFs & slides.</p>";
    }

    if(tabName==="discussion"){
      tabContent.innerHTML="<p>Discussion forum coming soon.</p>";
    }

    if(tabName==="assignments"){
      tabContent.innerHTML="<p>Submit assignments here.</p>";
    }

  });

});



/* ===== SIDEBAR TOOLS ===== */

document.querySelectorAll(".tool-btn")
.forEach(btn => {

  btn.addEventListener("click", () => {

    const text = btn.innerText;

    if(text.includes("Assignments")){
      window.location.href = "../assignments.html";
    } else {
      tabContent.innerHTML =
        `<p>${text} panel loading...</p>`;
    }

  });

});

/* ===== NAVIGATION FUNCTIONS ===== */

function goToCourses() {
  window.location.href = "../my-courses.html";
}

function goToAssignments() {
  window.location.href = "../assignments.html";
}

function goToCertificates() {
  window.location.href = "../certificates.html";
}

