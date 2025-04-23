const express = require('express');
const router = express.Router();
const {
  assignUserToAstrologer,
  updateBoostFactor
} = require('../controllers/astrologerController'); // Importing controller functions

// Route to assign a user to an astrologer
router.post('/assign-user', assignUserToAstrologer);

// Route to update boost factor for an astrologer
router.put('/:id/boost', updateBoostFactor);

module.exports = router;