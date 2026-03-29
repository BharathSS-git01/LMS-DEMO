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
    renderEmptyNotesWorkspace();
    return;
  }
  var course = LMSDemo.getCourseView(courseId);
  var notes = LMSDemo.getNotesByCourse(courseId);
  if (!course) return;

  updateNavigation(courseId);
  renderSidebar(notes, course);
  renderNotes(notes, course, null);
});

function updateNavigation(courseId) {
  var playerLink = document.querySelector('a[href^="course-player.html"]');
  if (playerLink) {
    playerLink.href = "course-player.html?course=" + courseId;
  }
}

function renderSidebar(notes, course) {
  var sidebar = document.getElementById("notesSidebar");
  if (!sidebar) return;

  sidebar.innerHTML = "<h3>" + course.title + " Notes</h3>";

  var allFilter = document.createElement("div");
  allFilter.className = "note-filter active";
  allFilter.innerHTML = "<strong>All Modules</strong><span>" + notes.length + " note sets available</span>";
  allFilter.onclick = function () {
    setActiveFilter(allFilter);
    renderNotes(notes, course, null);
  };
  sidebar.appendChild(allFilter);

  course.modules.forEach(function (module) {
    var moduleNotes = notes.filter(function (note) { return note.moduleId === module.id; });
    var filter = document.createElement("div");
    filter.className = "note-filter";
    filter.innerHTML = "<strong>" + module.title + "</strong><span>" + moduleNotes.length + " items</span>";
    filter.onclick = function () {
      setActiveFilter(filter);
      renderNotes(moduleNotes, course, module.title);
    };
    sidebar.appendChild(filter);
  });
}

function renderEmptyNotesWorkspace() {
  var sidebar = document.getElementById("notesSidebar");
  var content = document.getElementById("notesContent");
  var headerMeta = document.getElementById("notesHeaderMeta");

  if (sidebar) {
    sidebar.innerHTML = "<h3>Course Notes</h3><div class='note-filter active'><strong>No enrolled courses</strong><span>Notes unlock after enrollment</span></div>";
  }

  if (headerMeta) {
    headerMeta.innerText = "No notes available";
  }

  if (content) {
    content.innerHTML = "<div class='notes-hero'><h1>No Notes Yet</h1><p>Your personal notes space is empty because you have not enrolled in a course yet.</p></div><div class='note-card'><h3>Start learning</h3><p>Enroll in a course to unlock study notes, lesson resources, and module materials for your own account.</p><p><a href='courses.html' style='color:#2563eb;font-weight:600;text-decoration:none;'>Browse Courses</a></p></div>";
  }
}

function renderNotes(notes, course, moduleTitle) {
  var content = document.getElementById("notesContent");
  var headerMeta = document.getElementById("notesHeaderMeta");
  if (!content || !headerMeta) return;

  headerMeta.innerText = course.title + " | " + (moduleTitle || "All Modules");
  content.innerHTML = "<div class='notes-hero'><h1>" + course.title + " Study Material</h1><p>Use these course-linked notes to revise lessons, review modules, and continue learning with context from your enrolled curriculum.</p></div>";

  if (!notes.length) {
    content.innerHTML += "<div class='note-card'><h3>No notes available</h3><p>Notes for this course or module will appear here once published.</p></div>";
    return;
  }

  notes.forEach(function (note) {
    content.innerHTML += "<article class='note-card'><h3>" + note.title + "</h3><p>" + note.description + "</p>" +
      (note.content ? "<div class='note-detail'><p>" + note.content + "</p></div>" : "") +
      "<div class='note-meta'><span>" + note.courseTitle + "</span><span>" + note.moduleTitle + "</span><span>" + note.type + "</span></div><div class='note-actions'><button onclick=\"viewNote('" + note.id + "')\">View Note</button><button onclick=\"downloadNote('" + note.id + "')\">Download Resource</button></div></article>";
  });
}

function setActiveFilter(target) {
  document.querySelectorAll(".note-filter").forEach(function (item) {
    item.classList.remove("active");
  });
  target.classList.add("active");
}

function viewNote(noteId) {
  var note = (window.LMSDemo ? LMSDemo.getNotes() : []).find(function (item) { return item.id === noteId; });
  if (note && note.resourcePath) {
    window.open(note.resourcePath, "_blank", "noopener");
    return;
  }
  alert((note ? note.title : "This note") + " is already visible in the note card. Use the module filters to focus your revision.");
}

function downloadNote(noteId) {
  var note = (window.LMSDemo ? LMSDemo.getNotes() : []).find(function (item) { return item.id === noteId; });
  if (note && note.resourcePath) {
    var link = document.createElement("a");
    link.href = note.resourcePath;
    link.download = note.resourceName || (note.title + "-resource");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }
  alert("No uploaded resource is attached to this note yet.");
}
