const express = require('express');
const router = express.Router();
const db = require('../../config/db');
// enrollment will accept user_id in body if auth not provided

// GET /api/courses  - list courses with optional filters
router.get('/', async (req, res) => {
  try {
    const { mode, duration, language, search } = req.query;

    let sql = 'SELECT * FROM courses WHERE 1=1';
    const params = [];

    if (mode) { sql += ' AND mode = ?'; params.push(mode); }
    if (duration) { sql += ' AND duration_weeks = ?'; params.push(duration); }
    if (language) { sql += ' AND language = ?'; params.push(language); }
    if (search) { sql += ' AND title LIKE ?'; params.push('%' + search + '%'); }

    const [rows] = await db.promise().query(sql, params);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/courses/:id - get single course details
router.get('/:id', async (req, res) => {
  try {
    const courseId = req.params.id;
    const [rows] = await db.promise().query('SELECT * FROM courses WHERE id = ?', [courseId]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/courses/:id/enroll-count - get number of enrolled students
router.get('/:id/enroll-count', async (req, res) => {
  try {
    const courseId = req.params.id;
    const [rows] = await db.promise().query('SELECT COUNT(*) as count FROM enrollments WHERE course_id = ?', [courseId]);
    
    res.json({ enrollmentCount: rows[0].count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/courses/:courseId/check-enrollment/:userId - check if user is enrolled
router.get('/:courseId/check-enrollment/:userId', async (req, res) => {
  try {
    const { courseId, userId } = req.params;
    const [rows] = await db.promise().query('SELECT * FROM enrollments WHERE user_id = ? AND course_id = ?', [userId, courseId]);
    
    if (rows.length > 0) {
      res.json({ enrolled: true, enrollment: rows[0] });
    } else {
      res.json({ enrolled: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/courses/:id/modules - return modules and lessons
router.get('/:id/modules', async (req, res) => {
  try {
    const courseId = req.params.id;
    const [modules] = await db.promise().query('SELECT id,title,position FROM modules WHERE course_id = ? ORDER BY position', [courseId]);

    for (const mod of modules) {
      const [lessons] = await db.promise().query('SELECT id,title,video_url,position FROM lessons WHERE module_id = ? ORDER BY position', [mod.id]);
      mod.lessons = lessons;
    }

    res.json({ modules });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/courses/enroll - enroll a user in a course
router.post('/enroll', async (req, res) => {
  try {
    // allow passing user_id in body for frontend testing
    const userId = (req.headers && req.headers.authorization) ? (req.user && req.user.id) : req.body.user_id;
    const { course_id } = req.body;
    if (!userId || !course_id) return res.status(400).json({ error: 'Missing parameters' });

    // check existing
    const [exists] = await db.promise().query('SELECT * FROM enrollments WHERE user_id = ? AND course_id = ?', [userId, course_id]);
    if (exists.length > 0) return res.status(400).json({ error: 'Already enrolled' });

    await db.promise().query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,0,?)', [userId, course_id, 'ongoing']);
    res.json({ message: 'Enrolled' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
