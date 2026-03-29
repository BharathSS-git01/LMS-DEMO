const express = require('express');
const router = express.Router();
const db = require('../../config/db');
const auth = require('../../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/profile');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const userId = req.user?.id || req.body.user_id || 'anon';
    cb(null, `profile_${userId}${ext}`);
  }
});

const upload = multer({ storage });

// GET /api/users/profile
router.get('/profile', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const [rows] = await db.promise().query('SELECT id,name,email,phone,profile_image FROM users WHERE id = ?', [userId]);
    if (rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/users/profile
router.put('/profile', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email, phone } = req.body;
    await db.promise().query('UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?', [name, email, phone, userId]);
    res.json({ message: 'Profile updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/users/upload-photo
router.post('/upload-photo', auth, upload.single('photo'), async (req, res) => {
  try {
    const userId = req.user.id;
    if (!req.file) return res.status(400).json({ error: 'No file' });
    const filePath = `/uploads/profile/${req.file.filename}`;
    await db.promise().query('UPDATE users SET profile_image = ? WHERE id = ?', [filePath, userId]);
    res.json({ message: 'Uploaded', file: filePath });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
