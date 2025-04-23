const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/assign-user', userController.assignUser);
router.get('/assignments', getAllAssignments);

module.exports = router;