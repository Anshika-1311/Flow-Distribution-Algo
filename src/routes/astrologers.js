const express = require('express');
const router = express.Router();
const { assignUserToAstrologer } = require('../services/assignmentService');
const astrologers = require('../astrologerData'); // Assuming you have your data here

// Route 1: Assign user to astrologer
router.post('/assign-user', (req, res) => {
  const { userId, userName } = req.body;

  if (!userId || !userName) {
    return res.status(400).json({ error: "userId and userName are required" });
  }

  const user = { userId, userName };
  const assignedAstrologer = assignUserToAstrologer(user);

  res.json({
    message: `User assigned to astrologer ${assignedAstrologer.name}`,
    astrologer: assignedAstrologer
  });
});

// Route 2: Toggle top astrologer status
router.patch('/:id/toggle-top', (req, res) => {
  const { id } = req.params;

  const astrologer = astrologers.find(a => a.id === id);
  if (!astrologer) {
    return res.status(404).json({ error: 'Astrologer not found' });
  }

  astrologer.isTopAstrologer = !astrologer.isTopAstrologer;

  res.json({
    message: `Astrologer "${astrologer.name}" is now ${astrologer.isTopAstrologer ? 'a TOP astrologer' : 'a regular astrologer'}`,
    astrologer
  });
});

module.exports = router;