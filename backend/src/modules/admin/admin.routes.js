const express = require('express');
const router = express.Router();
const db = require('../../config/db');
const verifyAdmin = require('../../middleware/adminMiddleware');

// =========== COURSE MANAGEMENT ===========

// POST /api/admin/courses - Create course
router.post('/courses', verifyAdmin, async (req, res) => {
  try {
    const { title, description, duration_weeks, mode, language, image } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Course title is required' });
    }

    const [result] = await db.promise().query(
      'INSERT INTO courses (title, description, duration_weeks, mode, language, image) VALUES (?, ?, ?, ?, ?, ?)',
      [title, description || '', duration_weeks || 0, mode || 'Online', language || 'English', image || '']
    );

    res.json({ message: 'Course created', courseId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/admin/courses/:id - Update course
router.put('/courses/:id', verifyAdmin, async (req, res) => {
  try {
    const courseId = req.params.id;
    const { title, description, duration_weeks, mode, language, image } = req.body;

    const [result] = await db.promise().query(
      'UPDATE courses SET title=?, description=?, duration_weeks=?, mode=?, language=?, image=? WHERE id=?',
      [title, description, duration_weeks, mode, language, image, courseId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json({ message: 'Course updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/admin/courses/:id - Delete course
router.delete('/courses/:id', verifyAdmin, async (req, res) => {
  try {
    const courseId = req.params.id;

    const [result] = await db.promise().query('DELETE FROM courses WHERE id=?', [courseId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json({ message: 'Course deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =========== MODULE MANAGEMENT ===========

// POST /api/admin/modules - Create module
router.post('/modules', verifyAdmin, async (req, res) => {
  try {
    const { course_id, title, position } = req.body;

    if (!course_id || !title) {
      return res.status(400).json({ error: 'Course ID and title are required' });
    }

    const [result] = await db.promise().query(
      'INSERT INTO modules (course_id, title, position) VALUES (?, ?, ?)',
      [course_id, title, position || 0]
    );

    res.json({ message: 'Module created', moduleId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =========== LESSON MANAGEMENT ===========

// POST /api/admin/lessons - Create lesson
router.post('/lessons', verifyAdmin, async (req, res) => {
  try {
    const { module_id, title, video_url, position } = req.body;

    if (!module_id || !title) {
      return res.status(400).json({ error: 'Module ID and title are required' });
    }

    const [result] = await db.promise().query(
      'INSERT INTO lessons (module_id, title, video_url, position) VALUES (?, ?, ?, ?)',
      [module_id, title, video_url || '', position || 0]
    );

    res.json({ message: 'Lesson created', lessonId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =========== ASSIGNMENT MANAGEMENT ===========

// POST /api/admin/assignments - Create assignment
router.post('/assignments', verifyAdmin, async (req, res) => {
  try {
    const { course_id, module_id, title, description, due_date, points } = req.body;

    if (!course_id || !title) {
      return res.status(400).json({ error: 'Course ID and title are required' });
    }

    const [result] = await db.promise().query(
      'INSERT INTO assignments (course_id, module_id, title, description, due_date, points) VALUES (?, ?, ?, ?, ?, ?)',
      [course_id, module_id || null, title, description || '', due_date || null, points || 100]
    );

    res.json({ message: 'Assignment created', assignmentId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =========== QUIZ MANAGEMENT ===========

// POST /api/admin/quizzes - Create quiz
router.post('/quizzes', verifyAdmin, async (req, res) => {
  try {
    const { course_id, title, total_marks, duration_minutes } = req.body;

    if (!course_id || !title) {
      return res.status(400).json({ error: 'Course ID and title are required' });
    }

    const [result] = await db.promise().query(
      'INSERT INTO quizzes (course_id, title, total_marks, duration_minutes) VALUES (?, ?, ?, ?)',
      [course_id, title, total_marks || 100, duration_minutes || 0]
    );

    res.json({ message: 'Quiz created', quizId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =========== STUDENT MANAGEMENT ===========

// GET /api/admin/students - Get all students
router.get('/students', verifyAdmin, async (req, res) => {
  try {
    const [rows] = await db.promise().query(
      'SELECT id, name, email, created_at FROM users WHERE role="student" ORDER BY created_at DESC'
    );

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =========== ENROLLMENT MANAGEMENT ===========

// GET /api/admin/enrollments - Get all enrollments
router.get('/enrollments', verifyAdmin, async (req, res) => {
  try {
    const [rows] = await db.promise().query(
      `SELECT 
        e.id, 
        e.user_id, 
        u.name as student_name,
        e.course_id, 
        c.title as course_title,
        e.progress, 
        e.status, 
        e.enrolled_at
      FROM enrollments e
      JOIN users u ON e.user_id = u.id
      JOIN courses c ON e.course_id = c.id
      ORDER BY e.enrolled_at DESC`
    );

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =========== ANALYTICS ===========

// GET /api/admin/analytics - Get platform analytics
router.get('/analytics', verifyAdmin, async (req, res) => {
  try {
    const [totalStudents] = await db.promise().query(
      'SELECT COUNT(*) as total FROM users WHERE role="student"'
    );
    
    const [totalCourses] = await db.promise().query(
      'SELECT COUNT(*) as total FROM courses'
    );
    
    const [totalEnrollments] = await db.promise().query(
      'SELECT COUNT(*) as total FROM enrollments'
    );
    
    const [completedEnrollments] = await db.promise().query(
      'SELECT COUNT(*) as total FROM enrollments WHERE status="completed"'
    );
    
    const [certificatesIssued] = await db.promise().query(
      'SELECT COUNT(*) as total FROM certificates'
    );

    res.json({
      totalStudents: totalStudents[0].total,
      totalCourses: totalCourses[0].total,
      totalEnrollments: totalEnrollments[0].total,
      completedEnrollments: completedEnrollments[0].total,
      certificatesIssued: certificatesIssued[0].total
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
