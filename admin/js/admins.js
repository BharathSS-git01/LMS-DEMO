var adminAccounts = [];

document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  bindAdminManagementEvents();
  refreshAdminAccounts();
});

function bindAdminManagementEvents() {
  document.getElementById('adminCreateForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('adminName').value.trim();
    var email = document.getElementById('adminEmail').value.trim().toLowerCase();
    var phone = document.getElementById('adminPhone').value.trim();
    var department = document.getElementById('adminDepartment').value.trim();
    var password = document.getElementById('adminPassword').value;
    var confirmPassword = document.getElementById('adminConfirmPassword').value;

    if (!name || !email || !password || !confirmPassword) {
      showAdminFormMessage('Fill in all required admin fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showAdminFormMessage('Enter a valid admin email address.', 'error');
      return;
    }

    if (password !== confirmPassword) {
      showAdminFormMessage('Password and confirm password must match.', 'error');
      return;
    }

    try {
      AdminLMS.createAdmin({
        name: name,
        email: email,
        phone: phone,
        department: department || 'LMS Administration',
        password: password,
        role: 'admin'
      });
      showAdminFormMessage('Admin account created successfully. The new admin can now log in from the existing admin login page.', 'success');
      document.getElementById('adminCreateForm').reset();
      refreshAdminAccounts();
    } catch (error) {
      showAdminFormMessage(error.message || 'Unable to create admin account.', 'error');
    }
  });

  document.getElementById('adminFormReset').onclick = function () {
    document.getElementById('adminCreateForm').reset();
    showAdminFormMessage('New admin users created here are always saved with the admin role.', 'neutral');
  };

  document.getElementById('adminSearch').addEventListener('input', applyAdminFilters);
}

function refreshAdminAccounts() {
  adminAccounts = AdminLMS.getAdmins();
  applyAdminFilters();
}

function applyAdminFilters() {
  var query = document.getElementById('adminSearch').value.trim().toLowerCase();
  var filtered = adminAccounts.filter(function (admin) {
    return [admin.name, admin.email, admin.department, admin.role].join(' ').toLowerCase().indexOf(query) >= 0;
  });
  renderAdminAccounts(filtered);
}

function renderAdminAccounts(admins) {
  var tbody = document.getElementById('adminsTable');
  tbody.innerHTML = '';

  if (!admins.length) {
    tbody.innerHTML = '<tr><td colspan="5"><div class="empty-state">No admin accounts match the current search.</div></td></tr>';
    return;
  }

  var activeSession = readAdminSession();
  admins.forEach(function (admin) {
    var actionLabel = admin.isDefault ? 'Protected' : ((activeSession && activeSession.email === admin.email) ? 'Current Admin' : 'Remove');
    var actionButton = admin.isDefault || (activeSession && activeSession.email === admin.email)
      ? '<button class="secondary" type="button" disabled>' + actionLabel + '</button>'
      : '<button class="danger" type="button" onclick="deleteAdminRecord(\'' + admin.id + '\')">Remove</button>';

    tbody.innerHTML += '<tr>' +
      '<td><strong>' + escapeHtml(admin.name) + '</strong><br><span class="helper-text">' + escapeHtml(admin.email) + '</span>' + (admin.phone ? '<br><span class="helper-text">' + escapeHtml(admin.phone) + '</span>' : '') + '</td>' +
      '<td><span class="badge badge-active">' + escapeHtml(admin.role) + '</span></td>' +
      '<td>' + escapeHtml(admin.department || 'LMS Administration') + '</td>' +
      '<td>' + escapeHtml(admin.createdAt || '-') + '</td>' +
      '<td class="table-actions">' + actionButton + '</td>' +
      '</tr>';
  });
}

function deleteAdminRecord(adminId) {
  if (!confirm('Remove this admin account from the LMS admin list?')) return;
  try {
    AdminLMS.deleteAdmin(adminId);
    refreshAdminAccounts();
  } catch (error) {
    alert(error.message || 'Unable to remove this admin account.');
  }
}

function showAdminFormMessage(message, state) {
  var box = document.getElementById('adminFormMessage');
  if (!box) return;
  box.className = state === 'success'
    ? 'status-box status-success'
    : state === 'error'
      ? 'status-box status-error'
      : 'empty-state';
  box.innerHTML = message;
}

function readAdminSession() {
  try {
    return JSON.parse(localStorage.getItem('admin_session') || 'null');
  } catch (error) {
    return null;
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
