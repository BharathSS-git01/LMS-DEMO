document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  renderAnnouncements();

  document.getElementById('announcementForm').addEventListener('submit', function (event) {
    event.preventDefault();
    AdminLMS.saveAnnouncement({
      id: document.getElementById('announcementId').value,
      title: document.getElementById('announcementTitle').value.trim(),
      category: document.getElementById('announcementCategory').value.trim(),
      publishDate: document.getElementById('announcementDate').value,
      audience: document.getElementById('announcementAudience').value.trim() || 'All Students',
      content: document.getElementById('announcementContent').value.trim()
    });
    resetAnnouncementForm();
    renderAnnouncements();
  });

  document.getElementById('announcementReset').onclick = resetAnnouncementForm;
});

function renderAnnouncements() {
  var tbody = document.getElementById('announcementsTable');
  if (!tbody) return;
  tbody.innerHTML = '';

  var announcements = AdminLMS.getAnnouncements();
  if (!announcements.length) {
    tbody.innerHTML = '<tr><td colspan="5"><div class="empty-state">No announcements posted yet.</div></td></tr>';
    return;
  }

  announcements.forEach(function (announcement) {
    tbody.innerHTML += '<tr>' +
      '<td><strong>' + announcement.title + '</strong><br><span class="helper-text">' + announcement.content + '</span></td>' +
      '<td>' + announcement.category + '</td>' +
      '<td>' + announcement.audience + '</td>' +
      '<td>' + announcement.publishDate + '</td>' +
      '<td class="table-actions"><button class="secondary" onclick="editAnnouncement(\'' + announcement.id + '\')">Edit</button><button class="danger" onclick="deleteAnnouncementRecord(\'' + announcement.id + '\')">Delete</button></td>' +
      '</tr>';
  });
}

function editAnnouncement(announcementId) {
  var announcement = AdminLMS.getAnnouncements().find(function (item) { return item.id === announcementId; });
  if (!announcement) return;
  document.getElementById('announcementId').value = announcement.id;
  document.getElementById('announcementTitle').value = announcement.title;
  document.getElementById('announcementCategory').value = announcement.category;
  document.getElementById('announcementDate').value = announcement.publishDate;
  document.getElementById('announcementAudience').value = announcement.audience;
  document.getElementById('announcementContent').value = announcement.content;
}

function deleteAnnouncementRecord(announcementId) {
  if (!confirm('Delete this announcement?')) return;
  AdminLMS.deleteAnnouncement(announcementId);
  renderAnnouncements();
  resetAnnouncementForm();
}

function resetAnnouncementForm() {
  document.getElementById('announcementForm').reset();
  document.getElementById('announcementId').value = '';
}
