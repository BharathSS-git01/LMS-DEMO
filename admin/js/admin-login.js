document.addEventListener('DOMContentLoaded', function () {
  var loginButton = document.getElementById('loginButton');
  if (!loginButton) return;
  loginButton.onclick = loginAdmin;
});

async function loginAdmin() {
  var adminId = document.getElementById('adminId').value.trim();
  var password = document.getElementById('password').value.trim();

  if (!adminId || !password) {
    alert('Enter both admin ID and password.');
    return;
  }

  if (window.AdminLMS && AdminLMS.authenticate(adminId, password)) {
    var localAdmin = AdminLMS.getAdminByEmail(adminId);
    localStorage.setItem('admin_session', JSON.stringify({
      adminId: adminId,
      name: localAdmin ? localAdmin.name : adminId,
      email: localAdmin ? localAdmin.email : adminId,
      role: 'admin',
      loggedInAt: new Date().toISOString()
    }));
    window.location.href = 'dashboard.html';
    return;
  }

  try {
    var res = await fetch(buildApiUrl('/api/auth/login'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: adminId, password: password })
    });
    var data = await res.json();
    if (!res.ok || !data.user || data.user.role !== 'admin') {
      alert(data.error || 'Admin credentials are invalid.');
      return;
    }

    localStorage.setItem('token', data.token);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('user');
    localStorage.setItem('admin_session', JSON.stringify({
      adminId: adminId,
      name: data.user.name,
      email: data.user.email,
      role: 'admin',
      loggedInAt: new Date().toISOString()
    }));
    window.location.href = 'dashboard.html';
  } catch (error) {
    alert('Use the demo admin credentials shown below the form.');
  }
}

function buildApiUrl(path) {
  if (window.LMS_API && typeof window.LMS_API.buildApiUrl === 'function') {
    return window.LMS_API.buildApiUrl(path);
  }

  return path;
}
