const express = require('express');
const router = express.Router();
const controller = require('../controllers/astrologerController');

router.get('/astrologers', controller.getAstrologers);
router.post('/user/connect', controller.connectUser);
router.post('/astrologer/toggle', controller.toggleAstrologer);

module.exports = router;
