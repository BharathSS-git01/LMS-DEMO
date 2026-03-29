const express = require('express');
const router = express.Router();
const db = require('../../config/db');
const auth = require('../../middleware/authMiddleware');

// GET /api/quizzes/:courseId
router.get('/:courseId', async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const [quizzes] = await db.promise().query('SELECT * FROM quizzes WHERE course_id = ?', [courseId]);
    for (const q of quizzes) {
      const [qs] = await db.promise().query('SELECT id,question,options,marks FROM quiz_questions WHERE quiz_id = ?', [q.id]);
      q.questions = qs;
    }
    res.json(quizzes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/quizzes/submit
router.post('/submit', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { quiz_id, answers } = req.body; // answers: {questionId: selectedIndex}
    if (!quiz_id || !answers) return res.status(400).json({ error: 'Missing parameters' });

    const [questions] = await db.promise().query('SELECT id,correct_option,marks FROM quiz_questions WHERE quiz_id = ?', [quiz_id]);
    let total = 0, score = 0;
    for (const q of questions) {
      total += q.marks || 1;
      const sel = answers[q.id];
      if (sel != null && q.correct_option != null && Number(sel) === Number(q.correct_option)) score += (q.marks || 1);
    }

    await db.promise().query('INSERT INTO quiz_results (quiz_id,user_id,score,total) VALUES (?,?,?,?)', [quiz_id, userId, score, total]);

    await db.promise().query('INSERT INTO notifications (user_id,type,message,link) VALUES (?,?,?,?)', [userId, 'quiz', `Quiz ${quiz_id} submitted. Score: ${score}/${total}`, null]);

    res.json({ score, total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
