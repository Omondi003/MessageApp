var express = require('express');
var router = express.Router();

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
 
/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index', { title: 'MessageApp', messages:messages} );
});

module.exports = router;
