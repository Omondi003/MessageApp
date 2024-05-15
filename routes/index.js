var express = require('express');
var router = express.Router();
const Message=require("../models/newMesage")

const messages=[
   {
    user:'Joel',
    message:'Heloo Joel',
    added:new Date()
   },

   {
     user: 'Peter',
     message: 'Heloo Peter',
     added: new Date()
   },

   {
     user:'Michael',
     message: "Heloo mr michael",
     added: new Date()
   },
   {
    user:'Kennedy',
    message: "Heloo mr Kennedy",
    added: new Date()
  }
];
 
   //GET home page. */
  //  router.get('/', (req, res, next)=> {
  //    res.render('index', { title: 'MessageApp', messages:messages} );
  //  });

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
    console.log(messages)
    res.render('index', { title: 'MessageApp',messages:messages }); // Pass messages data to the EJS template
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
