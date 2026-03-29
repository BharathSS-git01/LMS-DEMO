const express = require('express');
const router = express.Router();
const db = require('../../config/db');
const auth = require('../../middleware/authMiddleware');

// GET /api/assignments/:courseId
router.get('/:courseId', async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const [assignments] = await db.promise().query('SELECT * FROM assignments WHERE course_id = ?', [courseId]);

    for (const a of assignments) {
      const [qs] = await db.promise().query('SELECT id,question,type,options FROM assignment_questions WHERE assignment_id = ?', [a.id]);
      a.questions = qs;
    }

    res.json(assignments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/assignments/submit
router.post('/submit', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { assignment_id, answers } = req.body; // answers: {questionId: answer}
    if (!assignment_id || !answers) return res.status(400).json({ error: 'Missing parameters' });

    const [questions] = await db.promise().query('SELECT id,correct_answer,marks FROM assignment_questions WHERE assignment_id = ?', [assignment_id]);

    let totalMarks = 0;
    let obtained = 0;
    for (const q of questions) {
      totalMarks += q.marks || 1;
      const ans = answers[q.id];
      if (ans != null && q.correct_answer != null) {
        if (String(ans).trim() === String(q.correct_answer).trim()) obtained += (q.marks || 1);
      }
    }

    await db.promise().query('INSERT INTO assignment_submissions (assignment_id,user_id,answers,marks,status) VALUES (?,?,?,?,?)', [assignment_id, userId, JSON.stringify(answers), obtained, 'submitted']);

    // create notification
    await db.promise().query('INSERT INTO notifications (user_id,type,message,link) VALUES (?,?,?,?)', [userId, 'assignment', `Assignment ${assignment_id} submitted. Score: ${obtained}/${totalMarks}`, null]);

    res.json({ message: 'Submitted', marks: obtained, total: totalMarks });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
