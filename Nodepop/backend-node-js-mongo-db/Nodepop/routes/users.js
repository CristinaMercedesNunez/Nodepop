var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/listar', (req, res, next) => {
  res.send('lista de usuarios');
});

module.exports = router;
