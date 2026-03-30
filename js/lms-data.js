(function () {
  const LEGACY_STORAGE_KEY = "lms_demo_state_v1";
  const STORAGE_KEY = "lms_student_state_map_v2";
  const ADMIN_CONTENT_KEY = "lms_admin_content_v1";
  const SESSION_KEY = "user";
  const PRIMARY_SESSION_KEY = "currentUser";
  const DEMO_USER_EMAIL = "student@gmail.com";
  const LEGACY_DEMO_USER_EMAILS = [];
  const DEMO_SEED_VERSION = 2;

  const demoStudent = {
    id: 101,
    name: "Bharath A",
    role: "student",
    email: DEMO_USER_EMAIL,
    phone: "+91 98765 43210",
    registerNo: "21VVCS1012",
    department: "CSE",
    institution: "Vidhya Vaaradhi Institute of Technology",
    semester: "Semester 6",
    joinedOn: "2025-08-12",
    image: "assets/TESTIMONIAL PROFILE.jpg"
  };

  const courses = [
    {
      id: "devops",
      title: "DevOps",
      subtitle: "Ship faster with resilient CI/CD and cloud automation",
      category: "Cloud Engineering",
      instructor: "Arjun Menon",
      instructorTitle: "Principal DevOps Architect",
      difficulty: "Intermediate",
      durationWeeks: 8,
      language: "English",
      mode: "Hybrid",
      rating: 4.8,
      learners: 2180,
      startDate: "February 10, 2026",
      image: "assets/DEVOPS.jpg",
      video: "assets/videos/devops-intro.mp4",
      certificateImage: "assets/Machine Learning Certificate.jpg",
      description:
        "Build production-grade delivery pipelines, infrastructure automation, observability workflows, and deployment confidence across modern cloud platforms.",
      highlights: [
        "Hands-on CI/CD labs with GitHub Actions and Jenkins",
        "Infrastructure as Code using Terraform modules",
        "Container orchestration and release strategies",
        "Monitoring, alerts, and post-release validation",
        "Weekly delivery reviews and quiz checkpoints",
        "Completion-aligned industry certificate"
      ],
      modules: [
        {
          id: "devops-m1",
          title: "Foundations of Modern DevOps",
          position: 1,
          lessons: [
            { id: "devops-l1", title: "Why DevOps Matters in Modern Teams", duration: "18 min", video: "assets/videos/devops-intro.mp4" },
            { id: "devops-l2", title: "Version Control and Release Branching", duration: "22 min" },
            { id: "devops-l3", title: "CI Pipeline Design Patterns", duration: "26 min" },
            { id: "devops-l4", title: "Artifact Management and Rollback Planning", duration: "19 min" }
          ]
        },
        {
          id: "devops-m2",
          title: "Containers, Infrastructure, and Delivery",
          position: 2,
          lessons: [
            { id: "devops-l5", title: "Docker Images and Multi-stage Builds", duration: "24 min" },
            { id: "devops-l6", title: "Kubernetes Workloads and Scaling", duration: "28 min" },
            { id: "devops-l7", title: "Infrastructure as Code with Terraform", duration: "30 min" },
            { id: "devops-l8", title: "Secrets, Configs, and Deployment Safety", duration: "21 min" }
          ]
        },
        {
          id: "devops-m3",
          title: "Observability and Platform Operations",
          position: 3,
          lessons: [
            { id: "devops-l9", title: "Metrics, Logs, and Traces", duration: "23 min" },
            { id: "devops-l10", title: "SLOs, Alerts, and Incident Response", duration: "27 min" },
            { id: "devops-l11", title: "Blue-Green and Canary Releases", duration: "25 min" },
            { id: "devops-l12", title: "Platform Readiness Review", duration: "16 min" }
          ]
        }
      ],
      assignments: [
        {
          id: "devops-a1",
          courseId: "devops",
          title: "Design a Release Pipeline for a Student Portal",
          moduleId: "devops-m2",
          dueDate: "2026-03-28",
          statusLabel: "Due in 3 days",
          instructions:
            "Design a realistic release pipeline for a student portal. Cover source control checks, automated testing, build artifact handling, deployment safeguards, and rollback planning.",
          deliverables: [
            "Pipeline stage breakdown with purpose for each stage",
            "Deployment risk mitigation strategy",
            "Short justification for the selected release pattern"
          ],
          feedbackPlaceholder: "Faculty feedback will appear here after review.",
          questions: [
            {
              id: "devops-a1-q1",
              question: "Outline the CI/CD stages you would use for a web portal release.",
              type: "text"
            },
            {
              id: "devops-a1-q2",
              question: "Which deployment strategy best reduces risk for a high-traffic release?",
              type: "mcq",
              options: ["Big bang deployment", "Canary deployment", "Manual FTP upload"]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: "devops-q1",
          courseId: "devops",
          title: "CI/CD and Release Safety Check",
          totalQuestions: 4,
          durationMinutes: 20,
          totalMarks: 20,
          instructions: [
            "Answer all questions before submitting.",
            "Each question carries equal marks.",
            "Use the review summary after submission to learn from incorrect choices."
          ],
          questions: [
            {
              id: "devops-q1-1",
              prompt: "Which practice most directly enables repeatable infrastructure provisioning?",
              options: ["Manual server setup", "Infrastructure as Code", "Email approvals only", "Ad-hoc shell changes"],
              correctOption: 1,
              explanation: "Infrastructure as Code makes environments reproducible and reviewable."
            },
            {
              id: "devops-q1-2",
              prompt: "What is the main purpose of a canary deployment?",
              options: ["Increase build size", "Reduce release risk by gradual exposure", "Skip automated tests", "Replace monitoring"],
              correctOption: 1,
              explanation: "Canary deployments expose a release to a small audience first to validate safety."
            },
            {
              id: "devops-q1-3",
              prompt: "Which signal is most useful immediately after production rollout?",
              options: ["Brand color preference", "Post-release metrics and alerts", "Holiday calendar", "Developer attendance"],
              correctOption: 1,
              explanation: "Metrics and alerts show whether the rollout is healthy."
            },
            {
              id: "devops-q1-4",
              prompt: "Why is artifact versioning important in CI/CD?",
              options: ["It avoids documentation", "It supports rollback and traceability", "It removes testing", "It replaces code review"],
              correctOption: 1,
              explanation: "Versioned artifacts make rollback and release traceability practical."
            }
          ]
        }
      ],
      projects: [
        {
          id: "devops-p1",
          courseId: "devops",
          title: "Deployment Reliability Blueprint",
          subtitle: "Plan an end-to-end delivery workflow for a campus platform",
          deadline: "2026-04-05",
          objectives: [
            "Map a release workflow from commit to monitored deployment",
            "Define environment promotion, approvals, and rollback steps",
            "Present observability checkpoints for production readiness"
          ],
          deliverables: [
            "Architecture workflow document",
            "Release checklist",
            "Monitoring and rollback plan"
          ],
          description:
            "Create a deployment reliability blueprint for a campus digital platform with a focus on safe release engineering and observability.",
          statusLabel: "In Progress"
        }
      ],
      notes: [
        {
          id: "devops-n1",
          moduleId: "devops-m1",
          title: "DevOps Foundations Notes",
          description: "Key principles of collaboration, release velocity, and automation readiness.",
          type: "Lecture Notes"
        },
        {
          id: "devops-n2",
          moduleId: "devops-m2",
          title: "Infrastructure and Deployment Notes",
          description: "Concise notes on containers, IaC, secrets handling, and deployment safety checks.",
          type: "Module Summary"
        },
        {
          id: "devops-n3",
          moduleId: "devops-m3",
          title: "Observability Revision Sheet",
          description: "Metrics, logs, traces, SLOs, and incident follow-up notes for final revision.",
          type: "Revision Sheet"
        }
      ]
    },
    {
      id: "quantum-computing",
      title: "Quantum Computing",
      subtitle: "Understand quantum systems, algorithms, and practical workflows",
      category: "Advanced Computing",
      instructor: "Dr. Kavya Rao",
      instructorTitle: "Quantum Systems Research Lead",
      difficulty: "Advanced",
      durationWeeks: 10,
      language: "English",
      mode: "Online",
      rating: 4.9,
      learners: 1240,
      startDate: "January 06, 2026",
      image: "assets/QC.jpg",
      video: "assets/videos/quantum-intro.mp4",
      certificateImage: "assets/Machine Learning Certificate.jpg",
      description:
        "Move from quantum foundations to circuit design, quantum algorithms, error models, and final problem solving with a research-inspired learning path.",
      highlights: [
        "Concept-first explanation of qubits and superposition",
        "Guided quantum circuit building exercises",
        "Algorithm walkthroughs for search and optimization",
        "Assessment-backed completion milestones",
        "Capstone reflection on real-world applications",
        "Verified certificate unlocked on full completion"
      ],
      modules: [
        {
          id: "quantum-m1",
          title: "Quantum Foundations",
          position: 1,
          lessons: [
            { id: "quantum-l1", title: "Classical vs Quantum Information", duration: "17 min", video: "assets/videos/quantum-intro.mp4" },
            { id: "quantum-l2", title: "Qubits, States, and Measurement", duration: "20 min" },
            { id: "quantum-l3", title: "Superposition and Bloch Sphere Intuition", duration: "24 min" }
          ]
        },
        {
          id: "quantum-m2",
          title: "Quantum Circuits and Gates",
          position: 2,
          lessons: [
            { id: "quantum-l4", title: "Single-Qubit Gates", duration: "19 min" },
            { id: "quantum-l5", title: "Entanglement and Controlled Gates", duration: "22 min" },
            { id: "quantum-l6", title: "Circuit Composition and Simulation", duration: "26 min" },
            { id: "quantum-l7", title: "Noise and Error Awareness", duration: "18 min" }
          ]
        },
        {
          id: "quantum-m3",
          title: "Algorithms and Completion",
          position: 3,
          lessons: [
            { id: "quantum-l8", title: "Grover's Search Algorithm", duration: "28 min" },
            { id: "quantum-l9", title: "Quantum Phase Estimation", duration: "31 min" },
            { id: "quantum-l10", title: "Capstone Review and Certification Check", duration: "15 min" }
          ]
        }
      ],
      assignments: [
        {
          id: "quantum-a1",
          courseId: "quantum-computing",
          title: "Quantum Circuit Reflection Sheet",
          moduleId: "quantum-m2",
          dueDate: "2026-03-02",
          statusLabel: "Submitted",
          instructions:
            "Summarize how a simple entangled circuit behaves and reflect on measurement outcomes, error sensitivity, and the role of controlled gates.",
          deliverables: [
            "Short written explanation of the circuit behaviour",
            "One practical challenge in noisy environments",
            "One observation linking theory to simulation"
          ],
          feedbackPlaceholder: "Reviewed. Clear conceptual understanding with good use of terminology.",
          questions: [
            {
              id: "quantum-a1-q1",
              question: "Explain how entanglement changes the behaviour of a two-qubit system.",
              type: "text"
            }
          ]
        }
      ],
      quizzes: [
        {
          id: "quantum-q1",
          courseId: "quantum-computing",
          title: "Quantum Algorithms Mastery Quiz",
          totalQuestions: 4,
          durationMinutes: 25,
          totalMarks: 20,
          instructions: [
            "Review each question before final submission.",
            "Submitted answers will immediately show score and concept feedback.",
            "Use the review panel to compare your selected choice with the correct answer."
          ],
          questions: [
            {
              id: "quantum-q1-1",
              prompt: "What does superposition allow a qubit to represent?",
              options: ["Only 0", "Only 1", "A combination of basis states", "A network packet"],
              correctOption: 2,
              explanation: "A qubit can exist in a linear combination of basis states until measurement."
            },
            {
              id: "quantum-q1-2",
              prompt: "Which gate commonly creates superposition from |0>?",
              options: ["CNOT", "Hadamard", "SWAP", "Toffoli"],
              correctOption: 1,
              explanation: "The Hadamard gate transforms |0> into an equal superposition state."
            },
            {
              id: "quantum-q1-3",
              prompt: "What is Grover's algorithm known for?",
              options: ["Sorting data", "Speeding up unstructured search", "Compressing images", "Classical encryption"],
              correctOption: 1,
              explanation: "Grover's algorithm offers quadratic speedup for unstructured search problems."
            },
            {
              id: "quantum-q1-4",
              prompt: "Why do quantum systems need error awareness?",
              options: ["Because qubits are noisy and fragile", "Because logic gates never fail", "To reduce electricity cost only", "To remove measurement"],
              correctOption: 0,
              explanation: "Quantum hardware is sensitive to noise and decoherence, so error awareness is essential."
            }
          ]
        }
      ],
      projects: [
        {
          id: "quantum-p1",
          courseId: "quantum-computing",
          title: "Quantum Algorithm Application Brief",
          subtitle: "Present a realistic use case for a quantum algorithm",
          deadline: "2026-03-01",
          objectives: [
            "Select one algorithm covered in the course",
            "Explain the use case and why quantum methods matter",
            "Summarize limits, noise concerns, and implementation constraints"
          ],
          deliverables: [
            "Use-case brief",
            "Algorithm explanation slide or note",
            "Limitations and feasibility summary"
          ],
          description:
            "This capstone-style brief connects quantum algorithms to a plausible real-world application and reflects the completion of the course journey.",
          statusLabel: "Completed"
        }
      ],
      notes: [
        {
          id: "quantum-n1",
          moduleId: "quantum-m1",
          title: "Quantum Foundations Notes",
          description: "Study notes covering qubits, measurement, basis states, and Bloch sphere intuition.",
          type: "Lecture Notes"
        },
        {
          id: "quantum-n2",
          moduleId: "quantum-m2",
          title: "Quantum Gates and Circuits Notes",
          description: "Compact notes on single-qubit gates, entanglement, and circuit composition.",
          type: "Module Summary"
        },
        {
          id: "quantum-n3",
          moduleId: "quantum-m3",
          title: "Algorithms Revision Notes",
          description: "Quick revision guide for Grover, phase estimation, and final certification review.",
          type: "Revision Sheet"
        }
      ]
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      subtitle: "Build predictive models and production-ready AI workflows",
      category: "Artificial Intelligence",
      instructor: "Dr. Naveen Kumar",
      instructorTitle: "Lead AI Faculty",
      difficulty: "Intermediate",
      durationWeeks: 12,
      language: "English",
      mode: "Online",
      rating: 4.7,
      learners: 3560,
      startDate: "April 15, 2026",
      image: "assets/ML.jpg",
      video: "assets/videos/ml.mp4",
      certificateImage: "assets/Machine Learning Certificate.jpg",
      description:
        "Learn supervised learning, model evaluation, deployment basics, and practical ML engineering through a structured academic-industry course path.",
      highlights: [
        "Regression and classification foundations",
        "Model evaluation and tuning workflows",
        "Hands-on notebook exercises",
        "Instructor-led weekly doubt sessions",
        "Project-based learning progression",
        "Certificate support on successful completion"
      ],
      modules: [
        {
          id: "ml-m1",
          title: "ML Foundations",
          position: 1,
          lessons: [
            { id: "ml-l1", title: "Introduction to Machine Learning", duration: "20 min", video: "assets/videos/ml.mp4" },
            { id: "ml-l2", title: "Data Preparation Essentials", duration: "24 min" },
            { id: "ml-l3", title: "Regression Workflow Basics", duration: "27 min" }
          ]
        },
        {
          id: "ml-m2",
          title: "Applied Modeling",
          position: 2,
          lessons: [
            { id: "ml-l4", title: "Classification Algorithms", duration: "26 min" },
            { id: "ml-l5", title: "Model Validation and Bias", duration: "21 min" },
            { id: "ml-l6", title: "Deployment Readiness Review", duration: "18 min" }
          ]
        }
      ],
      assignments: [],
      quizzes: [],
      projects: [],
      notes: []
    },
    {
      id: "generative-ai",
      title: "Generative AI",
      subtitle: "Explore prompting, transformers, and safe AI application design",
      category: "Applied AI",
      instructor: "Priya Sharma",
      instructorTitle: "Generative Systems Specialist",
      difficulty: "Beginner to Intermediate",
      durationWeeks: 6,
      language: "English",
      mode: "Online",
      rating: 4.8,
      learners: 2980,
      startDate: "May 06, 2026",
      image: "assets/GEN AI.jpg",
      video: "assets/videos/genai.mp4",
      certificateImage: "assets/Machine Learning Certificate.jpg",
      description:
        "Understand the building blocks of generative AI, prompting strategy, retrieval-supported workflows, and responsible AI application design.",
      highlights: [
        "Prompt design and evaluation methods",
        "Transformer and LLM conceptual walkthroughs",
        "Use-case driven labs and demos",
        "Responsible AI considerations",
        "Mini project framing",
        "Portfolio-ready learning outputs"
      ],
      modules: [
        {
          id: "genai-m1",
          title: "Prompting and Foundation Models",
          position: 1,
          lessons: [
            { id: "genai-l1", title: "What Makes Generative AI Different", duration: "16 min", video: "assets/videos/genai.mp4" },
            { id: "genai-l2", title: "Prompt Patterns for Better Output", duration: "22 min" },
            { id: "genai-l3", title: "Evaluation and Guardrails", duration: "20 min" }
          ]
        },
        {
          id: "genai-m2",
          title: "Applications and Safety",
          position: 2,
          lessons: [
            { id: "genai-l4", title: "Building Task-specific Assistants", duration: "24 min" },
            { id: "genai-l5", title: "Retrieval and Context Design", duration: "25 min" },
            { id: "genai-l6", title: "Responsible Deployment Practices", duration: "19 min" }
          ]
        }
      ],
      assignments: [],
      quizzes: [],
      projects: [],
      notes: []
    },
    {
      id: "vlsi-design",
      title: "VLSI Design",
      subtitle: "Learn digital chip design, CMOS fundamentals, and physical implementation workflows",
      category: "Electronics and Chip Design",
      instructor: "Dr. R. S. Mahesh",
      instructorTitle: "VLSI Systems Faculty",
      difficulty: "Intermediate",
      durationWeeks: 10,
      language: "English",
      mode: "Online",
      rating: 4.6,
      learners: 1680,
      startDate: "June 03, 2026",
      image: "assets/VLSI.jpg",
      video: "assets/videos/vlsi.mp4",
      certificateImage: "assets/Machine Learning Certificate.jpg",
      description:
        "Build a practical foundation in CMOS logic, circuit-level design, timing analysis, layout planning, and VLSI design verification used in modern semiconductor workflows.",
      highlights: [
        "CMOS design principles and fabrication-aware thinking",
        "Combinational and sequential circuit design",
        "Timing analysis and power-performance tradeoffs",
        "Layout basics and verification checkpoints",
        "Industry-oriented chip design workflow exposure",
        "Structured assessments with certificate support"
      ],
      modules: [
        {
          id: "vlsi-m1",
          title: "VLSI Fundamentals",
          position: 1,
          lessons: [
            { id: "vlsi-l1", title: "Introduction to VLSI Systems", duration: "18 min", video: "assets/videos/vlsi.mp4" },
            { id: "vlsi-l2", title: "MOSFET and CMOS Basics", duration: "24 min" },
            { id: "vlsi-l3", title: "Design Metrics and Scaling", duration: "20 min" }
          ]
        },
        {
          id: "vlsi-m2",
          title: "Digital Circuit Design",
          position: 2,
          lessons: [
            { id: "vlsi-l4", title: "Combinational Logic Design", duration: "22 min" },
            { id: "vlsi-l5", title: "Sequential Circuits and Registers", duration: "25 min" },
            { id: "vlsi-l6", title: "Timing Constraints and Analysis", duration: "27 min" }
          ]
        },
        {
          id: "vlsi-m3",
          title: "Layout and Verification",
          position: 3,
          lessons: [
            { id: "vlsi-l7", title: "Physical Layout Basics", duration: "23 min" },
            { id: "vlsi-l8", title: "Design Rule Checks", duration: "19 min" },
            { id: "vlsi-l9", title: "Verification and Sign-off Overview", duration: "21 min" }
          ]
        }
      ],
      assignments: [],
      quizzes: [],
      projects: [],
      notes: []
    }
  ];

  function safeClone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function resolveMediaUrl(path) {
    var value = String(path || "");
    var apiHelper = window.LMS_API && typeof window.LMS_API.buildAssetUrl === "function"
      ? window.LMS_API.buildAssetUrl
      : null;

    if (!value) return "";
    if (apiHelper) {
      return apiHelper(value);
    }

    if (/^(https?:|data:|blob:)/i.test(value)) {
      return value;
    }

    value = value.replace(/\\/g, "/");

    if (/^\/?uploads\//i.test(value)) {
      return value.charAt(0) === "/" ? value : "/" + value;
    }

    if (/^(\.\.\/)+assets\//i.test(value) || /^assets\//i.test(value)) {
      return "/" + value.replace(/^(\.\.\/)+/, "").replace(/^\/+/, "");
    }

    return value;
  }

  function normalizeLessonMedia(lesson) {
    return Object.assign({}, lesson, {
      image: resolveMediaUrl(lesson.image || ""),
      video: resolveMediaUrl(lesson.video || ""),
      videoUrl: resolveMediaUrl(lesson.videoUrl || ""),
      videoSrc: resolveMediaUrl(lesson.videoSrc || ""),
      resourcePath: resolveMediaUrl(lesson.resourcePath || ""),
      referencePath: resolveMediaUrl(lesson.referencePath || "")
    });
  }

  function normalizeCourseMedia(course) {
    return Object.assign({}, course, {
      image: resolveMediaUrl(course.image || ""),
      bannerImage: resolveMediaUrl(course.bannerImage || ""),
      certificateImage: resolveMediaUrl(course.certificateImage || ""),
      video: resolveMediaUrl(course.video || ""),
      videoUrl: resolveMediaUrl(course.videoUrl || ""),
      videoSrc: resolveMediaUrl(course.videoSrc || ""),
      modules: (Array.isArray(course.modules) ? course.modules : []).map(function (module) {
        return Object.assign({}, module, {
          lessons: (Array.isArray(module.lessons) ? module.lessons : []).map(normalizeLessonMedia)
        });
      }),
      notes: (Array.isArray(course.notes) ? course.notes : []).map(function (note) {
        return Object.assign({}, note, {
          resourcePath: resolveMediaUrl(note.resourcePath || note.filePath || "")
        });
      })
    });
  }

  function createEmptyAdminContent() {
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

  function getAdminContent() {
    try {
      var parsed = JSON.parse(localStorage.getItem(ADMIN_CONTENT_KEY) || "null");
      return Object.assign(createEmptyAdminContent(), parsed || {});
    } catch (error) {
      return createEmptyAdminContent();
    }
  }

  function splitLines(value) {
    if (Array.isArray(value)) return value.slice();
    return String(value || "")
      .split(/\r?\n/)
      .map(function (item) {
        return item.trim();
      })
      .filter(Boolean);
  }

  function slugify(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function mergeById(existingItems, incomingItems) {
    var items = existingItems.slice();
    incomingItems.forEach(function (incoming) {
      var index = items.findIndex(function (item) {
        return item.id === incoming.id;
      });
      if (index >= 0) {
        items[index] = Object.assign({}, items[index], incoming);
      } else {
        items.push(incoming);
      }
    });
    return items;
  }

  function normalizeQuestion(question, assignmentId, index) {
    return {
      id: question.id || assignmentId + "-q" + (index + 1),
      question: question.question || question.prompt || "Provide your response.",
      type: question.type || "text",
      options: Array.isArray(question.options) ? question.options.slice() : []
    };
  }

  function createCourseDefaults(courseRecord) {
    return {
      id: courseRecord.id || slugify(courseRecord.title || "course-" + Date.now()),
      title: courseRecord.title || "Untitled Course",
      subtitle: courseRecord.subtitle || "Structured digital learning path",
      category: courseRecord.category || "General Studies",
      instructor: courseRecord.instructor || "Faculty Team",
      instructorTitle: courseRecord.instructorTitle || "Course Mentor",
      difficulty: courseRecord.difficulty || "Intermediate",
      durationWeeks: Number(courseRecord.durationWeeks) || 6,
      language: courseRecord.language || "English",
      mode: courseRecord.mode || "Online",
      rating: typeof courseRecord.rating === "number" ? courseRecord.rating : 4.7,
      learners: Number(courseRecord.learners) || 240,
      startDate: courseRecord.startDate || "June 01, 2026",
      image: courseRecord.image || "assets/DEVOPS.jpg",
      certificateImage: courseRecord.certificateImage || "assets/Machine Learning Certificate.jpg",
      description:
        courseRecord.description ||
        "A structured academic course experience with lessons, practice, and completion milestones.",
      highlights: Array.isArray(courseRecord.highlights) && courseRecord.highlights.length
        ? courseRecord.highlights.slice()
        : [
            "Structured lessons and guided progression",
            "Course-linked notes, assignments, and quizzes",
            "Project-based learning checkpoints",
            "Completion visibility and certificate readiness"
          ],
      modules: Array.isArray(courseRecord.modules) ? safeClone(courseRecord.modules) : [],
      assignments: Array.isArray(courseRecord.assignments) ? safeClone(courseRecord.assignments) : [],
      quizzes: Array.isArray(courseRecord.quizzes) ? safeClone(courseRecord.quizzes) : [],
      projects: Array.isArray(courseRecord.projects) ? safeClone(courseRecord.projects) : [],
      notes: Array.isArray(courseRecord.notes) ? safeClone(courseRecord.notes) : []
    };
  }

  function buildMergedCourses() {
    var adminContent = getAdminContent();
    var archivedCourseIds = adminContent.courses
      .filter(function (courseRecord) {
        return !!courseRecord.archived;
      })
      .map(function (courseRecord) {
        return courseRecord.id;
      });
    var archivedAssignmentIds = adminContent.assignments
      .filter(function (assignment) {
        return !!assignment.archived;
      })
      .map(function (assignment) {
        return assignment.id;
      });
    var archivedQuizIds = adminContent.quizzes
      .filter(function (quiz) {
        return !!quiz.archived;
      })
      .map(function (quiz) {
        return quiz.id;
      });
    var archivedProjectIds = adminContent.projects
      .filter(function (project) {
        return !!project.archived;
      })
      .map(function (project) {
        return project.id;
      });
    var archivedNoteIds = adminContent.notes
      .filter(function (note) {
        return !!note.archived;
      })
      .map(function (note) {
        return note.id;
      });
    var archivedLessonIds = adminContent.lessons
      .filter(function (lesson) {
        return !!lesson.archived;
      })
      .map(function (lesson) {
        return lesson.id;
      });
    var catalog = safeClone(courses);
    var catalogIndex = {};

    if (archivedCourseIds.length) {
      catalog = catalog.filter(function (course) {
        return archivedCourseIds.indexOf(course.id) === -1;
      });
    }

    catalog.forEach(function (course, index) {
      catalogIndex[course.id] = index;
    });

    adminContent.courses
      .filter(function (courseRecord) {
        return !courseRecord.archived;
      })
      .forEach(function (courseRecord) {
      var normalized = createCourseDefaults(courseRecord);
      if (typeof catalogIndex[normalized.id] === "number") {
        var existingCourse = catalog[catalogIndex[normalized.id]];
        catalog[catalogIndex[normalized.id]] = Object.assign({}, existingCourse, normalized, {
          modules: existingCourse.modules,
          assignments: existingCourse.assignments,
          quizzes: existingCourse.quizzes,
          projects: existingCourse.projects,
          notes: existingCourse.notes
        });
      } else {
        catalogIndex[normalized.id] = catalog.length;
        catalog.push(normalized);
      }
    });

    catalog.forEach(function (course) {
      course.modules = Array.isArray(course.modules) ? course.modules : [];
      course.assignments = (Array.isArray(course.assignments) ? course.assignments : []).filter(function (assignment) {
        return archivedAssignmentIds.indexOf(assignment.id) === -1;
      });
      course.quizzes = (Array.isArray(course.quizzes) ? course.quizzes : []).filter(function (quiz) {
        return archivedQuizIds.indexOf(quiz.id) === -1;
      });
      course.projects = (Array.isArray(course.projects) ? course.projects : []).filter(function (project) {
        return archivedProjectIds.indexOf(project.id) === -1;
      });
      course.notes = (Array.isArray(course.notes) ? course.notes : []).filter(function (note) {
        return archivedNoteIds.indexOf(note.id) === -1;
      });
      course.modules = course.modules.map(function (module) {
        return Object.assign({}, module, {
          lessons: (Array.isArray(module.lessons) ? module.lessons : []).filter(function (lesson) {
            return archivedLessonIds.indexOf(lesson.id) === -1;
          })
        });
      });

      var courseLessons = adminContent.lessons
        .filter(function (lesson) {
          return lesson.courseId === course.id && !lesson.archived;
        })
        .sort(function (a, b) {
          return (Number(a.position) || 0) - (Number(b.position) || 0);
        });

      if (courseLessons.length) {
        var moduleMap = {};
        course.modules.forEach(function (module) {
          moduleMap[module.id] = module;
          module.lessons = Array.isArray(module.lessons) ? module.lessons : [];
        });

        courseLessons.forEach(function (lesson, index) {
          var moduleId = lesson.moduleId || course.id + "-module-1";
          var moduleTitle = lesson.moduleTitle || lesson.topic || "Learning Module";
          if (!moduleMap[moduleId]) {
            moduleMap[moduleId] = {
              id: moduleId,
              title: moduleTitle,
              position: Object.keys(moduleMap).length + 1,
              lessons: []
            };
            course.modules.push(moduleMap[moduleId]);
          }

          var normalizedLesson = {
            id: lesson.id || course.id + "-lesson-" + (index + 1),
            title: lesson.title || "New Lesson",
            duration: lesson.duration || "20 min",
            subtitle: lesson.subtitle || "",
            description: lesson.description || lesson.content || "",
            content: lesson.content || lesson.description || "",
            image: lesson.image || course.image,
            imageName: lesson.imageName || "",
            videoUrl: lesson.videoUrl || lesson.video || "",
            video: lesson.videoUrl || lesson.video || "",
            videoName: lesson.videoName || "",
            resourcePath: lesson.resourcePath || lesson.referencePath || "",
            resourceName: lesson.resourceName || "",
            mediaType: lesson.mediaType || "Video"
          };

          moduleMap[moduleId].lessons = mergeById(moduleMap[moduleId].lessons, [normalizedLesson]);
        });

        course.modules = course.modules.map(function (module, index) {
          return Object.assign({}, module, {
            position: module.position || index + 1,
            lessons: module.lessons.slice()
          });
        });
      }

      var dynamicAssignments = adminContent.assignments
        .filter(function (assignment) {
          return assignment.courseId === course.id && !assignment.archived;
        })
        .map(function (assignment) {
          var deliverables = splitLines(assignment.deliverables || assignment.expectations);
          return Object.assign({}, assignment, {
            moduleId: assignment.moduleId || (course.modules[0] && course.modules[0].id) || course.id + "-module-1",
            statusLabel: assignment.statusLabel || "New assignment",
            deliverables: deliverables.length ? deliverables : ["Submit a structured written response."],
            feedbackPlaceholder: assignment.feedbackPlaceholder || "Faculty feedback will appear here after review.",
            questions: Array.isArray(assignment.questions) && assignment.questions.length
              ? assignment.questions.map(function (question, index) {
                  return normalizeQuestion(question, assignment.id || course.id + "-assignment", index);
                })
              : [
                  {
                    id: (assignment.id || course.id + "-assignment") + "-response",
                    question: "Provide your assignment response with clear explanation and supporting detail.",
                    type: "text"
                  }
                ]
          });
        });

      var dynamicQuizzes = adminContent.quizzes
        .filter(function (quiz) {
          return quiz.courseId === course.id && !quiz.archived;
        })
        .map(function (quiz) {
          var questions = Array.isArray(quiz.questions) ? quiz.questions : [];
          return Object.assign({}, quiz, {
            instructions:
              Array.isArray(quiz.instructions) && quiz.instructions.length
                ? quiz.instructions.slice()
                : [
                    "Answer all questions before submitting.",
                    "Use the result review to compare selected and correct answers."
                  ],
            totalMarks: Number(quiz.totalMarks) || questions.length * 5 || 20,
            durationMinutes: Number(quiz.durationMinutes) || 20,
            questions: questions.map(function (question, index) {
              return {
                id: question.id || (quiz.id || course.id + "-quiz") + "-q" + (index + 1),
                prompt: question.prompt || question.question || "Quiz question",
                options: Array.isArray(question.options) ? question.options.slice() : [],
                correctOption: typeof question.correctOption === "number" ? question.correctOption : 0,
                explanation: question.explanation || "Review the related lesson content for this concept."
              };
            })
          });
        });

      var dynamicProjects = adminContent.projects
        .filter(function (project) {
          return project.courseId === course.id && !project.archived;
        })
        .map(function (project) {
          return Object.assign({}, project, {
            subtitle: project.subtitle || "Course-linked project workspace",
            objectives: splitLines(project.objectives).length
              ? splitLines(project.objectives)
              : ["Define the project scope", "Work through deliverables", "Submit a complete academic response"],
            deliverables: splitLines(project.requirements || project.deliverables).length
              ? splitLines(project.requirements || project.deliverables)
              : ["Project summary", "Key deliverables", "Final submission note"],
            description: project.description || "This project supports the practical learning path of the course.",
            deadline: project.deadline || "2026-06-30",
            statusLabel: project.statusLabel || "Not Started"
          });
        });

      var dynamicNotes = adminContent.notes
        .filter(function (note) {
          return note.courseId === course.id && !note.archived;
        })
        .map(function (note) {
          return Object.assign({}, note, {
            moduleId: note.moduleId || (course.modules[0] && course.modules[0].id) || course.id + "-module-1",
            description: note.description || note.content || "Course-linked study material.",
            type: note.type || "Study Notes",
            content: note.content || note.description || "",
            resourceName: note.resourceName || "",
            resourceType: note.resourceType || ""
          });
        });

      course.assignments = mergeById(course.assignments, dynamicAssignments);
      course.quizzes = mergeById(course.quizzes, dynamicQuizzes);
      course.projects = mergeById(course.projects, dynamicProjects);
      course.notes = mergeById(course.notes, dynamicNotes);
    });

    return catalog;
  }

  function getAllLessonIds(course) {
    return course.modules.flatMap(function (module) {
      return module.lessons.map(function (lesson) {
        return lesson.id;
      });
    });
  }

  function getQuizDefinition(quizId) {
    var catalog = getCourses();
    for (var courseIndex = 0; courseIndex < catalog.length; courseIndex += 1) {
      var course = catalog[courseIndex];
      for (var quizIndex = 0; quizIndex < course.quizzes.length; quizIndex += 1) {
        if (course.quizzes[quizIndex].id === quizId) {
          return course.quizzes[quizIndex];
        }
      }
    }

    return null;
  }

  function getStudentStorageId(student) {
    if (!student) return "guest_demo_student";

    if (isDemoStudent(student)) {
      return "email:" + DEMO_USER_EMAIL;
    }

    if (student.email) {
      return "email:" + String(student.email).trim().toLowerCase();
    }

    if (student.id !== undefined && student.id !== null && student.id !== "") {
      return "id:" + String(student.id);
    }

    return "name:" + String(student.name || demoStudent.name).trim().toLowerCase();
  }

  function isDemoStudent(student) {
    return !!(student && student.email && String(student.email).trim().toLowerCase() === DEMO_USER_EMAIL);
  }

  function isObjectEmpty(value) {
    return !value || Object.keys(value).length === 0;
  }

  function isPristineNewStudentState(savedState) {
    if (!savedState || typeof savedState !== "object") return true;

    return (
      (!Array.isArray(savedState.enrolledCourseIds) || savedState.enrolledCourseIds.length === 0) &&
      isObjectEmpty(savedState.lessonProgress) &&
      isObjectEmpty(savedState.lastAccessedLesson) &&
      isObjectEmpty(savedState.assignmentSubmissions) &&
      isObjectEmpty(savedState.quizAttempts) &&
      isObjectEmpty(savedState.projectSubmissions)
    );
  }

  function shouldApplyDemoSeed(savedState, student) {
    if (!isDemoStudent(student)) return false;
    if (!savedState) return true;
    return savedState.meta && savedState.meta.seedVersion === DEMO_SEED_VERSION
      ? false
      : true;
  }

  function buildDemoSeedFromSavedState(student, savedState) {
    var savedProfile = savedState && savedState.profile ? savedState.profile : {};
    var savedMeta = savedState && savedState.meta ? savedState.meta : {};
    var savedStudent = Object.assign({}, student || {}, {
      name: savedProfile.name || (student && student.name) || demoStudent.name,
      email: savedProfile.email || (student && student.email) || demoStudent.email,
      phone: savedProfile.phone || (student && student.phone) || demoStudent.phone,
      id:
        savedMeta.id !== undefined && savedMeta.id !== null && savedMeta.id !== ""
          ? savedMeta.id
          : student && student.id,
      registerNo: savedMeta.registerNo || (student && student.registerNo),
      department: savedMeta.department || (student && student.department),
      institution: savedMeta.institution || (student && student.institution),
      semester: savedMeta.semester || (student && student.semester),
      joinedOn: savedMeta.joinedOn || (student && student.joinedOn),
      role: savedMeta.role || (student && student.role),
      image: savedState && savedState.profileImage ? savedState.profileImage : student && student.image
    });
    var seededState = createDemoSeedState(buildDefaultStudentMeta(savedStudent));

    seededState.profile = Object.assign({}, seededState.profile, savedProfile);
    seededState.meta = Object.assign({}, seededState.meta, savedMeta, {
      seedVersion: DEMO_SEED_VERSION
    });
    seededState.profileImage = (savedState && savedState.profileImage) || seededState.profileImage;

    return seededState;
  }

  function buildDefaultStudentMeta(student) {
    var sessionStudent = student || {};
    var storageId = getStudentStorageId(sessionStudent);
    var seedFromDemo = isDemoStudent(sessionStudent);
    var generatedRegisterNo = "VV" + storageId.replace(/[^a-z0-9]/gi, "").toUpperCase().slice(-8).padStart(8, "0");

    return {
      id:
        sessionStudent.id !== undefined && sessionStudent.id !== null && sessionStudent.id !== ""
          ? sessionStudent.id
          : seedFromDemo
            ? demoStudent.id
            : storageId,
      name: sessionStudent.name || (seedFromDemo ? demoStudent.name : "New Student"),
      role: sessionStudent.role || "student",
      email: sessionStudent.email || (seedFromDemo ? demoStudent.email : ""),
      phone: sessionStudent.phone || (seedFromDemo ? demoStudent.phone : ""),
      registerNo: sessionStudent.registerNo || (seedFromDemo ? demoStudent.registerNo : generatedRegisterNo),
      department: sessionStudent.department || "Student",
      institution: sessionStudent.institution || "Vidhya Vaaradhi LMS",
      semester: sessionStudent.semester || "Semester 1",
      joinedOn: sessionStudent.joinedOn || new Date().toISOString().split("T")[0],
      image: sessionStudent.image || demoStudent.image,
      seedDemoData: seedFromDemo
    };
  }

  function createEmptyState(studentMeta) {
    return {
      profile: {
        name: studentMeta.name,
        email: studentMeta.email,
        phone: studentMeta.phone
      },
      meta: {
        id: studentMeta.id,
        registerNo: studentMeta.registerNo,
        department: studentMeta.department,
        institution: studentMeta.institution,
        semester: studentMeta.semester,
        joinedOn: studentMeta.joinedOn,
        role: studentMeta.role || "student",
        seedVersion: 0
      },
      enrolledCourseIds: [],
      lessonProgress: {},
      lastAccessedLesson: {},
      assignmentSubmissions: {},
      quizAttempts: {},
      projectSubmissions: {},
      profileImage: studentMeta.image
    };
  }

  function createDemoSeedState(studentMeta) {
    return {
      profile: {
        name: studentMeta.name,
        email: studentMeta.email,
        phone: studentMeta.phone
      },
      meta: {
        id: studentMeta.id,
        registerNo: studentMeta.registerNo,
        department: studentMeta.department,
        institution: studentMeta.institution,
        semester: studentMeta.semester,
        joinedOn: studentMeta.joinedOn,
        role: studentMeta.role || "student",
        seedVersion: DEMO_SEED_VERSION
      },
      enrolledCourseIds: ["devops", "quantum-computing"],
      lessonProgress: {
        devops: [
          "devops-l1",
          "devops-l2",
          "devops-l3",
          "devops-l4",
          "devops-l5",
          "devops-l6",
          "devops-l7",
          "devops-l8"
        ],
        "quantum-computing": getAllLessonIds(courses[1])
      },
      lastAccessedLesson: {
        devops: "devops-l8",
        "quantum-computing": "quantum-l10"
      },
      assignmentSubmissions: {
        "devops-a1": {
          submitted: false,
          responseText: "",
          answers: {},
          attachmentName: "",
          submittedAt: null,
          feedback: null,
          marks: null
        },
        "quantum-a1": {
          submitted: true,
          responseText: "Entanglement links measurement outcomes across qubits, so the full system state must be described jointly rather than independently.",
          answers: {
            "quantum-a1-q1": "Entanglement links measurement outcomes across qubits, so the full system state must be described jointly rather than independently."
          },
          attachmentName: "quantum-reflection.pdf",
          submittedAt: "2026-03-01 14:20",
          feedback: "Strong conceptual summary with clear explanation of correlated outcomes.",
          marks: "18/20"
        }
      },
      quizAttempts: {
        "devops-q1": {
          completed: false,
          score: null,
          selectedAnswers: {},
          submittedAt: null,
          correctCount: 0
        },
        "quantum-q1": {
          completed: true,
          score: 15,
          selectedAnswers: {
            "quantum-q1-1": 2,
            "quantum-q1-2": 1,
            "quantum-q1-3": 1,
            "quantum-q1-4": 2
          },
          submittedAt: "2026-03-17 11:05",
          correctCount: 3
        }
      },
      projectSubmissions: {
        "devops-p1": {
          status: "in-progress",
          responseText: "Drafted the release workflow and deployment checklist. Need to finalize monitoring and rollback sections.",
          attachmentName: "devops-release-blueprint-draft.docx",
          submittedAt: null
        },
        "quantum-p1": {
          status: "completed",
          responseText: "Completed the application brief connecting Grover's algorithm to search acceleration in optimization-heavy systems.",
          attachmentName: "quantum-algorithm-brief.pdf",
          submittedAt: "2026-02-28 16:40"
        }
      },
      profileImage: studentMeta.image
    };
  }

  function createInitialState(student) {
    var studentMeta = buildDefaultStudentMeta(student);
    return studentMeta.seedDemoData ? createDemoSeedState(studentMeta) : createEmptyState(studentMeta);
  }

  function loadStateCollection() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      return saved && typeof saved === "object" ? saved : {};
    } catch (error) {
      return {};
    }
  }

  function saveStateCollection(stateCollection) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateCollection));
  }

  function getActiveStudent() {
    if (!localStorage.getItem("token")) {
      return null;
    }

    var storedSession = null;
    try {
      storedSession = JSON.parse(localStorage.getItem(PRIMARY_SESSION_KEY) || "null");
      if (storedSession && (storedSession.email || storedSession.id || storedSession.name)) {
        return storedSession;
      }
    } catch (error) {
      // Ignore malformed session state and fall back to the legacy session key.
    }

    try {
      storedSession = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
      if (storedSession && (storedSession.email || storedSession.id || storedSession.name)) {
        return storedSession;
      }
    } catch (error) {
      // Ignore malformed session state and fall back to an anonymous student shell.
    }

    return null;
  }

  function migrateLegacyDemoState(stateCollection) {
    if (stateCollection.__legacyMigrated) {
      return stateCollection;
    }

    var demoKey = getStudentStorageId(demoStudent);
    var legacyDemoKeys = [DEMO_USER_EMAIL].concat(LEGACY_DEMO_USER_EMAILS).map(function (email) {
      return "email:" + email;
    });

    try {
      var legacyState = JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY) || "null");
      if (legacyState && !stateCollection[demoKey]) {
        stateCollection[demoKey] = Object.assign({}, createInitialState(demoStudent), legacyState);
      }
    } catch (error) {
      // Ignore malformed legacy state.
    }

    legacyDemoKeys.forEach(function (legacyKey) {
      if (legacyKey !== demoKey && stateCollection[legacyKey] && !stateCollection[demoKey]) {
        stateCollection[demoKey] = stateCollection[legacyKey];
      }
      if (legacyKey !== demoKey) {
        delete stateCollection[legacyKey];
      }
    });

    stateCollection.__legacyMigrated = true;
    saveStateCollection(stateCollection);
    return stateCollection;
  }

  function loadStateForStudent(student) {
    var studentRecord = student || getActiveStudent();
    var stateCollection = migrateLegacyDemoState(loadStateCollection());
    var studentKey = getStudentStorageId(studentRecord);
    var initialState = createInitialState(studentRecord);
    var savedState = stateCollection[studentKey];

    if (shouldApplyDemoSeed(savedState, studentRecord)) {
      var demoSeededState = buildDemoSeedFromSavedState(studentRecord, savedState);
      stateCollection[studentKey] = demoSeededState;
      saveStateCollection(stateCollection);
      return demoSeededState;
    }

    if (!savedState) {
      stateCollection[studentKey] = initialState;
      saveStateCollection(stateCollection);
      return initialState;
    }

    return Object.assign({}, initialState, savedState, {
      profile: Object.assign({}, initialState.profile, savedState.profile || {}),
      meta: Object.assign({}, initialState.meta, savedState.meta || {})
    });
  }

  let activeStudent = getActiveStudent();
  let state = loadStateForStudent(activeStudent);

  function saveState() {
    var studentKey = getStudentStorageId(activeStudent);
    var stateCollection = migrateLegacyDemoState(loadStateCollection());
    stateCollection[studentKey] = state;
    saveStateCollection(stateCollection);
  }

  function ensureSessionStudent() {
    var sessionStudent = getActiveStudent();
    if (!sessionStudent || sessionStudent.role === "admin") {
      return null;
    }
    var storageId = getStudentStorageId(sessionStudent);
    var defaultMeta = buildDefaultStudentMeta(sessionStudent);
    activeStudent = Object.assign({}, defaultMeta, sessionStudent, {
      id:
        sessionStudent.id !== undefined && sessionStudent.id !== null && sessionStudent.id !== ""
          ? sessionStudent.id
          : defaultMeta.id
    });

    var nextState = loadStateForStudent(activeStudent);
    var currentStorageId = state && state.meta ? getStudentStorageId({
      id: state.meta.id,
      email: state.profile && state.profile.email,
      name: state.profile && state.profile.name
    }) : null;

    if (currentStorageId !== storageId) {
      state = nextState;
    }

    var persistedSession = Object.assign({}, activeStudent, {
      name: nextState.profile.name || activeStudent.name,
      email: nextState.profile.email || activeStudent.email,
      phone: nextState.profile.phone || activeStudent.phone,
      image: nextState.profileImage || activeStudent.image,
      registerNo: nextState.meta.registerNo || activeStudent.registerNo,
      department: nextState.meta.department || activeStudent.department,
      institution: nextState.meta.institution || activeStudent.institution,
      semester: nextState.meta.semester || activeStudent.semester,
      joinedOn: nextState.meta.joinedOn || activeStudent.joinedOn,
      role: nextState.meta.role || activeStudent.role || "student"
    });

    activeStudent = persistedSession;
    localStorage.setItem(PRIMARY_SESSION_KEY, JSON.stringify(persistedSession));
    localStorage.setItem(SESSION_KEY, JSON.stringify(persistedSession));
    return persistedSession;
  }

  function getSessionStudent() {
    return ensureSessionStudent();
  }

  function getStudentProfile() {
    var sessionStudent = ensureSessionStudent();
    if (!sessionStudent) return null;
    return {
      id: sessionStudent.id,
      name: state.profile.name || sessionStudent.name || demoStudent.name,
      email: state.profile.email || sessionStudent.email || "",
      phone: state.profile.phone || sessionStudent.phone || "",
      registerNo: state.meta.registerNo || sessionStudent.registerNo,
      department: state.meta.department || sessionStudent.department,
      semester: state.meta.semester || sessionStudent.semester,
      institution: state.meta.institution || sessionStudent.institution,
      joinedOn: state.meta.joinedOn || sessionStudent.joinedOn,
      image: resolveMediaUrl(state.profileImage || sessionStudent.image || demoStudent.image)
    };
  }

  function getCourses() {
    return buildMergedCourses().map(normalizeCourseMedia);
  }

  function getCourseById(courseId) {
    return getCourses().find(function (course) {
      return course.id === courseId;
    });
  }

  function getLessonById(courseId, lessonId) {
    var course = getCourseById(courseId);
    if (!course) return null;

    for (var moduleIndex = 0; moduleIndex < course.modules.length; moduleIndex += 1) {
      var module = course.modules[moduleIndex];
      for (var lessonIndex = 0; lessonIndex < module.lessons.length; lessonIndex += 1) {
        if (module.lessons[lessonIndex].id === lessonId) {
          return Object.assign({ moduleId: module.id, moduleTitle: module.title }, module.lessons[lessonIndex]);
        }
      }
    }

    return null;
  }

  function getCompletedLessonIds(courseId) {
    return (state.lessonProgress[courseId] || []).slice();
  }

  function isCourseEnrolled(courseId) {
    return state.enrolledCourseIds.indexOf(courseId) >= 0;
  }

  function getNextLesson(courseId) {
    var course = getCourseById(courseId);
    if (!course) return null;
    if (!course.modules.length || !getAllLessonIds(course).length) return null;

    var completed = getCompletedLessonIds(courseId);
    for (var moduleIndex = 0; moduleIndex < course.modules.length; moduleIndex += 1) {
      var module = course.modules[moduleIndex];
      for (var lessonIndex = 0; lessonIndex < module.lessons.length; lessonIndex += 1) {
        var lesson = module.lessons[lessonIndex];
        if (completed.indexOf(lesson.id) === -1) {
          return Object.assign({ moduleTitle: module.title }, lesson);
        }
      }
    }

    var lastModule = course.modules[course.modules.length - 1];
    if (!lastModule || !lastModule.lessons.length) return null;
    var lastLesson = lastModule.lessons.slice(-1)[0];
    return Object.assign(
      { moduleTitle: lastModule.title },
      lastLesson
    );
  }

  function getCourseView(courseId) {
    var course = getCourseById(courseId);
    if (!course) return null;

    var totalLessons = getAllLessonIds(course).length;
    var completedLessons = getCompletedLessonIds(courseId).length;
    var progress = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0;
    var status = progress >= 100 ? "completed" : completedLessons > 0 ? "in-progress" : "not-started";
    var nextLesson = getNextLesson(courseId) || {
      id: null,
      title: totalLessons ? "Continue course" : "Course content will be available soon",
      moduleTitle: course.modules[0] ? course.modules[0].title : "Course Overview"
    };
    var lastAccessedLessonId = state.lastAccessedLesson[courseId] || (nextLesson && nextLesson.id) || null;
    var lastAccessedLesson = lastAccessedLessonId ? getLessonById(courseId, lastAccessedLessonId) : null;
    var submittedAssignments = course.assignments.filter(function (assignment) {
      return state.assignmentSubmissions[assignment.id] && state.assignmentSubmissions[assignment.id].submitted;
    }).length;
    var completedQuizzes = course.quizzes.filter(function (quiz) {
      return state.quizAttempts[quiz.id] && state.quizAttempts[quiz.id].completed;
    }).length;
    var completedProjects = course.projects.filter(function (project) {
      var submission = state.projectSubmissions[project.id];
      return submission && (submission.status === "submitted" || submission.status === "completed");
    }).length;

    return Object.assign({}, course, {
      progress: progress,
      status: status,
      totalLessons: totalLessons,
      completedLessons: completedLessons,
      pendingLessons: Math.max(totalLessons - completedLessons, 0),
      nextLesson: nextLesson,
      lastAccessedLesson: lastAccessedLesson,
      submittedAssignments: submittedAssignments,
      completedQuizzes: completedQuizzes,
      completedProjects: completedProjects,
      isEnrolled: isCourseEnrolled(courseId)
    });
  }

  function loadAdminCertificateState() {
    try {
      var parsed = JSON.parse(localStorage.getItem("admin_lms_state_v1") || "null");
      return parsed && Array.isArray(parsed.certificates) ? parsed.certificates : [];
    } catch (error) {
      return [];
    }
  }

  function getEnrolledCourses() {
    return state.enrolledCourseIds
      .map(getCourseView)
      .filter(Boolean);
  }

  function getDashboardSummary() {
    var enrolled = getEnrolledCourses();
    var completedCourses = enrolled.filter(function (course) {
      return course.status === "completed";
    });
    var inProgressCourses = enrolled.filter(function (course) {
      return course.status === "in-progress";
    });
    var pendingAssignments = getAssignments().filter(function (assignment) {
      return !assignment.submitted;
    });
    var readyQuizzes = getQuizzes().filter(function (quiz) {
      return quiz.status !== "completed";
    });
    var activeProjects = getProjects().filter(function (project) {
      return project.status !== "completed";
    });

    return {
      enrolledCount: enrolled.length,
      completedCount: completedCourses.length,
      runningCount: inProgressCourses.length,
      averageProgress:
        enrolled.length > 0
          ? Math.round(
              enrolled.reduce(function (total, course) {
                return total + course.progress;
              }, 0) / enrolled.length
            )
          : 0,
      continueCourse: inProgressCourses[0] || enrolled[0] || null,
      completedCourse: completedCourses[0] || null,
      pendingAssignmentsCount: pendingAssignments.length,
      readyQuizzesCount: readyQuizzes.length,
      activeProjectsCount: activeProjects.length
    };
  }

  function getAssignments(courseId) {
    return getEnrolledCourses()
      .filter(function (course) {
        return !courseId || course.id === courseId;
      })
      .flatMap(function (course) {
        return course.assignments.map(function (assignment) {
          var submission = state.assignmentSubmissions[assignment.id] || {
            submitted: false,
            responseText: "",
            answers: {},
            attachmentName: "",
            submittedAt: null,
            feedback: null,
            marks: null
          };
          var module = course.modules.find(function (item) {
            return item.id === assignment.moduleId;
          });
          return Object.assign({}, assignment, submission, {
            courseTitle: course.title,
            moduleTitle: module ? module.title : "Course Assignment",
            deliverables: Array.isArray(assignment.deliverables) ? assignment.deliverables.slice() : splitLines(assignment.deliverables),
            questions: Array.isArray(assignment.questions)
              ? assignment.questions.map(function (question, index) {
                  return normalizeQuestion(question, assignment.id, index);
                })
              : [],
            submitted: !!submission.submitted,
            status: submission.submitted ? "submitted" : "pending"
          });
        });
      });
  }

  function getAssignmentById(assignmentId) {
    return getAssignments().find(function (assignment) {
      return assignment.id === assignmentId;
    }) || null;
  }

  function getQuizzes(courseId) {
    return getEnrolledCourses()
      .filter(function (course) {
        return !courseId || course.id === courseId;
      })
      .flatMap(function (course) {
        return course.quizzes.map(function (quiz) {
          var attempt = state.quizAttempts[quiz.id] || {
            completed: false,
            score: null,
            selectedAnswers: {},
            submittedAt: null,
            correctCount: 0
          };
          return Object.assign({}, quiz, {
            courseTitle: course.title,
            completed: attempt.completed,
            score: attempt.score,
            correctCount: attempt.correctCount || 0,
            selectedAnswers: Object.assign({}, attempt.selectedAnswers || {}),
            submittedAt: attempt.submittedAt,
            totalQuestions: quiz.questions.length,
            totalMarks: quiz.totalMarks || quiz.questions.length * 5,
            status: attempt.completed ? "completed" : course.status === "completed" ? "review" : "ready"
          });
        });
      });
  }

  function getQuizById(quizId) {
    return getQuizzes().find(function (quiz) {
      return quiz.id === quizId;
    }) || null;
  }

  function evaluateQuiz(quizDefinition, selectedAnswers) {
    var totalQuestions = quizDefinition.questions.length;
    var marksPerQuestion = Math.round((quizDefinition.totalMarks || totalQuestions * 5) / totalQuestions);
    var correctCount = 0;
    var review = quizDefinition.questions.map(function (question, index) {
      var selectedOption = typeof selectedAnswers[question.id] === "number" ? selectedAnswers[question.id] : null;
      var isCorrect = selectedOption === question.correctOption;
      if (isCorrect) {
        correctCount += 1;
      }
      return {
        id: question.id,
        index: index + 1,
        prompt: question.prompt,
        options: question.options.slice(),
        selectedOption: selectedOption,
        correctOption: question.correctOption,
        isCorrect: isCorrect,
        explanation: question.explanation
      };
    });

    return {
      score: correctCount * marksPerQuestion,
      correctCount: correctCount,
      totalQuestions: totalQuestions,
      review: review
    };
  }

  function getQuizReview(quizId) {
    var quizDefinition = getQuizDefinition(quizId);
    var quiz = getQuizById(quizId);
    if (!quizDefinition || !quiz || !quiz.completed) return null;

    var evaluation = evaluateQuiz(quizDefinition, quiz.selectedAnswers || {});
    return Object.assign({}, evaluation, {
      quizId: quizId,
      title: quiz.title,
      courseId: quiz.courseId,
      courseTitle: quiz.courseTitle,
      totalMarks: quiz.totalMarks,
      submittedAt: quiz.submittedAt
    });
  }

  function getProjects(courseId) {
    return getEnrolledCourses()
      .filter(function (course) {
        return !courseId || course.id === courseId;
      })
      .flatMap(function (course) {
        return course.projects.map(function (project) {
          var submission = state.projectSubmissions[project.id] || {
            status: "not-started",
            responseText: "",
            attachmentName: "",
            submittedAt: null
          };
          return Object.assign({}, project, submission, {
            courseTitle: course.title,
            objectives: Array.isArray(project.objectives) ? project.objectives.slice() : splitLines(project.objectives),
            deliverables: Array.isArray(project.deliverables) ? project.deliverables.slice() : splitLines(project.deliverables),
            status: submission.status || "not-started"
          });
        });
      });
  }

  function getProjectById(projectId) {
    return getProjects().find(function (project) {
      return project.id === projectId;
    }) || null;
  }

  function getNotes(courseId) {
    return getEnrolledCourses()
      .filter(function (course) {
        return !courseId || course.id === courseId;
      })
      .flatMap(function (course) {
        return course.notes.map(function (note) {
          var module = course.modules.find(function (item) {
            return item.id === note.moduleId;
          });
          return Object.assign({}, note, {
            courseId: course.id,
            courseTitle: course.title,
            description: note.description || note.content || "Course-linked study material.",
            moduleTitle: module ? module.title : "Course Notes",
            resourceName: note.resourceName || "",
            resourceType: note.resourceType || ""
          });
        });
      });
  }

  function getNotesByCourse(courseId) {
    return getNotes(courseId);
  }

  function getCertificates() {
    var student = getStudentProfile();
    var adminCertificates = loadAdminCertificateState();
    return getEnrolledCourses()
      .filter(function (course) {
        return course.status === "completed";
      })
      .map(function (course, index) {
        var matchingAdminRecord = adminCertificates.find(function (certificate) {
          if (!certificate || certificate.visible === false) return false;
          var sameStudent = certificate.studentId === student.id ||
            String(certificate.studentEmail || "").trim().toLowerCase() === String(student.email || "").trim().toLowerCase() ||
            String(certificate.studentName || "").trim().toLowerCase() === String(student.name || "").trim().toLowerCase();
          var sameCourse = certificate.courseId === course.id || certificate.courseTitle === course.title;
          return sameStudent && sameCourse;
        });

        return Object.assign({
          id: "VV-" + (2026 + index) + "-" + (course.title === "Quantum Computing" ? "QC9182" : "DV1024"),
          courseId: course.id,
          courseTitle: course.title,
          studentName: student.name,
          studentEmail: student.email,
          issueDate: "2026-03-18",
          status: "Verified",
          image: course.certificateImage
        }, matchingAdminRecord ? {
          id: matchingAdminRecord.id || undefined,
          issueDate: matchingAdminRecord.issueDate || "2026-03-18",
          status: matchingAdminRecord.status || "Verified",
          image: matchingAdminRecord.templateImage || matchingAdminRecord.image || course.certificateImage
        } : {});
      });
  }

  function getCertificateReadiness() {
    return getEnrolledCourses().map(function (course) {
      return {
        courseId: course.id,
        courseTitle: course.title,
        progress: course.progress,
        status: course.status === "completed" ? "earned" : "in-progress",
        remainingLessons: Math.max(course.totalLessons - course.completedLessons, 0),
        issueDate: course.status === "completed" ? "2026-03-18" : null
      };
    });
  }

  function getNotifications() {
    var summary = getDashboardSummary();
    var notifications = [];

    if (summary.continueCourse && summary.continueCourse.nextLesson) {
      notifications.push({
        id: "n1",
        type: "info",
        message:
          summary.continueCourse.title +
          ": continue with " +
          summary.continueCourse.nextLesson.title +
          " in " +
          summary.continueCourse.nextLesson.moduleTitle +
          ".",
        time: "Today"
      });
    }

    getAssignments()
      .filter(function (assignment) {
        return !assignment.submitted;
      })
      .forEach(function (assignment, index) {
        notifications.push({
          id: "assignment-" + index,
          type: "urgent",
          message: assignment.title + " for " + assignment.courseTitle + " is " + assignment.statusLabel + ".",
          time: "3 hours ago"
        });
      });

    getProjects()
      .filter(function (project) {
        return project.status === "in-progress";
      })
      .forEach(function (project, index) {
        notifications.push({
          id: "project-" + index,
          type: "info",
          message: project.title + " for " + project.courseTitle + " is currently in progress.",
          time: "Yesterday"
        });
      });

    getCertificates().forEach(function (certificate) {
      notifications.push({
        id: "cert-" + certificate.id,
        type: "success",
        message: certificate.courseTitle + " certificate is ready to view and download.",
        time: "1 day ago"
      });
    });

    getQuizzes()
      .filter(function (quiz) {
        return quiz.status === "ready";
      })
      .forEach(function (quiz, index) {
        notifications.push({
          id: "quiz-" + index,
          type: "exam",
          message: quiz.title + " is available from your quiz dashboard.",
          time: "2 days ago"
        });
      });

    return notifications;
  }

  function getRecentActivity() {
    var enrolled = getEnrolledCourses();
    var activity = [];

    enrolled.forEach(function (course) {
      if (course.lastAccessedLesson) {
        activity.push({
          id: course.id + "-activity",
          title: course.title,
          description: "Last viewed " + course.lastAccessedLesson.title,
          meta:
            course.completedLessons +
            "/" +
            course.totalLessons +
            " lessons completed"
        });
      }
    });

    getAssignments()
      .filter(function (assignment) {
        return assignment.submitted;
      })
      .forEach(function (assignment) {
        activity.push({
          id: assignment.id,
          title: "Assignment submitted",
          description: assignment.title + " for " + assignment.courseTitle,
          meta: assignment.submittedAt || "Recently submitted"
        });
      });

    getCertificates().forEach(function (certificate) {
      activity.push({
        id: certificate.id,
        title: "Certificate earned",
        description: certificate.courseTitle + " certificate issued",
        meta: "Issued on " + certificate.issueDate
      });
    });

    return activity.slice(0, 4);
  }

  function updateProfile(profile) {
    state.profile = Object.assign({}, state.profile, profile);
    saveState();

    var session = ensureSessionStudent();
    session.name = state.profile.name || session.name;
    session.email = state.profile.email || session.email;
    session.phone = state.profile.phone || session.phone;
    localStorage.setItem(PRIMARY_SESSION_KEY, JSON.stringify(session));
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));

    return getStudentProfile();
  }

  function setProfileImage(imageSrc) {
    state.profileImage = imageSrc;
    saveState();
    ensureSessionStudent();
  }

  function clearSession() {
    activeStudent = null;
    localStorage.removeItem("admin_session");
    localStorage.removeItem(PRIMARY_SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem("token");
  }

  function bindLogoutLinks() {
    document.querySelectorAll('a[href="index.html"]').forEach(function (link) {
      if (String(link.textContent || "").trim().toLowerCase() !== "logout") return;
      link.addEventListener("click", function () {
        clearSession();
      });
    });
  }

  function enrollInCourse(courseId) {
    if (!courseId || isCourseEnrolled(courseId) || !getCourseById(courseId)) {
      return getCourseView(courseId);
    }

    state.enrolledCourseIds = state.enrolledCourseIds.concat(courseId);
    if (!state.lessonProgress[courseId]) {
      state.lessonProgress[courseId] = [];
    }
    if (!state.lastAccessedLesson[courseId]) {
      var nextLesson = getNextLesson(courseId);
      state.lastAccessedLesson[courseId] = nextLesson ? nextLesson.id : null;
    }

    saveState();
    return getCourseView(courseId);
  }

  function setLastAccessed(courseId, lessonId) {
    state.lastAccessedLesson[courseId] = lessonId;
    saveState();
  }

  function markLessonComplete(courseId, lessonId) {
    if (!state.lessonProgress[courseId]) {
      state.lessonProgress[courseId] = [];
    }

    if (state.lessonProgress[courseId].indexOf(lessonId) === -1) {
      state.lessonProgress[courseId].push(lessonId);
    }

    state.lastAccessedLesson[courseId] = lessonId;
    saveState();
    return getCourseView(courseId);
  }

  function markCourseComplete(courseId, lastLessonId) {
    var course = getCourseById(courseId);
    if (!course) return null;

    state.lessonProgress[courseId] = getAllLessonIds(course);

    if (lastLessonId) {
      state.lastAccessedLesson[courseId] = lastLessonId;
    } else if (state.lessonProgress[courseId].length) {
      state.lastAccessedLesson[courseId] = state.lessonProgress[courseId][state.lessonProgress[courseId].length - 1];
    } else {
      state.lastAccessedLesson[courseId] = null;
    }

    saveState();
    return getCourseView(courseId);
  }

  function submitAssignment(assignmentId, payload) {
    var existing = state.assignmentSubmissions[assignmentId] || {};
    state.assignmentSubmissions[assignmentId] = Object.assign({}, existing, {
      submitted: true,
      responseText: payload && payload.responseText ? payload.responseText : existing.responseText || "",
      answers: payload && payload.answers ? payload.answers : existing.answers || {},
      attachmentName: payload && payload.attachmentName ? payload.attachmentName : existing.attachmentName || "",
      submittedAt: payload && payload.submittedAt ? payload.submittedAt : new Date().toLocaleString(),
      feedback: existing.feedback || null,
      marks: existing.marks || null
    });
    saveState();
    return getAssignmentById(assignmentId);
  }

  function saveProjectDraft(projectId, payload) {
    var existing = state.projectSubmissions[projectId] || {};
    state.projectSubmissions[projectId] = Object.assign({}, existing, {
      status: payload && payload.status ? payload.status : existing.status || "in-progress",
      responseText: payload && payload.responseText ? payload.responseText : existing.responseText || "",
      attachmentName: payload && payload.attachmentName ? payload.attachmentName : existing.attachmentName || "",
      submittedAt: existing.submittedAt || null
    });
    saveState();
    return getProjectById(projectId);
  }

  function submitProject(projectId, payload) {
    var existing = state.projectSubmissions[projectId] || {};
    state.projectSubmissions[projectId] = Object.assign({}, existing, {
      status: payload && payload.status ? payload.status : "submitted",
      responseText: payload && payload.responseText ? payload.responseText : existing.responseText || "",
      attachmentName: payload && payload.attachmentName ? payload.attachmentName : existing.attachmentName || "",
      submittedAt: payload && payload.submittedAt ? payload.submittedAt : new Date().toLocaleString()
    });
    saveState();
    return getProjectById(projectId);
  }

  function completeQuiz(quizId, score) {
    var existing = state.quizAttempts[quizId] || {};
    state.quizAttempts[quizId] = Object.assign({}, existing, {
      completed: true,
      score: score
    });
    saveState();
  }

  function submitQuiz(quizId, selectedAnswers) {
    var quizDefinition = getQuizDefinition(quizId);
    if (!quizDefinition) return null;

    var evaluation = evaluateQuiz(quizDefinition, selectedAnswers || {});
    state.quizAttempts[quizId] = {
      completed: true,
      score: evaluation.score,
      selectedAnswers: Object.assign({}, selectedAnswers || {}),
      submittedAt: new Date().toLocaleString(),
      correctCount: evaluation.correctCount
    };
    saveState();

    return Object.assign({}, evaluation, {
      quizId: quizId,
      totalMarks: quizDefinition.totalMarks || evaluation.totalQuestions * 5,
      submittedAt: state.quizAttempts[quizId].submittedAt,
      title: quizDefinition.title,
      courseId: quizDefinition.courseId
    });
  }

  window.LMSDemo = {
    getSessionStudent: getSessionStudent,
    getStudentProfile: getStudentProfile,
    getCourses: getCourses,
    getCourseById: getCourseById,
    getCourseView: getCourseView,
    getEnrolledCourses: getEnrolledCourses,
    getDashboardSummary: getDashboardSummary,
    getAssignments: getAssignments,
    getAssignmentById: getAssignmentById,
    getQuizzes: getQuizzes,
    getQuizById: getQuizById,
    getQuizReview: getQuizReview,
    getProjects: getProjects,
    getProjectById: getProjectById,
    getNotes: getNotes,
    getNotesByCourse: getNotesByCourse,
    getCertificates: getCertificates,
    getCertificateReadiness: getCertificateReadiness,
    getNotifications: getNotifications,
    getRecentActivity: getRecentActivity,
    getLessonById: getLessonById,
    getCompletedLessonIds: getCompletedLessonIds,
    enrollInCourse: enrollInCourse,
    markLessonComplete: markLessonComplete,
    markCourseComplete: markCourseComplete,
    setLastAccessed: setLastAccessed,
    submitAssignment: submitAssignment,
    saveProjectDraft: saveProjectDraft,
    submitProject: submitProject,
    completeQuiz: completeQuiz,
    submitQuiz: submitQuiz,
    updateProfile: updateProfile,
    setProfileImage: setProfileImage,
    clearSession: clearSession
  };

  window.LMSMedia = {
    resolveMediaUrl: resolveMediaUrl
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindLogoutLinks);
  } else {
    bindLogoutLinks();
  }
})();
