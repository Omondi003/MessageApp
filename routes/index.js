var express = require('express');
var router = express.Router();
const Message=require("../models/newMesage")

 
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.render('index', { title: 'MessageApp',messages:messages }); // Pass messages data to the EJS template
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
