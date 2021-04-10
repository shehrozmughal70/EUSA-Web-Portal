const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbot');

router.post('/sendQuery', chatbotController.sendQuery);


module.exports = router;