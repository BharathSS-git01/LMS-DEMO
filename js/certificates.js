var modal = document.getElementById("certModal");
var preview = document.getElementById("certPreview");
var certGrid = document.getElementById("certGrid");

function viewCert(src, card) {
  if (card) {
    card.classList.toggle("expanded");
    return;
  }

  if (!modal) return;
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  preview.src = src;
  var modalDownload = document.getElementById("modalDownload");
  if (modalDownload) {
    modalDownload.href = src;
  }
}

function closeCert() {
  if (!modal) return;
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo || !certGrid) return;

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeCert();
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal && modal.style.display === "flex") {
      closeCert();
    }
  });

  if (!LMSDemo.getSessionStudent()) {
    window.location.href = "login.html";
    return;
  }
  var certificates = LMSDemo.getCertificates();
  var readiness = LMSDemo.getCertificateReadiness();
  renderHero(certificates, readiness);
  renderCertificates(certificates, readiness);
});

function renderHero(certificates, readiness) {
  var hero = document.querySelector(".cert-hero");
  if (!hero) return;

  var earnedCount = certificates.length;
  var inProgress = readiness.filter(function (item) {
    return item.status === "in-progress";
  });

  hero.innerHTML = `
    <h1>Your Certifications</h1>
    <p>${earnedCount} earned certificate${earnedCount === 1 ? "" : "s"} reflected from completed course progress.</p>
    <div class="cert-summary-grid">
      <div class="cert-summary-card">
        <strong>Earned</strong>
        <span>${earnedCount}</span>
      </div>
      <div class="cert-summary-card">
        <strong>In Progress</strong>
        <span>${inProgress.length ? inProgress[0].courseTitle : "None"}</span>
      </div>
      <div class="cert-summary-card">
        <strong>Next Unlock</strong>
        <span>${inProgress.length ? inProgress[0].remainingLessons + " lessons remaining" : "All eligible certificates unlocked"}</span>
      </div>
    </div>
  `;
}

function renderCertificates(certificates, readiness) {
  certGrid.innerHTML = "";

  if (!certificates.length) {
    certGrid.innerHTML =
      '<p style="text-align:center;color:#64748b;">Certificates appear only after you complete one of your enrolled courses. Your personal certificate history will appear here as you progress.</p>';
    return;
  }

  certificates.forEach(function (certificate) {
    var card = document.createElement("div");
    card.className = "cert-card";
    card.innerHTML = `
      <div class="cert-header">
        <h3>${certificate.courseTitle}</h3>
        <span>Issued: ${certificate.issueDate}</span>
        <p>${certificate.studentName} | Certificate ID ${certificate.id}</p>
        <p>Status: ${certificate.status}</p>
      </div>
      <div class="cert-body">
        <img src="${certificate.image}" alt="${certificate.courseTitle} certificate">
      </div>
      <div class="cert-actions">
        <button class="view-btn" onclick="viewCert('${certificate.image}', this.parentElement.parentElement)">View</button>
        <a href="${certificate.image}" download>
          <button>Download</button>
        </a>
      </div>
    `;
    certGrid.appendChild(card);
  });

  var inProgress = readiness.filter(function (item) {
    return item.status === "in-progress";
  });

  if (inProgress.length) {
    var note = document.createElement("div");
    note.className = "certificate-status-note";
    note.innerHTML =
      "<strong>Still in progress:</strong> " +
      inProgress
        .map(function (item) {
          return item.courseTitle + " (" + item.progress + "% complete, " + item.remainingLessons + " lessons remaining)";
        })
        .join(", ");
    certGrid.appendChild(note);
  }
}
