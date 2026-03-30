document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  fillCertificateOptions();
  bindCertificateEvents();
  renderCertificates();
});

function resolveMediaUrl(path) {
  if (window.LMSMedia && typeof window.LMSMedia.resolveMediaUrl === 'function') {
    return window.LMSMedia.resolveMediaUrl(path);
  }

  return path || '';
}

function bindCertificateEvents() {
  document.getElementById('certificateForm').addEventListener('submit', saveCertificateRecord);
  document.getElementById('certificateReset').onclick = resetCertificateForm;
  bindImageUploadPreview('certificateTemplateFile', 'certificateTemplatePreview', 'certificateTemplateMeta', 'Upload the certificate background/template reflected in the student certificates page.');
}

async function saveCertificateRecord(event) {
  event.preventDefault();

  var studentMeta = getSelectedOptionMeta('certificateStudent');
  var courseMeta = getSelectedOptionMeta('certificateCourse');
  var existing = AdminLMS.getCertificates().find(function (item) {
    return item.id === document.getElementById('certificateId').value;
  }) || {};
  var templateAsset = await resolveFileAsset('certificateTemplateFile');

  AdminLMS.saveCertificate({
    id: document.getElementById('certificateId').value,
    studentId: studentMeta.value,
    studentName: studentMeta.text,
    studentEmail: studentMeta.email,
    courseId: courseMeta.value,
    courseTitle: courseMeta.text,
    issueDate: document.getElementById('certificateDate').value,
    status: document.getElementById('certificateStatus').value,
    visible: document.getElementById('certificateVisible').value === 'true',
    issueRule: document.getElementById('certificateRule').value,
    templateName: document.getElementById('certificateTemplate').value,
    templateImage: templateAsset.path || existing.templateImage || existing.image || '',
    image: templateAsset.path || existing.templateImage || existing.image || '',
    source: existing.source || 'manual'
  });

  resetCertificateForm();
  renderCertificates();
}

function fillCertificateOptions() {
  var studentSelect = document.getElementById('certificateStudent');
  var courseSelect = document.getElementById('certificateCourse');
  studentSelect.innerHTML = '<option value="">Select Student</option>';
  courseSelect.innerHTML = '<option value="">Select Course</option>';

  AdminLMS.getStudentOptions().forEach(function (student) {
    studentSelect.innerHTML += '<option value="' + student.id + '" data-email="' + escapeHtml(student.email || '') + '">' + escapeHtml(student.name) + '</option>';
  });

  AdminLMS.getCourseOptions().forEach(function (course) {
    courseSelect.innerHTML += '<option value="' + course.id + '">' + escapeHtml(course.title) + '</option>';
  });
}

function renderCertificates() {
  var tbody = document.getElementById('certificatesTable');
  if (!tbody) return;

  var certificates = AdminLMS.getCertificates();
  if (!certificates.length) {
    tbody.innerHTML = '<tr><td colspan="6"><div class="empty-state">No certificate records are available yet.</div></td></tr>';
    return;
  }

  tbody.innerHTML = certificates.map(function (certificate) {
    return '<tr data-clickable="true" data-certificate-id="' + escapeHtml(certificate.id) + '">' +
      '<td>' + escapeHtml(certificate.studentName || 'Student') + '</td>' +
      '<td>' + escapeHtml(certificate.courseTitle || 'Course') + '</td>' +
      '<td>' + escapeHtml(certificate.issueDate || 'Not set') + '</td>' +
      '<td>' + escapeHtml(certificate.issueRule || 'course-completion') + '<br><span class="helper-text">' + escapeHtml(certificate.templateName || 'default-template') + '</span></td>' +
      '<td><span class="badge badge-' + escapeHtml(certificate.status || 'verified') + '">' + escapeHtml(certificate.status || 'verified') + '</span><br><span class="helper-text">' + (certificate.visible === false ? 'hidden' : 'visible') + '</span></td>' +
      '<td class="table-actions"><button class="secondary" type="button" data-action="review">Review</button><button class="secondary" type="button" data-action="edit">Edit</button><button class="danger" type="button" data-action="delete">Delete</button></td>' +
      '</tr>';
  }).join('');

  Array.prototype.forEach.call(tbody.querySelectorAll('tr[data-certificate-id]'), function (row) {
    row.querySelectorAll('button[data-action]').forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.stopPropagation();
        var action = button.getAttribute('data-action');
        var certificateId = row.getAttribute('data-certificate-id');
        if (action === 'review') reviewCertificate(certificateId);
        if (action === 'edit') editCertificate(certificateId);
        if (action === 'delete') deleteCertificateRecord(certificateId);
      });
    });
    row.addEventListener('click', function () {
      reviewCertificate(row.getAttribute('data-certificate-id'));
    });
  });
}

function reviewCertificate(certificateId) {
  var certificate = AdminLMS.getCertificates().find(function (item) { return item.id === certificateId; });
  if (!certificate || !window.AdminUI) return;

  AdminUI.openModal({
    title: (certificate.studentName || 'Student') + ' Certificate',
    subtitle: (certificate.courseTitle || 'Course') + ' | ' + (certificate.status || 'verified'),
    content:
      '<div class="record-summary-grid">' +
        summaryCard('Student', certificate.studentName || 'Student') +
        summaryCard('Course', certificate.courseTitle || 'Course') +
        summaryCard('Issue Rule', certificate.issueRule || 'course-completion') +
        summaryCard('Template', certificate.templateName || 'default-template') +
      '</div>' +
      '<div class="record-detail-section"><h4>Certificate Status</h4><div class="record-detail-list"><div>Issue date: ' + escapeHtml(certificate.issueDate || 'Not set') + '</div><div>Visibility: ' + escapeHtml(certificate.visible === false ? 'Hidden from student' : 'Visible to student') + '</div></div></div>' +
      '<div class="record-detail-section"><h4>Student Reflection</h4><div class="record-detail-list"><div>Visible certificate records can be reflected on the student certificates page when the related course is completed.</div></div></div>' +
      (certificate.templateImage || certificate.image ? '<div class="record-detail-section"><h4>Template Preview</h4><img class="preview-thumb" src="' + escapeHtml(resolveMediaUrl(certificate.templateImage || certificate.image)) + '" alt="Certificate template preview"></div>' : '') +
      '<div class="action-row">' +
        '<button type="button" class="btn btn-primary" onclick="editCertificate(\'' + escapeJs(certificate.id) + '\'); if (window.AdminUI) AdminUI.closeModal();">Edit Certificate</button>' +
        '<button type="button" class="btn btn-secondary" onclick="window.location.href=\'../certificates.html?course=' + encodeURIComponent(certificate.courseId || '') + '\'">Open Student Certificates</button>' +
        '<button type="button" class="btn btn-danger" onclick="deleteCertificateRecord(\'' + escapeJs(certificate.id) + '\')">Delete Certificate</button>' +
      '</div>'
  });
}

function editCertificate(certificateId) {
  var certificate = AdminLMS.getCertificates().find(function (item) { return item.id === certificateId; });
  if (!certificate) return;
  document.getElementById('certificateId').value = certificate.id;
  document.getElementById('certificateStudent').value = certificate.studentId || '';
  document.getElementById('certificateCourse').value = certificate.courseId || '';
  document.getElementById('certificateDate').value = certificate.issueDate || '';
  document.getElementById('certificateStatus').value = certificate.status || 'verified';
  document.getElementById('certificateVisible').value = String(certificate.visible !== false);
  document.getElementById('certificateRule').value = certificate.issueRule || 'course-completion';
  document.getElementById('certificateTemplate').value = certificate.templateName || 'classic-premium';
  setImageUploadState('certificateTemplateFile', 'certificateTemplatePreview', 'certificateTemplateMeta', certificate.templateImage || certificate.image || '', 'Upload the certificate background/template reflected in the student certificates page.');
}

function resetCertificateForm() {
  document.getElementById('certificateForm').reset();
  document.getElementById('certificateId').value = '';
  setImageUploadState('certificateTemplateFile', 'certificateTemplatePreview', 'certificateTemplateMeta', '', 'Upload the certificate background/template reflected in the student certificates page.');
}

function deleteCertificateRecord(certificateId) {
  if (!confirm('Delete this certificate record from admin tracking?')) return;
  AdminLMS.deleteCertificate(certificateId);
  renderCertificates();
  resetCertificateForm();
  if (window.AdminUI) AdminUI.closeModal();
}

function getSelectedOptionMeta(selectId) {
  var select = document.getElementById(selectId);
  var option = select && select.options[select.selectedIndex];
  return {
    value: select ? select.value : '',
    text: option ? option.text : '',
    email: option ? option.getAttribute('data-email') || '' : ''
  };
}

function bindImageUploadPreview(inputId, previewId, metaId, emptyMessage) {
  var input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('change', function () {
    var file = input.files && input.files[0];
    var preview = document.getElementById(previewId);
    var meta = document.getElementById(metaId);
    if (!file || !preview || !meta) {
      setImageUploadState(inputId, previewId, metaId, '', emptyMessage);
      return;
    }
    meta.textContent = file.name + ' selected';
    preview.hidden = false;
    preview.src = URL.createObjectURL(file);
  });
}

async function resolveFileAsset(inputId) {
  var input = document.getElementById(inputId);
  if (!input) return { path: '', name: '' };
  var file = input.files && input.files[0];
  if (file && window.AdminUI && AdminUI.readFileAsDataUrl) {
    var upload = await AdminUI.readFileAsDataUrl(file);
    return { path: upload.dataUrl, name: upload.name };
  }
  return { path: input.dataset.current || '', name: input.dataset.name || '' };
}

function setImageUploadState(inputId, previewId, metaId, path, message) {
  var input = document.getElementById(inputId);
  var preview = document.getElementById(previewId);
  var meta = document.getElementById(metaId);
  if (!input || !preview || !meta) return;
  input.value = '';
  input.dataset.current = path || '';
  meta.textContent = path ? 'Current template connected. Choose a new file to replace it.' : message;
  if (path) {
    preview.hidden = false;
    preview.src = resolveMediaUrl(path);
  } else {
    preview.hidden = true;
    preview.removeAttribute('src');
  }
}

function summaryCard(label, value) {
  return '<div class="record-summary-card"><strong>' + escapeHtml(label) + '</strong><span>' + escapeHtml(value) + '</span></div>';
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeJs(value) {
  return String(value || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
