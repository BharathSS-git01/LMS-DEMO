const express = require('express');
const router = express.Router();
const db = require('../../config/db');

// GET /api/notifications/:studentId
router.get('/:studentId', async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const [rows] = await db.promise().query('SELECT id,type,message,is_read,link,created_at FROM notifications WHERE user_id = ? ORDER BY created_at DESC LIMIT 50', [studentId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
