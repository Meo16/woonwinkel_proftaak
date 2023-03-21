var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

/* GET contact page. */

router.get('/pages/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/pages/comment', function(req, res, next) {
  let comment = req.body.comment;
  res.render('comment', { comment: comment });
});

module.exports = router;