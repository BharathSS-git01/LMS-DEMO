# Frontend Code Documentation

This document contains the frontend/admin folder structure and the full contents of the frontend-related code files in this project.

## Folder Structure

```text
smart lms
+-- admin
|   +-- css
|   |   +-- admin.css
|   |   +-- admin-login.css
|   |   +-- admins.css
|   |   +-- announcements.css
|   |   +-- assignments.css
|   |   +-- certificates.css
|   |   +-- courses.css
|   |   +-- dashboard.css
|   |   +-- lessons.css
|   |   +-- notes.css
|   |   +-- projects.css
|   |   +-- quizzes.css
|   |   +-- reports.css
|   |   \-- students.css
|   +-- js
|   |   +-- admin.js
|   |   +-- admin-data.js
|   |   +-- admin-login.js
|   |   +-- admins.js
|   |   +-- announcements.js
|   |   +-- assignments.js
|   |   +-- certificates.js
|   |   +-- courses.js
|   |   +-- dashboard.js
|   |   +-- lessons.js
|   |   +-- notes.js
|   |   +-- projects.js
|   |   +-- quizzes.js
|   |   +-- reports.js
|   |   \-- students.js
|   +-- admin-login.html
|   +-- admins.html
|   +-- announcements.html
|   +-- assignments.html
|   +-- certificates.html
|   +-- courses.html
|   +-- dashboard.html
|   +-- lessons.html
|   +-- notes.html
|   +-- projects.html
|   +-- quizzes.html
|   +-- reports.html
|   \-- students.html
+-- assets
|   +-- videos
|   |   +-- devops-intro.mp4
|   |   +-- genai.mp4
|   |   +-- ml.mp4
|   |   +-- quantum-intro.mp4
|   |   \-- vlsi.mp4
|   +-- CRR -BACKGROUND.jpg
|   +-- crr logo.jpg
|   +-- DEVOPS.jpg
|   +-- GEN AI.jpg
|   +-- jntuA logo.jpg
|   +-- jntuk logo.png
|   +-- jntuV logo.jpg
|   +-- Machine Learning Certificate.jpg
|   +-- ML.jpg
|   +-- QC.jpg
|   +-- TESTIMONIAL PROFILE.jpg
|   \-- VLSI.jpg
+-- backend
|   +-- src
|   |   +-- config
|   |   |   \-- db.js
|   |   +-- middleware
|   |   |   +-- adminMiddleware.js
|   |   |   \-- authMiddleware.js
|   |   +-- modules
|   |   |   +-- admin
|   |   |   |   \-- admin.routes.js
|   |   |   +-- assignments
|   |   |   |   \-- assignments.routes.js
|   |   |   +-- auth
|   |   |   |   \-- auth.routes.js
|   |   |   +-- certificates
|   |   |   |   \-- certificates.routes.js
|   |   |   +-- courses
|   |   |   |   \-- courses.routes.js
|   |   |   +-- notifications
|   |   |   |   \-- notifications.routes.js
|   |   |   +-- quizzes
|   |   |   |   \-- quizzes.routes.js
|   |   |   +-- students
|   |   |   |   \-- students.routes.js
|   |   |   \-- users
|   |   |       \-- users.routes.js
|   |   +-- scripts
|   |   |   \-- seed.js
|   |   +-- app.js
|   |   \-- server.js
|   +-- uploads
|   |   +-- assignments
|   |   +-- certificates
|   |   +-- notes
|   |   +-- profile
|   |   +-- submissions
|   |   \-- videos
|   +-- .env
|   +-- package.json
|   \-- package-lock.json
+-- css
|   +-- about.css
|   +-- assignments.css
|   +-- auth.css
|   +-- certificates.css
|   +-- community.css
|   +-- course-details.css
|   +-- course-player.css
|   +-- courses.css
|   +-- dashboard.css
|   +-- exam.css
|   +-- login.css
|   +-- my-courses.css
|   +-- notes.css
|   +-- profile.css
|   +-- project.css
|   +-- quiz.css
|   +-- student.css
|   \-- style.css
+-- js
|   +-- assignments.js
|   +-- auth.js
|   +-- certificates.js
|   +-- course-details.js
|   +-- course-player.js
|   +-- courses.js
|   +-- exam.js
|   +-- lms-data.js
|   +-- my-courses.js
|   +-- notes.js
|   +-- profile.js
|   +-- project.js
|   +-- quiz.js
|   +-- script.js
|   \-- student.js
+-- .env
+-- .gitignore
+-- 404.html
+-- about.html
+-- assignments.html
+-- auth.html
+-- certificates.html
+-- coming-soon.html
+-- community.html
+-- completed.html
+-- course-details.html
+-- course-player.html
+-- courses.html
+-- exam.html
+-- index.html
+-- login.html
+-- my-courses.html
+-- notes.html
+-- package.json
+-- package-lock.json
+-- profile.html
+-- project.html
+-- quiz.html
+-- README.md
+-- register-course.html
+-- student.html
\-- vercel.json
```

## File Contents

### .env

`$lang
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=smart_lms
JWT_SECRET=lms_jwt_secret_key_2026
PORT=5000
NODE_ENV=development
```

### .gitignore

`$lang
node_modules/
.DS_Store
.env
.env.local
.env.*.local
*.log
.vscode/
.idea/
*.swp
*.swo
*~
.project
.classpath
.c9/
*.WebKit
```

### 404.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found - VIDHYA VAARADHI</title>
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 20px;
    }
    .error-container {
      text-align: center;
      background: white;
      padding: 60px 40px;
      border-radius: 15px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      max-width: 500px;
    }
    .error-container h1 {
      font-size: 80px;
      margin: 0;
      color: #667eea;
      font-weight: 700;
    }
    .error-container p {
      font-size: 18px;
      color: #666;
      margin: 20px 0;
    }
    .error-container a {
      display: inline-block;
      margin-top: 30px;
      padding: 12px 40px;
      background: #667eea;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      transition: background 0.3s;
    }
    .error-container a:hover {
      background: #764ba2;
    }
  </style>
</head>
<body>
  <div class="error-container">
    <h1>404</h1>
    <p>Page Not Found</p>
    <p>The page you're looking for doesn't exist or has been moved.</p>
    <a href="/">Go Home</a>
  </div>
</body>
</html>
```

### about.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About | College LMS</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/about.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

<nav class="navbar">
  <div class="nav-left">
    <img src="assets/crr logo.jpg" alt="College Logo">
    <div class="site-name">VIDHYA VARADHI</div>
  </div>

  <div class="nav-search">
    <input type="text" placeholder="Search courses...">
    <button>Search</button>
  </div>

  <div class="nav-center">
    <div class="nav-item" onclick="window.location.href='index.html'">Home</div>
    <div class="nav-item" onclick="window.location.href='courses.html'">Courses</div>
    <div class="nav-item active-nav">About</div>
    <div class="nav-item" onclick="window.location.href='community.html'">Community</div>
  </div>

  <div class="nav-right">
    <a href="login.html"><button class="login-btn">Login</button></a>
    <a href="auth.html"><button class="signup-btn">Signup</button></a>
  </div>
</nav>

<section class="about-hero reveal active">
  <div class="page-shell hero-shell">
    <div class="hero-copy">
      <span class="hero-kicker">About The Institution</span>
      <h1>CR Reddy College of Engineering and a Smarter Digital Learning Experience</h1>
      <p>
        Built as a modern academic extension of CR Reddy College of Engineering, this LMS is designed
        to support structured learning, progress visibility, academic evaluation, and student growth
        through a connected digital environment.
      </p>
      <div class="hero-actions">
        <a href="courses.html" class="primary-link">Explore Courses</a>
        <a href="login.html" class="secondary-link">Login</a>
      </div>
    </div>
    <div class="hero-panel premium-panel">
      <div class="panel-top">
        <span class="panel-tag">Institution + Platform</span>
        <strong>Academic Learning Ecosystem</strong>
      </div>
      <div class="panel-grid">
        <div class="panel-card">
          <h3>Structured Courses</h3>
          <p>Module-driven learning designed for continuity and clarity.</p>
        </div>
        <div class="panel-card">
          <h3>Progress Tracking</h3>
          <p>Students can see how learning, practice, and completion connect.</p>
        </div>
        <div class="panel-card">
          <h3>Academic Evaluation</h3>
          <p>Assignments, quizzes, exams, and project workflows in one system.</p>
        </div>
        <div class="panel-card">
          <h3>Certified Completion</h3>
          <p>Meaningful course outcomes that reflect earned achievement.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="about-section reveal">
  <div class="page-shell intro-grid">
    <div class="premium-panel text-panel">
      <span class="section-chip">Who We Are</span>
      <h2>Academic Excellence with a Digital Learning Mindset</h2>
      <p>
        CR Reddy College of Engineering stands for disciplined learning, technical education,
        innovation, and the development of capable future professionals. This LMS reflects that same
        academic intent by bringing structured course delivery, assessment, project work, and progress
        visibility into a more connected and accessible student experience.
      </p>
    </div>
    <div class="premium-panel stat-strip">
      <div class="stat-item">
        <strong>Structured</strong>
        <span>Module-based learning flows</span>
      </div>
      <div class="stat-item">
        <strong>Practical</strong>
        <span>Assignments, quizzes, and projects</span>
      </div>
      <div class="stat-item">
        <strong>Visible</strong>
        <span>Trackable progress and completion</span>
      </div>
      <div class="stat-item">
        <strong>Credible</strong>
        <span>Institution-backed learning experience</span>
      </div>
    </div>
  </div>
</section>

<section class="about-section reveal">
  <div class="page-shell split-grid">
    <div class="premium-panel mission-card">
      <span class="section-chip">Our Mission</span>
      <h2>Enable students to learn with clarity, consistency, and academic purpose.</h2>
      <p>
        The LMS exists to make learning more organized and more effective. It helps students move from
        course discovery to lesson completion, practice, assessment, and certification through a guided
        workflow that feels like a real academic system rather than a collection of disconnected pages.
      </p>
    </div>
    <div class="premium-panel vision-card">
      <span class="section-chip">Our Vision</span>
      <h2>Combine institutional rigor with digital accessibility and modern learning workflows.</h2>
      <p>
        We want students of CR Reddy College of Engineering to experience education that is both rooted
        in academic discipline and strengthened by a premium digital platform built for continuous
        improvement, practical skill development, and long-term growth.
      </p>
    </div>
  </div>
</section>

<section class="about-section reveal">
  <div class="page-shell purpose-shell premium-panel">
    <div class="purpose-copy">
      <span class="section-chip">Why This LMS Exists</span>
      <h2>More than course viewing. A complete academic workflow.</h2>
      <p>
        This LMS was created so students can go beyond passive browsing and experience guided learning,
        structured progression, academic evaluation, project work, note access, progress tracking, and
        meaningful completion recognition inside one connected system.
      </p>
    </div>
    <div class="purpose-list">
      <div class="purpose-item">
        <h3>Guided Learning</h3>
        <p>Clear modules, lessons, and course navigation for steady academic progress.</p>
      </div>
      <div class="purpose-item">
        <h3>Evaluation Flow</h3>
        <p>Assignments, quizzes, and project checkpoints that support real learning behavior.</p>
      </div>
      <div class="purpose-item">
        <h3>Growth Visibility</h3>
        <p>Progress summaries, completion logic, and course milestones that feel earned.</p>
      </div>
      <div class="purpose-item">
        <h3>Digital Readiness</h3>
        <p>A modern academic experience aligned with practical and professional growth.</p>
      </div>
    </div>
  </div>
</section>

<section class="about-section reveal">
  <div class="page-shell highlights-layout">
    <div class="premium-panel highlights-copy">
      <span class="section-chip">Learning Experience Highlights</span>
      <h2>What students gain from using the platform</h2>
      <p>
        The learning experience is designed to feel organized, motivating, and academically relevant.
        Students are not just consuming content. They are building knowledge, practicing concepts,
        completing tasks, and preparing for meaningful technical growth.
      </p>
    </div>
    <div class="highlights-list">
      <div class="premium-panel highlight-card">
        <h3>Interactive Course Learning</h3>
        <p>Students move through lessons, modules, and player-based learning flows with better clarity.</p>
      </div>
      <div class="premium-panel highlight-card">
        <h3>Practical Assessment</h3>
        <p>Assignments, quizzes, and projects encourage applied understanding rather than passive reading.</p>
      </div>
      <div class="premium-panel highlight-card">
        <h3>Academic Confidence</h3>
        <p>Visible progress and completion pathways help students stay focused and motivated.</p>
      </div>
    </div>
  </div>
</section>

<section class="about-section reveal">
  <div class="page-shell values-shell">
    <div class="section-heading centered">
      <span class="section-chip">Institutional Values</span>
      <h2>The principles behind the learning experience</h2>
    </div>
    <div class="values-grid">
      <div class="premium-panel value-card">
        <h3>Academic Excellence</h3>
        <p>Strong fundamentals and disciplined learning form the base of student success.</p>
      </div>
      <div class="premium-panel value-card">
        <h3>Innovation</h3>
        <p>Digital workflows and modern learning systems support continuous improvement.</p>
      </div>
      <div class="premium-panel value-card">
        <h3>Practical Learning</h3>
        <p>Projects, assignments, and assessments connect knowledge to application.</p>
      </div>
      <div class="premium-panel value-card">
        <h3>Student Empowerment</h3>
        <p>Better visibility, guidance, and structure help learners grow with confidence.</p>
      </div>
    </div>
  </div>
</section>

<section class="about-cta reveal">
  <div class="page-shell">
    <div class="premium-panel cta-panel">
      <h2>Experience a connected academic platform built for real student growth.</h2>
      <p>
        Explore the LMS, discover structured courses, and see how CR Reddy College of Engineering
        extends its academic vision into a modern digital learning environment.
      </p>
      <div class="hero-actions">
        <a href="courses.html" class="primary-link">Explore Courses</a>
        <a href="community.html" class="secondary-link">Visit Community</a>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="footer-grid">
    <div>
      <h4>Platform</h4>
      <p>About</p>
      <p>Courses</p>
      <p>Certifications</p>
    </div>

    <div>
      <h4>Community</h4>
      <p>Discussion Forums</p>
      <p>Student Groups</p>
      <p>Events</p>
    </div>

    <div>
      <h4>Support</h4>
      <p>Help Center</p>
      <p>Contact</p>
      <p>Feedback</p>
    </div>
  </div>

  <div class="copyright">
    &copy; 2026 College LMS Platform • All Rights Reserved
  </div>
</footer>

<script src="js/script.js"></script>
</body>
</html>
```

### admin\admin-login.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Login</title>
<link rel="stylesheet" href="css/admin-login.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<section class="login-container">
  <div class="login-left">
    <h1>VIDHYA VAARADHI</h1>
    <p>Learning Management Administration Portal</p>
    <div class="login-points">
      <span>Manage academic content, courses, and learning structure</span>
      <span>Track assessments, submissions, and course readiness</span>
      <span>"Strong administration creates a smoother learning experience for everyone."</span>
    </div>
  </div>
  <div class="login-right">
    <h2>Admin Login</h2>
    <p>Use the admin workspace to manage the LMS in a structured, production-style flow.</p>
    <input id="adminId" type="text" placeholder="Admin ID or Email">
    <input id="password" type="password" placeholder="Password">
    <button id="loginButton" type="button">Login</button>
    <div class="login-hint">Demo access: <strong>admin@vidhyavaaradhi.edu</strong> / <strong>admin123</strong></div>
    <a class="back-home-link" href="../index.html">Back to Home</a>
  </div>
</section>
<script src="../js/lms-data.js"></script>
<script src="js/admin-data.js"></script>
<script src="js/admin-login.js"></script>
</body>
</html>
```

### admin\admins.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Management</title>
<link rel="stylesheet" href="css/admin.css">
<link rel="stylesheet" href="css/admins.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<header class="admin-header">
  <div class="header-left">
    <img src="../assets/crr logo.jpg" class="logo" alt="Logo">
    <h2>VIDHYA VAARADHI</h2>
  </div>
  <nav class="header-center">
    <a href="dashboard.html">Dashboard</a>
    <a href="students.html">Students</a>
    <a href="courses.html">Courses</a>
    <a href="lessons.html">Lessons</a>
    <a href="notes.html">Notes</a>
    <a href="assignments.html">Assignments</a>
    <a href="quizzes.html">Quizzes</a>
    <a href="projects.html">Projects</a>
    <a href="certificates.html">Certificates</a>
    <a href="announcements.html">Announcements</a>
    <a href="reports.html">Reports</a>
    <a href="admins.html" class="active">Admins</a>
    <a href="#" onclick="adminLogout()">Logout</a>
  </nav>
  <img src="../assets/TESTIMONIAL PROFILE.jpg" class="profile" alt="Admin">
</header>
<section class="admin-body">
  <aside class="admin-sidebar">
    <ul>
      <li><a href="dashboard.html">Dashboard</a></li>
      <li><a href="students.html">Students</a></li>
      <li><a href="courses.html">Courses</a></li>
      <li><a href="lessons.html">Lessons</a></li>
      <li><a href="notes.html">Notes</a></li>
      <li><a href="assignments.html">Assignments</a></li>
      <li><a href="quizzes.html">Quizzes</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="certificates.html">Certificates</a></li>
      <li><a href="announcements.html">Announcements</a></li>
      <li><a href="reports.html">Reports</a></li>
      <li class="active"><a href="admins.html">Admins</a></li>
      <li><a href="#" onclick="adminLogout()">Logout</a></li>
    </ul>
  </aside>
  <main class="admin-main">
    <section class="page-head">
      <div>
        <h1>Admin Management</h1>
        <p>Create additional admin accounts for internal LMS operations and keep access restricted to trusted administrators only.</p>
      </div>
    </section>
    <section class="panel-grid admins-layout">
      <div class="form-card">
        <h3>Create New Admin</h3>
        <form id="adminCreateForm" class="form-stack">
          <div class="form-grid">
            <input id="adminName" type="text" placeholder="Full Name" required>
            <input id="adminEmail" type="email" placeholder="Email Address" required>
            <input id="adminPhone" type="text" placeholder="Phone Number">
            <input id="adminDepartment" type="text" placeholder="Department / Role Label">
            <input id="adminPassword" type="password" placeholder="Password" required>
            <input id="adminConfirmPassword" type="password" placeholder="Confirm Password" required>
          </div>
          <div id="adminFormMessage" class="empty-state">New admin users created here are always saved with the <strong>admin</strong> role.</div>
          <div class="action-row">
            <button type="submit">Create Admin</button>
            <button type="button" class="btn btn-secondary" id="adminFormReset">Clear</button>
          </div>
        </form>
      </div>
      <div class="panel">
        <h3>Access Notes</h3>
        <ul class="list-stack">
          <li>Only existing admins can create additional admin accounts from this workspace.</li>
          <li>Duplicate email addresses are blocked automatically to avoid conflicting access.</li>
          <li>Public signup remains student-only and cannot create admin users.</li>
        </ul>
      </div>
    </section>
    <section class="table-card">
      <div class="table-head">
        <h3>Current Admin Accounts</h3>
        <input id="adminSearch" type="text" placeholder="Search admins by name or email">
      </div>
      <table class="admin-table">
        <thead>
          <tr><th>Admin</th><th>Role</th><th>Department</th><th>Created</th><th>Actions</th></tr>
        </thead>
        <tbody id="adminsTable"></tbody>
      </table>
    </section>
  </main>
</section>
<footer class="admin-footer">
  <p>Help Centre</p>
  <p>Policy</p>
  <p>&copy; 2026 Vidhya Vaaradhi LMS</p>
</footer>
<script src="../js/lms-data.js"></script>
<script src="js/admin-data.js"></script>
<script src="js/admin.js"></script>
<script src="js/admins.js"></script>
</body>
</html>
```

### admin\announcements.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Announcements Admin</title>
<link rel="stylesheet" href="css/admin.css">
<link rel="stylesheet" href="css/announcements.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<header class="admin-header">
  <div class="header-left">
    <img src="../assets/crr logo.jpg" class="logo" alt="Logo">
    <h2>VIDHYA VAARADHI</h2>
  </div>
  <nav class="header-center">
    <a href="dashboard.html">Dashboard</a>
    <a href="students.html">Students</a>
    <a href="courses.html">Courses</a>
    <a href="lessons.html">Lessons</a>
    <a href="notes.html">Notes</a>
    <a href="assignments.html">Assignments</a>
    <a href="quizzes.html">Quizzes</a>
    <a href="projects.html">Projects</a>
    <a href="certificates.html">Certificates</a>
    <a href="announcements.html" class="active">Announcements</a>
    <a href="reports.html">Reports</a>
    <a href="#" onclick="adminLogout()">Logout</a>
  </nav>
  <img src="../assets/TESTIMONIAL PROFILE.jpg" class="profile" alt="Admin">
</header>
<section class="admin-body">
  <aside class="admin-sidebar">
    <ul>
      <li><a href="dashboard.html">Dashboard</a></li>
      <li><a href="students.html">Students</a></li>
      <li><a href="courses.html">Courses</a></li>
      <li><a href="lessons.html">Lessons</a></li>
      <li><a href="notes.html">Notes</a></li>
      <li><a href="assignments.html">Assignments</a></li>
      <li><a href="quizzes.html">Quizzes</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="certificates.html">Certificates</a></li>
      <li class="active"><a href="announcements.html">Announcements</a></li>
      <li><a href="reports.html">Reports</a></li>
      <li><a href="#" onclick="adminLogout()">Logout</a></li>
    </ul>
  </aside>
  <main class="admin-main">
    <section class="page-head">
      <div>
        <h1>Announcements</h1>
        <p>Publish academic notices, operational updates, and learner-facing communication in a structured notice-board workflow.</p>
      </div>
    </section>
    <section class="panel-grid">
      <div class="form-card">
        <h3>Create Announcement</h3>
        <form id="announcementForm" class="form-stack">
          <input type="hidden" id="announcementId">
          <div class="form-grid">
            <input id="announcementTitle" type="text" placeholder="Announcement Title" required>
            <input id="announcementCategory" type="text" placeholder="Category / Type" required>
            <input id="announcementDate" type="date" required>
            <input id="announcementAudience" type="text" placeholder="Audience (e.g. All Students)">
          </div>
          <textarea id="announcementContent" placeholder="Announcement content / description" required></textarea>
          <div class="action-row">
            <button type="submit">Publish Announcement</button>
            <button type="button" class="btn btn-secondary" id="announcementReset">Clear</button>
          </div>
        </form>
      </div>
      <div class="panel">
        <h3>Notice Guidelines</h3>
        <ul class="list-stack">
          <li>Use short, descriptive titles so urgent updates are easy to scan.</li>
          <li>Set clear categories such as Exams, Academic Notice, Schedule, or Platform Update.</li>
          <li>Published announcements appear in the admin dashboard activity stream immediately.</li>
        </ul>
      </div>
    </section>
    <section class="table-card">
      <h3>Published Notices</h3>
      <table class="admin-table">
        <thead>
          <tr><th>Title</th><th>Category</th><th>Audience</th><th>Publish Date</th><th>Actions</th></tr>
        </thead>
        <tbody id="announcementsTable"></tbody>
      </table>
    </section>
  </main>
</section>
<footer class="admin-footer">
  <p>Help Centre</p>
  <p>Policy</p>
  <p>&copy; 2026 Vidhya Vaaradhi LMS</p>
</footer>
<script src="../js/lms-data.js"></script>
<script src="js/admin-data.js"></script>
<script src="js/admin.js"></script>
<script src="js/announcements.js"></script>
</body>
</html>
```

### admin\assignments.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Assignments Admin</title>
<link rel="stylesheet" href="css/admin.css">
<link rel="stylesheet" href="css/assignments.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<header class="admin-header">
  <div class="header-left">
    <img src="../assets/crr logo.jpg" class="logo" alt="Logo">
    <h2>VIDHYA VAARADHI</h2>
  </div>
  <nav class="header-center">
    <a href="dashboard.html">Dashboard</a>
    <a href="students.html">Students</a>
    <a href="courses.html">Courses</a>
    <a href="lessons.html">Lessons</a>
    <a href="notes.html">Notes</a>
    <a href="assignments.html" class="active">Assignments</a>
    <a href="quizzes.html">Quizzes</a>
    <a href="projects.html">Projects</a>
    <a href="certificates.html">Certificates</a>
    <a href="announcements.html">Announcements</a>
    <a href="reports.html">Reports</a>
    <a href="#" onclick="adminLogout()">Logout</a>
  </nav>
  <img src="../assets/TESTIMONIAL PROFILE.jpg" class="profile" alt="Admin">
</header>
<section class="admin-body">
  <aside class="admin-sidebar">
    <ul>
      <li><a href="dashboard.html">Dashboard</a></li>
      <li><a href="students.html">Students</a></li>
      <li><a href="courses.html">Courses</a></li>
      <li><a href="lessons.html">Lessons</a></li>
      <li><a href="notes.html">Notes</a></li>
      <li class="active"><a href="assignments.html">Assignments</a></li>
      <li><a href="quizzes.html">Quizzes</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="certificates.html">Certificates</a></li>
      <li><a href="announcements.html">Announcements</a></li>
      <li><a href="reports.html">Reports</a></li>
      <li><a href="#" onclick="adminLogout()">Logout</a></li>
    </ul>
  </aside>
  <main class="admin-main">
    <section class="page-head">
      <div>
        <h1>Assignment Management</h1>
        <p>Create course-linked assignments, set due dates and instructions, and keep a simple view of learner submission activity.</p>
      </div>
    </section>
    <section class="panel-grid">
      <div class="form-card">
        <h3>Create or Update Assignment</h3>
        <form id="assignmentForm" class="form-stack">
          <input type="hidden" id="assignmentId">
          <div class="form-grid">
            <input id="assignmentTitle" type="text" placeholder="Assignment Title" required>
            <select id="assignmentCourse" required></select>
            <input id="assignmentDueDate" type="date" required>
            <input id="assignmentMarks" type="number" placeholder="Marks">
            <select id="assignmentVisibility">
              <option value="visible">Visible to Students</option>
              <option value="hidden">Hidden / Draft</option>
            </select>
          </div>
          <textarea id="assignmentInstructions" placeholder="Assignment Instructions" required></textarea>
          <textarea id="assignmentDeliverables" placeholder="Submission Expectations / Deliverables"></textarea>
          <div class="upload-field">
            <label for="assignmentReferenceFile">Assignment Reference File</label>
            <input id="assignmentReferenceFile" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.zip,image/*">
            <div id="assignmentReferenceMeta" class="upload-meta">Optional brief, rubric, or supporting file shown in the student assignment flow.</div>
          </div>
          <div class="action-row">
            <button type="submit">Save Assignment</button>
            <button type="button" class="btn btn-secondary" id="assignmentReset">Clear</button>
          </div>
        </form>
      </div>
      <div class="panel">
        <h3>Workflow Notes</h3>
        <ul class="list-stack">
          <li>Assignments should stay simple: title, due date, marks, instructions, and expected submission output.</li>
          <li>Reference uploads now feed the learner assignment workspace instead of relying on path text only.</li>
          <li>Use the review modal to check what students will actually see before publishing.</li>
        </ul>
        <div class="form-grid compact-controls">
          <input id="assignmentSearch" type="text" placeholder="Search assignments by title or course">
          <select id="assignmentVisibilityFilter">
            <option value="all">All Visibility</option>
            <option value="visible">Visible</option>
            <option value="hidden">Hidden</option>
          </select>
        </div>
      </div>
    </section>
    <section class="table-card">
      <h3>Assignment List</h3>
      <table class="admin-table">
        <thead>
          <tr><th>Assignment</th><th>Course</th><th>Due Date</th><th>Submission State</th><th>Actions</th></tr>
        </thead>
        <tbody id="assignmentsTable"></tbody>
      </table>
    </section>
  </main>
</section>
<footer class="admin-footer">
  <p>Help Centre</p>
  <p>Policy</p>
  <p>&copy; 2026 Vidhya Vaaradhi LMS</p>
</footer>
<script src="../js/lms-data.js"></script>
<script src="js/admin-data.js"></script>
<script src="js/admin.js"></script>
<script src="js/assignments.js"></script>
</body>
</html>
```

### admin\certificates.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Certificate Management</title>
<link rel="stylesheet" href="css/admin.css">
<link rel="stylesheet" href="css/certificates.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<header class="admin-header">
  <div class="header-left">
    <img src="../assets/crr logo.jpg" class="logo" alt="Logo">
    <h2>VIDHYA VAARADHI</h2>
  </div>
  <nav class="header-center">
    <a href="dashboard.html">Dashboard</a>
    <a href="students.html">Students</a>
    <a href="courses.html">Courses</a>
    <a href="lessons.html">Lessons</a>
    <a href="notes.html">Notes</a>
    <a href="assignments.html">Assignments</a>
    <a href="quizzes.html">Quizzes</a>
    <a href="projects.html">Projects</a>
    <a href="certificates.html" class="active">Certificates</a>
    <a href="announcements.html">Announcements</a>
    <a href="reports.html">Reports</a>
    <a href="#" onclick="adminLogout()">Logout</a>
  </nav>
  <img src="../assets/TESTIMONIAL PROFILE.jpg" class="profile" alt="Admin">
</header>
<section class="admin-body">
  <aside class="admin-sidebar">
    <ul>
      <li><a href="dashboard.html">Dashboard</a></li>
      <li><a href="students.html">Students</a></li>
      <li><a href="courses.html">Courses</a></li>
      <li><a href="lessons.html">Lessons</a></li>
      <li><a href="notes.html">Notes</a></li>
      <li><a href="assignments.html">Assignments</a></li>
      <li><a href="quizzes.html">Quizzes</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li class="active"><a href="certificates.html">Certificates</a></li>
      <li><a href="announcements.html">Announcements</a></li>
      <li><a href="reports.html">Reports</a></li>
      <li><a href="#" onclick="adminLogout()">Logout</a></li>
    </ul>
  </aside>
  <main class="admin-main">
    <section class="page-head">
      <div>
        <h1>Certificate Management</h1>
        <p>Review issued certificates, keep visibility under control, and maintain a clear record of learner completion output.</p>
      </div>
    </section>
    <section class="panel-grid">
      <div class="form-card">
        <h3>Update Certificate Record</h3>
        <form id="certificateForm" class="form-stack">
          <input type="hidden" id="certificateId">
          <div class="form-grid">
            <select id="certificateStudent" required></select>
            <select id="certificateCourse" required></select>
            <input id="certificateDate" type="date" required>
            <select id="certificateStatus">
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
              <option value="revoked">Revoked</option>
            </select>
            <select id="certificateVisible">
              <option value="true">Visible to Student</option>
              <option value="false">Hidden from Student</option>
            </select>
            <select id="certificateRule">
              <option value="course-completion">Issue On Course Completion</option>
              <option value="completion-and-pass">Completion + Passing Score</option>
              <option value="manual-review">Manual Review Approval</option>
            </select>
            <select id="certificateTemplate">
              <option value="classic-premium">Classic Premium</option>
              <option value="modern-academic">Modern Academic</option>
              <option value="skill-achievement">Skill Achievement</option>
            </select>
          </div>
          <div class="upload-field">
            <label for="certificateTemplateFile">Certificate Template Image</label>
            <input id="certificateTemplateFile" type="file" accept="image/*">
            <div id="certificateTemplateMeta" class="upload-meta">Upload the certificate background/template reflected in the student certificates page.</div>
            <img id="certificateTemplatePreview" class="preview-thumb" alt="Certificate template preview" hidden>
          </div>
          <div class="action-row">
            <button type="submit">Save Certificate</button>
            <button type="button" class="btn btn-secondary" id="certificateReset">Clear</button>
          </div>
        </form>
      </div>
      <div class="panel">
        <h3>Certificate Rules</h3>
        <ul class="list-stack">
          <li>Certificates should map to a real student, a real course, and a clear issue rule.</li>
          <li>Template uploads now give the student certificate page a meaningful visual record to show.</li>
          <li>Hidden records stay in admin history but do not appear in the learner certificate area.</li>
        </ul>
      </div>
    </section>
    <section class="table-card">
      <h3>Issued Certificates</h3>
      <table class="admin-table">
        <thead>
          <tr><th>Student</th><th>Course</th><th>Issue Date</th><th>Rule</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody id="certificatesTable"></tbody>
      </table>
    </section>
  </main>
</section>
<footer class="admin-footer">
  <p>Help Centre</p>
  <p>Policy</p>
  <p>&copy; 2026 Vidhya Vaaradhi LMS</p>
</footer>
<script src="../js/lms-data.js"></script>
<script src="js/admin-data.js"></script>
<script src="js/admin.js"></script>
<script src="js/certificates.js"></script>
</body>
</html>
```

### admin\courses.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Courses Admin</title>
<link rel="stylesheet" href="css/admin.css">
<link rel="stylesheet" href="css/courses.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<header class="admin-header">
  <div class="header-left">
    <img src="../assets/crr logo.jpg" class="logo" alt="Logo">
    <h2>VIDHYA VAARADHI</h2>
  </div>
  <nav class="header-center">
    <a href="dashboard.html">Dashboard</a>
    <a href="students.html">Students</a>
    <a href="courses.html" class="active">Courses</a>
    <a href="lessons.html">Lessons</a>
    <a href="notes.html">Notes</a>
    <a href="assignments.html">Assignments</a>
    <a href="quizzes.html">Quizzes</a>
    <a href="projects.html">Projects</a>
    <a href="certificates.html">Certificates</a>
    <a href="announcements.html">Announcements</a>
    <a href="reports.html">Reports</a>
    <a href="#" onclick="adminLogout()">Logout</a>
  </nav>
  <img src="../assets/TESTIMONIAL PROFILE.jpg" class="profile" alt="Admin">
</header>
<section class="admin-body">
  <aside class="admin-sidebar">
    <ul>
      <li><a href="dashboard.html">Dashboard</a></li>
      <li><a href="students.html">Students</a></li>
      <li class="active"><a href="courses.html">Courses</a></li>
      <li><a href="lessons.html">Lessons</a></li>
      <li><a href="notes.html">Notes</a></li>
      <li><a href="assignments.html">Assignments</a></li>
      <li><a href="quizzes.html">Quizzes</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="certificates.html">Certificates</a></li>
      <li><a href="announcements.html">Announcements</a></li>
      <li><a href="reports.html">Reports</a></li>
      <li><a href="#" onclick="adminLogout()">Logout</a></li>
    </ul>
  </aside>
  <main class="admin-main">
    <section class="page-head">
      <div>
        <h1>Course Management</h1>
        <p>Create or update the public course catalog used across the LMS. Keep instructor, metadata, and publishing state organized in one place.</p>
      </div>
    </section>
    <section class="panel-grid courses-layout">
      <div class="form-card">
        <h3>Add or Edit Course</h3>
        <form id="courseForm" class="form-stack">
          <input type="hidden" id="courseId">
          <div class="form-grid">
            <input id="courseTitle" type="text" placeholder="Course Title" required>
            <input id="courseSlug" type="text" placeholder="Course ID / Slug" required>
            <input id="courseSubtitle" type="text" placeholder="Catalog subtitle / tagline" required>
            <input id="courseCategory" type="text" placeholder="Category / Department" required>
            <input id="courseInstructor" type="text" placeholder="Instructor" required>
            <input id="courseDuration" type="number" placeholder="Duration in Weeks" required>
            <select id="courseDifficulty" required>
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <select id="courseStatus">
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <div class="form-grid">
            <div class="upload-field">
              <label for="courseImageFile">Thumbnail Image</label>
              <input id="courseImageFile" type="file" accept="image/*">
              <div id="courseImageMeta" class="upload-meta">Used in the public course catalog and student course cards.</div>
              <img id="courseImagePreview" class="preview-thumb" alt="Course thumbnail preview" hidden>
            </div>
            <div class="upload-field">
              <label for="courseBannerImageFile">Banner Image</label>
              <input id="courseBannerImageFile" type="file" accept="image/*">
              <div id="courseBannerMeta" class="upload-meta">Used in course details and premium hero sections when available.</div>
              <img id="courseBannerPreview" class="preview-thumb" alt="Course banner preview" hidden>
            </div>
          </div>
          <textarea id="courseShortDescription" placeholder="Short Description / Catalog Summary" required></textarea>
          <textarea id="courseDescription" placeholder="Full Description" required></textarea>
          <div class="action-row">
            <button type="submit">Save Course</button>
            <button type="button" class="btn btn-secondary" id="courseReset">Clear</button>
          </div>
        </form>
      </div>
      <div class="panel">
        <h3>Catalog Notes</h3>
        <ul class="list-stack">
          <li>Only keep catalog information that students actually see in course cards, details, and player context.</li>
          <li>Thumbnail and banner uploads now feed the public catalog and course details experience directly.</li>
          <li>Use the review modal to check content depth before publishing a course live.</li>
        </ul>
        <input id="courseSearch" type="text" placeholder="Search courses by title, category, or instructor">
        <div class="form-grid compact-controls">
          <select id="courseStatusFilter">
            <option value="all">All Statuses</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
          <select id="courseSort">
            <option value="updated">Sort by Recent</option>
            <option value="title">Sort by Title</option>
            <option value="category">Sort by Department</option>
            <option value="content">Sort by Content Depth</option>
          </select>
        </div>
      </div>
    </section>
    <section class="table-card">
      <h3>Existing Courses</h3>
      <table class="admin-table">
        <thead>
          <tr><th>Course</th><th>Instructor</th><th>Delivery</th><th>Content</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody id="coursesTable"></tbody>
      </table>
    </section>
  </main>
</section>
<footer class="admin-footer">
  <p>Help Centre</p>
  <p>Policy</p>
  <p>&copy; 2026 Vidhya Vaaradhi LMS</p>
</footer>
<script src="../js/lms-data.js"></script>
<script src="js/admin-data.js"></script>
<script src="js/admin.js"></script>
<script src="js/courses.js"></script>
</body>
</html>
```

### admin\css\admin.css

`$lang
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
min-height:100vh;
background:#f4f7fb;
color:#1e293b;
overflow-x:hidden;
}

a{
text-decoration:none;
color:inherit;
}

button,
input,
select,
textarea{
font:inherit;
}

.admin-header{
display:flex;
justify-content:space-between;
align-items:center;
padding:16px 32px;
background:#eef4ff;
border-bottom:1px solid #d9e5fb;
position:sticky;
top:0;
z-index:20;
}

.header-left{
display:flex;
align-items:center;
gap:12px;
}

.logo{
width:42px;
height:42px;
object-fit:cover;
border-radius:10px;
}

.header-left h2{
color:#18428f;
font-size:22px;
}

.header-center{
display:flex;
gap:22px;
flex-wrap:wrap;
}

.header-center a{
font-size:14px;
color:#475569;
padding-bottom:4px;
border-bottom:2px solid transparent;
}

.header-center a.active,
.header-center a:hover{
color:#1d4ed8;
border-bottom-color:#1d4ed8;
}

.profile{
width:40px;
height:40px;
border-radius:50%;
object-fit:cover;
}

.admin-menu-toggle{
display:none;
align-items:center;
justify-content:center;
width:42px;
height:42px;
border:none;
border-radius:12px;
background:#dbeafe;
color:#1d4ed8;
font-size:22px;
cursor:pointer;
}

.admin-body{
display:grid;
grid-template-columns:240px 1fr;
min-height:calc(100vh - 74px);
align-items:start;
}

.admin-sidebar{
background:linear-gradient(180deg,#123b83,#194ca5);
color:white;
padding:24px 18px;
align-self:start;
}

.admin-sidebar ul{
list-style:none;
display:flex;
flex-direction:column;
gap:8px;
}

.admin-sidebar li a,
.admin-sidebar li button,
.admin-sidebar li{
display:block;
width:100%;
padding:12px 14px;
border-radius:12px;
font-size:14px;
font-weight:500;
}

.admin-sidebar .active,
.admin-sidebar li:hover{
background:rgba(255,255,255,0.16);
}

.admin-main{
padding:28px;
min-width:0;
}

@media(min-width:1025px){
.admin-sidebar{
position:sticky;
top:74px;
height:calc(100vh - 74px);
overflow-y:auto;
}
}

.page-head{
display:flex;
justify-content:space-between;
align-items:flex-start;
gap:18px;
margin-bottom:24px;
}

.page-head h1,
.page-head h2{
font-size:28px;
color:#0f172a;
margin-bottom:8px;
}

.page-head p{
color:#64748b;
line-height:1.7;
max-width:720px;
}

.quick-actions,
.stats-grid,
.panel-grid,
.form-grid{
display:grid;
gap:18px;
}

.stats-grid{
grid-template-columns:repeat(auto-fit,minmax(190px,1fr));
margin-bottom:24px;
}

.stat-card,
.panel,
.form-card,
.table-card,
.hero-banner{
background:white;
border-radius:18px;
padding:22px;
box-shadow:0 10px 24px rgba(15,23,42,0.06);
}

.stat-card h3{
font-size:13px;
text-transform:uppercase;
letter-spacing:0.6px;
color:#64748b;
margin-bottom:8px;
}

.stat-card p{
font-size:28px;
font-weight:700;
color:#1d4ed8;
}

.stat-card span{
display:block;
margin-top:8px;
font-size:13px;
color:#64748b;
}

.panel-grid{
grid-template-columns:1.2fr 0.8fr;
margin-bottom:24px;
}

.detail-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(140px,1fr));
gap:14px;
}

.list-stack{
list-style:none;
display:flex;
flex-direction:column;
gap:14px;
}

.list-stack li{
padding:14px 16px;
border:1px solid #e2e8f0;
border-radius:14px;
background:#f8fbff;
}

.action-row{
display:flex;
flex-wrap:wrap;
gap:12px;
}

.compact-controls{
margin-top:14px;
}

.csv-upload{
display:grid;
gap:10px;
padding:14px 16px;
border:1px dashed #bfdbfe;
border-radius:14px;
background:#f8fbff;
}

.csv-upload label{
font-size:13px;
font-weight:600;
color:#1d4ed8;
}

.btn,
.table-actions button,
.form-card button,
.inline-actions button{
border:none;
border-radius:12px;
padding:11px 16px;
font-weight:600;
cursor:pointer;
}

.btn-primary,
.form-card button,
.table-actions .primary,
.inline-actions .primary{
background:#1d4ed8;
color:white;
}

.btn-secondary,
.table-actions .secondary,
.inline-actions .secondary{
background:#e2e8f0;
color:#1e293b;
}

.btn-danger,
.table-actions .danger{
background:#fee2e2;
color:#b91c1c;
}

.table-card{
overflow:auto;
}

.admin-table{
width:100%;
border-collapse:collapse;
}

.admin-table th,
.admin-table td{
padding:14px 12px;
border-bottom:1px solid #e2e8f0;
text-align:left;
vertical-align:top;
font-size:14px;
}

.admin-table th{
color:#64748b;
font-weight:600;
font-size:13px;
text-transform:uppercase;
letter-spacing:0.5px;
}

.badge{
display:inline-block;
padding:6px 10px;
border-radius:999px;
font-size:12px;
font-weight:700;
}

.badge-published,
.badge-active,
.badge-verified{
background:#dcfce7;
color:#166534;
}

.badge-inactive,
.badge-archived{
background:#e2e8f0;
color:#475569;
}

.badge-draft,
.badge-review-ready{
background:#dbeafe;
color:#1d4ed8;
}

.badge-pending-submissions,
.badge-hidden{
background:#fef3c7;
color:#92400e;
}

.badge-pending{
background:#fef3c7;
color:#92400e;
}

.badge-submissions-open{
background:#ede9fe;
color:#6d28d9;
}

.badge-revoked{
background:#fee2e2;
color:#b91c1c;
}

.form-card form,
.form-stack{
display:grid;
gap:14px;
}

.form-grid{
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
}

input,
select,
textarea{
width:100%;
padding:12px 14px;
border:1px solid #cbd5e1;
border-radius:12px;
background:white;
outline:none;
}

textarea{
min-height:120px;
resize:vertical;
}

.helper-text{
font-size:13px;
color:#64748b;
line-height:1.7;
}

.table-actions{
display:flex;
flex-wrap:wrap;
gap:8px;
}

.admin-table tr[data-clickable="true"]{
cursor:pointer;
}

.admin-table tr[data-clickable="true"]:hover{
background:#f8fbff;
}

.upload-field{
display:grid;
gap:8px;
padding:14px 16px;
border:1px dashed #bfdbfe;
border-radius:14px;
background:#f8fbff;
}

.upload-field label{
font-size:13px;
font-weight:600;
color:#1d4ed8;
}

.upload-meta{
font-size:13px;
color:#64748b;
line-height:1.6;
}

.preview-thumb{
width:100%;
max-height:180px;
object-fit:cover;
border-radius:14px;
border:1px solid #dbeafe;
background:#eef4ff;
}

.preview-video{
width:100%;
max-height:220px;
border-radius:14px;
background:#0f172a;
}

.admin-modal-overlay{
position:fixed;
inset:0;
background:rgba(15,23,42,0.48);
z-index:45;
}

.admin-modal-overlay[hidden],
.admin-modal[hidden]{
display:none !important;
pointer-events:none;
}

.admin-modal{
position:fixed;
inset:0;
display:flex;
align-items:center;
justify-content:center;
padding:24px;
z-index:46;
}

body.admin-modal-open{
overflow:hidden;
}

.admin-modal-card{
width:min(980px,100%);
max-height:calc(100vh - 48px);
overflow:auto;
background:#fff;
border-radius:24px;
padding:24px;
box-shadow:0 20px 60px rgba(15,23,42,0.25);
}

.admin-modal-head{
display:flex;
justify-content:space-between;
align-items:flex-start;
gap:16px;
margin-bottom:20px;
}

.admin-modal-head h3{
font-size:24px;
color:#0f172a;
margin-bottom:6px;
}

.record-summary-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
gap:14px;
margin-bottom:18px;
}

.record-summary-card{
padding:16px;
border-radius:16px;
background:#f8fbff;
border:1px solid #dbe5f3;
display:grid;
gap:6px;
}

.record-summary-card strong{
color:#0f172a;
}

.record-detail-section{
padding:18px;
border-radius:18px;
border:1px solid #e2e8f0;
background:#f8fbff;
margin-bottom:16px;
}

.record-detail-section h4{
font-size:16px;
margin-bottom:12px;
color:#0f172a;
}

.record-detail-list{
display:grid;
gap:10px;
color:#475569;
line-height:1.7;
}

.record-chip{
display:inline-flex;
align-items:center;
padding:6px 10px;
border-radius:999px;
background:#eff6ff;
color:#1d4ed8;
font-size:12px;
font-weight:700;
}

.inline-link{
color:#1d4ed8;
font-weight:600;
text-decoration:none;
}

.question-builder-head h4{
font-size:16px;
color:#0f172a;
}

.empty-state{
padding:18px;
border:1px dashed #cbd5e1;
border-radius:14px;
color:#64748b;
background:#f8fafc;
}

.admin-footer{
display:flex;
justify-content:center;
gap:28px;
padding:14px;
background:#eef4ff;
border-top:1px solid #d9e5fb;
font-size:13px;
color:#64748b;
}

.admin-sidebar-overlay{
position:fixed;
inset:0;
background:rgba(15,23,42,0.42);
opacity:0;
visibility:hidden;
transition:0.3s;
z-index:24;
}

@media(max-width:1024px){
.admin-header{
padding:14px 20px;
gap:14px;
}

.admin-menu-toggle{
display:inline-flex;
}

.header-center{
display:none;
}

.admin-body{
grid-template-columns:1fr;
}

.admin-sidebar{
display:block;
position:fixed;
top:74px;
left:0;
bottom:0;
width:min(280px,80vw);
z-index:25;
transform:translateX(-100%);
transition:transform 0.3s ease;
overflow-y:auto;
}

.panel-grid{
grid-template-columns:1fr;
}

.admin-main{
padding:24px 20px;
}

body.admin-nav-open{
overflow:hidden;
}

body.admin-nav-open .admin-sidebar{
transform:translateX(0);
}

body.admin-nav-open .admin-sidebar-overlay{
opacity:1;
visibility:visible;
}
}

@media(max-width:768px){
.page-head{
flex-direction:column;
}

.admin-main{
padding:20px 16px;
}

.form-grid{
grid-template-columns:1fr;
}

.table-card,
.panel,
.form-card,
.hero-banner,
.stat-card{
padding:18px;
}

.admin-table{
min-width:640px;
}

.admin-footer{
flex-wrap:wrap;
gap:12px 20px;
padding-left:16px;
padding-right:16px;
}

.admin-modal{
padding:12px;
}

.admin-modal-card{
padding:18px;
}

.admin-modal-head{
flex-direction:column;
}
}
```

### admin\css\admin-login.css

`$lang
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(135deg,#dfe8f8,#eef4ff);
padding:24px;
}

.login-container{
width:min(980px,100%);
min-height:540px;
display:grid;
grid-template-columns:1.1fr 0.9fr;
background:white;
border-radius:24px;
overflow:hidden;
box-shadow:0 24px 70px rgba(15,23,42,0.18);
}

.login-left{
background:
linear-gradient(160deg,rgba(15,47,111,0.76),rgba(23,63,143,0.82)),
url("../../assets/CRR -BACKGROUND.jpg") center/cover no-repeat;
color:white;
padding:56px;
display:flex;
flex-direction:column;
justify-content:center;
}

.login-left h1{
font-size:34px;
margin-bottom:12px;
}

.login-left p{
font-size:16px;
opacity:0.92;
line-height:1.8;
max-width:360px;
}

.login-points{
margin-top:28px;
display:flex;
flex-direction:column;
gap:12px;
}

.login-points span{
padding:12px 14px;
border:1px solid rgba(255,255,255,0.22);
border-radius:12px;
background:rgba(255,255,255,0.08);
font-size:14px;
}

.login-right{
padding:56px;
display:flex;
flex-direction:column;
justify-content:center;
}

.login-right h2{
font-size:30px;
color:#0f172a;
margin-bottom:8px;
}

.login-right p{
color:#64748b;
line-height:1.7;
margin-bottom:24px;
}

.login-right input{
margin-bottom:14px;
padding:14px 16px;
border:1px solid #cbd5e1;
border-radius:12px;
outline:none;
font-size:14px;
}

.login-right input:focus{
border-color:#1d4ed8;
box-shadow:0 0 0 3px rgba(29,78,216,0.12);
}

.login-right button{
background:#1d4ed8;
color:white;
border:none;
padding:14px;
border-radius:12px;
cursor:pointer;
font-weight:600;
font-size:14px;
margin-top:6px;
}

.login-hint{
margin-top:18px;
font-size:13px;
color:#475569;
}

.back-home-link{
margin-top:16px;
display:inline-flex;
justify-content:center;
align-items:center;
min-height:44px;
border:1px solid #dbe5f3;
border-radius:12px;
background:#ffffff;
color:#123b83;
font-size:14px;
font-weight:600;
text-decoration:none;
}

@media(max-width:860px){
.login-container{
grid-template-columns:1fr;
}

.login-left,
.login-right{
padding:36px;
}
}

@media(max-width:640px){
body{
padding:18px 14px;
background:#f5f7fb;
align-items:center;
}

.login-container{
min-height:0;
max-width:420px;
border-radius:18px;
box-shadow:0 10px 28px rgba(15,23,42,0.12);
border:1px solid rgba(203,213,225,0.8);
}

.login-left{
display:none;
}

.login-right{
padding:28px 20px 24px;
background:#ffffff;
}

.login-right h2{
font-size:22px;
}

.login-right p,
.login-hint{
font-size:13px;
line-height:1.65;
}

.login-right input,
.login-right button{
min-height:44px;
padding-top:12px;
padding-bottom:12px;
border-radius:12px;
}
}
```

### admin\css\admins.css

`$lang
@import url("admin.css");

.admins-layout{
margin-bottom:24px;
}

.table-head{
display:flex;
justify-content:space-between;
align-items:center;
gap:16px;
margin-bottom:18px;
}

.table-head input{
max-width:320px;
}

.status-box{
padding:14px 16px;
border-radius:14px;
font-size:13px;
line-height:1.7;
}

.status-success{
background:#dcfce7;
color:#166534;
border:1px solid #86efac;
}

.status-error{
background:#fee2e2;
color:#991b1b;
border:1px solid #fca5a5;
}

@media (max-width: 768px) {
  .table-head{
    flex-direction:column;
    align-items:stretch;
  }

  .table-head input{
    max-width:none;
  }
}
```

### admin\css\announcements.css

`$lang
@import url("admin.css");
```

### admin\css\assignments.css

`$lang
@import url("admin.css");
```

### admin\css\certificates.css

`$lang
@import url("admin.css");
```

### admin\css\courses.css

`$lang
@import url("admin.css");

.courses-layout{
margin-bottom:24px;
}
```

### admin\css\dashboard.css

`$lang
@import url("admin.css");

.dashboard-lower{
margin-top:24px;
}

.dashboard-head-tools{
display:grid;
gap:14px;
justify-items:end;
}

.dashboard-head-status{
display:flex;
flex-wrap:wrap;
justify-content:flex-end;
gap:10px;
align-items:center;
}

.dashboard-live-stamp{
display:inline-flex;
align-items:center;
padding:8px 12px;
border-radius:999px;
background:#eaf2ff;
color:#1d4ed8;
font-size:12px;
font-weight:700;
letter-spacing:0.2px;
}

.admin-focus-card{
min-width:280px;
max-width:360px;
background:linear-gradient(135deg,#0f2f6b,#1d4ed8);
color:#fff;
}

.admin-focus-eyebrow{
font-size:12px;
text-transform:uppercase;
letter-spacing:1px;
opacity:0.82;
margin-bottom:10px;
}

.admin-focus-card h3{
font-size:22px;
margin-bottom:8px;
}

.admin-focus-card p{
font-size:14px;
line-height:1.7;
color:rgba(255,255,255,0.86);
}

.admin-focus-meta{
display:flex;
flex-wrap:wrap;
gap:8px;
margin-top:16px;
}

.admin-focus-meta span{
display:inline-flex;
align-items:center;
padding:8px 12px;
border-radius:999px;
background:rgba(255,255,255,0.12);
font-size:12px;
font-weight:600;
}

.dashboard-stat{
border:1px solid #e2e8f0;
position:relative;
overflow:hidden;
}

.dashboard-stat::before{
content:"";
position:absolute;
top:0;
left:0;
width:100%;
height:4px;
background:var(--stat-accent,#1d4ed8);
}

.dashboard-stat-head{
display:flex;
justify-content:space-between;
gap:10px;
align-items:flex-start;
}

.dashboard-stat-meta{
display:inline-flex;
padding:6px 10px;
border-radius:999px;
background:#eff6ff;
color:#1d4ed8;
font-size:11px;
font-weight:700;
text-transform:uppercase;
letter-spacing:0.5px;
}

.dashboard-stat-note{
display:block;
margin-top:8px;
font-size:14px;
color:#0f172a;
}

.dashboard-stat-students{--stat-accent:#1d4ed8;}
.dashboard-stat-courses{--stat-accent:#0f766e;}
.dashboard-stat-lessons{--stat-accent:#7c3aed;}
.dashboard-stat-notes{--stat-accent:#ea580c;}
.dashboard-stat-assignments{--stat-accent:#2563eb;}
.dashboard-stat-quizzes{--stat-accent:#9333ea;}
.dashboard-stat-projects{--stat-accent:#0f766e;}
.dashboard-stat-certificates{--stat-accent:#ca8a04;}
.dashboard-stat-announcements{--stat-accent:#dc2626;}
.dashboard-stat-reports{--stat-accent:#0891b2;}
.dashboard-stat-admins{--stat-accent:#475569;}

.quick-action-btn{
min-width:138px;
text-align:center;
}

.dashboard-priority{
padding:14px 16px;
border-radius:16px;
border:1px solid #dbe5f3;
background:#f8fbff;
}

.dashboard-priority-good{
border-color:#bbf7d0;
background:#f0fdf4;
}

.dashboard-priority-warning{
border-color:#fde68a;
background:#fffbeb;
}

.dashboard-priority-neutral{
border-color:#dbe5f3;
background:#f8fbff;
}

.dashboard-progress-list{
display:grid;
gap:14px;
}

.dashboard-progress-card{
padding:16px;
border-radius:18px;
border:1px solid #dbe5f3;
background:#f8fbff;
display:grid;
gap:10px;
}

.dashboard-progress-head{
display:flex;
justify-content:space-between;
gap:10px;
align-items:center;
}

.dashboard-progress-head span{
font-size:12px;
font-weight:700;
color:#475569;
}

.dashboard-progress-track{
height:10px;
border-radius:999px;
background:#e2e8f0;
overflow:hidden;
}

.dashboard-progress-track span{
display:block;
height:100%;
border-radius:999px;
background:linear-gradient(90deg,#1d4ed8,#38bdf8);
}

.dashboard-progress-card p{
font-size:13px;
color:#475569;
line-height:1.6;
}

.content-type-pill{
display:inline-flex;
padding:5px 10px;
border-radius:999px;
background:#e0ecff;
color:#1d4ed8;
font-size:11px;
font-weight:700;
text-transform:uppercase;
letter-spacing:0.6px;
margin-bottom:10px;
}

@media(max-width:900px){
.page-head{
flex-direction:column;
}

.dashboard-head-tools{
justify-items:stretch;
width:100%;
}

.dashboard-head-status{
justify-content:flex-start;
}

.admin-focus-card{
max-width:none;
width:100%;
}
}
```

### admin\css\lessons.css

`$lang
.content-layout {
  grid-template-columns: 1.25fr 0.75fr;
}

.form-stack {
  display: grid;
  gap: 16px;
}

.form-stack textarea {
  min-height: 110px;
}

.helper-text {
  color: #64748b;
  font-size: 13px;
}

@media (max-width: 900px) {
  .content-layout {
    grid-template-columns: 1fr;
  }
}
```

### admin\css\notes.css

`$lang
.content-layout {
  grid-template-columns: 1.25fr 0.75fr;
}

.form-stack {
  display: grid;
  gap: 16px;
}

.form-stack textarea {
  min-height: 120px;
}

.helper-text {
  color: #64748b;
  font-size: 13px;
}

@media (max-width: 900px) {
  .content-layout {
    grid-template-columns: 1fr;
  }
}
```

### admin\css\projects.css

`$lang
.content-layout {
  grid-template-columns: 1.25fr 0.75fr;
}

.form-stack {
  display: grid;
  gap: 16px;
}

.form-stack textarea {
  min-height: 120px;
}

.helper-text {
  color: #64748b;
  font-size: 13px;
}

@media (max-width: 900px) {
  .content-layout {
    grid-template-columns: 1fr;
  }
}
```

### admin\css\quizzes.css

`$lang
@import url("admin.css");

.question-builder-head{
display:flex;
justify-content:space-between;
align-items:center;
gap:12px;
}

.question-builder{
display:grid;
gap:16px;
}

.question-item{
padding:16px;
border:1px solid #e2e8f0;
border-radius:14px;
background:#f8fbff;
display:grid;
gap:14px;
}
```

### admin\css\reports.css

`$lang
@import url("admin.css");
```

### admin\css\students.css

`$lang
@import url("admin.css");

.student-detail-summary{
display:grid;
gap:18px;
}

.student-summary-section{
display:grid;
gap:10px;
}

.student-summary-actions{
display:flex;
flex-wrap:wrap;
gap:12px;
}

.student-activity-list{
display:grid;
gap:8px;
}

.student-row{
cursor:pointer;
}

.student-row:hover{
background:#f8fbff;
}

.student-modal-overlay{
position:fixed;
inset:0;
background:rgba(15,23,42,0.48);
z-index:40;
}

.student-modal-overlay[hidden],
.student-modal[hidden]{
display:none !important;
pointer-events:none;
}

.student-modal{
position:fixed;
inset:0;
display:flex;
align-items:center;
justify-content:center;
padding:24px;
z-index:41;
}

body.student-modal-open{
overflow:hidden;
}

.student-modal-card{
width:min(980px,100%);
max-height:calc(100vh - 48px);
overflow:auto;
background:#fff;
border-radius:24px;
padding:24px;
box-shadow:0 20px 60px rgba(15,23,42,0.25);
}

.student-modal-head{
display:flex;
justify-content:space-between;
align-items:flex-start;
gap:16px;
margin-bottom:20px;
}

.student-modal-head h3{
font-size:24px;
color:#0f172a;
margin-bottom:6px;
}

.student-modal-grid{
display:grid;
grid-template-columns:repeat(2,minmax(0,1fr));
gap:18px;
margin-bottom:18px;
}

.student-modal-section{
padding:18px;
border:1px solid #e2e8f0;
border-radius:18px;
background:#f8fbff;
}

.student-modal-section h4{
font-size:16px;
color:#0f172a;
margin-bottom:12px;
}

.student-detail-list{
display:grid;
gap:12px;
}

.student-detail-list div{
display:flex;
justify-content:space-between;
gap:12px;
padding-bottom:10px;
border-bottom:1px solid #dbe5f3;
}

.student-detail-list div:last-child{
border-bottom:none;
padding-bottom:0;
}

.student-detail-list span{
text-align:right;
color:#475569;
}

.student-course-list{
display:grid;
gap:12px;
}

.student-course-card{
display:grid;
gap:6px;
padding:16px;
border-radius:16px;
background:#fff;
border:1px solid #dbe5f3;
}

.student-course-card span{
display:inline-flex;
width:max-content;
padding:5px 10px;
border-radius:999px;
background:#dbeafe;
color:#1d4ed8;
font-size:12px;
font-weight:700;
text-transform:capitalize;
}

.student-course-card p,
.student-course-card small{
color:#64748b;
line-height:1.6;
}

.student-inline-list{
display:grid;
gap:8px;
color:#475569;
line-height:1.7;
}

.student-modal-actions{
display:flex;
flex-wrap:wrap;
gap:12px;
margin-top:18px;
}

@media(max-width:900px){
.student-modal-grid{
grid-template-columns:1fr;
}

.student-modal{
padding:12px;
}

.student-modal-card{
padding:18px;
}

.student-modal-head{
flex-direction:column;
}
}
```

### admin\dashboard.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Dashboard</title>
<link rel="stylesheet" href="css/admin.css">
<link rel="stylesheet" href="css/dashboard.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<header class="admin-header">
  <div class="header-left">
    <img src="../assets/crr logo.jpg" class="logo" alt="Logo">
    <h2>VIDHYA VAARADHI</h2>
  </div>
  <nav class="header-center">
    <a href="dashboard.html" class="active">Dashboard</a>
    <a href="students.html">Students</a>
    <a href="courses.html">Courses</a>
    <a href="lessons.html">Lessons</a>
    <a href="notes.html">Notes</a>
    <a href="assignments.html">Assignments</a>
    <a href="quizzes.html">Quizzes</a>
    <a href="projects.html">Projects</a>
    <a href="certificates.html">Certificates</a>
    <a href="announcements.html">Announcements</a>
    <a href="reports.html">Reports</a>
    <a href="#" onclick="adminLogout()">Logout</a>
  </nav>
  <img src="../assets/TESTIMONIAL PROFILE.jpg" class="profile" alt="Admin">
</header>
<section class="admin-body">
  <aside class="admin-sidebar">
    <ul>
      <li class="active"><a href="dashboard.html">Dashboard</a></li>
      <li><a href="students.html">Manage Students</a></li>
      <li><a href="courses.html">Manage Courses</a></li>
      <li><a href="lessons.html">Manage Lessons</a></li>
      <li><a href="notes.html">Manage Notes</a></li>
      <li><a href="assignments.html">Manage Assignments</a></li>
      <li><a href="quizzes.html">Manage Quizzes</a></li>
      <li><a href="projects.html">Manage Projects</a></li>
      <li><a href="certificates.html">Manage Certificates</a></li>
      <li><a href="announcements.html">Announcements</a></li>
      <li><a href="reports.html">Reports & Analytics</a></li>
      <li><a href="#" onclick="adminLogout()">Logout</a></li>
    </ul>
  </aside>
  <main class="admin-main">
    <section class="page-head">
      <div>
        <h1>Admin Dashboard</h1>
        <p>Track the current LMS state, open management tasks quickly, and keep courses, assessments, students, and certificates aligned.</p>
      </div>
      <div class="dashboard-head-tools">
        <div class="dashboard-head-status">
          <span id="dashboardLiveStamp" class="dashboard-live-stamp"></span>
          <button type="button" class="btn btn-secondary" id="refreshDashboardBtn">Refresh Dashboard</button>
        </div>
        <div class="panel admin-focus-card" id="adminControlCard"></div>
      </div>
    </section>
    <section class="stats-grid" id="statsGrid"></section>
    <section class="panel-grid">
      <div class="panel">
        <h3>Quick Actions</h3>
        <div class="action-row" id="quickActions"></div>
      </div>
      <div class="panel">
        <h3>Operational Snapshot</h3>
        <ul class="list-stack" id="snapshotList"></ul>
      </div>
      <div class="panel">
        <h3>Priority Board</h3>
        <ul class="list-stack" id="priorityBoard"></ul>
      </div>
    </section>
    <section class="panel-grid dashboard-lower">
      <div class="panel">
        <h3>Recent Activity Feed</h3>
        <ul class="list-stack" id="recentActivityFeed"></ul>
      </div>
      <div class="panel">
        <h3>Announcements Board</h3>
        <ul class="list-stack" id="announcementBoard"></ul>
      </div>
    </section>
    <section class="panel-grid dashboard-lower">
      <div class="panel">
        <h3>Latest Created Content</h3>
        <ul class="list-stack" id="latestContentFeed"></ul>
      </div>
      <div class="panel">
        <h3>Student Activity Snapshot</h3>
        <ul class="list-stack" id="studentActivitySnapshot"></ul>
      </div>
    </section>
    <section class="panel-grid dashboard-lower">
      <div class="panel">
        <h3>Top Enrolled Courses</h3>
        <div id="topCourseBoard" class="dashboard-progress-list"></div>
      </div>
      <div class="panel">
        <h3>Completion Watch</h3>
        <div id="completionWatch" class="dashboard-progress-list"></div>
      </div>
    </section>
    <section class="panel-grid dashboard-lower">
      <div class="table-card">
        <h3>Recent Course Status</h3>
        <table class="admin-table">
          <thead>
            <tr><th>Course</th><th>Category</th><th>Instructor</th><th>Status</th></tr>
          </thead>
          <tbody id="coursesOverview"></tbody>
        </table>
      </div>
      <div class="table-card">
        <h3>Assessment Queue</h3>
        <table class="admin-table">
          <thead>
            <tr><th>Item</th><th>Course</th><th>State</th></tr>
          </thead>
          <tbody id="assessmentQueue"></tbody>
        </table>
      </div>
    </section>
    <section class="table-card">
      <h3>Analytics Preview</h3>
      <table class="admin-table">
        <thead>
          <tr><th>Course</th><th>Enrollments</th><th>Completed</th><th>Completion Rate</th></tr>
        </thead>
        <tbody id="analyticsPreview"></tbody>
      </table>
    </section>
  </main>
</section>
<footer class="admin-footer">
  <p>Help Centre</p>
  <p>Policy</p>
  <p>&copy; 2026 Vidhya Vaaradhi LMS</p>
</footer>
<script src="../js/lms-data.js"></script>
<script src="js/admin-data.js"></script>
<script src="js/admin.js"></script>
<script src="js/dashboard.js"></script>
</body>
</html>
```

### admin\js\admin.js

`$lang
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
```

### admin\js\admin-data.js

`$lang
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
        email: 'admin@vidhyavaaradhi.edu',
        password: 'admin123',
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
        isDefault: currentAdmin.email === 'admin@vidhyavaaradhi.edu'
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
```

### admin\js\admin-login.js

`$lang
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
    var res = await fetch('/api/auth/login', {
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
```

### admin\js\admins.js

`$lang
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
```

### admin\js\announcements.js

`$lang
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
```

### admin\js\assignments.js

`$lang
var adminAssignments = [];

document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  fillCourseOptions();
  bindAssignmentEvents();
  refreshAssignments();
});

function bindAssignmentEvents() {
  document.getElementById('assignmentForm').addEventListener('submit', saveAssignmentRecord);
  document.getElementById('assignmentReset').onclick = resetAssignmentForm;
  document.getElementById('assignmentSearch').addEventListener('input', applyAssignmentFilters);
  document.getElementById('assignmentVisibilityFilter').addEventListener('change', applyAssignmentFilters);
  bindFileMeta('assignmentReferenceFile', 'assignmentReferenceMeta', 'Optional brief, rubric, or supporting file shown in the student assignment flow.');
}

async function saveAssignmentRecord(event) {
  event.preventDefault();
  var courseId = document.getElementById('assignmentCourse').value;
  var course = AdminLMS.getCourseOptions().find(function (item) { return item.id === courseId; });
  var existing = AdminLMS.getAssignments().find(function (item) {
    return item.id === document.getElementById('assignmentId').value;
  }) || {};
  var referenceAsset = await resolveFileAsset('assignmentReferenceFile');

  AdminLMS.saveAssignment({
    id: document.getElementById('assignmentId').value,
    title: document.getElementById('assignmentTitle').value.trim(),
    courseId: courseId,
    courseTitle: course ? course.title : '',
    dueDate: document.getElementById('assignmentDueDate').value,
    assignmentType: 'Assignment',
    instructions: document.getElementById('assignmentInstructions').value.trim(),
    deliverables: document.getElementById('assignmentDeliverables').value.trim(),
    expectations: document.getElementById('assignmentDeliverables').value.trim(),
    marks: Number(document.getElementById('assignmentMarks').value) || 25,
    referencePath: referenceAsset.path,
    referenceName: referenceAsset.name,
    visibility: document.getElementById('assignmentVisibility').value,
    status: existing.submissionCount > 0 ? 'submissions-open' : 'pending-submissions',
    submissionCount: existing.submissionCount || 0,
    submissionOverview: existing.submissionOverview || ''
  });

  refreshAssignments();
  resetAssignmentForm();
}

function fillCourseOptions() {
  var select = document.getElementById('assignmentCourse');
  select.innerHTML = '<option value="">Select Course</option>';
  AdminLMS.getCourseOptions().forEach(function (course) {
    select.innerHTML += '<option value="' + course.id + '">' + course.title + '</option>';
  });
}

function refreshAssignments() {
  adminAssignments = AdminLMS.getAssignments();
  applyAssignmentFilters();
}

function applyAssignmentFilters() {
  var query = document.getElementById('assignmentSearch').value.trim().toLowerCase();
  var visibility = document.getElementById('assignmentVisibilityFilter').value;

  var filtered = adminAssignments.filter(function (assignment) {
    var searchable = [assignment.title, assignment.courseTitle, assignment.instructions].join(' ').toLowerCase();
    return searchable.indexOf(query) >= 0 && (visibility === 'all' || assignment.visibility === visibility);
  });

  renderAssignments(filtered);
}

function renderAssignments(assignments) {
  var tbody = document.getElementById('assignmentsTable');
  if (!tbody) return;

  if (!assignments.length) {
    tbody.innerHTML = '<tr><td colspan="5"><div class="empty-state">No assignments match the current filters.</div></td></tr>';
    return;
  }

  tbody.innerHTML = assignments.map(function (assignment) {
    return '<tr data-clickable="true" data-assignment-id="' + escapeHtml(assignment.id) + '">' +
      '<td><strong>' + escapeHtml(assignment.title) + '</strong><br><span class="helper-text">' + (assignment.marks || 25) + ' marks</span><br><span class="helper-text">' + escapeHtml(assignment.instructions) + '</span></td>' +
      '<td>' + escapeHtml(assignment.courseTitle) + '<br><span class="helper-text">' + escapeHtml(assignment.visibility || 'visible') + '</span></td>' +
      '<td>' + escapeHtml(assignment.dueDate) + '</td>' +
      '<td><span class="badge badge-' + assignment.status + '">' + (assignment.submissionCount || 0) + ' submission(s)</span><br><span class="helper-text">' + escapeHtml(assignment.referenceName || (assignment.referencePath ? 'Reference attached' : 'No reference file')) + '</span></td>' +
      '<td class="table-actions"><button class="secondary" type="button" data-action="review">Review</button><button class="secondary" type="button" data-action="edit">Edit</button><button class="danger" type="button" data-action="delete">Delete</button></td>' +
      '</tr>';
  }).join('');

  Array.prototype.forEach.call(tbody.querySelectorAll('tr[data-assignment-id]'), function (row) {
    row.querySelectorAll('button[data-action]').forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.stopPropagation();
        var action = button.getAttribute('data-action');
        var assignmentId = row.getAttribute('data-assignment-id');
        if (action === 'review') reviewAssignment(assignmentId);
        if (action === 'edit') editAssignment(assignmentId);
        if (action === 'delete') deleteAssignmentRecord(assignmentId);
      });
    });
    row.addEventListener('click', function () {
      reviewAssignment(row.getAttribute('data-assignment-id'));
    });
  });
}

function reviewAssignment(assignmentId) {
  var assignment = AdminLMS.getAssignments().find(function (item) { return item.id === assignmentId; });
  if (!assignment || !window.AdminUI) return;

  AdminUI.openModal({
    title: assignment.title,
    subtitle: assignment.courseTitle + ' | Due ' + assignment.dueDate,
    content:
      '<div class="record-summary-grid">' +
        summaryCard('Course', assignment.courseTitle) +
        summaryCard('Due Date', assignment.dueDate) +
        summaryCard('Marks', String(assignment.marks || 25)) +
        summaryCard('Submissions', String(assignment.submissionCount || 0)) +
      '</div>' +
      '<div class="record-detail-section"><h4>Instructions</h4><div class="record-detail-list"><div>' + escapeHtml(assignment.instructions || '') + '</div></div></div>' +
      '<div class="record-detail-section"><h4>Expected Submission</h4><div class="record-detail-list"><div>' + escapeHtml(Array.isArray(assignment.deliverables) ? assignment.deliverables.join(', ') : (assignment.deliverables || assignment.expectations || 'No deliverables listed.')) + '</div></div></div>' +
      '<div class="record-detail-section"><h4>Student Reflection</h4><div class="record-detail-list"><div>' + escapeHtml(assignment.referenceName || (assignment.referencePath ? 'Reference file is attached for learners.' : 'No reference file attached.')) + '</div></div></div>' +
      '<div class="action-row">' +
        '<button type="button" class="btn btn-primary" onclick="editAssignment(\'' + escapeJs(assignment.id) + '\'); if (window.AdminUI) AdminUI.closeModal();">Edit Assignment</button>' +
        '<button type="button" class="btn btn-secondary" onclick="window.location.href=\'../assignments.html?course=' + encodeURIComponent(assignment.courseId) + '\'">Open Student Flow</button>' +
        '<button type="button" class="btn btn-danger" onclick="deleteAssignmentRecord(\'' + escapeJs(assignment.id) + '\')">Delete Assignment</button>' +
      '</div>'
  });
}

function editAssignment(assignmentId) {
  var assignment = AdminLMS.getAssignments().find(function (item) { return item.id === assignmentId; });
  if (!assignment) return;
  document.getElementById('assignmentId').value = assignment.id;
  document.getElementById('assignmentTitle').value = assignment.title;
  document.getElementById('assignmentCourse').value = assignment.courseId;
  document.getElementById('assignmentDueDate').value = assignment.dueDate;
  document.getElementById('assignmentMarks').value = assignment.marks || '';
  document.getElementById('assignmentVisibility').value = assignment.visibility || 'visible';
  document.getElementById('assignmentInstructions').value = assignment.instructions;
  document.getElementById('assignmentDeliverables').value = Array.isArray(assignment.deliverables) ? assignment.deliverables.join('\n') : (assignment.deliverables || assignment.expectations || '');
  setFileMetaState('assignmentReferenceFile', 'assignmentReferenceMeta', assignment.referencePath || '', assignment.referenceName || '', 'Optional brief, rubric, or supporting file shown in the student assignment flow.');
}

function resetAssignmentForm() {
  document.getElementById('assignmentForm').reset();
  document.getElementById('assignmentId').value = '';
  setFileMetaState('assignmentReferenceFile', 'assignmentReferenceMeta', '', '', 'Optional brief, rubric, or supporting file shown in the student assignment flow.');
}

function deleteAssignmentRecord(assignmentId) {
  if (!confirm('Delete this assignment from the admin workspace?')) return;
  AdminLMS.deleteAssignment(assignmentId);
  refreshAssignments();
  resetAssignmentForm();
  if (window.AdminUI) AdminUI.closeModal();
}

function bindFileMeta(inputId, metaId, emptyMessage) {
  var input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('change', function () {
    var file = input.files && input.files[0];
    setFileMetaState(inputId, metaId, '', file ? file.name : '', emptyMessage);
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

function setFileMetaState(inputId, metaId, currentPath, currentName, message) {
  var input = document.getElementById(inputId);
  var meta = document.getElementById(metaId);
  if (!input || !meta) return;
  input.value = '';
  input.dataset.current = currentPath || '';
  input.dataset.name = currentName || '';
  meta.textContent = currentName ? ('Current file: ' + currentName + '. Choose a new file to replace it.') : message;
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
```

### admin\js\certificates.js

`$lang
document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  fillCertificateOptions();
  bindCertificateEvents();
  renderCertificates();
});

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
      (certificate.templateImage || certificate.image ? '<div class="record-detail-section"><h4>Template Preview</h4><img class="preview-thumb" src="' + escapeHtml(certificate.templateImage || certificate.image) + '" alt="Certificate template preview"></div>' : '') +
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
    preview.src = path;
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
```

### admin\js\courses.js

`$lang
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
```

### admin\js\dashboard.js

`$lang
document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  var summary = AdminLMS.getDashboardSummary();
  var reports = AdminLMS.getReports();
  var students = AdminLMS.getStudents();
  var admins = AdminLMS.getAdmins();
  var courses = AdminLMS.getCourses();
  var assignments = AdminLMS.getAssignments();
  var quizzes = AdminLMS.getQuizzes();
  var lessons = AdminLMS.getLessons();
  var notes = AdminLMS.getNotes();
  var projects = AdminLMS.getProjects();
  var certificates = AdminLMS.getCertificates();
  var announcements = AdminLMS.getAnnouncements();
  var statsGrid = document.getElementById('statsGrid');
  var quickActions = document.getElementById('quickActions');
  var snapshotList = document.getElementById('snapshotList');
  var recentActivityFeed = document.getElementById('recentActivityFeed');
  var announcementBoard = document.getElementById('announcementBoard');
  var latestContentFeed = document.getElementById('latestContentFeed');
  var studentActivitySnapshot = document.getElementById('studentActivitySnapshot');
  var coursesOverview = document.getElementById('coursesOverview');
  var assessmentQueue = document.getElementById('assessmentQueue');
  var analyticsPreview = document.getElementById('analyticsPreview');
  var adminControlCard = document.getElementById('adminControlCard');
  var priorityBoard = document.getElementById('priorityBoard');
  var topCourseBoard = document.getElementById('topCourseBoard');
  var completionWatch = document.getElementById('completionWatch');
  var dashboardLiveStamp = document.getElementById('dashboardLiveStamp');
  var refreshDashboardBtn = document.getElementById('refreshDashboardBtn');

  if (refreshDashboardBtn) {
    refreshDashboardBtn.addEventListener('click', function () {
      window.location.reload();
    });
  }

  renderAdminControlCard(adminControlCard, summary, admins);
  renderDashboardLiveStamp(dashboardLiveStamp);
  renderAnalyticsCards(statsGrid, summary, {
    courses: courses,
    assignments: assignments,
    quizzes: quizzes,
    lessons: lessons,
    notes: notes,
    projects: projects,
    certificates: certificates,
    announcements: announcements,
    students: students
  });
  renderQuickActions(quickActions);
  renderOperationalSnapshot(snapshotList, summary, students, assignments, quizzes, certificates);
  renderPriorityBoard(priorityBoard, summary, courses, students, assignments, quizzes, certificates, announcements);
  renderRecentActivity(recentActivityFeed, summary.recentActivity || []);
  renderAnnouncements(announcementBoard, announcements);
  renderLatestContent(latestContentFeed, courses, lessons, notes, assignments, quizzes, projects, announcements);
  renderStudentSnapshot(studentActivitySnapshot, students);
  renderTopCourseBoard(topCourseBoard, reports.coursePopularity || []);
  renderCompletionWatch(completionWatch, students);
  renderCourseOverview(coursesOverview, courses, reports.coursePopularity || []);
  renderAssessmentQueue(assessmentQueue, assignments, quizzes, projects);
  renderAnalyticsPreview(analyticsPreview, reports.coursePopularity || []);
});

function renderDashboardLiveStamp(container) {
  if (!container) return;
  container.textContent = 'Live LMS snapshot | ' + formatDateTime(new Date().toISOString());
}

function renderAdminControlCard(container, summary, admins) {
  if (!container) return;
  var currentAdmin = AdminLMS.getCurrentAdmin ? AdminLMS.getCurrentAdmin() : null;
  var lastLogin = currentAdmin && currentAdmin.loggedInAt ? formatDateTime(currentAdmin.loggedInAt) : 'Active session';

  container.innerHTML =
    '<div class="admin-focus-eyebrow">Admin Workspace</div>' +
    '<h3>' + escapeHtml(currentAdmin ? currentAdmin.name : 'Admin Session') + '</h3>' +
    '<p>' + escapeHtml(currentAdmin && currentAdmin.email ? currentAdmin.email : 'Control center is connected to the live LMS store.') + '</p>' +
    '<div class="admin-focus-meta">' +
      '<span>' + summary.totalAdmins + ' admin account(s)</span>' +
      '<span>' + summary.totalStudents + ' student record(s)</span>' +
      '<span>' + lastLogin + '</span>' +
    '</div>';
}

function renderAnalyticsCards(container, summary, datasets) {
  if (!container) return;

  var cards = [
    {
      key: 'students',
      title: 'Students',
      value: summary.totalStudents,
      note: summary.atRiskStudents + ' need attention',
      meta: summary.activeEnrollments + ' active enrollments',
      description: 'Live learner roster from registered users and student progress state.'
    },
    {
      key: 'courses',
      title: 'Courses',
      value: summary.totalCourses,
      note: datasets.courses.filter(function (course) { return course.status === 'published'; }).length + ' published',
      meta: datasets.courses.reduce(function (sum, course) {
        return sum + course.lessonsCount + course.notesCount + course.assignmentsCount + course.quizzesCount + course.projectsCount;
      }, 0) + ' linked content items',
      description: 'Managed catalog with lesson, note, assignment, quiz, and project depth.'
    },
    {
      key: 'lessons',
      title: 'Lessons',
      value: summary.lessonsCount,
      note: datasets.lessons.slice(0, 1).map(function (lesson) { return lesson.title; })[0] || 'No lessons yet',
      meta: 'Structured across ' + summary.totalCourses + ' course(s)',
      description: 'Actual lesson count pulled from published and admin-created modules.'
    },
    {
      key: 'notes',
      title: 'Notes',
      value: summary.notesCount,
      note: datasets.notes.filter(function (note) { return note.resourcePath; }).length + ' with resources',
      meta: datasets.notes.slice(0, 1).map(function (note) { return note.title; })[0] || 'No notes yet',
      description: 'Course notes and reference materials visible in the LMS.'
    },
    {
      key: 'assignments',
      title: 'Assignments',
      value: datasets.assignments.length,
      note: summary.pendingAssignments + ' awaiting submissions',
      meta: datasets.assignments.filter(function (assignment) { return assignment.submissionCount > 0; }).length + ' with activity',
      description: 'Assignment workflows tied to real course records and learner submissions.'
    },
    {
      key: 'quizzes',
      title: 'Quizzes',
      value: datasets.quizzes.length,
      note: summary.quizActivity + ' attempt(s) tracked',
      meta: datasets.quizzes.filter(function (quiz) { return quiz.status === 'draft'; }).length + ' drafts',
      description: 'Quiz banks, completion activity, and review-ready checks from live data.'
    },
    {
      key: 'projects',
      title: 'Projects',
      value: datasets.projects.length,
      note: datasets.students.reduce(function (sum, student) { return sum + (student.projectActivityCount || 0); }, 0) + ' learner submission path(s)',
      meta: datasets.projects.slice(0, 1).map(function (project) { return project.title; })[0] || 'No projects yet',
      description: 'Practical workspaces connected to actual courses and student progress.'
    },
    {
      key: 'certificates',
      title: 'Certificates',
      value: summary.issuedCertificates,
      note: datasets.students.filter(function (student) { return student.certificatesCount > 0; }).length + ' learner(s) certified',
      meta: datasets.certificates.slice(0, 1).map(function (certificate) { return certificate.courseTitle; })[0] || 'No certificates yet',
      description: 'Issued certificate records derived from completed LMS course journeys.'
    },
    {
      key: 'announcements',
      title: 'Announcements',
      value: summary.announcementsCount,
      note: datasets.announcements.slice(0, 1).map(function (announcement) { return announcement.category; })[0] || 'No notices posted',
      meta: datasets.announcements.slice(0, 1).map(function (announcement) { return announcement.title; })[0] || 'Publish the first announcement',
      description: 'Admin-posted notices from the shared announcement board.'
    },
    {
      key: 'reports',
      title: 'Reports & Analytics',
      value: summary.reportsInsightsCount,
      note: summary.atRiskStudents + ' intervention signal(s)',
      meta: (AdminLMS.getReports().coursePopularity || []).filter(function (course) { return course.enrolled > 0; }).length + ' course trend(s)',
      description: 'Insights generated from live enrollments, completion, and assessment data.'
    },
    {
      key: 'admins',
      title: 'Admins',
      value: summary.totalAdmins,
      note: admins.slice(0, 1).map(function (admin) { return admin.name; })[0] || 'No admin accounts',
      meta: admins.filter(function (admin) { return admin.isDefault; }).length + ' protected default account(s)',
      description: 'Administrative accounts stored in the frontend LMS admin system.'
    }
  ];

  container.innerHTML = cards.map(function (card) {
    return '' +
      '<article class="stat-card dashboard-stat dashboard-stat-' + card.key + '">' +
        '<div class="dashboard-stat-head">' +
          '<h3>' + escapeHtml(card.title) + '</h3>' +
          '<span class="dashboard-stat-meta">' + escapeHtml(card.meta) + '</span>' +
        '</div>' +
        '<p>' + card.value + '</p>' +
        '<strong class="dashboard-stat-note">' + escapeHtml(card.note) + '</strong>' +
        '<span>' + escapeHtml(card.description) + '</span>' +
      '</article>';
  }).join('');
}

function renderQuickActions(container) {
  if (!container) return;
  container.innerHTML = AdminLMS.getQuickActions().map(function (action) {
    return '<a class="btn btn-primary quick-action-btn" href="' + action.href + '">' + escapeHtml(action.label) + '</a>';
  }).join('');
}

function renderOperationalSnapshot(container, summary, students, assignments, quizzes, certificates) {
  if (!container) return;

  var activeStudents = students.filter(function (student) { return student.status === 'active'; }).length;
  var completedLearners = students.filter(function (student) { return student.completedCourses > 0; }).length;
  var reviewReadyQuizzes = quizzes.filter(function (quiz) { return quiz.status === 'review-ready'; }).length;
  var submittedAssignments = assignments.filter(function (assignment) { return assignment.submissionCount > 0; }).length;

  container.innerHTML = [
    activeStudents + ' student account(s) are currently active in the LMS roster.',
    completedLearners + ' learner(s) have completed at least one course journey.',
    submittedAssignments + ' assignment workflow(s) already contain real learner submissions.',
    reviewReadyQuizzes + ' quiz record(s) are ready for review or follow-up.',
    certificates.length + ' certificate record(s) are available across all student profiles.',
    summary.atRiskStudents + ' learner(s) are below the 50% progress threshold.'
  ].map(function (item) {
    return '<li>' + escapeHtml(item) + '</li>';
  }).join('');
}

function renderPriorityBoard(container, summary, courses, students, assignments, quizzes, certificates, announcements) {
  if (!container) return;

  var draftCourses = courses.filter(function (course) { return course.status === 'draft'; }).length;
  var hiddenCertificates = certificates.filter(function (certificate) { return certificate.visible === false; }).length;
  var inactiveStudents = students.filter(function (student) { return student.status === 'inactive'; }).length;
  var quietAnnouncements = announcements.length ? announcements.filter(function (announcement) {
    return String(announcement.audience || '').toLowerCase().indexOf('student') === -1;
  }).length : 0;

  var priorities = [
    {
      tone: summary.atRiskStudents ? 'warning' : 'good',
      title: 'Learner Support',
      detail: summary.atRiskStudents
        ? (summary.atRiskStudents + ' student(s) are below 50% progress and may need follow-up.')
        : 'No student is currently flagged below the intervention threshold.'
    },
    {
      tone: summary.pendingAssignments ? 'warning' : 'good',
      title: 'Assignment Queue',
      detail: summary.pendingAssignments
        ? (summary.pendingAssignments + ' assignment(s) are still waiting for submissions.')
        : 'Assignment workflows are not showing pending submission pressure right now.'
    },
    {
      tone: draftCourses ? 'neutral' : 'good',
      title: 'Publishing Check',
      detail: draftCourses
        ? (draftCourses + ' course(s) are still saved as draft and not visible in the main catalog.')
        : 'All current courses are in published state.'
    },
    {
      tone: hiddenCertificates || inactiveStudents || quietAnnouncements ? 'neutral' : 'good',
      title: 'Admin Cleanup',
      detail: hiddenCertificates + ' hidden certificate(s), ' + inactiveStudents + ' inactive student record(s), and ' + quietAnnouncements + ' internal-only announcement(s) are still in admin control.'
    },
    {
      tone: quizzes.filter(function (quiz) { return quiz.status === 'draft'; }).length ? 'neutral' : 'good',
      title: 'Assessment Readiness',
      detail: quizzes.filter(function (quiz) { return quiz.status === 'draft'; }).length + ' quiz draft(s) remain outside the active learner flow.'
    }
  ];

  container.innerHTML = priorities.map(function (item) {
    return '<li class="dashboard-priority dashboard-priority-' + item.tone + '"><strong>' + escapeHtml(item.title) + '</strong><br><span class="helper-text">' + escapeHtml(item.detail) + '</span></li>';
  }).join('');
}

function renderRecentActivity(container, items) {
  if (!container) return;
  if (!items.length) {
    container.innerHTML = '<li class="empty-state">No recent admin-visible activity yet.</li>';
    return;
  }

  container.innerHTML = items.map(function (item) {
    return '<li><strong>' + escapeHtml(item.title) + '</strong><br><span class="helper-text">' + escapeHtml(item.description) + '</span><br><span class="helper-text">' + escapeHtml(item.meta) + '</span></li>';
  }).join('');
}

function renderAnnouncements(container, announcements) {
  if (!container) return;
  if (!announcements.length) {
    container.innerHTML = '<li class="empty-state">No announcements posted yet. Use the announcement module to publish academic notices.</li>';
    return;
  }

  container.innerHTML = announcements.slice(0, 4).map(function (announcement) {
    return '<li><strong>' + escapeHtml(announcement.title) + '</strong><br><span class="helper-text">' + escapeHtml(announcement.category) + ' | ' + escapeHtml(announcement.publishDate) + '</span><br><span class="helper-text">' + escapeHtml(announcement.content) + '</span></li>';
  }).join('');
}

function renderLatestContent(container, courses, lessons, notes, assignments, quizzes, projects, announcements) {
  if (!container) return;

  var contentItems = [];

  contentItems = contentItems
    .concat(courses.slice(0, 2).map(function (course) {
      return { label: 'Course', title: course.title, meta: course.category + ' | ' + course.status };
    }))
    .concat(lessons.slice(0, 2).map(function (lesson) {
      return { label: 'Lesson', title: lesson.title, meta: lesson.courseTitle + ' | ' + lesson.moduleTitle };
    }))
    .concat(notes.slice(0, 1).map(function (note) {
      return { label: 'Note', title: note.title, meta: note.courseTitle + ' | ' + note.category };
    }))
    .concat(assignments.slice(0, 1).map(function (assignment) {
      return { label: 'Assignment', title: assignment.title, meta: assignment.courseTitle + ' | ' + assignment.status };
    }))
    .concat(quizzes.slice(0, 1).map(function (quiz) {
      return { label: 'Quiz', title: quiz.title, meta: quiz.courseTitle + ' | ' + quiz.status };
    }))
    .concat(projects.slice(0, 1).map(function (project) {
      return { label: 'Project', title: project.title, meta: project.courseTitle + ' | ' + project.difficulty };
    }))
    .concat(announcements.slice(0, 1).map(function (announcement) {
      return { label: 'Announcement', title: announcement.title, meta: announcement.category + ' | ' + announcement.publishDate };
    }))
    .slice(0, 6);

  if (!contentItems.length) {
    container.innerHTML = '<li class="empty-state">Admin-created content will appear here as soon as courses, lessons, notes, or announcements are added.</li>';
    return;
  }

  container.innerHTML = contentItems.map(function (item) {
    return '<li><span class="content-type-pill">' + escapeHtml(item.label) + '</span><br><strong>' + escapeHtml(item.title) + '</strong><br><span class="helper-text">' + escapeHtml(item.meta) + '</span></li>';
  }).join('');
}

function renderStudentSnapshot(container, students) {
  if (!container) return;
  if (!students.length) {
    container.innerHTML = '<li class="empty-state">No student activity is available yet.</li>';
    return;
  }

  var ranked = students.slice().sort(function (a, b) {
    if (a.needsAttention !== b.needsAttention) return a.needsAttention ? -1 : 1;
    return (b.averageProgress || 0) - (a.averageProgress || 0);
  }).slice(0, 5);

  container.innerHTML = ranked.map(function (student) {
    var focus = student.activeCourse ? student.activeCourse.title + ' at ' + student.activeCourse.progress + '%' : 'No current enrollment';
    return '<li><strong>' + escapeHtml(student.name) + '</strong><br><span class="helper-text">' + escapeHtml(student.department) + ' | ' + escapeHtml(student.semester) + '</span><br><span class="helper-text">' + escapeHtml(focus) + '</span></li>';
  }).join('');
}

function renderTopCourseBoard(container, coursePopularity) {
  if (!container) return;
  if (!coursePopularity.length) {
    container.innerHTML = '<div class="empty-state">Top course trends will appear once students start enrolling.</div>';
    return;
  }

  var maxEnrolled = coursePopularity.reduce(function (max, item) {
    return Math.max(max, Number(item.enrolled) || 0);
  }, 0) || 1;

  container.innerHTML = coursePopularity.slice(0, 5).map(function (item) {
    var enrollmentWidth = Math.max(12, Math.round(((Number(item.enrolled) || 0) / maxEnrolled) * 100));
    return '' +
      '<article class="dashboard-progress-card">' +
        '<div class="dashboard-progress-head">' +
          '<strong>' + escapeHtml(item.courseTitle) + '</strong>' +
          '<span>' + item.enrolled + ' enrolled</span>' +
        '</div>' +
        '<div class="dashboard-progress-track"><span style="width:' + enrollmentWidth + '%"></span></div>' +
        '<p>' + item.completed + ' completed | ' + item.completionRate + '% completion rate</p>' +
      '</article>';
  }).join('');
}

function renderCompletionWatch(container, students) {
  if (!container) return;
  if (!students.length) {
    container.innerHTML = '<div class="empty-state">Student completion watch will appear once learner data is available.</div>';
    return;
  }

  var watchList = students.slice().sort(function (a, b) {
    if (a.needsAttention !== b.needsAttention) return a.needsAttention ? -1 : 1;
    return (a.averageProgress || 0) - (b.averageProgress || 0);
  }).slice(0, 5);

  container.innerHTML = watchList.map(function (student) {
    var progressWidth = Math.max(10, Number(student.averageProgress) || 0);
    return '' +
      '<article class="dashboard-progress-card">' +
        '<div class="dashboard-progress-head">' +
          '<strong>' + escapeHtml(student.name) + '</strong>' +
          '<span>' + escapeHtml(student.averageProgress + '% avg') + '</span>' +
        '</div>' +
        '<div class="dashboard-progress-track"><span style="width:' + progressWidth + '%"></span></div>' +
        '<p>' + escapeHtml((student.activeCourse ? student.activeCourse.title : 'No active course') + ' | ' + (student.needsAttention ? 'Needs attention' : 'On track')) + '</p>' +
      '</article>';
  }).join('');
}

function renderCourseOverview(container, courses, popularity) {
  if (!container) return;
  var popularityMap = {};
  popularity.forEach(function (item) {
    popularityMap[item.courseTitle] = item;
  });

  container.innerHTML = courses.slice(0, 6).map(function (course) {
    var analytics = popularityMap[course.title] || { enrolled: 0, completed: 0 };
    return '<tr>' +
      '<td>' + escapeHtml(course.title) + '<br><span class="helper-text">' + analytics.enrolled + ' enrolled | ' + analytics.completed + ' completed</span></td>' +
      '<td>' + escapeHtml(course.category) + '</td>' +
      '<td>' + escapeHtml(course.instructor) + '</td>' +
      '<td><span class="badge badge-' + escapeHtml(course.status) + '">' + escapeHtml(course.status) + '</span></td>' +
    '</tr>';
  }).join('');
}

function renderAssessmentQueue(container, assignments, quizzes, projects) {
  if (!container) return;

  var queueItems = assignments.slice().sort(function (a, b) {
    return String(a.dueDate || '').localeCompare(String(b.dueDate || ''));
  }).slice(0, 3).map(function (assignment) {
    return { name: assignment.title, course: assignment.courseTitle, state: assignment.status };
  }).concat(
    quizzes.slice(0, 2).map(function (quiz) {
      return { name: quiz.title, course: quiz.courseTitle, state: quiz.status };
    }),
    projects.slice(0, 1).map(function (project) {
      return { name: project.title, course: project.courseTitle, state: 'active' };
    })
  );

  if (!queueItems.length) {
    container.innerHTML = '<tr><td colspan="3"><div class="empty-state">No active assignments, quizzes, or projects are waiting in the queue.</div></td></tr>';
    return;
  }

  container.innerHTML = queueItems.map(function (item) {
    return '<tr><td>' + escapeHtml(item.name) + '</td><td>' + escapeHtml(item.course) + '</td><td><span class="badge badge-' + escapeHtml(item.state).replace(/\s+/g, '-') + '">' + escapeHtml(String(item.state).replace(/-/g, ' ')) + '</span></td></tr>';
  }).join('');
}

function renderAnalyticsPreview(container, coursePopularity) {
  if (!container) return;
  if (!coursePopularity.length) {
    container.innerHTML = '<tr><td colspan="4"><div class="empty-state">Analytics will appear once courses and enrollments are available.</div></td></tr>';
    return;
  }

  container.innerHTML = coursePopularity.slice(0, 6).map(function (item) {
    return '<tr><td>' + escapeHtml(item.courseTitle) + '</td><td>' + item.enrolled + '</td><td>' + item.completed + '</td><td>' + item.completionRate + '%</td></tr>';
  }).join('');
}

function formatDateTime(value) {
  var date = new Date(value);
  if (isNaN(date.getTime())) return 'Active session';
  return date.toLocaleString();
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
```

### admin\js\lessons.js

`$lang
var adminLessons = [];

document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  fillCourseOptions();
  fillModuleOptions();
  bindLessonEvents();
  refreshLessons();
});

function bindLessonEvents() {
  document.getElementById('lessonCourse').addEventListener('change', fillModuleOptions);
  document.getElementById('lessonForm').addEventListener('submit', saveLessonRecord);
  document.getElementById('lessonReset').onclick = resetLessonForm;
  document.getElementById('lessonSearch').addEventListener('input', applyLessonFilters);
  document.getElementById('lessonSort').addEventListener('change', applyLessonFilters);
  bindImageUploadPreview('lessonImageFile', 'lessonImagePreview', 'lessonImageMeta', 'Optional lesson cover for the student course player.');
  bindVideoUploadPreview('lessonVideoFile', 'lessonVideoPreview', 'lessonVideoMeta', 'Upload local lesson media for the student course player.');
  bindFileMeta('lessonResourceFile', 'lessonResourceMeta', 'Optional supporting file or resource linked to this lesson.');
}

async function saveLessonRecord(event) {
  event.preventDefault();

  var customModule = document.getElementById('lessonCustomModule').value.trim();
  var selectedModuleTitle = getSelectedText('lessonModule');
  var moduleId = document.getElementById('lessonModule').value || (customModule ? slugify(customModule) : null);
  var imageAsset = await resolveFileAsset('lessonImageFile');
  var videoAsset = await resolveFileAsset('lessonVideoFile');
  var resourceAsset = await resolveFileAsset('lessonResourceFile');

  AdminLMS.saveLesson({
    id: document.getElementById('lessonId').value,
    title: document.getElementById('lessonTitle').value.trim(),
    courseId: document.getElementById('lessonCourse').value,
    moduleId: moduleId,
    moduleTitle: customModule || selectedModuleTitle || 'Learning Module',
    position: Number(document.getElementById('lessonPosition').value),
    duration: document.getElementById('lessonDuration').value.trim(),
    image: imageAsset.path,
    imageName: imageAsset.name,
    videoUrl: videoAsset.path,
    videoName: videoAsset.name,
    resourcePath: resourceAsset.path,
    resourceName: resourceAsset.name,
    mediaType: videoAsset.path ? 'Video' : 'Reading',
    description: document.getElementById('lessonDescription').value.trim(),
    content: document.getElementById('lessonContent').value.trim()
  });

  refreshLessons();
  resetLessonForm();
}

function fillCourseOptions() {
  var select = document.getElementById('lessonCourse');
  select.innerHTML = '<option value="">Select Course</option>';
  AdminLMS.getCourseOptions().forEach(function (course) {
    select.innerHTML += '<option value="' + course.id + '">' + course.title + '</option>';
  });

  var params = new URLSearchParams(window.location.search);
  var courseId = params.get('course');
  if (courseId) {
    select.value = courseId;
  }
}

function fillModuleOptions() {
  var courseId = document.getElementById('lessonCourse').value;
  var select = document.getElementById('lessonModule');
  select.innerHTML = '<option value="">Create / Use Default Module</option>';
  AdminLMS.getModuleOptions(courseId).forEach(function (module) {
    select.innerHTML += '<option value="' + module.id + '">' + module.title + '</option>';
  });
}

function refreshLessons() {
  adminLessons = AdminLMS.getLessons();
  applyLessonFilters();
}

function applyLessonFilters() {
  var query = document.getElementById('lessonSearch').value.trim().toLowerCase();
  var sort = document.getElementById('lessonSort').value;

  var filtered = adminLessons.filter(function (lesson) {
    return [lesson.title, lesson.courseTitle, lesson.moduleTitle, lesson.description].join(' ').toLowerCase().indexOf(query) >= 0;
  });

  filtered.sort(function (a, b) {
    if (sort === 'course') return String(a.courseTitle || '').localeCompare(String(b.courseTitle || ''));
    if (sort === 'module') return String(a.moduleTitle || '').localeCompare(String(b.moduleTitle || ''));
    if (sort === 'order') return (a.position || 0) - (b.position || 0);
    return String(b.id || '').localeCompare(String(a.id || ''));
  });

  renderLessons(filtered);
}

function renderLessons(lessons) {
  var tbody = document.getElementById('lessonsTable');
  if (!tbody) return;

  if (!lessons.length) {
    tbody.innerHTML = '<tr><td colspan="5"><div class="empty-state">No lessons match the current filters.</div></td></tr>';
    return;
  }

  tbody.innerHTML = lessons.map(function (lesson) {
    return '<tr data-clickable="true" data-lesson-id="' + escapeHtml(lesson.id) + '">' +
      '<td><strong>' + escapeHtml(lesson.title) + '</strong><br><span class="helper-text">' + escapeHtml(lesson.description || '') + '</span><br><span class="helper-text">' + escapeHtml(lesson.duration || '') + '</span></td>' +
      '<td>' + escapeHtml(lesson.courseTitle || lesson.courseId) + '</td>' +
      '<td>' + escapeHtml(lesson.moduleTitle || 'Learning Module') + '</td>' +
      '<td>' + lesson.position + '<br><span class="helper-text">' + (lesson.videoUrl ? 'Video ready' : lesson.resourcePath ? 'Resource attached' : 'Text lesson') + '</span></td>' +
      '<td class="table-actions"><button class="secondary" type="button" data-action="review">Review</button><button class="secondary" type="button" data-action="edit">Edit</button><button class="danger" type="button" data-action="delete">Delete</button></td>' +
      '</tr>';
  }).join('');

  Array.prototype.forEach.call(tbody.querySelectorAll('tr[data-lesson-id]'), function (row) {
    row.querySelectorAll('button[data-action]').forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.stopPropagation();
        var action = button.getAttribute('data-action');
        var lessonId = row.getAttribute('data-lesson-id');
        if (action === 'review') reviewLesson(lessonId);
        if (action === 'edit') editLesson(lessonId);
        if (action === 'delete') deleteLessonRecord(lessonId);
      });
    });
    row.addEventListener('click', function () {
      reviewLesson(row.getAttribute('data-lesson-id'));
    });
  });
}

function reviewLesson(lessonId) {
  var lesson = AdminLMS.getLessons().find(function (item) { return item.id === lessonId; });
  if (!lesson || !window.AdminUI) return;

  AdminUI.openModal({
    title: lesson.title,
    subtitle: lesson.courseTitle + ' | ' + lesson.moduleTitle,
    content:
      '<div class="record-summary-grid">' +
        summaryCard('Course', lesson.courseTitle) +
        summaryCard('Module', lesson.moduleTitle || 'Learning Module') +
        summaryCard('Order', String(lesson.position || 1)) +
        summaryCard('Duration', lesson.duration || 'Not set') +
      '</div>' +
      '<div class="record-detail-section"><h4>Lesson Summary</h4><div class="record-detail-list"><div>' + escapeHtml(lesson.description || 'No summary added yet.') + '</div></div></div>' +
      '<div class="record-detail-section"><h4>Lesson Content</h4><div class="record-detail-list"><div>' + escapeHtml(lesson.content || 'No lesson content yet.') + '</div></div></div>' +
      '<div class="record-detail-section"><h4>Media Reflection</h4><div class="record-detail-list">' +
        '<div>' + escapeHtml(lesson.videoUrl ? 'Student player will use the uploaded lesson video.' : 'Student player will use the lesson or course image preview.') + '</div>' +
        '<div>' + escapeHtml(lesson.resourcePath ? 'A lesson resource is attached for supporting study material.' : 'No supporting file is attached.') + '</div>' +
      '</div></div>' +
      '<div class="action-row">' +
        '<button type="button" class="btn btn-primary" onclick="editLesson(\'' + escapeJs(lesson.id) + '\'); if (window.AdminUI) AdminUI.closeModal();">Edit Lesson</button>' +
        '<button type="button" class="btn btn-secondary" onclick="window.location.href=\'../course-player.html?course=' + encodeURIComponent(lesson.courseId) + '\'">Open Course Player</button>' +
        '<button type="button" class="btn btn-danger" onclick="deleteLessonRecord(\'' + escapeJs(lesson.id) + '\')">Delete Lesson</button>' +
      '</div>'
  });
}

function editLesson(lessonId) {
  var lesson = AdminLMS.getLessons().find(function (item) { return item.id === lessonId; });
  if (!lesson) return;

  document.getElementById('lessonId').value = lesson.id;
  document.getElementById('lessonTitle').value = lesson.title;
  document.getElementById('lessonCourse').value = lesson.courseId;
  fillModuleOptions();
  document.getElementById('lessonModule').value = lesson.moduleId || '';
  document.getElementById('lessonCustomModule').value = !lesson.moduleId ? (lesson.moduleTitle || '') : '';
  document.getElementById('lessonPosition').value = lesson.position;
  document.getElementById('lessonDuration').value = lesson.duration || '';
  document.getElementById('lessonDescription').value = lesson.description || '';
  document.getElementById('lessonContent').value = lesson.content || '';

  setImageUploadState('lessonImageFile', 'lessonImagePreview', 'lessonImageMeta', lesson.image || '', 'Optional lesson cover for the student course player.');
  setVideoUploadState('lessonVideoFile', 'lessonVideoPreview', 'lessonVideoMeta', lesson.videoUrl || '', 'Upload local lesson media for the student course player.');
  setFileMetaState('lessonResourceFile', 'lessonResourceMeta', lesson.resourcePath || '', lesson.resourceName || '', 'Optional supporting file or resource linked to this lesson.');
}

function resetLessonForm() {
  document.getElementById('lessonForm').reset();
  document.getElementById('lessonId').value = '';
  fillModuleOptions();
  clearUploadState('lessonImageFile', 'lessonImagePreview', 'lessonImageMeta', 'Optional lesson cover for the student course player.');
  clearVideoState('lessonVideoFile', 'lessonVideoPreview', 'lessonVideoMeta', 'Upload local lesson media for the student course player.');
  setFileMetaState('lessonResourceFile', 'lessonResourceMeta', '', '', 'Optional supporting file or resource linked to this lesson.');
}

function getSelectedText(id) {
  var select = document.getElementById(id);
  if (!select) return '';
  return select.options[select.selectedIndex] ? select.options[select.selectedIndex].text : '';
}

function deleteLessonRecord(lessonId) {
  if (!confirm('Delete this lesson from the admin workspace?')) return;
  AdminLMS.deleteLesson(lessonId);
  refreshLessons();
  resetLessonForm();
  if (window.AdminUI) AdminUI.closeModal();
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
}

function bindVideoUploadPreview(inputId, previewId, metaId, emptyMessage) {
  var input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('change', function () {
    var file = input.files && input.files[0];
    var preview = document.getElementById(previewId);
    var meta = document.getElementById(metaId);
    if (!file || !preview || !meta) {
      clearVideoState(inputId, previewId, metaId, emptyMessage);
      return;
    }
    meta.textContent = file.name + ' selected';
    preview.hidden = false;
    preview.src = URL.createObjectURL(file);
  });
}

function bindFileMeta(inputId, metaId, emptyMessage) {
  var input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('change', function () {
    var file = input.files && input.files[0];
    setFileMetaState(inputId, metaId, '', file ? file.name : '', emptyMessage);
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
  meta.textContent = path ? 'Current image connected. Choose a new file to replace it.' : message;
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

function setVideoUploadState(inputId, previewId, metaId, path, message) {
  var input = document.getElementById(inputId);
  var preview = document.getElementById(previewId);
  var meta = document.getElementById(metaId);
  if (!input || !preview || !meta) return;
  input.value = '';
  input.dataset.current = path || '';
  meta.textContent = path ? 'Current video connected. Choose a new file to replace it.' : message;
  if (path) {
    preview.hidden = false;
    preview.src = path;
  } else {
    preview.hidden = true;
    preview.removeAttribute('src');
  }
}

function clearVideoState(inputId, previewId, metaId, message) {
  setVideoUploadState(inputId, previewId, metaId, '', message);
}

function setFileMetaState(inputId, metaId, currentPath, currentName, message) {
  var input = document.getElementById(inputId);
  var meta = document.getElementById(metaId);
  if (!input || !meta) return;
  input.value = '';
  input.dataset.current = currentPath || '';
  input.dataset.name = currentName || '';
  meta.textContent = currentName ? ('Current file: ' + currentName + '. Choose a new file to replace it.') : message;
}

function summaryCard(label, value) {
  return '<div class="record-summary-card"><strong>' + escapeHtml(label) + '</strong><span>' + escapeHtml(value) + '</span></div>';
}

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || ('module-' + Date.now());
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
```

### admin\js\notes.js

`$lang
var adminNotes = [];

document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  fillCourseOptions();
  fillModuleOptions();
  bindNoteEvents();
  refreshNotes();
});

function bindNoteEvents() {
  document.getElementById('noteCourse').addEventListener('change', fillModuleOptions);
  document.getElementById('noteForm').addEventListener('submit', saveNoteRecord);
  document.getElementById('noteReset').onclick = resetNoteForm;
  document.getElementById('noteSearch').addEventListener('input', applyNoteFilters);
  document.getElementById('noteCategoryFilter').addEventListener('change', applyNoteFilters);
  bindFileMeta('noteResourceFile', 'noteResourceMeta', 'Upload PDF, study material, or academic note file for students.');
}

async function saveNoteRecord(event) {
  event.preventDefault();
  var resourceAsset = await resolveFileAsset('noteResourceFile');

  AdminLMS.saveNote({
    id: document.getElementById('noteId').value,
    title: document.getElementById('noteTitle').value.trim(),
    courseId: document.getElementById('noteCourse').value,
    moduleId: document.getElementById('noteModule').value,
    moduleTitle: getSelectedText('noteModule') || 'General Module',
    type: document.getElementById('noteType').value,
    category: document.getElementById('noteType').value,
    summary: document.getElementById('noteSummary').value.trim(),
    description: document.getElementById('noteSummary').value.trim(),
    content: document.getElementById('noteContent').value.trim(),
    resourcePath: resourceAsset.path,
    resourceName: resourceAsset.name
  });

  refreshNotes();
  resetNoteForm();
}

function fillCourseOptions() {
  var select = document.getElementById('noteCourse');
  select.innerHTML = '<option value="">Select Course</option>';
  AdminLMS.getCourseOptions().forEach(function (course) {
    select.innerHTML += '<option value="' + course.id + '">' + course.title + '</option>';
  });
}

function fillModuleOptions() {
  var courseId = document.getElementById('noteCourse').value;
  var select = document.getElementById('noteModule');
  select.innerHTML = '<option value="">General Module</option>';
  AdminLMS.getModuleOptions(courseId).forEach(function (module) {
    select.innerHTML += '<option value="' + module.id + '">' + module.title + '</option>';
  });
}

function refreshNotes() {
  adminNotes = AdminLMS.getNotes();
  fillCategoryFilter(adminNotes);
  applyNoteFilters();
}

function fillCategoryFilter(notes) {
  var filter = document.getElementById('noteCategoryFilter');
  var selected = filter.value || 'all';
  var categories = {};
  filter.innerHTML = '<option value="all">All Categories</option>';
  notes.forEach(function (note) {
    var category = note.category || note.type || 'Academic Reference';
    if (!categories[category]) {
      categories[category] = true;
      filter.innerHTML += '<option value="' + escapeHtml(category) + '">' + escapeHtml(category) + '</option>';
    }
  });
  filter.value = categories[selected] ? selected : 'all';
}

function applyNoteFilters() {
  var query = document.getElementById('noteSearch').value.trim().toLowerCase();
  var category = document.getElementById('noteCategoryFilter').value;

  var filtered = adminNotes.filter(function (note) {
    var searchable = [note.title, note.courseTitle, note.category, note.summary, note.moduleTitle].join(' ').toLowerCase();
    return searchable.indexOf(query) >= 0 && (category === 'all' || (note.category || note.type) === category);
  });

  renderNotes(filtered);
}

function renderNotes(notes) {
  var tbody = document.getElementById('notesTable');
  if (!tbody) return;

  if (!notes.length) {
    tbody.innerHTML = '<tr><td colspan="5"><div class="empty-state">No notes match the current filters.</div></td></tr>';
    return;
  }

  tbody.innerHTML = notes.map(function (note) {
    return '<tr data-clickable="true" data-note-id="' + escapeHtml(note.id) + '">' +
      '<td><strong>' + escapeHtml(note.title) + '</strong><br><span class="helper-text">' + escapeHtml(note.summary || note.description) + '</span></td>' +
      '<td>' + escapeHtml(note.courseTitle || note.courseId) + '</td>' +
      '<td>' + escapeHtml(note.moduleTitle || 'General Module') + '</td>' +
      '<td>' + escapeHtml(note.type) + '<br><span class="helper-text">' + escapeHtml(note.resourceName || (note.resourcePath ? 'Resource attached' : 'No file attached')) + '</span></td>' +
      '<td class="table-actions"><button class="secondary" type="button" data-action="review">Review</button><button class="secondary" type="button" data-action="edit">Edit</button><button class="danger" type="button" data-action="delete">Delete</button></td>' +
      '</tr>';
  }).join('');

  Array.prototype.forEach.call(tbody.querySelectorAll('tr[data-note-id]'), function (row) {
    row.querySelectorAll('button[data-action]').forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.stopPropagation();
        var action = button.getAttribute('data-action');
        var noteId = row.getAttribute('data-note-id');
        if (action === 'review') reviewNote(noteId);
        if (action === 'edit') editNote(noteId);
        if (action === 'delete') deleteNoteRecord(noteId);
      });
    });
    row.addEventListener('click', function () {
      reviewNote(row.getAttribute('data-note-id'));
    });
  });
}

function reviewNote(noteId) {
  var note = AdminLMS.getNotes().find(function (item) { return item.id === noteId; });
  if (!note || !window.AdminUI) return;

  var resourceLink = note.resourcePath
    ? '<a class="inline-link" href="' + escapeHtml(note.resourcePath) + '" target="_blank" rel="noopener">Open uploaded resource</a>'
    : '<span class="helper-text">No file uploaded.</span>';

  AdminUI.openModal({
    title: note.title,
    subtitle: note.courseTitle + ' | ' + (note.moduleTitle || 'General Module'),
    content:
      '<div class="record-summary-grid">' +
        summaryCard('Type', note.type || 'Study Notes') +
        summaryCard('Course', note.courseTitle) +
        summaryCard('Module', note.moduleTitle || 'General Module') +
        summaryCard('Resource', note.resourceName || (note.resourcePath ? 'Uploaded file' : 'No file')) +
      '</div>' +
      '<div class="record-detail-section"><h4>Summary</h4><div class="record-detail-list"><div>' + escapeHtml(note.summary || note.description || '') + '</div></div></div>' +
      '<div class="record-detail-section"><h4>Study Content</h4><div class="record-detail-list"><div>' + escapeHtml(note.content || '') + '</div></div></div>' +
      '<div class="record-detail-section"><h4>Student Reflection</h4><div class="record-detail-list"><div>Published notes appear in the student notes page for this course and module.</div><div>' + resourceLink + '</div></div></div>' +
      '<div class="action-row">' +
        '<button type="button" class="btn btn-primary" onclick="editNote(\'' + escapeJs(note.id) + '\'); if (window.AdminUI) AdminUI.closeModal();">Edit Note</button>' +
        '<button type="button" class="btn btn-secondary" onclick="window.location.href=\'../notes.html?course=' + encodeURIComponent(note.courseId) + '\'">Open Student Notes</button>' +
        '<button type="button" class="btn btn-danger" onclick="deleteNoteRecord(\'' + escapeJs(note.id) + '\')">Delete Note</button>' +
      '</div>'
  });
}

function editNote(noteId) {
  var note = AdminLMS.getNotes().find(function (item) { return item.id === noteId; });
  if (!note) return;
  document.getElementById('noteId').value = note.id;
  document.getElementById('noteTitle').value = note.title;
  document.getElementById('noteCourse').value = note.courseId;
  fillModuleOptions();
  document.getElementById('noteModule').value = note.moduleId || '';
  document.getElementById('noteType').value = note.type;
  document.getElementById('noteSummary').value = note.summary || '';
  document.getElementById('noteContent').value = note.content || '';
  setFileMetaState('noteResourceFile', 'noteResourceMeta', note.resourcePath || '', note.resourceName || '', 'Upload PDF, study material, or academic note file for students.');
}

function resetNoteForm() {
  document.getElementById('noteForm').reset();
  document.getElementById('noteId').value = '';
  fillModuleOptions();
  setFileMetaState('noteResourceFile', 'noteResourceMeta', '', '', 'Upload PDF, study material, or academic note file for students.');
}

function getSelectedText(id) {
  var select = document.getElementById(id);
  if (!select) return '';
  return select.options[select.selectedIndex] ? select.options[select.selectedIndex].text : '';
}

function deleteNoteRecord(noteId) {
  if (!confirm('Delete this note from the admin workspace?')) return;
  AdminLMS.deleteNote(noteId);
  refreshNotes();
  resetNoteForm();
  if (window.AdminUI) AdminUI.closeModal();
}

function bindFileMeta(inputId, metaId, emptyMessage) {
  var input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('change', function () {
    var file = input.files && input.files[0];
    setFileMetaState(inputId, metaId, '', file ? file.name : '', emptyMessage);
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

function setFileMetaState(inputId, metaId, currentPath, currentName, message) {
  var input = document.getElementById(inputId);
  var meta = document.getElementById(metaId);
  if (!input || !meta) return;
  input.value = '';
  input.dataset.current = currentPath || '';
  input.dataset.name = currentName || '';
  meta.textContent = currentName ? ('Current file: ' + currentName + '. Choose a new file to replace it.') : message;
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
```

### admin\js\projects.js

`$lang
var adminProjects = [];

document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  fillCourseOptions();
  bindProjectEvents();
  refreshProjects();
});

function bindProjectEvents() {
  document.getElementById('projectForm').addEventListener('submit', function (event) {
    event.preventDefault();
    AdminLMS.saveProject({
      id: document.getElementById('projectId').value,
      title: document.getElementById('projectTitle').value.trim(),
      courseId: document.getElementById('projectCourse').value,
      deadline: document.getElementById('projectDeadline').value,
      subtitle: document.getElementById('projectSubtitle').value.trim(),
      description: document.getElementById('projectDescription').value.trim(),
      objectives: document.getElementById('projectObjectives').value.trim(),
      requirements: document.getElementById('projectRequirements').value.trim(),
      tools: splitCommaValues(document.getElementById('projectTools').value.trim()).join('\n'),
      expectedOutcome: document.getElementById('projectExpectedOutcome').value.trim(),
      difficulty: document.getElementById('projectDifficulty').value
    });
    refreshProjects();
    resetProjectForm();
  });

  document.getElementById('projectReset').onclick = resetProjectForm;
  document.getElementById('projectSearch').addEventListener('input', applyProjectFilters);
  document.getElementById('projectDifficultyFilter').addEventListener('change', applyProjectFilters);
}

function fillCourseOptions() {
  var select = document.getElementById('projectCourse');
  select.innerHTML = '<option value="">Select Course</option>';
  AdminLMS.getCourseOptions().forEach(function (course) {
    select.innerHTML += '<option value="' + course.id + '">' + course.title + '</option>';
  });
}

function refreshProjects() {
  adminProjects = AdminLMS.getProjects();
  applyProjectFilters();
}

function applyProjectFilters() {
  var query = document.getElementById('projectSearch').value.trim().toLowerCase();
  var difficulty = document.getElementById('projectDifficultyFilter').value;

  var filtered = adminProjects.filter(function (project) {
    var searchable = [project.title, project.courseTitle, project.description, project.subtitle].join(' ').toLowerCase();
    return searchable.indexOf(query) >= 0 && (difficulty === 'all' || project.difficulty === difficulty);
  });

  renderProjects(filtered);
}

function renderProjects(projects) {
  var tbody = document.getElementById('projectsTable');
  tbody.innerHTML = '';

  if (!projects.length) {
    tbody.innerHTML = '<tr><td colspan="5"><div class="empty-state">No projects match the current filters.</div></td></tr>';
    return;
  }

  projects.forEach(function (project) {
    var requirements = Array.isArray(project.requirements) ? project.requirements.length : String(project.requirements || '').split(/\r?\n/).filter(Boolean).length;
    tbody.innerHTML += '<tr>' +
      '<td><strong>' + escapeHtml(project.title) + '</strong><br><span class="helper-text">' + escapeHtml(project.description) + '</span><br><span class="helper-text">' + escapeHtml(project.difficulty || 'Intermediate') + '</span></td>' +
      '<td>' + escapeHtml(project.courseTitle || project.courseId) + '</td>' +
      '<td>' + escapeHtml(project.deadline) + '</td>' +
      '<td>' + requirements + ' deliverable(s)<br><span class="helper-text">' + escapeHtml((project.expectedOutcome || '').slice(0, 90)) + '</span></td>' +
      '<td class="table-actions"><button class="secondary" onclick="editProject(\'' + project.id + '\')">Edit</button><button class="secondary" onclick="duplicateProjectRecord(\'' + project.id + '\')">Duplicate</button><button class="danger" onclick="deleteProjectRecord(\'' + project.id + '\')">Delete</button></td>' +
      '</tr>';
  });
}

function editProject(projectId) {
  var project = AdminLMS.getProjects().find(function (item) { return item.id === projectId; });
  if (!project) return;
  document.getElementById('projectId').value = project.id;
  document.getElementById('projectTitle').value = project.title;
  document.getElementById('projectCourse').value = project.courseId;
  document.getElementById('projectDeadline').value = project.deadline;
  document.getElementById('projectSubtitle').value = project.subtitle || '';
  document.getElementById('projectTools').value = Array.isArray(project.tools) ? project.tools.join(', ') : (project.tools || '');
  document.getElementById('projectDifficulty').value = project.difficulty || 'Intermediate';
  document.getElementById('projectDescription').value = project.description || '';
  document.getElementById('projectObjectives').value = Array.isArray(project.objectives) ? project.objectives.join('\n') : project.objectives || '';
  document.getElementById('projectRequirements').value = Array.isArray(project.requirements) ? project.requirements.join('\n') : project.requirements || '';
  document.getElementById('projectExpectedOutcome').value = project.expectedOutcome || '';
}

function duplicateProjectRecord(projectId) {
  var project = AdminLMS.getProjects().find(function (item) { return item.id === projectId; });
  if (!project) return;
  AdminLMS.saveProject({
    id: project.id + '-copy',
    title: project.title + ' Copy',
    courseId: project.courseId,
    deadline: project.deadline,
    subtitle: project.subtitle,
    description: project.description,
    objectives: Array.isArray(project.objectives) ? project.objectives.join('\n') : project.objectives,
    requirements: Array.isArray(project.requirements) ? project.requirements.join('\n') : project.requirements,
    tools: Array.isArray(project.tools) ? project.tools.join('\n') : project.tools,
    expectedOutcome: project.expectedOutcome,
    difficulty: project.difficulty
  });
  refreshProjects();
}

function resetProjectForm() {
  document.getElementById('projectForm').reset();
  document.getElementById('projectId').value = '';
}

function deleteProjectRecord(projectId) {
  if (!confirm('Delete this project from the admin workspace?')) return;
  AdminLMS.deleteProject(projectId);
  refreshProjects();
  resetProjectForm();
}

function splitCommaValues(value) {
  return String(value || '').split(',').map(function (item) {
    return item.trim();
  }).filter(Boolean);
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
```

### admin\js\quizzes.js

`$lang
var quizQuestions = [];
var adminQuizzes = [];

document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  fillQuizCourses();
  addQuestionEditor();
  bindQuizEvents();
  refreshQuizzes();
});

function bindQuizEvents() {
  document.getElementById('addQuestionBtn').onclick = function () {
    addQuestionEditor();
  };
  document.getElementById('quizReset').onclick = resetQuizForm;
  document.getElementById('quizCsvImportBtn').onclick = importQuizCsv;
  document.getElementById('quizSearch').addEventListener('input', applyQuizFilters);
  document.getElementById('quizStatusFilter').addEventListener('change', applyQuizFilters);
  bindFileMeta('quizReferenceFile', 'quizReferenceMeta', 'Optional reference sheet or instructions file for the quiz setup.');

  document.getElementById('quizForm').addEventListener('submit', saveQuizRecord);
}

async function saveQuizRecord(event) {
  event.preventDefault();
  var courseId = document.getElementById('quizCourse').value;
  var course = AdminLMS.getCourseOptions().find(function (item) { return item.id === courseId; });
  var existing = AdminLMS.getQuizzes().find(function (item) {
    return item.id === document.getElementById('quizId').value;
  }) || {};
  var referenceAsset = await resolveFileAsset('quizReferenceFile');
  var questions = collectQuestions();

  if (!questions.length) {
    alert('Please add at least one quiz question.');
    return;
  }

  AdminLMS.saveQuiz({
    id: document.getElementById('quizId').value,
    title: document.getElementById('quizTitle').value.trim(),
    courseId: courseId,
    courseTitle: course ? course.title : '',
    durationMinutes: Number(document.getElementById('quizDuration').value),
    totalMarks: questions.length * 5,
    passScore: Number(document.getElementById('quizPassScore').value),
    instructions: document.getElementById('quizInstructions').value.trim(),
    attemptsCount: existing.attemptsCount || 0,
    status: document.getElementById('quizStatus').value,
    referencePath: referenceAsset.path,
    referenceName: referenceAsset.name,
    questions: questions
  });

  refreshQuizzes();
  resetQuizForm();
}

function fillQuizCourses() {
  var select = document.getElementById('quizCourse');
  select.innerHTML = '<option value="">Select Course</option>';
  AdminLMS.getCourseOptions().forEach(function (course) {
    select.innerHTML += '<option value="' + course.id + '">' + course.title + '</option>';
  });
}

function addQuestionEditor(question) {
  quizQuestions.push(question || {
    prompt: '',
    options: ['', '', '', ''],
    correctOption: 0,
    explanation: ''
  });
  renderQuestionEditors();
}

function renderQuestionEditors() {
  var container = document.getElementById('quizQuestions');
  container.innerHTML = '';
  quizQuestions.forEach(function (question, index) {
    container.innerHTML += '<div class="question-item">' +
      '<div class="question-builder-head"><h4>Question ' + (index + 1) + '</h4><button type="button" class="btn btn-secondary" data-remove-question="' + index + '">Remove</button></div>' +
      '<input data-field="prompt" data-index="' + index + '" type="text" placeholder="Question Prompt" value="' + escapeHtml(question.prompt) + '">' +
      '<div class="form-grid">' +
      question.options.map(function (option, optionIndex) {
        return '<input data-field="option-' + optionIndex + '" data-index="' + index + '" type="text" placeholder="Option ' + String.fromCharCode(65 + optionIndex) + '" value="' + escapeHtml(option) + '">';
      }).join('') +
      '</div>' +
      '<div class="form-grid">' +
      '<select data-field="correct" data-index="' + index + '">' +
      [0, 1, 2, 3].map(function (optionIndex) {
        return '<option value="' + optionIndex + '" ' + (question.correctOption === optionIndex ? 'selected' : '') + '>Correct Option ' + String.fromCharCode(65 + optionIndex) + '</option>';
      }).join('') +
      '</select>' +
      '<input data-field="explanation" data-index="' + index + '" type="text" placeholder="Answer Explanation" value="' + escapeHtml(question.explanation) + '">' +
      '</div>' +
      '</div>';
  });

  container.querySelectorAll('button[data-remove-question]').forEach(function (button) {
    button.addEventListener('click', function () {
      removeQuestionEditor(Number(button.getAttribute('data-remove-question')));
    });
  });

  container.querySelectorAll('input, select').forEach(function (field) {
    field.addEventListener('input', syncQuestionState);
    field.addEventListener('change', syncQuestionState);
  });
}

function removeQuestionEditor(index) {
  quizQuestions.splice(index, 1);
  if (!quizQuestions.length) addQuestionEditor();
  renderQuestionEditors();
}

function syncQuestionState(event) {
  var index = Number(event.target.dataset.index);
  var field = event.target.dataset.field;
  if (field === 'prompt') quizQuestions[index].prompt = event.target.value;
  if (field === 'correct') quizQuestions[index].correctOption = Number(event.target.value);
  if (field === 'explanation') quizQuestions[index].explanation = event.target.value;
  if (field.indexOf('option-') === 0) {
    quizQuestions[index].options[Number(field.split('-')[1])] = event.target.value;
  }
}

function collectQuestions() {
  return quizQuestions.filter(function (question) {
    return question.prompt.trim();
  }).map(function (question, index) {
    return {
      id: 'admin-question-' + index + '-' + Date.now(),
      prompt: question.prompt,
      options: question.options.slice(),
      correctOption: question.correctOption,
      explanation: question.explanation || 'Review the course concepts linked to this question.'
    };
  });
}

function importQuizCsv() {
  var fileInput = document.getElementById('quizCsvUpload');
  var file = fileInput.files && fileInput.files[0];
  if (!file) {
    alert('Choose a CSV file to import quiz questions.');
    return;
  }

  var reader = new FileReader();
  reader.onload = function () {
    var parsedQuestions = parseCsvQuestions(String(reader.result || ''));
    if (!parsedQuestions.length) {
      alert('No valid questions were found in the CSV.');
      return;
    }

    quizQuestions = parsedQuestions;
    renderQuestionEditors();
    alert(parsedQuestions.length + ' question(s) imported from CSV.');
  };
  reader.readAsText(file);
}

function parseCsvQuestions(csvText) {
  var rows = csvText.trim().split(/\r?\n/).filter(Boolean);
  if (rows.length < 2) return [];

  var headers = splitCsvRow(rows[0]).map(function (header) {
    return header.trim().toLowerCase();
  });

  return rows.slice(1).map(function (row) {
    var values = splitCsvRow(row);
    var record = {};
    headers.forEach(function (header, index) {
      record[header] = values[index] || '';
    });

    var correctAnswer = String(record.correctanswer || record.correctoption || 'A').trim().toUpperCase();
    var correctIndex = ['A', 'B', 'C', 'D'].indexOf(correctAnswer);
    if (correctIndex < 0) correctIndex = Math.max(0, Number(correctAnswer) - 1);

    return {
      prompt: record.question || '',
      options: [record.optiona || '', record.optionb || '', record.optionc || '', record.optiond || ''],
      correctOption: correctIndex >= 0 ? correctIndex : 0,
      explanation: record.explanation || ''
    };
  }).filter(function (question) {
    return question.prompt && question.options.some(function (option) { return option; });
  });
}

function splitCsvRow(row) {
  var values = [];
  var current = '';
  var insideQuotes = false;

  for (var index = 0; index < row.length; index += 1) {
    var char = row.charAt(index);
    var next = row.charAt(index + 1);
    if (char === '"' && insideQuotes && next === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  values.push(current.trim());
  return values;
}

function refreshQuizzes() {
  adminQuizzes = AdminLMS.getQuizzes();
  applyQuizFilters();
}

function applyQuizFilters() {
  var query = document.getElementById('quizSearch').value.trim().toLowerCase();
  var status = document.getElementById('quizStatusFilter').value;

  var filtered = adminQuizzes.filter(function (quiz) {
    var searchable = [quiz.title, quiz.courseTitle].join(' ').toLowerCase();
    return searchable.indexOf(query) >= 0 && (status === 'all' || quiz.status === status);
  });

  renderQuizzes(filtered);
}

function renderQuizzes(quizzes) {
  var tbody = document.getElementById('quizzesTable');
  if (!tbody) return;

  if (!quizzes.length) {
    tbody.innerHTML = '<tr><td colspan="6"><div class="empty-state">No quizzes match the current filters.</div></td></tr>';
    return;
  }

  tbody.innerHTML = quizzes.map(function (quiz) {
    return '<tr data-clickable="true" data-quiz-id="' + escapeHtml(quiz.id) + '">' +
      '<td><strong>' + escapeHtml(quiz.title) + '</strong><br><span class="helper-text">' + (quiz.questionCount || quiz.questions.length) + ' questions configured</span></td>' +
      '<td>' + escapeHtml(quiz.courseTitle) + '</td>' +
      '<td>' + quiz.durationMinutes + ' min | ' + quiz.totalMarks + ' marks<br><span class="helper-text">Pass score: ' + (quiz.passScore || 50) + '%</span></td>' +
      '<td>' + (quiz.attemptsCount || 0) + '</td>' +
      '<td><span class="badge badge-' + quiz.status + '">' + escapeHtml(quiz.status.replace(/-/g, ' ')) + '</span></td>' +
      '<td class="table-actions"><button class="secondary" type="button" data-action="review">Review</button><button class="secondary" type="button" data-action="edit">Edit</button><button class="danger" type="button" data-action="delete">Delete</button></td>' +
      '</tr>';
  }).join('');

  Array.prototype.forEach.call(tbody.querySelectorAll('tr[data-quiz-id]'), function (row) {
    row.querySelectorAll('button[data-action]').forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.stopPropagation();
        var action = button.getAttribute('data-action');
        var quizId = row.getAttribute('data-quiz-id');
        if (action === 'review') reviewQuiz(quizId);
        if (action === 'edit') editQuiz(quizId);
        if (action === 'delete') deleteQuizRecord(quizId);
      });
    });
    row.addEventListener('click', function () {
      reviewQuiz(row.getAttribute('data-quiz-id'));
    });
  });
}

function reviewQuiz(quizId) {
  var quiz = AdminLMS.getQuizzes().find(function (item) { return item.id === quizId; });
  if (!quiz || !window.AdminUI) return;

  AdminUI.openModal({
    title: quiz.title,
    subtitle: quiz.courseTitle + ' | ' + quiz.questions.length + ' question(s)',
    content:
      '<div class="record-summary-grid">' +
        summaryCard('Course', quiz.courseTitle) +
        summaryCard('Duration', quiz.durationMinutes + ' min') +
        summaryCard('Pass Score', (quiz.passScore || 50) + '%') +
        summaryCard('Attempts', String(quiz.attemptsCount || 0)) +
      '</div>' +
      '<div class="record-detail-section"><h4>Instructions</h4><div class="record-detail-list"><div>' + escapeHtml(Array.isArray(quiz.instructions) ? quiz.instructions.join(' | ') : (quiz.instructions || 'No instructions added.')) + '</div></div></div>' +
      '<div class="record-detail-section"><h4>Question Preview</h4><div class="record-detail-list">' + quiz.questions.slice(0, 5).map(function (question, index) {
        return '<div>' + escapeHtml((index + 1) + '. ' + question.prompt) + '</div>';
      }).join('') + '</div></div>' +
      '<div class="record-detail-section"><h4>Student Reflection</h4><div class="record-detail-list"><div>' + escapeHtml(quiz.referenceName || (quiz.referencePath ? 'Reference file attached for quiz setup.' : 'No reference file attached.')) + '</div></div></div>' +
      '<div class="action-row">' +
        '<button type="button" class="btn btn-primary" onclick="editQuiz(\'' + escapeJs(quiz.id) + '\'); if (window.AdminUI) AdminUI.closeModal();">Edit Quiz</button>' +
        '<button type="button" class="btn btn-secondary" onclick="window.location.href=\'../quiz.html?course=' + encodeURIComponent(quiz.courseId) + '\'">Open Student Quiz</button>' +
        '<button type="button" class="btn btn-danger" onclick="deleteQuizRecord(\'' + escapeJs(quiz.id) + '\')">Delete Quiz</button>' +
      '</div>'
  });
}

function editQuiz(quizId) {
  var quiz = AdminLMS.getQuizzes().find(function (item) { return item.id === quizId; });
  if (!quiz) return;
  document.getElementById('quizId').value = quiz.id;
  document.getElementById('quizTitle').value = quiz.title;
  document.getElementById('quizCourse').value = quiz.courseId;
  document.getElementById('quizDuration').value = quiz.durationMinutes;
  document.getElementById('quizPassScore').value = quiz.passScore || 50;
  document.getElementById('quizStatus').value = quiz.status || 'active';
  document.getElementById('quizInstructions').value = Array.isArray(quiz.instructions) ? quiz.instructions.join('\n') : (quiz.instructions || '');
  setFileMetaState('quizReferenceFile', 'quizReferenceMeta', quiz.referencePath || '', quiz.referenceName || '', 'Optional reference sheet or instructions file for the quiz setup.');
  quizQuestions = quiz.questions.map(function (question) {
    return {
      prompt: question.prompt,
      options: question.options.slice(),
      correctOption: question.correctOption,
      explanation: question.explanation || ''
    };
  });
  renderQuestionEditors();
}

function resetQuizForm() {
  document.getElementById('quizForm').reset();
  document.getElementById('quizId').value = '';
  setFileMetaState('quizReferenceFile', 'quizReferenceMeta', '', '', 'Optional reference sheet or instructions file for the quiz setup.');
  quizQuestions = [];
  addQuestionEditor();
}

function deleteQuizRecord(quizId) {
  if (!confirm('Delete this quiz from the admin workspace?')) return;
  AdminLMS.deleteQuiz(quizId);
  refreshQuizzes();
  resetQuizForm();
  if (window.AdminUI) AdminUI.closeModal();
}

function bindFileMeta(inputId, metaId, emptyMessage) {
  var input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('change', function () {
    var file = input.files && input.files[0];
    setFileMetaState(inputId, metaId, '', file ? file.name : '', emptyMessage);
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

function setFileMetaState(inputId, metaId, currentPath, currentName, message) {
  var input = document.getElementById(inputId);
  var meta = document.getElementById(metaId);
  if (!input || !meta) return;
  input.value = '';
  input.dataset.current = currentPath || '';
  input.dataset.name = currentName || '';
  meta.textContent = currentName ? ('Current file: ' + currentName + '. Choose a new file to replace it.') : message;
}

function summaryCard(label, value) {
  return '<div class="record-summary-card"><strong>' + escapeHtml(label) + '</strong><span>' + escapeHtml(value) + '</span></div>';
}

function escapeHtml(value) {
  return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeJs(value) {
  return String(value || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
```

### admin\js\reports.js

`$lang
document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  var reports = AdminLMS.getReports();
  var stats = document.getElementById('reportStats');

  [
    ['Total Students', reports.overview.totalStudents, 'Learners tracked in admin records'],
    ['Total Courses', reports.overview.totalCourses, 'Courses currently under LMS control'],
    ['Active Enrollments', reports.overview.activeEnrollments, 'Current student-course enrollments'],
    ['Completed Courses', reports.overview.completedCourses, 'Completed learning journeys'],
    ['Certificates Issued', reports.overview.certificatesIssued, 'Visible certificates available to students'],
    ['Pending Assignments', reports.overview.pendingAssignments, 'Assignments still awaiting learner action'],
    ['Quiz Activity', reports.overview.quizActivity, 'Total quiz attempts recorded']
  ].forEach(function (item) {
    stats.innerHTML += '<div class="stat-card"><h3>' + item[0] + '</h3><p>' + item[1] + '</p><span>' + item[2] + '</span></div>';
  });

  fillTable('coursePopularityTable', reports.coursePopularity.map(function (item) {
    return '<tr><td>' + item.courseTitle + '</td><td>' + item.enrolled + '</td><td>' + item.completed + '</td><td>' + item.completionRate + '%</td></tr>';
  }));

  fillTable('quizParticipationTable', reports.quizParticipation.map(function (item) {
    return '<tr><td>' + item.title + '</td><td>' + item.courseTitle + '</td><td>' + item.attemptsCount + '</td><td><span class="badge badge-' + item.status + '">' + item.status + '</span></td></tr>';
  }));

  fillTable('completionSummaryTable', reports.completionSummary.map(function (item) {
    return '<tr><td>' + item.studentName + '</td><td>' + item.enrolledCount + '</td><td>' + item.completedCourses + '</td><td>' + item.averageProgress + '%</td></tr>';
  }));

  fillTable('studentActivityTable', reports.studentActivity.map(function (item) {
    return '<tr><td>' + item.name + '</td><td><span class="badge badge-' + item.status + '">' + item.status + '</span></td><td>' + item.activeCourse + '</td><td>' + (item.needsAttention ? 'Needs follow-up' : 'Healthy') + '</td></tr>';
  }));
});

function fillTable(id, rows) {
  var tbody = document.getElementById(id);
  if (!tbody) return;
  tbody.innerHTML = rows.length ? rows.join('') : '<tr><td colspan="4"><div class="empty-state">No report data available yet.</div></td></tr>';
}
```

### admin\js\students.js

`$lang
var adminStudents = [];
var selectedStudentId = null;
var studentModalState = {
  isOpen: false,
  lastFocusedElement: null
};

document.addEventListener('DOMContentLoaded', function () {
  if (!window.AdminLMS) return;

  bindStudentEvents();
  refreshStudents();
});

function bindStudentEvents() {
  document.getElementById('studentSearch').addEventListener('input', applyStudentFilters);
  document.getElementById('studentStatusFilter').addEventListener('change', applyStudentFilters);
  document.getElementById('studentDepartmentFilter').addEventListener('change', applyStudentFilters);
  document.getElementById('studentSort').addEventListener('change', applyStudentFilters);
  document.getElementById('closeStudentModal').addEventListener('click', closeStudentModal);
  document.getElementById('studentModalOverlay').addEventListener('click', closeStudentModal);
  document.getElementById('studentDetailModal').addEventListener('click', function (event) {
    if (event.target.id === 'studentDetailModal') {
      closeStudentModal();
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && studentModalState.isOpen) {
      closeStudentModal();
    }
  });
}

function refreshStudents() {
  adminStudents = AdminLMS.getStudents();
  fillDepartmentFilter(adminStudents);
  renderStudentStats(adminStudents);
  applyStudentFilters();

  if (selectedStudentId && AdminLMS.getStudentById(selectedStudentId)) {
    showStudentDetail(selectedStudentId);
    return;
  }

  if (adminStudents[0]) {
    showStudentDetail(adminStudents[0].id);
  }
}

function fillDepartmentFilter(students) {
  var filter = document.getElementById('studentDepartmentFilter');
  var selected = filter.value || 'all';
  var departments = {};

  filter.innerHTML = '<option value="all">All Departments</option>';
  students.forEach(function (student) {
    if (student.department && !departments[student.department]) {
      departments[student.department] = true;
      filter.innerHTML += '<option value="' + escapeHtml(student.department) + '">' + escapeHtml(student.department) + '</option>';
    }
  });

  filter.value = departments[selected] ? selected : 'all';
}

function applyStudentFilters() {
  var query = document.getElementById('studentSearch').value.trim().toLowerCase();
  var status = document.getElementById('studentStatusFilter').value;
  var department = document.getElementById('studentDepartmentFilter').value;
  var sort = document.getElementById('studentSort').value;

  var filtered = adminStudents.filter(function (student) {
    var courseTitles = student.enrolledCourses.map(function (course) { return course.title; }).join(' ').toLowerCase();
    return (
      (
        student.name.toLowerCase().indexOf(query) >= 0 ||
        student.email.toLowerCase().indexOf(query) >= 0 ||
        student.department.toLowerCase().indexOf(query) >= 0 ||
        courseTitles.indexOf(query) >= 0 ||
        String(student.registerNo || '').toLowerCase().indexOf(query) >= 0
      ) &&
      (status === 'all' || student.status === status) &&
      (department === 'all' || student.department === department)
    );
  });

  filtered.sort(function (a, b) {
    if (sort === 'progress') return (b.averageProgress || 0) - (a.averageProgress || 0);
    if (sort === 'completed') return (b.completedCourses || 0) - (a.completedCourses || 0);
    if (sort === 'certificates') return (b.certificatesCount || 0) - (a.certificatesCount || 0);
    return a.name.localeCompare(b.name);
  });

  renderStudents(filtered);
}

function renderStudentStats(students) {
  var stats = document.getElementById('studentStats');
  if (!stats) return;

  var activeCount = students.filter(function (student) { return student.status === 'active'; }).length;
  var completedPathCount = students.filter(function (student) { return student.completedCourses > 0; }).length;
  var certificateCount = students.reduce(function (sum, student) { return sum + (student.certificatesCount || 0); }, 0);
  var interventionCount = students.filter(function (student) { return student.needsAttention; }).length;

  stats.innerHTML = [
    ['Students', students.length, 'Real student accounts connected to the LMS data store'],
    ['Active', activeCount, 'Currently active learners with live roster visibility'],
    ['Completed Paths', completedPathCount, 'Students who have finished at least one course'],
    ['Certificates', certificateCount, 'Issued certificates linked to student records'],
    ['Needs Attention', interventionCount, 'Learners below 50% progress in at least one course']
  ].map(function (item) {
    return '<div class="stat-card"><h3>' + item[0] + '</h3><p>' + item[1] + '</p><span>' + item[2] + '</span></div>';
  }).join('');
}

function renderStudents(students) {
  var table = document.getElementById('studentsTable');
  if (!table) return;

  if (!students.length) {
    table.innerHTML = '<tr><td colspan="6"><div class="empty-state">No students match the current search.</div></td></tr>';
    return;
  }

  table.innerHTML = students.map(function (student) {
    var coursesLabel = student.enrolledCourses.length
      ? student.enrolledCourses.map(function (course) { return escapeHtml(course.title); }).join(', ')
      : 'No enrollments';
    var progressLabel = student.enrolledCourses.length
      ? student.enrolledCourses.map(function (course) {
          return escapeHtml(course.title) + ': ' + course.progress + '%';
        }).join('<br>')
      : 'No progress yet';

    return '<tr class="student-row" data-student-id="' + escapeHtml(student.id) + '">' +
      '<td><strong>' + escapeHtml(student.name) + '</strong><br><span class="helper-text">' + escapeHtml(student.email) + '</span><br><span class="helper-text">' + escapeHtml(student.registerNo || student.profileSummary || '') + '</span></td>' +
      '<td>' + escapeHtml(student.department) + '<br><span class="helper-text">' + escapeHtml(student.semester) + '</span></td>' +
      '<td>' + coursesLabel + '</td>' +
      '<td>' + progressLabel + '<br><span class="helper-text">' + student.certificatesCount + ' certificate(s)</span></td>' +
      '<td><span class="badge badge-' + escapeHtml(student.status) + '">' + escapeHtml(student.status) + '</span></td>' +
      '<td class="table-actions">' +
        '<button class="secondary" type="button" data-action="view">View</button>' +
        '<button class="secondary" type="button" data-action="toggle">' + (student.status === 'active' ? 'Pause' : 'Activate') + '</button>' +
        '<button class="danger" type="button" data-action="delete">Remove</button>' +
      '</td>' +
    '</tr>';
  }).join('');

  Array.prototype.forEach.call(table.querySelectorAll('.student-row'), function (row) {
    row.querySelectorAll('button[data-action]').forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.stopPropagation();
        var studentId = row.getAttribute('data-student-id');
        var action = button.getAttribute('data-action');
        if (action === 'view') openStudentModal(studentId);
        if (action === 'toggle') toggleStudentStatus(studentId);
        if (action === 'delete') deleteStudentRecord(studentId);
      });
    });
    row.addEventListener('click', function (event) {
      if (event.target.closest('button')) return;
      openStudentModal(row.getAttribute('data-student-id'));
    });
  });
}

function showStudentDetail(studentId) {
  var student = AdminLMS.getStudentById(studentId);
  var panel = document.getElementById('studentDetailPanel');
  if (!student || !panel) return;

  selectedStudentId = studentId;
  panel.className = 'student-detail-summary';
  panel.innerHTML =
    '<div class="detail-grid">' +
      detailBlock('Full Name', student.name) +
      detailBlock('Email', student.email) +
      detailBlock('Role', student.role || 'student') +
      detailBlock('Joined', student.joinedOn || 'Not available') +
      detailBlock('Enrollments', student.enrolledCount) +
      detailBlock('Completed', student.completedCourses) +
      detailBlock('Certificates', student.certificatesCount) +
      detailBlock('Progress', student.averageProgress + '% average') +
      detailBlock('Latest Quiz', student.latestQuiz ? student.latestQuiz.title : 'No completed quiz yet') +
      detailBlock('Latest Assignment', student.latestAssignment ? student.latestAssignment.title : 'No submitted assignment yet') +
      detailBlock('Current Focus', student.activeCourse ? student.activeCourse.title : 'No active course') +
      detailBlock('Support Flag', student.needsAttention ? 'Needs attention' : 'On track') +
    '</div>' +
    '<div class="student-summary-section">' +
      '<strong>Recent Course Activity</strong>' +
      '<div class="helper-text student-activity-list">' +
        (student.recentCourseActivity && student.recentCourseActivity.length
          ? student.recentCourseActivity.map(function (activity) {
              return '<div>' + escapeHtml(activity.title) + ' | ' + escapeHtml(activity.description) + '</div>';
            }).join('')
          : 'No recent course activity is available yet.') +
      '</div>' +
    '</div>' +
    '<div class="student-summary-actions">' +
      '<button class="btn btn-primary" type="button" data-student-summary-action="open">Open Full Record</button>' +
      '<button class="btn btn-secondary" type="button" data-student-summary-action="toggle">' + (student.status === 'active' ? 'Pause Student' : 'Activate Student') + '</button>' +
    '</div>';

  Array.prototype.forEach.call(panel.querySelectorAll('button[data-student-summary-action]'), function (button) {
    button.addEventListener('click', function () {
      var action = button.getAttribute('data-student-summary-action');
      if (action === 'open') openStudentModal(student.id);
      if (action === 'toggle') toggleStudentStatus(student.id);
    });
  });
}

function openStudentModal(studentId) {
  var student = AdminLMS.getStudentById(studentId);
  var modal = document.getElementById('studentDetailModal');
  var overlay = document.getElementById('studentModalOverlay');
  var title = document.getElementById('studentModalTitle');
  var subtitle = document.getElementById('studentModalSubtitle');
  var body = document.getElementById('studentModalBody');
  if (!student || !modal || !overlay || !body) return;

  closeStudentModal();
  studentModalState.lastFocusedElement = document.activeElement;
  studentModalState.isOpen = true;
  selectedStudentId = studentId;
  showStudentDetail(studentId);

  title.textContent = student.name;
  subtitle.textContent = student.email + (student.registerNo ? ' | ' + student.registerNo : '');
  body.innerHTML = buildStudentModalContent(student);
  bindStudentModalActions(student.id);

  overlay.hidden = false;
  overlay.setAttribute('aria-hidden', 'false');
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('student-modal-open');
}

function closeStudentModal() {
  var modal = document.getElementById('studentDetailModal');
  var overlay = document.getElementById('studentModalOverlay');
  var body = document.getElementById('studentModalBody');
  if (!modal || !overlay) return;
  studentModalState.isOpen = false;
  overlay.hidden = true;
  overlay.setAttribute('aria-hidden', 'true');
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  if (body) {
    body.innerHTML = '';
  }
  document.body.classList.remove('student-modal-open');
  if (studentModalState.lastFocusedElement && typeof studentModalState.lastFocusedElement.focus === 'function') {
    try {
      studentModalState.lastFocusedElement.focus();
    } catch (error) {}
  }
  studentModalState.lastFocusedElement = null;
}

function buildStudentModalContent(student) {
  var certificates = AdminLMS.getCertificates().filter(function (certificate) {
    return certificate.studentId === student.id || certificate.studentEmail === student.email || certificate.studentName === student.name;
  });

  return '' +
    '<section class="student-modal-grid">' +
      '<div class="student-modal-section">' +
        '<h4>Basic Info</h4>' +
        detailList([
          ['Full Name', student.name],
          ['Email', student.email],
          ['Role', student.role || 'student'],
          ['Joined Date', student.joinedOn || 'Not available'],
          ['Department', student.department],
          ['Semester', student.semester],
          ['Institution', student.institution || 'Vidhya Vaaradhi LMS']
        ]) +
      '</div>' +
      '<div class="student-modal-section">' +
        '<h4>Academic Info</h4>' +
        detailList([
          ['Enrolled Courses', student.enrolledCount],
          ['Completed Courses', student.completedCourses],
          ['Certificates', student.certificatesCount],
          ['Average Progress', student.averageProgress + '%'],
          ['Current Focus', student.activeCourse ? student.activeCourse.title : 'No active course']
        ]) +
      '</div>' +
    '</section>' +
    '<section class="student-modal-section">' +
      '<h4>Enrollments & Progress</h4>' +
      (student.enrolledCourses.length
        ? '<div class="student-course-list">' + student.enrolledCourses.map(function (course) {
            return '<article class="student-course-card">' +
              '<strong>' + escapeHtml(course.title) + '</strong>' +
              '<span>' + escapeHtml(course.status) + '</span>' +
              '<p>' + course.progress + '% complete â€¢ ' + course.completedLessons + '/' + course.totalLessons + ' lessons</p>' +
              '<small>' + escapeHtml(course.lastAccessedLesson ? ('Last lesson: ' + course.lastAccessedLesson.title) : 'No lesson activity yet') + '</small>' +
            '</article>';
          }).join('') + '</div>'
        : '<div class="empty-state">This student has not enrolled in any course yet.</div>') +
    '</section>' +
    '<section class="student-modal-grid">' +
      '<div class="student-modal-section">' +
        '<h4>Learning Activity</h4>' +
        detailList([
          ['Latest Quiz', student.latestQuiz ? (student.latestQuiz.title + ' | ' + student.latestQuiz.courseTitle) : 'No completed quiz yet'],
          ['Latest Assignment', student.latestAssignment ? (student.latestAssignment.title + ' | ' + student.latestAssignment.courseTitle) : 'No submitted assignment yet'],
          ['Latest Project', student.latestProject ? (student.latestProject.title + ' | ' + student.latestProject.courseTitle) : 'No submitted project yet']
        ]) +
        '<div class="student-inline-list">' +
          (student.recentCourseActivity && student.recentCourseActivity.length
            ? student.recentCourseActivity.map(function (activity) {
                return '<div>' + escapeHtml(activity.title) + ' â€¢ ' + escapeHtml(activity.description) + '</div>';
              }).join('')
            : 'No recent course activity is available yet.') +
        '</div>' +
      '</div>' +
      '<div class="student-modal-section">' +
        '<h4>Certificates</h4>' +
        (certificates.length
          ? '<div class="student-inline-list">' + certificates.map(function (certificate) {
              return '<div>' + escapeHtml(certificate.courseTitle) + ' â€¢ ' + escapeHtml(certificate.status) + ' â€¢ ' + escapeHtml(certificate.issueDate || 'Date unavailable') + '</div>';
            }).join('') + '</div>'
          : '<div class="empty-state">No certificate has been issued for this student yet.</div>') +
      '</div>' +
    '</section>' +
    '<section class="student-modal-actions">' +
      '<button class="btn btn-primary" type="button" data-student-modal-action="focus">View Full Record</button>' +
      '<button class="btn btn-secondary" type="button" data-student-modal-action="edit">Edit Student</button>' +
      '<button class="btn btn-secondary" type="button" data-student-modal-action="enrollments">View Enrollments</button>' +
      '<button class="btn btn-secondary" type="button" data-student-modal-action="certificates">View Certificates</button>' +
      '<button class="btn btn-secondary" type="button" data-student-modal-action="reset">Reset Progress</button>' +
      '<button class="btn btn-danger" type="button" data-student-modal-action="delete">Remove Student</button>' +
      '<button class="btn btn-secondary" type="button" data-student-modal-action="close">Close</button>' +
    '</section>';
}

function bindStudentModalActions(studentId) {
  var body = document.getElementById('studentModalBody');
  if (!body) return;

  Array.prototype.forEach.call(body.querySelectorAll('button[data-student-modal-action]'), function (button) {
    button.addEventListener('click', function () {
      var action = button.getAttribute('data-student-modal-action');
      if (action === 'focus') focusStudentRecord(studentId);
      if (action === 'edit') openStudentEditModal(studentId);
      if (action === 'enrollments') goToStudentLinkedPage('courses.html', studentId);
      if (action === 'certificates') goToStudentLinkedPage('certificates.html', studentId);
      if (action === 'reset') resetStudentRecordProgress(studentId);
      if (action === 'delete') deleteStudentRecord(studentId);
      if (action === 'close') closeStudentModal();
    });
  });
}

function openStudentEditModal(studentId) {
  var student = AdminLMS.getStudentById(studentId);
  var title = document.getElementById('studentModalTitle');
  var subtitle = document.getElementById('studentModalSubtitle');
  var body = document.getElementById('studentModalBody');
  if (!student || !body) return;

  if (title) title.textContent = 'Edit ' + student.name;
  if (subtitle) subtitle.textContent = 'Update live LMS student details';

  body.innerHTML =
    '<form id="studentEditForm" class="form-stack">' +
      '<input type="hidden" id="studentEditId" value="' + escapeHtml(student.id) + '">' +
      '<div class="student-modal-grid">' +
        '<div class="student-modal-section">' +
          '<h4>Identity</h4>' +
          '<div class="form-grid">' +
            '<input id="studentEditName" type="text" value="' + escapeHtml(student.name) + '" placeholder="Full Name" required>' +
            '<input id="studentEditEmail" type="email" value="' + escapeHtml(student.email) + '" placeholder="Email" disabled>' +
            '<input id="studentEditPhone" type="text" value="' + escapeHtml(student.phone || '') + '" placeholder="Phone">' +
            '<input id="studentEditRegisterNo" type="text" value="' + escapeHtml(student.registerNo || '') + '" placeholder="Register Number">' +
          '</div>' +
        '</div>' +
        '<div class="student-modal-section">' +
          '<h4>Academic Setup</h4>' +
          '<div class="form-grid">' +
            '<input id="studentEditDepartment" type="text" value="' + escapeHtml(student.department || '') + '" placeholder="Department">' +
            '<input id="studentEditSemester" type="text" value="' + escapeHtml(student.semester || '') + '" placeholder="Semester">' +
            '<input id="studentEditInstitution" type="text" value="' + escapeHtml(student.institution || '') + '" placeholder="Institution">' +
            '<input id="studentEditJoinedOn" type="date" value="' + escapeHtml(student.joinedOn || '') + '">' +
            '<select id="studentEditStatus">' +
              '<option value="active"' + (student.status === 'active' ? ' selected' : '') + '>Active</option>' +
              '<option value="inactive"' + (student.status === 'inactive' ? ' selected' : '') + '>Inactive</option>' +
            '</select>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<section class="student-modal-actions">' +
        '<button class="btn btn-primary" type="submit">Save Student</button>' +
        '<button class="btn btn-secondary" type="button" id="studentEditCancel">Cancel</button>' +
      '</section>' +
    '</form>';

  document.getElementById('studentEditForm').addEventListener('submit', saveStudentEdit);
  document.getElementById('studentEditCancel').addEventListener('click', function () {
    openStudentModal(studentId);
  });
}

function saveStudentEdit(event) {
  event.preventDefault();
  var studentId = document.getElementById('studentEditId').value;
  var updated = AdminLMS.updateStudent(studentId, {
    name: document.getElementById('studentEditName').value.trim(),
    phone: document.getElementById('studentEditPhone').value.trim(),
    registerNo: document.getElementById('studentEditRegisterNo').value.trim(),
    department: document.getElementById('studentEditDepartment').value.trim(),
    semester: document.getElementById('studentEditSemester').value.trim(),
    institution: document.getElementById('studentEditInstitution').value.trim(),
    joinedOn: document.getElementById('studentEditJoinedOn').value,
    status: document.getElementById('studentEditStatus').value
  });

  if (!updated) return;
  refreshStudents();
  openStudentModal(studentId);
}

function focusStudentRecord(studentId) {
  showStudentDetail(studentId);
  closeStudentModal();
}

function goToStudentLinkedPage(page, studentId) {
  window.location.href = page + '?student=' + encodeURIComponent(studentId);
}

function toggleStudentStatus(studentId) {
  var student = AdminLMS.getStudentById(studentId);
  if (!student) return;
  AdminLMS.updateStudentStatus(studentId, student.status === 'active' ? 'inactive' : 'active');
  refreshStudents();
  showStudentDetail(studentId);
}

function resetStudentRecordProgress(studentId) {
  if (!confirm('Reset this student progress across the LMS while keeping the account?')) return;
  if (AdminLMS.resetStudentProgress) {
    AdminLMS.resetStudentProgress(studentId);
    refreshStudents();
    openStudentModal(studentId);
  }
}

function deleteStudentRecord(studentId) {
  if (!confirm('Remove this student from the LMS roster and local progress store?')) return;
  AdminLMS.deleteStudent(studentId);
  closeStudentModal();
  selectedStudentId = null;
  refreshStudents();

  var panel = document.getElementById('studentDetailPanel');
  if (panel && !adminStudents.length) {
    panel.className = 'empty-state';
    panel.innerHTML = 'No student records remain in the admin workspace.';
  }
}

function detailBlock(label, value) {
  return '<div><strong>' + escapeHtml(label) + '</strong><br><span class="helper-text">' + escapeHtml(value) + '</span></div>';
}

function detailList(items) {
  return '<div class="student-detail-list">' + items.map(function (item) {
    return '<div><strong>' + escapeHtml(item[0]) + '</strong><span>' + escapeHtml(item[1]) + '</span></div>';
  }).join('') + '</div>';
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
```

### admin\lessons.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lessons Management</title>
<link rel="stylesheet" href="css/admin.css">
<link rel="stylesheet" href="css/lessons.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<header class="admin-header">
  <div class="header-left">
    <img src="../assets/crr logo.jpg" class="logo" alt="Logo">
    <h2>VIDHYA VAARADHI</h2>
  </div>
  <nav class="header-center">
    <a href="dashboard.html">Dashboard</a>
    <a href="students.html">Students</a>
    <a href="courses.html">Courses</a>
    <a href="lessons.html" class="active">Lessons</a>
    <a href="notes.html">Notes</a>
    <a href="assignments.html">Assignments</a>
    <a href="quizzes.html">Quizzes</a>
    <a href="projects.html">Projects</a>
    <a href="certificates.html">Certificates</a>
    <a href="announcements.html">Announcements</a>
    <a href="reports.html">Reports</a>
    <a href="#" onclick="adminLogout()">Logout</a>
  </nav>
  <img src="../assets/TESTIMONIAL PROFILE.jpg" class="profile" alt="Admin">
</header>
<section class="admin-body">
  <aside class="admin-sidebar">
    <ul>
      <li><a href="dashboard.html">Dashboard</a></li>
      <li><a href="students.html">Students</a></li>
      <li><a href="courses.html">Courses</a></li>
      <li class="active"><a href="lessons.html">Lessons</a></li>
      <li><a href="notes.html">Notes</a></li>
      <li><a href="assignments.html">Assignments</a></li>
      <li><a href="quizzes.html">Quizzes</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="certificates.html">Certificates</a></li>
      <li><a href="announcements.html">Announcements</a></li>
      <li><a href="reports.html">Reports</a></li>
      <li><a href="#" onclick="adminLogout()">Logout</a></li>
    </ul>
  </aside>
  <main class="admin-main">
    <section class="page-head">
      <div>
        <h1>Lessons Management</h1>
        <p>Create lesson-level content for courses so newly added learning units can appear in the student course player and course detail flow.</p>
      </div>
    </section>
    <section class="panel-grid content-layout">
      <div class="form-card">
        <h3>Create or Update Lesson</h3>
        <form id="lessonForm" class="form-stack">
          <input type="hidden" id="lessonId">
          <div class="form-grid">
            <input id="lessonTitle" type="text" placeholder="Lesson Title" required>
            <select id="lessonCourse" required></select>
            <select id="lessonModule"></select>
            <input id="lessonCustomModule" type="text" placeholder="Module / Unit Name">
            <input id="lessonPosition" type="number" placeholder="Lesson Order" required>
            <input id="lessonDuration" type="text" placeholder="Duration (e.g. 20 min)" required>
          </div>
          <div class="form-grid">
            <div class="upload-field">
              <label for="lessonImageFile">Lesson Image</label>
              <input id="lessonImageFile" type="file" accept="image/*">
              <div id="lessonImageMeta" class="upload-meta">Optional lesson cover for the student course player.</div>
              <img id="lessonImagePreview" class="preview-thumb" alt="Lesson image preview" hidden>
            </div>
            <div class="upload-field">
              <label for="lessonVideoFile">Lesson Video</label>
              <input id="lessonVideoFile" type="file" accept="video/*">
              <div id="lessonVideoMeta" class="upload-meta">Upload local lesson media for the student course player.</div>
              <video id="lessonVideoPreview" class="preview-video" controls hidden></video>
            </div>
          </div>
          <div class="upload-field">
            <label for="lessonResourceFile">Lesson Resource</label>
            <input id="lessonResourceFile" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.zip,image/*,video/*">
            <div id="lessonResourceMeta" class="upload-meta">Optional supporting file or resource linked to this lesson.</div>
          </div>
          <textarea id="lessonDescription" placeholder="Short lesson description" required></textarea>
          <textarea id="lessonContent" placeholder="Detailed lesson content / explanation" required></textarea>
          <div class="action-row">
            <button type="submit">Save Lesson</button>
            <button type="button" class="btn btn-secondary" id="lessonReset">Clear</button>
          </div>
        </form>
      </div>
      <div class="panel">
        <h3>Content Notes</h3>
        <ul class="list-stack">
          <li>Lessons should only contain the fields needed for player flow, learning sequence, and media delivery.</li>
          <li>Uploaded video or image files now connect directly to the student course player experience.</li>
          <li>Review a lesson record before publishing to confirm module order and media setup.</li>
        </ul>
        <div class="form-grid compact-controls">
          <input id="lessonSearch" type="text" placeholder="Search lessons by title, module, or course">
          <select id="lessonSort">
            <option value="recent">Sort by Recent</option>
            <option value="course">Sort by Course</option>
            <option value="module">Sort by Module</option>
            <option value="order">Sort by Lesson Order</option>
          </select>
        </div>
      </div>
    </section>
    <section class="table-card">
      <h3>Lesson Library</h3>
      <table class="admin-table">
        <thead>
          <tr><th>Lesson</th><th>Course</th><th>Module</th><th>Order</th><th>Actions</th></tr>
        </thead>
        <tbody id="lessonsTable"></tbody>
      </table>
    </section>
  </main>
</section>
<footer class="admin-footer">
  <p>Help Centre</p>
  <p>Policy</p>
  <p>&copy; 2026 Vidhya Vaaradhi LMS</p>
</footer>
<script src="../js/lms-data.js"></script>
<script src="js/admin-data.js"></script>
<script src="js/admin.js"></script>
<script src="js/lessons.js"></script>
</body>
</html>
```

### admin\notes.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Notes Management</title>
<link rel="stylesheet" href="css/admin.css">
<link rel="stylesheet" href="css/notes.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<header class="admin-header">
  <div class="header-left">
    <img src="../assets/crr logo.jpg" class="logo" alt="Logo">
    <h2>VIDHYA VAARADHI</h2>
  </div>
  <nav class="header-center">
    <a href="dashboard.html">Dashboard</a>
    <a href="students.html">Students</a>
    <a href="courses.html">Courses</a>
    <a href="lessons.html">Lessons</a>
    <a href="notes.html" class="active">Notes</a>
    <a href="assignments.html">Assignments</a>
    <a href="quizzes.html">Quizzes</a>
    <a href="projects.html">Projects</a>
    <a href="certificates.html">Certificates</a>
    <a href="announcements.html">Announcements</a>
    <a href="reports.html">Reports</a>
    <a href="#" onclick="adminLogout()">Logout</a>
  </nav>
  <img src="../assets/TESTIMONIAL PROFILE.jpg" class="profile" alt="Admin">
</header>
<section class="admin-body">
  <aside class="admin-sidebar">
    <ul>
      <li><a href="dashboard.html">Dashboard</a></li>
      <li><a href="students.html">Students</a></li>
      <li><a href="courses.html">Courses</a></li>
      <li><a href="lessons.html">Lessons</a></li>
      <li class="active"><a href="notes.html">Notes</a></li>
      <li><a href="assignments.html">Assignments</a></li>
      <li><a href="quizzes.html">Quizzes</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="certificates.html">Certificates</a></li>
      <li><a href="announcements.html">Announcements</a></li>
      <li><a href="reports.html">Reports</a></li>
      <li><a href="#" onclick="adminLogout()">Logout</a></li>
    </ul>
  </aside>
  <main class="admin-main">
    <section class="page-head">
      <div>
        <h1>Notes Management</h1>
        <p>Create structured course-linked notes that appear directly in the student notes experience and support revision by course and module.</p>
      </div>
    </section>
    <section class="panel-grid content-layout">
      <div class="form-card">
        <h3>Create or Update Note</h3>
        <form id="noteForm" class="form-stack">
          <input type="hidden" id="noteId">
          <div class="form-grid">
            <input id="noteTitle" type="text" placeholder="Note Title" required>
            <select id="noteCourse" required></select>
            <select id="noteModule"></select>
            <select id="noteType" required>
              <option value="">Select Note Type</option>
              <option value="Study Notes">Study Notes</option>
              <option value="Revision Sheet">Revision Sheet</option>
              <option value="Reference Material">Reference Material</option>
            </select>
          </div>
          <textarea id="noteSummary" placeholder="Short summary" required></textarea>
          <textarea id="noteContent" placeholder="Detailed note content / study material" required></textarea>
          <div class="upload-field">
            <label for="noteResourceFile">Note Resource File</label>
            <input id="noteResourceFile" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.zip,image/*">
            <div id="noteResourceMeta" class="upload-meta">Upload PDF, study material, or academic note file for students.</div>
          </div>
          <div class="action-row">
            <button type="submit">Save Note</button>
            <button type="button" class="btn btn-secondary" id="noteReset">Clear</button>
          </div>
        </form>
      </div>
      <div class="panel">
        <h3>Publishing Notes</h3>
        <ul class="list-stack">
          <li>Attach notes to the correct course and module so the student notes workspace stays organized.</li>
          <li>Uploaded files now reflect into the student note experience as actual downloadable resources.</li>
          <li>Keep notes simple: title, summary, study content, and one useful attached resource.</li>
        </ul>
        <div class="form-grid compact-controls">
          <input id="noteSearch" type="text" placeholder="Search notes by title, category, or course">
          <select id="noteCategoryFilter">
            <option value="all">All Categories</option>
          </select>
        </div>
      </div>
    </section>
    <section class="table-card">
      <h3>Published Notes</h3>
      <table class="admin-table">
        <thead>
          <tr><th>Note</th><th>Course</th><th>Module</th><th>Type</th><th>Actions</th></tr>
        </thead>
        <tbody id="notesTable"></tbody>
      </table>
    </section>
  </main>
</section>
<footer class="admin-footer">
  <p>Help Centre</p>
  <p>Policy</p>
  <p>&copy; 2026 Vidhya Vaaradhi LMS</p>
</footer>
<script src="../js/lms-data.js"></script>
<script src="js/admin-data.js"></script>
<script src="js/admin.js"></script>
<script src="js/notes.js"></script>
</body>
</html>
```

### admin\projects.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Projects Management</title>
<link rel="stylesheet" href="css/admin.css">
<link rel="stylesheet" href="css/projects.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<header class="admin-header">
  <div class="header-left">
    <img src="../assets/crr logo.jpg" class="logo" alt="Logo">
    <h2>VIDHYA VAARADHI</h2>
  </div>
  <nav class="header-center">
    <a href="dashboard.html">Dashboard</a>
    <a href="students.html">Students</a>
    <a href="courses.html">Courses</a>
    <a href="lessons.html">Lessons</a>
    <a href="notes.html">Notes</a>
    <a href="assignments.html">Assignments</a>
    <a href="quizzes.html">Quizzes</a>
    <a href="projects.html" class="active">Projects</a>
    <a href="certificates.html">Certificates</a>
    <a href="announcements.html">Announcements</a>
    <a href="reports.html">Reports</a>
    <a href="#" onclick="adminLogout()">Logout</a>
  </nav>
  <img src="../assets/TESTIMONIAL PROFILE.jpg" class="profile" alt="Admin">
</header>
<section class="admin-body">
  <aside class="admin-sidebar">
    <ul>
      <li><a href="dashboard.html">Dashboard</a></li>
      <li><a href="students.html">Students</a></li>
      <li><a href="courses.html">Courses</a></li>
      <li><a href="lessons.html">Lessons</a></li>
      <li><a href="notes.html">Notes</a></li>
      <li><a href="assignments.html">Assignments</a></li>
      <li><a href="quizzes.html">Quizzes</a></li>
      <li class="active"><a href="projects.html">Projects</a></li>
      <li><a href="certificates.html">Certificates</a></li>
      <li><a href="announcements.html">Announcements</a></li>
      <li><a href="reports.html">Reports</a></li>
      <li><a href="#" onclick="adminLogout()">Logout</a></li>
    </ul>
  </aside>
  <main class="admin-main">
    <section class="page-head">
      <div>
        <h1>Projects Management</h1>
        <p>Create course-linked projects that flow into the student project workspace with objectives, requirements, and submission expectations.</p>
      </div>
    </section>
    <section class="panel-grid content-layout">
      <div class="form-card">
        <h3>Create or Update Project</h3>
        <form id="projectForm" class="form-stack">
          <input type="hidden" id="projectId">
          <div class="form-grid">
            <input id="projectTitle" type="text" placeholder="Project Title" required>
            <select id="projectCourse" required></select>
            <input id="projectDeadline" type="date" required>
            <input id="projectSubtitle" type="text" placeholder="Project Subtitle">
            <input id="projectTools" type="text" placeholder="Tools / Tech Stack (comma separated)">
            <select id="projectDifficulty">
              <option value="Beginner">Difficulty: Beginner</option>
              <option value="Intermediate" selected>Difficulty: Intermediate</option>
              <option value="Advanced">Difficulty: Advanced</option>
            </select>
          </div>
          <textarea id="projectDescription" placeholder="Project Description" required></textarea>
          <textarea id="projectObjectives" placeholder="Objectives (one per line)" required></textarea>
          <textarea id="projectRequirements" placeholder="Requirements / Deliverables (one per line)" required></textarea>
          <textarea id="projectExpectedOutcome" placeholder="Expected Outcome"></textarea>
          <div class="action-row">
            <button type="submit">Save Project</button>
            <button type="button" class="btn btn-secondary" id="projectReset">Clear</button>
          </div>
        </form>
      </div>
      <div class="panel">
        <h3>Project Guidelines</h3>
        <ul class="list-stack">
          <li>Projects should support practical learning connected to the course curriculum.</li>
          <li>Use line-by-line objectives and deliverables so the student workspace stays readable.</li>
          <li>Saved projects appear automatically in the student project flow for that course.</li>
        </ul>
        <div class="form-grid compact-controls">
          <input id="projectSearch" type="text" placeholder="Search projects by title or course">
          <select id="projectDifficultyFilter">
            <option value="all">All Difficulty Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>
    </section>
    <section class="table-card">
      <h3>Project Workspace Inventory</h3>
      <table class="admin-table">
        <thead>
          <tr><th>Project</th><th>Course</th><th>Deadline</th><th>Requirements</th><th>Actions</th></tr>
        </thead>
        <tbody id="projectsTable"></tbody>
      </table>
    </section>
  </main>
</section>
<footer class="admin-footer">
  <p>Help Centre</p>
  <p>Policy</p>
  <p>&copy; 2026 Vidhya Vaaradhi LMS</p>
</footer>
<script src="../js/lms-data.js"></script>
<script src="js/admin-data.js"></script>
<script src="js/admin.js"></script>
<script src="js/projects.js"></script>
</body>
</html>
```

### admin\quizzes.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Quiz Management</title>
<link rel="stylesheet" href="css/admin.css">
<link rel="stylesheet" href="css/quizzes.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<header class="admin-header">
  <div class="header-left">
    <img src="../assets/crr logo.jpg" class="logo" alt="Logo">
    <h2>VIDHYA VAARADHI</h2>
  </div>
  <nav class="header-center">
    <a href="dashboard.html">Dashboard</a>
    <a href="students.html">Students</a>
    <a href="courses.html">Courses</a>
    <a href="lessons.html">Lessons</a>
    <a href="notes.html">Notes</a>
    <a href="assignments.html">Assignments</a>
    <a href="quizzes.html" class="active">Quizzes</a>
    <a href="projects.html">Projects</a>
    <a href="certificates.html">Certificates</a>
    <a href="announcements.html">Announcements</a>
    <a href="reports.html">Reports</a>
    <a href="#" onclick="adminLogout()">Logout</a>
  </nav>
  <img src="../assets/TESTIMONIAL PROFILE.jpg" class="profile" alt="Admin">
</header>
<section class="admin-body">
  <aside class="admin-sidebar">
    <ul>
      <li><a href="dashboard.html">Dashboard</a></li>
      <li><a href="students.html">Students</a></li>
      <li><a href="courses.html">Courses</a></li>
      <li><a href="lessons.html">Lessons</a></li>
      <li><a href="notes.html">Notes</a></li>
      <li><a href="assignments.html">Assignments</a></li>
      <li class="active"><a href="quizzes.html">Quizzes</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="certificates.html">Certificates</a></li>
      <li><a href="announcements.html">Announcements</a></li>
      <li><a href="reports.html">Reports</a></li>
      <li><a href="#" onclick="adminLogout()">Logout</a></li>
    </ul>
  </aside>
  <main class="admin-main">
    <section class="page-head">
      <div>
        <h1>Quiz Management</h1>
        <p>Create quizzes that map directly to the learner exam experience, including time limits, questions, options, and correct answers.</p>
      </div>
    </section>
    <section class="panel-grid">
      <div class="form-card">
        <h3>Create or Update Quiz</h3>
        <form id="quizForm" class="form-stack">
          <input type="hidden" id="quizId">
          <div class="form-grid">
            <input id="quizTitle" type="text" placeholder="Quiz Title" required>
            <select id="quizCourse" required></select>
            <input id="quizDuration" type="number" placeholder="Duration in Minutes" required>
            <input id="quizPassScore" type="number" placeholder="Pass Score %" required>
            <select id="quizStatus">
              <option value="active">Active</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <textarea id="quizInstructions" placeholder="Quiz Instructions (one per line)"></textarea>
          <div class="upload-field">
            <label for="quizReferenceFile">Quiz Reference File</label>
            <input id="quizReferenceFile" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,image/*">
            <div id="quizReferenceMeta" class="upload-meta">Optional reference sheet or instructions file for the quiz setup.</div>
          </div>
          <div class="csv-upload">
            <label for="quizCsvUpload">Bulk Upload Questions via CSV</label>
            <input id="quizCsvUpload" type="file" accept=".csv">
            <button type="button" class="btn btn-secondary" id="quizCsvImportBtn">Import CSV</button>
          </div>
          <div class="question-builder-head">
            <h4>Questions</h4>
            <button type="button" class="btn btn-secondary" id="addQuestionBtn">Add Question</button>
          </div>
          <div id="quizQuestions" class="question-builder"></div>
          <div class="action-row">
            <button type="submit">Save Quiz</button>
            <button type="button" class="btn btn-secondary" id="quizReset">Clear</button>
          </div>
        </form>
      </div>
      <div class="panel">
        <h3>Quiz Control Notes</h3>
        <ul class="list-stack">
          <li>Question structure here stays compatible with the learner quiz and exam experience.</li>
          <li>Use simple multiple-choice prompts with one clear correct answer.</li>
          <li>Reference uploads are optional and exist only to support meaningful quiz context.</li>
        </ul>
        <div class="form-grid compact-controls">
          <input id="quizSearch" type="text" placeholder="Search quizzes by title or course">
          <select id="quizStatusFilter">
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="draft">Draft</option>
            <option value="review-ready">Review Ready</option>
          </select>
        </div>
      </div>
    </section>
    <section class="table-card">
      <h3>Quiz Inventory</h3>
      <table class="admin-table">
        <thead>
          <tr><th>Quiz</th><th>Course</th><th>Duration</th><th>Attempts</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody id="quizzesTable"></tbody>
      </table>
    </section>
  </main>
</section>
<footer class="admin-footer">
  <p>Help Centre</p>
  <p>Policy</p>
  <p>&copy; 2026 Vidhya Vaaradhi LMS</p>
</footer>
<script src="../js/lms-data.js"></script>
<script src="js/admin-data.js"></script>
<script src="js/admin.js"></script>
<script src="js/quizzes.js"></script>
</body>
</html>
```

### admin\reports.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Reports</title>
<link rel="stylesheet" href="css/admin.css">
<link rel="stylesheet" href="css/reports.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<header class="admin-header">
  <div class="header-left">
    <img src="../assets/crr logo.jpg" class="logo" alt="Logo">
    <h2>VIDHYA VAARADHI</h2>
  </div>
  <nav class="header-center">
    <a href="dashboard.html">Dashboard</a>
    <a href="students.html">Students</a>
    <a href="courses.html">Courses</a>
    <a href="lessons.html">Lessons</a>
    <a href="notes.html">Notes</a>
    <a href="assignments.html">Assignments</a>
    <a href="quizzes.html">Quizzes</a>
    <a href="projects.html">Projects</a>
    <a href="certificates.html">Certificates</a>
    <a href="announcements.html">Announcements</a>
    <a href="reports.html" class="active">Reports</a>
    <a href="#" onclick="adminLogout()">Logout</a>
  </nav>
  <img src="../assets/TESTIMONIAL PROFILE.jpg" class="profile" alt="Admin">
</header>
<section class="admin-body">
  <aside class="admin-sidebar">
    <ul>
      <li><a href="dashboard.html">Dashboard</a></li>
      <li><a href="students.html">Students</a></li>
      <li><a href="courses.html">Courses</a></li>
      <li><a href="lessons.html">Lessons</a></li>
      <li><a href="notes.html">Notes</a></li>
      <li><a href="assignments.html">Assignments</a></li>
      <li><a href="quizzes.html">Quizzes</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="certificates.html">Certificates</a></li>
      <li><a href="announcements.html">Announcements</a></li>
      <li class="active"><a href="reports.html">Reports</a></li>
      <li><a href="#" onclick="adminLogout()">Logout</a></li>
    </ul>
  </aside>
  <main class="admin-main">
    <section class="page-head">
      <div>
        <h1>Reports & Analytics</h1>
        <p>Review enrollment health, course popularity, completion trends, quiz participation, and student activity from one academic operations view.</p>
      </div>
    </section>
    <section class="stats-grid" id="reportStats"></section>
    <section class="panel-grid">
      <div class="table-card">
        <h3>Course Popularity</h3>
        <table class="admin-table">
          <thead>
            <tr><th>Course</th><th>Enrollments</th><th>Completed</th><th>Completion Rate</th></tr>
          </thead>
          <tbody id="coursePopularityTable"></tbody>
        </table>
      </div>
      <div class="table-card">
        <h3>Quiz Participation</h3>
        <table class="admin-table">
          <thead>
            <tr><th>Quiz</th><th>Course</th><th>Attempts</th><th>Status</th></tr>
          </thead>
          <tbody id="quizParticipationTable"></tbody>
        </table>
      </div>
    </section>
    <section class="panel-grid">
      <div class="table-card">
        <h3>Completion Summary</h3>
        <table class="admin-table">
          <thead>
            <tr><th>Student</th><th>Enrolled</th><th>Completed</th><th>Average Progress</th></tr>
          </thead>
          <tbody id="completionSummaryTable"></tbody>
        </table>
      </div>
      <div class="table-card">
        <h3>Student Activity Summary</h3>
        <table class="admin-table">
          <thead>
            <tr><th>Student</th><th>Status</th><th>Current Focus</th><th>Attention Flag</th></tr>
          </thead>
          <tbody id="studentActivityTable"></tbody>
        </table>
      </div>
    </section>
  </main>
</section>
<footer class="admin-footer">
  <p>Help Centre</p>
  <p>Policy</p>
  <p>&copy; 2026 Vidhya Vaaradhi LMS</p>
</footer>
<script src="../js/lms-data.js"></script>
<script src="js/admin-data.js"></script>
<script src="js/admin.js"></script>
<script src="js/reports.js"></script>
</body>
</html>
```

### admin\students.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Students Manager</title>
<link rel="stylesheet" href="css/admin.css">
<link rel="stylesheet" href="css/students.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<header class="admin-header">
  <div class="header-left">
    <img src="../assets/crr logo.jpg" class="logo" alt="Logo">
    <h2>VIDHYA VAARADHI</h2>
  </div>
  <nav class="header-center">
    <a href="dashboard.html">Dashboard</a>
    <a href="students.html" class="active">Students</a>
    <a href="courses.html">Courses</a>
    <a href="lessons.html">Lessons</a>
    <a href="notes.html">Notes</a>
    <a href="assignments.html">Assignments</a>
    <a href="quizzes.html">Quizzes</a>
    <a href="projects.html">Projects</a>
    <a href="certificates.html">Certificates</a>
    <a href="announcements.html">Announcements</a>
    <a href="reports.html">Reports</a>
    <a href="#" onclick="adminLogout()">Logout</a>
  </nav>
  <img src="../assets/TESTIMONIAL PROFILE.jpg" class="profile" alt="Admin">
</header>
<section class="admin-body">
  <aside class="admin-sidebar">
    <ul>
      <li><a href="dashboard.html">Dashboard</a></li>
      <li class="active"><a href="students.html">Students</a></li>
      <li><a href="courses.html">Courses</a></li>
      <li><a href="lessons.html">Lessons</a></li>
      <li><a href="notes.html">Notes</a></li>
      <li><a href="assignments.html">Assignments</a></li>
      <li><a href="quizzes.html">Quizzes</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="certificates.html">Certificates</a></li>
      <li><a href="announcements.html">Announcements</a></li>
      <li><a href="reports.html">Reports</a></li>
      <li><a href="#" onclick="adminLogout()">Logout</a></li>
    </ul>
  </aside>
  <main class="admin-main">
    <section class="page-head">
      <div>
        <h1>Student Management</h1>
        <p>Review enrolled learners, course progress, and completion state in a clean academic operations view.</p>
      </div>
    </section>
    <section class="stats-grid" id="studentStats"></section>
    <section class="panel-grid">
      <div class="panel">
        <h3>Search Students</h3>
        <input id="studentSearch" type="text" placeholder="Search by name, email, department, or course">
        <div class="form-grid compact-controls">
          <select id="studentStatusFilter">
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <select id="studentDepartmentFilter">
            <option value="all">All Departments</option>
          </select>
          <select id="studentSort">
            <option value="name">Sort by Name</option>
            <option value="progress">Sort by Progress</option>
            <option value="completed">Sort by Completed Courses</option>
            <option value="certificates">Sort by Certificates</option>
          </select>
        </div>
      </div>
      <div class="panel">
        <h3>Student Snapshot</h3>
        <div id="studentDetailPanel" class="empty-state">Select a student to view enrolled courses, progress, and academic summary.</div>
      </div>
    </section>
    <section class="table-card">
      <h3>Student Records</h3>
      <table class="admin-table">
        <thead>
          <tr><th>Student</th><th>Department</th><th>Courses</th><th>Progress Snapshot</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody id="studentsTable"></tbody>
      </table>
    </section>
  </main>
</section>
<div class="student-modal-overlay" id="studentModalOverlay" hidden></div>
<div class="student-modal" id="studentDetailModal" hidden aria-hidden="true">
  <div class="student-modal-card">
    <div class="student-modal-head">
      <div>
        <h3 id="studentModalTitle">Student Record</h3>
        <p id="studentModalSubtitle" class="helper-text">Detailed learner profile</p>
      </div>
      <button type="button" class="btn btn-secondary" id="closeStudentModal">Close</button>
    </div>
    <div id="studentModalBody"></div>
  </div>
</div>
<footer class="admin-footer">
  <p>Help Centre</p>
  <p>Policy</p>
  <p>&copy; 2026 Vidhya Vaaradhi LMS</p>
</footer>
<script src="../js/lms-data.js"></script>
<script src="js/admin-data.js"></script>
<script src="js/admin.js"></script>
<script src="js/students.js"></script>
</body>
</html>
```

### assignments.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Weekly Assignments - Vaaradhi LMS</title>
<link rel="stylesheet" href="css/assignments.css">
</head>

<body>

<header class="main-header">
  <div class="header-left">
    <img src="assets/crr logo.jpg" class="logo">
    <h2>Vaaradhi LMS</h2>
  </div>

  <nav class="header-nav">
    <a href="student.html">Home</a>
    <a href="my-courses.html">My Learning</a>
    <a href="assignments.html" class="active">Assignments</a>
    <a href="quiz.html">Quizzes</a>
    <a href="project.html?course=devops">Projects</a>
    <a href="notes.html?course=devops">Notes</a>
    <a href="certificates.html">Certificates</a>
  </nav>
</header>

<div class="assignment-wrapper">
  <aside class="week-sidebar">
    <h3>Assignments</h3>
    <ul></ul>
  </aside>

  <section class="assignment-content">
    <h2 id="weekTitle">Assignment details</h2>

    <form id="assignmentForm"></form>

    <div class="submission-message" id="submissionMessage">
      Assignment submitted successfully. Results will be reflected in your profile and dashboard.
    </div>
  </section>
</div>

<footer class="main-footer">
&copy; 2026 Vaaradhi LMS. All rights reserved.
</footer>

<script src="js/lms-data.js"></script>
<script src="js/assignments.js"></script>

</body>
</html>
```

### auth.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Signup - Vaaradhi LMS</title>
  <link rel="stylesheet" href="css/auth.css">
</head>
<body class="auth-page">
<script src="js/auth.js"></script>

<div class="page-wrapper">
  <div class="auth-shell">
    <section class="auth-visual">
      <div class="auth-visual-copy">
        <span class="eyebrow">Student Access</span>
        <h1>Create your learning account</h1>
        <p>Join the student learning experience built for guided academic progress, structured evaluation, and meaningful course completion.</p>
        <div class="auth-points">
          <span>Structured academic learning paths with clear progress visibility</span>
          <span>Assignments, quizzes, and projects connected to real course flow</span>
          <span>Certificate-ready completion journeys for committed learners</span>
        </div>
      </div>
      <div class="auth-visual-frame">
        <div class="visual-badge">"A student account is the starting point for a more organized, trackable, and confident learning journey."</div>
      </div>
    </section>

    <section class="auth-panel">
      <div class="auth-switch">
        <a class="switch-btn" href="login.html">Login</a>
        <button class="switch-btn active" type="button">Signup</button>
      </div>

      <div class="auth-heading">
        <h2>Student signup</h2>
        <p>Public signup creates student accounts only. Admin accounts can be created only inside the admin panel.</p>
      </div>

      <form id="signupForm" class="form active-form" onsubmit="event.preventDefault(); registerUser()">
        <div class="input-group">
          <label for="signupName">Full Name</label>
          <input type="text" id="signupName" placeholder="Enter your full name" required>
        </div>

        <div class="input-group">
          <label for="signupEmail">Email Address</label>
          <input type="email" id="signupEmail" placeholder="Enter your email address" required>
        </div>

        <div class="input-group">
          <label for="signupPassword">Password</label>
          <input type="password" id="signupPassword" placeholder="Create a secure password" required>
        </div>

        <button type="submit" class="primary-auth-btn">Create Student Account</button>

        <div class="auth-helper">
          Already have an account?
          <a href="login.html">Go to Login</a>
        </div>

        <a class="back-home-link" href="index.html">Back to Home</a>
      </form>
    </section>
  </div>
</div>

</body>
</html>
```

### certificates.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Certificates</title>

<link rel="stylesheet" href="css/certificates.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>

<header class="header">
  <div class="header-left">
    <a href="student.html"><img src="assets/crr logo.jpg" class="logo"></a>
    <h2>VIDHYA VAARADHI</h2>
  </div>

  <div class="header-right">
    <a href="student.html" title="Back to Dashboard">Dashboard</a>
    <a href="my-courses.html" title="Back to My Courses">My Courses</a>
    <a href="index.html" onclick="logout()" style="color: #ff6b6b; font-weight: 600; text-decoration: none;">Logout</a>
    <img src="assets/TESTIMONIAL PROFILE.jpg" class="profile">
  </div>
</header>

<section class="cert-hero">
  <h1>Your Certifications</h1>
  <p>Recognizing your learning achievements</p>
</section>

<section class="completed-section">
  <h2>Earned Certificates</h2>
  <div class="cert-grid" id="certGrid">
    <p style="text-align:center;color:#64748b;">Loading certificate history...</p>
  </div>
</section>

<div class="cert-modal" id="certModal">
  <span class="close" onclick="closeCert()">X</span>
  <img id="certPreview">
  <a id="modalDownload" href="#" download>
    <button>Download</button>
  </a>
</div>

<script src="js/lms-data.js"></script>
<script src="js/certificates.js"></script>

<script>
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
</script>

</body>
</html>
```

### coming-soon.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coming Soon - Vaaradhi LMS</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .coming-soon-container {
      text-align: center;
      background: white;
      padding: 60px 40px;
      border-radius: 15px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      max-width: 600px;
    }

    .coming-soon-container h1 {
      font-size: 48px;
      color: #333;
      margin-bottom: 20px;
      font-weight: 700;
    }

    .coming-soon-container p {
      font-size: 18px;
      color: #666;
      margin-bottom: 30px;
      line-height: 1.6;
    }

    .coming-soon-container .emoji {
      font-size: 80px;
      margin-bottom: 20px;
      display: block;
    }

    .coming-soon-container .back-btn {
      display: inline-block;
      padding: 12px 30px;
      background: #667eea;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      transition: background 0.3s ease;
      border: none;
      cursor: pointer;
      font-size: 16px;
    }

    .coming-soon-container .back-btn:hover {
      background: #764ba2;
    }

    .features {
      margin-top: 40px;
      padding-top: 40px;
      border-top: 1px solid #eee;
      text-align: left;
    }

    .features h3 {
      color: #333;
      margin-bottom: 15px;
      font-size: 20px;
      text-align: center;
    }

    .features ul {
      list-style: none;
      text-align: center;
    }

    .features ul li {
      padding: 8px 0;
      color: #666;
      font-size: 16px;
    }

    .features ul li:before {
      content: "âœ“ ";
      color: #28a745;
      font-weight: bold;
      margin-right: 8px;
    }
  </style>
</head>

<body>

<div class="coming-soon-container">
  <span class="emoji">ðŸš€</span>
  <h1>Coming Soon!</h1>
  <p>
    This feature is currently under development. We're working hard to bring you an amazing experience.
  </p>

  <button class="back-btn" onclick="goBack()">Go Back</button>

  <div class="features">
    <h3>What's Next?</h3>
    <ul>
      <li>New exciting features</li>
      <li>Improved user experience</li>
      <li>Advanced learning tools</li>
      <li>Community interactions</li>
    </ul>
  </div>
</div>

<script>
function goBack() {
  window.history.back();
}
</script>

</body>
</html>
```

### community.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Community | College LMS</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/community.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

<nav class="navbar">
  <div class="nav-left">
    <img src="assets/crr logo.jpg" alt="College Logo">
    <div class="site-name">VIDHYA VARADHI</div>
  </div>

  <div class="nav-search">
    <input type="text" placeholder="Search courses...">
    <button>Search</button>
  </div>

  <div class="nav-center">
    <div class="nav-item" onclick="window.location.href='index.html'">Home</div>
    <div class="nav-item" onclick="window.location.href='courses.html'">Courses</div>
    <div class="nav-item" onclick="window.location.href='about.html'">About</div>
    <div class="nav-item active-nav">Community</div>
  </div>

  <div class="nav-right">
    <a href="login.html"><button class="login-btn">Login</button></a>
    <a href="auth.html"><button class="signup-btn">Signup</button></a>
  </div>
</nav>

<section class="community-hero reveal active">
  <div class="community-shell hero-layout">
    <div class="hero-copy">
      <span class="hero-kicker">Student Community</span>
      <h1>A collaborative learning space for CR Reddy College of Engineering</h1>
      <p>
        The community experience brings students together through academic discussion, project
        collaboration, learning circles, announcements, peer support, and achievement highlights that
        extend learning beyond individual lessons.
      </p>
      <div class="hero-actions">
        <a href="auth.html" class="primary-link">Join the Learning Community</a>
        <a href="courses.html" class="secondary-link">Explore Courses</a>
      </div>
    </div>
    <div class="premium-board">
      <div class="board-header">
        <span class="board-chip">Community Overview</span>
        <strong>Connected academic participation</strong>
      </div>
      <div class="board-grid">
        <div class="board-card">
          <h3>Learning Circles</h3>
          <p>Focused groups for course topics, revision, and peer support.</p>
        </div>
        <div class="board-card">
          <h3>Project Collaboration</h3>
          <p>Course-linked teamwork around practical deliverables and ideas.</p>
        </div>
        <div class="board-card">
          <h3>Announcements</h3>
          <p>Academic updates, quiz reminders, and event highlights in one space.</p>
        </div>
        <div class="board-card">
          <h3>Achievement Spotlights</h3>
          <p>Celebrate milestones, completion, and active student participation.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="community-section reveal">
  <div class="community-shell section-layout">
    <div class="section-copy premium-card">
      <span class="section-chip">Community Highlights</span>
      <h2>Learning feels stronger when students grow together.</h2>
      <p>
        The LMS community is built to support structured interaction rather than random social noise.
        Students can stay engaged with academic activities, discover events, collaborate on ideas, and
        learn as part of a more active and connected environment.
      </p>
    </div>
    <div class="highlights-stack">
      <div class="premium-card highlight-block">
        <h3>Academic Discussions</h3>
        <p>Ask questions, clarify concepts, and discuss course topics with peers.</p>
      </div>
      <div class="premium-card highlight-block">
        <h3>Project Sharing</h3>
        <p>Exchange progress, ideas, and technical approaches in a guided way.</p>
      </div>
      <div class="premium-card highlight-block">
        <h3>Engagement Updates</h3>
        <p>Stay aware of important activities, deadlines, and community learning events.</p>
      </div>
    </div>
  </div>
</section>

<section class="community-section reveal">
  <div class="community-shell feature-layout">
    <div class="feature-column premium-card">
      <span class="section-chip">Collaboration Areas</span>
      <div class="feature-item">
        <h3>Student Discussions</h3>
        <p>Meaningful academic exchanges around lessons, assessments, and concepts.</p>
      </div>
      <div class="feature-item">
        <h3>Learning Circles</h3>
        <p>Smaller peer-focused spaces for revision, practice, and progress support.</p>
      </div>
      <div class="feature-item">
        <h3>Peer Support</h3>
        <p>Encourage students to help one another stay motivated and academically active.</p>
      </div>
    </div>
    <div class="feature-column premium-card accent-card">
      <span class="section-chip">Campus-Connected Experience</span>
      <h2>A digital extension of student participation and academic teamwork</h2>
      <p>
        This space reflects the spirit of engineering collaboration at CR Reddy College of Engineering.
        It supports shared learning energy through discussion, project contribution, academic events,
        announcements, and recognition of student effort.
      </p>
    </div>
  </div>
</section>

<section class="community-section reveal">
  <div class="community-shell timeline-shell premium-card">
    <div class="timeline-copy">
      <span class="section-chip">Community Flow</span>
      <h2>How participation supports better learning</h2>
      <p>
        Students learn more effectively when they can ask questions, exchange ideas, share project
        progress, and stay motivated inside an active academic environment.
      </p>
    </div>
    <div class="timeline-track">
      <div class="timeline-item">
        <span>01</span>
        <h3>Discuss</h3>
        <p>Clarify ideas and stay engaged with course topics.</p>
      </div>
      <div class="timeline-item">
        <span>02</span>
        <h3>Collaborate</h3>
        <p>Join group initiatives, project work, and peer learning circles.</p>
      </div>
      <div class="timeline-item">
        <span>03</span>
        <h3>Participate</h3>
        <p>Follow events, updates, and announcements connected to learning.</p>
      </div>
      <div class="timeline-item">
        <span>04</span>
        <h3>Grow</h3>
        <p>Build confidence, belonging, and stronger academic momentum.</p>
      </div>
    </div>
  </div>
</section>

<section class="community-section reveal">
  <div class="community-shell engagement-grid">
    <div class="premium-card event-card">
      <span class="section-chip">Academic Events</span>
      <h3>Upcoming Learning Activities</h3>
      <ul>
        <li>DevOps discussion session on deployment workflows</li>
        <li>Quantum Computing revision circle for final review</li>
        <li>Project showcase spotlight for practical submissions</li>
      </ul>
    </div>
    <div class="premium-card event-card">
      <span class="section-chip">Achievement Spotlights</span>
      <h3>Celebrating Student Progress</h3>
      <ul>
        <li>Completed course milestones and earned certificates</li>
        <li>Strong quiz performance and assignment completion</li>
        <li>Project participation and peer contribution highlights</li>
      </ul>
    </div>
  </div>
</section>

<section class="community-cta reveal">
  <div class="community-shell">
    <div class="premium-card cta-panel">
      <h2>Be part of a more connected academic experience.</h2>
      <p>
        Join a learning environment where students of CR Reddy College of Engineering can collaborate,
        participate, and grow together through meaningful academic engagement.
      </p>
      <div class="hero-actions">
        <a href="auth.html" class="primary-link">Join the Learning Community</a>
        <a href="about.html" class="secondary-link">About the Institution</a>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="footer-grid">
    <div>
      <h4>Platform</h4>
      <p>About</p>
      <p>Courses</p>
      <p>Certifications</p>
    </div>

    <div>
      <h4>Community</h4>
      <p>Discussion Forums</p>
      <p>Student Groups</p>
      <p>Events</p>
    </div>

    <div>
      <h4>Support</h4>
      <p>Help Center</p>
      <p>Contact</p>
      <p>Feedback</p>
    </div>
  </div>

  <div class="copyright">
    &copy; 2026 College LMS Platform • All Rights Reserved
  </div>
</footer>

<script src="js/script.js"></script>
</body>
</html>
```

### completed.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Completed Courses</title>

  <link rel="stylesheet" href="css/student.css">

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>

<!-- ================= HEADER ================= -->

<header class="header">

  <div class="menu-toggle" id="menuToggle">â˜°</div>

  <h2 class="logo">VIDHYA VAARADHI</h2>

  <nav class="nav-links">

  <a href="student.html">Home</a>

  <!-- COURSES DROPDOWN -->
  <div class="dropdown">

    <a class="dropbtn">Courses â–¾</a>

    <div class="dropdown-content">

      <a href="student.html">Top Courses</a>
      <a href="my-courses.html">My Courses</a>
      <a href="register-course.html">Register</a>
      <a href="completed.html">Completed</a>
      <a href="certificates.html">Certificates</a>

    </div>

  </div>

  <a href="#">Institutions</a>
  <a href="#">Community</a>
  <a href="profile.html">Profile</a>
  <a href="index.html" onclick="logout()" style="color: #ff6b6b; font-weight: 600;">Logout</a>

</nav>

</header>

<!-- ================= MOBILE SIDEBAR ================= -->

<aside class="mobile-sidebar" id="sidebar">

  <a href="student.html">Home</a>
  <a href="my-courses.html">Courses</a>
  <a href="#">Institutions</a>
  <a href="#">Community</a>
  <a href="profile.html">Profile</a>
  <a href="index.html">Logout</a>

</aside>

<!-- ================= MAIN ================= -->

<main class="main">

  <section class="completed-courses">

    <h2>Completed Courses</h2>
    <p>View all your completed courses and certificates.</p>

  </section>

</main>

<!-- ================= FOOTER ================= -->

<footer class="footer">

  <div class="footer-container">

    <!-- BRAND -->

    <div class="footer-brand">

      <div class="brand-header">
        <img src="assets/crr logo.jpg">
        <h2>VIDHYA VAARADHI</h2>
      </div>

      <p class="tagline">
        A Platform of Education
      </p>

    </div>

    <!-- LINKS -->

    <div class="footer-links">

      <div>
        <h4>Community</h4>
        <p>Forums</p>
        <p>Events</p>
        <p>Discussions</p>
      </div>

      <div>
        <h4>Quick Links</h4>
        <p>About</p>
        <p>Courses</p>
        <p>Support</p>
      </div>

    </div>

  </div>

  <div class="copyright">
    Â© 2026 Vidhya Vaaradhi â€¢ All Rights Reserved
  </div>

</footer>

<script src="js/student.js"></script>

<script>
function logout() {
  window.location.href = "index.html";
}
</script>

</body>
</html>
```

### course-details.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Course Details - Vaaradhi LMS</title>
  <link rel="stylesheet" href="css/course-details.css">
</head>

<body>

<script src="js/lms-data.js"></script>
<script src="js/course-details.js"></script>

<!-- ================= TOP STRIP ================= -->
<div class="top-strip">
  Academic & Industry Skill Development Initiative
</div>

<!-- ================= HEADER ================= -->
<header class="main-header">

  <div class="header-left">
    <img src="assets/crr logo.jpg" class="logo">
    <div>
      <h2>Vaaradhi LMS</h2>
      <div class="subtitle">Digital Academic Platform</div>
    </div>
  </div>

  <nav class="header-nav">
    <a href="student.html">Home</a>
    <a href="courses.html">Explore Courses</a>
    <a href="my-courses.html">My Learning</a>
  </nav>

</header>


<!-- ================= HERO SECTION ================= -->
<section class="course-hero">

  <div class="hero-left">

    <div class="breadcrumb">
      Home > Explore Courses > Course
    </div>

    <h1>Course Title</h1>

    <p class="hero-desc">
      Course description loads here.
    </p>

    <!-- Rating & Students -->
    <div class="hero-tags">
      <span>4.8 Rating</span>
      <span>5,200+ Students</span>
      <span>12 Weeks</span>
      <span>Online</span>
      <span class="badge open">Enrollment Open</span>
    </div>

  </div>

  <div class="hero-image">
    <img src="assets/ML.jpg" alt="Machine Learning Course">
  </div>

</section>


<!-- ================= MAIN CONTENT ================= -->
<section class="details-wrapper">

  <div class="details-content">

    <!-- HIGHLIGHTS -->
    <div class="info-card">
      <h2>Course Highlights</h2>
      <div class="highlight-grid">
        <div>Included: Capstone Industry Project</div>
        <div>Included: Real-world Case Studies</div>
        <div>Included: Weekly Assessments</div>
        <div>Included: Interview Preparation</div>
        <div>Included: Deployment Workflows</div>
        <div>Included: Verified Certificate</div>
      </div>
    </div>


    <!-- ABOUT -->
    <div class="info-card">
      <h2>About This Course</h2>
      <p>
        This comprehensive Machine Learning course provides a structured
        foundation in supervised and unsupervised learning techniques.
        Students will work with regression, classification, neural networks,
        model evaluation strategies and production-level deployment workflows.
      </p>

      <p style="margin-top:12px;">
        By the end of this program, you will be capable of building,
        evaluating and deploying ML models in real-world environments.
      </p>
    </div>


    <!-- SYLLABUS -->
    <div class="info-card">
      <h2>Course Syllabus</h2>
      <ul class="syllabus-list">
        <li>Week 1: Introduction to Machine Learning</li>
        <li>Week 2: Linear & Logistic Regression</li>
        <li>Week 3: Decision Trees & Random Forest</li>
        <li>Week 4: Support Vector Machines</li>
        <li>Week 5: Neural Networks</li>
        <li>Week 6-8: Advanced ML Algorithms</li>
        <li>Week 9-10: Model Optimization</li>
        <li>Week 11-12: Capstone Project</li>
      </ul>
    </div>


    <!-- INSTRUCTOR -->
    <div class="info-card">
      <h2>Instructor</h2>
      <div class="instructor-box">
        <div class="instructor-photo"></div>
        <div>
          <h4>Dr. A. Kumar</h4>
          <p>
            15+ years of experience in Artificial Intelligence research,
            production-grade ML systems and industry consulting.
          </p>
        </div>
      </div>
    </div>

  </div>


  <!-- ================= ENROLLMENT SIDE PANEL ================= -->
  <aside class="enroll-panel">

    <div class="enroll-card">

      <h3>Course Details</h3>

      <div class="detail-row">
        <span>Duration</span>
        <span>12 Weeks</span>
      </div>

      <div class="detail-row">
        <span>Mode</span>
        <span>Online</span>
      </div>

      <div class="detail-row">
        <span>Language</span>
        <span>English</span>
      </div>

      <div class="detail-row">
        <span>Level</span>
        <span>Intermediate</span>
      </div>

      <div class="detail-row">
        <span>Start Date</span>
        <span>January 2026</span>
      </div>

      <div class="detail-row">
        <span>Certificate</span>
        <span>Yes (Verified)</span>
      </div>

      <button class="enroll-btn">
        Enroll Now
      </button>

      <button class="secondary-btn">
        Download Brochure
      </button>

    </div>

  </aside>

</section>


<!-- ================= FOOTER ================= -->
<footer class="main-footer">
  <div class="footer-bottom">
    &copy; 2026 Vaaradhi LMS. All rights reserved.
  </div>
</footer>

</body>
</html>

```

### course-player.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Course Player</title>

<link rel="stylesheet" href="css/course-player.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>

<header class="header">
  <div class="header-left">
    <a href="my-courses.html"><img src="assets/crr logo.jpg" class="logo"></a>
    <h2>VIDHYA VAARADHI</h2>
  </div>

  <div class="header-right">
    <a href="my-courses.html" title="Back to My Courses">My Courses</a>
    <a href="assignments.html" title="Assignments">Assignments</a>
    <a href="certificates.html" title="Certificates">Certificates</a>
    <a href="index.html" onclick="logout()" style="color: #ff6b6b; font-weight: 600; text-decoration: none;">Logout</a>
    <img src="assets/TESTIMONIAL PROFILE.jpg" class="profile">
  </div>
</header>

<section class="player-layout">
  <aside class="curriculum">
    <h3>Course Content</h3>
  </aside>

  <div class="video-area">
    <div class="course-summary-panel" id="courseSummaryPanel"></div>
    <h2 id="lessonTitle">Lesson</h2>

    <div class="video-player" id="lessonMediaShell">
      <div class="media-header">
        <span class="media-badge" id="mediaBadge">Lesson Media</span>
        <span class="media-meta" id="mediaMeta">Image preview</span>
      </div>
      <div class="media-stage">
        <video id="videoPlayer" controls playsinline poster="assets/DEVOPS.jpg"></video>
        <div class="media-fallback" id="mediaFallback">
          <img id="lessonMediaImage" src="assets/DEVOPS.jpg" alt="Lesson preview">
        </div>
      </div>
    </div>

    <div class="player-meta" id="playerMeta"></div>
    <div class="lesson-controls" id="lessonControls"></div>

    <div class="player-tabs">
      <button class="tab active" data-tab="overview">Overview</button>
      <button class="tab" data-tab="resources">Resources</button>
      <button class="tab" data-tab="discussion">Discussion</button>
      <button class="tab" data-tab="assignments">Assignments</button>
    </div>

    <div class="tab-content" id="tabContent">
      <p>Lesson details appear here.</p>
    </div>
  </div>
</section>

<button class="complete-course-btn" id="completeCourseBtn" onclick="completeEntireCourse()">
  Mark Course as Completed
</button>

<script src="js/lms-data.js"></script>
<script src="js/course-player.js"></script>

<script>
function logout() {
  window.location.href = "index.html";
}
</script>

</body>
</html>
```

### courses.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Course Catalog - Vaaradhi LMS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="css/courses.css">
</head>

<body>

<!-- ================= TOP STRIP ================= -->
<div class="top-strip">
  Academic & Industry Skill Development Initiative
</div>

<!-- ================= HEADER ================= -->
<header class="main-header">

  <div class="header-left">
    <img src="assets/crr logo.jpg" class="logo" alt="Logo">

    <div>
      <h2>Vaaradhi LMS</h2>
      <div class="subtitle">Digital Academic Platform</div>
    </div>
  </div>

  <nav class="header-nav">
    <a href="index.html">Home</a>
    <a href="courses.html">Courses</a>
    <a href="#">Institutions</a>
    <a href="#">FAQ</a>
  </nav>

</header>

<!-- ================= CATALOG HEADER ================= -->
<section class="catalog-header">

  <div class="breadcrumb">Home > Course Catalog</div>
  <h1>Course Catalog</h1>

  <div class="catalog-controls">
    <input type="text" id="searchInput" placeholder="Search courses...">
  </div>

</section>

<!-- ================= MAIN WRAPPER ================= -->
<section class="catalog-wrapper">

  <!-- ========= SIDEBAR FILTERS ========= -->
  <aside class="catalog-sidebar">

    <h3>FILTERS</h3>

    <div class="filter-group">
      <label>Course Mode</label>
      <select id="modeFilter">
        <option value="All">All</option>
        <option value="Online">Online</option>
        <option value="Hybrid">Hybrid</option>
      </select>
    </div>

    <div class="filter-group">
      <label>Duration</label>
      <select id="durationFilter">
        <option value="All">All</option>
        <option value="4">4 Weeks</option>
        <option value="8">8 Weeks</option>
        <option value="12">12 Weeks</option>
      </select>
    </div>

    <div class="filter-group">
      <label>Language</label>
      <select id="languageFilter">
        <option value="All">All</option>
        <option value="English">English</option>
        <option value="Telugu">Telugu</option>
      </select>
    </div>

  </aside>

  <!-- ========= CONTENT ========= -->
  <div class="catalog-content">

    <!-- TABS -->
    <div class="tab-header">
      <button class="tab active" data-tab="catalog">All Courses</button>
      <button class="tab" data-tab="enrolled">Enrolled</button>
    </div>

    <!-- COURSE GRID -->
    <div id="courseGrid" class="course-grid"></div>

  </div>

</section>

<!-- ================= PAGINATION ================= -->
<div id="pagination" class="pagination"></div>

<!-- ================= FOOTER ================= -->
<footer class="main-footer">

  <div class="footer-grid">

    <div>
      <h4>About</h4>
      <p>
        Vaaradhi LMS provides scalable digital academic infrastructure
        for universities and enterprises.
      </p>
    </div>

    <div>
      <h4>Programs</h4>
      <p>Artificial Intelligence</p>
      <p>Machine Learning</p>
      <p>Cloud Computing</p>
      <p>DevOps</p>
    </div>

    <div>
      <h4>Contact</h4>
      <p>Email: info@vaaradhi.com</p>
      <p>Phone: +91 90000 00000</p>
    </div>

  </div>

  <div class="footer-bottom">
    &copy; 2026 Vaaradhi LMS. All rights reserved.
  </div>

</footer>

<!-- ================= SCRIPT ================= -->
<script src="js/lms-data.js"></script>
<script src="js/courses.js"></script>

</body>
</html>

```

### css\about.css

`$lang
.active-nav {
  color: #2563eb;
  font-weight: 600;
}

.page-shell {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}

.about-hero,
.about-section,
.about-cta {
  padding: 70px 0;
}

.hero-shell,
.intro-grid,
.split-grid,
.highlights-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
  align-items: center;
}

.hero-kicker,
.section-chip {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(37,99,235,0.12);
  color: #1d4ed8;
  font-size: 12px;
  font-weight: 600;
}

.hero-copy h1,
.text-panel h2,
.mission-card h2,
.vision-card h2,
.purpose-copy h2,
.highlights-copy h2,
.section-heading h2,
.cta-panel h2 {
  color: #1e3a8a;
}

.hero-copy h1 {
  font-size: 44px;
  line-height: 1.18;
  margin: 16px 0 16px;
}

.hero-copy p,
.text-panel p,
.mission-card p,
.vision-card p,
.purpose-copy p,
.purpose-item p,
.highlights-copy p,
.highlight-card p,
.value-card p,
.cta-panel p,
.panel-card p {
  color: #475569;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
}

.primary-link,
.secondary-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 10px 18px;
  border-radius: 22px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s ease;
}

.primary-link {
  background: #2563eb;
  color: #fff;
  box-shadow: 0 0 10px rgba(37,99,235,0.4);
}

.secondary-link {
  border: 1px solid #2563eb;
  color: #2563eb;
  background: transparent;
}

.primary-link:hover,
.secondary-link:hover {
  transform: translateY(-2px);
}

.premium-panel {
  background: rgba(255,255,255,0.56);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(37,99,235,0.18);
  border-radius: 24px;
  box-shadow: 0 18px 45px rgba(37,99,235,0.12);
}

.hero-panel,
.text-panel,
.mission-card,
.vision-card,
.purpose-shell,
.highlights-copy,
.highlight-card,
.value-card,
.cta-panel {
  padding: 28px;
}

.panel-top strong {
  display: block;
  color: #1e3a8a;
  margin: 14px 0 20px;
  font-size: 28px;
}

.panel-tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(37,99,235,0.12);
  color: #1d4ed8;
  font-size: 12px;
  font-weight: 600;
}

.panel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.panel-card {
  padding: 18px;
  border-radius: 18px;
  background: rgba(255,255,255,0.72);
  border: 1px solid rgba(37,99,235,0.12);
}

.panel-card h3,
.purpose-item h3,
.highlight-card h3,
.value-card h3 {
  color: #0f172a;
  margin-bottom: 8px;
}

.stat-strip {
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.stat-item {
  padding: 22px;
  border-radius: 18px;
  background: rgba(255,255,255,0.72);
  border: 1px solid rgba(37,99,235,0.12);
}

.stat-item strong {
  display: block;
  margin-bottom: 8px;
  color: #1e3a8a;
}

.stat-item span {
  color: #64748b;
  font-size: 14px;
}

.purpose-shell {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 24px;
  align-items: start;
}

.purpose-list,
.highlights-list,
.values-grid {
  display: grid;
  gap: 18px;
}

.purpose-list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.purpose-item {
  padding: 20px;
  border-radius: 18px;
  background: rgba(255,255,255,0.72);
  border: 1px solid rgba(37,99,235,0.12);
}

.highlights-list {
  grid-template-columns: 1fr;
}

.values-shell {
  display: grid;
  gap: 24px;
}

.section-heading.centered {
  text-align: center;
}

.section-heading h2 {
  margin-top: 14px;
  font-size: 34px;
}

.values-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.cta-panel {
  text-align: center;
}

.cta-panel p {
  max-width: 760px;
  margin: 16px auto 0;
}

.cta-panel .hero-actions {
  justify-content: center;
}

@media (max-width: 1100px) {
  .hero-shell,
  .intro-grid,
  .split-grid,
  .highlights-layout,
  .purpose-shell,
  .values-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-copy h1 {
    font-size: 34px;
  }

  .panel-grid,
  .stat-strip,
  .purpose-list {
    grid-template-columns: 1fr;
  }

  .page-shell {
    width: min(1180px, calc(100% - 24px));
  }

  .about-hero,
  .about-section,
  .about-cta {
    padding: 50px 0;
  }
}
```

### css\assignments.css

`$lang
/* ================= BASE ================= */

body{
margin:0;
font-family:"Segoe UI", Arial, sans-serif;
background:#f4f7fc;
color:#1e293b;
overflow-x:hidden;
}

/* ================= HEADER ================= */

.main-header{
display:flex;
justify-content:space-between;
align-items:center;
padding:18px 60px;
background:#0b3a75;
color:white;
box-shadow:0 4px 20px rgba(0,0,0,0.15);
}

.logo{
height:48px;
}

.header-nav a{
margin-left:22px;
text-decoration:none;
color:white;
font-size:14px;
font-weight:500;
position:relative;
transition:0.3s ease;
}

/* underline animation */
.header-nav a::after{
content:"";
position:absolute;
left:0;
bottom:-6px;
width:0;
height:2px;
background:#ffffff;
transition:0.3s ease;
}

.header-nav a:hover::after{
width:100%;
}

.header-nav a:hover{
opacity:0.85;
}

.header-nav a.active{
font-weight:600;
}

/* ================= MAIN LAYOUT ================= */

.assignment-wrapper{
display:flex;
min-height:85vh;
}

/* ================= SIDEBAR ================= */

.week-sidebar{
width:240px;
background:white;
border-right:1px solid #e5e7eb;
padding:30px;
}

.week-sidebar h3{
margin-bottom:20px;
color:#0b3a75;
font-weight:600;
}

.week-sidebar ul{
list-style:none;
padding:0;
}

.week-sidebar li{
padding:12px 14px;
margin-bottom:10px;
cursor:pointer;
border-radius:8px;
transition:all 0.25s ease;
font-size:14px;
}

.week-sidebar li strong{
display:block;
margin-bottom:4px;
}

.week-sidebar li span{
font-size:12px;
opacity:0.8;
}

/* soft hover animation */
.week-sidebar li:hover{
background:#eef3ff;
transform:translateX(4px);
}

.week-sidebar li.active{
background:#0b3a75;
color:white;
box-shadow:0 6px 15px rgba(11,58,117,0.3);
}

/* ================= CONTENT ================= */

.assignment-content{
flex:1;
padding:50px 70px;
}

.assignment-content h2{
margin-bottom:30px;
color:#0b3a75;
font-weight:600;
}

/* ================= QUESTION BLOCK ================= */

.question-block{
background:white;
padding:28px;
border-radius:14px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);
margin-bottom:25px;
transition:all 0.3s ease;
}

.question-block:hover{
transform:translateY(-4px);
box-shadow:0 15px 35px rgba(0,0,0,0.08);
}

.question-block h4{
margin-bottom:15px;
font-size:15px;
}

.question-block p{
color:#475569;
line-height:1.7;
}

.question-block label{
display:block;
margin:8px 0;
cursor:pointer;
padding:6px 8px;
border-radius:6px;
transition:0.2s ease;
}

/* smooth option hover */
.question-block label:hover{
background:#f1f5ff;
}

.question-block textarea,
.upload-placeholder input{
width:100%;
margin-top:12px;
padding:12px 14px;
border:1px solid #cbd5e1;
border-radius:10px;
font-size:14px;
background:#fff;
}

.assignment-meta{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:16px;
margin-bottom:24px;
padding:22px;
background:white;
border-radius:14px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);
}

.detail-list{
margin-top:12px;
padding-left:18px;
color:#475569;
line-height:1.7;
}

.upload-placeholder{
margin-top:18px;
}

.upload-placeholder span{
display:block;
font-size:13px;
font-weight:600;
color:#0b3a75;
}

.feedback-card{
background:#eff6ff;
border:1px solid #c7dbff;
}

.form-actions{
display:flex;
justify-content:flex-end;
}

/* ================= BUTTON ================= */

.submit-btn{
margin-top:25px;
background:#0b3a75;
color:white;
border:none;
padding:13px 22px;
border-radius:10px;
cursor:pointer;
font-size:14px;
font-weight:600;
transition:all 0.3s ease;
}

/* premium hover animation */
.submit-btn:hover{
background:#092d5c;
transform:translateY(-3px);
box-shadow:0 10px 20px rgba(11,58,117,0.35);
}

/* ================= SUBMISSION MESSAGE ================= */

.submission-message{
display:none;
margin-top:30px;
padding:20px;
background:#dcfce7;
color:#166534;
border-radius:10px;
font-weight:500;
box-shadow:0 8px 20px rgba(0,0,0,0.05);
}

/* ================= FOOTER ================= */

.main-footer{
background:#0b3a75;
color:white;
text-align:center;
padding:30px;
font-size:14px;
}

@media (max-width: 1024px){
.main-header{
padding:18px 24px;
gap:16px;
flex-wrap:wrap;
}

.header-nav{
display:flex;
flex-wrap:wrap;
gap:12px 18px;
}

.header-nav a{
margin-left:0;
}

.assignment-wrapper{
flex-direction:column;
}

.week-sidebar{
width:100%;
border-right:none;
border-bottom:1px solid #e5e7eb;
padding:22px 24px;
}

.assignment-content{
padding:32px 24px;
}
}

@media (max-width: 640px){
.main-header,
.week-sidebar,
.assignment-content,
.main-footer{
padding-left:16px;
padding-right:16px;
}

.question-block,
.assignment-meta{
padding:18px;
}

.form-actions{
justify-content:stretch;
}

.submit-btn{
width:100%;
}
}
```

### css\auth.css

`$lang
body.auth-page {
  margin: 0;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  background:
    radial-gradient(circle at top right, rgba(191, 219, 254, 0.78), transparent 28%),
    linear-gradient(135deg, #eef4ff 0%, #f8fbff 100%);
  color: #0f172a;
  padding: 28px;
  box-sizing: border-box;
}

.page-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.auth-shell {
  width: min(1140px, 100%);
  min-height: calc(100vh - 56px);
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  background: rgba(255, 255, 255, 0.94);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 26px 80px rgba(15, 23, 42, 0.14);
  border: 1px solid rgba(148, 163, 184, 0.2);
}

.auth-visual {
  padding: 54px;
  background:
    linear-gradient(150deg, rgba(11, 58, 117, 0.76), rgba(2, 28, 58, 0.86)),
    url("../assets/CRR -BACKGROUND.jpg") center/cover no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
}

.eyebrow {
  display: inline-flex;
  width: fit-content;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.auth-visual-copy h1 {
  margin: 18px 0 16px;
  font-size: clamp(2.5rem, 4vw, 4rem);
  line-height: 1.04;
}

.auth-visual-copy p {
  max-width: 460px;
  font-size: 15px;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.84);
}

.auth-points {
  display: grid;
  gap: 12px;
  margin-top: 26px;
}

.auth-points span {
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.08);
  font-size: 14px;
}

.auth-visual-frame {
  display: flex;
  align-items: flex-end;
}

.visual-badge {
  min-width: 220px;
  max-width: 360px;
  padding: 18px 20px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.7;
}

.auth-panel {
  padding: 52px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
}

.auth-switch {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 8px;
  background: #e9f0fb;
  border-radius: 18px;
}

.switch-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 46px;
  border: none;
  border-radius: 14px;
  background: transparent;
  color: #33506f;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}

.switch-btn.active {
  background: #123b83;
  color: white;
  box-shadow: 0 12px 28px rgba(18, 59, 131, 0.18);
}

.auth-heading h2 {
  margin: 0 0 10px;
  font-size: 32px;
}

.auth-heading p {
  margin: 0;
  color: #64748b;
  line-height: 1.8;
}

.form {
  display: grid;
  gap: 16px;
}

.active-form {
  display: grid;
}

.input-group {
  display: grid;
  gap: 8px;
}

.input-group label {
  font-size: 13px;
  font-weight: 600;
  color: #1e3a5f;
}

.input-group input {
  width: 100%;
  box-sizing: border-box;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid #cbd5e1;
  background: #f8fbff;
  font-size: 14px;
  outline: none;
}

.input-group input:focus {
  border-color: #1d4ed8;
  box-shadow: 0 0 0 4px rgba(29, 78, 216, 0.1);
}

.primary-auth-btn {
  min-height: 48px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #123b83, #1d4ed8);
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.auth-helper {
  font-size: 13px;
  color: #64748b;
  line-height: 1.7;
}

.auth-helper a {
  color: #1d4ed8;
  font-weight: 600;
  text-decoration: none;
}

.back-home-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
  min-height: 44px;
  border-radius: 12px;
  border: 1px solid #dbe5f3;
  background: #ffffff;
  color: #123b83;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

@media (max-width: 980px) {
  body.auth-page {
    padding: 18px;
  }

  .auth-shell {
    grid-template-columns: 1fr;
  }

  .auth-visual,
  .auth-panel {
    padding: 34px 28px;
  }
}

@media (max-width: 640px) {
  body.auth-page {
    padding: 18px 14px;
    background: #f5f7fb;
  }

  .page-wrapper {
    min-height: 100vh;
    align-items: center;
  }

  .auth-shell {
    min-height: 0;
    max-width: 420px;
    border-radius: 18px;
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.12);
    border: 1px solid rgba(203, 213, 225, 0.8);
    background: #ffffff;
  }

  .auth-visual {
    display: none;
  }

  .auth-panel {
    margin: 0;
    padding: 28px 20px 24px;
    border-radius: 18px;
    background: #ffffff;
    box-shadow: none;
    border: none;
    gap: 18px;
  }

  .auth-switch {
    padding: 5px;
    border-radius: 14px;
  }

  .switch-btn {
    min-height: 40px;
    border-radius: 10px;
    font-size: 13px;
  }

  .auth-heading h2 {
    font-size: 22px;
  }

  .auth-heading p {
    font-size: 13px;
    line-height: 1.65;
  }

  .input-group input {
    min-height: 44px;
    padding: 12px 14px;
    border-radius: 12px;
    background: #f8fafc;
  }

  .primary-auth-btn {
    min-height: 44px;
    border-radius: 12px;
  }

  .auth-helper {
    font-size: 13px;
  }
}
```

### css\certificates.css

`$lang
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Poppins',sans-serif;
}

body{
  background:#f1f5f9;
  overflow-x:hidden;
}



/* HEADER */

.header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:16px 40px;
  background:#e9eef6;
}

.header-left{
  display:flex;
  gap:10px;
  align-items:center;
}

.logo{width:42px}

.header-left h2{
  color:#2f4ea2;
  font-weight:700;
}

.profile{
  width:40px;
  border-radius:50%;
}



/* HERO */

.cert-hero{
  text-align:center;
  padding:40px 20px;
}

.cert-hero h1{
  color:#2f4ea2;
}

.cert-summary-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:16px;
  margin-top:24px;
  max-width:900px;
  margin-left:auto;
  margin-right:auto;
}

.cert-summary-card{
  background:white;
  border:1px solid #dbe3f0;
  border-radius:14px;
  padding:16px;
  box-shadow:0 8px 20px rgba(0,0,0,0.04);
}

.cert-summary-card strong{
  display:block;
  color:#2f4ea2;
  margin-bottom:8px;
}

.cert-summary-card span{
  color:#475569;
  font-size:14px;
}



/* GRID */

.cert-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:30px;
  padding:40px;
}



/* CARD */

.cert-card{
  background:white;
  padding:18px;
  border-radius:16px;
  box-shadow:0 10px 30px rgba(0,0,0,0.08);
  text-align:center;
}

.cert-card img{
  width:100%;
  border-radius:10px;
}

/* header and collapsible body */
.cert-header{
  text-align:left;
  margin-bottom:10px;
}

.cert-body{
  max-height:0;
  overflow:hidden;
  transition:max-height 0.3s ease;
}

.cert-card.expanded .cert-body{
  max-height:800px; /* large enough to show full image */
}

.cert-body img{
  margin-bottom:10px;
}

.cert-card h3{
  margin-bottom:4px;
}

.cert-card span{
  font-size:12px;
  color:#64748b;
}



/* ACTIONS */

.cert-actions{
  display:flex;
  gap:10px;
  justify-content:center;
  margin-top:12px;
}

.cert-actions button{
  background:#2563eb;
  color:white;
  border:none;
  padding:8px 14px;
  border-radius:20px;
  cursor:pointer;
}



/* MODAL */

.cert-modal{
  display:none;
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.8);
  justify-content:center;
  align-items:center;
}

.cert-modal img{
  width:70%;
  border-radius:10px;
}

.close{
  position:absolute;
  top:20px;
  right:30px;
  color:white;
  font-size:28px;
  cursor:pointer;
}

/* completed courses list */
.completed-section{
  padding:40px;
  background:#fff;
  margin-top:20px;
  text-align:center;
}
.completed-section h2{
  color:#2f4ea2;
  margin-bottom:20px;
}
.completed-list{
  display:flex;
  flex-direction:column;
  gap:15px;
  align-items:center;
}
.completed-item{
  width:100%;
  max-width:500px;
  display:flex;
  justify-content:space-between;
  background:#f9f9f9;
  padding:12px 20px;
  border-radius:8px;
  align-items:center;
}
.completed-item button{
  background:#2563eb;
  color:white;
  border:none;
  padding:6px 12px;
  border-radius:20px;
  cursor:pointer;
}

/* keep modal download button bottom-centered */
.cert-modal a button{
  margin-top:10px;
}

.certificate-status-note{
  grid-column:1/-1;
  background:#eef4ff;
  border:1px solid #c7d8ff;
  border-radius:14px;
  padding:18px;
  color:#334155;
  text-align:left;
}

@media (max-width: 900px){
  .header{
    padding:16px 24px;
    gap:14px;
    flex-wrap:wrap;
  }

  .cert-grid,
  .completed-section{
    padding-left:24px;
    padding-right:24px;
  }

  .cert-actions{
    flex-wrap:wrap;
  }

  .cert-modal img{
    width:min(88vw, 720px);
  }
}

@media (max-width: 640px){
  .header,
  .cert-grid,
  .completed-section{
    padding-left:16px;
    padding-right:16px;
  }

  .cert-grid{
    gap:18px;
  }

  .cert-card,
  .completed-item{
    padding-left:16px;
    padding-right:16px;
  }

  .cert-actions,
  .completed-item{
    flex-direction:column;
    align-items:stretch;
  }

  .cert-actions button,
  .completed-item button{
    width:100%;
  }
}
```

### css\community.css

`$lang
.active-nav {
  color: #2563eb;
  font-weight: 600;
}

.community-shell {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}

.community-hero,
.community-section,
.community-cta {
  padding: 70px 0;
}

.hero-layout,
.section-layout,
.feature-layout,
.engagement-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
  align-items: center;
}

.hero-kicker,
.section-chip,
.board-chip,
.timeline-item span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(37,99,235,0.12);
  color: #1d4ed8;
  font-size: 12px;
  font-weight: 600;
}

.hero-copy h1,
.section-copy h2,
.feature-column h2,
.timeline-copy h2,
.cta-panel h2 {
  color: #1e3a8a;
}

.hero-copy h1 {
  font-size: 44px;
  line-height: 1.18;
  margin: 16px 0;
}

.hero-copy p,
.section-copy p,
.feature-column p,
.timeline-copy p,
.timeline-item p,
.highlight-block p,
.board-card p,
.event-card li,
.cta-panel p,
.feature-item p {
  color: #475569;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
}

.primary-link,
.secondary-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 10px 18px;
  border-radius: 22px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s ease;
}

.primary-link {
  background: #2563eb;
  color: #fff;
  box-shadow: 0 0 10px rgba(37,99,235,0.4);
}

.secondary-link {
  border: 1px solid #2563eb;
  color: #2563eb;
  background: transparent;
}

.primary-link:hover,
.secondary-link:hover {
  transform: translateY(-2px);
}

.premium-board,
.premium-card {
  background: rgba(255,255,255,0.56);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(37,99,235,0.18);
  border-radius: 24px;
  box-shadow: 0 18px 45px rgba(37,99,235,0.12);
}

.premium-board,
.section-copy,
.highlight-block,
.feature-column,
.timeline-shell,
.event-card,
.cta-panel {
  padding: 28px;
}

.board-header strong,
.section-copy h2,
.feature-column h2,
.timeline-copy h2,
.cta-panel h2 {
  display: block;
  margin-top: 14px;
}

.board-grid {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.board-card,
.highlight-block {
  padding: 18px;
  border-radius: 18px;
  background: rgba(255,255,255,0.74);
  border: 1px solid rgba(37,99,235,0.12);
}

.board-card h3,
.highlight-block h3,
.feature-item h3,
.timeline-item h3,
.event-card h3 {
  color: #0f172a;
  margin: 10px 0 8px;
}

.highlights-stack {
  display: grid;
  gap: 18px;
}

.feature-column {
  display: grid;
  gap: 18px;
}

.feature-item {
  padding-top: 4px;
  border-top: 1px solid rgba(37,99,235,0.12);
}

.feature-item:first-of-type {
  border-top: none;
}

.accent-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.68), rgba(219,234,254,0.68));
}

.timeline-shell {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 24px;
  align-items: start;
}

.timeline-track {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.timeline-item {
  padding: 20px;
  border-radius: 18px;
  background: rgba(255,255,255,0.74);
  border: 1px solid rgba(37,99,235,0.12);
}

.event-card ul {
  margin-top: 16px;
  padding-left: 18px;
}

.event-card li + li {
  margin-top: 12px;
}

.cta-panel {
  text-align: center;
}

.cta-panel p {
  max-width: 760px;
  margin: 16px auto 0;
}

.cta-panel .hero-actions {
  justify-content: center;
}

@media (max-width: 1100px) {
  .hero-layout,
  .section-layout,
  .feature-layout,
  .engagement-grid,
  .timeline-shell {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .community-shell {
    width: min(1180px, calc(100% - 24px));
  }

  .community-hero,
  .community-section,
  .community-cta {
    padding: 50px 0;
  }

  .hero-copy h1 {
    font-size: 34px;
  }

  .board-grid,
  .timeline-track {
    grid-template-columns: 1fr;
  }
}
```

### css\course-details.css

`$lang
/* ================= BASE ================= */

body {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  background: #f6f9ff;
  color: #1e293b;
  overflow-x: hidden;
}

/* ================= TOP STRIP ================= */

.top-strip {
  background: #0b3a75;
  color: white;
  text-align: center;
  padding: 8px;
  font-size: 13px;
  letter-spacing: 0.6px;
}

/* ================= HEADER ================= */

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 70px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}

.logo {
  height: 50px;
}

.subtitle {
  font-size: 12px;
  color: #64748b;
}

.header-nav a {
  margin: 0 18px;
  text-decoration: none;
  color: #1e293b;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  transition: 0.3s;
}

.header-nav a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background: #0b3a75;
  transition: 0.3s;
}

.header-nav a:hover::after {
  width: 100%;
}

.header-nav a:hover {
  color: #0b3a75;
}

/* ================= HERO SECTION ================= */

.course-hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 70px;
  background: linear-gradient(135deg, #0b3a75, #2b6cb0);
  color: white;
  border-bottom: 1px solid #e5e7eb;
}

.hero-left {
  max-width: 620px;
}

.hero-left h1 {
  font-size: 36px;
  margin-top: 10px;
}

.hero-desc {
  margin-top: 15px;
  font-size: 15px;
  color: #e2e8f0;
}

.hero-tags {
  margin-top: 25px;
}

.hero-tags span {
  display: inline-block;
  margin-right: 10px;
  padding: 6px 14px;
  background: rgba(255,255,255,0.15);
  border-radius: 20px;
  font-size: 12px;
  backdrop-filter: blur(5px);
}

.badge.open {
  background: #16a34a;
  color: white;
}

.hero-image img {
  width: 420px;
  border-radius: 16px;
  box-shadow: 0 25px 50px rgba(0,0,0,0.25);
  transition: 0.4s;
}

.hero-image img:hover {
  transform: scale(1.04);
}

/* ================= MAIN WRAPPER ================= */

.details-wrapper {
  display: flex;
  gap: 45px;
  padding: 80px 70px;
}

.details-content {
  flex: 2;
}

/* ================= INFO CARDS ================= */

.info-card {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 12px 35px rgba(0,0,0,0.05);
  margin-bottom: 35px;
  transition: 0.3s ease;
}

.info-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 45px rgba(0,0,0,0.08);
}

.info-card h2 {
  margin-bottom: 18px;
  color: #0b3a75;
  font-size: 20px;
  border-bottom: 2px solid #0b3a75;
  display: inline-block;
  padding-bottom: 6px;
}

/* ================= HIGHLIGHT GRID ================= */

.highlight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 18px;
  margin-top: 15px;
  font-size: 14px;
}

/* ================= SYLLABUS ================= */

.syllabus-list {
  padding-left: 20px;
  line-height: 2;
}

/* ================= INSTRUCTOR ================= */

.instructor-box {
  display: flex;
  gap: 20px;
  align-items: center;
}

.instructor-photo {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  background: #e2e8f0;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
}

/* ================= ENROLL PANEL ================= */

.enroll-panel {
  flex: 1;
}

.enroll-card {
  position: sticky;
  top: 120px;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 18px 40px rgba(0,0,0,0.08);
}

.enroll-card h3 {
  margin-bottom: 20px;
  color: #0b3a75;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 14px;
  border-bottom: 1px solid #f1f5f9;
}

.detail-row:last-child {
  border-bottom: none;
}

/* ================= BUTTONS ================= */

.enroll-btn {
  width: 100%;
  margin-top: 25px;
  padding: 14px;
  border: none;
  background: linear-gradient(135deg, #0b3a75, #1e40af);
  color: white;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.enroll-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.2);
}

.secondary-btn {
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  border: 2px solid #0b3a75;
  background: white;
  color: #0b3a75;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s;
}

.secondary-btn:hover {
  background: #0b3a75;
  color: white;
}

/* ================= FOOTER ================= */

.main-footer {
  background: #0b3a75;
  color: white;
  padding: 45px;
  text-align: center;
  margin-top: 70px;
  font-size: 14px;
}

@media (max-width: 1100px) {
  .course-hero,
  .details-wrapper {
    flex-direction: column;
  }

  .hero-image img {
    width: min(100%, 560px);
  }

  .enroll-card {
    position: static;
  }
}

@media (max-width: 900px) {
  .main-header,
  .course-hero,
  .details-wrapper,
  .main-footer {
    padding-left: 24px;
    padding-right: 24px;
  }

  .main-header {
    flex-wrap: wrap;
    gap: 16px;
  }

  .header-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 18px;
  }

  .header-nav a {
    margin: 0;
  }
}

@media (max-width: 640px) {
  .main-header,
  .course-hero,
  .details-wrapper,
  .main-footer {
    padding-left: 16px;
    padding-right: 16px;
  }

  .course-hero,
  .details-wrapper {
    padding-top: 42px;
    padding-bottom: 42px;
  }

  .hero-left h1 {
    font-size: 28px;
  }

  .info-card,
  .enroll-card {
    padding: 22px;
  }

  .instructor-box,
  .detail-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
```

### css\course-player.css

`$lang
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Poppins',sans-serif;
}

body{
  background:#f1f5f9;
  font-weight:500;
  overflow-x:hidden;
}



/* HEADER */

.header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:16px 40px;
  background:#e9eef6;
  border-bottom:1px solid #dbe3f0;
}



/* LEFT ALIGN GROUP */

.header-left{
  display:flex;
  align-items:center;
  gap:12px;
}

.logo{
  width:42px;
}

.header-left h2{
  color:#2f4ea2;
  font-weight:700;
}

.profile{
  width:42px;
  border-radius:50%;
  border:2px solid #2f4ea2;
}



/* LAYOUT */

.player-layout{
  display:grid;
  grid-template-columns:300px 1fr;
  height:calc(100vh - 70px);
}



/* SIDEBAR */

.curriculum{
  background:#f4f7fc;
  padding:22px;
  border-right:1px solid #dde6f4;
  overflow-y:auto;
}

.curriculum h3{
  font-weight:700;
  font-size:16px;
  color:#2f4ea2;
  margin-bottom:18px;
}



/* MODULE */

.module{
  margin-bottom:22px;
}

.module h4{
  font-size:14px;
  font-weight:600;
  margin-bottom:10px;
}



/* LESSON */

.lesson{
  padding:10px 12px;
  border-radius:10px;
  cursor:pointer;
  font-size:13px;
  font-weight:600;
  color:#334155;
  transition:.25s;
}

.lesson:hover{
  background:#e8eefc;
}

.lesson.active{
  background:linear-gradient(120deg,#2f4ea2,#4f6df5);
  color:white;
}

.lesson span{
  display:block;
}

.lesson small{
  display:block;
  margin-top:4px;
  font-size:11px;
  opacity:.8;
}

.module-count{
  font-size:11px;
  color:#64748b;
  font-weight:500;
}



/* SIDEBAR TOOLS */

.sidebar-tools{
  margin-top:30px;
  padding-top:20px;
  border-top:1px solid #dde6f4;
  display:flex;
  flex-direction:column;
  gap:12px;
}

.tool-btn{
  background:white;
  border:none;
  padding:10px 14px;
  border-radius:10px;
  font-size:13px;
  font-weight:600;
  cursor:pointer;
  box-shadow:0 4px 12px rgba(0,0,0,0.05);
  transition:.25s;
}

.tool-btn:hover{
  background:linear-gradient(120deg,#2f4ea2,#4f6df5);
  color:white;
}

.tool-btn:disabled{
  cursor:not-allowed;
  opacity:.55;
  background:#e2e8f0;
  color:#64748b;
}



/* VIDEO AREA */

.video-area{
  padding:20px 30px;
  background:#f8faff;
}

.course-summary-panel{
  display:grid;
  grid-template-columns:1.2fr 1fr;
  gap:18px;
  margin-bottom:22px;
  background:white;
  border:1px solid #dde6f4;
  border-radius:18px;
  padding:20px;
}

.summary-copy h1{
  color:#2f4ea2;
  font-size:28px;
  margin:6px 0 8px;
}

.summary-copy p{
  color:#475569;
  line-height:1.6;
}

.summary-badge{
  display:inline-block;
  padding:6px 12px;
  border-radius:999px;
  background:#e8eefc;
  color:#2f4ea2;
  font-size:12px;
  font-weight:700;
}

.summary-progress{
  width:100%;
  height:10px;
  background:#e2e8f0;
  border-radius:999px;
  overflow:hidden;
  margin:14px 0 8px;
}

.summary-progress-fill{
  height:100%;
  background:linear-gradient(120deg,#2f4ea2,#4f6df5);
}

.summary-copy small{
  color:#64748b;
}

.summary-metrics{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:12px;
}

.summary-metric{
  background:#f8faff;
  border:1px solid #dde6f4;
  border-radius:14px;
  padding:14px;
  display:flex;
  flex-direction:column;
  gap:6px;
}

.summary-metric strong{
  color:#2f4ea2;
  font-size:13px;
}

.summary-metric span{
  color:#475569;
  font-size:13px;
  line-height:1.5;
}

.video-player{
  margin-top:12px;
  background:white;
  border:1px solid #dde6f4;
  border-radius:20px;
  padding:18px;
  box-shadow:0 14px 32px rgba(15,23,42,0.06);
}

.media-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  margin-bottom:14px;
}

.media-badge{
  display:inline-flex;
  align-items:center;
  padding:6px 12px;
  border-radius:999px;
  background:#e8eefc;
  color:#2f4ea2;
  font-size:12px;
  font-weight:700;
}

.media-meta{
  font-size:13px;
  color:#64748b;
}

.media-stage{
  position:relative;
  width:100%;
  aspect-ratio:16/9;
  border-radius:18px;
  overflow:hidden;
  background:linear-gradient(135deg,#0f172a,#1e3a8a);
}

.video-player video,
.media-fallback{
  width:100%;
  height:100%;
}

.video-player video{
  display:block;
  background:#000;
}

.video-player.video-active .media-fallback{
  display:none;
}

.video-player.image-active #videoPlayer{
  display:none;
}

.media-fallback{
  position:absolute;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  background:linear-gradient(135deg,rgba(15,23,42,0.72),rgba(37,99,235,0.4));
}

.media-fallback img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.player-meta{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:14px;
  margin-top:18px;
}

.meta-card{
  background:white;
  border:1px solid #dde6f4;
  border-radius:12px;
  padding:14px;
  display:flex;
  flex-direction:column;
  gap:6px;
  color:#334155;
}

.meta-card strong{
  color:#2f4ea2;
}

.lesson-controls{
  display:flex;
  gap:12px;
  margin-top:18px;
}

.complete-course-btn{
  position:fixed;
  right:24px;
  bottom:24px;
  z-index:50;
  border:none;
  border-radius:999px;
  padding:14px 22px;
  background:linear-gradient(120deg,#16a34a,#22c55e);
  color:white;
  font-size:14px;
  font-weight:700;
  box-shadow:0 14px 30px rgba(22,163,74,0.28);
  cursor:pointer;
  transition:.25s;
}

.complete-course-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 18px 34px rgba(22,163,74,0.34);
}

.complete-course-btn:disabled{
  background:#94a3b8;
  box-shadow:none;
  cursor:not-allowed;
}



/* TABS */

.player-tabs{
  display:flex;
  gap:20px;
  margin-top:18px;
  border-bottom:1px solid #e2e8f0;
}

.tab{
  background:none;
  border:none;
  padding:10px 0;
  cursor:pointer;
  font-weight:500;
}

.tab.active{
  border-bottom:2px solid #2563eb;
  color:#2563eb;
}



/* CONTENT */

.tab-content{
  margin-top:16px;
  color:#475569;
}

@media (max-width: 768px){
  .video-player{
    padding:14px;
  }

  .media-header{
    flex-direction:column;
    align-items:flex-start;
  }
}

.lesson-panel{
  background:white;
  border:1px solid #dde6f4;
  border-radius:14px;
  padding:18px;
  margin-bottom:14px;
}

.lesson-panel h3{
  color:#2f4ea2;
  margin-bottom:10px;
}

.lesson-list{
  padding-left:18px;
  line-height:1.8;
}

@media(max-width:1024px){
  .player-layout{
    grid-template-columns:1fr;
    height:auto;
  }

  .curriculum{
    border-right:none;
    border-bottom:1px solid #dde6f4;
  }

  .course-summary-panel{
    grid-template-columns:1fr;
  }
}

@media (max-width: 768px){
  .header{
    padding:16px 20px;
    gap:12px;
    flex-wrap:wrap;
  }

  .header-right{
    display:flex;
    flex-wrap:wrap;
    gap:10px 16px;
  }

  .complete-course-btn{
    right:16px;
    bottom:16px;
    width:calc(100% - 32px);
    text-align:center;
  }

  .video-area{
    padding:20px 20px 96px;
  }

  .lesson-controls,
  .player-tabs{
    flex-wrap:wrap;
  }

  .lesson-controls .tool-btn,
  .player-tabs .tab{
    flex:1 1 140px;
  }
}

@media (max-width: 480px){
  .header,
  .curriculum,
  .video-area{
    padding-left:16px;
    padding-right:16px;
  }

  .course-summary-panel,
  .video-player,
  .meta-card,
  .lesson-panel{
    padding:16px;
  }

  .summary-copy h1{
    font-size:24px;
  }
}
```

### css\courses.css

`$lang
/* =============================
   GLOBAL BASE
============================= */

body {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  background: #f4f6f9;
  color: #1e293b;
  overflow-x: hidden;
}

/* =============================
   TOP STRIP
============================= */

.top-strip {
  background: #0b3a75;
  color: #ffffff;
  text-align: center;
  padding: 8px 0;
  font-size: 13px;
  letter-spacing: 0.5px;
}

/* =============================
   HEADER
============================= */

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 60px;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo {
  height: 50px;
}

.subtitle {
  font-size: 12px;
  color: #64748b;
}

.header-nav a {
  text-decoration: none;
  margin: 0 15px;
  color: #1e293b;
  font-size: 14px;
  transition: 0.2s;
}

.header-nav a:hover {
  color: #0b3a75;
}

/* =============================
   CATALOG HEADER
============================= */

.catalog-header {
  background: #0b3a75;
  color: #ffffff;
  padding: 40px 60px;
}

.catalog-header h1 {
  margin: 10px 0 20px;
  font-weight: 600;
}

.breadcrumb {
  font-size: 13px;
  opacity: 0.85;
}

.catalog-controls {
  margin-top: 15px;
}

.catalog-controls input {
  padding: 8px 14px;
  width: 260px;
  border-radius: 20px;
  border: none;
  outline: none;
}

/* =============================
   MAIN WRAPPER
============================= */

.catalog-wrapper {
  display: flex;
  gap: 40px;
  padding: 40px 60px;
}

/* =============================
   SIDEBAR
============================= */

.catalog-sidebar {
  width: 260px;
  background: #ffffff;
  padding: 25px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.catalog-sidebar h3 {
  margin-bottom: 20px;
  font-size: 14px;
  letter-spacing: 1px;
  color: #0b3a75;
}

.filter-group {
  margin-bottom: 20px;
}

.filter-group label {
  display: block;
  font-size: 13px;
  margin-bottom: 6px;
  color: #334155;
}

.filter-group select {
  width: 100%;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
}

/* =============================
   CONTENT
============================= */

.catalog-content {
  flex: 1;
}

/* =============================
   TABS
============================= */

.tab-header {
  margin-bottom: 25px;
}

.tab {
  padding: 8px 18px;
  margin-right: 10px;
  border: none;
  background: #e2e8f0;
  cursor: pointer;
  font-size: 13px;
  transition: 0.2s;
}

.tab.active {
  background: #f97316;
  color: #ffffff;
}

/* =============================
   COURSE GRID
============================= */

.course-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}

/* =============================
   COURSE CARD
============================= */

.course-card {
  width: 100%;
  max-width: 300px;
  background: #ffffff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: 0.25s ease;
}

.course-card:hover {
  transform: translateY(-5px);
}

.course-card img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 170px;
  object-fit: cover;
  transition: 0.2s;
}

.course-card a:hover img {
  opacity: 0.8;
  transform: scale(1.02);
}

.course-card a {
  text-decoration: none;
  display: block;
}

@media (max-width: 1024px) {
  .course-grid {
    justify-content: center;
  }
}

@media (max-width: 760px) {
  .course-grid {
    gap: 16px;
  }

  .course-card {
    max-width: 100%;
  }
}
.course-info {
  padding: 15px;
}

.course-info h4 {
  margin: 6px 0 8px;
  font-size: 16px;
  color: #0b3a75;
}

.course-info p {
  font-size: 13px;
  margin: 4px 0;
  color: #475569;
}

.progress-wrapper {
  margin-top: 8px;
  background: #e2e8f0;
  border-radius: 8px;
  height: 16px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #f97316;
  color: #ffffff;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-certificate-btn {
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background: #0b3a75;
  color: #ffffff;
  cursor: pointer;
  font-size: 13px;
}

.view-certificate-btn:hover {
  background: #082a55;
}

/* =============================
   BADGES
============================= */

.badge {
  display: inline-block;
  padding: 4px 8px;
  font-size: 11px;
  border-radius: 3px;
  margin-bottom: 6px;
  font-weight: 500;
}

.badge.open {
  background: #16a34a;
  color: #ffffff;
}

.badge.closed {
  background: #dc2626;
  color: #ffffff;
}

/* =============================
   PAGINATION
============================= */

.pagination {
  text-align: center;
  padding: 30px 0;
}

.pagination button {
  margin: 5px;
  padding: 6px 14px;
  border: none;
  background: #0b3a75;
  color: #ffffff;
  cursor: pointer;
  font-size: 13px;
  transition: 0.2s;
}

.pagination button:hover {
  background: #082a55;
}

/* =============================
   FOOTER
============================= */

.main-footer {
  background: #0b3a75;
  color: #ffffff;
  padding: 40px 60px;
  margin-top: 60px;
}

.footer-grid {
  display: flex;
  justify-content: space-between;
}

.footer-grid h4 {
  margin-bottom: 12px;
}

.footer-grid p {
  font-size: 13px;
  line-height: 1.6;
}

.footer-bottom {
  text-align: center;
  margin-top: 25px;
  font-size: 12px;
  opacity: 0.8;
}

@media (max-width: 1024px) {
  .main-header,
  .catalog-header,
  .catalog-wrapper,
  .main-footer {
    padding-left: 24px;
    padding-right: 24px;
  }

  .catalog-wrapper {
    flex-direction: column;
    gap: 24px;
  }

  .catalog-sidebar {
    width: 100%;
  }

  .footer-grid {
    gap: 24px;
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .main-header {
    flex-wrap: wrap;
    gap: 16px;
    padding-top: 18px;
    padding-bottom: 18px;
  }

  .header-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 18px;
  }

  .header-nav a {
    margin: 0;
  }

  .catalog-header {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  .catalog-controls input {
    width: 100%;
    max-width: 100%;
  }

  .tab-header {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .tab {
    margin-right: 0;
  }

  .course-card {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .top-strip {
    padding-left: 16px;
    padding-right: 16px;
    line-height: 1.5;
  }

  .main-header,
  .catalog-header,
  .catalog-wrapper,
  .main-footer {
    padding-left: 16px;
    padding-right: 16px;
  }

  .catalog-sidebar {
    padding: 18px;
  }

  .course-info {
    padding: 14px;
  }
}
```

### css\dashboard.css

`$lang
/* ================= GLOBAL ================= */

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#f5f7fa;
color:#1e293b;
}

/* ================= HEADER ================= */

.header{
display:flex;
justify-content:space-between;
align-items:center;
padding:18px 50px;
background:#1e3a8a;
color:white;
}

.header nav a{
margin-left:22px;
text-decoration:none;
color:white;
font-size:14px;
transition:.2s;
}

.header nav a:hover{
opacity:.8;
}

.header nav .active{
font-weight:600;
border-bottom:2px solid white;
padding-bottom:4px;
}

.logout{
color:#ff6b6b !important;
}

/* ================= MAIN CONTAINER ================= */

.profile-container{
padding:40px 60px;
}

/* ================= PROFILE HEADER ================= */

.profile-header{
display:flex;
justify-content:space-between;
align-items:center;
background:white;
padding:30px;
border-radius:14px;
box-shadow:0 6px 20px rgba(0,0,0,0.05);
margin-bottom:35px;
flex-wrap:wrap;
}

.avatar-wrapper{
display:flex;
flex-direction:column;
align-items:center;
}

.avatar-wrapper img{
width:120px;
height:120px;
border-radius:50%;
object-fit:cover;
margin-bottom:10px;
border:4px solid #e2e8f0;
}

.upload-btn{
background:#1e3a8a;
color:white;
border:none;
padding:6px 12px;
border-radius:6px;
cursor:pointer;
font-size:13px;
}

.student-info h1{
font-size:24px;
margin-bottom:6px;
}

.student-info p{
color:#64748b;
font-size:14px;
}

.profile-actions{
display:flex;
gap:10px;
margin-top:10px;
}

.edit-btn,
.secondary-btn{
padding:8px 14px;
border-radius:6px;
border:none;
cursor:pointer;
font-size:13px;
}

.edit-btn{
background:#2563eb;
color:white;
}

.secondary-btn{
background:#e2e8f0;
color:#1e293b;
}

/* ================= INFO NAVIGATION CARDS ================= */

.profile-info-nav{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
margin-bottom:40px;
}

.info-nav-card{
background:white;
padding:22px;
border-radius:14px;
box-shadow:0 6px 18px rgba(0,0,0,0.05);
cursor:pointer;
transition:.3s;
border:1px solid #e2e8f0;
}

.info-nav-card:hover{
transform:translateY(-5px);
}

.info-nav-card.active{
border:2px solid #2563eb;
}

.info-nav-card h3{
margin-bottom:6px;
font-size:16px;
}

.info-nav-card p{
font-size:14px;
color:#64748b;
}

/* ================= GLASS ACADEMIC STATS ================= */

.glass-academic{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:25px;
margin-bottom:40px;
}

.glass-stat-card{
padding:25px;
border-radius:18px;
backdrop-filter:blur(15px);
background:rgba(255,255,255,0.7);
box-shadow:0 8px 25px rgba(0,0,0,0.06);
border:1px solid rgba(255,255,255,0.6);
transition:.3s;
}

.glass-stat-card:hover{
transform:translateY(-6px);
box-shadow:0 12px 30px rgba(0,0,0,0.1);
}

.stat-top{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:15px;
}

.stat-top h4{
font-size:15px;
font-weight:600;
}

.stat-top span{
font-weight:700;
color:#1e3a8a;
}

.stat-progress{
height:6px;
background:#e2e8f0;
border-radius:10px;
overflow:hidden;
margin-bottom:18px;
}

.stat-progress div{
height:100%;
background:linear-gradient(90deg,#1e3a8a,#2563eb);
border-radius:10px;
transition:.4s;
}

.glass-stat-card button{
width:100%;
padding:8px;
border:none;
border-radius:8px;
background:#1e3a8a;
color:white;
cursor:pointer;
transition:.3s;
}

.glass-stat-card button:hover{
background:#2563eb;
}

/* ================= EDITABLE INFO BARS ================= */

.info-bars{
background:white;
padding:25px;
border-radius:14px;
box-shadow:0 4px 12px rgba(0,0,0,0.05);
margin-bottom:40px;
}

.info-row{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:18px;
}

.info-row span{
font-weight:600;
color:#1e293b;
}

.info-row input{
width:60%;
padding:8px 12px;
border-radius:6px;
border:1px solid #cbd5e1;
outline:none;
transition:.2s;
}

.info-row input:focus{
border-color:#1e3a8a;
box-shadow:0 0 6px rgba(30,58,138,0.2);
}

/* ================= PREMIUM CERTIFICATES ================= */

.premium-certificates{
background:white;
padding:30px;
border-radius:14px;
box-shadow:0 6px 20px rgba(0,0,0,0.05);
margin-bottom:40px;
}

.premium-certificates h2{
margin-bottom:20px;
color:#1e3a8a;
}

.certificate-card{
display:flex;
justify-content:space-between;
flex-wrap:wrap;
gap:30px;
}

.certificate-requirements{
margin-top:15px;
font-size:14px;
color:#475569;
}

.certificate-requirements ul{
margin-top:6px;
padding-left:18px;
}

.certificate-status{
margin-top:12px;
font-weight:600;
}

.completed{
color:#16a34a;
}

.primary-btn{
background:#1e3a8a;
color:white;
padding:8px 14px;
border:none;
border-radius:6px;
cursor:pointer;
}

/* ================= NOTIFICATIONS ================= */

.profile-notifications{
background:white;
padding:25px;
border-radius:14px;
box-shadow:0 4px 12px rgba(0,0,0,0.05);
margin-bottom:40px;
}

.profile-notifications h2{
margin-bottom:15px;
color:#1e3a8a;
}

.profile-notification{
padding:12px 15px;
border-radius:6px;
margin-bottom:10px;
font-size:14px;
}

.profile-notification.urgent{
background:#fee2e2;
color:#991b1b;
}

.profile-notification.info{
background:#dbeafe;
color:#1e40af;
}

.profile-notification.success{
background:#dcfce7;
color:#166534;
}

/* ================= EDIT MODAL ================= */

.edit-modal{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.4);
display:flex;
justify-content:center;
align-items:center;
visibility:hidden;
opacity:0;
transition:.3s;
z-index:999;
}

.edit-modal.active{
visibility:visible;
opacity:1;
}

.modal-content{
background:white;
padding:30px;
border-radius:14px;
width:400px;
box-shadow:0 15px 40px rgba(0,0,0,0.2);
animation:slideUp .3s ease;
}

.modal-content h2{
margin-bottom:15px;
}

.modal-content label{
font-size:14px;
display:block;
margin-top:10px;
margin-bottom:4px;
}

.modal-content input{
width:100%;
padding:8px 10px;
border-radius:6px;
border:1px solid #cbd5e1;
outline:none;
}

.modal-buttons{
margin-top:20px;
display:flex;
justify-content:space-between;
}

.save-btn{
background:#1e3a8a;
color:white;
border:none;
padding:8px 16px;
border-radius:6px;
cursor:pointer;
}

.cancel-btn{
background:#e2e8f0;
border:none;
padding:8px 16px;
border-radius:6px;
cursor:pointer;
}

@keyframes slideUp{
from{transform:translateY(20px); opacity:0;}
to{transform:translateY(0); opacity:1;}
}

/* ================= FOOTER ================= */

.profile-footer{
text-align:center;
padding:20px;
background:#e2e8f0;
margin-top:40px;
font-size:14px;
}
```

### css\exam.css

`$lang
body{
margin:0;
font-family:Arial, sans-serif;
background:#f1f5f9;
color:#1e293b;
}

.exam-header{
display:flex;
justify-content:space-between;
align-items:center;
padding:18px 40px;
background:#0b3a75;
color:white;
}

.exam-header h3{
margin:0 0 6px;
font-size:24px;
}

.exam-header p{
margin:0;
opacity:0.9;
}

.timer-wrap{
text-align:right;
}

.timer-label{
display:block;
font-size:12px;
margin-bottom:8px;
text-transform:uppercase;
letter-spacing:1px;
}

.timer{
background:white;
color:#0b3a75;
padding:10px 16px;
border-radius:24px;
font-weight:700;
min-width:96px;
text-align:center;
}

.exam-body{
display:flex;
padding:30px 40px;
gap:30px;
align-items:flex-start;
}

.question-area{
flex:2;
background:white;
padding:30px;
border-radius:14px;
box-shadow:0 10px 24px rgba(0,0,0,0.05);
}

.question-number{
font-size:13px;
font-weight:600;
color:#2563eb;
margin-bottom:14px;
text-transform:uppercase;
letter-spacing:1px;
}

.question-box{
font-size:22px;
font-weight:600;
margin-bottom:20px;
line-height:1.5;
}

.options{
display:flex;
flex-direction:column;
gap:14px;
}

.options label{
display:flex;
align-items:flex-start;
gap:12px;
padding:14px 16px;
border:1px solid #dbe2ea;
border-radius:12px;
cursor:pointer;
transition:0.2s;
background:#fff;
}

.options label:hover{
border-color:#93c5fd;
background:#f8fbff;
}

.options label.selected{
border-color:#2563eb;
background:#eff6ff;
}

.options label.correct{
border-color:#16a34a;
background:#ecfdf5;
}

.options label.wrong{
border-color:#dc2626;
background:#fef2f2;
}

.action-buttons{
margin-top:24px;
display:flex;
gap:12px;
flex-wrap:wrap;
}

.action-buttons button,
.submit-btn{
padding:10px 18px;
border:none;
border-radius:10px;
cursor:pointer;
font-weight:600;
}

.action-buttons button{
background:#e2e8f0;
}

.action-buttons .primary,
.submit-btn{
background:#0b3a75;
color:white;
}

.palette{
flex:1;
background:white;
padding:24px;
border-radius:14px;
box-shadow:0 10px 24px rgba(0,0,0,0.05);
position:sticky;
top:24px;
}

.grid{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:10px;
margin:18px 0 24px;
}

.p-btn{
padding:12px 0;
text-align:center;
background:#d1d5db;
border-radius:10px;
font-weight:600;
cursor:pointer;
}

.p-btn.current{
background:#2563eb;
color:white;
}

.p-btn.answered{
background:#dcfce7;
color:#166534;
}

.exam-actions{
display:flex;
flex-direction:column;
gap:12px;
}

.back-link{
text-decoration:none;
color:#0b3a75;
font-weight:600;
}

.result-panel{
display:none;
margin-top:30px;
padding:24px;
border-radius:14px;
background:#f8fafc;
border:1px solid #dbe2ea;
}

.result-panel.visible{
display:block;
}

.result-summary{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
gap:16px;
margin-bottom:24px;
}

.result-summary div{
background:white;
padding:16px;
border-radius:12px;
box-shadow:0 8px 20px rgba(0,0,0,0.04);
}

.review-item{
background:white;
border-radius:12px;
padding:18px;
margin-bottom:14px;
border:1px solid #e2e8f0;
}

.review-item.correct{
border-color:#86efac;
}

.review-item.wrong{
border-color:#fca5a5;
}

.review-item p{
margin:8px 0;
line-height:1.6;
}

@media(max-width:960px){
.exam-body{
flex-direction:column;
}

.palette{
position:static;
width:100%;
}
}
```

### css\login.css

`$lang
body.login-page {
  margin: 0;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(191, 219, 254, 0.9), transparent 32%),
    linear-gradient(135deg, #eef4ff 0%, #f8fbff 100%);
  color: #0f172a;
  padding: 28px;
  box-sizing: border-box;
}

.login-shell {
  width: min(1200px, 100%);
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 28px 80px rgba(15, 23, 42, 0.14);
}

.login-visual {
  padding: 56px;
  background:
    linear-gradient(180deg, rgba(11, 58, 117, 0.74), rgba(2, 28, 58, 0.84)),
    url("../assets/CRR -BACKGROUND.jpg") center/cover no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
}

.eyebrow {
  display: inline-flex;
  width: fit-content;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.login-visual-copy h1 {
  margin: 18px 0 16px;
  font-size: clamp(2.6rem, 4vw, 4.2rem);
  line-height: 1.04;
}

.login-visual-copy p {
  max-width: 470px;
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.82);
}

.login-visual-points {
  display: grid;
  gap: 12px;
  margin-top: 26px;
}

.login-visual-points span {
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.08);
  font-size: 14px;
}

.login-visual-stage {
  display: flex;
  align-items: flex-end;
}

.visual-quote {
  width: min(360px, 100%);
  min-height: 220px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.16), rgba(148, 163, 184, 0.12));
  backdrop-filter: blur(8px);
  padding: 26px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
}

.visual-quote strong {
  font-size: 20px;
  line-height: 1.5;
}

.visual-quote p {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.6;
}

.login-options {
  padding: 48px 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
}

.auth-switch {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 8px;
  background: #e9f0fb;
  border-radius: 18px;
}

.switch-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 46px;
  border: none;
  border-radius: 14px;
  background: transparent;
  color: #33506f;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}

.switch-btn.active {
  background: #123b83;
  color: white;
  box-shadow: 0 12px 28px rgba(18, 59, 131, 0.18);
}

.options-heading h2 {
  margin: 0 0 10px;
  font-size: 32px;
}

.options-heading p {
  margin: 0;
  color: #64748b;
  line-height: 1.8;
}

.login-option-card {
  padding: 24px;
  border-radius: 22px;
  border: 1px solid #dbe5f3;
  background: white;
  box-shadow: 0 16px 44px rgba(15, 23, 42, 0.06);
}

.admin-card {
  background: linear-gradient(180deg, #ffffff 0%, #f3f7ff 100%);
}

.option-head {
  margin-bottom: 18px;
}

.option-tag {
  display: inline-flex;
  margin-bottom: 12px;
  padding: 7px 12px;
  border-radius: 999px;
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.option-head h3 {
  margin: 0 0 10px;
  font-size: 22px;
}

.option-head p {
  margin: 0;
  color: #64748b;
  line-height: 1.75;
}

.form {
  display: grid;
  gap: 16px;
}

.input-group {
  display: grid;
  gap: 8px;
}

.input-group label {
  font-size: 13px;
  font-weight: 600;
  color: #1e3a5f;
}

.input-group input {
  width: 100%;
  box-sizing: border-box;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid #cbd5e1;
  background: #f8fbff;
  font-size: 14px;
  outline: none;
}

.input-group input:focus {
  border-color: #1d4ed8;
  box-shadow: 0 0 0 4px rgba(29, 78, 216, 0.1);
}

.auth-helper {
  display: flex;
  gap: 10px;
  font-size: 13px;
  color: #64748b;
  line-height: 1.7;
}

.auth-helper.split {
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.auth-helper a {
  color: #1d4ed8;
  font-weight: 600;
  text-decoration: none;
}

.primary-auth-btn,
.secondary-auth-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}

.primary-auth-btn {
  border: none;
  background: linear-gradient(135deg, #123b83, #1d4ed8);
  color: white;
}

.secondary-auth-btn {
  border: 1px solid #bfdbfe;
  background: #eff6ff;
  color: #123b83;
}

.admin-portal-actions {
  display: flex;
}

.back-home-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  border-radius: 12px;
  border: 1px solid #dbe5f3;
  background: #ffffff;
  color: #123b83;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

@media (max-width: 980px) {
  body.login-page {
    padding: 18px;
  }

  .login-shell {
    grid-template-columns: 1fr;
  }

  .login-visual,
  .login-options {
    padding: 34px 28px;
  }
}

@media (max-width: 640px) {
  body.login-page {
    padding: 18px 14px;
    background: #f5f7fb;
  }

  .login-shell {
    min-height: 0;
    max-width: 420px;
    border-radius: 18px;
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.12);
    border: 1px solid rgba(203, 213, 225, 0.8);
    background: #ffffff;
  }

  .login-visual {
    display: none;
  }

  .login-options {
    margin: 0;
    padding: 28px 20px 24px;
    border-radius: 18px;
    background: #ffffff;
    box-shadow: none;
    border: none;
    gap: 16px;
  }

  .auth-switch {
    padding: 5px;
    border-radius: 14px;
  }

  .switch-btn {
    min-height: 40px;
    border-radius: 10px;
    font-size: 13px;
  }

  .options-heading h2 {
    font-size: 22px;
  }

  .options-heading p,
  .option-head p,
  .auth-helper {
    font-size: 13px;
  }

  .login-option-card {
    padding: 16px;
    border-radius: 16px;
    box-shadow: none;
  }

  .input-group input {
    min-height: 44px;
    padding: 12px 14px;
    border-radius: 12px;
    background: #f8fafc;
  }

  .primary-auth-btn,
  .secondary-auth-btn {
    min-height: 44px;
    border-radius: 12px;
  }

  .option-head h3 {
    font-size: 20px;
  }
}
```

### css\my-courses.css

`$lang
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#ffffff;
color:#1e293b;
}

/* HEADER */
.main-header{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 60px;
background:#1e3a8a;
color:white;
}

.logo-area{
display:flex;
align-items:center;
gap:10px;
}

.logo{width:40px;}

nav a{
margin-left:25px;
color:white;
text-decoration:none;
font-weight:500;
}

nav a.active{
border-bottom:2px solid white;
}

.explore-btn{
background:white;
color:#1e3a8a;
padding:8px 14px;
border-radius:20px;
}

/* HERO */
.hero{
padding:70px 60px;
background:#f4f8ff;
}

.hero h1{
font-size:32px;
color:#1e3a8a;
margin-bottom:10px;
}

/* STATS */
.stats-section{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:30px;
padding:50px 60px;
}

.stat-card{
background:white;
padding:30px;
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);
transition:.3s;
cursor:pointer;
border:1px solid #e2e8f0;
}

.stat-card:hover{
transform:translateY(-8px);
border-color:#2563eb;
}

.stat-card h3{
color:#1e3a8a;
margin-bottom:8px;
}

.progress-track{
height:8px;
background:#e2e8f0;
border-radius:10px;
margin:15px 0;
overflow:hidden;
}

.progress-fill{
height:100%;
background:linear-gradient(90deg,#1e3a8a,#2563eb);
transition:1s ease;
}

.stat-card button{
background:#2563eb;
color:white;
border:none;
padding:8px 16px;
border-radius:20px;
}

/* TRENDING */
.trending{
padding:60px;
background:#f9fbff;
}

.trending h2{
color:#1e3a8a;
margin-bottom:30px;
}

.course-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:30px;
}

.course-card{
background:white;
border-radius:20px;
overflow:hidden;
box-shadow:0 10px 30px rgba(0,0,0,0.06);
cursor:pointer;
transition:.3s;
}

.course-card:hover{
transform:translateY(-10px);
}

.course-card img{
width:100%;
height:200px;
object-fit:cover;
transition: 0.2s;
}

.course-card a:hover img {
  opacity: 0.8;
  transform: scale(1.02);
}

.course-card a {
  text-decoration: none;
  display: block;
}

.badge{
background:#2563eb;
color:white;
padding:4px 8px;
border-radius:12px;
font-size:12px;
}

/* FOOTER */
.main-footer{
background:#1e3a8a;
color:white;
padding:60px;
}

.footer-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:40px;
}

@media (max-width: 900px){
.main-header,
.hero,
.stats-section,
.trending,
.main-footer{
padding-left:24px;
padding-right:24px;
}

.main-header{
flex-wrap:wrap;
gap:14px;
}

nav{
display:flex;
flex-wrap:wrap;
gap:12px 18px;
}

nav a{
margin-left:0;
}
}

@media (max-width: 640px){
.main-header,
.hero,
.stats-section,
.trending,
.main-footer{
padding-left:16px;
padding-right:16px;
}

.hero{
padding-top:48px;
padding-bottom:48px;
}

.hero h1{
font-size:28px;
}

.stats-section,
.course-grid,
.footer-grid{
gap:18px;
}

.stat-card{
padding:22px;
}

.course-card img{
height:180px;
}
}
```

### css\notes.css

`$lang
body{
margin:0;
font-family:Arial, sans-serif;
background:#f8fafc;
color:#1e293b;
overflow-x:hidden;
}

.notes-header{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 40px;
background:#0b3a75;
color:white;
}

.notes-header nav a{
color:white;
text-decoration:none;
margin-left:20px;
}

.notes-layout{
display:flex;
min-height:calc(100vh - 86px);
}

.notes-sidebar{
width:280px;
background:white;
border-right:1px solid #e2e8f0;
padding:28px;
}

.notes-sidebar h3{
margin-top:0;
color:#0b3a75;
}

.note-filter{
padding:14px;
border-radius:12px;
background:#f8fafc;
margin-bottom:14px;
cursor:pointer;
border:1px solid transparent;
}

.note-filter.active{
border-color:#2563eb;
background:#eff6ff;
}

.note-filter span{
display:block;
font-size:12px;
margin-top:6px;
color:#64748b;
}

.notes-content{
flex:1;
padding:36px;
}

.notes-hero,
.note-card{
background:white;
border-radius:16px;
padding:24px;
box-shadow:0 10px 24px rgba(0,0,0,0.05);
margin-bottom:20px;
}

.notes-hero p,
.note-card p{
color:#475569;
line-height:1.7;
}

.note-detail{
margin-top:16px;
padding:16px;
border-radius:12px;
background:#f8fafc;
border:1px solid #e2e8f0;
}

.note-meta{
display:flex;
gap:12px;
flex-wrap:wrap;
margin-top:12px;
}

.note-meta span{
background:#eff6ff;
color:#1d4ed8;
padding:6px 12px;
border-radius:999px;
font-size:12px;
font-weight:600;
}

.note-actions{
margin-top:18px;
display:flex;
gap:12px;
}

.note-actions button{
border:none;
border-radius:10px;
padding:10px 16px;
cursor:pointer;
font-weight:600;
background:#0b3a75;
color:white;
}

@media (max-width: 1024px){
.notes-header{
padding:18px 24px;
gap:16px;
flex-wrap:wrap;
}

.notes-header nav{
display:flex;
flex-wrap:wrap;
gap:12px 18px;
}

.notes-header nav a{
margin-left:0;
}

.notes-layout{
flex-direction:column;
min-height:0;
}

.notes-sidebar{
width:100%;
border-right:none;
border-bottom:1px solid #e2e8f0;
padding:24px;
}

.notes-content{
padding:28px 24px;
}
}

@media (max-width: 640px){
.notes-header,
.notes-sidebar,
.notes-content{
padding-left:16px;
padding-right:16px;
}

.notes-hero,
.note-card{
padding:18px;
}

.note-actions{
flex-direction:column;
}

.note-actions button{
width:100%;
}
}
```

### css\profile.css

`$lang
/* ================= GLOBAL ================= */

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#f5f7fa;
color:#1e293b;
overflow-x:hidden;
}

/* ================= HEADER ================= */

.header{
display:flex;
justify-content:space-between;
align-items:center;
padding:18px 50px;
background:#1e3a8a;
color:white;
}

.header nav a{
margin-left:22px;
text-decoration:none;
color:white;
font-size:14px;
transition:.2s;
}

.header nav a:hover{
opacity:.8;
}

.header nav .active{
font-weight:600;
border-bottom:2px solid white;
padding-bottom:4px;
}

.logout{
color:#ff6b6b !important;
}

/* ================= MAIN CONTAINER ================= */

.profile-container{
padding:40px 60px;
}

/* ================= PROFILE HEADER ================= */

.profile-header{
display:flex;
justify-content:space-between;
align-items:center;
background:white;
padding:30px;
border-radius:14px;
box-shadow:0 6px 20px rgba(0,0,0,0.05);
margin-bottom:35px;
flex-wrap:wrap;
}

.avatar-wrapper{
display:flex;
flex-direction:column;
align-items:center;
}

.avatar-wrapper img{
width:120px;
height:120px;
border-radius:50%;
object-fit:cover;
margin-bottom:10px;
border:4px solid #e2e8f0;
}

.upload-btn{
background:#1e3a8a;
color:white;
border:none;
padding:6px 12px;
border-radius:6px;
cursor:pointer;
font-size:13px;
}

.student-info h1{
font-size:24px;
margin-bottom:6px;
}

.student-info p{
color:#64748b;
font-size:14px;
}

.profile-actions{
display:flex;
gap:10px;
margin-top:10px;
}

.edit-btn,
.secondary-btn{
padding:8px 14px;
border-radius:6px;
border:none;
cursor:pointer;
font-size:13px;
}

.edit-btn{
background:#2563eb;
color:white;
}

.secondary-btn{
background:#e2e8f0;
color:#1e293b;
}

/* ================= INFO NAVIGATION CARDS ================= */

.profile-info-nav{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
margin-bottom:40px;
}

.info-nav-card{
background:white;
padding:22px;
border-radius:14px;
box-shadow:0 6px 18px rgba(0,0,0,0.05);
cursor:pointer;
transition:.3s;
border:1px solid #e2e8f0;
}

.info-nav-card:hover{
transform:translateY(-5px);
}

.info-nav-card.active{
border:2px solid #2563eb;
}

.info-nav-card h3{
margin-bottom:6px;
font-size:16px;
}

.info-nav-card p{
font-size:14px;
color:#64748b;
}

/* ================= GLASS ACADEMIC STATS ================= */

.glass-academic{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:25px;
margin-bottom:40px;
}

.glass-stat-card{
padding:25px;
border-radius:18px;
backdrop-filter:blur(15px);
background:rgba(255,255,255,0.7);
box-shadow:0 8px 25px rgba(0,0,0,0.06);
border:1px solid rgba(255,255,255,0.6);
transition:.3s;
}

.glass-stat-card:hover{
transform:translateY(-6px);
box-shadow:0 12px 30px rgba(0,0,0,0.1);
}

.stat-top{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:15px;
}

.stat-top h4{
font-size:15px;
font-weight:600;
}

.stat-top span{
font-weight:700;
color:#1e3a8a;
}

.stat-progress{
height:6px;
background:#e2e8f0;
border-radius:10px;
overflow:hidden;
margin-bottom:18px;
}

.stat-progress div{
height:100%;
background:linear-gradient(90deg,#1e3a8a,#2563eb);
border-radius:10px;
transition:.4s;
}

.glass-stat-card button{
width:100%;
padding:8px;
border:none;
border-radius:8px;
background:#1e3a8a;
color:white;
cursor:pointer;
transition:.3s;
}

.glass-stat-card button:hover{
background:#2563eb;
}

/* ================= EDITABLE INFO BARS ================= */

.info-bars{
background:white;
padding:25px;
border-radius:14px;
box-shadow:0 4px 12px rgba(0,0,0,0.05);
margin-bottom:40px;
}

.info-row{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:18px;
}

.info-row span{
font-weight:600;
color:#1e293b;
}

.info-row input{
width:60%;
padding:8px 12px;
border-radius:6px;
border:1px solid #cbd5e1;
outline:none;
transition:.2s;
}

.info-row input:focus{
border-color:#1e3a8a;
box-shadow:0 0 6px rgba(30,58,138,0.2);
}

/* ================= PREMIUM CERTIFICATES ================= */

.premium-certificates{
background:white;
padding:30px;
border-radius:14px;
box-shadow:0 6px 20px rgba(0,0,0,0.05);
margin-bottom:40px;
}

.premium-certificates h2{
margin-bottom:20px;
color:#1e3a8a;
}

.certificate-card{
display:flex;
justify-content:space-between;
flex-wrap:wrap;
gap:30px;
}

.certificate-requirements{
margin-top:15px;
font-size:14px;
color:#475569;
}

.certificate-requirements ul{
margin-top:6px;
padding-left:18px;
}

.certificate-status{
margin-top:12px;
font-weight:600;
}

.completed{
color:#16a34a;
}

.primary-btn{
background:#1e3a8a;
color:white;
padding:8px 14px;
border:none;
border-radius:6px;
cursor:pointer;
}

/* ================= NOTIFICATIONS ================= */

.profile-notifications{
background:white;
padding:25px;
border-radius:14px;
box-shadow:0 4px 12px rgba(0,0,0,0.05);
margin-bottom:40px;
}

.profile-notifications h2{
margin-bottom:15px;
color:#1e3a8a;
}

.profile-notification{
padding:12px 15px;
border-radius:6px;
margin-bottom:10px;
font-size:14px;
}

.profile-notification.urgent{
background:#fee2e2;
color:#991b1b;
}

.profile-notification.info{
background:#dbeafe;
color:#1e40af;
}

.profile-notification.success{
background:#dcfce7;
color:#166534;
}

/* ================= EDIT MODAL ================= */

.edit-modal{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.4);
display:flex;
justify-content:center;
align-items:center;
visibility:hidden;
opacity:0;
transition:.3s;
z-index:999;
}

.edit-modal.active{
visibility:visible;
opacity:1;
}

.modal-content{
background:white;
padding:30px;
border-radius:14px;
width:400px;
box-shadow:0 15px 40px rgba(0,0,0,0.2);
animation:slideUp .3s ease;
}

.modal-content h2{
margin-bottom:15px;
}

.modal-content label{
font-size:14px;
display:block;
margin-top:10px;
margin-bottom:4px;
}

.modal-content input{
width:100%;
padding:8px 10px;
border-radius:6px;
border:1px solid #cbd5e1;
outline:none;
}

.modal-buttons{
margin-top:20px;
display:flex;
justify-content:space-between;
}

.save-btn{
background:#1e3a8a;
color:white;
border:none;
padding:8px 16px;
border-radius:6px;
cursor:pointer;
}

.cancel-btn{
background:#e2e8f0;
border:none;
padding:8px 16px;
border-radius:6px;
cursor:pointer;
}

@keyframes slideUp{
from{transform:translateY(20px); opacity:0;}
to{transform:translateY(0); opacity:1;}
}

/* ================= FOOTER ================= */

.profile-footer{
text-align:center;
padding:20px;
background:#e2e8f0;
margin-top:40px;
font-size:14px;
}

@media (max-width: 900px){
.header{
padding:18px 24px;
gap:14px;
flex-wrap:wrap;
}

.header nav{
display:flex;
flex-wrap:wrap;
gap:12px 18px;
}

.header nav a{
margin-left:0;
}

.profile-container{
padding:28px 24px;
}

.info-row{
gap:12px;
align-items:flex-start;
flex-direction:column;
}

.info-row input{
width:100%;
}
}

@media (max-width: 640px){
.header,
.profile-container{
padding-left:16px;
padding-right:16px;
}

.profile-header,
.premium-certificates,
.profile-notifications,
.info-bars{
padding:20px;
}

.profile-actions,
.modal-buttons{
flex-direction:column;
}

.edit-btn,
.secondary-btn,
.primary-btn,
.save-btn,
.cancel-btn{
width:100%;
}

.modal-content{
width:min(400px, calc(100vw - 32px));
padding:22px;
}
}
```

### css\project.css

`$lang
body{
margin:0;
font-family:Arial, sans-serif;
background:#f5f7fb;
color:#1e293b;
overflow-x:hidden;
}

.project-header{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 40px;
background:#0b3a75;
color:white;
}

.project-header nav a{
color:white;
text-decoration:none;
margin-left:20px;
}

.project-layout{
display:flex;
min-height:calc(100vh - 86px);
}

.project-sidebar{
width:280px;
background:white;
border-right:1px solid #e2e8f0;
padding:28px;
}

.project-sidebar h3{
margin-top:0;
color:#0b3a75;
}

.project-item{
padding:14px;
border-radius:12px;
background:#f8fafc;
margin-bottom:14px;
cursor:pointer;
border:1px solid transparent;
}

.project-item.active{
border-color:#2563eb;
background:#eff6ff;
}

.project-item span{
display:block;
margin-top:6px;
font-size:12px;
color:#64748b;
}

.project-content{
flex:1;
padding:36px;
}

.project-panel,
.project-grid article{
background:white;
border-radius:16px;
padding:24px;
box-shadow:0 10px 24px rgba(0,0,0,0.05);
margin-bottom:22px;
}

.project-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:18px;
margin-bottom:22px;
}

.project-panel h1,
.project-panel h3{
margin-top:0;
}

.project-panel p,
.project-panel li{
line-height:1.7;
color:#475569;
}

.project-panel textarea,
.project-panel input{
width:100%;
padding:12px 14px;
border:1px solid #cbd5e1;
border-radius:10px;
margin-top:12px;
font-size:14px;
}

.project-actions{
display:flex;
gap:12px;
flex-wrap:wrap;
margin-top:18px;
}

.project-actions button{
border:none;
border-radius:10px;
padding:10px 16px;
font-weight:600;
cursor:pointer;
}

.project-actions .primary{
background:#0b3a75;
color:white;
}

.project-actions .secondary{
background:#e2e8f0;
}

.status-badge{
display:inline-block;
padding:6px 12px;
border-radius:999px;
background:#dbeafe;
color:#1d4ed8;
font-size:12px;
font-weight:700;
margin-bottom:16px;
}

@media (max-width: 1024px){
.project-header{
padding:18px 24px;
gap:16px;
flex-wrap:wrap;
}

.project-header nav{
display:flex;
flex-wrap:wrap;
gap:12px 18px;
}

.project-header nav a{
margin-left:0;
}

.project-layout{
flex-direction:column;
min-height:0;
}

.project-sidebar{
width:100%;
border-right:none;
border-bottom:1px solid #e2e8f0;
padding:24px;
}

.project-content{
padding:28px 24px;
}
}

@media (max-width: 640px){
.project-header,
.project-sidebar,
.project-content{
padding-left:16px;
padding-right:16px;
}

.project-panel,
.project-grid article{
padding:18px;
}

.project-actions button{
width:100%;
}
}
```

### css\quiz.css

`$lang
body{
margin:0;
font-family:Arial, sans-serif;
background:#f4f6fb;
overflow-x:hidden;
}

/* HEADER */
.main-header{
display:flex;
justify-content:space-between;
align-items:center;
padding:18px 50px;
background:#0b3a75;
color:white;
}

.main-header nav a{
margin-left:20px;
text-decoration:none;
color:white;
font-size:14px;
}

.main-header nav a.active{
font-weight:600;
}

/* DASHBOARD */
.quiz-dashboard{
padding:60px 80px;
}

.quiz-dashboard h1{
margin-bottom:30px;
color:#0b3a75;
}

.quiz-hero{
margin-bottom:28px;
}

.quiz-hero p{
color:#475569;
max-width:760px;
line-height:1.7;
}

.quiz-summary{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
gap:16px;
margin-top:24px;
}

.quiz-summary div{
background:white;
padding:18px;
border-radius:12px;
box-shadow:0 8px 20px rgba(0,0,0,0.05);
}

.quiz-summary strong{
display:block;
color:#0b3a75;
margin-bottom:8px;
}

.quiz-summary span{
font-size:24px;
font-weight:700;
color:#1e293b;
}

.quiz-list{
display:flex;
flex-direction:column;
gap:24px;
}

.quiz-card{
display:flex;
justify-content:space-between;
align-items:center;
background:white;
padding:30px;
margin-bottom:25px;
border-radius:8px;
box-shadow:0 6px 18px rgba(0,0,0,0.05);
transition:0.3s;
}

.quiz-card:hover{
transform:translateY(-4px);
}

.quiz-info h3{
margin-bottom:10px;
}

.status{
display:inline-block;
margin-top:10px;
padding:4px 10px;
border-radius:4px;
font-size:12px;
}

.status.ongoing{
background:#dcfce7;
color:#166534;
}

.status.not-started,
.status.review{
background:#e2e8f0;
color:#1e293b;
}

.status.ready{
background:#dcfce7;
color:#166534;
}

.status.completed{
background:#dbeafe;
color:#1d4ed8;
}

.score-line{
margin-top:12px;
color:#0b3a75;
}

.quiz-action button{
background:#0b3a75;
color:white;
border:none;
padding:10px 18px;
border-radius:4px;
cursor:pointer;
transition:0.3s;
}

.quiz-action button:hover{
background:#082a55;
}

.main-footer{
background:#0b3a75;
color:white;
text-align:center;
padding:20px;
margin-top:60px;
}

@media (max-width: 900px){
.main-header{
padding:18px 24px;
gap:14px;
flex-wrap:wrap;
}

.main-header nav{
display:flex;
flex-wrap:wrap;
gap:12px 18px;
}

.main-header nav a{
margin-left:0;
}

.quiz-dashboard{
padding:36px 24px;
}

.quiz-card{
flex-direction:column;
align-items:flex-start;
gap:18px;
padding:22px;
}
}

@media (max-width: 640px){
.main-header,
.quiz-dashboard,
.main-footer{
padding-left:16px;
padding-right:16px;
}

.quiz-summary{
grid-template-columns:1fr;
}

.quiz-card{
padding:18px;
}

.quiz-action{
width:100%;
}

.quiz-action button{
width:100%;
}
}
```

### css\student.css

`$lang
/* ================= GLOBAL ================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: #f8fafc;
  overflow-x: hidden;
}

/* ================= HEADER ================= */

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  background: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  color: #2563eb;
}

/* NAV LINKS */

.nav-links a {
  margin-left: 25px;
  cursor: pointer;
  font-size: 14px;
}

/* ================= DROPDOWN ================= */

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  cursor: pointer;
}

.dropdown-content {
  position: absolute;
  top: 35px;
  left: 0;
  background: white;
  min-width: 180px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  border-radius: 10px;

  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: 0.25s;
}

.dropdown-content a {
  display: block;
  padding: 10px 14px;
  font-size: 14px;
}

.dropdown-content a:hover {
  background: #f1f5f9;
}

.dropdown:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* ================= MAIN ================= */

.main {
  padding: 30px 40px;
}

/* ================= INSTITUTIONS ================= */

.institutions {
  text-align: center;
  padding: 40px 20px;
}

.institutions h2 {
  margin-bottom: 10px;
}

.institution-logos {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
}

.institution-logos img {
  width: 80px;
  object-fit: contain;
}

.snapshot-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
  margin-top:24px;
}

.snapshot-card{
  background:white;
  border:1px solid #e2e8f0;
  border-radius:14px;
  padding:20px;
  text-align:left;
  box-shadow:0 8px 20px rgba(0,0,0,0.04);
}

.snapshot-card h3{
  color:#2563eb;
  margin-bottom:8px;
}

.snapshot-card p{
  font-size:15px;
  color:#1e293b;
  margin-bottom:8px;
}

.snapshot-card span{
  font-size:13px;
  color:#64748b;
  line-height:1.6;
}

/* ================= WHY VAARADHI ================= */

.why {
  padding: 40px 20px;
  text-align: center;
}

.why h2 {
  margin-bottom: 10px;
}

.why-vertical {
  max-width: 750px;
  margin: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* BORDER ONLY CARDS */

.why-card {
  padding: 22px;
  border: 1px solid #cbd5f5;
  border-radius: 12px;
  background: transparent;
  text-align: left;
}

.why-card h3 {
  color: #2563eb;
  margin-bottom: 6px;
}

.why-card p {
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
}

/* ================= SEARCH ================= */

.search-section {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}

.search-section input {
  width: 600px;
  padding: 16px 20px;
  border: 2px solid #cbd5f5;
  border-radius: 40px;
  background: transparent;
  outline: none;
  font-size: 15px;
  transition: 0.3s;
}

.search-section input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 10px rgba(37,99,235,0.2);
}

/* ================= POPULAR COURSES ================= */

.popular{
  padding:40px 20px;
}

.popular h2{
  text-align:center;
  margin-bottom:25px;
}

/* SIDE BY SIDE LAYOUT */

.course-grid{
  display:flex;
  justify-content:center;
  gap:25px;
  flex-wrap:nowrap;   /* keeps side by side */
}

/* CARD */

.course-card{
  width:260px;
  border:1px solid #e2e8f0;
  border-radius:12px;
  overflow:hidden;
  background:white;
  transition:0.3s;
}

.course-card:hover{
  transform:translateY(-6px);
  box-shadow:0 10px 25px rgba(0,0,0,0.08);
}

/* IMAGE */

.course-card img{
  width:100%;
  height:150px;
  object-fit:cover;
}

/* TEXT */

.course-card h4{
  padding:10px;
  font-size:15px;
}

.course-card p{
  padding:0 10px 12px;
  font-size:13px;
  color:#64748b;
}


/* ================= FOOTER ================= */

.footer {
  background: #0f172a;
  color: white;
  padding: 40px;
}

/* LAYOUT */

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

/* BRAND */

.footer-brand {
  max-width: 320px;
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-header img {
  width: 45px;
  height: 45px;
  object-fit: contain;
}

.brand-header h2 {
  font-size: 22px;
}

.tagline {
  margin-top: 8px;
  font-size: 14px;
  color: #cbd5f5;
}

/* LINKS RIGHT */

.footer-links {
  display: flex;
  gap: 60px;
}

.footer-links h4 {
  margin-bottom: 10px;
}

.footer-links p {
  font-size: 14px;
  margin-bottom: 6px;
  cursor: pointer;
}

/* COPYRIGHT */

.copyright {
  text-align: center;
  margin-top: 25px;
  font-size: 13px;
  color: #94a3b8;
}

/* ================= MOBILE SIDEBAR ================= */

.menu-toggle {
  display: none;
  font-size: 22px;
  cursor: pointer;
}

.mobile-sidebar {
  position: fixed;
  left: -240px;
  top: 0;
  width: 220px;
  height: 100%;
  background: #0f172a;
  padding: 20px;
  transition: 0.3s;
  z-index: 120;
  overflow-y: auto;
}

.mobile-sidebar a {
  display: block;
  color: white;
  margin-bottom: 15px;
}

.mobile-sidebar-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 110;
}

body.mobile-nav-open {
  overflow: hidden;
}

/* ================= MOBILE ================= */

@media(max-width:768px){

  .header {
    padding: 18px 20px;
    gap: 12px;
    flex-wrap: wrap;
  }

  .logo {
    font-size: 20px;
  }

  .nav-links {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .mobile-sidebar.active {
    left: 0;
  }

  .mobile-sidebar-overlay.active {
    opacity: 1;
    visibility: visible;
  }

  .main {
    padding: 24px 20px 32px;
  }

  .dashboard-stats {
    padding: 24px 0 !important;
  }

  .dashboard-stats > div {
    gap: 14px !important;
  }

  .institution-logos {
    flex-wrap: wrap;
    gap: 18px;
  }

  .search-section input {
    width: 100%;
  }

  .course-grid {
    flex-wrap: wrap;
  }

  .course-card {
    width: 100%;
    max-width: 100%;
  }

  .notification-panel {
    margin: 0 20px 24px;
  }

  .footer-container {
    flex-direction: column;
    gap: 25px;
  }

  .footer-links {
    gap: 30px;
  }

}

@media (max-width: 480px) {
  .header {
    padding: 16px;
  }

  .why,
  .popular,
  .institutions,
  .search-section {
    padding-left: 16px;
    padding-right: 16px;
  }

  .why-card,
  .snapshot-card,
  .notification-panel {
    padding: 18px;
  }

  .course-card img {
    height: 180px;
  }

  .notification-panel {
    margin-left: 16px;
    margin-right: 16px;
  }
}
/* ================= HEADER NOTIFICATION ICON ================= */

.notification-icon{
position:relative;
margin-left:20px;
font-size:18px;
cursor:pointer;
}

.notification-badge{
position:absolute;
top:-6px;
right:-8px;
background:#dc2626;
color:white;
font-size:10px;
padding:3px 6px;
border-radius:50%;
font-weight:600;
}

/* ================= NOTIFICATION PANEL ================= */

.notification-panel{
background:white;
padding:20px;
border-radius:8px;
box-shadow:0 4px 12px rgba(0,0,0,0.05);
height:fit-content;
}

.notification-header{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:15px;
}

.notification-header h3{
font-size:16px;
color:#1e3a8a;
}

.view-all{
font-size:12px;
text-decoration:none;
color:#1e3a8a;
font-weight:500;
}

/* ================= NOTIFICATION LIST ================= */

.notification-list{
max-height:320px;
overflow-y:auto;
padding-right:5px;
}

/* Scrollbar */
.notification-list::-webkit-scrollbar{
width:5px;
}

.notification-list::-webkit-scrollbar-thumb{
background:#cbd5e1;
border-radius:10px;
}

/* ================= NOTIFICATION ITEMS ================= */

.notification-item{
padding:12px;
margin-bottom:12px;
border-radius:6px;
background:#f8fafc;
display:flex;
flex-direction:column;
gap:6px;
border-left:4px solid #1e3a8a;
transition:.2s;
}

.notification-item:hover{
background:#eef2ff;
}

.notification-text{
font-size:13px;
color:#1e293b;
}

.notification-time{
font-size:11px;
color:#64748b;
}

/* ================= SEVERITY TYPES ================= */

.notification-item.urgent{
border-left-color:#dc2626;
}

.notification-item.exam{
border-left-color:#f59e0b;
}

.notification-item.info{
border-left-color:#2563eb;
}

.notification-item.success{
border-left-color:#16a34a;
}
/* Continue Course Button */

.continue-btn{
background:#2563eb;
color:white;
border:none;
padding:8px 14px;
border-radius:6px;
font-size:14px;
cursor:pointer;
transition:0.3s;
}

.continue-btn:hover{
background:#1d4ed8;
}


/* View Certificate Button */

.certificate-btn{
background:#16a34a;
}

.certificate-btn:hover{
background:#15803d;
}
```

### css\style.css

`$lang
/* ================= GLOBAL ================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: linear-gradient(135deg, #eef2ff, #f8fafc);
  color: #0f172a;
  overflow-x: hidden;
}

/* ================= NAVBAR ================= */

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 60px;
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: top 0.4s ease;
  z-index: 10;
}

.nav-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 14px;
  background: rgba(37,99,235,0.12);
  color: #1d4ed8;
  font-size: 24px;
  cursor: pointer;
}

.nav-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.42);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease;
  z-index: 9;
}

.nav-mobile-shell {
  display: contents;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.nav-left img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.site-name {
  font-size: 20px;
  font-weight: 600;
  color: #2563eb;
}

/* NAV CENTER */

.nav-center {
  display: flex;
  gap: 35px;
}

.nav-item {
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s;
}

.nav-item:hover {
  color: #2563eb;
  transform: translateY(-2px);
}

/* NAV RIGHT BUTTONS */

.nav-right button {
  margin-left: 10px;
  padding: 8px 18px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s;
}

.login-btn {
  background: transparent;
  border: 1px solid #2563eb;
  color: #2563eb;
}

.signup-btn {
  background: #2563eb;
  color: white;
  box-shadow: 0 0 10px rgba(37,99,235,0.4);
}

.login-btn:hover,
.signup-btn:hover {
  transform: translateY(-2px);
}

.signup-btn:hover {
  box-shadow: 0 0 20px rgba(37,99,235,0.8);
}

/* ================= NAV SEARCH ================= */

.nav-search {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-search input {
  padding: 8px 14px;
  border-radius: 20px;
  border: 1px solid #cbd5f5;
  outline: none;
  font-size: 13px;
  width: 180px;
  transition: 0.3s;
}

.nav-search input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 8px rgba(37,99,235,0.3);
}

.nav-search button {
  padding: 8px 14px;
  border: none;
  border-radius: 20px;
  background: #2563eb;
  color: white;
  cursor: pointer;
  font-size: 13px;
  transition: 0.3s;
}

.nav-search button:hover {
  box-shadow: 0 0 12px rgba(37,99,235,0.7);
}

/* ================= HERO ================= */

.hero {
  text-align: center;
  padding: 90px 20px 60px;
}

.hero h1 {
  font-size: 42px;
  color: #1e3a8a;
  margin-bottom: 15px;
}

.hero p {
  max-width: 700px;
  margin: auto;
  font-size: 18px;
  color: #475569;
}

.hero-preview {
  max-width: 980px;
  margin: 34px auto 0;
  display: grid;
  grid-template-columns: 1fr 1.15fr 1fr;
  gap: 18px;
  align-items: center;
}

.preview-float {
  background: rgba(255,255,255,0.58);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(37, 99, 235, 0.18);
  box-shadow: 0 16px 40px rgba(37,99,235,0.12);
  border-radius: 22px;
  padding: 20px;
  text-align: left;
}

.preview-dashboard,
.preview-achievement {
  transform: translateY(18px);
}

.preview-course {
  padding: 24px;
  transform: translateY(-4px);
  box-shadow: 0 20px 48px rgba(37,99,235,0.18);
}

.preview-label,
.section-kicker,
.player-status,
.certificate-label,
.shell-heading,
.journey-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(37,99,235,0.12);
  color: #1d4ed8;
  font-size: 12px;
  font-weight: 600;
}

.preview-float strong {
  display: block;
  margin: 12px 0 10px;
  color: #1e3a8a;
  font-size: 20px;
}

.preview-float p {
  font-size: 14px;
  color: #475569;
  line-height: 1.7;
}

.mini-progress {
  width: 100%;
  height: 10px;
  background: #dbeafe;
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 12px;
}

.mini-progress span,
.player-progress span {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #2563eb, #60a5fa);
}

/* ================= PLATFORM STATS ================= */

.stats {
  padding: 60px 40px;
  background: transparent;
}

.stats-head,
.colleges-head {
  max-width: 900px;
  margin: 0 auto 28px;
  text-align: center;
}

.stats-head h2,
.colleges-head .section-title {
  color: #1e3a8a;
  margin: 14px 0 12px;
}

.stats-head h2 {
  font-size: 34px;
  line-height: 1.18;
}

.stats-head p,
.colleges-head p,
.colleges-support {
  color: #475569;
  line-height: 1.8;
  font-size: 15px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
}

.stat-card {
  background: rgba(155, 185, 250, 0.12);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  padding: 30px;
  border-radius: 20px;
  text-align: left;
  border: 1px solid rgba(37, 99, 235, 0.25);
  box-shadow: 0 8px 30px rgba(37,99,235,0.15);
  transition: all 0.35s ease;
}

.stat-card:hover {
  transform: translateY(-10px) scale(1.02);
  background: rgba(132, 162, 226, 0.18);
  box-shadow: 0 15px 45px rgba(37,99,235,0.35);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(37,99,235,0.12);
  color: #1d4ed8;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 18px;
}

.stat-card h2 {
  font-size: 24px;
  line-height: 1.25;
  color: #1e3a8a;
  margin-bottom: 12px;
}

.stat-card p {
  font-size: 15px;
  color: #334155;
  margin-bottom: 14px;
  line-height: 1.7;
  min-height: 112px;
}

.stat-meta {
  display: block;
  margin-bottom: 22px;
  color: #64748b;
  font-size: 13px;
  line-height: 1.7;
}

.stat-card button,
.stat-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border-radius: 20px;
  background: transparent;
  color: #1d4ed8;
  border: 1.5px solid rgba(37, 99, 235, 0.6);
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.stat-card button:hover,
.stat-link:hover {
  background: rgba(37, 99, 235, 0.15);
  border-color: #2563eb;
  box-shadow: 0 0 12px rgba(37,99,235,0.4);
}

/* ================= COLLEGES ================= */

.colleges {
  padding: 60px 40px;
  text-align: center;
}

.section-title {
  font-size: 26px;
  margin-bottom: 30px;
  font-weight: 600;
}

.college-logos {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  max-width: 980px;
  margin: 0 auto;
}

.college-card {
  background: rgba(255,255,255,0.62);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(37, 99, 235, 0.14);
  border-radius: 22px;
  padding: 24px 18px;
  box-shadow: 0 14px 34px rgba(37,99,235,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: 0.3s ease;
}

.college-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(37,99,235,0.16);
}

.college-card img {
  width: 84px;
  height: 84px;
  object-fit: contain;
  transition: 0.3s ease;
}

.college-card strong {
  color: #1e3a8a;
  font-size: 16px;
}

.college-card span {
  color: #64748b;
  font-size: 13px;
}

.colleges-support {
  max-width: 760px;
  margin: 22px auto 0;
}

/* ================= LANDING EXTENSIONS ================= */

.landing-extension {
  padding: 70px 40px;
}

.extension-card,
.cta-shell {
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(37, 99, 235, 0.18);
  border-radius: 24px;
  box-shadow: 0 18px 45px rgba(37,99,235,0.12);
}

.premium-split {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 34px;
  align-items: center;
}

.premium-split.reverse {
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
}

.premium-split.reverse .split-copy {
  order: 2;
}

.premium-split.reverse .split-visual {
  order: 1;
}

.split-copy h2,
.cta-shell h2 {
  color: #1e3a8a;
  margin: 14px 0 14px;
  font-size: 34px;
  line-height: 1.2;
}

.split-copy p,
.cta-shell p,
.certificate-shell p,
.shell-lesson p,
.content-panel p,
.experience-panel p,
.experience-mini p,
.journey-step p {
  color: #475569;
  line-height: 1.75;
  font-size: 15px;
}

.split-points {
  list-style: none;
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.split-points li {
  position: relative;
  padding-left: 24px;
  color: #334155;
}

.split-points li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  color: #2563eb;
  font-size: 18px;
}

.product-shell {
  display: grid;
  grid-template-columns: 220px 1fr;
  overflow: hidden;
  min-height: 420px;
}

.shell-sidebar {
  padding: 24px;
  background: linear-gradient(180deg, rgba(219,234,254,0.9), rgba(255,255,255,0.6));
  border-right: 1px solid rgba(37, 99, 235, 0.12);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.shell-item {
  padding: 14px 16px;
  border-radius: 16px;
  color: #475569;
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(37, 99, 235, 0.08);
}

.shell-item.active {
  color: #1d4ed8;
  background: rgba(37,99,235,0.12);
  border-color: rgba(37,99,235,0.2);
  font-weight: 600;
}

.shell-main {
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.shell-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.shell-top strong,
.experience-panel strong,
.content-panel strong,
.certificate-shell h4 {
  color: #1e3a8a;
}

.player-progress {
  width: 100%;
  height: 12px;
  background: #dbeafe;
  border-radius: 999px;
  overflow: hidden;
}

.shell-lesson {
  padding: 22px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(219,234,254,0.75), rgba(255,255,255,0.8));
  border: 1px solid rgba(37, 99, 235, 0.12);
}

.shell-lesson h3 {
  color: #0f172a;
  margin: 12px 0 8px;
  font-size: 24px;
}

.shell-bottom {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.content-panel,
.experience-panel,
.experience-mini {
  padding: 18px;
  border-radius: 18px;
  background: rgba(255,255,255,0.72);
  border: 1px solid rgba(37,99,235,0.12);
}

.journey-flow {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
  gap: 16px;
  align-items: center;
}

.journey-step {
  text-align: center;
}

.journey-icon {
  min-width: 54px;
  min-height: 54px;
  margin-bottom: 14px;
  font-size: 13px;
}

.journey-step h3 {
  color: #1e3a8a;
  margin-bottom: 8px;
}

.journey-arrow {
  font-size: 30px;
  color: #60a5fa;
  font-weight: 600;
  text-align: center;
}

.experience-stack {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.experience-panel {
  min-height: 150px;
}

.experience-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.quiz-panel {
  background: linear-gradient(135deg, rgba(219,234,254,0.75), rgba(255,255,255,0.84));
}

.assignment-panel {
  background: linear-gradient(135deg, rgba(239,246,255,0.9), rgba(255,255,255,0.84));
}

.certificate-stage {
  padding: 22px;
}

.certificate-shell {
  padding: 34px;
  min-height: 320px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(255,255,255,0.88), rgba(219,234,254,0.82));
  border: 1px solid rgba(37,99,235,0.14);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.certificate-shell h4 {
  margin: 16px 0 14px;
  font-size: 32px;
}

.certificate-meta {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #64748b;
  font-size: 14px;
}

.section-link-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 11px 18px;
  border-radius: 20px;
  border: 1px solid rgba(37,99,235,0.6);
  color: #1d4ed8;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s ease;
}

.section-link-btn:hover {
  background: rgba(37,99,235,0.1);
}

.final-cta {
  padding-top: 10px;
}

.cta-shell {
  max-width: 900px;
  margin: 0 auto;
  padding: 38px;
  text-align: center;
}

.cta-shell p {
  max-width: 700px;
  margin: 0 auto 24px;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

/* ================= TESTIMONIALS ================= */

.testimonials {
  padding: 70px 40px;
  text-align: center;
}

.testimonial-grid {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 40px;
  flex-wrap: nowrap;
}

.testimonial-card {
  width: 260px;
  padding: 20px;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  text-align: center;
}

.testimonial-card img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

.testimonial-card h3 {
  font-size: 17px;
  color: #0f172a;
  margin-bottom: 4px;
}

.testimonial-card h4 {
  font-size: 13px;
  color: #2563eb;
  margin-bottom: 12px;
}

.testimonial-card p {
  font-size: 13px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 10px;
}

.stars {
  color: #fbbf24;
  font-size: 15px;
  letter-spacing: 2px;
}

/* ================= FOOTER ================= */

footer {
  background: #0f172a;
  color: #cbd5f5;
  padding: 50px 40px 30px;
  margin-top: 60px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-grid h4 {
  margin-bottom: 15px;
  color: white;
}

.footer-grid p:hover {
  color: #60a5fa;
}

.copyright {
  text-align: center;
  font-size: 14px;
  color: #94a3b8;
}

/* ================= SCROLL REVEAL ================= */

.reveal {
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1100px) {
  .hero-preview,
  .premium-split,
  .premium-split.reverse,
  .journey-flow {
    grid-template-columns: 1fr;
  }

  .premium-split.reverse .split-copy,
  .premium-split.reverse .split-visual {
    order: initial;
  }

  .product-shell {
    grid-template-columns: 1fr;
  }

  .shell-sidebar {
    border-right: none;
    border-bottom: 1px solid rgba(37, 99, 235, 0.12);
  }

  .journey-arrow {
    display: none;
  }

  .preview-dashboard,
  .preview-achievement,
  .preview-course {
    transform: none;
  }
}

@media (max-width: 900px) {
  .testimonial-grid {
    flex-wrap: wrap;
  }

  .shell-bottom,
  .experience-row,
  .college-logos {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .navbar {
    position: relative;
    padding: 16px 20px;
    flex-wrap: nowrap;
    gap: 12px;
  }

  .nav-toggle {
    display: inline-flex;
    margin-left: auto;
  }

  .nav-mobile-shell {
    position: fixed;
    top: 88px;
    right: 20px;
    left: 20px;
    background: rgba(255,255,255,0.97);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(37, 99, 235, 0.12);
    border-radius: 22px;
    padding: 18px;
    box-shadow: 0 16px 40px rgba(15,23,42,0.14);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-12px);
    transition: 0.3s ease;
    z-index: 11;
    display: grid;
    gap: 16px;
  }

  .nav-search,
  .nav-center,
  .nav-right {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    background: transparent;
    box-shadow: none;
    border: none;
    border-radius: 0;
    padding: 0;
  }

  .nav-center {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .nav-right {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .nav-right a {
    width: 100%;
  }

  .nav-search input {
    width: 100%;
    max-width: none;
  }

  .nav-search button {
    min-width: 88px;
  }

  .nav-item {
    width: 100%;
    padding: 12px 14px;
    border-radius: 14px;
    background: rgba(37,99,235,0.06);
  }

  .nav-item:hover {
    transform: none;
    background: rgba(37,99,235,0.12);
  }

  .nav-right button {
    width: 100%;
    margin-left: 0;
    min-height: 46px;
  }

  .hero h1 {
    font-size: 34px;
    line-height: 1.15;
  }

  .hero p {
    font-size: 16px;
  }

  .hero-preview {
    margin-top: 26px;
    gap: 14px;
  }

  .stats,
  .colleges,
  .landing-extension,
  .testimonials,
  footer {
    padding-left: 20px;
    padding-right: 20px;
  }

  .split-copy h2,
  .cta-shell h2,
  .certificate-shell h4,
  .stats-head h2 {
    font-size: 28px;
  }

  .section-title {
    font-size: 24px;
    margin-bottom: 22px;
  }

  .college-logos {
    gap: 18px;
  }

  .testimonial-grid {
    gap: 28px;
  }

  .cta-shell {
    padding: 28px 20px;
  }

  body.nav-open {
    overflow: hidden;
  }

  body.nav-open .nav-overlay {
    opacity: 1;
    visibility: visible;
  }

  body.nav-open .nav-mobile-shell {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .navbar {
    padding: 14px 16px;
  }

  .nav-left {
    gap: 12px;
  }

  .nav-left img {
    width: 42px;
    height: 42px;
  }

  .site-name {
    font-size: 17px;
  }

  .nav-mobile-shell {
    left: 16px;
    right: 16px;
    top: 78px;
    padding: 16px;
  }

  .nav-search {
    flex-direction: column;
    align-items: stretch;
  }

  .nav-search button {
    width: 100%;
  }

  .nav-right button {
    margin: 0;
    width: 100%;
  }

  .hero {
    padding: 56px 16px 40px;
  }

  .hero h1 {
    font-size: 28px;
  }

  .hero p,
  .preview-float p,
  .split-copy p,
  .cta-shell p {
    font-size: 15px;
  }

  .preview-float,
  .preview-course,
  .extension-card,
  .cta-shell {
    padding: 18px;
  }

  .shell-main,
  .shell-sidebar,
  .certificate-shell {
    padding: 18px;
  }

  .shell-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .shell-lesson h3,
  .certificate-shell h4,
  .split-copy h2,
  .cta-shell h2 {
    font-size: 24px;
  }

  .stats,
  .colleges,
  .landing-extension,
  .testimonials,
  footer {
    padding-left: 16px;
    padding-right: 16px;
  }

  .stat-card,
  .preview-float,
  .shell-lesson,
  .content-panel,
  .experience-panel,
  .experience-mini {
    padding: 16px;
  }

  .stat-card p {
    min-height: 0;
  }

  .stat-card h2 {
    font-size: 22px;
  }

  .college-card {
    padding: 18px 16px;
  }

  .testimonial-grid {
    gap: 14px;
    margin-top: 26px;
  }

  .testimonial-card {
    width: 100%;
    max-width: 100%;
    padding: 16px 18px;
    border-radius: 18px;
    background: rgba(255,255,255,0.78);
    border: 1px solid rgba(37,99,235,0.12);
    box-shadow: 0 10px 24px rgba(15,23,42,0.06);
    text-align: left;
    display: grid;
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 14px;
    align-items: center;
  }

  .testimonial-card img {
    width: 64px;
    height: 64px;
    margin-bottom: 0;
    grid-row: span 3;
  }

  .testimonial-card h3 {
    font-size: 16px;
    margin-bottom: 2px;
  }

  .testimonial-card h4 {
    margin-bottom: 6px;
    font-size: 12px;
  }

  .testimonial-card p {
    font-size: 13px;
    line-height: 1.55;
    margin-bottom: 0;
  }

  .stars {
    grid-column: 2;
    margin-top: 6px;
    font-size: 13px;
    letter-spacing: 1px;
  }

  .journey-step {
    padding: 16px;
    border-radius: 18px;
    background: rgba(255,255,255,0.62);
    border: 1px solid rgba(37,99,235,0.12);
  }

  .footer-grid {
    gap: 20px;
  }
}

@media (max-width: 420px) {
  .hero h1 {
    font-size: 25px;
  }

  .hero p,
  .preview-float p,
  .split-copy p,
  .cta-shell p,
  .journey-step p {
    font-size: 14px;
  }

  .section-title {
    font-size: 22px;
  }

  .college-card img {
    width: 68px;
    height: 68px;
  }

  .testimonial-card {
    padding: 14px 15px;
    grid-template-columns: 56px minmax(0, 1fr);
    gap: 12px;
  }

  .testimonial-card img {
    width: 56px;
    height: 56px;
  }
}
```

### exam.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Exam Interface</title>
<link rel="stylesheet" href="css/exam.css">
</head>

<body>

<header class="exam-header">
  <div>
    <h3 id="examTitle">Course Quiz</h3>
    <p id="examMeta">Assessment loading...</p>
  </div>
  <div class="timer-wrap">
    <span class="timer-label">Time Left</span>
    <div class="timer"><span id="time">00:00</span></div>
  </div>
</header>

<div class="exam-body">
  <section class="question-area">
    <div class="question-number" id="questionNumber">Question</div>
    <div class="question-box" id="questionBox">Loading question...</div>
    <div class="options" id="optionsContainer"></div>
    <div class="action-buttons">
      <button id="prevBtn">Previous</button>
      <button id="clearBtn">Clear</button>
      <button id="nextBtn" class="primary">Save & Next</button>
    </div>
    <div class="result-panel" id="resultPanel"></div>
  </section>

  <aside class="palette">
    <h4>Question Palette</h4>
    <div class="grid" id="questionPalette"></div>
    <div class="exam-actions">
      <a href="quiz.html" class="back-link">Back to Quizzes</a>
      <button class="submit-btn" id="submitExamBtn">Submit Exam</button>
    </div>
  </aside>
</div>

<script src="js/lms-data.js"></script>
<script src="js/exam.js"></script>

</body>
</html>
```

### index.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>College LMS</title>

  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>

<nav class="navbar">
  <div class="nav-left">
    <img src="assets/crr logo.jpg" alt="College Logo">
    <div class="site-name">VIDHYA VARADHI</div>
  </div>

  <button class="nav-toggle" id="navToggle" type="button" aria-label="Toggle navigation">
    &#9776;
  </button>

  <div class="nav-mobile-shell" id="navMobileShell">
    <div class="nav-search">
      <input type="text" placeholder="Search courses...">
      <button>Search</button>
    </div>

    <div class="nav-center">
      <div class="nav-item">Home</div>
      <div class="nav-item" onclick="window.location.href='courses.html'">Courses</div>
      <div class="nav-item" onclick="window.location.href='about.html'">About</div>
      <div class="nav-item" onclick="window.location.href='community.html'">Community</div>
    </div>

    <div class="nav-right">
      <a href="login.html"><button class="login-btn">Login</button></a>
      <a href="auth.html"><button class="signup-btn">Signup</button></a>
    </div>
  </div>
</nav>

<div class="nav-overlay" id="navOverlay"></div>

<section class="hero">
  <h1>Empowering Education Beyond Classrooms</h1>
  <p>
    A dedicated LMS platform inspired by NPTEL & SWAYAM - providing structured courses,
    certifications, assignments, and collaborative learning.
  </p>
  <div class="hero-preview">
    <div class="preview-float preview-dashboard">
      <span class="preview-label">Dashboard</span>
      <strong>2 enrolled courses</strong>
      <p>Track progress, assignments, and certificates in one view.</p>
    </div>
    <div class="preview-float preview-course">
      <span class="preview-label">Course Player</span>
      <strong>DevOps</strong>
      <div class="mini-progress"><span style="width:67%"></span></div>
      <p>Resume from Infrastructure as Code with Terraform.</p>
    </div>
    <div class="preview-float preview-achievement">
      <span class="preview-label">Certificate</span>
      <strong>Quantum Computing</strong>
      <p>Verified completion achievement unlocked.</p>
    </div>
  </div>
</section>

<section class="stats">
  <div class="stats-head">
    <span class="section-kicker">CRR LMS Features</span>
    <h2>Explore what public learners can access across the CR Reddy LMS experience</h2>
    <p>This section highlights the core public-facing strengths of the platform, from structured course discovery to guided academic workflows, learning support, and certificate-ready progress paths.</p>
  </div>
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon">A</div>
      <h2>Academic Course Access</h2>
      <p>Explore department-relevant and skill-based learning modules designed for structured academic progression.</p>
      <span class="stat-meta">Discover public course previews and guided learning pathways.</span>
      <a class="stat-link" href="courses.html">Explore Courses</a>
    </div>

    <div class="stat-card">
      <div class="stat-icon">Q</div>
      <h2>Assignments & Assessments</h2>
      <p>Submit coursework, attempt quizzes, and experience assessment-driven learning built around academic continuity.</p>
      <span class="stat-meta">See how structured evaluation supports student readiness.</span>
      <a class="stat-link" href="about.html">View Features</a>
    </div>

    <div class="stat-card">
      <div class="stat-icon">R</div>
      <h2>Learning Resources</h2>
      <p>Access organized notes, lesson materials, and guided study support aligned to real course modules and topics.</p>
      <span class="stat-meta">Browse the learning environment built for clarity and progression.</span>
      <a class="stat-link" href="courses.html">Browse Learning</a>
    </div>

    <div class="stat-card">
      <div class="stat-icon">V</div>
      <h2>Certificates & Progress</h2>
      <p>Track completion milestones, unlock achievements, and move toward verified academic outcomes with confidence.</p>
      <span class="stat-meta">Understand how the LMS supports visible learner achievement.</span>
      <a class="stat-link" href="about.html">See Benefits</a>
    </div>
  </div>
</section>

<section class="colleges">
  <div class="colleges-head">
    <span class="section-kicker">Academic Network</span>
    <div class="section-title">Trusted by connected colleges and university partners</div>
    <p>The platform supports a growing academic ecosystem where institutions can extend structured digital learning, certification, and learner progress with confidence.</p>
  </div>
  <div class="college-logos">
    <div class="college-card">
      <img src="assets/jntuk logo.png" alt="JNTUK">
      <strong>JNTUK</strong>
      <span>Academic delivery partner</span>
    </div>
    <div class="college-card">
      <img src="assets/jntuA logo.jpg" alt="JNTUA">
      <strong>JNTUA</strong>
      <span>Connected university ecosystem</span>
    </div>
    <div class="college-card">
      <img src="assets/jntuV logo.jpg" alt="JNTUV">
      <strong>JNTUV</strong>
      <span>Digital learning network partner</span>
    </div>
  </div>
  <p class="colleges-support">Supporting institution-aligned learning journeys, practical coursework, and certificate-ready academic workflows.</p>
</section>

<section class="landing-extension reveal">
  <div class="premium-split">
    <div class="split-copy">
      <div class="section-kicker">Product Preview</div>
      <h2>A Complete Learning Experience</h2>
      <p>
        Designed like a real academic platform, the LMS connects lessons, assessments,
        notes, projects, progress, and certificates into one continuous learning flow.
      </p>
      <ul class="split-points">
        <li>Structured lessons with module-based progression</li>
        <li>Progress tracking across courses and activities</li>
        <li>Assignments and quizzes linked to real course state</li>
        <li>Project-based learning with completion milestones</li>
      </ul>
    </div>
    <div class="split-visual">
      <div class="extension-card product-shell">
        <div class="shell-sidebar">
          <span class="shell-heading">Modules</span>
          <div class="shell-item active">Week 1 · Foundations</div>
          <div class="shell-item">Week 2 · Infrastructure</div>
          <div class="shell-item">Week 3 · Operations</div>
        </div>
        <div class="shell-main">
          <div class="shell-top">
            <strong>DevOps Learning Workspace</strong>
            <span class="player-status">67% Complete</span>
          </div>
          <div class="player-progress">
            <span style="width:67%"></span>
          </div>
          <div class="shell-lesson">
            <span class="preview-label">Active Lesson</span>
            <h3>Infrastructure as Code with Terraform</h3>
            <p>Learn module-driven deployment workflows with practical release structure.</p>
          </div>
          <div class="shell-bottom">
            <div class="content-panel">
              <strong>Assessment</strong>
              <p>1 quiz ready</p>
            </div>
            <div class="content-panel">
              <strong>Assignment</strong>
              <p>Pipeline design task pending</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="landing-extension reveal">
  <div class="section-title">Learning Journey</div>
  <div class="journey-flow">
    <div class="journey-step">
      <div class="journey-icon">01</div>
      <h3>Explore</h3>
      <p>Browse a clear catalog of structured LMS courses.</p>
    </div>
    <div class="journey-arrow">→</div>
    <div class="journey-step">
      <div class="journey-icon">02</div>
      <h3>Learn</h3>
      <p>Move through lessons, modules, notes, and player workflows.</p>
    </div>
    <div class="journey-arrow">→</div>
    <div class="journey-step">
      <div class="journey-icon">03</div>
      <h3>Practice</h3>
      <p>Complete quizzes, assignments, and project checkpoints.</p>
    </div>
    <div class="journey-arrow">→</div>
    <div class="journey-step">
      <div class="journey-icon">04</div>
      <h3>Achieve</h3>
      <p>Unlock certificates when course completion is fully earned.</p>
    </div>
  </div>
</section>

<section class="landing-extension reveal">
  <div class="premium-split reverse">
    <div class="split-visual">
      <div class="experience-stack">
        <div class="extension-card experience-panel quiz-panel">
          <span class="preview-label">Quiz Interface</span>
          <strong>4 Questions · 20 Marks</strong>
          <p>Attempt timed assessments and review results immediately.</p>
        </div>
        <div class="extension-card experience-panel assignment-panel">
          <span class="preview-label">Assignment Submission</span>
          <strong>Status: Submitted</strong>
          <p>Write responses, attach work, and track submission updates.</p>
        </div>
        <div class="experience-row">
          <div class="extension-card experience-mini">
            <span class="preview-label">Notes</span>
            <p>Module-wise study material</p>
          </div>
          <div class="extension-card experience-mini">
            <span class="preview-label">Project</span>
            <p>Workspace with deliverables</p>
          </div>
        </div>
      </div>
    </div>
    <div class="split-copy">
      <div class="section-kicker">Inside The Platform</div>
      <h2>Built for Real Learning</h2>
      <p>
        The LMS experience goes beyond static content. Students can move naturally between
        lessons, notes, assignments, quizzes, projects, progress tracking, and certificates
        without leaving the learning flow.
      </p>
      <ul class="split-points">
        <li>Quiz and exam attempts with immediate score review</li>
        <li>Assignment submission with realistic academic workflow</li>
        <li>Project workspace connected to actual course progress</li>
        <li>Notes and study material aligned to modules and lessons</li>
      </ul>
    </div>
  </div>
</section>

<section class="landing-extension reveal">
  <div class="premium-split">
    <div class="split-visual">
      <div class="extension-card certificate-stage">
        <div class="certificate-shell">
          <span class="certificate-label">Verified Achievement</span>
          <h4>Quantum Computing</h4>
          <p>Issued after successful course completion and learner milestone validation.</p>
          <div class="certificate-meta">
            <span>Student: Bharath A</span>
            <span>Issue Date: Mar 2026</span>
            <span>Status: Verified</span>
          </div>
        </div>
      </div>
    </div>
    <div class="split-copy">
      <div class="section-kicker">Recognition</div>
      <h2>Earn Recognition That Matters</h2>
      <p>
        Certificates are presented as real learning outcomes, not decorative badges. The LMS
        reflects achievement only after course progress and completion logic support it.
      </p>
      <a href="certificates.html" class="section-link-btn">View Student Certificates</a>
    </div>
  </div>
</section>

<section class="testimonials reveal">
  <div class="section-title">Testimonials</div>
  <div class="testimonial-grid">
    <div class="testimonial-card">
      <img src="assets/TESTIMONIAL PROFILE.jpg" alt="Student">
      <h3>Bharath</h3>
      <h4>Student</h4>
      <p>
        "Excellent learning platform with structured courses,
        assignments, and comprehensive content for skill development."
      </p>
      <div class="stars">★★★★★</div>
    </div>

    <div class="testimonial-card">
      <img src="assets/TESTIMONIAL PROFILE.jpg" alt="Student">
      <h3>Pavan</h3>
      <h4>Student</h4>
      <p>
        "Great experience with certified courses and hands-on
        projects that prepared me for industry challenges."
      </p>
      <div class="stars">★★★★★</div>
    </div>

    <div class="testimonial-card">
      <img src="assets/TESTIMONIAL PROFILE.jpg" alt="Student">
      <h3>Vijay</h3>
      <h4>Student</h4>
      <p>
        "Well-designed curriculum with expert guidance and
        interactive lessons made learning enjoyable."
      </p>
      <div class="stars">★★★★★</div>
    </div>
  </div>
</section>

<section class="landing-extension final-cta reveal">
  <div class="cta-shell">
    <h2>Start Your Learning Journey Today</h2>
    <p>Explore the LMS, sign in as a student, or create your learning account and begin with structured digital courses.</p>
    <div class="cta-actions">
      <a href="courses.html"><button class="login-btn">Explore Courses</button></a>
      <a href="login.html"><button class="signup-btn">Login</button></a>
      <a href="auth.html"><button class="login-btn">Get Started</button></a>
    </div>
  </div>
</section>

<footer>
  <div class="footer-grid">
    <div>
      <h4>Platform</h4>
      <p>About</p>
      <p>Courses</p>
      <p>Certifications</p>
    </div>

    <div>
      <h4>Community</h4>
      <p>Discussion Forums</p>
      <p>Student Groups</p>
      <p>Events</p>
    </div>

    <div>
      <h4>Support</h4>
      <p>Help Center</p>
      <p>Contact</p>
      <p>Feedback</p>
    </div>
  </div>

  <div class="copyright">
    &copy; 2026 College LMS Platform • All Rights Reserved
  </div>
</footer>

<script src="js/script.js"></script>

</body>
</html>
```

### js\assignments.js

`$lang
document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  LMSDemo.getSessionStudent();

  var params = new URLSearchParams(window.location.search);
  var firstEnrolledCourse = LMSDemo.getEnrolledCourses()[0];
  var courseId = params.get("course") || (firstEnrolledCourse && firstEnrolledCourse.id);
  if (!courseId) {
    renderNoEnrollmentState();
    return;
  }
  var assignments = LMSDemo.getAssignments(courseId);
  var course = LMSDemo.getCourseView(courseId);

  updateNavigation(courseId);
  renderSidebar(assignments, course);
  loadAssignment(assignments[0] || null, course);
});

var currentAssignment = null;
var currentCourse = null;

function renderNoEnrollmentState() {
  var sidebar = document.querySelector(".week-sidebar");
  var weekTitle = document.getElementById("weekTitle");
  var assignmentForm = document.getElementById("assignmentForm");
  var submissionMessage = document.getElementById("submissionMessage");

  if (sidebar) {
    sidebar.innerHTML = "<h3>Assignments</h3><ul><li class='active'><strong>No courses enrolled</strong><span>Enroll to unlock course assignments</span></li></ul>";
  }

  if (weekTitle) {
    weekTitle.innerText = "No assignments yet";
  }

  if (assignmentForm) {
    assignmentForm.style.display = "block";
    assignmentForm.innerHTML = "<div class='assignment-meta'><p>Your assignment workspace is empty because you have not enrolled in a course yet.</p><p><a href='courses.html' style='color:#2563eb;font-weight:600;text-decoration:none;'>Browse available courses</a></p></div>";
  }

  if (submissionMessage) {
    submissionMessage.style.display = "none";
  }
}

function updateNavigation(courseId) {
  var projectLink = document.querySelector('a[href^="project.html"]');
  var notesLink = document.querySelector('a[href^="notes.html"]');
  if (projectLink) projectLink.href = "project.html?course=" + courseId;
  if (notesLink) notesLink.href = "notes.html?course=" + courseId;
}

function renderSidebar(assignments, course) {
  var sidebar = document.querySelector(".week-sidebar");
  if (!sidebar || !course) return;

  sidebar.innerHTML = "<h3>" + course.title + " Assignments</h3><ul></ul>";
  var list = sidebar.querySelector("ul");

  assignments.forEach(function (assignment, index) {
    var li = document.createElement("li");
    li.className = index === 0 ? "active" : "";
    li.innerHTML = "<strong>" + assignment.title + "</strong><span>" + (assignment.submitted ? "Submitted" : assignment.statusLabel) + "</span>";
    li.onclick = function () {
      document.querySelectorAll(".week-sidebar li").forEach(function (item) {
        item.classList.remove("active");
      });
      li.classList.add("active");
      loadAssignment(assignment, course);
    };
    list.appendChild(li);
  });
}

function loadAssignment(assignment, course) {
  currentAssignment = assignment;
  currentCourse = course;

  var assignmentForm = document.getElementById("assignmentForm");
  var submissionMessage = document.getElementById("submissionMessage");
  var weekTitle = document.getElementById("weekTitle");
  if (!assignmentForm || !weekTitle || !course) return;

  submissionMessage.style.display = "none";

  if (!assignment) {
    weekTitle.innerText = course.title + " - No assignments available";
    assignmentForm.innerHTML = "<div class='assignment-meta'><p>No active assignment is linked to this course right now.</p></div>";
    return;
  }

  weekTitle.innerText = assignment.title;
  assignmentForm.style.display = "block";
  assignmentForm.innerHTML = "";

  assignmentForm.innerHTML += "<div class='assignment-meta'>" +
    "<p><strong>Course:</strong> " + assignment.courseTitle + "</p>" +
    "<p><strong>Module:</strong> " + assignment.moduleTitle + "</p>" +
    "<p><strong>Due Date:</strong> " + assignment.dueDate + "</p>" +
    "<p><strong>Status:</strong> " + (assignment.submitted ? "Submitted" : "Pending") + "</p>" +
    (assignment.referencePath ? "<p><strong>Reference:</strong> <a href='" + assignment.referencePath + "' target='_blank' rel='noopener' style='color:#2563eb;font-weight:600;text-decoration:none;'>" + (assignment.referenceName || "Open reference file") + "</a></p>" : "") +
    "</div>";

  assignmentForm.innerHTML += "<div class='question-block'><h4>Instructions</h4><p>" + assignment.instructions + "</p><ul class='detail-list'>" +
    assignment.deliverables.map(function (item) { return "<li>" + item + "</li>"; }).join("") +
    "</ul></div>";

  assignment.questions.forEach(function (question, index) {
    var block = document.createElement("div");
    block.className = "question-block";
    block.innerHTML = "<h4>" + (index + 1) + ". " + question.question + "</h4>";

    if (question.type === "mcq") {
      question.options.forEach(function (option) {
        var label = document.createElement("label");
        var checked = assignment.answers && assignment.answers[question.id] === option ? "checked" : "";
        label.innerHTML = '<input type="radio" name="' + question.id + '" value="' + option + '" ' + checked + '> ' + option;
        block.appendChild(label);
      });
    } else {
      var textarea = document.createElement("textarea");
      textarea.name = question.id;
      textarea.rows = 5;
      textarea.placeholder = "Write your academic response here...";
      textarea.value = assignment.answers && assignment.answers[question.id] ? assignment.answers[question.id] : "";
      block.appendChild(textarea);
    }

    assignmentForm.appendChild(block);
  });

  assignmentForm.innerHTML += "<div class='question-block'><h4>Submission Notes</h4><textarea id='assignmentResponse' rows='6' placeholder='Summarize your final response, assumptions, or references used...'>" +
    (assignment.responseText || "") +
    "</textarea><div class='upload-placeholder'><span>Attachment</span><input id='attachmentName' type='text' placeholder='Enter file name for demo upload' value='" +
    (assignment.attachmentName || "") +
    "'></div></div>";

  if (assignment.submitted) {
    assignmentForm.innerHTML += "<div class='question-block feedback-card'><h4>Faculty Review</h4><p><strong>Submitted:</strong> " + (assignment.submittedAt || "Recently") + "</p><p><strong>Marks:</strong> " + (assignment.marks || "Awaiting evaluation") + "</p><p><strong>Feedback:</strong> " + (assignment.feedback || assignment.feedbackPlaceholder) + "</p></div>";
  }

  var actions = document.createElement("div");
  actions.className = "form-actions";
  actions.innerHTML = "<button type='button' class='submit-btn' " + (assignment.submitted ? "disabled" : "") + ">" + (assignment.submitted ? "Submitted" : "Submit Assignment") + "</button>";
  actions.querySelector("button").onclick = submitAssignment;
  assignmentForm.appendChild(actions);
}

function submitAssignment() {
  if (!currentAssignment || !currentCourse) return;

  var answers = {};
  currentAssignment.questions.forEach(function (question) {
    if (question.type === "mcq") {
      var selected = document.querySelector('input[name="' + question.id + '"]:checked');
      answers[question.id] = selected ? selected.value : "";
    } else {
      var textField = document.querySelector('[name="' + question.id + '"]');
      answers[question.id] = textField ? textField.value.trim() : "";
    }
  });

  var responseField = document.getElementById("assignmentResponse");
  var attachmentField = document.getElementById("attachmentName");
  var responseText = responseField ? responseField.value.trim() : "";
  var attachmentName = attachmentField ? attachmentField.value.trim() : "";

  var updated = LMSDemo.submitAssignment(currentAssignment.id, {
    responseText: responseText,
    answers: answers,
    attachmentName: attachmentName
  });

  var submissionMessage = document.getElementById("submissionMessage");
  if (submissionMessage) {
    submissionMessage.style.display = "block";
    submissionMessage.innerHTML = "<strong>Status Updated:</strong> " + updated.title + " is now submitted for " + updated.courseTitle + ". Faculty review and marks will appear here once evaluated.";
  }

  var refreshedAssignments = LMSDemo.getAssignments(currentCourse.id);
  renderSidebar(refreshedAssignments, currentCourse);
  var active = refreshedAssignments.find(function (assignment) {
    return assignment.id === currentAssignment.id;
  });
  loadAssignment(active, currentCourse);
}
```

### js\auth.js

`$lang
var AUTH_STORAGE_KEY = "lms_registered_users_v1";
var DEMO_EMAIL = "student@gmail.com";
var DEMO_PASSWORD = "pass1234";

async function loginUser() {
  var email = document.querySelector("#loginForm input[type='email']").value.trim().toLowerCase();
  var password = document.querySelector("#loginForm input[type='password']").value;

  if (!email || !password) {
    alert("Enter both email and password.");
    return;
  }

  try {
    var remote = await loginViaApi(email, password);
    if (remote) {
      persistSession(remote.user, remote.token);
      redirectAfterLogin(remote.user);
      return;
    }
  } catch (error) {
    // Fall back to local demo/static auth when the backend is unavailable.
  }

  var localUser = authenticateLocalUser(email, password);
  if (!localUser) {
    alert("Invalid email or password.");
    return;
  }

  persistSession(localUser, "demo-local-session");
  redirectAfterLogin(localUser);
}

async function registerUser() {
  var name = document.querySelector("#signupName").value.trim();
  var email = document.querySelector("#signupEmail").value.trim().toLowerCase();
  var password = document.querySelector("#signupPassword").value;

  if (!name || !email || !password) {
    alert("Fill in all signup fields.");
    return;
  }

  if (email === DEMO_EMAIL) {
    alert("This email is reserved for the demo student. Please use another email.");
    return;
  }

  try {
    var remote = await registerViaApi(name, email, password);
    if (remote) {
      persistSession(remote.user, remote.token);
      redirectAfterLogin(remote.user);
      return;
    }
  } catch (error) {
    // Fall back to local registration for static/demo deployments.
  }

  var users = loadLocalUsers();
  var alreadyExists = users.some(function (user) {
    return String(user.email || "").toLowerCase() === email;
  });

  if (alreadyExists) {
    alert("An account with this email already exists.");
    return;
  }

  var newUser = {
    id: "local-" + Date.now(),
    name: name,
    email: email,
    password: password,
    role: "student",
    phone: "",
    registerNo: "VV" + String(Date.now()).slice(-8),
    department: "Student",
    institution: "Vidhya Vaaradhi LMS",
    semester: "Semester 1",
    joinedOn: new Date().toISOString().split("T")[0],
    image: "assets/TESTIMONIAL PROFILE.jpg"
  };

  users.push(newUser);
  saveLocalUsers(users);
  persistSession(stripPassword(newUser), "local-signup-session");
  window.location.href = "student.html";
}

async function loginViaApi(email, password) {
  var res = await fetch(buildApiUrl("/api/auth/login"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });

  if (!res.ok) {
    var errorData = await safeJson(res);
    throw new Error((errorData && errorData.error) || "Login failed");
  }

  return safeJson(res);
}

async function registerViaApi(name, email, password) {
  var res = await fetch(buildApiUrl("/api/auth/register"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  });

  if (!res.ok) {
    var errorData = await safeJson(res);
    throw new Error((errorData && errorData.error) || "Registration failed");
  }

  return safeJson(res);
}

function authenticateLocalUser(email, password) {
  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    return {
      id: 101,
      name: "Bharath A",
      email: DEMO_EMAIL,
      role: "student",
      phone: "+91 98765 43210",
      registerNo: "21VVCS1012",
      department: "CSE",
      institution: "Vidhya Vaaradhi Institute of Technology",
      semester: "Semester 6",
      joinedOn: "2025-08-12",
      image: "assets/TESTIMONIAL PROFILE.jpg"
    };
  }

  var localUser = loadLocalUsers().find(function (user) {
    return String(user.email || "").toLowerCase() === email && user.password === password;
  });

  return localUser ? stripPassword(localUser) : null;
}

function persistSession(user, token) {
  var cleanUser = stripPassword(user);
  localStorage.setItem("token", token || "");
  localStorage.setItem("currentUser", JSON.stringify(cleanUser));
  localStorage.setItem("user", JSON.stringify(cleanUser));
}

function redirectAfterLogin(user) {
  if (user.role === "admin") {
    window.location.href = "admin/dashboard.html";
    return;
  }

  window.location.href = "student.html";
}

function loadLocalUsers() {
  try {
    var users = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "[]");
    return Array.isArray(users) ? users : [];
  } catch (error) {
    return [];
  }
}

function saveLocalUsers(users) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(users));
}

function stripPassword(user) {
  if (!user) return null;
  var cleanUser = {};
  Object.keys(user).forEach(function (key) {
    if (key !== "password") {
      cleanUser[key] = user[key];
    }
  });
  return cleanUser;
}

function buildApiUrl(path) {
  return path;
}

async function safeJson(response) {
  try {
    return await response.json();
  } catch (error) {
    return null;
  }
}
```

### js\certificates.js

`$lang
var modal = document.getElementById("certModal");
var preview = document.getElementById("certPreview");
var certGrid = document.getElementById("certGrid");

function viewCert(src, card) {
  if (card) {
    card.classList.toggle("expanded");
    return;
  }

  modal.style.display = "flex";
  preview.src = src;
  var modalDownload = document.getElementById("modalDownload");
  if (modalDownload) {
    modalDownload.href = src;
  }
}

function closeCert() {
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo || !certGrid) return;

  LMSDemo.getSessionStudent();
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
```

### js\course-details.js

`$lang
document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  var authState = getAuthState();

  var params = new URLSearchParams(window.location.search);
  var courseId = params.get("course") || "devops";
  var course = getCourseForViewer(courseId, authState);

  if (!course) return;

  document.title = course.title + " - Vaaradhi LMS";

  setText(".breadcrumb", "Home > Explore Courses > " + course.title);
  setText(".course-hero h1", course.title);
  setText(".hero-desc", course.description);

  var heroImage = document.querySelector(".hero-image img");
  if (heroImage) {
    heroImage.src = course.bannerImage || course.image;
    heroImage.alt = course.title;
  }

  var heroTags = document.querySelector(".hero-tags");
  if (heroTags) {
    heroTags.innerHTML = `
      <span>${course.rating} Rating</span>
      <span>${course.learners}+ Learners</span>
      <span>${course.durationWeeks} Weeks</span>
      <span>${course.mode}</span>
      <span>${getHeroStatusLabel(course, authState)}</span>
    `;
  }

  renderHighlights(course);
  renderAbout(course);
  renderSyllabus(course);
  renderInstructor(course);
  renderEnrollCard(course, authState);
});

function getAuthState() {
  var currentUser = null;
  var token = localStorage.getItem("token") || "";

  try {
    currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
  } catch (error) {
    currentUser = null;
  }

  return {
    currentUser: currentUser,
    isLoggedIn: !!(token && currentUser && (currentUser.email || currentUser.id || currentUser.name)),
    isStudent: !!(currentUser && (!currentUser.role || currentUser.role === "student"))
  };
}

function getCourseForViewer(courseId, authState) {
  if (authState.isLoggedIn && authState.isStudent) {
    return LMSDemo.getCourseView(courseId);
  }

  return LMSDemo.getCourses().find(function (course) {
    return course.id === courseId;
  }) || null;
}

function getHeroStatusLabel(course, authState) {
  if (!authState.isLoggedIn || !authState.isStudent) {
    return "Preview Access";
  }

  if (course.isEnrolled) {
    return course.status === "completed" ? "Completed" : "Already Enrolled";
  }

  return "Enrollment Open";
}

function setText(selector, value) {
  var element = document.querySelector(selector);
  if (element) element.innerText = value;
}

function renderHighlights(course) {
  var grid = document.querySelector(".highlight-grid");
  if (!grid) return;

  grid.innerHTML = "";
  course.highlights.forEach(function (item) {
    var div = document.createElement("div");
    div.innerText = "Included: " + item;
    grid.appendChild(div);
  });
}

function renderAbout(course) {
  var aboutCard = document.querySelectorAll(".info-card")[1];
  if (!aboutCard) return;

  aboutCard.innerHTML = `
    <h2>About This Course</h2>
    <p>${course.description}</p>
    <p style="margin-top:12px;">
      Instructor ${course.instructor} guides this ${course.difficulty.toLowerCase()} path with a practical,
      module-based structure that supports learning continuity, weekly assessment, and certificate readiness.
    </p>
  `;
}

function renderSyllabus(course) {
  var syllabusList = document.querySelector(".syllabus-list");
  if (!syllabusList) return;

  syllabusList.innerHTML = "";
  course.modules.forEach(function (module, index) {
    var item = document.createElement("li");
    item.innerText =
      "Week " +
      (index + 1) +
      ": " +
      module.title +
      " | " +
      module.lessons.length +
      " lessons";
    syllabusList.appendChild(item);
  });
}

function renderInstructor(course) {
  var instructorCard = document.querySelectorAll(".info-card")[3];
  if (!instructorCard) return;

  instructorCard.innerHTML = `
    <h2>Instructor</h2>
    <div class="instructor-box">
      <div class="instructor-photo"></div>
      <div>
        <h4>${course.instructor}</h4>
        <p>
          ${course.instructorTitle} leading ${course.category.toLowerCase()} delivery with real implementation context,
          learner checkpoints, and completion-focused mentoring.
        </p>
      </div>
    </div>
  `;
}

function renderEnrollCard(course, authState) {
  var rows = document.querySelectorAll(".detail-row");
  var values = [
    course.durationWeeks + " Weeks",
    course.mode,
    course.language,
    course.difficulty,
    course.startDate,
    !authState.isLoggedIn || !authState.isStudent
      ? "Available After Login"
      : course.isEnrolled
        ? (course.status === "completed" ? "Unlocked" : "On Completion")
        : "Available After Enrollment"
  ];

  rows.forEach(function (row, index) {
    var spans = row.querySelectorAll("span");
    if (spans[1] && values[index]) {
      spans[1].innerText = values[index];
    }
  });

  var enrollButton = document.querySelector(".enroll-btn");
  var secondaryButton = document.querySelector(".secondary-btn");

  if (enrollButton) {
    enrollButton.innerText = !authState.isLoggedIn || !authState.isStudent
      ? "Get Started"
      : course.isEnrolled
        ? (course.status === "completed" ? "Completed" : "Continue")
        : "Enroll";
    enrollButton.onclick = function () {
      if (!authState.isLoggedIn || !authState.isStudent) {
        window.location.href = "auth.html";
      } else if (course.isEnrolled) {
        window.location.href = "course-player.html?course=" + course.id;
      } else {
        LMSDemo.enrollInCourse(course.id);
        window.location.href = "my-courses.html";
      }
    };
  }

  if (secondaryButton) {
    secondaryButton.innerText = !authState.isLoggedIn || !authState.isStudent
      ? "View Syllabus"
      : course.isEnrolled
        ? (course.status === "completed" ? "View Certificate" : "Open Learning Tools")
        : "View Syllabus";
    secondaryButton.onclick = function () {
      if (!authState.isLoggedIn || !authState.isStudent || !course.isEnrolled) {
        var syllabusSection = document.querySelector(".syllabus-list");
        if (syllabusSection) {
          syllabusSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
      }

      window.location.href =
        course.status === "completed"
          ? "certificates.html?course=" + course.id
          : "course-player.html?course=" + course.id;
    };
  }
}
```

### js\course-player.js

`$lang
var playerState = {
  course: null,
  selectedLessonId: null,
  activeTab: "overview"
};

document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  LMSDemo.getSessionStudent();

  var params = new URLSearchParams(window.location.search);
  var firstEnrolledCourse = LMSDemo.getEnrolledCourses()[0];
  var courseId = params.get("course") || (firstEnrolledCourse && firstEnrolledCourse.id);
  if (!courseId) {
    window.location.href = "courses.html";
    return;
  }
  var course = LMSDemo.getCourseView(courseId);
  if (!course) return;
  if (!course.isEnrolled) {
    window.location.href = "course-details.html?course=" + courseId;
    return;
  }

  playerState.course = course;
  playerState.selectedLessonId = (course.lastAccessedLesson && course.lastAccessedLesson.id) || course.nextLesson.id;

  bindTabs();
  refreshPlayer();
});

function refreshPlayer() {
  playerState.course = LMSDemo.getCourseView(playerState.course.id);
  renderCourseSummary();
  renderCurriculum();
  renderSelectedLesson();
  renderCompleteCourseButton();
}

function renderCourseSummary() {
  var summaryPanel = document.getElementById("courseSummaryPanel");
  if (!summaryPanel || !playerState.course) return;

  var course = playerState.course;
  var certificateNote = course.status === "completed"
    ? "Certificate unlocked and ready from your certificates page."
    : "Certificate unlocks automatically after all lessons are completed.";
  var currentLesson = LMSDemo.getLessonById(course.id, playerState.selectedLessonId);

  summaryPanel.innerHTML = `
    <div class="summary-copy">
      <span class="summary-badge">${course.status === "completed" ? "Completed" : "In Progress"}</span>
      <h1>${course.title}</h1>
      <p>${course.subtitle}</p>
      <div class="summary-progress">
        <div class="summary-progress-fill" style="width:${course.progress}%"></div>
      </div>
      <small>${course.progress}% complete | ${course.completedLessons}/${course.totalLessons} lessons completed</small>
    </div>
    <div class="summary-metrics">
      <div class="summary-metric">
        <strong>Current lesson</strong>
        <span>${currentLesson ? currentLesson.title : "Select a lesson"}</span>
      </div>
      <div class="summary-metric">
        <strong>Next lesson</strong>
        <span>${course.nextLesson.title}</span>
      </div>
      <div class="summary-metric">
        <strong>Assignments</strong>
        <span>${course.submittedAssignments}/${course.assignments.length} submitted</span>
      </div>
      <div class="summary-metric">
        <strong>Quiz progress</strong>
        <span>${course.completedQuizzes}/${course.quizzes.length} completed</span>
      </div>
      <div class="summary-metric">
        <strong>Certificate</strong>
        <span>${certificateNote}</span>
      </div>
    </div>
  `;
}

function renderCurriculum() {
  var curriculum = document.querySelector(".curriculum");
  if (!curriculum || !playerState.course) return;
  var completedLessonIds = LMSDemo.getCompletedLessonIds(playerState.course.id);

  curriculum.innerHTML = "<h3>" + playerState.course.title + " Curriculum</h3>";

  playerState.course.modules.forEach(function (module) {
    var div = document.createElement("div");
    div.className = "module";
    div.innerHTML =
      "<h4>Week " + module.position + " - " + module.title + " <span class=\"module-count\">" + module.lessons.length + " lessons</span></h4>";

    var ul = document.createElement("ul");
    module.lessons.forEach(function (lesson) {
      var lessonItem = document.createElement("li");
      var isCompleted = completedLessonIds.indexOf(lesson.id) >= 0;
      lessonItem.className = "lesson" + (lesson.id === playerState.selectedLessonId ? " active" : "");
      lessonItem.innerHTML =
        "<span>" + lesson.title + "</span><small>" + (isCompleted ? "Completed" : lesson.duration) + "</small>";

      lessonItem.onclick = function () {
        playerState.selectedLessonId = lesson.id;
        LMSDemo.setLastAccessed(playerState.course.id, lesson.id);
        refreshPlayer();
      };
      ul.appendChild(lessonItem);
    });

    div.appendChild(ul);
    curriculum.appendChild(div);
  });

  var toolsDiv = document.createElement("div");
  toolsDiv.className = "sidebar-tools";
  toolsDiv.innerHTML = `
    <button class="tool-btn" onclick="window.location.href='assignments.html?course=${playerState.course.id}'">Assignments</button>
    <button class="tool-btn" onclick="window.location.href='quiz.html?course=${playerState.course.id}'">Quizzes</button>
    <button class="tool-btn" onclick="window.location.href='project.html?course=${playerState.course.id}'">Project</button>
    <button class="tool-btn" onclick="window.location.href='notes.html?course=${playerState.course.id}'">Notes</button>
    <button class="tool-btn" onclick="window.location.href='certificates.html?course=${playerState.course.id}'">Certificates</button>
  `;
  curriculum.appendChild(toolsDiv);
}

function getLessonContext(course, lesson) {
  return {
    overview:
      lesson.description ||
      lesson.content ||
      (lesson.title +
        " builds practical understanding within " +
        lesson.moduleTitle +
        " and contributes directly to the " +
        course.title +
        " completion path."),
    objectives: [
      "Understand the core concepts behind " + lesson.title.toLowerCase(),
      "Connect the topic to your " + course.category.toLowerCase() + " workflow",
      "Prepare for the next lesson and related assessment checkpoints"
    ],
    resources: [
      lesson.moduleTitle + " recap sheet",
      course.title + " implementation checklist",
      "Faculty notes for " + lesson.title
    ],
    discussion:
      "How would you apply " +
      lesson.title +
      " within a realistic " +
      course.title +
      " project or academic deliverable?"
  };
}

function renderSelectedLesson() {
  var lesson = LMSDemo.getLessonById(playerState.course.id, playerState.selectedLessonId);
  var course = LMSDemo.getCourseView(playerState.course.id);
  if (!lesson || !course) return;

  var lessonTitle = document.getElementById("lessonTitle");
  var videoPlayer = document.getElementById("videoPlayer");
  var lessonMediaShell = document.getElementById("lessonMediaShell");
  var lessonMediaImage = document.getElementById("lessonMediaImage");
  var mediaBadge = document.getElementById("mediaBadge");
  var mediaMeta = document.getElementById("mediaMeta");
  var playerMeta = document.getElementById("playerMeta");
  var lessonControls = document.getElementById("lessonControls");
  var tabContent = document.getElementById("tabContent");
  var allLessons = course.modules.flatMap(function (module) {
    return module.lessons;
  });
  var currentIndex = allLessons.findIndex(function (item) {
    return item.id === lesson.id;
  });
  var lessonContext = getLessonContext(course, lesson);
  var completedLessons = LMSDemo.getCompletedLessonIds(course.id);
  var activeModule = course.modules.find(function (module) {
    return module.id === lesson.moduleId;
  });
  var moduleLessonIds = activeModule
    ? activeModule.lessons.map(function (item) { return item.id; })
    : [];
  var completedInModule = moduleLessonIds.filter(function (lessonId) {
    return completedLessons.indexOf(lessonId) >= 0;
  }).length;
  var currentCompleted = completedLessons.indexOf(lesson.id) >= 0;

  if (lessonTitle) {
    lessonTitle.innerText = lesson.title;
  }

  updateLessonMedia(course, lesson, {
    player: videoPlayer,
    shell: lessonMediaShell,
    image: lessonMediaImage,
    badge: mediaBadge,
    meta: mediaMeta
  });

  if (playerMeta) {
    playerMeta.innerHTML = `
      <div class="meta-card">
        <strong>${course.title}</strong>
        <span>${course.progress}% complete</span>
      </div>
      <div class="meta-card">
        <strong>Current Module</strong>
        <span>${lesson.moduleTitle}</span>
      </div>
      <div class="meta-card">
        <strong>Lesson Duration</strong>
        <span>${lesson.duration}</span>
      </div>
      <div class="meta-card">
        <strong>Lesson Status</strong>
        <span>${currentCompleted ? "Completed" : "Pending completion"}</span>
      </div>
      <div class="meta-card">
        <strong>Module Progress</strong>
        <span>${completedInModule}/${moduleLessonIds.length} lessons complete</span>
      </div>
      <div class="meta-card">
        <strong>Path Position</strong>
        <span>Lesson ${currentIndex + 1} of ${allLessons.length}</span>
      </div>
      <div class="meta-card">
        <strong>Next Up</strong>
        <span>${course.nextLesson.title}</span>
      </div>
    `;
  }

  if (lessonControls) {
    lessonControls.innerHTML = `
      <button class="tool-btn" ${currentIndex <= 0 ? "disabled" : ""} onclick="moveLesson(-1)">Previous Lesson</button>
      <button class="tool-btn" onclick="completeCurrentLesson()">${currentCompleted ? "Completed" : "Mark Lesson Complete"}</button>
      <button class="tool-btn" ${currentIndex >= allLessons.length - 1 ? "disabled" : ""} onclick="moveLesson(1)">Next Lesson</button>
    `;
  }

  if (!tabContent) return;

  if (playerState.activeTab === "overview") {
    tabContent.innerHTML = `
      <div class="lesson-panel">
        <h3>Lesson Summary</h3>
        <p>${lessonContext.overview}</p>
      </div>
      <div class="lesson-panel">
        <h3>Learning Objectives</h3>
        <ul class="lesson-list">
          ${lessonContext.objectives.map(function (objective) { return "<li>" + objective + "</li>"; }).join("")}
        </ul>
      </div>
    `;
  } else if (playerState.activeTab === "resources") {
    tabContent.innerHTML = `
      <div class="lesson-panel">
        <h3>Lesson Resources</h3>
        <ul class="lesson-list">
          ${lessonContext.resources.map(function (resource) { return "<li>" + resource + "</li>"; }).join("")}
        </ul>
        ${lesson.resourcePath ? "<p><a href='" + lesson.resourcePath + "' target='_blank' rel='noopener' style='color:#2563eb;font-weight:600;text-decoration:none;'>Open uploaded lesson resource</a></p>" : ""}
      </div>
    `;
  } else if (playerState.activeTab === "discussion") {
    tabContent.innerHTML = `
      <div class="lesson-panel">
        <h3>Discussion Prompt</h3>
        <p>${lessonContext.discussion}</p>
      </div>
    `;
  } else if (playerState.activeTab === "assignments") {
    var assignments = LMSDemo.getAssignments(playerState.course.id);
    var quizzes = LMSDemo.getQuizzes(playerState.course.id);
    tabContent.innerHTML = assignments.length
      ? `
        <div class="lesson-panel">
          <h3>Assignments and Checkpoints</h3>
          ${assignments.map(function (assignment) {
            return "<p><strong>" + assignment.title + "</strong> | " + (assignment.submitted ? "Submitted" : assignment.statusLabel) + "</p>";
          }).join("")}
          ${quizzes.length ? "<p><strong>Quiz status:</strong> " + quizzes.map(function (quiz) { return quiz.title + " - " + quiz.status; }).join(", ") + "</p>" : ""}
        </div>
      `
      : "<div class=\"lesson-panel\"><h3>Assignments</h3><p>No assignments linked to this lesson yet.</p>" + (quizzes.length ? "<p><strong>Quiz status:</strong> " + quizzes.map(function (quiz) { return quiz.title + " - " + quiz.status; }).join(", ") + "</p>" : "") + "</div>";
  }
}

function updateLessonMedia(course, lesson, mediaNodes) {
  if (!mediaNodes || !mediaNodes.player || !mediaNodes.shell || !mediaNodes.image) return;

  var player = mediaNodes.player;
  var shell = mediaNodes.shell;
  var image = mediaNodes.image;
  var badge = mediaNodes.badge;
  var meta = mediaNodes.meta;
  var poster = lesson.image || course.image;
  var videoSrc = lesson.video || lesson.videoSrc || course.video || course.videoSrc || "";

  player.pause();
  player.removeAttribute("src");
  player.poster = poster;
  image.src = poster;
  image.alt = lesson.title;

  shell.classList.remove("video-active");
  shell.classList.add("image-active");

  if (badge) {
    badge.innerText = videoSrc ? "Lesson Video" : "Lesson Preview";
  }

  if (meta) {
    meta.innerText = videoSrc
      ? "Local MP4 playback available"
      : "Image preview shown for this lesson";
  }

  player.onerror = function () {
    shell.classList.remove("video-active");
    shell.classList.add("image-active");
    if (meta) {
      meta.innerText = "Video unavailable, showing lesson preview";
    }
  };

  player.onloadeddata = function () {
    shell.classList.remove("image-active");
    shell.classList.add("video-active");
    if (meta) {
      meta.innerText = "Local MP4 ready to play";
    }
  };

  if (videoSrc) {
    player.src = videoSrc;
  }

  player.load();
}

function moveLesson(direction) {
  var latestCourseView = LMSDemo.getCourseView(playerState.course.id);
  var allLessons = latestCourseView.modules.flatMap(function (module) {
    return module.lessons;
  });
  var currentIndex = allLessons.findIndex(function (item) {
    return item.id === playerState.selectedLessonId;
  });
  var nextLesson = allLessons[currentIndex + direction];
  if (!nextLesson) return;

  playerState.selectedLessonId = nextLesson.id;
  LMSDemo.setLastAccessed(playerState.course.id, nextLesson.id);
  refreshPlayer();
}

function completeCurrentLesson() {
  if (!playerState.course || !playerState.selectedLessonId) return;

  var beforeProgress = playerState.course.progress;
  playerState.course = LMSDemo.markLessonComplete(playerState.course.id, playerState.selectedLessonId);
  var afterProgress = playerState.course.progress;

  if (beforeProgress < 100 && afterProgress >= 100) {
    alert("Course completed. Your certificate is now unlocked on the certificates page.");
  } else if (afterProgress === beforeProgress) {
    alert("This lesson is already marked complete.");
  } else {
    alert("Lesson marked complete. Progress is now " + afterProgress + "%.");
  }

  refreshPlayer();
}

function completeEntireCourse() {
  if (!playerState.course) return;

  var beforeProgress = playerState.course.progress;
  playerState.course = LMSDemo.markCourseComplete(playerState.course.id, playerState.selectedLessonId);

  if (!playerState.course) return;

  if (beforeProgress >= 100) {
    alert("This course is already marked complete.");
  } else {
    alert("All lessons marked complete. Your certificate is now unlocked on the certificates page.");
  }

  refreshPlayer();
}

function renderCompleteCourseButton() {
  var completeButton = document.getElementById("completeCourseBtn");
  if (!completeButton || !playerState.course) return;

  if (playerState.course.progress >= 100) {
    completeButton.innerText = "Course Completed";
    completeButton.disabled = true;
  } else {
    completeButton.innerText = "Mark Course as Completed";
    completeButton.disabled = false;
  }
}

function bindTabs() {
  var tabs = document.querySelectorAll(".tab");
  if (!tabs.length) return;

  tabs.forEach(function (tab) {
    tab.onclick = function () {
      tabs.forEach(function (button) {
        button.classList.remove("active");
      });
      tab.classList.add("active");
      playerState.activeTab = tab.dataset.tab;
      renderSelectedLesson();
    };
  });
}
```

### js\courses.js

`$lang
var currentTab = "catalog";
var currentPage = 1;
var perPage = 4;

document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  var authState = getAuthState();
  configureCatalogTabs(authState.isLoggedIn);

  document.querySelectorAll(".tab").forEach(function (button) {
    button.onclick = function () {
      if (!authState.isLoggedIn && button.dataset.tab === "enrolled") {
        currentTab = "catalog";
        return;
      }
      document.querySelectorAll(".tab").forEach(function (tab) {
        tab.classList.remove("active");
      });
      button.classList.add("active");
      currentTab = button.dataset.tab;
      currentPage = 1;
      render();
    };
  });

  var searchInput = document.getElementById("searchInput");
  var modeFilter = document.getElementById("modeFilter");
  var durationFilter = document.getElementById("durationFilter");
  var languageFilter = document.getElementById("languageFilter");

  if (searchInput) searchInput.oninput = render;
  if (modeFilter) modeFilter.onchange = render;
  if (durationFilter) durationFilter.onchange = render;
  if (languageFilter) languageFilter.onchange = render;

  render();
});

function getAuthState() {
  var currentUser = null;
  var token = localStorage.getItem("token") || "";

  try {
    currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
  } catch (error) {
    currentUser = null;
  }

  return {
    currentUser: currentUser,
    isLoggedIn: !!(token && currentUser && (currentUser.email || currentUser.id || currentUser.name)),
    isStudent: !!(currentUser && (!currentUser.role || currentUser.role === "student"))
  };
}

function configureCatalogTabs(isLoggedIn) {
  var enrolledTab = document.querySelector('.tab[data-tab="enrolled"]');
  if (!enrolledTab) return;

  if (!isLoggedIn) {
    enrolledTab.style.display = "none";
    enrolledTab.classList.remove("active");
    currentTab = "catalog";
    var catalogTab = document.querySelector('.tab[data-tab="catalog"]');
    if (catalogTab) {
      catalogTab.classList.add("active");
    }
    return;
  }

  enrolledTab.style.display = "";
}

function getCatalogCourses() {
  var authState = getAuthState();

  if (!authState.isLoggedIn || !authState.isStudent) {
    return LMSDemo.getCourses().map(function (course) {
      return Object.assign({}, course, {
        isEnrolled: false,
        progress: 0,
        completedLessons: 0,
        totalLessons: (course.modules || []).reduce(function (count, module) {
          return count + ((module.lessons || []).length || 0);
        }, 0),
        status: "public-preview"
      });
    });
  }

  return LMSDemo.getCourses().map(function (course) {
    var courseView = LMSDemo.getCourseView(course.id);
    return courseView || course;
  });
}

function render() {
  var authState = getAuthState();
  var searchInput = document.getElementById("searchInput");
  var modeFilter = document.getElementById("modeFilter");
  var durationFilter = document.getElementById("durationFilter");
  var languageFilter = document.getElementById("languageFilter");
  var courseGrid = document.getElementById("courseGrid");

  if (!courseGrid) return;

  var courses = getCatalogCourses();

  if (authState.isLoggedIn && currentTab === "enrolled") {
    courses = courses.filter(function (course) {
      return course.isEnrolled;
    });
  }

  var filtered = courses.filter(function (course) {
    return (
      (!modeFilter || modeFilter.value === "All" || course.mode === modeFilter.value) &&
      (!durationFilter || durationFilter.value === "All" || String(course.durationWeeks) === durationFilter.value) &&
      (!languageFilter || languageFilter.value === "All" || course.language === languageFilter.value) &&
      (!searchInput || course.title.toLowerCase().indexOf(searchInput.value.toLowerCase()) >= 0)
    );
  });

  var start = (currentPage - 1) * perPage;
  var items = filtered.slice(start, start + perPage);

  courseGrid.innerHTML = "";

  if (!items.length) {
    courseGrid.innerHTML =
      '<div class="course-card" style="grid-column:1/-1;text-align:center;padding:30px;">' +
      '<div class="course-info">' +
      "<h4>" + (currentTab === "enrolled" ? "No enrolled courses yet" : "No courses match your filters") + "</h4>" +
      "<p>" + (currentTab === "enrolled"
        ? "Your enrollments will appear here once you join a course from the catalog."
        : "Try adjusting your search or filters to explore more learning options.") + "</p>" +
      (currentTab === "enrolled"
        ? '<a href="courses.html" style="display:inline-block;margin-top:12px;color:#2563eb;font-weight:600;text-decoration:none;">Browse catalog</a>'
        : "") +
      "</div></div>";
    renderPagination(filtered.length);
    return;
  }

  items.forEach(function (course) {
    var isPublicPreview = !authState.isLoggedIn || !authState.isStudent;
    var statusBadge = isPublicPreview
      ? "Enrollment Open"
      : course.isEnrolled
        ? (course.status === "completed" ? "Completed" : "Already Enrolled")
        : "Enrollment Open";
    var statusColor = isPublicPreview
      ? "#0b3a75"
      : course.isEnrolled
        ? (course.status === "completed" ? "#16a34a" : "#f97316")
        : "#0b3a75";
    var primaryAction = isPublicPreview
      ? "Get Started"
      : course.isEnrolled
        ? (course.status === "completed" ? "Completed" : "Continue")
        : "Enroll";

    courseGrid.innerHTML += `
      <div class="course-card">
        <a href="course-details.html?course=${course.id}">
          <img src="${course.image}" alt="${course.title}">
        </a>
        <div class="course-info">
          <span class="badge open" style="background:${statusColor};">${statusBadge}</span>
          <h4>${course.title}</h4>
          <p class="course-desc">${course.subtitle}</p>
          <p>${course.category} | ${course.durationWeeks} Weeks | ${course.difficulty}</p>
          <p>Instructor: ${course.instructor}</p>
          ${
            !isPublicPreview && course.isEnrolled
              ? `<p style="color:#0b3a75;font-weight:600;">${course.progress}% complete | ${course.completedLessons}/${course.totalLessons} lessons</p>`
              : `<p style="color:#475569;">${course.learners}+ learners | Starts ${course.startDate}</p>`
          }
          <div class="course-actions">
            <button class="enroll-btn" onclick="handleCourseAction('${course.id}')">
              ${primaryAction}
            </button>
          </div>
        </div>
      </div>
    `;
  });

  renderPagination(filtered.length);
}

function renderPagination(total) {
  var pagination = document.getElementById("pagination");
  if (!pagination) return;

  pagination.innerHTML = "";
  var pages = Math.max(Math.ceil(total / perPage), 1);
  for (var i = 1; i <= pages; i += 1) {
    pagination.innerHTML += '<button onclick="changePage(' + i + ')" ' + (i === currentPage ? 'class="active"' : "") + ">" + i + "</button>";
  }
}

function changePage(page) {
  currentPage = page;
  render();
}

function viewCourseDetails(courseId) {
  window.location.href = "course-details.html?course=" + courseId;
}

function handleCourseAction(courseId) {
  var authState = getAuthState();

  if (!authState.isLoggedIn || !authState.isStudent) {
    window.location.href = "auth.html";
    return;
  }

  var course = LMSDemo.getCourseView(courseId);
  if (!course) {
    viewCourseDetails(courseId);
    return;
  }

  if (course.status === "completed") {
    window.location.href = "course-player.html?course=" + course.id;
  } else if (course.isEnrolled) {
    window.location.href = "course-player.html?course=" + course.id;
  } else {
    LMSDemo.enrollInCourse(course.id);
    render();
  }
}
```

### js\exam.js

`$lang
var examState = {
  quiz: null,
  review: null,
  currentIndex: 0,
  answers: {},
  timer: null,
  remainingSeconds: 0
};

document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  LMSDemo.getSessionStudent();

  var params = new URLSearchParams(window.location.search);
  var firstQuiz = LMSDemo.getQuizzes()[0];
  var quizId = params.get("quiz") || (firstQuiz && firstQuiz.id);
  var quiz = LMSDemo.getQuizById(quizId);
  if (!quiz) {
    window.location.href = "quiz.html";
    return;
  }

  examState.quiz = quiz;
  examState.answers = Object.assign({}, quiz.selectedAnswers || {});
  examState.review = quiz.completed ? LMSDemo.getQuizReview(quiz.id) : null;
  examState.remainingSeconds = quiz.durationMinutes * 60;

  bindActions();
  renderHeader();
  renderPalette();

  if (examState.review) {
    renderQuestion();
    renderReview();
  } else {
    startTimer();
    renderQuestion();
  }
});

function bindActions() {
  document.getElementById("prevBtn").onclick = function () {
    if (examState.currentIndex > 0) {
      examState.currentIndex -= 1;
      renderQuestion();
    }
  };

  document.getElementById("nextBtn").onclick = function () {
    saveCurrentSelection();
    if (examState.currentIndex < examState.quiz.questions.length - 1) {
      examState.currentIndex += 1;
      renderQuestion();
    }
  };

  document.getElementById("clearBtn").onclick = function () {
    var question = examState.quiz.questions[examState.currentIndex];
    delete examState.answers[question.id];
    renderQuestion();
  };

  document.getElementById("submitExamBtn").onclick = submitExam;
}

function renderHeader() {
  document.getElementById("examTitle").innerText = examState.quiz.title;
  document.getElementById("examMeta").innerText = examState.quiz.courseTitle + " | " + examState.quiz.totalQuestions + " questions | " + examState.quiz.totalMarks + " marks";
}

function renderPalette() {
  var palette = document.getElementById("questionPalette");
  palette.innerHTML = "";

  examState.quiz.questions.forEach(function (question, index) {
    var button = document.createElement("div");
    button.className = "p-btn";
    if (index === examState.currentIndex) button.classList.add("current");
    if (typeof examState.answers[question.id] === "number") button.classList.add("answered");
    button.innerText = index + 1;
    button.onclick = function () {
      saveCurrentSelection();
      examState.currentIndex = index;
      renderQuestion();
    };
    palette.appendChild(button);
  });
}

function renderQuestion() {
  var question = examState.quiz.questions[examState.currentIndex];
  document.getElementById("questionNumber").innerText = "Question " + (examState.currentIndex + 1) + " of " + examState.quiz.questions.length;
  document.getElementById("questionBox").innerText = question.prompt;

  var optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  question.options.forEach(function (option, index) {
    var label = document.createElement("label");
    var selected = examState.answers[question.id] === index;
    if (selected) label.classList.add("selected");

    if (examState.review) {
      if (index === question.correctOption) label.classList.add("correct");
      if (selected && index !== question.correctOption) label.classList.add("wrong");
    }

    label.innerHTML = '<input type="radio" name="questionOption" value="' + index + '" ' + (selected ? "checked" : "") + ' ' + (examState.review ? "disabled" : "") + '> <span>' + option + '</span>';
    label.onclick = function () {
      if (examState.review) return;
      examState.answers[question.id] = index;
      renderPalette();
      renderQuestion();
    };
    optionsContainer.appendChild(label);
  });

  document.getElementById("prevBtn").disabled = examState.review || examState.currentIndex === 0;
  document.getElementById("clearBtn").disabled = !!examState.review;
  document.getElementById("nextBtn").disabled = !!examState.review || examState.currentIndex === examState.quiz.questions.length - 1;
  document.getElementById("submitExamBtn").disabled = !!examState.review;
}

function saveCurrentSelection() {
  var selected = document.querySelector('input[name="questionOption"]:checked');
  if (!selected) return;
  var question = examState.quiz.questions[examState.currentIndex];
  examState.answers[question.id] = Number(selected.value);
  renderPalette();
}

function startTimer() {
  updateTimerDisplay();
  examState.timer = setInterval(function () {
    examState.remainingSeconds -= 1;
    updateTimerDisplay();
    if (examState.remainingSeconds <= 0) {
      clearInterval(examState.timer);
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  var minutes = String(Math.max(Math.floor(examState.remainingSeconds / 60), 0)).padStart(2, "0");
  var seconds = String(Math.max(examState.remainingSeconds % 60, 0)).padStart(2, "0");
  document.getElementById("time").innerText = minutes + ":" + seconds;
}

function submitExam() {
  if (examState.review) return;

  saveCurrentSelection();
  if (examState.timer) {
    clearInterval(examState.timer);
  }

  examState.review = LMSDemo.submitQuiz(examState.quiz.id, examState.answers);
  examState.quiz = LMSDemo.getQuizById(examState.quiz.id);
  renderPalette();
  renderQuestion();
  renderReview();
}

function renderReview() {
  var panel = document.getElementById("resultPanel");
  if (!panel || !examState.review) return;

  panel.classList.add("visible");
  panel.innerHTML = "<h3>Attempt Result</h3><div class='result-summary'>" +
    "<div><strong>Score</strong><p>" + examState.review.score + "/" + examState.review.totalMarks + "</p></div>" +
    "<div><strong>Correct</strong><p>" + examState.review.correctCount + "/" + examState.review.totalQuestions + "</p></div>" +
    "<div><strong>Submitted</strong><p>" + examState.review.submittedAt + "</p></div>" +
    "</div><h4>Answer Review</h4>";

  examState.review.review.forEach(function (item) {
    panel.innerHTML += "<div class='review-item " + (item.isCorrect ? "correct" : "wrong") + "'>" +
      "<p><strong>Q" + item.index + ":</strong> " + item.prompt + "</p>" +
      "<p><strong>Your answer:</strong> " + (item.selectedOption === null ? "Not answered" : item.options[item.selectedOption]) + "</p>" +
      "<p><strong>Correct answer:</strong> " + item.options[item.correctOption] + "</p>" +
      "<p><strong>Why:</strong> " + item.explanation + "</p>" +
      "</div>";
  });
}
```

### js\lms-data.js

`$lang
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
      image: "assets/VLSI.JPG",
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
      image: state.profileImage || sessionStudent.image || demoStudent.image
    };
  }

  function getCourses() {
    return buildMergedCourses();
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
    var nextLesson = getNextLesson(courseId);
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindLogoutLinks);
  } else {
    bindLogoutLinks();
  }
})();
```

### js\my-courses.js

`$lang
document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  LMSDemo.getSessionStudent();

  var enrolledCourses = LMSDemo.getEnrolledCourses();
  var summary = LMSDemo.getDashboardSummary();
  var quizzes = LMSDemo.getQuizzes();
  var assignments = LMSDemo.getAssignments();
  var runningCourses = enrolledCourses.filter(function (course) {
    return course.status !== "completed";
  });
  var completedCourses = enrolledCourses.filter(function (course) {
    return course.status === "completed";
  });

  updateStatCards(enrolledCourses, runningCourses, completedCourses, summary, quizzes, assignments);
  renderCourses("runningCourses", runningCourses, "No running courses yet");
  renderCourses("completedCourses", completedCourses, "No completed courses yet");
});

function updateStatCards(enrolledCourses, runningCourses, completedCourses, summary, quizzes, assignments) {
  var cards = document.querySelectorAll(".stat-card");
  if (!cards.length) return;

  if (cards[0]) {
    cards[0].querySelector("h3").innerText = "Enrolled Courses (" + enrolledCourses.length + ")";
    cards[0].querySelector("p").innerText =
      enrolledCourses.length
        ? enrolledCourses.length + " active enrollments connected to your dashboard."
        : "No enrollments yet. Explore the catalog to begin your learning journey.";
    cards[0].querySelector(".progress-fill").style.width = enrolledCourses.length ? "100%" : "12%";
  }

  if (cards[1]) {
    cards[1].querySelector("h3").innerText = "Completed Courses (" + completedCourses.length + ")";
    cards[1].querySelector("p").innerText =
      completedCourses.length
        ? completedCourses[0].title + " is complete and certificate-ready."
        : "No course has reached completion yet.";
    cards[1].querySelector(".progress-fill").style.width =
      enrolledCourses.length ? Math.round((completedCourses.length / enrolledCourses.length) * 100) + "%" : "0%";
  }

  if (cards[2]) {
    var certificates = LMSDemo.getCertificates();
    cards[2].querySelector("h3").innerText = "Certificates (" + certificates.length + ")";
    cards[2].querySelector("p").innerText = certificates.length
      ? certificates[0].courseTitle + " certificate is available for download."
      : "Certificates unlock automatically after full course completion.";
    cards[2].querySelector(".progress-fill").style.width = certificates.length ? "100%" : "20%";
  }

  if (cards[3]) {
    if (runningCourses[0]) {
      cards[3].querySelector("h3").innerText = "Continue " + runningCourses[0].title;
      cards[3].querySelector("p").innerText =
        "Next lesson: " + runningCourses[0].nextLesson.title + ". " + summary.pendingAssignmentsCount + " assignment(s) pending and " + quizzes.filter(function (quiz) { return !quiz.completed; }).length + " quiz(es) available.";
      cards[3].querySelector(".progress-fill").style.width = Math.max(runningCourses[0].progress, assignments.length ? Math.round((assignments.filter(function (assignment) { return assignment.submitted; }).length / assignments.length) * 100) : 12) + "%";
      cards[3].onclick = function () {
        window.location.href = "course-player.html?course=" + runningCourses[0].id;
      };
    } else {
      cards[3].querySelector("h3").innerText = "Explore Courses";
      cards[3].querySelector("p").innerText = "You have a clean learning space. Enroll in a course to start building progress.";
      cards[3].querySelector(".progress-fill").style.width = "18%";
      cards[3].onclick = function () {
        window.location.href = "courses.html";
      };
    }
  }
}

function renderCourses(elementId, courses, emptyMessage) {
  var container = document.getElementById(elementId);
  if (!container) return;

  container.innerHTML = "";

  if (!courses.length) {
    container.innerHTML =
      '<p style="text-align: center; color: #999; padding: 40px; grid-column: 1/-1;">' +
      (elementId === "runningCourses"
        ? "No enrolled courses yet. Browse the catalog to start your first course."
        : emptyMessage) +
      "</p>";
    return;
  }

  courses.forEach(function (course) {
    var actionLabel = course.status === "completed" ? "View Certificate" : "Continue Learning";
    var actionHref =
      course.status === "completed"
        ? "certificates.html?course=" + course.id
        : "course-player.html?course=" + course.id;
    var statusLabel = course.status === "completed" ? "Completed" : "In Progress";

    var card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <a href="${actionHref}">
        <img src="${course.image}" alt="${course.title}" style="width:100%;height:200px;object-fit:cover;border-radius:8px 8px 0 0;">
      </a>
      <div class="card-body" style="padding:15px;">
        <div class="badge" style="margin-bottom:10px; display:inline-block;">${statusLabel}</div>
        <h3 style="margin:10px 0; font-weight:600; color:#333;">${course.title}</h3>
        <p style="margin:8px 0; color:#555; font-size:14px;">${course.subtitle}</p>
        <p style="margin:8px 0; color:#777; font-size:13px;">${course.durationWeeks} Weeks | ${course.difficulty}</p>
        <div style="width:100%; background:#e0e0e0; height:8px; border-radius:4px; overflow:hidden; margin:8px 0;">
          <div style="width:${course.progress}%; background:#f97316; height:100%;"></div>
        </div>
        <p style="margin:8px 0; color:#0b3a75; font-size:13px; font-weight:600;">
          ${course.completedLessons}/${course.totalLessons} lessons complete
        </p>
        <p style="margin:8px 0; color:#555; font-size:13px;">
          ${course.status === "completed" ? "Final lesson completed and certificate unlocked." : "Next lesson: " + course.nextLesson.title}
        </p>
        <a href="${actionHref}" style="display:inline-block;margin-top:8px;background:#2563eb;color:white;padding:10px 16px;border-radius:20px;text-decoration:none;">
          ${actionLabel}
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}
```

### js\notes.js

`$lang
document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  LMSDemo.getSessionStudent();

  var params = new URLSearchParams(window.location.search);
  var firstEnrolledCourse = LMSDemo.getEnrolledCourses()[0];
  var courseId = params.get("course") || (firstEnrolledCourse && firstEnrolledCourse.id);
  if (!courseId) {
    renderEmptyNotesWorkspace();
    return;
  }
  var course = LMSDemo.getCourseView(courseId);
  var notes = LMSDemo.getNotesByCourse(courseId);
  if (!course) return;

  updateNavigation(courseId);
  renderSidebar(notes, course);
  renderNotes(notes, course, null);
});

function updateNavigation(courseId) {
  var playerLink = document.querySelector('a[href^="course-player.html"]');
  if (playerLink) {
    playerLink.href = "course-player.html?course=" + courseId;
  }
}

function renderSidebar(notes, course) {
  var sidebar = document.getElementById("notesSidebar");
  if (!sidebar) return;

  sidebar.innerHTML = "<h3>" + course.title + " Notes</h3>";

  var allFilter = document.createElement("div");
  allFilter.className = "note-filter active";
  allFilter.innerHTML = "<strong>All Modules</strong><span>" + notes.length + " note sets available</span>";
  allFilter.onclick = function () {
    setActiveFilter(allFilter);
    renderNotes(notes, course, null);
  };
  sidebar.appendChild(allFilter);

  course.modules.forEach(function (module) {
    var moduleNotes = notes.filter(function (note) { return note.moduleId === module.id; });
    var filter = document.createElement("div");
    filter.className = "note-filter";
    filter.innerHTML = "<strong>" + module.title + "</strong><span>" + moduleNotes.length + " items</span>";
    filter.onclick = function () {
      setActiveFilter(filter);
      renderNotes(moduleNotes, course, module.title);
    };
    sidebar.appendChild(filter);
  });
}

function renderEmptyNotesWorkspace() {
  var sidebar = document.getElementById("notesSidebar");
  var content = document.getElementById("notesContent");
  var headerMeta = document.getElementById("notesHeaderMeta");

  if (sidebar) {
    sidebar.innerHTML = "<h3>Course Notes</h3><div class='note-filter active'><strong>No enrolled courses</strong><span>Notes unlock after enrollment</span></div>";
  }

  if (headerMeta) {
    headerMeta.innerText = "No notes available";
  }

  if (content) {
    content.innerHTML = "<div class='notes-hero'><h1>No Notes Yet</h1><p>Your personal notes space is empty because you have not enrolled in a course yet.</p></div><div class='note-card'><h3>Start learning</h3><p>Enroll in a course to unlock study notes, lesson resources, and module materials for your own account.</p><p><a href='courses.html' style='color:#2563eb;font-weight:600;text-decoration:none;'>Browse Courses</a></p></div>";
  }
}

function renderNotes(notes, course, moduleTitle) {
  var content = document.getElementById("notesContent");
  var headerMeta = document.getElementById("notesHeaderMeta");
  if (!content || !headerMeta) return;

  headerMeta.innerText = course.title + " | " + (moduleTitle || "All Modules");
  content.innerHTML = "<div class='notes-hero'><h1>" + course.title + " Study Material</h1><p>Use these course-linked notes to revise lessons, review modules, and continue learning with context from your enrolled curriculum.</p></div>";

  if (!notes.length) {
    content.innerHTML += "<div class='note-card'><h3>No notes available</h3><p>Notes for this course or module will appear here once published.</p></div>";
    return;
  }

  notes.forEach(function (note) {
    content.innerHTML += "<article class='note-card'><h3>" + note.title + "</h3><p>" + note.description + "</p>" +
      (note.content ? "<div class='note-detail'><p>" + note.content + "</p></div>" : "") +
      "<div class='note-meta'><span>" + note.courseTitle + "</span><span>" + note.moduleTitle + "</span><span>" + note.type + "</span></div><div class='note-actions'><button onclick=\"viewNote('" + note.id + "')\">View Note</button><button onclick=\"downloadNote('" + note.id + "')\">Download Resource</button></div></article>";
  });
}

function setActiveFilter(target) {
  document.querySelectorAll(".note-filter").forEach(function (item) {
    item.classList.remove("active");
  });
  target.classList.add("active");
}

function viewNote(noteId) {
  var note = (window.LMSDemo ? LMSDemo.getNotes() : []).find(function (item) { return item.id === noteId; });
  if (note && note.resourcePath) {
    window.open(note.resourcePath, "_blank", "noopener");
    return;
  }
  alert((note ? note.title : "This note") + " is already visible in the note card. Use the module filters to focus your revision.");
}

function downloadNote(noteId) {
  var note = (window.LMSDemo ? LMSDemo.getNotes() : []).find(function (item) { return item.id === noteId; });
  if (note && note.resourcePath) {
    var link = document.createElement("a");
    link.href = note.resourcePath;
    link.download = note.resourceName || (note.title + "-resource");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }
  alert("No uploaded resource is attached to this note yet.");
}
```

### js\profile.js

`$lang
document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  var profile = LMSDemo.getStudentProfile();
  var summary = LMSDemo.getDashboardSummary();
  var certificates = LMSDemo.getCertificates();
  var notifications = LMSDemo.getNotifications();

  setProfileDetails(profile);
  setAcademicStats(summary, certificates.length);
  setCertificatePanel(certificates);
  setNotifications(notifications);
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
}

function closeModal() {
  document.getElementById("editModal").classList.remove("active");
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
```

### js\project.js

`$lang
var projectState = {
  course: null,
  project: null
};

document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  LMSDemo.getSessionStudent();

  var params = new URLSearchParams(window.location.search);
  var firstEnrolledCourse = LMSDemo.getEnrolledCourses()[0];
  var courseId = params.get("course") || (firstEnrolledCourse && firstEnrolledCourse.id);
  if (!courseId) {
    renderEmptyProjectWorkspace();
    return;
  }
  var projects = LMSDemo.getProjects(courseId);
  var course = LMSDemo.getCourseView(courseId);
  if (!course) return;

  updateNavigation(courseId);
  renderSidebar(projects, courseId);
  loadProject(projects[0] || null, course);
});

function updateNavigation(courseId) {
  var playerLink = document.querySelector('a[href^="course-player.html"]');
  if (playerLink) {
    playerLink.href = "course-player.html?course=" + courseId;
  }
}

function renderSidebar(projects, courseId) {
  var sidebar = document.getElementById("projectSidebar");
  if (!sidebar) return;

  sidebar.innerHTML = "<h3>Course Projects</h3>";
  if (!projects.length) {
    sidebar.innerHTML += "<div class='project-item active'><strong>No projects</strong><span>This course has no linked project yet</span></div>";
    return;
  }

  projects.forEach(function (project, index) {
    var item = document.createElement("div");
    item.className = "project-item" + (index === 0 ? " active" : "");
    item.innerHTML = "<strong>" + project.title + "</strong><span>" + project.courseTitle + " | " + formatStatus(project.status) + "</span>";
    item.onclick = function () {
      document.querySelectorAll(".project-item").forEach(function (entry) { entry.classList.remove("active"); });
      item.classList.add("active");
      loadProject(project, LMSDemo.getCourseView(courseId));
    };
    sidebar.appendChild(item);
  });
}

function renderEmptyProjectWorkspace() {
  var sidebar = document.getElementById("projectSidebar");
  var content = document.getElementById("projectContent");
  var headerMeta = document.getElementById("projectHeaderMeta");

  if (sidebar) {
    sidebar.innerHTML = "<h3>Course Projects</h3><div class='project-item active'><strong>No course enrolled</strong><span>Projects unlock after enrollment</span></div>";
  }

  if (headerMeta) {
    headerMeta.innerText = "No project workspace yet.";
  }

  if (content) {
    content.innerHTML = "<div class='project-panel'><h1>No active project</h1><p>Your project area is ready, but it is empty until you enroll in a course with a linked project.</p><p><a href='courses.html' style='color:#2563eb;font-weight:600;text-decoration:none;'>Browse Courses</a></p></div>";
  }
}

function loadProject(project, course) {
  projectState.project = project;
  projectState.course = course;

  var content = document.getElementById("projectContent");
  var headerMeta = document.getElementById("projectHeaderMeta");
  if (!content || !headerMeta) return;

  if (!project) {
    headerMeta.innerText = "No project linked to this course yet.";
    content.innerHTML = "<div class='project-panel'><h1>No active project</h1><p>This course does not currently have a project workspace.</p></div>";
    return;
  }

  headerMeta.innerText = project.courseTitle + " | " + project.title;
  content.innerHTML = "<div class='project-panel'><span class='status-badge'>" + formatStatus(project.status) + "</span><h1>" + project.title + "</h1><p>" + project.subtitle + "</p><p>" + project.description + "</p></div>" +
    "<div class='project-grid'><article><h3>Deadline</h3><p>" + project.deadline + "</p></article><article><h3>Course Progress</h3><p>" + course.progress + "% complete in " + course.title + "</p></article><article><h3>Submission Status</h3><p>" + formatStatus(project.status) + (project.submittedAt ? " on " + project.submittedAt : "") + "</p></article></div>" +
    "<div class='project-panel'><h3>Objectives</h3><ul>" + project.objectives.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul></div>" +
    "<div class='project-panel'><h3>Deliverables</h3><ul>" + project.deliverables.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul></div>" +
    "<div class='project-panel'><h3>Workspace Notes</h3><textarea id='projectResponse' rows='7' placeholder='Add your project summary, progress notes, or submission message...'>" + (project.responseText || "") + "</textarea><input id='projectAttachment' type='text' placeholder='Enter attachment file name for demo upload' value='" + (project.attachmentName || "") + "'><div class='project-actions'><button class='secondary' id='saveDraftBtn'>Save Draft</button><button class='primary' id='submitProjectBtn'>" + (project.status === "completed" || project.status === "submitted" ? "View Submission" : "Submit Project") + "</button></div></div>";

  document.getElementById("saveDraftBtn").onclick = saveDraft;
  document.getElementById("submitProjectBtn").onclick = submitProject;
}

function saveDraft() {
  if (!projectState.project) return;
  var updated = LMSDemo.saveProjectDraft(projectState.project.id, {
    status: "in-progress",
    responseText: document.getElementById("projectResponse").value.trim(),
    attachmentName: document.getElementById("projectAttachment").value.trim()
  });
  loadProject(updated, projectState.course);
}

function submitProject() {
  if (!projectState.project) return;
  var finalStatus = projectState.project.status === "completed" ? "completed" : "submitted";
  var updated = LMSDemo.submitProject(projectState.project.id, {
    status: finalStatus,
    responseText: document.getElementById("projectResponse").value.trim(),
    attachmentName: document.getElementById("projectAttachment").value.trim()
  });
  loadProject(updated, projectState.course);
  alert(updated.title + " is now marked as " + formatStatus(updated.status).toLowerCase() + ".");
}

function formatStatus(status) {
  if (status === "not-started") return "Not Started";
  if (status === "in-progress") return "In Progress";
  if (status === "submitted") return "Submitted";
  if (status === "completed") return "Completed";
  return status;
}
```

### js\quiz.js

`$lang
document.addEventListener("DOMContentLoaded", function () {
  var quizDashboard = document.querySelector(".quiz-dashboard");
  if (!quizDashboard || !window.LMSDemo) return;

  LMSDemo.getSessionStudent();

  var params = new URLSearchParams(window.location.search);
  var firstEnrolledCourse = LMSDemo.getEnrolledCourses()[0];
  var courseId = params.get("course") || (firstEnrolledCourse && firstEnrolledCourse.id);
  var quizzes = LMSDemo.getQuizzes(courseId);
  var summary = LMSDemo.getDashboardSummary();

  updateNavigation(courseId);

  quizDashboard.innerHTML = "<section class='quiz-hero'><h1>Assessment Readiness</h1><p>Attempt quizzes linked to your enrolled courses and review answers immediately after submission.</p><div class='quiz-summary'><div><strong>Ready</strong><span>" + summary.readyQuizzesCount + "</span></div><div><strong>Completed</strong><span>" + quizzes.filter(function (quiz) { return quiz.completed; }).length + "</span></div><div><strong>Assignments Pending</strong><span>" + summary.pendingAssignmentsCount + "</span></div></div></section><section class='quiz-list'></section>";

  var list = quizDashboard.querySelector(".quiz-list");
  if (!quizzes.length) {
    list.innerHTML = "<div class='quiz-card'><div class='quiz-info'><h3>No quizzes available</h3><p>" + (courseId ? "This course does not currently have a quiz assigned. Continue lessons or check assignments and notes instead." : "Your quiz workspace is empty because you have not enrolled in a course yet.") + "</p><p><a href='courses.html' style='color:#2563eb;font-weight:600;text-decoration:none;'>Browse Courses</a></p></div></div>";
    return;
  }

  quizzes.forEach(function (quiz) {
    var card = document.createElement("div");
    card.className = "quiz-card";
    var instructionText = Array.isArray(quiz.instructions)
      ? (quiz.instructions[0] || "Complete all questions before submitting.")
      : (quiz.instructions || "Complete all questions before submitting.");

    var statusClass = quiz.status === "completed" ? "completed" : quiz.status === "review" ? "review" : "ready";
    var statusLabel = quiz.status === "completed" ? "Completed" : quiz.status === "review" ? "Ready for Review" : "Ready to Attempt";
    var actionLabel = quiz.completed ? "Review Attempt" : "Open Exam";
    var actionHref = "exam.html?quiz=" + quiz.id + "&course=" + quiz.courseId;

    card.innerHTML = "<div class='quiz-info'>" +
      "<h3>" + quiz.courseTitle + " - " + quiz.title + "</h3>" +
      "<p><strong>Questions:</strong> " + quiz.totalQuestions + "</p>" +
      "<p><strong>Duration:</strong> " + quiz.durationMinutes + " minutes</p>" +
      "<p><strong>Total Marks:</strong> " + quiz.totalMarks + "</p>" +
      "<p><strong>Instructions:</strong> " + instructionText + "</p>" +
      (quiz.referencePath ? "<p><strong>Reference:</strong> <a href='" + quiz.referencePath + "' target='_blank' rel='noopener' style='color:#2563eb;font-weight:600;text-decoration:none;'>" + (quiz.referenceName || "Open reference file") + "</a></p>" : "") +
      "<span class='status " + statusClass + "'>" + statusLabel + "</span>" +
      (quiz.completed ? "<p class='score-line'><strong>Latest Score:</strong> " + quiz.score + "/" + quiz.totalMarks + " | " + quiz.correctCount + "/" + quiz.totalQuestions + " correct</p>" : "") +
      "</div>" +
      "<div class='quiz-action'><a href='" + actionHref + "'><button>" + actionLabel + "</button></a></div>";

    list.appendChild(card);
  });
});

function updateNavigation(courseId) {
  var projectLink = document.querySelector('a[href^="project.html"]');
  var notesLink = document.querySelector('a[href^="notes.html"]');
  if (projectLink) projectLink.href = courseId ? "project.html?course=" + courseId : "project.html";
  if (notesLink) notesLink.href = courseId ? "notes.html?course=" + courseId : "notes.html";
}
```

### js\script.js

`$lang
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const navToggle = document.getElementById("navToggle");
  const navOverlay = document.getElementById("navOverlay");
  const navMobileShell = document.getElementById("navMobileShell");
  const mobileNavLinks = document.querySelectorAll(".nav-center .nav-item, .nav-right a");
  let lastScroll = 0;

  function closeMobileNav() {
    document.body.classList.remove("nav-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
    }
  }

  if (navToggle) {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", document.body.classList.contains("nav-open") ? "true" : "false");
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener("click", closeMobileNav);
  }

  mobileNavLinks.forEach((item) => {
    item.addEventListener("click", closeMobileNav);
  });

  if (navbar) {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (document.body.classList.contains("nav-open")) {
        return;
      }

      navbar.style.top = currentScroll > lastScroll ? "-100px" : "0";
      lastScroll = currentScroll;
    });
  }

  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMobileNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileNav();
    }
  });

  if (navMobileShell) {
    navMobileShell.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

  function loadPopularCourses() {
    const courseGrid = document.getElementById("popularCoursesGrid");

    if (!courseGrid) return;

    fetch("/api/courses")
      .then((res) => res.json())
      .then((courses) => {
        courseGrid.innerHTML = "";

        courses.forEach((course) => {
          const courseCard = document.createElement("div");
          courseCard.className = "course-card-landing";
          courseCard.style.cursor = "pointer";

          courseCard.innerHTML = `
            <img src="${course.image}" alt="${course.title}" style="width: 100%; height: 200px; object-fit: cover;">
            <div style="padding: 15px;">
              <h4 style="margin: 10px 0; font-weight: 600; color: #333;">${course.title}</h4>
              <p style="margin: 10px 0; color: #666; font-size: 13px;">${course.description}</p>
              <p style="margin: 10px 0; color: #999; font-size: 12px;">Duration: ${course.duration_weeks} weeks</p>
            </div>
          `;

          courseCard.onclick = () => {
            window.location.href = `course-details.html?course=${course.id}`;
          };

          courseGrid.appendChild(courseCard);
        });
      })
      .catch(() => {
        const courses = window.LMSDemo && LMSDemo.getCourses ? LMSDemo.getCourses().slice(0, 4) : [];

        if (!courses.length) {
          courseGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #999;">Courses will appear here soon.</p>';
          return;
        }

        courseGrid.innerHTML = "";
        courses.forEach((course) => {
          const courseCard = document.createElement("div");
          courseCard.className = "course-card-landing";
          courseCard.style.cursor = "pointer";

          courseCard.innerHTML = `
            <img src="${course.image}" alt="${course.title}" style="width: 100%; height: 200px; object-fit: cover;">
            <div style="padding: 15px;">
              <h4 style="margin: 10px 0; font-weight: 600; color: #333;">${course.title}</h4>
              <p style="margin: 10px 0; color: #666; font-size: 13px;">${course.description}</p>
              <p style="margin: 10px 0; color: #999; font-size: 12px;">Duration: ${course.durationWeeks} weeks</p>
            </div>
          `;

          courseCard.onclick = () => {
            window.location.href = `course-details.html?course=${course.id}`;
          };

          courseGrid.appendChild(courseCard);
        });
      });
  }

  loadPopularCourses();
});
```

### js\student.js

`$lang
document.addEventListener("DOMContentLoaded", function () {
  if (!window.LMSDemo) return;

  var student = LMSDemo.getStudentProfile();
  var summary = LMSDemo.getDashboardSummary();
  var enrolledCourses = LMSDemo.getEnrolledCourses();
  var catalogCourses = LMSDemo.getCourses();
  var assignments = LMSDemo.getAssignments();
  var quizzes = LMSDemo.getQuizzes();
  var notifications = LMSDemo.getNotifications();
  var recentActivity = LMSDemo.getRecentActivity();

  var menuToggle = document.getElementById("menuToggle");
  var sidebar = document.getElementById("sidebar");
  var sidebarOverlay = document.createElement("div");
  sidebarOverlay.className = "mobile-sidebar-overlay";
  document.body.appendChild(sidebarOverlay);

  if (menuToggle && sidebar) {
    menuToggle.onclick = function () {
      sidebar.classList.toggle("active");
      sidebarOverlay.classList.toggle("active");
      document.body.classList.toggle("mobile-nav-open");
    };

    sidebarOverlay.onclick = function () {
      sidebar.classList.remove("active");
      sidebarOverlay.classList.remove("active");
      document.body.classList.remove("mobile-nav-open");
    };
  }

  syncDashboardStatCards(summary, quizzes);

  var searchInput = document.querySelector(".search-section input");
  if (searchInput) {
    searchInput.placeholder = "Search your courses, lessons, or certificates...";
    searchInput.addEventListener("keydown", function (event) {
      if (event.key !== "Enter") return;

      var query = searchInput.value.trim().toLowerCase();
      var matchedCourse = enrolledCourses.find(function (course) {
        return course.title.toLowerCase().indexOf(query) >= 0;
      });

      window.location.href = matchedCourse
        ? "course-details.html?course=" + matchedCourse.id
        : "my-courses.html";
    });
  }

  renderWhyCards(summary, student, recentActivity);
  renderSnapshotSection(summary, assignments, quizzes);
  renderContinueLearning(enrolledCourses, catalogCourses);
  renderNotifications(notifications, recentActivity);
});

function setStat(key, value) {
  var stat = document.querySelector('[data-stat="' + key + '"]');
  if (stat) {
    stat.innerText = value;
  }
}

function syncDashboardStatCards(summary, quizzes) {
  setStat("enrolled", summary.enrolledCount);
  setStat("completed", summary.completedCount);

  var statBlocks = document.querySelectorAll(".dashboard-stats [style*='background: white']");
  if (!statBlocks.length) return;

  if (statBlocks[0]) {
    setStatLabel(statBlocks[0], "Courses Enrolled");
    setStatColor(statBlocks[0], "#2874a6");
  }

  if (statBlocks[1]) {
    setStatLabel(statBlocks[1], "Courses Completed");
    setStatColor(statBlocks[1], "#28a745");
  }

  if (statBlocks[2]) {
    setStatValue(statBlocks[2], summary.pendingAssignmentsCount);
    setStatLabel(statBlocks[2], "Pending Assignments");
    setStatColor(statBlocks[2], "#ea580c");
  }

  var completedQuizCount = quizzes.filter(function (quiz) {
    return quiz.completed;
  }).length;

  if (statBlocks[3]) {
    setStatValue(statBlocks[3], completedQuizCount);
    setStatLabel(statBlocks[3], "Quiz Activity");
    setStatColor(statBlocks[3], "#7c3aed");
  } else if (statBlocks[2] && statBlocks[2].parentNode) {
    var extraCard = statBlocks[2].cloneNode(true);
    setStatValue(extraCard, completedQuizCount);
    setStatLabel(extraCard, "Quiz Activity");
    setStatColor(extraCard, "#7c3aed");
    statBlocks[2].parentNode.appendChild(extraCard);
  }
}

function setStatValue(card, value) {
  var numberNode = card.querySelector("span");
  if (numberNode) {
    numberNode.innerText = value;
  }
}

function setStatLabel(card, label) {
  var labels = card.querySelectorAll("div");
  if (labels[1]) {
    labels[1].innerText = label;
  }
}

function setStatColor(card, color) {
  var labels = card.querySelectorAll("div");
  if (labels[0]) {
    labels[0].style.color = color;
  }
}

function renderWhyCards(summary, student, recentActivity) {
  var sectionTitle = document.querySelector(".why h2");
  var cards = document.querySelectorAll(".why-card");

  if (sectionTitle) {
    sectionTitle.innerText = "Learning Overview";
  }

  if (cards[0]) {
    cards[0].innerHTML = summary.continueCourse
      ? `
        <h3>Welcome back, ${student.name}</h3>
        <p>
          Your strongest momentum is in ${summary.continueCourse.title}. You have completed
          ${summary.continueCourse.completedLessons} of ${summary.continueCourse.totalLessons}
          lessons and your next lesson is ${summary.continueCourse.nextLesson.title}.
        </p>
      `
      : `
        <h3>Welcome, ${student.name}</h3>
        <p>
          Your student profile is ready. Enroll in a course to start building progress,
          assignments, quizzes, and certificates in your own dashboard.
        </p>
      `;
  }

  if (cards[1]) {
    cards[1].innerHTML = `
      <h3>Progress Snapshot</h3>
      <p>
        ${summary.averageProgress}% average progress across ${summary.enrolledCount} active enrollments,
        ${summary.pendingAssignmentsCount} pending assignment,
        and ${summary.readyQuizzesCount} quiz ready for review or attempt.
      </p>
    `;
  }

  if (cards[2]) {
    var certificateActivity = recentActivity.find(function (item) {
      return item.title === "Certificate earned";
    });

    cards[2].innerHTML = `
      <h3>Completion Milestone</h3>
      <p>
        ${
          certificateActivity
            ? certificateActivity.description + ". The certificate is now available from your certificates page."
            : "Complete any enrolled course to unlock your first verified certificate."
        }
      </p>
    `;
  }
}

function renderContinueLearning(enrolledCourses, catalogCourses) {
  var sectionTitle = document.querySelector(".popular h2");
  var courseGrid = document.getElementById("dashboardCourseGrid") || document.querySelector(".popular .course-grid");

  if (sectionTitle) {
    sectionTitle.innerText = enrolledCourses.length ? "Continue Learning" : "Available Courses";
  }

  if (!courseGrid) return;

  courseGrid.innerHTML = "";

  if (!enrolledCourses.length) {
    catalogCourses.slice(0, 4).forEach(function (course) {
      courseGrid.innerHTML += `
        <div class="course-card">
          <img src="${course.image}" alt="${course.title}">
          <h4>${course.title}</h4>
          <p>${course.subtitle}</p>
          <p>${course.category} | ${course.durationWeeks} Weeks | ${course.difficulty}</p>
          <p><a href="course-details.html?course=${course.id}" style="color:#2563eb;font-weight:600;text-decoration:none;">View Course</a></p>
        </div>
      `;
    });
    return;
  }

  enrolledCourses.slice(0, 4).forEach(function (course) {
    var actionLabel = course.status === "completed" ? "Review Course" : "Continue Course";
    var actionHref = "course-player.html?course=" + course.id;
    var statusText = course.status === "completed"
      ? "Completed | Certificate unlocked"
      : "In Progress | Next: " + course.nextLesson.title;
    var assignmentText = course.assignments.length
      ? course.submittedAssignments + "/" + course.assignments.length + " assignments submitted"
      : "No pending assignments";
    var quizText = course.quizzes.length
      ? course.completedQuizzes + "/" + course.quizzes.length + " quizzes completed"
      : "No course quiz yet";

    courseGrid.innerHTML += `
      <div class="course-card">
        <img src="${course.image}" alt="${course.title}">
        <h4>${course.title}</h4>
        <p>${course.subtitle}</p>
        <p>${course.progress}% complete | ${course.completedLessons}/${course.totalLessons} lessons</p>
        <p>${statusText}</p>
        <p>${assignmentText}</p>
        <p>${quizText}</p>
        <p><a href="${actionHref}" style="color:#2563eb;font-weight:600;text-decoration:none;">${actionLabel}</a></p>
      </div>
    `;
  });
}

function renderSnapshotSection(summary, assignments, quizzes) {
  var section = document.querySelector(".institutions");
  var container = document.querySelector(".institution-logos");
  if (!section || !container) return;

  section.querySelector("h2").innerText = "Current Snapshot";
  container.className = "snapshot-grid";
  container.innerHTML = `
    <div class="snapshot-card">
      <h3>Continue Learning</h3>
      <p>${summary.continueCourse ? summary.continueCourse.title : "No active course"}</p>
      <span>${summary.continueCourse ? summary.continueCourse.nextLesson.title : "Enroll to begin your first learning path"}</span>
    </div>
    <div class="snapshot-card">
      <h3>Pending Work</h3>
      <p>${summary.pendingAssignmentsCount} assignment pending</p>
      <span>${quizzes.filter(function (quiz) { return !quiz.completed; }).length} quiz available and ${assignments.filter(function (assignment) { return assignment.submitted; }).length} assignment submission record(s) stored</span>
    </div>
    <div class="snapshot-card">
      <h3>Certificate Status</h3>
      <p>${summary.completedCourse ? summary.completedCourse.title + " completed" : "No certificate yet"}</p>
      <span>${summary.completedCourse ? "Certificate is now available to view and download." : "Course completion will unlock certificates here."}</span>
    </div>
  `;
}

function renderNotifications(notifications, recentActivity) {
  var headerTitle = document.querySelector(".notification-header h3");
  var viewAll = document.querySelector(".notification-header .view-all");
  var list = document.querySelector(".notification-list");
  if (!list) return;

  if (headerTitle) {
    headerTitle.innerText = "Learning Alerts";
  }

  if (viewAll) {
    viewAll.innerText = "My Courses";
    viewAll.href = "my-courses.html";
  }

  list.innerHTML = "";

  if (!notifications.length && (!recentActivity || !recentActivity.length)) {
    list.innerHTML = `
      <div class="notification-item info">
        <div class="notification-text">No alerts yet. Once you enroll in a course, your assignments, quizzes, progress, and achievements will appear here.</div>
        <span class="notification-time">Just now</span>
      </div>
    `;
    return;
  }

  notifications.forEach(function (notification) {
    var item = document.createElement("div");
    item.className = "notification-item " + notification.type;
    item.innerHTML = `
      <div class="notification-text">${notification.message}</div>
      <span class="notification-time">${notification.time}</span>
    `;
    list.appendChild(item);
  });

  if (recentActivity && recentActivity.length) {
    recentActivity.forEach(function (activity) {
      var item = document.createElement("div");
      item.className = "notification-item info";
      item.innerHTML = `
        <div class="notification-text"><strong>${activity.title}</strong> - ${activity.description}</div>
        <span class="notification-time">${activity.meta}</span>
      `;
      list.appendChild(item);
    });
  }
}
```

### login.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - Vaaradhi LMS</title>
  <link rel="stylesheet" href="css/login.css">
</head>
<body class="login-page">
<script src="js/auth.js"></script>

<div class="login-shell">
  <section class="login-visual">
    <div class="login-visual-copy">
      <span class="eyebrow">Vaaradhi LMS</span>
      <h1>Choose your login path</h1>
      <p>Enter a learning environment designed to support academic growth, guided digital coursework, and institutional learning continuity.</p>
      <div class="login-visual-points">
        <span>Student learning dashboard with progress-focused course access</span>
        <span>Admin workspace for structured academic operations and content control</span>
        <span>Trusted LMS experience shaped for CR Reddy College learning journeys</span>
      </div>
    </div>
    <div class="login-visual-stage">
      <div class="visual-quote">
        <strong>"Learning becomes powerful when access, guidance, and progress come together in one place."</strong>
        <p>Vaaradhi LMS supports a focused academic journey for students, faculty, and administrators.</p>
      </div>
    </div>
  </section>

  <section class="login-options">
    <div class="auth-switch">
      <button class="switch-btn active" type="button">Login</button>
      <a class="switch-btn" href="auth.html">Signup</a>
    </div>

    <div class="options-heading">
      <h2>Login options</h2>
      <p>Students can log in directly here. Admins can continue to the protected admin login portal.</p>
    </div>

    <div class="login-option-card">
      <div class="option-head">
        <span class="option-tag">Student Login</span>
        <h3>Continue to your learning dashboard</h3>
        <p>Use your student email and password to access courses, progress, assignments, quizzes, and certificates.</p>
      </div>

      <form id="loginForm" class="form active-form" onsubmit="event.preventDefault(); loginUser()">
        <div class="input-group">
          <label for="loginEmail">Email Address</label>
          <input type="email" id="loginEmail" placeholder="student@gmail.com" required>
        </div>

        <div class="input-group">
          <label for="loginPassword">Password</label>
          <input type="password" id="loginPassword" placeholder="Enter your password" required>
        </div>

        <div class="auth-helper split">
          <span>Demo student: student@gmail.com / pass1234</span>
          <a href="auth.html">Need an account?</a>
        </div>

        <button type="submit" class="primary-auth-btn">Login as Student</button>
      </form>

      <a class="back-home-link" href="index.html">Back to Home</a>
    </div>

    <div class="login-option-card admin-card">
      <div class="option-head">
        <span class="option-tag">Admin Login</span>
        <h3>Open the administration workspace</h3>
        <p>Use the dedicated admin login portal to access dashboard controls, academic management, reports, and admin tools.</p>
      </div>

      <div class="admin-portal-actions">
        <a class="secondary-auth-btn" href="admin/admin-login.html">Continue to Admin Login</a>
      </div>
    </div>

    <a class="back-home-link" href="index.html">Back to Home</a>
  </section>
</div>

</body>
</html>
```

### my-courses.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Learning</title>
<link rel="stylesheet" href="css/my-courses.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>

<!-- HEADER -->
<header class="main-header">
  <div class="logo-area">
    <img src="assets/crr logo.jpg" class="logo">
    <h2>VIDHYA VAARADHI</h2>
  </div>

  <nav>
    <a href="student.html">Home</a>
    <a href="my-courses.html" class="active">My Learning</a>
    <a href="assignments.html">Assignments</a>
    <a href="certificates.html">Certificates</a>
    <a href="courses.html" class="explore-btn">Explore Courses</a>
  </nav>
</header>


<!-- HERO -->
<section class="hero">
  <h1>Your Learning Dashboard</h1>
  <p>Monitor enrolled courses, track completions and explore new learning opportunities.</p>
</section>


<!-- STAT CARDS -->
<section class="stats-section">

  <div class="stat-card" onclick="window.location.href='my-courses.html'">
    <h3>Enrolled Courses</h3>
    <p>View all your currently enrolled programs.</p>
    <div class="progress-track">
      <div class="progress-fill" style="width:75%"></div>
    </div>
    <button>View My Courses</button>
  </div>

  <div class="stat-card" onclick="window.location.href='my-courses.html#completed'">
    <h3>Completed Courses</h3>
    <p>Review successfully completed programs.</p>
    <div class="progress-track">
      <div class="progress-fill" style="width:50%"></div>
    </div>
    <button>View Completed</button>
  </div>

  <div class="stat-card" onclick="window.location.href='certificates.html'">
    <h3>Certificates</h3>
    <p>Access your verified course certificates.</p>
    <div class="progress-track">
      <div class="progress-fill" style="width:60%"></div>
    </div>
    <button>View Certificates</button>
  </div>

  <div class="stat-card highlight" onclick="window.location.href='courses.html'">
    <h3>Explore Courses</h3>
    <p>Discover trending and newly added courses.</p>
    <div class="progress-track">
      <div class="progress-fill" style="width:90%"></div>
    </div>
    <button>Browse Catalog</button>
  </div>

</section>


<!-- RUNNING COURSES -->
<section class="trending">
  <h2>Running Courses</h2>

  <div id="runningCourses" class="course-grid">
    <p style="text-align: center; color: #999; padding: 40px; grid-column: 1/-1;">Load courses...</p>
  </div>
</section>

<!-- COMPLETED COURSES -->
<section class="trending">
  <h2>Completed Courses</h2>

  <div id="completedCourses" class="course-grid">
    <p style="text-align: center; color: #999; padding: 40px; grid-column: 1/-1;">No completed courses yet</p>
  </div>
</section>


<!-- FOOTER -->
<footer class="main-footer">
  <div class="footer-grid">
    <div>
      <h4>Platform</h4>
      <p>About Us</p>
      <p>Careers</p>
      <p>Partners</p>
    </div>

    <div>
      <h4>Support</h4>
      <p>Help Center</p>
      <p>Contact</p>
      <p>FAQs</p>
    </div>

    <div>
      <h4>Legal</h4>
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
    </div>
  </div>
</footer>

<script src="js/lms-data.js"></script>
<script src="js/my-courses.js"></script>

</body>
</html> 
```

### notes.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Course Notes</title>
<link rel="stylesheet" href="css/notes.css">
</head>
<body>
<header class="notes-header">
  <div>
    <h2>Study Notes</h2>
    <p id="notesHeaderMeta">Loading notes...</p>
  </div>
  <nav>
    <a href="student.html">Home</a>
    <a href="my-courses.html">My Courses</a>
    <a href="course-player.html">Course Player</a>
  </nav>
</header>

<main class="notes-layout">
  <aside class="notes-sidebar" id="notesSidebar"></aside>
  <section class="notes-content" id="notesContent"></section>
</main>

<script src="js/lms-data.js"></script>
<script src="js/notes.js"></script>
</body>
</html>
```

### package.json

`$lang
{
  "name": "smart-lms",
  "version": "1.0.0",
  "description": "A complete, multi-page frontend Learning Management System built with pure HTML, CSS, and JavaScript. Fully responsive and ready for deployment on Vercel.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/BharathSS-git01/LMS-DEMO.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "bugs": {
    "url": "https://github.com/BharathSS-git01/LMS-DEMO/issues"
  },
  "homepage": "https://github.com/BharathSS-git01/LMS-DEMO#readme",
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "cors": "^2.8.6",
    "dotenv": "^17.3.1",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "multer": "^2.1.0",
    "mysql2": "^3.18.2",
    "nodemon": "^3.1.14"
  }
}
```

### package-lock.json

`$lang
{
  "name": "smart-lms",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "smart-lms",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "bcryptjs": "^3.0.3",
        "cors": "^2.8.6",
        "dotenv": "^17.3.1",
        "express": "^5.2.1",
        "jsonwebtoken": "^9.0.3",
        "multer": "^2.1.0",
        "mysql2": "^3.18.2",
        "nodemon": "^3.1.14"
      },
      "devDependencies": {}
    },
    "node_modules/@types/node": {
      "version": "25.3.3",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-25.3.3.tgz",
      "integrity": "sha512-DpzbrH7wIcBaJibpKo9nnSQL0MTRdnWttGyE5haGwK86xgMOkFLp7vEyfQPGLOJh5wNYiJ3V9PmUMDhV9u8kkQ==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "undici-types": "~7.18.0"
      }
    },
    "node_modules/accepts": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz",
      "integrity": "sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "^3.0.0",
        "negotiator": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/append-field": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/append-field/-/append-field-1.0.0.tgz",
      "integrity": "sha512-klpgFSWLW1ZEs8svjfb7g4qWY0YS5imI82dTg+QahUvJ8YqAY0P10Uk8tTyh9ZGuYEZEMaeJYCF5BFuX552hsw==",
      "license": "MIT"
    },
    "node_modules/aws-ssl-profiles": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/aws-ssl-profiles/-/aws-ssl-profiles-1.1.2.tgz",
      "integrity": "sha512-NZKeq9AfyQvEeNlN0zSYAaWrmBffJh3IELMZfRpJVWgrpEbtEpnjvzqBPf+mxoI287JohRDoa+/nsfqqiZmF6g==",
      "license": "MIT",
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/bcryptjs": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/bcryptjs/-/bcryptjs-3.0.3.tgz",
      "integrity": "sha512-GlF5wPWnSa/X5LKM1o0wz0suXIINz1iHRLvTS+sLyi7XPbe5ycmYI3DlZqVGZZtDgl4DmasFg7gOB3JYbphV5g==",
      "license": "BSD-3-Clause",
      "bin": {
        "bcrypt": "bin/bcrypt"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/body-parser": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.2.2.tgz",
      "integrity": "sha512-oP5VkATKlNwcgvxi0vM0p/D3n2C3EReYVX+DNYs5TjZFn/oQt2j+4sVJtSMr18pdRr8wjTcBl6LoV+FUwzPmNA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "^3.1.2",
        "content-type": "^1.0.5",
        "debug": "^4.4.3",
        "http-errors": "^2.0.0",
        "iconv-lite": "^0.7.0",
        "on-finished": "^2.4.1",
        "qs": "^6.14.1",
        "raw-body": "^3.0.1",
        "type-is": "^2.0.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/brace-expansion": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.4.tgz",
      "integrity": "sha512-h+DEnpVvxmfVefa4jFbCf5HdH5YMDXRsmKflpf1pILZWRFlTbJpxeU55nJl4Smt5HQaGzg1o6RHFPJaOqnmBDg==",
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/buffer-from": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
      "license": "MIT"
    },
    "node_modules/busboy": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/busboy/-/busboy-1.6.0.tgz",
      "integrity": "sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==",
      "dependencies": {
        "streamsearch": "^1.1.0"
      },
      "engines": {
        "node": ">=10.16.0"
      }
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/concat-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-2.0.0.tgz",
      "integrity": "sha512-MWufYdFw53ccGjCA+Ol7XJYpAlW6/prSMzuPOTRnJGcGzuhLn4Scrz7qf6o8bROZ514ltazcIFJZevcfbo0x7A==",
      "engines": [
        "node >= 6.0"
      ],
      "license": "MIT",
      "dependencies": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^3.0.2",
        "typedarray": "^0.0.6"
      }
    },
    "node_modules/content-disposition": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.0.1.tgz",
      "integrity": "sha512-oIXISMynqSqm241k6kcQ5UwttDILMK4BiurCfGEREw6+X9jkkpEe5T9FZaApyLGGOnFuyMWZpdolTXMtvEJ08Q==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz",
      "integrity": "sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.6.0"
      }
    },
    "node_modules/cors": {
      "version": "2.8.6",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.6.tgz",
      "integrity": "sha512-tJtZBBHA6vjIAaF6EnIaq6laBBP9aq/Y3ouVJjEfoHbRBcHBAHYcMh/w8LDrk2PvIMMq8gmopa5D4V8RmbrxGw==",
      "license": "MIT",
      "dependencies": {
        "object-assign": "^4",
        "vary": "^1"
      },
      "engines": {
        "node": ">= 0.10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/denque": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/denque/-/denque-2.1.0.tgz",
      "integrity": "sha512-HVQE3AAb/pxF8fQAoiqpvg9i3evqug3hoiwakOyZAwJm+6vZehbkYXZ0l4JxS+I3QxM97v5aaRNhj8v5oBhekw==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/dotenv": {
      "version": "17.3.1",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-17.3.1.tgz",
      "integrity": "sha512-IO8C/dzEb6O3F9/twg6ZLXz164a2fhTnEWb95H23Dm4OuN+92NmEAlTrupP9VW6Jm3sO26tQlqyvyi4CsnY9GA==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/express": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/express/-/express-5.2.1.tgz",
      "integrity": "sha512-hIS4idWWai69NezIdRt2xFVofaF4j+6INOpJlVOLDO8zXGpUVEVzIYk12UUi2JzjEzWL3IOAxcTubgz9Po0yXw==",
      "license": "MIT",
      "dependencies": {
        "accepts": "^2.0.0",
        "body-parser": "^2.2.1",
        "content-disposition": "^1.0.0",
        "content-type": "^1.0.5",
        "cookie": "^0.7.1",
        "cookie-signature": "^1.2.1",
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "finalhandler": "^2.1.0",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "merge-descriptors": "^2.0.0",
        "mime-types": "^3.0.0",
        "on-finished": "^2.4.1",
        "once": "^1.4.0",
        "parseurl": "^1.3.3",
        "proxy-addr": "^2.0.7",
        "qs": "^6.14.0",
        "range-parser": "^1.2.1",
        "router": "^2.2.0",
        "send": "^1.1.0",
        "serve-static": "^2.2.0",
        "statuses": "^2.0.1",
        "type-is": "^2.0.1",
        "vary": "^1.1.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/finalhandler": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.1.tgz",
      "integrity": "sha512-S8KoZgRZN+a5rNwqTxlZZePjT/4cnm0ROV70LedRHZ0p8u9fRID0hJUZQpkKLzro8LfmC8sx23bY6tVNxv8pQA==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "on-finished": "^2.4.1",
        "parseurl": "^1.3.3",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz",
      "integrity": "sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generate-function": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/generate-function/-/generate-function-2.3.1.tgz",
      "integrity": "sha512-eeB5GfMNeevm/GRYq20ShmsaGcmI81kIX2K9XQx5miC8KdHaC6Jm0qQ8ZNeGOi7wYB8OsdxKs+Y2oVuTFuVwKQ==",
      "license": "MIT",
      "dependencies": {
        "is-property": "^1.0.2"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.2.tgz",
      "integrity": "sha512-im9DjEDQ55s9fL4EYzOAv0yMqmMBSZp6G0VvFyTMPKWxiSBHUj9NW/qqLmXUwXrrM7AvqSlTCfvqRb0cM8yYqw==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/ignore-by-default": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
      "integrity": "sha512-Ius2VYcGNk7T90CppJqcIkS5ooHUZyIQK+ClZfMfMNFEF9VSE73Fq+906u/CWu92x4gzZMWOwfFYckPObzdEbA==",
      "license": "ISC"
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-promise": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
      "license": "MIT"
    },
    "node_modules/is-property": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-property/-/is-property-1.0.2.tgz",
      "integrity": "sha512-Ks/IoX00TtClbGQr4TWXemAnktAQvYB7HzcCxDGqEZU6oCmb2INHuOoKxbtR+HFkmYWBKv/dOZtGRiAjDhj92g==",
      "license": "MIT"
    },
    "node_modules/jsonwebtoken": {
      "version": "9.0.3",
      "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-9.0.3.tgz",
      "integrity": "sha512-MT/xP0CrubFRNLNKvxJ2BYfy53Zkm++5bX9dtuPbqAeQpTVe0MQTFhao8+Cp//EmJp244xt6Drw/GVEGCUj40g==",
      "license": "MIT",
      "dependencies": {
        "jws": "^4.0.1",
        "lodash.includes": "^4.3.0",
        "lodash.isboolean": "^3.0.3",
        "lodash.isinteger": "^4.0.4",
        "lodash.isnumber": "^3.0.3",
        "lodash.isplainobject": "^4.0.6",
        "lodash.isstring": "^4.0.1",
        "lodash.once": "^4.0.0",
        "ms": "^2.1.1",
        "semver": "^7.5.4"
      },
      "engines": {
        "node": ">=12",
        "npm": ">=6"
      }
    },
    "node_modules/jwa": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-2.0.1.tgz",
      "integrity": "sha512-hRF04fqJIP8Abbkq5NKGN0Bbr3JxlQ+qhZufXVr0DvujKy93ZCbXZMHDL4EOtodSbCWxOqR8MS1tXA5hwqCXDg==",
      "license": "MIT",
      "dependencies": {
        "buffer-equal-constant-time": "^1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/jws": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/jws/-/jws-4.0.1.tgz",
      "integrity": "sha512-EKI/M/yqPncGUUh44xz0PxSidXFr/+r0pA70+gIYhjv+et7yxM+s29Y+VGDkovRofQem0fs7Uvf4+YmAdyRduA==",
      "license": "MIT",
      "dependencies": {
        "jwa": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/lodash.includes": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
      "integrity": "sha512-W3Bx6mdkRTGtlJISOvVD/lbqjTlPPUDTMnlXZFnVwi9NKJ6tiAk6LVdlhZMm17VZisqhKcgzpO5Wz91PCt5b0w==",
      "license": "MIT"
    },
    "node_modules/lodash.isboolean": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
      "integrity": "sha512-Bz5mupy2SVbPHURB98VAcw+aHh4vRV5IPNhILUCsOzRmsTmSQ17jIuqopAentWoehktxGd9e/hbIXq980/1QJg==",
      "license": "MIT"
    },
    "node_modules/lodash.isinteger": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
      "integrity": "sha512-DBwtEWN2caHQ9/imiNeEA5ys1JoRtRfY3d7V9wkqtbycnAmTvRRmbHKDV4a0EYc678/dia0jrte4tjYwVBaZUA==",
      "license": "MIT"
    },
    "node_modules/lodash.isnumber": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
      "integrity": "sha512-QYqzpfwO3/CWf3XP+Z+tkQsfaLL/EnUlXWVkIk5FUPc4sBdTehEqZONuyRt2P67PXAk+NXmTBcc97zw9t1FQrw==",
      "license": "MIT"
    },
    "node_modules/lodash.isplainobject": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
      "integrity": "sha512-oSXzaWypCMHkPC3NvBEaPHf0KsA5mvPrOPgQWDsbg8n7orZ290M0BmC/jgRZ4vcJ6DTAhjrsSYgdsW/F+MFOBA==",
      "license": "MIT"
    },
    "node_modules/lodash.isstring": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
      "integrity": "sha512-0wJxfxH1wgO3GrbuP+dTTk7op+6L41QCXbGINEmD+ny/G/eCqGzxyCsh7159S+mgDDcoarnBw6PC1PS5+wUGgw==",
      "license": "MIT"
    },
    "node_modules/lodash.once": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
      "integrity": "sha512-Sb487aTOCr9drQVL8pIxOzVhafOjZN9UU54hiN8PU3uAiSV7lx1yYNpbNmex2PK6dSJoNTSJUUswT651yww3Mg==",
      "license": "MIT"
    },
    "node_modules/long": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/long/-/long-5.3.2.tgz",
      "integrity": "sha512-mNAgZ1GmyNhD7AuqnTG3/VQ26o760+ZYBPKjPvugO8+nLbYfX6TVpJPseBvopbdY+qpZ/lKUnmEc1LeZYS3QAA==",
      "license": "Apache-2.0"
    },
    "node_modules/lru.min": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/lru.min/-/lru.min-1.1.4.tgz",
      "integrity": "sha512-DqC6n3QQ77zdFpCMASA1a3Jlb64Hv2N2DciFGkO/4L9+q/IpIAuRlKOvCXabtRW6cQf8usbmM6BE/TOPysCdIA==",
      "license": "MIT",
      "engines": {
        "bun": ">=1.0.0",
        "deno": ">=1.30.0",
        "node": ">=8.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wellwelwel"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/media-typer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
      "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/merge-descriptors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz",
      "integrity": "sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.2.tgz",
      "integrity": "sha512-Lbgzdk0h4juoQ9fCKXW4by0UJqj+nOOrI9MJ1sSj4nI8aI2eo1qmvQEie4VD1glsS250n15LsWsYtCugiStS5A==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/minimatch": {
      "version": "10.2.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.4.tgz",
      "integrity": "sha512-oRjTw/97aTBN0RHbYCdtF1MQfvusSIBQM0IZEgzl6426+8jSC0nF1a/GmnVLpfB9yyr6g6FTqWqiZVbxrtaCIg==",
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/multer": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/multer/-/multer-2.1.0.tgz",
      "integrity": "sha512-TBm6j41rxNohqawsxlsWsNNh/VdV4QFXcBvRcPhXaA05EZ79z0qJ2bQFpync6JBoHTeNY5Q1JpG7AlTjdlfAEA==",
      "license": "MIT",
      "dependencies": {
        "append-field": "^1.0.0",
        "busboy": "^1.6.0",
        "concat-stream": "^2.0.0",
        "type-is": "^1.6.18"
      },
      "engines": {
        "node": ">= 10.16.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/multer/node_modules/media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/multer/node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/multer/node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/multer/node_modules/type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "license": "MIT",
      "dependencies": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mysql2": {
      "version": "3.18.2",
      "resolved": "https://registry.npmjs.org/mysql2/-/mysql2-3.18.2.tgz",
      "integrity": "sha512-UfEShBFAZZEAKjySnTUuE7BgqkYT4mx+RjoJ5aqtmwSSvNcJ/QxQPXz/y3jSxNiVRedPfgccmuBtiPCSiEEytw==",
      "license": "MIT",
      "dependencies": {
        "aws-ssl-profiles": "^1.1.2",
        "denque": "^2.1.0",
        "generate-function": "^2.3.1",
        "iconv-lite": "^0.7.2",
        "long": "^5.3.2",
        "lru.min": "^1.1.4",
        "named-placeholders": "^1.1.6",
        "sql-escaper": "^1.3.3"
      },
      "engines": {
        "node": ">= 8.0"
      },
      "peerDependencies": {
        "@types/node": ">= 8"
      }
    },
    "node_modules/named-placeholders": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/named-placeholders/-/named-placeholders-1.1.6.tgz",
      "integrity": "sha512-Tz09sEL2EEuv5fFowm419c1+a/jSMiBjI9gHxVLrVdbUkkNUUfjsVYs9pVZu5oCon/kmRh9TfLEObFtkVxmY0w==",
      "license": "MIT",
      "dependencies": {
        "lru.min": "^1.1.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/negotiator": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
      "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/nodemon": {
      "version": "3.1.14",
      "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-3.1.14.tgz",
      "integrity": "sha512-jakjZi93UtB3jHMWsXL68FXSAosbLfY0In5gtKq3niLSkrWznrVBzXFNOEMJUfc9+Ke7SHWoAZsiMkNP3vq6Jw==",
      "license": "MIT",
      "dependencies": {
        "chokidar": "^3.5.2",
        "debug": "^4",
        "ignore-by-default": "^1.0.1",
        "minimatch": "^10.2.1",
        "pstree.remy": "^1.1.8",
        "semver": "^7.5.3",
        "simple-update-notifier": "^2.0.0",
        "supports-color": "^5.5.0",
        "touch": "^3.1.0",
        "undefsafe": "^2.0.5"
      },
      "bin": {
        "nodemon": "bin/nodemon.js"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/nodemon"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.3.0.tgz",
      "integrity": "sha512-7jdwVIRtsP8MYpdXSwOS0YdD0Du+qOoF/AEPIt88PcCFrZCzx41oxku1jD88hZBwbNUIEfpqvuhjFaMAqMTWnA==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/pstree.remy": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz",
      "integrity": "sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w==",
      "license": "MIT"
    },
    "node_modules/qs": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.15.0.tgz",
      "integrity": "sha512-mAZTtNCeetKMH+pSjrb76NAM8V9a05I9aBZOHztWy/UqcJdQYNsf59vrRKWnojAT9Y+GbIvoTBC++CPHqpDBhQ==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.2.tgz",
      "integrity": "sha512-K5zQjDllxWkf7Z5xJdV0/B0WTNqx6vxG70zJE4N0kBs4LovmEYWJzQGxC9bS9RAKu3bgM40lrd5zoLJ12MQ5BA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.7.0",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/readable-stream": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
      "integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
      "license": "MIT",
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/router": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/router/-/router-2.2.0.tgz",
      "integrity": "sha512-nLTrUKm2UyiL7rlhapu/Zl45FwNgkZGaCpZbIHajDYgwlJCOzLSk+cIPAnsEqV955GjILJnKbdQC1nVPz+gAYQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "is-promise": "^4.0.0",
        "parseurl": "^1.3.3",
        "path-to-regexp": "^8.0.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.7.4",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.4.tgz",
      "integrity": "sha512-vFKC2IEtQnVhpT78h1Yp8wzwrf8CM+MzKMHGJZfBtzhZNycRFnXsHk6E5TxIkkMsgNS7mdX3AGB7x2QM2di4lA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/send/-/send-1.2.1.tgz",
      "integrity": "sha512-1gnZf7DFcoIcajTjTwjwuDjzuz4PPcY2StKPlsGAQ1+YH20IRVrBaXSWmdjowTJ6u8Rc01PoYOGHXfP1mYcZNQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.3",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.1",
        "mime-types": "^3.0.2",
        "ms": "^2.1.3",
        "on-finished": "^2.4.1",
        "range-parser": "^1.2.1",
        "statuses": "^2.0.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/serve-static": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-2.2.1.tgz",
      "integrity": "sha512-xRXBn0pPqQTVQiC8wyQrKs2MOlX24zQ0POGaj0kultvoOCstBQM5yvOhAVSUwOMjQtTvsPWoNCHfPGwaaQJhTw==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "parseurl": "^1.3.3",
        "send": "^1.2.0"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
      "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/simple-update-notifier": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/simple-update-notifier/-/simple-update-notifier-2.0.0.tgz",
      "integrity": "sha512-a2B9Y0KlNXl9u/vsW6sTIu9vGEpfKu2wRV6l1H3XEas/0gUIzGzBoP/IouTcUQbm9JWZLH3COxyn03TYlFax6w==",
      "license": "MIT",
      "dependencies": {
        "semver": "^7.5.3"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sql-escaper": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/sql-escaper/-/sql-escaper-1.3.3.tgz",
      "integrity": "sha512-BsTCV265VpTp8tm1wyIm1xqQCS+Q9NHx2Sr+WcnUrgLrQ6yiDIvHYJV5gHxsj1lMBy2zm5twLaZao8Jd+S8JJw==",
      "license": "MIT",
      "engines": {
        "bun": ">=1.0.0",
        "deno": ">=2.0.0",
        "node": ">=12.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/mysqljs/sql-escaper?sponsor=1"
      }
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/streamsearch": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz",
      "integrity": "sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
      "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.2.0"
      }
    },
    "node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "license": "MIT",
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/touch": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.1.tgz",
      "integrity": "sha512-r0eojU4bI8MnHr8c5bNo7lJDdI2qXlWWJk6a9EAFG7vbhTjElYhBVS3/miuE0uOuoLdb8Mc/rVfsmm6eo5o9GA==",
      "license": "ISC",
      "bin": {
        "nodetouch": "bin/nodetouch.js"
      }
    },
    "node_modules/type-is": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-2.0.1.tgz",
      "integrity": "sha512-OZs6gsjF4vMp32qrCbiVSkrFmXtG/AZhY3t0iAMrMBiAZyV9oALtXO8hsrHbMXF9x6L3grlFuwW2oAz7cav+Gw==",
      "license": "MIT",
      "dependencies": {
        "content-type": "^1.0.5",
        "media-typer": "^1.1.0",
        "mime-types": "^3.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha512-/aCDEGatGvZ2BIk+HmLf4ifCJFwvKFNb9/JeZPMulfgFracn9QFcAf5GO8B/mweUjSoblS5In0cWhqpfs/5PQA==",
      "license": "MIT"
    },
    "node_modules/undefsafe": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.5.tgz",
      "integrity": "sha512-WxONCrssBM8TSPRqN5EmsjVrsv4A8X12J4ArBiiayv3DyyG3ZlIg6yysuuSYdZsVz3TKcTg2fd//Ujd4CHV1iA==",
      "license": "MIT"
    },
    "node_modules/undici-types": {
      "version": "7.18.2",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.18.2.tgz",
      "integrity": "sha512-AsuCzffGHJybSaRrmr5eHr81mwJU3kjw6M+uprWvCXiNeN9SOGwQ3Jn8jb8m3Z6izVgknn1R0FTCEAP2QrLY/w==",
      "license": "MIT",
      "peer": true
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "license": "MIT"
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    }
  }
}
```

### profile.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Student Profile - Vidhya Vaaradhi</title>
<link rel="stylesheet" href="css/profile.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>

<header class="header">
  <div class="logo">VIDHYA VAARADHI LMS</div>

  <nav>
    <a href="student.html">Home</a>
    <a href="my-courses.html">My Courses</a>
    <a href="assignments.html">Assignments</a>
    <a href="quiz.html">Quizzes</a>
    <a href="certificates.html">Certificates</a>
    <a class="active">Profile</a>
    <a href="index.html" class="logout">Logout</a>
  </nav>
</header>

<main class="profile-container">

<!-- PROFILE HEADER -->
<section class="profile-header">

  <div class="avatar-wrapper">
    <img id="profileImage" src="assets/TESTIMONIAL PROFILE.jpg" alt="Profile">
    <input type="file" id="imageUpload" hidden>
    <button class="upload-btn" onclick="triggerUpload()">Change Photo</button>
  </div>

  <div class="student-info">
    <h1 id="studentName">Bharath A</h1>
    <p>CSE | Reg No: 21VVCS1012</p>
  </div>

  <div class="profile-actions">
    <button class="secondary-btn" onclick="downloadTranscript()">Download Transcript</button>
    <button class="edit-btn" onclick="openEditModal()">Edit Profile</button>
  </div>

</section>

<!-- INFO NAVIGATION CARDS -->
<section class="profile-info-nav">

  <div class="info-nav-card active">
      <h3>Profile Info</h3>
      <p>View & manage personal details</p>
  </div>

  <div class="info-nav-card">
      <h3>Academic</h3>
      <p>Performance & course statistics</p>
  </div>

  <div class="info-nav-card" onclick="openEditModal()">
      <h3>Edit Profile</h3>
      <p>Update information & settings</p>
  </div>

</section>

<!-- GLASS ACADEMIC STATS -->
<section class="glass-academic">

  <div class="glass-stat-card">
      <div class="stat-top">
          <h4>Courses Enrolled</h4>
          <span>6</span>
      </div>
      <div class="stat-progress">
          <div style="width:75%"></div>
      </div>
      <button onclick="goTo('my-courses.html')">View</button>
  </div>

  <div class="glass-stat-card">
      <div class="stat-top">
          <h4>Assignments Pending</h4>
          <span>3</span>
      </div>
      <div class="stat-progress">
          <div style="width:40%"></div>
      </div>
      <button onclick="goTo('assignments.html')">View</button>
  </div>

  <div class="glass-stat-card">
      <div class="stat-top">
          <h4>Quizzes Completed</h4>
          <span>5</span>
      </div>
      <div class="stat-progress">
          <div style="width:85%"></div>
      </div>
      <button onclick="goTo('quiz.html')">View</button>
  </div>

  <div class="glass-stat-card">
      <div class="stat-top">
          <h4>Certificates Earned</h4>
          <span>4</span>
      </div>
      <div class="stat-progress">
          <div style="width:90%"></div>
      </div>
      <button onclick="goTo('certificates.html')">View</button>
  </div>

</section>

<!-- EDITABLE INFO BARS -->
<section class="info-bars">

  <div class="info-row">
      <span>Email</span>
      <input type="text" id="emailField" value="bharath@email.com">
  </div>

  <div class="info-row">
      <span>Phone</span>
      <input type="text" id="phoneField" value="+91 9876543210">
  </div>

</section>

<!-- PREMIUM CERTIFICATE SECTION -->
<section class="premium-certificates">

  <h2>Professional Certification</h2>

  <div class="certificate-card">

    <div>
      <h3>Machine Learning Certification</h3>
      <p>Issued by Vidhya Vaaradhi LMS</p>

      <div class="certificate-requirements">
        <strong>Requirements:</strong>
        <ul>
          <li>Complete all modules</li>
          <li>Minimum 70% assignment average</li>
          <li>Pass final exam</li>
        </ul>
      </div>

      <div class="certificate-status completed">
        Ã¢Å“â€ Eligible & Certified
      </div>
    </div>

    <div>
      <button class="primary-btn" onclick="goTo('certificates.html')">View Certificate</button>
    </div>

  </div>

</section>

<!-- NOTIFICATIONS -->
<section class="profile-notifications">

  <h2>Your Notifications</h2>

  <div class="profile-notification urgent">
    ML Assignment 3 due tomorrow.
  </div>

  <div class="profile-notification info">
    New DevOps module released.
  </div>

  <div class="profile-notification success">
    Quiz evaluated successfully.
  </div>

</section>

</main>

<footer class="profile-footer">
  Ã‚Â© 2026 Vidhya Vaaradhi LMS | Academic Portal
</footer>

<!-- EDIT MODAL -->
<div class="edit-modal" id="editModal">
  <div class="modal-content">
    <h2>Edit Profile</h2>

    <label>Full Name</label>
    <input type="text" id="editName">

    <label>Email</label>
    <input type="text" id="editEmail">

    <label>Phone</label>
    <input type="text" id="editPhone">

    <div class="modal-buttons">
        <button class="save-btn" onclick="saveProfile()">Save</button>
        <button class="cancel-btn" onclick="closeModal()">Cancel</button>
    </div>
  </div>
</div>

<script src="js/lms-data.js"></script>
<script src="js/profile.js"></script>

<script>
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
</script>

</body>
</html>
```

### project.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Course Project</title>
<link rel="stylesheet" href="css/project.css">
</head>
<body>
<header class="project-header">
  <div>
    <h2>Project Workspace</h2>
    <p id="projectHeaderMeta">Loading project details...</p>
  </div>
  <nav>
    <a href="student.html">Home</a>
    <a href="my-courses.html">My Courses</a>
    <a href="course-player.html">Course Player</a>
  </nav>
</header>

<main class="project-layout">
  <aside class="project-sidebar" id="projectSidebar"></aside>
  <section class="project-content" id="projectContent"></section>
</main>

<script src="js/lms-data.js"></script>
<script src="js/project.js"></script>
</body>
</html>
```

### quiz.html

`$lang
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Quiz Dashboard - Vaaradhi LMS</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="css/quiz.css">
</head>

<body>

<header class="main-header">
  <div class="header-left">
    <h2>Vaaradhi LMS</h2>
    <span>Online Examination Portal</span>
  </div>

  <nav>
    <a href="student.html">Home</a>
    <a href="my-courses.html">My Learning</a>
    <a href="quiz.html" class="active">Quiz</a>
    <a href="assignments.html">Assignments</a>
    <a href="project.html">Projects</a>
    <a href="notes.html">Notes</a>
  </nav>
</header>

<section class="quiz-dashboard"></section>

<footer class="main-footer">
&copy; 2026 Vaaradhi LMS
</footer>

<script src="js/lms-data.js"></script>
<script src="js/quiz.js"></script>

</body>
</html>

```

### README.md

`$lang
# VIDHYA VAARADHI - Learning Management System (LMS)

A complete, multi-page frontend Learning Management System built with pure HTML, CSS, and JavaScript. Fully responsive and ready for deployment on Vercel.

## ðŸŽ¯ Features

- **Student Portal**
  - Dashboard with course overview
  - My Courses - Enroll and track progress
  - Course Player - Video lessons with navigation
  - Assignments - Submit work and view feedback
  - Certificates - Earn and download certificates
  - Student Profile management
  - Logout functionality

- **Admin Dashboard**
  - Manage students
  - Manage courses
  - View assignments
  - Quiz control center
  - Certificate management
  - Platform analytics

- **Authentication**
  - Student login flow
  - Admin login flow
  - Dummy authentication (no validation required)
  - Logout from any page

- **Navigation**
  - Full multi-page navigation
  - Dropdown menus
  - Mobile sidebar toggle
  - Logout buttons on all student pages

## ðŸ“ Project Structure

```
smart-lms/
â”œâ”€â”€ index.html                 # Landing page
â”œâ”€â”€ student-login.html        # Student login
â”œâ”€â”€ student-dashboard.html    # Student main dashboard
â”œâ”€â”€ my-courses.html           # Enrolled courses
â”œâ”€â”€ course-player.html        # Video player
â”œâ”€â”€ assignments.html          # Assignments & quizzes
â”œâ”€â”€ certificates.html         # Certificates page
â”œâ”€â”€ completed.html            # Completed courses
â”œâ”€â”€ register-course.html      # Course registration
â”œâ”€â”€ profile.html              # Student profile
â”œâ”€â”€ admin/
â”‚   â”œâ”€â”€ admin-login.html      # Admin login
â”‚   â”œâ”€â”€ dashboard.html        # Admin dashboard
â”‚   â”œâ”€â”€ students.html         # Manage students
â”‚   â”œâ”€â”€ courses.html          # Manage courses
â”‚   â”œâ”€â”€ assignments.html      # Manage assignments
â”‚   â”œâ”€â”€ quizzes.html          # Manage quizzes
â”‚   â”œâ”€â”€ certificates.html     # Manage certificates
â”‚   â””â”€â”€ css/                  # Admin styles
â”œâ”€â”€ css/                      # Student styles
â”œâ”€â”€ js/                       # JavaScript files
â”œâ”€â”€ assets/                   # Images and media
â”œâ”€â”€ vercel.json              # Vercel routing config
â”œâ”€â”€ 404.html                 # Error page
â””â”€â”€ .gitignore               # Git ignore file
```

## ðŸš€ Deployment

### Vercel Deployment
The project is pre-configured for Vercel with `vercel.json` routing configuration.

1. Push this repository to GitHub
2. Connect your GitHub account to Vercel
3. Create new project and select this repository
4. Vercel will auto-detect and deploy

**Important:** Vercel routing is configured to handle:
- Clean URLs (no .html extension)
- Direct URL access
- Page refresh without 404 errors
- Custom error page (404.html)

### Local Development
Simply open `index.html` in your browser or use:
```bash
npx http-server
```

## ðŸ”‘ Login Credentials (Dummy)

**Student Login:**
- Email: Any email
- Password: Any password

**Admin Login:**
- Admin ID: Any ID
- Password: Any password

## ðŸŽ¨ UI Features

- Modern, clean design
- Responsive layout
- Gradient backgrounds
- Card-based layouts
- Professional color scheme
- Mobile-friendly navigation
- Dropdown menus
- Progress indicators

## ðŸ“ Pages

### Student Pages
- **Landing Page** - Hero section with CTA buttons
- **Student Login** - Simple login form
- **Student Dashboard** - Welcome screen with featured courses
- **My Courses** - List of enrolled courses with progress tracking
- **Course Player** - Video player with lessons, tabs, and sidebar
- **Assignments** - Assignment submissions and quizzes
- **Certificates** - View and download earned certificates
- **Completed Courses** - Historical course data
- **Register for Courses** - Browse and register new courses
- **Profile** - User profile management

### Admin Pages
- **Admin Login** - Admin authentication
- **Dashboard** - Admin overview with stats
- **Manage Students** - Student management interface
- **Manage Courses** - Course creation and management
- **Assignments** - Assignment management
- **Quizzes** - Quiz control and management
- **Certificates** - Issue and manage certificates

## ðŸ”— Navigation Flow

### Student Flow
```
Landing â†’ Student Login â†’ Dashboard 
       â†’ My Courses â†’ Course Player â†’ Assignments/Certificates
       â†’ Profile/Logout
```

### Admin Flow
```
Landing â†’ Admin Login â†’ Dashboard 
       â†’ Manage Students/Courses/Assignments/Quizzes/Certificates
       â†’ Logout
```

## ðŸ›  Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox/grid
- **JavaScript** - Pure vanilla JS (no frameworks)
- **Vercel** - Deployment platform
- **Git/GitHub** - Version control

## ðŸ“‹ Features Implemented

âœ… Multi-page navigation
âœ… Dropdown menus
âœ… Mobile responsive
âœ… Student authentication flow
âœ… Admin authentication flow
âœ… Course player with video
âœ… Assignment submission UI
âœ… Certificate viewing
âœ… Logout functionality on all student pages
âœ… Vercel routing configuration
âœ… Clean URL support
âœ… Custom error page
âœ… Relative path structure
âœ… Asset management
âœ… CSS/JS proper linking

## ðŸš« What's NOT Included

- Backend/Database
- File uploads
- Real authentication
- Payment processing
- Email notifications
- Real video streaming
- User persistence

## ðŸ“„ License

This project is provided as-is for educational purposes.

## ðŸ‘¨â€ðŸ’» Developer

Created: February 2026

---

**Ready for Production:** This project is fully functional for frontend deployment to Vercel or any static hosting service. All navigation is working, all pages are connected, and logout functionality is fully implemented.
```

### register-course.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Register for Course</title>

  <link rel="stylesheet" href="css/student.css">

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>

<!-- ================= HEADER ================= -->

<header class="header">

  <div class="menu-toggle" id="menuToggle">â˜°</div>

  <h2 class="logo">VIDHYA VAARADHI</h2>

  <nav class="nav-links">

  <a href="student.html">Home</a>

  <!-- COURSES DROPDOWN -->
  <div class="dropdown">

    <a class="dropbtn">Courses â–¾</a>

    <div class="dropdown-content">

      <a href="student.html">Top Courses</a>
      <a href="my-courses.html">My Courses</a>
      <a href="register-course.html">Register</a>
      <a href="completed.html">Completed</a>
      <a href="certificates.html">Certificates</a>

    </div>

  </div>

  <a href="#">Institutions</a>
  <a href="#">Community</a>
  <a href="profile.html">Profile</a>
  <a href="index.html" onclick="logout()" style="color: #ff6b6b; font-weight: 600;">Logout</a>

</nav>

</header>

<!-- ================= MOBILE SIDEBAR ================= -->

<aside class="mobile-sidebar" id="sidebar">

  <a href="student.html">Home</a>
  <a href="my-courses.html">Courses</a>
  <a href="#">Institutions</a>
  <a href="#">Community</a>
  <a href="profile.html">Profile</a>
  <a href="index.html">Logout</a>

</aside>

<!-- ================= MAIN ================= -->

<main class="main">

  <section class="register-courses">

    <h2>Register for a Course</h2>
    <p>Browse and register for available courses.</p>

  </section>

</main>

<!-- ================= FOOTER ================= -->

<footer class="footer">

  <div class="footer-container">

    <!-- BRAND -->

    <div class="footer-brand">

      <div class="brand-header">
        <img src="assets/crr logo.jpg">
        <h2>VIDHYA VAARADHI</h2>
      </div>

      <p class="tagline">
        A Platform of Education
      </p>

    </div>

    <!-- LINKS -->

    <div class="footer-links">

      <div>
        <h4>Community</h4>
        <p>Forums</p>
        <p>Events</p>
        <p>Discussions</p>
      </div>

      <div>
        <h4>Quick Links</h4>
        <p>About</p>
        <p>Courses</p>
        <p>Support</p>
      </div>

    </div>

  </div>

  <div class="copyright">
    Â© 2026 Vidhya Vaaradhi â€¢ All Rights Reserved
  </div>

</footer>

<script src="js/student.js"></script>

<script>
function logout() {
  window.location.href = "index.html";
}
</script>

</body>
</html>
```

### student.html

`$lang
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Dashboard - Vidhya Vaaradhi</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="css/student.css">

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>

<!-- ================= HEADER ================= -->

<header class="header">

  <div class="menu-toggle" id="menuToggle">â˜°</div>

  <h2 class="logo">VIDHYA VAARADHI</h2>

  <nav class="nav-links">

  <a href="student.html">Home</a>

  <a href="profile.html">Profile</a>

  <a href="index.html" onclick="logout()" style="color: #ff6b6b; font-weight: 600;">Logout</a>

</nav>


</header>

<!-- ================= MOBILE SIDEBAR ================= -->

<aside class="mobile-sidebar" id="sidebar">

  <a href="student.html">Home</a>
  <a href="my-courses.html">Courses</a>
  <a href="assignments.html">Assignments</a>
  <a href="certificates.html">Certificates</a>
  <a href="profile.html">Profile</a>
  <a href="index.html">Logout</a>

</aside>

<!-- ================= MAIN ================= -->

<main class="main">

  <!-- DASHBOARD STATS -->
  <section class="dashboard-stats" style="padding: 30px 20px; background: #f5f5f5; margin-bottom: 20px;">
    <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
      <div style="background: white; padding: 20px; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div style="font-size: 28px; font-weight: bold; color: #2874a6;">
          <span data-stat="enrolled">0</span>
        </div>
        <div style="color: #666; margin-top: 8px;">Courses Enrolled</div>
      </div>
      <div style="background: white; padding: 20px; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div style="font-size: 28px; font-weight: bold; color: #28a745;">
          <span data-stat="completed">0</span>
        </div>
        <div style="color: #666; margin-top: 8px;">Courses Completed</div>
      </div>
      <div style="background: white; padding: 20px; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div style="font-size: 28px; font-weight: bold; color: #ffc107;">
          <span data-stat="running">0</span>
        </div>
        <div style="color: #666; margin-top: 8px;">Courses Running</div>
      </div>
    </div>
  </section>

  <!-- INSTITUTIONS -->

  <section class="institutions">

    <h2>Partnered Institutions</h2>

    <div class="institution-logos">
      <img src="assets/jntuk logo.png">
    
      <img src="assets/jntuA logo.jpg">
      
      <img src="assets/jntuV logo.jpg">
      
    </div>

  </section>

  <!-- WHY VAARADHI -->

  <section class="why">

    <h2>Why Vidhya Vaaradhi?</h2>

    <div class="why-vertical">

      <div class="why-card">
        <h3>Top University Courses</h3>
        <p>
          Access high-quality courses curated from premier
          institutions like IITs and IISc, aligned to academic
          and industry standards.
        </p>
      </div>

      <div class="why-card">
        <h3>Recognized Certifications</h3>
        <p>
          Earn certificates that strengthen your resume and
          improve placement opportunities across industries.
        </p>
      </div>

      <div class="why-card">
        <h3>Flexible Learning</h3>
        <p>
          Structured modules, assignments, and assessments
          help you learn anytime at your pace.
        </p>
      </div>

    </div>

  </section>

  <!-- SEARCH -->

  <section class="search-section">

    <input
      type="text"
      placeholder="Search Courses, Certifications, Institutions..."
    >

  </section>

  <!-- POPULAR COURSES -->

  <section class="popular">

    <h2>Popular Courses</h2>

    <div class="course-grid">

      <div class="course-card">
        <img src="assets/DEVOPS.jpg">
        <h4>DEVOPS</h4>
        
      </div>

      <div class="course-card">
        <img src="assets/GEN AI.jpg">
        <h4>GENERATIVE AI</h4>
        
      </div>

      <div class="course-card">
        <img src="assets/ML.jpg">
        <h4>MACHINE LEARNING </h4>
        
      </div>

      <div class="course-card">
        <img src="assets/QC.jpg">
        <h4>QUANTUM COMPUTING</h4>
        
      </div>

    </div>

  </section>

</main>
<aside class="notification-panel">

  <div class="notification-header">
    <h3>Notifications</h3>
    <a href="#" class="view-all">View All</a>
  </div>

  <div class="notification-list">

    <div class="notification-item urgent">
      <div class="notification-text">
        Assignment 3 submission deadline tomorrow.
      </div>
      <span class="notification-time">2 hours ago</span>
    </div>

    <div class="notification-item exam">
      <div class="notification-text">
        Mid-Term Examination schedule released.
      </div>
      <span class="notification-time">1 day ago</span>
    </div>

    <div class="notification-item info">
      <div class="notification-text">
        New course added: Advanced Cybersecurity.
      </div>
      <span class="notification-time">2 days ago</span>
    </div>

    <div class="notification-item success">
      <div class="notification-text">
        Quiz 2 results have been published.
      </div>
      <span class="notification-time">3 days ago</span>
    </div>

  </div>

</aside>
<!-- ================= FOOTER ================= -->

<footer class="footer">

  <div class="footer-container">

    <!-- BRAND -->

    <div class="footer-brand">

      <div class="brand-header">
        <img src="assets/crr logo.jpg">
        <h2>VIDHYA VAARADHI</h2>
      </div>

      <p class="tagline">
        A Platform of Education
      </p>

    </div>

    <!-- LINKS -->

    <div class="footer-links">

      <div>
        <h4>Community</h4>
        <p>Forums</p>
        <p>Events</p>
        <p>Discussions</p>
      </div>

      <div>
        <h4>Quick Links</h4>
        <p>About</p>
        <p>Courses</p>
        <p>Support</p>
      </div>

    </div>

  </div>

  <div class="copyright">
    &copy; 2026 Vidhya Vaaradhi • All Rights Reserved
  </div>

</footer>

<script src="js/lms-data.js"></script>
<script src="js/student.js"></script>

<script>
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
</script>

</body>
</html>

```

### vercel.json

`$lang
{
  "routes": [
    { "src": "/css/(.*)", "dest": "/css/$1" },
    { "src": "/js/(.*)", "dest": "/js/$1" },
    { "src": "/assets/(.*)", "dest": "/assets/$1" },
    { "src": "/admin/css/(.*)", "dest": "/admin/css/$1" },
    { "src": "/admin/js/(.*)", "dest": "/admin/js/$1" },
    { "src": "/(.*)\\.(html|js|css|json|png|jpg|jpeg|gif|svg|webp|ico|ttf|woff|woff2)$", "dest": "/$1.$2" },
    { "src": "/", "dest": "/" },
    { "src": "/login", "dest": "/login.html" },
    { "src": "/auth", "dest": "/auth.html" },
    { "src": "/student", "dest": "/student.html" },
    { "src": "/student-login", "dest": "/login.html" },
    { "src": "/student-dashboard", "dest": "/student.html" },
    { "src": "/my-courses", "dest": "/my-courses.html" },
    { "src": "/courses", "dest": "/courses.html" },
    { "src": "/course-details", "dest": "/course-details.html" },
    { "src": "/course-player", "dest": "/course-player.html" },
    { "src": "/notes", "dest": "/notes.html" },
    { "src": "/assignments", "dest": "/assignments.html" },
    { "src": "/quiz", "dest": "/quiz.html" },
    { "src": "/project", "dest": "/project.html" },
    { "src": "/certificates", "dest": "/certificates.html" },
    { "src": "/completed", "dest": "/completed.html" },
    { "src": "/register-course", "dest": "/register-course.html" },
    { "src": "/profile", "dest": "/profile.html" },
    { "src": "/about", "dest": "/about.html" },
    { "src": "/community", "dest": "/community.html" },
    { "src": "/admin-login", "dest": "/admin/admin-login.html" },
    { "src": "/admin-dashboard", "dest": "/admin/dashboard.html" },
    { "src": "/admin-admins", "dest": "/admin/admins.html" },
    { "src": "/admin-students", "dest": "/admin/students.html" },
    { "src": "/admin-courses", "dest": "/admin/courses.html" },
    { "src": "/admin-assignments", "dest": "/admin/assignments.html" },
    { "src": "/admin-quizzes", "dest": "/admin/quizzes.html" },
    { "src": "/admin-certificates", "dest": "/admin/certificates.html" },
    { "src": "/(.*)", "status": 404, "dest": "/404.html" }
  ]
}
```

