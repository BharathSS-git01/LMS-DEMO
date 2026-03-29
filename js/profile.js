document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  if (!LMSDemo.getSessionStudent()) {
    window.location.href = "login.html";
    return;
  }

  var profile = LMSDemo.getStudentProfile();
  var summary = LMSDemo.getDashboardSummary();
  var certificates = LMSDemo.getCertificates();
  var notifications = LMSDemo.getNotifications();

  setProfileDetails(profile);
  setAcademicStats(summary, certificates.length);
  setCertificatePanel(certificates);
  setNotifications(notifications);

  var modal = document.getElementById("editModal");
  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });
});

function goTo(page) {
  window.location.href = page;
}

function triggerUpload() {
  document.getElementById("imageUpload").click();
}

document.getElementById("imageUpload").addEventListener("change", function (event) {
  var file = event.target.files[0];
  if (!file) return;

  var reader = new FileReader();
  reader.onload = function () {
    document.getElementById("profileImage").src = reader.result;
    LMSDemo.setProfileImage(reader.result);
  };
  reader.readAsDataURL(file);
});

function setProfileDetails(profile) {
  document.getElementById("profileImage").src = profile.image;
  document.getElementById("studentName").innerText = profile.name;
  document.getElementById("emailField").value = profile.email;
  document.getElementById("phoneField").value = profile.phone;

  var studentInfo = document.querySelector(".student-info p");
  if (studentInfo) {
    studentInfo.innerText = profile.department + " | Reg No: " + profile.registerNo;
  }
}

function setAcademicStats(summary, certificateCount) {
  var cards = document.querySelectorAll(".glass-stat-card");
  if (!cards.length) return;
  var firstCourse = summary.continueCourse || summary.completedCourse;

  setStatCard(cards[0], "Courses Enrolled", summary.enrolledCount, 100, "my-courses.html");
  setStatCard(cards[1], "Assignments Pending", summary.pendingAssignmentsCount, 40, firstCourse ? "assignments.html?course=" + firstCourse.id : "courses.html");
  setStatCard(cards[2], "Quizzes Ready", summary.readyQuizzesCount, 75, firstCourse ? "quiz.html?course=" + firstCourse.id : "courses.html");
  setStatCard(cards[3], "Certificates Earned", certificateCount, certificateCount ? 100 : 25, "certificates.html");
}

function setStatCard(card, label, value, width, href) {
  card.querySelector(".stat-top h4").innerText = label;
  card.querySelector(".stat-top span").innerText = value;
  card.querySelector(".stat-progress div").style.width = width + "%";
  card.querySelector("button").onclick = function () {
    window.location.href = href;
  };
}

function setCertificatePanel(certificates) {
  var sectionTitle = document.querySelector(".premium-certificates h2");
  var card = document.querySelector(".certificate-card");
  if (!card) return;

  if (sectionTitle) {
    sectionTitle.innerText = "Completion Reflection";
  }

  if (certificates.length) {
    var certificate = certificates[0];
    card.innerHTML = `
      <div>
        <h3>${certificate.courseTitle} Certificate</h3>
        <p>Issued by Vidhya Vaaradhi LMS</p>
        <div class="certificate-requirements">
          <strong>Achievement Summary:</strong>
          <ul>
            <li>All lessons completed</li>
            <li>Assessment path satisfied</li>
            <li>Certificate ID ${certificate.id}</li>
          </ul>
        </div>
        <div class="certificate-status completed">
          Eligible & Certified
        </div>
      </div>
      <div>
        <button class="primary-btn" onclick="goTo('certificates.html')">View Certificate</button>
      </div>
    `;
  } else {
    card.innerHTML = `
      <div>
        <h3>No Certificates Yet</h3>
        <p>Your profile is ready for a fresh start.</p>
        <div class="certificate-requirements">
          <strong>What unlocks this section:</strong>
          <ul>
            <li>Enroll in a course</li>
            <li>Complete the lesson path</li>
            <li>Finish the required assessments</li>
          </ul>
        </div>
        <div class="certificate-status">
          Completion needed
        </div>
      </div>
      <div>
        <button class="primary-btn" onclick="goTo('courses.html')">Browse Courses</button>
      </div>
    `;
  }
}

function setNotifications(notifications) {
  var section = document.querySelector(".profile-notifications");
  if (!section) return;

  section.innerHTML = "<h2>Your Notifications</h2>";
  if (!notifications.length) {
    var empty = document.createElement("div");
    empty.className = "profile-notification info";
    empty.innerText = "No notifications yet. Your personal learning updates will appear here after you enroll.";
    section.appendChild(empty);
    return;
  }
  notifications.slice(0, 3).forEach(function (notification) {
    var div = document.createElement("div");
    div.className = "profile-notification " + notification.type;
    div.innerText = notification.message;
    section.appendChild(div);
  });
}

function openEditModal() {
  document.getElementById("editName").value = document.getElementById("studentName").innerText;
  document.getElementById("editEmail").value = document.getElementById("emailField").value;
  document.getElementById("editPhone").value = document.getElementById("phoneField").value;
  document.getElementById("editModal").classList.add("active");
  document.body.classList.add("profile-modal-open");
}

function closeModal() {
  var modal = document.getElementById("editModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.classList.remove("profile-modal-open");
}

function saveProfile() {
  var updatedProfile = LMSDemo.updateProfile({
    name: document.getElementById("editName").value,
    email: document.getElementById("editEmail").value,
    phone: document.getElementById("editPhone").value
  });

  setProfileDetails(updatedProfile);
  closeModal();
}

function downloadTranscript() {
  alert("Transcript export is mocked for the demo and will be backend-connected later.");
}
