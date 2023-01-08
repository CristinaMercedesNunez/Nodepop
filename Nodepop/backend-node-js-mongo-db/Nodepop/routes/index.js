var express = require('express');
var router = express.Router();
const { query, validationResult } = require('express-validator');


router.get('/', function(req, res, next) {

  res.locals.welcome = 'Welcome';
  res.locals.name = '<script>alert("inyección de código")</script>';

  res.locals.users = [
    { name: 'Picture', price: '215', type:'decoration', tag: 'home', Status: 'Sell' },
    { name: 'Chair', price: '45', type: 'forniture', status: 'buy'},
    { name: 'baseball ball', price:'22', type: 'outdoors', status: 'sell'},
    { name: 'jeans', price: '32', type: down, tag: "clothes", buy: 'buy'},
  ];

  res.render('index', {
    number: 23
  });
  console.log(req.cookies);
});

// Recibiendo parámetros en la ruta
router.get('/parametro_en_ruta/:texto', (req, res, next) => {
  const texto = req.params.text;
  console.log(req.params);
  res.send(`He recibido el parámetro ${text}`);
});


router.get((req, res, next) => {
  const name = req.params.name;
  const price = req.params.price;
  const type = req.params.type;
  const tag = req.params.tag;
  const status = req.params.status;
  res.send(`He recibido los parámetros nombre: ${name} precio: ${price} tipo: ${type} tag ${tag} y status ${status}`);
});



router.post('/en_el_body', (req, res, next) => {
  console.log(req.body);
  res.send('ok');
})

module.exports = router;
