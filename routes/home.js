var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'woonwinkel'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});

/* GET home page. */
router.get('/pages/home', function(req, res, next) {
  let searchInput = req.query.searchInput;
  let query = `SELECT * from products`;
  if(searchInput){
    query += ` WHERE naam LIKE '%${searchInput}%'`;
  }
  connection.query(query, (err, products) => {
    
    if (err) throw err;
    res.render('home', { products: products, searchInput: searchInput });
  });
});

module.exports = router;

