const express = require("express");
const router = express.Router();
const db = require("../../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const [results] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

    if (results.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(400).json({ error: 'Invalid password' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if user already exists
    const [existing] = await db.promise().query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const [result] = await db.promise().query(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, 'student']
    );

    const userId = result.insertId;

    // Generate token
    const token = jwt.sign({ id: userId, role: 'student' }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({
      message: 'Registered Successfully',
      token,
      user: { id: userId, name, email, role: 'student' }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
