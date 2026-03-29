(function () {
  var STORAGE_KEY = 'admin_lms_state_v1';
  var SHARED_CONTENT_KEY = 'lms_admin_content_v1';

  function safeClone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function splitLines(value) {
    if (Array.isArray(value)) return value.slice();
    return String(value || '')
      .split(/\r?\n/)
      .map(function (item) { return item.trim(); })
      .filter(Boolean);
  }

  function slugify(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function defaultSharedContent() {
    return {
      courses: [],
      assignments: [],
      quizzes: [],
      notes: [],
      projects: [],
      lessons: [],
      announcements: []
    };
  }

  function loadSharedContent() {
    try {
      var parsed = JSON.parse(localStorage.getItem(SHARED_CONTENT_KEY) || 'null');
      return Object.assign(defaultSharedContent(), parsed || {});
    } catch (error) {
      return defaultSharedContent();
    }
  }

  function persistSharedContent(sharedContent) {
    localStorage.setItem(SHARED_CONTENT_KEY, JSON.stringify(sharedContent));
  }

  function loadStudentStateCollection() {
    try {
      var parsed = JSON.parse(localStorage.getItem('lms_student_state_map_v2') || 'null');
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (error) {
      return {};
    }
  }

  function persistStudentStateCollection(stateCollection) {
    localStorage.setItem('lms_student_state_map_v2', JSON.stringify(stateCollection || {}));
  }

  function loadRegisteredUsers() {
    try {
      var parsed = JSON.parse(localStorage.getItem('lms_registered_users_v1') || '[]');
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function persistRegisteredUsers(users) {
    localStorage.setItem('lms_registered_users_v1', JSON.stringify(users || []));
  }

  function loadCurrentStudentSession() {
    var sources = ['currentUser', 'user'];
    for (var index = 0; index < sources.length; index += 1) {
      try {
        var parsed = JSON.parse(localStorage.getItem(sources[index]) || 'null');
        if (parsed && (!parsed.role || parsed.role === 'student') && (parsed.email || parsed.id || parsed.name)) {
          return parsed;
        }
      } catch (error) {
        // Ignore malformed snapshots.
      }
    }
    return null;
  }

  function persistCurrentStudentSession(student) {
    ['currentUser', 'user'].forEach(function (key) {
      if (!student) {
        localStorage.removeItem(key);
        return;
      }
      localStorage.setItem(key, JSON.stringify(student));
    });
  }

  function loadAdminSession() {
    try {
      var parsed = JSON.parse(localStorage.getItem('admin_session') || 'null');
      return parsed && typeof parsed === 'object' ? parsed : null;
    } catch (error) {
      return null;
    }
  }

  function getStudentStorageKey(student) {
    if (!student) return '';
    if (student.email) {
      return 'email:' + String(student.email).trim().toLowerCase();
    }
    if (student.id !== undefined && student.id !== null && student.id !== '') {
      return 'id:' + String(student.id);
    }
    if (student.name) {
      return 'name:' + String(student.name).trim().toLowerCase();
    }
    return '';
  }

  function getCatalog() {
    return window.LMSDemo ? LMSDemo.getCourses() : [];
  }

  function getCourseById(courseId) {
    return getCatalog().find(function (course) {
      return course.id === courseId;
    }) || null;
  }

  function getAllLessonIds(course) {
    return (course.modules || []).reduce(function (ids, module) {
      return ids.concat((module.lessons || []).map(function (lesson) {
        return lesson.id;
      }));
    }, []);
  }

  function getLastTimestamp(value) {
    if (!value) return '';
    return String(value);
  }

  function buildStudentCourseSnapshot(course, studentState) {
    if (!course || !studentState) return null;

    var lessonIds = getAllLessonIds(course);
    var completedLessonIds = (studentState.lessonProgress && studentState.lessonProgress[course.id]) || [];
    var completedLessons = lessonIds.filter(function (lessonId) {
      return completedLessonIds.indexOf(lessonId) >= 0;
    }).length;
    var totalLessons = lessonIds.length;
    var progress = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0;
    var status = progress >= 100 ? 'completed' : completedLessons > 0 ? 'in-progress' : 'not-started';
    var lastLessonId = studentState.lastAccessedLesson && studentState.lastAccessedLesson[course.id];
    var lastLesson = null;

    (course.modules || []).some(function (module) {
      return (module.lessons || []).some(function (lesson) {
        if (lesson.id === lastLessonId) {
          lastLesson = {
            title: lesson.title,
            moduleTitle: module.title
          };
          return true;
        }
        return false;
      });
    });

    var submittedAssignments = (course.assignments || []).filter(function (assignment) {
      return !!(studentState.assignmentSubmissions && studentState.assignmentSubmissions[assignment.id] && studentState.assignmentSubmissions[assignment.id].submitted);
    }).length;
    var completedQuizzes = (course.quizzes || []).filter(function (quiz) {
      return !!(studentState.quizAttempts && studentState.quizAttempts[quiz.id] && studentState.quizAttempts[quiz.id].completed);
    }).length;
    var completedProjects = (course.projects || []).filter(function (project) {
      var submission = studentState.projectSubmissions && studentState.projectSubmissions[project.id];
      return !!(submission && (submission.status === 'submitted' || submission.status === 'completed'));
    }).length;

    return {
      id: course.id,
      title: course.title,
      category: course.category,
      instructor: course.instructor,
      progress: progress,
      status: status,
      totalLessons: totalLessons,
      completedLessons: completedLessons,
      submittedAssignments: submittedAssignments,
      completedQuizzes: completedQuizzes,
      completedProjects: completedProjects,
      lastAccessedLesson: lastLesson
    };
  }

  function buildStudentActivitySummary(studentState, enrolledCourses) {
    var latestQuiz = null;
    var latestAssignment = null;
    var latestProject = null;
    var recentCourseActivity = [];

    enrolledCourses.forEach(function (course) {
      var courseDefinition = getCourseById(course.id);
      if (!courseDefinition) return;

      if (course.lastAccessedLesson) {
        recentCourseActivity.push({
          type: 'lesson',
          title: course.title,
          description: 'Last viewed ' + course.lastAccessedLesson.title,
          meta: course.lastAccessedLesson.moduleTitle
        });
      }

      (courseDefinition.quizzes || []).forEach(function (quiz) {
        var attempt = studentState.quizAttempts && studentState.quizAttempts[quiz.id];
        if (!attempt || !attempt.completed) return;
        var candidate = {
          title: quiz.title,
          courseTitle: course.title,
          score: attempt.score,
          submittedAt: getLastTimestamp(attempt.submittedAt),
          status: 'Completed'
        };
        if (!latestQuiz || candidate.submittedAt > latestQuiz.submittedAt) {
          latestQuiz = candidate;
        }
      });

      (courseDefinition.assignments || []).forEach(function (assignment) {
        var submission = studentState.assignmentSubmissions && studentState.assignmentSubmissions[assignment.id];
        if (!submission || !submission.submitted) return;
        var candidate = {
          title: assignment.title,
          courseTitle: course.title,
          submittedAt: getLastTimestamp(submission.submittedAt),
          status: 'Submitted'
        };
        if (!latestAssignment || candidate.submittedAt > latestAssignment.submittedAt) {
          latestAssignment = candidate;
        }
      });

      (courseDefinition.projects || []).forEach(function (project) {
        var projectSubmission = studentState.projectSubmissions && studentState.projectSubmissions[project.id];
        if (!projectSubmission || (projectSubmission.status !== 'submitted' && projectSubmission.status !== 'completed')) return;
        var candidate = {
          title: project.title,
          courseTitle: course.title,
          submittedAt: getLastTimestamp(projectSubmission.submittedAt),
          status: projectSubmission.status === 'completed' ? 'Completed' : 'Submitted'
        };
        if (!latestProject || candidate.submittedAt > latestProject.submittedAt) {
          latestProject = candidate;
        }
      });
    });

    return {
      latestQuiz: latestQuiz,
      latestAssignment: latestAssignment,
      latestProject: latestProject,
      recentCourseActivity: recentCourseActivity.slice(0, 4)
    };
  }

  function buildEmptyStudentState(student) {
    return {
      profile: {
        name: student.name || 'Student',
        email: student.email || '',
        phone: student.phone || ''
      },
      meta: {
        id: student.id || getStudentStorageKey(student),
        registerNo: student.registerNo || '',
        department: student.department || 'Student',
        institution: student.institution || 'Vidhya Vaaradhi LMS',
        semester: student.semester || 'Semester 1',
        joinedOn: student.joinedOn || new Date().toISOString().split('T')[0],
        role: student.role || 'student',
        seedVersion: 0
      },
      enrolledCourseIds: [],
      lessonProgress: {},
      lastAccessedLesson: {},
      assignmentSubmissions: {},
      quizAttempts: {},
      projectSubmissions: {},
      profileImage: student.image || '../assets/TESTIMONIAL PROFILE.jpg'
    };
  }

  function collectStudentRoster() {
    var rosterMap = {};
    var studentStates = loadStudentStateCollection();

    function upsertStudentRecord(key, partial) {
      if (!key || key === '__legacyMigrated' || key === 'guest_demo_student') return;
      rosterMap[key] = Object.assign({}, rosterMap[key] || { storageKey: key }, partial || {});
    }

    loadRegisteredUsers().forEach(function (user) {
      if (user && (!user.role || user.role === 'student')) {
        upsertStudentRecord(getStudentStorageKey(user), user);
      }
    });

    var sessionStudent = loadCurrentStudentSession();
    if (sessionStudent && (!sessionStudent.role || sessionStudent.role === 'student')) {
      upsertStudentRecord(getStudentStorageKey(sessionStudent), sessionStudent);
    }

    Object.keys(studentStates).forEach(function (storageKey) {
      if (storageKey === '__legacyMigrated') return;
      var studentState = studentStates[storageKey];
      if (!studentState || typeof studentState !== 'object') return;
      var meta = studentState.meta || {};
      var profile = studentState.profile || {};
      if (meta.role && meta.role !== 'student') return;

      upsertStudentRecord(storageKey, {
        id: meta.id,
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        registerNo: meta.registerNo,
        department: meta.department,
        institution: meta.institution,
        semester: meta.semester,
        joinedOn: meta.joinedOn,
        role: meta.role || 'student',
        image: studentState.profileImage
      });
    });

    return Object.keys(rosterMap).map(function (storageKey) {
      var baseRecord = rosterMap[storageKey];
      var studentState = studentStates[storageKey] || buildEmptyStudentState(baseRecord);
      var profile = studentState.profile || {};
      var meta = studentState.meta || {};
      var enrolledCourses = (studentState.enrolledCourseIds || []).map(function (courseId) {
        return buildStudentCourseSnapshot(getCourseById(courseId), studentState);
      }).filter(Boolean);
      var activity = buildStudentActivitySummary(studentState, enrolledCourses);
      var activeCourse = enrolledCourses.find(function (course) {
        return course.status !== 'completed';
      }) || enrolledCourses[0] || null;
      var averageProgress = enrolledCourses.length
        ? Math.round(enrolledCourses.reduce(function (sum, course) {
            return sum + (Number(course.progress) || 0);
          }, 0) / enrolledCourses.length)
        : 0;
      var completedCourseDetails = enrolledCourses.filter(function (course) {
        return course.status === 'completed';
      });

      return {
        id: meta.id || baseRecord.id || storageKey,
        storageKey: storageKey,
        name: profile.name || baseRecord.name || 'Student',
        email: String(profile.email || baseRecord.email || '').trim().toLowerCase(),
        phone: profile.phone || baseRecord.phone || '',
        registerNo: meta.registerNo || baseRecord.registerNo || '',
        department: meta.department || baseRecord.department || 'Student',
        institution: meta.institution || baseRecord.institution || 'Vidhya Vaaradhi LMS',
        semester: meta.semester || baseRecord.semester || 'Semester 1',
        joinedOn: meta.joinedOn || baseRecord.joinedOn || '',
        role: meta.role || baseRecord.role || 'student',
        image: studentState.profileImage || baseRecord.image || '../assets/TESTIMONIAL PROFILE.jpg',
        status: baseRecord.status || (enrolledCourses.length || activity.recentCourseActivity.length ? 'active' : 'inactive'),
        enrolledCourses: enrolledCourses,
        enrolledCount: enrolledCourses.length,
        completedCourses: completedCourseDetails.length,
        completedCourseDetails: completedCourseDetails,
        completedCourseTitles: completedCourseDetails.map(function (course) { return course.title; }),
        averageProgress: averageProgress,
        activeCourse: activeCourse,
        quizActivityCount: Object.keys(studentState.quizAttempts || {}).filter(function (quizId) {
          return !!(studentState.quizAttempts[quizId] && studentState.quizAttempts[quizId].completed);
        }).length,
        assignmentActivityCount: Object.keys(studentState.assignmentSubmissions || {}).filter(function (assignmentId) {
          return !!(studentState.assignmentSubmissions[assignmentId] && studentState.assignmentSubmissions[assignmentId].submitted);
        }).length,
        projectActivityCount: Object.keys(studentState.projectSubmissions || {}).filter(function (projectId) {
          var submission = studentState.projectSubmissions[projectId];
          return !!(submission && (submission.status === 'submitted' || submission.status === 'completed'));
        }).length,
        profileSummary: (meta.department || baseRecord.department || 'Student') + ' • ' + (meta.semester || baseRecord.semester || 'Semester 1') + ' • ' + enrolledCourses.length + ' enrolled course(s)',
        needsAttention: enrolledCourses.some(function (course) { return (Number(course.progress) || 0) < 50; }),
        latestQuiz: activity.latestQuiz,
        latestAssignment: activity.latestAssignment,
        latestProject: activity.latestProject,
        recentCourseActivity: activity.recentCourseActivity
      };
    }).filter(function (student) {
      return !!(student.email || student.name);
    });
  }

  function mergeStudentRecords(derivedStudents, savedStudents) {
    var savedMap = {};

    (savedStudents || []).forEach(function (student) {
      if (!student) return;
      savedMap[student.storageKey || getStudentStorageKey(student) || ('id:' + student.id)] = student;
    });

    return derivedStudents.map(function (student) {
      var savedStudent = savedMap[student.storageKey] || savedMap[getStudentStorageKey(student)] || savedMap['id:' + student.id];
      if (!savedStudent) return student;
      return Object.assign({}, student, {
        status: savedStudent.status || student.status
      });
    });
  }

  function buildDerivedCertificates(students) {
    return (students || []).reduce(function (certificates, student) {
      return certificates.concat((student.completedCourseDetails || []).map(function (course) {
        return {
          id: 'certificate-' + slugify(student.storageKey + '-' + course.id),
          studentId: student.id,
          studentName: student.name,
          studentEmail: student.email,
          courseId: course.id,
          courseTitle: course.title,
          issueDate: student.joinedOn || '',
          status: 'verified',
          visible: true,
          source: 'progress'
        };
      }));
    }, []);
  }

  function mergeCertificates(derivedCertificates, savedCertificates, students) {
    var merged = {};
    var knownStudents = {};

    (students || []).forEach(function (student) {
      knownStudents['id:' + student.id] = true;
      if (student.email) knownStudents['email:' + String(student.email).trim().toLowerCase()] = true;
      if (student.name) knownStudents['name:' + String(student.name).trim().toLowerCase()] = true;
    });

    function getCertificateKey(certificate) {
      if (!certificate) return '';
      return certificate.id || [
        String(certificate.studentEmail || certificate.studentName || '').trim().toLowerCase(),
        certificate.courseId || certificate.courseTitle || ''
      ].join('::');
    }

    (derivedCertificates || []).forEach(function (certificate) {
      merged[getCertificateKey(certificate)] = Object.assign({}, certificate);
    });

    (savedCertificates || []).forEach(function (certificate) {
      if (!certificate) return;
      var isKnownStudent = !!(
        knownStudents['id:' + certificate.studentId] ||
        knownStudents['email:' + String(certificate.studentEmail || '').trim().toLowerCase()] ||
        knownStudents['name:' + String(certificate.studentName || '').trim().toLowerCase()]
      );
      if (!isKnownStudent && certificate.source !== 'manual') return;

      var key = getCertificateKey(certificate);
      merged[key] = Object.assign({}, merged[key] || {}, certificate, {
        visible: certificate.visible !== false,
        source: certificate.source || 'manual'
      });
    });

    return Object.keys(merged).map(function (key) {
      return merged[key];
    }).sort(function (a, b) {
      return String(b.issueDate || '').localeCompare(String(a.issueDate || ''));
    });
  }

  function getDerivedAdmins() {
    var defaults = [
      {
        id: 'admin-101',
        name: 'Platform Admin',
        email: 'admin@gmail.com',
        password: '1234',
        role: 'admin',
        phone: '',
        department: 'LMS Administration',
        createdAt: '2026-01-10',
        isDefault: true
      }
    ];
    var fromUsers = loadRegisteredUsers().filter(function (user) {
      return user && user.role === 'admin';
    }).map(function (user) {
      return {
        id: user.id || ('admin-' + slugify(user.email || user.name || Date.now())),
        name: user.name || 'Admin User',
        email: user.email,
        password: user.password || '',
        role: 'admin',
        phone: user.phone || '',
        department: user.department || 'LMS Administration',
        createdAt: user.joinedOn || new Date().toISOString().split('T')[0],
        isDefault: false
      };
    });
    var currentAdmin = loadAdminSession();
    if (currentAdmin && currentAdmin.email) {
      fromUsers.unshift({
        id: currentAdmin.adminId || ('admin-' + slugify(currentAdmin.email)),
        name: currentAdmin.name || 'Admin User',
        email: currentAdmin.email,
        password: '',
        role: 'admin',
        phone: '',
        department: 'LMS Administration',
        createdAt: String(currentAdmin.loggedInAt || '').split('T')[0] || new Date().toISOString().split('T')[0],
        isDefault: currentAdmin.email === 'admin@gmail.com'
      });
    }

    return mergeAdmins(defaults, fromUsers);
  }

  function buildCourseRecord(course) {
    return {
      id: course.id,
      title: course.title,
      subtitle: course.subtitle,
      slug: course.slug || course.id,
      category: course.category,
      department: course.department || course.category,
      instructor: course.instructor,
      instructorTitle: course.instructorTitle || 'Course Mentor',
      durationWeeks: course.durationWeeks,
      durationLabel: course.durationLabel || (course.durationWeeks ? course.durationWeeks + ' weeks' : 'Self-paced'),
      difficulty: course.difficulty,
      level: course.level || course.difficulty,
      image: course.image,
      bannerImage: course.bannerImage || course.image,
      introVideo: course.introVideo || '',
      certificateImage: course.certificateImage || '',
      description: course.description,
      shortDescription: course.shortDescription || course.subtitle || course.description,
      fullDescription: course.fullDescription || course.description,
      language: course.language || 'English',
      mode: course.mode || 'Online',
      startDate: course.startDate || '',
      certificateAvailable: course.certificateAvailable !== false,
      prerequisites: Array.isArray(course.prerequisites) ? course.prerequisites.slice() : splitLines(course.prerequisites),
      learningOutcomes: Array.isArray(course.learningOutcomes) ? course.learningOutcomes.slice() : splitLines(course.learningOutcomes),
      status: course.status || 'published',
      lessonsCount: (course.modules || []).reduce(function (count, module) {
        return count + ((module.lessons || []).length || 0);
      }, 0),
      notesCount: (course.notes || []).length,
      assignmentsCount: (course.assignments || []).length,
      quizzesCount: (course.quizzes || []).length,
      projectsCount: (course.projects || []).length
    };
  }

  function buildAssignmentRecord(course, assignment) {
    var liveAssignment = window.LMSDemo && LMSDemo.getAssignmentById ? LMSDemo.getAssignmentById(assignment.id) : null;
    var submissionCount = Number(assignment.submissionCount);
    if (!submissionCount && liveAssignment && liveAssignment.submitted) {
      submissionCount = 1;
    }
    return {
      id: assignment.id,
      title: assignment.title,
      courseId: course.id,
      courseTitle: course.title,
      dueDate: assignment.dueDate,
      assignmentType: assignment.assignmentType || 'Homework',
      instructions: assignment.instructions || '',
      deliverables: splitLines(assignment.deliverables || assignment.expectations).join('\n'),
      expectations: assignment.expectations || splitLines(assignment.deliverables).join('\n'),
      marks: Number(assignment.marks) || 25,
      referencePath: assignment.referencePath || assignment.filePath || '',
      referenceName: assignment.referenceName || '',
      referenceType: assignment.referenceType || '',
      visibility: assignment.visibility || 'visible',
      moduleId: assignment.moduleId || null,
      moduleTitle: assignment.moduleTitle || assignment.topic || 'Course Module',
      status: assignment.status || (liveAssignment && liveAssignment.submitted ? 'submissions-open' : 'pending-submissions'),
      statusLabel: assignment.statusLabel || 'New assignment',
      submissionCount: submissionCount,
      submissionOverview: assignment.submissionOverview || (submissionCount ? submissionCount + ' submission(s) received' : 'Awaiting first submission')
    };
  }

  function buildQuizRecord(course, quiz) {
    var liveQuiz = window.LMSDemo && LMSDemo.getQuizById ? LMSDemo.getQuizById(quiz.id) : null;
    var attemptsCount = Number(quiz.attemptsCount) || 0;
    if (!attemptsCount && liveQuiz && liveQuiz.completed) {
      attemptsCount = 1;
    }
    return {
      id: quiz.id,
      title: quiz.title,
      courseId: course.id,
      courseTitle: course.title,
      durationMinutes: quiz.durationMinutes,
      totalMarks: quiz.totalMarks,
      passScore: Number(quiz.passScore) || 50,
      instructions: Array.isArray(quiz.instructions) ? quiz.instructions.slice() : splitLines(quiz.instructions),
      referencePath: quiz.referencePath || '',
      referenceName: quiz.referenceName || '',
      referenceType: quiz.referenceType || '',
      status: quiz.status || (liveQuiz && liveQuiz.completed ? 'review-ready' : 'active'),
      attemptsCount: attemptsCount,
      questions: safeClone(quiz.questions || []),
      questionCount: (quiz.questions || []).length
    };
  }

  function buildNoteRecord(course, note) {
    return {
      id: note.id,
      title: note.title,
      courseId: course.id,
      courseTitle: course.title,
      moduleId: note.moduleId || null,
      moduleTitle: note.moduleTitle || note.topic || 'Course Module',
      type: note.type || 'Study Notes',
      category: note.category || note.type || 'Academic Reference',
      summary: note.summary || note.description || note.content || '',
      description: note.description || note.content || '',
      content: note.content || note.description || '',
      resourcePath: note.resourcePath || note.filePath || '',
      resourceName: note.resourceName || '',
      resourceType: note.resourceType || ''
    };
  }

  function buildProjectRecord(course, project) {
    return {
      id: project.id,
      title: project.title,
      courseId: course.id,
      courseTitle: course.title,
      subtitle: project.subtitle || '',
      deadline: project.deadline,
      objectives: Array.isArray(project.objectives) ? project.objectives.slice() : splitLines(project.objectives),
      requirements: Array.isArray(project.requirements) ? project.requirements.slice() : splitLines(project.requirements || project.deliverables),
      description: project.description || '',
      tools: Array.isArray(project.tools) ? project.tools.slice() : splitLines(project.tools || project.techStack),
      expectedOutcome: project.expectedOutcome || '',
      difficulty: project.difficulty || 'Intermediate',
      statusLabel: project.statusLabel || 'Not Started'
    };
  }

  function buildLessonRecord(course, module, lesson, position) {
    return {
      id: lesson.id,
      title: lesson.title,
      courseId: course.id,
      courseTitle: course.title,
      moduleId: module.id,
      moduleTitle: module.title,
      position: Number(lesson.position) || position || 1,
      duration: lesson.duration || '20 min',
      image: lesson.image || course.image,
      subtitle: lesson.subtitle || '',
      description: lesson.description || lesson.content || '',
      content: lesson.content || lesson.description || '',
      videoUrl: lesson.videoUrl || lesson.video || '',
      resourcePath: lesson.resourcePath || lesson.referencePath || '',
      imageName: lesson.imageName || '',
      videoName: lesson.videoName || '',
      resourceName: lesson.resourceName || '',
      mediaType: lesson.mediaType || 'Video'
    };
  }

  function getBaseState() {
    var catalog = getCatalog();
    var courses = catalog.map(buildCourseRecord);
    var assignments = catalog.reduce(function (list, course) {
      return list.concat((course.assignments || []).map(function (assignment) {
        return buildAssignmentRecord(course, assignment);
      }));
    }, []);
    var quizzes = catalog.reduce(function (list, course) {
      return list.concat((course.quizzes || []).map(function (quiz) {
        return buildQuizRecord(course, quiz);
      }));
    }, []);
    var shared = loadSharedContent();
    var students = collectStudentRoster();
    var certificates = buildDerivedCertificates(students);
    var admins = getDerivedAdmins();

    return {
      shared: shared,
      courses: courses,
      assignments: assignments,
      quizzes: quizzes,
      students: students,
      certificates: certificates,
      admins: admins
    };
  }

  function loadState() {
    var base = getBaseState();
    try {
      var saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (!saved) return base;
      return {
        shared: base.shared,
        courses: base.courses,
        assignments: base.assignments,
        quizzes: base.quizzes,
        students: mergeStudentRecords(base.students, saved.students),
        certificates: mergeCertificates(base.certificates, saved.certificates, base.students),
        admins: mergeAdmins(base.admins, saved.admins)
      };
    } catch (error) {
      return base;
    }
  }

  var state = loadState();

  function persistAdminState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      students: state.students,
      certificates: state.certificates,
      admins: state.admins
    }));
  }

  function reloadDerivedState() {
    var refreshed = getBaseState();
    state.shared = refreshed.shared;
    state.courses = refreshed.courses;
    state.assignments = refreshed.assignments;
    state.quizzes = refreshed.quizzes;
    state.students = mergeStudentRecords(refreshed.students, state.students);
    state.certificates = mergeCertificates(refreshed.certificates, state.certificates, state.students);
    if (!state.admins || !state.admins.length) {
      state.admins = refreshed.admins;
    } else {
      state.admins = mergeAdmins(refreshed.admins, state.admins);
    }
  }

  function mergeAdmins(defaultAdmins, savedAdmins) {
    var combined = [];
    var seenEmails = {};

    (defaultAdmins || []).concat(savedAdmins || []).forEach(function (admin) {
      if (!admin || !admin.email) return;
      var email = String(admin.email).trim().toLowerCase();
      if (seenEmails[email]) return;
      seenEmails[email] = true;
      combined.push(normalizeAdmin(admin));
    });

    return combined.length ? combined : (defaultAdmins || []).map(normalizeAdmin);
  }

  function upsertShared(listName, record, prefix, normalize) {
    var shared = loadSharedContent();
    var item = normalize ? normalize(record) : Object.assign({}, record);
    if (!item.id) {
      item.id = prefix + '-' + Date.now();
    }

    var existingIndex = shared[listName].findIndex(function (entry) {
      return entry.id === item.id;
    });

    if (existingIndex >= 0) {
      shared[listName][existingIndex] = Object.assign({}, shared[listName][existingIndex], item);
    } else {
      shared[listName].unshift(item);
    }

    persistSharedContent(shared);
    reloadDerivedState();
    persistAdminState();
    return item;
  }

  function normalizeCourse(course) {
    var id = course.id || slugify(course.title);
    return {
      id: id,
      title: course.title,
      subtitle: course.subtitle,
      slug: course.slug || id,
      category: course.category,
      department: course.department || course.category,
      instructor: course.instructor,
      instructorTitle: course.instructorTitle || 'Course Mentor',
      durationWeeks: Number(course.durationWeeks) || 6,
      durationLabel: course.durationLabel || ((Number(course.durationWeeks) || 6) + ' weeks'),
      difficulty: course.difficulty,
      level: course.level || course.difficulty,
      image: course.image,
      bannerImage: course.bannerImage || course.image,
      introVideo: course.introVideo || '',
      description: course.description,
      shortDescription: course.shortDescription || course.subtitle || course.description,
      fullDescription: course.fullDescription || course.description,
      certificateImage: course.certificateImage || 'assets/Machine Learning Certificate.jpg',
      language: course.language || 'English',
      mode: course.mode || 'Online',
      rating: Number(course.rating) || 4.7,
      learners: Number(course.learners) || 180,
      startDate: course.startDate || 'June 01, 2026',
      certificateImage: course.certificateImage || 'assets/Machine Learning Certificate.jpg',
      certificateAvailable: course.certificateAvailable !== false,
      prerequisites: splitLines(course.prerequisites),
      learningOutcomes: splitLines(course.learningOutcomes),
      status: course.status || 'published',
      archived: !!course.archived
    };
  }

  function normalizeAssignment(assignment) {
    return {
      id: assignment.id,
      courseId: assignment.courseId,
      title: assignment.title,
      dueDate: assignment.dueDate,
      assignmentType: assignment.assignmentType || 'Homework',
      instructions: assignment.instructions || '',
      deliverables: splitLines(assignment.deliverables || assignment.expectations),
      expectations: assignment.expectations || assignment.deliverables || '',
      moduleId: assignment.moduleId || null,
      moduleTitle: assignment.moduleTitle || assignment.topic || 'Course Module',
      marks: Number(assignment.marks) || 25,
      referencePath: assignment.referencePath || assignment.filePath || '',
      referenceName: assignment.referenceName || '',
      referenceType: assignment.referenceType || '',
      visibility: assignment.visibility || 'visible',
      submissionCount: Number(assignment.submissionCount) || 0,
      submissionOverview: assignment.submissionOverview || '',
      status: assignment.status || 'pending-submissions',
      statusLabel: assignment.statusLabel || 'New assignment',
      archived: !!assignment.archived
    };
  }

  function normalizeQuiz(quiz) {
    return {
      id: quiz.id,
      courseId: quiz.courseId,
      title: quiz.title,
      durationMinutes: Number(quiz.durationMinutes) || 20,
      totalMarks: Number(quiz.totalMarks) || 20,
      passScore: Number(quiz.passScore) || 50,
      instructions: splitLines(quiz.instructions).length ? splitLines(quiz.instructions) : [
        'Answer all questions before submitting.',
        'Use the review section after submission to compare correct and wrong answers.'
      ],
      questions: safeClone(quiz.questions || []),
      referencePath: quiz.referencePath || '',
      referenceName: quiz.referenceName || '',
      referenceType: quiz.referenceType || '',
      status: quiz.status || 'active',
      archived: !!quiz.archived
    };
  }

  function normalizeNote(note) {
    return {
      id: note.id,
      courseId: note.courseId,
      moduleId: note.moduleId || null,
      moduleTitle: note.moduleTitle || note.topic || 'Course Module',
      title: note.title,
      summary: note.summary || note.description || note.content || '',
      description: note.description || note.content || '',
      content: note.content || note.description || '',
      type: note.type || 'Study Notes',
      category: note.category || note.type || 'Academic Reference',
      resourcePath: note.resourcePath || note.filePath || '',
      resourceName: note.resourceName || '',
      resourceType: note.resourceType || '',
      archived: !!note.archived
    };
  }

  function normalizeProject(project) {
    return {
      id: project.id,
      courseId: project.courseId,
      title: project.title,
      subtitle: project.subtitle || 'Course-linked project workspace',
      deadline: project.deadline,
      objectives: splitLines(project.objectives),
      requirements: splitLines(project.requirements || project.deliverables),
      description: project.description || '',
      tools: splitLines(project.tools || project.techStack),
      expectedOutcome: project.expectedOutcome || '',
      difficulty: project.difficulty || 'Intermediate',
      statusLabel: project.statusLabel || 'Not Started',
      archived: !!project.archived
    };
  }

  function normalizeLesson(lesson) {
    return {
      id: lesson.id,
      courseId: lesson.courseId,
      moduleId: lesson.moduleId || (lesson.courseId + '-module-1'),
      moduleTitle: lesson.moduleTitle || lesson.topic || 'Learning Module',
      title: lesson.title,
      subtitle: lesson.subtitle || '',
      image: lesson.image || '',
      description: lesson.description || '',
      content: lesson.content || lesson.description || '',
      duration: lesson.duration || '20 min',
      position: Number(lesson.position) || 1,
      videoUrl: lesson.videoUrl || lesson.video || '',
      resourcePath: lesson.resourcePath || lesson.referencePath || '',
      imageName: lesson.imageName || '',
      videoName: lesson.videoName || '',
      resourceName: lesson.resourceName || '',
      mediaType: lesson.mediaType || 'Video',
      archived: !!lesson.archived
    };
  }

  function normalizeAnnouncement(announcement) {
    return {
      id: announcement.id,
      title: announcement.title,
      category: announcement.category || 'Academic Notice',
      content: announcement.content || announcement.description || '',
      publishDate: announcement.publishDate || new Date().toISOString().split('T')[0],
      audience: announcement.audience || 'All Students',
      archived: !!announcement.archived
    };
  }

  function saveCourse(course) {
    return upsertShared('courses', course, 'course', normalizeCourse);
  }

  function saveAssignment(assignment) {
    return upsertShared('assignments', assignment, 'assignment', normalizeAssignment);
  }

  function saveQuiz(quiz) {
    return upsertShared('quizzes', quiz, 'quiz', normalizeQuiz);
  }

  function saveNote(note) {
    return upsertShared('notes', note, 'note', normalizeNote);
  }

  function saveProject(project) {
    return upsertShared('projects', project, 'project', normalizeProject);
  }

  function saveLesson(lesson) {
    return upsertShared('lessons', lesson, 'lesson', normalizeLesson);
  }

  function saveAnnouncement(announcement) {
    return upsertShared('announcements', announcement, 'announcement', normalizeAnnouncement);
  }

  function saveCertificate(certificate) {
    if (!certificate.id) {
      certificate.id = 'certificate-' + Date.now();
      certificate.source = 'manual';
      state.certificates.unshift(certificate);
    } else {
      var updated = false;
      state.certificates = state.certificates.map(function (item) {
        if (item.id === certificate.id) {
          updated = true;
          return Object.assign({}, item, certificate, { source: certificate.source || item.source || 'manual' });
        }
        return item;
      });
      if (!updated) {
        state.certificates.unshift(Object.assign({}, certificate, {
          source: certificate.source || 'manual'
        }));
      }
    }
    persistAdminState();
    return certificate;
  }

  function deleteSharedRecord(listName, id, fallbackRecord) {
    var shared = loadSharedContent();
    var existingIndex = shared[listName].findIndex(function (entry) {
      return entry.id === id;
    });

    if (existingIndex >= 0) {
      var existing = shared[listName][existingIndex];
      if (existing && existing.archived) {
        shared[listName].splice(existingIndex, 1);
      } else {
        shared[listName][existingIndex] = Object.assign({}, existing, { archived: true });
      }
    } else {
      shared[listName].unshift(Object.assign({ id: id, archived: true }, fallbackRecord || {}));
    }

    persistSharedContent(shared);
    reloadDerivedState();
    persistAdminState();
  }

  function deleteCourse(courseId) {
    var course = state.courses.find(function (item) { return item.id === courseId; });
    if (!course) return;
    deleteSharedRecord('courses', courseId, { title: course.title });
  }

  function deleteAssignment(assignmentId) {
    var assignment = state.assignments.find(function (item) { return item.id === assignmentId; });
    if (!assignment) return;
    deleteSharedRecord('assignments', assignmentId, { courseId: assignment.courseId, title: assignment.title });
  }

  function deleteQuiz(quizId) {
    var quiz = state.quizzes.find(function (item) { return item.id === quizId; });
    if (!quiz) return;
    deleteSharedRecord('quizzes', quizId, { courseId: quiz.courseId, title: quiz.title });
  }

  function deleteNote(noteId) {
    var note = getNotes().find(function (item) { return item.id === noteId; });
    if (!note) return;
    deleteSharedRecord('notes', noteId, { courseId: note.courseId, title: note.title });
  }

  function deleteProject(projectId) {
    var project = getProjects().find(function (item) { return item.id === projectId; });
    if (!project) return;
    deleteSharedRecord('projects', projectId, { courseId: project.courseId, title: project.title });
  }

  function deleteLesson(lessonId) {
    var lesson = getLessons().find(function (item) { return item.id === lessonId; });
    if (!lesson) return;
    deleteSharedRecord('lessons', lessonId, { courseId: lesson.courseId, title: lesson.title, moduleId: lesson.moduleId });
  }

  function deleteAnnouncement(announcementId) {
    deleteSharedRecord('announcements', announcementId, {});
  }

  function deleteCertificate(certificateId) {
    state.certificates = state.certificates.filter(function (certificate) {
      return certificate.id !== certificateId;
    });
    persistAdminState();
  }

  function buildStudentMetrics(student) {
    var enrolledCourses = Array.isArray(student.enrolledCourses) ? student.enrolledCourses : [];
    var completedCourses = enrolledCourses.filter(function (course) {
      return course.status === 'completed';
    }).length;
    var averageProgress = enrolledCourses.length
      ? Math.round(enrolledCourses.reduce(function (sum, course) {
          return sum + (Number(course.progress) || 0);
        }, 0) / enrolledCourses.length)
      : 0;

    return Object.assign({}, student, {
      enrolledCount: enrolledCourses.length,
      completedCourses: completedCourses,
      averageProgress: averageProgress,
      activeCourse: enrolledCourses.find(function (course) { return course.status !== 'completed'; }) || enrolledCourses[0] || null,
      completedCourseTitles: enrolledCourses.filter(function (course) { return course.status === 'completed'; }).map(function (course) { return course.title; }),
      certificatesCount: getCertificates().filter(function (certificate) {
        return (certificate.studentId === student.id || certificate.studentEmail === student.email || certificate.studentName === student.name) && certificate.visible;
      }).length,
      quizActivityCount: typeof student.quizActivityCount === 'number'
        ? student.quizActivityCount
        : Math.max(0, completedCourses) + (enrolledCourses.some(function (course) { return Number(course.progress) >= 60; }) ? 1 : 0),
      assignmentActivityCount: typeof student.assignmentActivityCount === 'number'
        ? student.assignmentActivityCount
        : enrolledCourses.filter(function (course) { return Number(course.progress) >= 30; }).length,
      profileSummary: student.profileSummary || (student.department + ' • ' + student.semester + ' • ' + enrolledCourses.length + ' active learning path(s)'),
      needsAttention: enrolledCourses.some(function (course) { return (Number(course.progress) || 0) < 50; })
    });
  }

  function getStudentById(studentId) {
    return getStudents().find(function (student) {
      return student.id === studentId;
    }) || null;
  }

  function updateStudentStatus(studentId, status) {
    state.students = state.students.map(function (student) {
      return student.id === studentId ? Object.assign({}, student, { status: status }) : student;
    });
    persistAdminState();
  }

  function updateStudent(studentId, updates) {
    var student = getStudentById(studentId);
    if (!student) return null;

    var safeUpdates = Object.assign({}, updates || {});
    delete safeUpdates.id;
    delete safeUpdates.email;
    delete safeUpdates.role;
    delete safeUpdates.storageKey;
    delete safeUpdates.enrolledCourses;
    delete safeUpdates.completedCourseDetails;
    delete safeUpdates.completedCourseTitles;
    delete safeUpdates.activeCourse;

    var users = loadRegisteredUsers();
    var stateCollection = loadStudentStateCollection();
    var storageKey = student.storageKey;
    var currentSession = loadCurrentStudentSession();

    users = users.map(function (user) {
      var userKey = getStudentStorageKey(user);
      if (userKey !== storageKey) return user;
      return Object.assign({}, user, {
        name: safeUpdates.name || user.name,
        phone: safeUpdates.phone || user.phone || '',
        registerNo: safeUpdates.registerNo || user.registerNo || '',
        department: safeUpdates.department || user.department || '',
        semester: safeUpdates.semester || user.semester || '',
        institution: safeUpdates.institution || user.institution || '',
        joinedOn: safeUpdates.joinedOn || user.joinedOn || '',
        status: safeUpdates.status || user.status || 'active'
      });
    });
    persistRegisteredUsers(users);

    var studentState = stateCollection[storageKey] || buildEmptyStudentState(student);
    studentState.profile = Object.assign({}, studentState.profile || {}, {
      name: safeUpdates.name || studentState.profile.name || student.name,
      email: student.email,
      phone: safeUpdates.phone || studentState.profile.phone || student.phone || ''
    });
    studentState.meta = Object.assign({}, studentState.meta || {}, {
      id: student.id,
      role: 'student',
      registerNo: safeUpdates.registerNo || studentState.meta.registerNo || student.registerNo || '',
      department: safeUpdates.department || studentState.meta.department || student.department || '',
      semester: safeUpdates.semester || studentState.meta.semester || student.semester || '',
      institution: safeUpdates.institution || studentState.meta.institution || student.institution || '',
      joinedOn: safeUpdates.joinedOn || studentState.meta.joinedOn || student.joinedOn || ''
    });
    stateCollection[storageKey] = studentState;
    persistStudentStateCollection(stateCollection);

    if (currentSession && getStudentStorageKey(currentSession) === storageKey) {
      persistCurrentStudentSession(Object.assign({}, currentSession, {
        name: safeUpdates.name || currentSession.name || student.name,
        email: student.email,
        phone: safeUpdates.phone || currentSession.phone || student.phone || '',
        registerNo: safeUpdates.registerNo || currentSession.registerNo || student.registerNo || '',
        department: safeUpdates.department || currentSession.department || student.department || '',
        semester: safeUpdates.semester || currentSession.semester || student.semester || '',
        institution: safeUpdates.institution || currentSession.institution || student.institution || '',
        joinedOn: safeUpdates.joinedOn || currentSession.joinedOn || student.joinedOn || '',
        status: safeUpdates.status || currentSession.status || student.status
      }));
    }

    state.students = state.students.map(function (item) {
      if (item.id !== studentId) return item;
      return Object.assign({}, item, safeUpdates);
    });
    persistAdminState();
    reloadDerivedState();
    return getStudentById(studentId);
  }

  function resetStudentProgress(studentId) {
    var student = getStudentById(studentId);
    if (!student) return null;

    var stateCollection = loadStudentStateCollection();
    stateCollection[student.storageKey] = buildEmptyStudentState(student);
    persistStudentStateCollection(stateCollection);
    reloadDerivedState();
    persistAdminState();
    return getStudentById(studentId);
  }

  function deleteStudent(studentId) {
    var student = getStudentById(studentId);
    if (!student) return;

    var users = loadRegisteredUsers().filter(function (user) {
      return getStudentStorageKey(user) !== student.storageKey;
    });
    persistRegisteredUsers(users);

    var stateCollection = loadStudentStateCollection();
    delete stateCollection[student.storageKey];
    persistStudentStateCollection(stateCollection);

    var currentSession = loadCurrentStudentSession();
    if (currentSession && getStudentStorageKey(currentSession) === student.storageKey) {
      persistCurrentStudentSession(null);
    }

    state.students = state.students.filter(function (item) {
      return item.id !== studentId;
    });
    state.certificates = state.certificates.filter(function (certificate) {
      return certificate.studentId !== student.id && certificate.studentEmail !== student.email && certificate.studentName !== student.name;
    });
    persistAdminState();
    reloadDerivedState();
  }

  function getAnnouncements() {
    return safeClone(loadSharedContent().announcements || [])
      .filter(function (announcement) {
        return !announcement.archived;
      })
      .sort(function (a, b) {
        return String(b.publishDate || '').localeCompare(String(a.publishDate || ''));
      });
  }

  function getRecentActivity() {
    var activity = [];
    var announcements = getAnnouncements();
    var certificates = getCertificates();
    var students = getStudents();

    if (announcements[0]) {
      activity.push({
        type: 'announcement',
        title: announcements[0].title,
        meta: announcements[0].category + ' • ' + announcements[0].publishDate,
        description: announcements[0].content
      });
    }

    certificates.slice(0, 2).forEach(function (certificate) {
      activity.push({
        type: 'certificate',
        title: certificate.studentName + ' - ' + certificate.courseTitle,
        meta: 'Certificate • ' + certificate.issueDate,
        description: 'Status: ' + certificate.status
      });
    });

    students.slice(0, 3).forEach(function (student) {
      var activeCourse = student.activeCourse ? student.activeCourse.title + ' at ' + student.activeCourse.progress + '%' : 'No active course yet';
      activity.push({
        type: 'student',
        title: student.name,
        meta: student.department + ' • ' + student.semester,
        description: activeCourse
      });
    });

    return activity.slice(0, 6);
  }

  function getReports() {
    var students = getStudents();
    var courses = getCourses();
    var assignments = getAssignments();
    var quizzes = getQuizzes();
    var certificates = getCertificates();
    var activeEnrollments = students.reduce(function (count, student) {
      return count + student.enrolledCount;
    }, 0);
    var completedEnrollments = students.reduce(function (count, student) {
      return count + student.completedCourses;
    }, 0);
    var quizAttempts = quizzes.reduce(function (count, quiz) {
      return count + (Number(quiz.attemptsCount) || 0);
    }, 0);
    var coursePopularity = courses.map(function (course) {
      var enrolled = students.filter(function (student) {
        return student.enrolledCourses.some(function (item) {
          return item.title === course.title;
        });
      }).length;
      var completed = students.filter(function (student) {
        return student.enrolledCourses.some(function (item) {
          return item.title === course.title && item.status === 'completed';
        });
      }).length;
      return {
        courseTitle: course.title,
        enrolled: enrolled,
        completed: completed,
        completionRate: enrolled ? Math.round((completed / enrolled) * 100) : 0
      };
    }).sort(function (a, b) {
      return b.enrolled - a.enrolled;
    });

    return {
      overview: {
        totalStudents: students.length,
        totalCourses: courses.length,
        activeEnrollments: activeEnrollments,
        completedCourses: completedEnrollments,
        certificatesIssued: certificates.filter(function (certificate) { return certificate.visible; }).length,
        pendingAssignments: assignments.filter(function (assignment) { return assignment.status === 'pending-submissions'; }).length,
        quizActivity: quizAttempts
      },
      coursePopularity: coursePopularity,
      completionSummary: students.map(function (student) {
        return {
          studentName: student.name,
          enrolledCount: student.enrolledCount,
          completedCourses: student.completedCourses,
          averageProgress: student.averageProgress
        };
      }),
      quizParticipation: quizzes.map(function (quiz) {
        return {
          title: quiz.title,
          courseTitle: quiz.courseTitle,
          attemptsCount: Number(quiz.attemptsCount) || 0,
          status: quiz.status
        };
      }),
      studentActivity: students.map(function (student) {
        return {
          name: student.name,
          status: student.status,
          activeCourse: student.activeCourse ? student.activeCourse.title : 'No active course',
          needsAttention: student.needsAttention
        };
      })
    };
  }

  function getDashboardSummary() {
    var students = getStudents();
    var reports = getReports();
    var activeQuizzes = state.quizzes.length;
    var pendingAssignments = state.assignments.filter(function (assignment) {
      return assignment.status === 'pending-submissions';
    }).length;
    var enrolledStudents = students.reduce(function (count, student) {
      return count + student.enrolledCount;
    }, 0);
    var issuedCertificates = state.certificates.filter(function (certificate) { return certificate.visible; }).length;
    var activeProjects = getCatalog().reduce(function (count, course) {
      return count + ((course.projects || []).length || 0);
    }, 0);
    var notesCount = getCatalog().reduce(function (count, course) {
      return count + ((course.notes || []).length || 0);
    }, 0);
    var lessonsCount = getCatalog().reduce(function (count, course) {
      return count + (course.modules || []).reduce(function (moduleCount, module) {
        return moduleCount + ((module.lessons || []).length || 0);
      }, 0);
    }, 0);

    return {
      totalStudents: students.length,
      totalCourses: state.courses.length,
      totalAdmins: getAdmins().length,
      activeEnrollments: enrolledStudents,
      completedCourses: reports.overview.completedCourses,
      pendingAssignments: pendingAssignments,
      activeQuizzes: activeQuizzes,
      quizActivity: reports.overview.quizActivity,
      activeProjects: activeProjects,
      issuedCertificates: issuedCertificates,
      notesCount: notesCount,
      lessonsCount: lessonsCount,
      announcementsCount: getAnnouncements().length,
      reportsInsightsCount:
        reports.coursePopularity.filter(function (item) { return item.enrolled > 0; }).length +
        reports.studentActivity.filter(function (item) { return item.needsAttention; }).length,
      recentActivity: getRecentActivity(),
      coursePopularity: reports.coursePopularity.slice(0, 5),
      atRiskStudents: students.filter(function (student) { return student.needsAttention; }).length
    };
  }

  function getCourses() { reloadDerivedState(); return safeClone(state.courses); }
  function getAssignments() { reloadDerivedState(); return safeClone(state.assignments); }
  function getQuizzes() { reloadDerivedState(); return safeClone(state.quizzes); }
  function getStudents() {
    return safeClone(state.students).map(buildStudentMetrics);
  }
  function getCertificates() { return safeClone(state.certificates); }
  function getNotes() {
    reloadDerivedState();
    return getCatalog().reduce(function (list, course) {
      return list.concat((course.notes || []).map(function (note) {
        return buildNoteRecord(course, note);
      }));
    }, []);
  }
  function getProjects() {
    reloadDerivedState();
    return getCatalog().reduce(function (list, course) {
      return list.concat((course.projects || []).map(function (project) {
        return buildProjectRecord(course, project);
      }));
    }, []);
  }
  function getLessons() {
    reloadDerivedState();
    return getCatalog().reduce(function (list, course) {
      return list.concat((course.modules || []).reduce(function (lessonList, module) {
        return lessonList.concat((module.lessons || []).map(function (lesson, index) {
          return buildLessonRecord(course, module, lesson, index + 1);
        }));
      }, []));
    }, []);
  }

  function getCourseOptions() {
    return getCatalog().map(function (course) {
      return { id: course.id, title: course.title };
    });
  }

  function getModuleOptions(courseId) {
    var course = getCourseById(courseId);
    if (!course) return [];
    return (course.modules || []).map(function (module) {
      return { id: module.id, title: module.title };
    });
  }

  function getStudentOptions() {
    return getStudents().map(function (student) {
      return {
        id: student.id,
        name: student.name,
        email: student.email
      };
    });
  }

  function getQuickActions() {
    return [
      { label: 'Add Course', href: 'courses.html' },
      { label: 'Add Lesson', href: 'lessons.html' },
      { label: 'Add Note', href: 'notes.html' },
      { label: 'Create Assignment', href: 'assignments.html' },
      { label: 'Create Quiz', href: 'quizzes.html' },
      { label: 'Add Project', href: 'projects.html' },
      { label: 'Post Announcement', href: 'announcements.html' },
      { label: 'View Students', href: 'students.html' },
      { label: 'Add Admin', href: 'admins.html' }
    ];
  }

  function normalizeAdmin(admin) {
    return {
      id: admin.id || ('admin-' + Date.now()),
      name: admin.name || 'Admin User',
      email: String(admin.email || '').trim().toLowerCase(),
      password: admin.password || '',
      role: 'admin',
      phone: admin.phone || '',
      department: admin.department || 'LMS Administration',
      createdAt: admin.createdAt || new Date().toISOString().split('T')[0],
      isDefault: !!admin.isDefault
    };
  }

  function getAdmins() {
    return safeClone(state.admins || []).map(function (admin) {
      return Object.assign({}, admin, { password: '' });
    });
  }

  function createAdmin(admin) {
    var normalized = normalizeAdmin(admin);
    if (!normalized.name || !normalized.email || !normalized.password) {
      throw new Error('All required admin fields must be filled.');
    }

    var existing = (state.admins || []).some(function (item) {
      return item.email === normalized.email;
    });

    if (existing) {
      throw new Error('An admin with this email already exists.');
    }

    state.admins = [normalized].concat(state.admins || []);
    persistAdminState();
    return Object.assign({}, normalized, { password: '' });
  }

  function deleteAdmin(adminId) {
    var adminToDelete = (state.admins || []).find(function (admin) { return admin.id === adminId; });
    if (!adminToDelete) {
      throw new Error('Admin account not found.');
    }
    if (adminToDelete.isDefault) {
      throw new Error('The default admin account cannot be removed.');
    }
    if ((state.admins || []).length <= 1) {
      throw new Error('At least one admin account must remain.');
    }

    state.admins = state.admins.filter(function (admin) {
      return admin.id !== adminId;
    });
    persistAdminState();
  }

  function authenticate(adminId, password) {
    var loginId = String(adminId || '').trim().toLowerCase();
    return (state.admins || []).some(function (admin) {
      return admin.email === loginId && admin.password === password;
    });
  }

  function getAdminByEmail(email) {
    var loginId = String(email || '').trim().toLowerCase();
    var match = (state.admins || []).find(function (admin) {
      return admin.email === loginId;
    });
    return match ? Object.assign({}, match, { password: '' }) : null;
  }

  function getCurrentAdmin() {
    var session = loadAdminSession();
    if (!session) return getAdmins()[0] || null;
    return getAdminByEmail(session.email) || {
      id: session.adminId || session.email,
      name: session.name || 'Admin User',
      email: session.email || '',
      role: 'admin',
      department: 'LMS Administration',
      createdAt: String(session.loggedInAt || '').split('T')[0] || '',
      loggedInAt: session.loggedInAt || ''
    };
  }

  window.AdminLMS = {
    getDashboardSummary: getDashboardSummary,
    getCourses: getCourses,
    getAssignments: getAssignments,
    getQuizzes: getQuizzes,
    getNotes: getNotes,
    getProjects: getProjects,
    getLessons: getLessons,
    getStudents: getStudents,
    getStudentById: getStudentById,
    getCertificates: getCertificates,
    getAnnouncements: getAnnouncements,
    getRecentActivity: getRecentActivity,
    getReports: getReports,
    getAdmins: getAdmins,
    getAdminByEmail: getAdminByEmail,
    getCurrentAdmin: getCurrentAdmin,
    getCourseOptions: getCourseOptions,
    getModuleOptions: getModuleOptions,
    getStudentOptions: getStudentOptions,
    getQuickActions: getQuickActions,
    updateStudentStatus: updateStudentStatus,
    updateStudent: updateStudent,
    resetStudentProgress: resetStudentProgress,
    deleteStudent: deleteStudent,
    saveCourse: saveCourse,
    saveAssignment: saveAssignment,
    saveQuiz: saveQuiz,
    saveNote: saveNote,
    saveProject: saveProject,
    saveLesson: saveLesson,
    saveAnnouncement: saveAnnouncement,
    saveCertificate: saveCertificate,
    deleteCourse: deleteCourse,
    deleteAssignment: deleteAssignment,
    deleteQuiz: deleteQuiz,
    deleteNote: deleteNote,
    deleteProject: deleteProject,
    deleteLesson: deleteLesson,
    deleteAnnouncement: deleteAnnouncement,
    deleteCertificate: deleteCertificate,
    createAdmin: createAdmin,
    deleteAdmin: deleteAdmin,
    authenticate: authenticate
  };
})();
