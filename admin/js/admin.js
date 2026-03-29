function go(page) {
  window.location.href = page;
}

var adminModalState = {
  isOpen: false,
  lastFocusedElement: null
};

function readFileAsDataUrl(file) {
  return new Promise(function (resolve, reject) {
    if (!file) {
      resolve(null);
      return;
    }

    var reader = new FileReader();
    reader.onload = function () {
      resolve({
        name: file.name,
        type: file.type || '',
        size: file.size || 0,
        dataUrl: String(reader.result || '')
      });
    };
    reader.onerror = function () {
      reject(new Error('File upload could not be read.'));
    };
    reader.readAsDataURL(file);
  });
}

function adminLogout() {
  localStorage.removeItem('admin_session');
  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');
  localStorage.removeItem('user');
  window.location.href = 'admin-login.html';
}

function initAdminResponsiveNav() {
  var header = document.querySelector('.admin-header');
  var sidebar = document.querySelector('.admin-sidebar');
  if (!header || !sidebar) return;

  var toggle = document.querySelector('.admin-menu-toggle');
  if (!toggle) {
    toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'admin-menu-toggle';
    toggle.setAttribute('aria-label', 'Toggle admin navigation');
    toggle.innerHTML = '&#9776;';
    header.insertBefore(toggle, header.firstChild);
  }

  var overlay = document.querySelector('.admin-sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'admin-sidebar-overlay';
    document.body.appendChild(overlay);
  }

  function closeNav() {
    document.body.classList.remove('admin-nav-open');
  }

  toggle.onclick = function () {
    document.body.classList.toggle('admin-nav-open');
  };

  overlay.onclick = closeNav;

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
      closeNav();
    }
  });

  sidebar.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });
}

function ensureAdminModalShell() {
  cleanupDuplicateAdminModals();

  var overlay = document.getElementById('adminRecordModalOverlay');
  var modal = document.getElementById('adminRecordModal');

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'adminRecordModalOverlay';
    overlay.className = 'admin-modal-overlay';
    overlay.hidden = true;
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);
  }

  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'adminRecordModal';
    modal.className = 'admin-modal';
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML =
      '<div class="admin-modal-card">' +
        '<div class="admin-modal-head">' +
          '<div>' +
            '<h3 id="adminModalTitle">Record Review</h3>' +
            '<p id="adminModalSubtitle" class="helper-text"></p>' +
          '</div>' +
          '<button type="button" class="btn btn-secondary" id="adminModalClose">Close</button>' +
        '</div>' +
        '<div id="adminModalBody"></div>' +
      '</div>';
    document.body.appendChild(modal);
  }

  overlay.onclick = function () {
    closeAdminModal();
  };
  modal.onclick = function (event) {
    if (event.target === modal) {
      closeAdminModal();
    }
  };
  var closeButton = document.getElementById('adminModalClose');
  if (closeButton) {
    closeButton.onclick = function () {
      closeAdminModal();
    };
  }
}

function openAdminModal(config) {
  forceCloseAdminModal();
  ensureAdminModalShell();

  var overlay = document.getElementById('adminRecordModalOverlay');
  var modal = document.getElementById('adminRecordModal');
  var title = document.getElementById('adminModalTitle');
  var subtitle = document.getElementById('adminModalSubtitle');
  var body = document.getElementById('adminModalBody');

  if (!overlay || !modal || !title || !subtitle || !body) return;

  adminModalState.lastFocusedElement = document.activeElement;
  adminModalState.isOpen = true;

  title.textContent = config && config.title ? config.title : 'Record Review';
  subtitle.textContent = config && config.subtitle ? config.subtitle : '';
  body.innerHTML = config && config.content ? config.content : '';

  overlay.hidden = false;
  overlay.setAttribute('aria-hidden', 'false');
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('admin-modal-open');

  var closeButton = document.getElementById('adminModalClose');
  if (closeButton) {
    closeButton.focus();
  }
}

function closeAdminModal() {
  adminModalState.isOpen = false;

  var overlay = document.getElementById('adminRecordModalOverlay');
  var modal = document.getElementById('adminRecordModal');
  var body = document.getElementById('adminModalBody');

  if (overlay) {
    overlay.hidden = true;
    overlay.setAttribute('aria-hidden', 'true');
  }
  if (modal) {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
  }
  if (body) {
    body.innerHTML = '';
  }
  document.body.classList.remove('admin-modal-open');

  if (adminModalState.lastFocusedElement && typeof adminModalState.lastFocusedElement.focus === 'function') {
    try {
      adminModalState.lastFocusedElement.focus();
    } catch (error) {}
  }
  adminModalState.lastFocusedElement = null;
}

function forceCloseAdminModal() {
  try {
    closeAdminModal();
  } catch (error) {
    var overlay = document.getElementById('adminRecordModalOverlay');
    var modal = document.getElementById('adminRecordModal');
    if (overlay && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }
    if (modal && modal.parentNode) {
      modal.parentNode.removeChild(modal);
    }
    document.body.classList.remove('admin-modal-open');
    adminModalState.isOpen = false;
    adminModalState.lastFocusedElement = null;
  }
}

function cleanupDuplicateAdminModals() {
  var overlays = document.querySelectorAll('#adminRecordModalOverlay');
  var modals = document.querySelectorAll('#adminRecordModal');

  Array.prototype.forEach.call(overlays, function (overlay, index) {
    if (index > 0 && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }
  });

  Array.prototype.forEach.call(modals, function (modal, index) {
    if (index > 0 && modal.parentNode) {
      modal.parentNode.removeChild(modal);
    }
  });
}

function handleAdminModalEscape(event) {
  if (event.key === 'Escape' && adminModalState.isOpen) {
    closeAdminModal();
  }
}

window.AdminUI = {
  readFileAsDataUrl: readFileAsDataUrl,
  openModal: openAdminModal,
  closeModal: closeAdminModal,
  forceCloseModal: forceCloseAdminModal
};

function ensureAdminManagementLinks() {
  var currentPage = (window.location.pathname.split('/').pop() || '').toLowerCase();
  var isAdminsPage = currentPage === 'admins.html';

  var headerNav = document.querySelector('.header-center');
  if (headerNav && !headerNav.querySelector('a[href="admins.html"]')) {
    var logoutLink = Array.prototype.find.call(headerNav.querySelectorAll('a'), function (link) {
      return String(link.textContent || '').trim().toLowerCase() === 'logout';
    });
    var adminLink = document.createElement('a');
    adminLink.href = 'admins.html';
    adminLink.textContent = 'Admins';
    if (isAdminsPage) {
      adminLink.className = 'active';
    }
    headerNav.insertBefore(adminLink, logoutLink || null);
  }

  var sidebarList = document.querySelector('.admin-sidebar ul');
  if (sidebarList && !sidebarList.querySelector('a[href="admins.html"]')) {
    var logoutItem = Array.prototype.find.call(sidebarList.querySelectorAll('li'), function (item) {
      return String(item.textContent || '').trim().toLowerCase() === 'logout';
    });
    var adminItem = document.createElement('li');
    if (isAdminsPage) {
      adminItem.className = 'active';
    }
    adminItem.innerHTML = '<a href="admins.html">Admins</a>';
    sidebarList.insertBefore(adminItem, logoutItem || null);
  }
}

(function () {
  if (window.location.pathname.toLowerCase().indexOf('admin-login.html') >= 0) {
    return;
  }

  var session = localStorage.getItem('admin_session');
  if (!session) {
    window.location.href = 'admin-login.html';
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  ensureAdminManagementLinks();
  initAdminResponsiveNav();
  ensureAdminModalShell();
  document.addEventListener('keydown', handleAdminModalEscape);
});
