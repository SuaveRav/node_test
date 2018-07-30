var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld', function(req, res, next){
  res.render('helloworld', {title : 'Hello Darren. It\'s me Ravi. I am speaking to you over the internet' });
})

module.exports = router;
