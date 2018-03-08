var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource');

  res.json([{
    id: 1,
    username: "pepe"
  }, {
    id: 2,
    username: "pepito"
  }]);
});

router.get('/flickr', function (req, res, next) {
    //res.send('respond with a resource');
  
    res.json([{
      id: 1,
      username: "flickr"
    }, {
      id: 2,
      username: "Call flickr Api?"
    }]);
  });

module.exports = router;
