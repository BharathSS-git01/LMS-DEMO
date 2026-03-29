require('dotenv').config();
const db = require('../config/db');
const bcrypt = require('bcrypt');

async function run() {
  try {
    const pool = db.promise();

    console.log('Dropping existing tables and creating fresh schema...');

    await pool.query('SET FOREIGN_KEY_CHECKS = 0');

    // Drop tables in order to reset schema (reverse dependency order)
    await pool.query('DROP TABLE IF EXISTS notifications');
    await pool.query('DROP TABLE IF EXISTS certificates');
    await pool.query('DROP TABLE IF EXISTS quiz_results');
    await pool.query('DROP TABLE IF EXISTS quiz_questions');
    await pool.query('DROP TABLE IF EXISTS quizzes');
    await pool.query('DROP TABLE IF EXISTS assignment_submissions');
    await pool.query('DROP TABLE IF EXISTS assignment_questions');
    await pool.query('DROP TABLE IF EXISTS assignments');
    await pool.query('DROP TABLE IF EXISTS course_progress');
    await pool.query('DROP TABLE IF EXISTS enrollments');
    await pool.query('DROP TABLE IF EXISTS lessons');
    await pool.query('DROP TABLE IF EXISTS modules');
    await pool.query('DROP TABLE IF EXISTS courses');
    await pool.query('DROP TABLE IF EXISTS course_enrollments');
    await pool.query('DROP TABLE IF EXISTS users');
    await pool.query('SET FOREIGN_KEY_CHECKS = 1');

    console.log('Creating tables...');

    // USERS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role ENUM('student','admin') NOT NULL DEFAULT 'student',
        phone VARCHAR(50),
        profile_image VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // COURSES
    await pool.query(`
      CREATE TABLE IF NOT EXISTS courses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        duration_weeks INT DEFAULT 0,
        mode VARCHAR(50),
        language VARCHAR(50),
        image VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // MODULES
    await pool.query(`
      CREATE TABLE IF NOT EXISTS modules (
        id INT AUTO_INCREMENT PRIMARY KEY,
        course_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        position INT DEFAULT 0,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // LESSONS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS lessons (
        id INT AUTO_INCREMENT PRIMARY KEY,
        module_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        video_url VARCHAR(512),
        position INT DEFAULT 0,
        FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // ENROLLMENTS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS enrollments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        course_id INT NOT NULL,
        enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        progress INT DEFAULT 0,
        status ENUM('ongoing','completed') DEFAULT 'ongoing',
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // ASSIGNMENTS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS assignments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        course_id INT NOT NULL,
        module_id INT,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        due_date DATETIME,
        points INT DEFAULT 100,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
        FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE SET NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // ASSIGNMENT QUESTIONS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS assignment_questions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        assignment_id INT NOT NULL,
        question TEXT NOT NULL,
        type ENUM('text','mcq') DEFAULT 'text',
        options JSON,
        correct_answer VARCHAR(255),
        FOREIGN KEY (assignment_id) REFERENCES assignments(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // ASSIGNMENT SUBMISSIONS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS assignment_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        assignment_id INT NOT NULL,
        user_id INT NOT NULL,
        answers JSON,
        marks INT DEFAULT 0,
        status ENUM('submitted','graded') DEFAULT 'submitted',
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        file_url VARCHAR(255),
        FOREIGN KEY (assignment_id) REFERENCES assignments(id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // QUIZZES
    await pool.query(`
      CREATE TABLE IF NOT EXISTS quizzes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        course_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        total_marks INT DEFAULT 100,
        duration_minutes INT DEFAULT 0,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // QUIZ QUESTIONS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS quiz_questions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        quiz_id INT NOT NULL,
        question TEXT NOT NULL,
        options JSON,
        correct_option INT,
        marks INT DEFAULT 1,
        FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // QUIZ RESULTS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS quiz_results (
        id INT AUTO_INCREMENT PRIMARY KEY,
        quiz_id INT NOT NULL,
        user_id INT NOT NULL,
        score INT DEFAULT 0,
        total INT DEFAULT 0,
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // COURSE PROGRESS (per lesson)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS course_progress (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        course_id INT NOT NULL,
        lesson_id INT NOT NULL,
        completed TINYINT(1) DEFAULT 0,
        completed_at TIMESTAMP NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
        FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // CERTIFICATES
    await pool.query(`
      CREATE TABLE IF NOT EXISTS certificates (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        course_id INT NOT NULL,
        issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        file_path VARCHAR(255),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // NOTIFICATIONS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS notifications (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        type VARCHAR(100),
        message TEXT,
        is_read TINYINT(1) DEFAULT 0,
        link VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    console.log('Seeding initial data...');

    // Clear existing data (safe for development)
    await pool.query('DELETE FROM notifications');
    await pool.query('DELETE FROM certificates');
    await pool.query('DELETE FROM quiz_results');
    await pool.query('DELETE FROM quiz_questions');
    await pool.query('DELETE FROM quizzes');
    await pool.query('DELETE FROM assignment_submissions');
    await pool.query('DELETE FROM assignment_questions');
    await pool.query('DELETE FROM assignments');
    await pool.query('DELETE FROM course_progress');
    await pool.query('DELETE FROM enrollments');
    await pool.query('DELETE FROM lessons');
    await pool.query('DELETE FROM modules');
    await pool.query('DELETE FROM courses');
    await pool.query('DELETE FROM users');

    // Create users with bcrypt-hashed passwords
    const studentPwd = await bcrypt.hash('pass1234', 10);
    const defaultPwd = await bcrypt.hash('1234', 10);
    const [u1] = await pool.query('INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)', ['Student Demo','student@gmail.com',studentPwd,'student']);
    const [u2] = await pool.query('INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)', ['Pavan','pavan@gmail.com',defaultPwd,'student']);
    const [u3] = await pool.query('INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)', ['Vijay','vijay@gmail.com',defaultPwd,'student']);
    const [a1] = await pool.query('INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)', ['Admin','admin@gmail.com',defaultPwd,'admin']);

    const studentDemoId = u1.insertId;
    const pavanId = u2.insertId;
    const vijayId = u3.insertId;
    const adminId = a1.insertId;

    // Courses
    const courses = [
      ['Machine Learning','Master predictive modeling, neural networks, deep learning systems and real-world AI deployment strategies used in modern industries.',12,'Online','English','assets/ML.jpg'],
      ['DevOps','Learn continuous integration, continuous deployment, infrastructure as code, containerization and cloud management practices.',8,'Hybrid','English','assets/DEVOPS.jpg'],
      ['Generative AI','Explore generative techniques including transformers, diffusion models, and prompt engineering for building intelligent AI systems.',4,'Online','Hindi','assets/GEN AI.jpg'],
      ['Quantum Computing','Understand quantum mechanics fundamentals, quantum algorithms, and quantum computing applications in modern technology.',10,'Online','English','assets/QC.jpg']
    ];

    const courseIds = [];
    for (const c of courses) {
      const [res] = await pool.query('INSERT INTO courses (title,description,duration_weeks,mode,language,image) VALUES (?,?,?,?,?,?)', c);
      courseIds.push(res.insertId);
    }

    // For each course add 2 modules, each with 2 lessons, 1 assignment and 1 quiz
    for (let i = 0; i < courseIds.length; i++) {
      const courseId = courseIds[i];

      for (let m = 1; m <= 2; m++) {
        const [mod] = await pool.query('INSERT INTO modules (course_id,title,position) VALUES (?,?,?)', [courseId, `Module ${m}`, m]);
        const moduleId = mod.insertId;

        for (let l = 1; l <= 2; l++) {
          await pool.query('INSERT INTO lessons (module_id,title,video_url,position) VALUES (?,?,?,?)', [moduleId, `Lesson ${l}`, `https://example.com/videos/course${courseId}_m${m}_l${l}.mp4`, l]);
        }

        // assignment
        const [ass] = await pool.query('INSERT INTO assignments (course_id,module_id,title,description,due_date,points) VALUES (?,?,?,?,DATE_ADD(NOW(), INTERVAL 7 DAY),?)', [courseId, moduleId, `Assignment for Module ${m}`, 'Answer the questions', 100]);
        const assignmentId = ass.insertId;

        await pool.query('INSERT INTO assignment_questions (assignment_id,question,type,options,correct_answer) VALUES (?,?,?,?,?)', [assignmentId, 'Explain key concept of this module.', 'text', null, null]);

        // quiz
        const [q] = await pool.query('INSERT INTO quizzes (course_id,title,total_marks,duration_minutes) VALUES (?,?,?,?)', [courseId, `Quiz Module ${m}`, 20, 15]);
        const quizId = q.insertId;

        await pool.query('INSERT INTO quiz_questions (quiz_id,question,options,correct_option,marks) VALUES (?,?,?,?,?)', [quizId, 'What is 2+2?', JSON.stringify(['1','2','3','4']), 3, 1]);
      }
    }

    // Enroll students according to requirements
    // Student Demo: DevOps (running), Quantum (completed)
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [studentDemoId, courseIds[1], 67, 'ongoing']);
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [studentDemoId, courseIds[3], 100, 'completed']);

    // Pavan: DevOps (completed), Quantum (running), ML (running)
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [pavanId, courseIds[1], 100, 'completed']);
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [pavanId, courseIds[3], 50, 'ongoing']);
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [pavanId, courseIds[0], 35, 'ongoing']);

    // Vijay: Gen AI (completed), DevOps (running), Quantum (running)
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [vijayId, courseIds[2], 100, 'completed']);
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [vijayId, courseIds[1], 60, 'ongoing']);
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [vijayId, courseIds[3], 25, 'ongoing']);

    console.log('Seed complete.');
    process.exit(0);
  }
  catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

run();
