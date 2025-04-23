const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/assign-user', userController.assignUser);

module.exports = router;