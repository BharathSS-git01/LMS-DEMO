const express = require('express');
const router = express.Router();
const db = require('../../config/db');
const path = require('path');

// GET /api/certificates/:studentId
router.get('/:studentId', async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const [rows] = await db.promise().query(`
      SELECT c.id, c.course_id, cr.title as course_title, c.issued_at, c.file_path
      FROM certificates c
      JOIN courses cr ON cr.id = c.course_id
      WHERE c.user_id = ?
    `, [studentId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
