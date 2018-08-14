var express = require('express');
var router = express.Router();
const sql = require('mssql');


const config = {
  user: 'jschluchter',
  password: '1a4EtmdM8GcZIzC$@64^',
  server: 'f5test.database.windows.net', 
  database: 'f5test',

  options: {
      encrypt: true // Use this if you're on Windows Azure
  }
}


/* GET home page. */
router.get('/', function(req, res, next) {

  sql.connect(config).then(() => {
    return sql.query`select * from samples`
  }).then(result => {
    res.json(result).status(200)
  }).catch(err => {
    res.json(err).status(500)
  })

});

module.exports = router;
