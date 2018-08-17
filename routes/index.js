var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cover');
});

router.get('/helloworld', function(req, res, next){
  res.render('helloworld', {title : 'WHATUP' });
})

router.get('/userlist', function(req, res){
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    res.render('userlist', {"userlist" : docs});
  });
});
module.exports = router;
