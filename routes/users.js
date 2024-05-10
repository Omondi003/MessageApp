var express = require('express');
var router = express.Router(); 
const Message= require('../models/newMesage')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('new')
});


 // Route to handle POST requests to create a new message
router.post('/', async (req, res) => {
   try {
     // Extract data from the request body
     const { name, message } = req.body;
 
     // Create a new message using the Message model
     const newMessage = new Message({
       name,
       message
     });
 
     // Save the new message to the database
     const savedMessage = await newMessage.save();
 
     res.status(201).json(savedMessage); // Return the saved message as JSON
  //  res.send("Hello ")
   } catch (error) {
     res.status(400).json({ message: error.message }); // Return error message if there's an issue
   }
 });



module.exports = router;
