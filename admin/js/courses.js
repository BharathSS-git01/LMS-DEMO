var adminCourses = [];

document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  bindCourseEvents();
  refreshCourses();
});

function bindCourseEvents() {
  document.getElementById('courseTitle').addEventListener('input', syncCourseSlug);
  document.getElementById('courseForm').addEventListener('submit', saveCourseRecord);
  document.getElementById('courseReset').onclick = resetForm;
  document.getElementById('courseSearch').addEventListener('input', applyCourseFilters);
  document.getElementById('courseStatusFilter').addEventListener('change', applyCourseFilters);
  document.getElementById('courseSort').addEventListener('change', applyCourseFilters);
  bindImageUploadPreview('courseImageFile', 'courseImagePreview', 'courseImageMeta', 'Catalog thumbnail will appear here after upload.');
  bindImageUploadPreview('courseBannerImageFile', 'courseBannerPreview', 'courseBannerMeta', 'Banner will appear here after upload.');
}

async function saveCourseRecord(event) {
  event.preventDefault();

  var existingCourse = AdminLMS.getCourses().find(function (item) {
    return item.id === document.getElementById('courseId').value;
  }) || {};

  var imageAsset = await resolveFileAsset('courseImageFile');
  var bannerAsset = await resolveFileAsset('courseBannerImageFile');
  if (!imageAsset.path) {
    alert('Please choose a thumbnail image for the course.');
    return;
  }

  var slug = document.getElementById('courseSlug').value.trim() || slugify(document.getElementById('courseTitle').value);

  AdminLMS.saveCourse({
    id: document.getElementById('courseId').value || slug,
    slug: slug,
    title: document.getElementById('courseTitle').value.trim(),
    subtitle: document.getElementById('courseSubtitle').value.trim(),
    category: document.getElementById('courseCategory').value.trim(),
    department: document.getElementById('courseCategory').value.trim(),
    instructor: document.getElementById('courseInstructor').value.trim(),
    durationWeeks: Number(document.getElementById('courseDuration').value),
    difficulty: document.getElementById('courseDifficulty').value,
    level: document.getElementById('courseDifficulty').value,
    image: imageAsset.path,
    bannerImage: bannerAsset.path || imageAsset.path,
    shortDescription: document.getElementById('courseShortDescription').value.trim(),
    description: document.getElementById('courseDescription').value.trim(),
    fullDescription: document.getElementById('courseDescription').value.trim(),
    certificateAvailable: true,
    status: document.getElementById('courseStatus').value,
    lessonsCount: existingCourse.lessonsCount || 0,
    notesCount: existingCourse.notesCount || 0,
    assignmentsCount: existingCourse.assignmentsCount || 0,
    quizzesCount: existingCourse.quizzesCount || 0,
    projectsCount: existingCourse.projectsCount || 0
  });

  refreshCourses();
  resetForm();
}

function refreshCourses() {
  adminCourses = AdminLMS.getCourses();
  applyCourseFilters();
}

function applyCourseFilters() {
  var query = document.getElementById('courseSearch').value.trim().toLowerCase();
  var status = document.getElementById('courseStatusFilter').value;
  var sort = document.getElementById('courseSort').value;

  var filtered = adminCourses.filter(function (course) {
    var searchable = [
      course.title,
      course.subtitle,
      course.category,
      course.department,
      course.instructor,
      course.slug
    ].join(' ').toLowerCase();

    return searchable.indexOf(query) >= 0 && (status === 'all' || course.status === status);
  });

  filtered.sort(function (a, b) {
    if (sort === 'title') return a.title.localeCompare(b.title);
    if (sort === 'category') return String(a.category || '').localeCompare(String(b.category || ''));
    if (sort === 'content') {
      var aDepth = a.lessonsCount + a.notesCount + a.assignmentsCount + a.quizzesCount + a.projectsCount;
      var bDepth = b.lessonsCount + b.notesCount + b.assignmentsCount + b.quizzesCount + b.projectsCount;
      return bDepth - aDepth;
    }
    return String(b.startDate || b.id || '').localeCompare(String(a.startDate || a.id || ''));
  });

  renderCourses(filtered);
}

function renderCourses(courses) {
  var tbody = document.getElementById('coursesTable');
  if (!tbody) return;

  if (!courses.length) {
    tbody.innerHTML = '<tr><td colspan="6"><div class="empty-state">No courses match the current filter.</div></td></tr>';
    return;
  }

  tbody.innerHTML = courses.map(function (course) {
    var contentDepth = course.lessonsCount + course.notesCount + course.assignmentsCount + course.quizzesCount + course.projectsCount;
    return '<tr data-clickable="true" data-course-id="' + escapeHtml(course.id) + '">' +
      '<td><strong>' + escapeHtml(course.title) + '</strong><br><span class="helper-text">' + escapeHtml(course.shortDescription || course.subtitle || '') + '</span><br><span class="helper-text">ID: ' + escapeHtml(course.slug || course.id) + '</span></td>' +
      '<td>' + escapeHtml(course.instructor) + '</td>' +
      '<td>' + escapeHtml(course.durationLabel || ((course.durationWeeks || 0) + ' weeks')) + ' | ' + escapeHtml(course.level || course.difficulty || '') + '<br><span class="helper-text">' + escapeHtml(course.category || '') + '</span></td>' +
      '<td>' + course.lessonsCount + ' lessons, ' + course.notesCount + ' notes, ' + course.assignmentsCount + ' assignments, ' + course.quizzesCount + ' quizzes, ' + course.projectsCount + ' projects<br><span class="helper-text">' + contentDepth + ' connected content item(s)</span></td>' +
      '<td><span class="badge badge-' + course.status + '">' + escapeHtml(course.status) + '</span></td>' +
      '<td class="table-actions"><button class="secondary" type="button" data-action="review">Review</button><button class="secondary" type="button" data-action="edit">Edit</button><button class="secondary" type="button" data-action="content">Lessons</button><button class="danger" type="button" data-action="delete">Delete</button></td>' +
      '</tr>';
  }).join('');

  Array.prototype.forEach.call(tbody.querySelectorAll('tr[data-course-id]'), function (row) {
    row.querySelectorAll('button[data-action]').forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.stopPropagation();
        var action = button.getAttribute('data-action');
        var courseId = row.getAttribute('data-course-id');
        if (action === 'review') reviewCourse(courseId);
        if (action === 'edit') editCourse(courseId);
        if (action === 'content') goToCourseContent(courseId);
        if (action === 'delete') deleteCourseRecord(courseId);
      });
    });
    row.addEventListener('click', function () {
      reviewCourse(row.getAttribute('data-course-id'));
    });
  });
}

function reviewCourse(courseId) {
  var course = AdminLMS.getCourses().find(function (item) { return item.id === courseId; });
  if (!course || !window.AdminUI) return;

  AdminUI.openModal({
    title: course.title,
    subtitle: (course.category || 'Course') + ' | ' + (course.status || 'draft'),
    content:
      '<div class="record-summary-grid">' +
        summaryCard('Instructor', course.instructor) +
        summaryCard('Duration', (course.durationWeeks || 0) + ' weeks') +
        summaryCard('Level', course.level || course.difficulty || 'Not set') +
        summaryCard('Content Depth', (course.lessonsCount + course.notesCount + course.assignmentsCount + course.quizzesCount + course.projectsCount) + ' items') +
      '</div>' +
      '<div class="record-detail-section"><h4>Catalog Summary</h4><div class="record-detail-list"><div>' + escapeHtml(course.shortDescription || course.subtitle || 'No summary added yet.') + '</div></div></div>' +
      '<div class="record-detail-section"><h4>LMS Reflection</h4><div class="record-detail-list">' +
        '<div>Catalog card uses the thumbnail image and short summary.</div>' +
        '<div>Course details uses the banner or thumbnail plus full description.</div>' +
        '<div>Student course player inherits this course context and media defaults.</div>' +
      '</div></div>' +
      '<div class="record-detail-section"><h4>Visual Assets</h4>' +
        (course.image ? '<img class="preview-thumb" src="' + escapeHtml(course.image) + '" alt="' + escapeHtml(course.title) + ' thumbnail">' : '<div class="empty-state">No thumbnail uploaded.</div>') +
        (course.bannerImage ? '<div style="margin-top:12px;"><img class="preview-thumb" src="' + escapeHtml(course.bannerImage) + '" alt="' + escapeHtml(course.title) + ' banner"></div>' : '') +
      '</div>' +
      '<div class="action-row">' +
        '<button type="button" class="btn btn-primary" onclick="editCourse(\'' + escapeJs(course.id) + '\'); if (window.AdminUI) AdminUI.closeModal();">Edit Course</button>' +
        '<button type="button" class="btn btn-secondary" onclick="goToCourseContent(\'' + escapeJs(course.id) + '\');">Manage Lessons</button>' +
        '<button type="button" class="btn btn-secondary" onclick="window.location.href=\'../course-details.html?course=' + encodeURIComponent(course.id) + '\'">Open Public View</button>' +
        '<button type="button" class="btn btn-danger" onclick="deleteCourseRecord(\'' + escapeJs(course.id) + '\')">Delete Course</button>' +
      '</div>'
  });
}

function editCourse(courseId) {
  var course = AdminLMS.getCourses().find(function (item) { return item.id === courseId; });
  if (!course) return;

  document.getElementById('courseId').value = course.id;
  document.getElementById('courseSlug').value = course.slug || course.id;
  document.getElementById('courseTitle').value = course.title;
  document.getElementById('courseSubtitle').value = course.subtitle;
  document.getElementById('courseCategory').value = course.department || course.category;
  document.getElementById('courseInstructor').value = course.instructor;
  document.getElementById('courseDuration').value = course.durationWeeks;
  document.getElementById('courseDifficulty').value = course.level || course.difficulty;
  document.getElementById('courseShortDescription').value = course.shortDescription || course.subtitle || '';
  document.getElementById('courseDescription').value = course.fullDescription || course.description;
  document.getElementById('courseStatus').value = course.status;

  setImageUploadState('courseImageFile', 'courseImagePreview', 'courseImageMeta', course.image, 'Current thumbnail is connected to catalog cards.');
  setImageUploadState('courseBannerImageFile', 'courseBannerPreview', 'courseBannerMeta', course.bannerImage || '', 'Current banner is connected to course details.');
}

function deleteCourseRecord(courseId) {
  if (!confirm('Archive this course from the LMS catalog?')) return;
  AdminLMS.deleteCourse(courseId);
  refreshCourses();
  resetForm();
  if (window.AdminUI) AdminUI.closeModal();
}

function goToCourseContent(courseId) {
  window.location.href = 'lessons.html?course=' + encodeURIComponent(courseId);
}

function resetForm() {
  document.getElementById('courseForm').reset();
  document.getElementById('courseId').value = '';
  clearUploadState('courseImageFile', 'courseImagePreview', 'courseImageMeta', 'Used in the public course catalog and student course cards.');
  clearUploadState('courseBannerImageFile', 'courseBannerPreview', 'courseBannerMeta', 'Used in course details and premium hero sections when available.');
}

function bindImageUploadPreview(inputId, previewId, metaId, emptyMessage) {
  var input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('change', function () {
    var file = input.files && input.files[0];
    var preview = document.getElementById(previewId);
    var meta = document.getElementById(metaId);
    if (!file || !preview || !meta) {
      clearUploadState(inputId, previewId, metaId, emptyMessage);
      return;
    }

    meta.textContent = file.name + ' selected';
    preview.hidden = false;
    preview.src = URL.createObjectURL(file);
  });
  clearUploadState(inputId, previewId, metaId, emptyMessage);
}

async function resolveFileAsset(inputId) {
  var input = document.getElementById(inputId);
  if (!input) return { path: '', name: '' };
  var file = input.files && input.files[0];
  if (file && window.AdminUI && AdminUI.readFileAsDataUrl) {
    var upload = await AdminUI.readFileAsDataUrl(file);
    return {
      path: upload.dataUrl,
      name: upload.name
    };
  }
  return {
    path: input.dataset.current || '',
    name: input.dataset.name || ''
  };
}

function setImageUploadState(inputId, previewId, metaId, path, message) {
  var input = document.getElementById(inputId);
  var preview = document.getElementById(previewId);
  var meta = document.getElementById(metaId);
  if (!input || !preview || !meta) return;

  input.value = '';
  input.dataset.current = path || '';
  meta.textContent = path ? 'Current file connected. Choose a new file to replace it.' : message;
  if (path) {
    preview.hidden = false;
    preview.src = path;
  } else {
    preview.hidden = true;
    preview.removeAttribute('src');
  }
}

function clearUploadState(inputId, previewId, metaId, message) {
  setImageUploadState(inputId, previewId, metaId, '', message);
}

function syncCourseSlug() {
  var slugField = document.getElementById('courseSlug');
  var courseIdField = document.getElementById('courseId');
  if (courseIdField.value) return;
  slugField.value = slugify(document.getElementById('courseTitle').value);
}

function summaryCard(label, value) {
  return '<div class="record-summary-card"><strong>' + escapeHtml(label) + '</strong><span>' + escapeHtml(value) + '</span></div>';
}

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
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
