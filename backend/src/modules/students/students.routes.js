const express = require("express");
const router = express.Router();
const db = require("../../config/db");

// GET Student Dashboard
router.get("/:id/dashboard", (req, res) => {
  const studentId = req.params.id;

  const query = `
    SELECT 
      u.id,
      u.name,
      u.email,
      c.id AS course_id,
      c.title,
      e.progress,
      e.status
    FROM users u
    JOIN enrollments e ON u.id = e.user_id
    JOIN courses c ON c.id = e.course_id
    WHERE u.id = ?
  `;

  db.query(query, [studentId], (err, results) => {
if (err) {
  console.error("FULL DB ERROR:", err);
  return res.status(500).json({ error: err.message });
}
    if (results.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    const student = {
      id: results[0].id,
      name: results[0].name,
      email: results[0].email,
      courses: results.map(r => ({
        course_id: r.course_id,
        title: r.title,
        progress: r.progress,
        status: r.status
      }))
    };

    res.json(student);
  });
});


// GET /api/students/:id/courses -> enrolled courses
router.get('/:id/courses', async (req, res) => {
  try {
    const studentId = req.params.id;
    const [rows] = await db.promise().query(`
      SELECT e.course_id, c.title, c.description, c.duration_weeks, e.progress, e.status, c.image
      FROM enrollments e
      JOIN courses c ON c.id = e.course_id
      WHERE e.user_id = ?
      ORDER BY e.enrolled_at DESC
    `, [studentId]);

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


// POST /api/progress/update -> mark lesson complete and update course progress
router.post('/progress/update', async (req, res) => {
  try {
    const { user_id, course_id, lesson_id } = req.body;
    const userId = user_id;
    if (!userId || !course_id || !lesson_id) return res.status(400).json({ error: 'Missing parameters' });

    // insert course_progress if not exists
    const [exists] = await db.promise().query('SELECT * FROM course_progress WHERE user_id = ? AND lesson_id = ?', [userId, lesson_id]);
    if (exists.length === 0) {
      await db.promise().query('INSERT INTO course_progress (user_id,course_id,lesson_id,completed,completed_at) VALUES (?,?,?,?,NOW())', [userId, course_id, lesson_id, 1]);
    }

    // calculate progress
    const [totalRes] = await db.promise().query('SELECT COUNT(*) AS total FROM lessons l JOIN modules m ON l.module_id = m.id WHERE m.course_id = ?', [course_id]);
    const total = totalRes[0].total || 0;
    const [doneRes] = await db.promise().query('SELECT COUNT(*) AS done FROM course_progress WHERE user_id = ? AND course_id = ?', [userId, course_id]);
    const done = doneRes[0].done || 0;
    const progress = total === 0 ? 0 : Math.round((done / total) * 100);

    await db.promise().query('UPDATE enrollments SET progress = ? WHERE user_id = ? AND course_id = ?', [progress, userId, course_id]);

    // if completed give certificate
    if (progress >= 100) {
      await db.promise().query('UPDATE enrollments SET status = ? WHERE user_id = ? AND course_id = ?', ['completed', userId, course_id]);
      const [cert] = await db.promise().query('SELECT * FROM certificates WHERE user_id = ? AND course_id = ?', [userId, course_id]);
      if (cert.length === 0) {
        await db.promise().query('INSERT INTO certificates (user_id,course_id,file_path) VALUES (?,?,?)', [userId, course_id, null]);
      }
    }

    res.json({ progress });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


// GET /api/students/:id/completed -> completed courses
router.get('/:id/completed', async (req, res) => {
  try {
    const studentId = req.params.id;
    const [rows] = await db.promise().query(`
      SELECT e.course_id, c.title, c.description, c.duration_weeks, e.progress, e.status, c.image
      FROM enrollments e
      JOIN courses c ON c.id = e.course_id
      WHERE e.user_id = ? AND e.status = 'completed'
      ORDER BY e.enrolled_at DESC
    `, [studentId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
