var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

// Função soma
function soma(a, b) {
    return a + b;
}

// metodo POST
app.post('/soma', function (req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);

    res.send(`O resultado da soma de ${body.a} + ${body.b} = ${resultado}`);
});

// Função subtracao
function subtracao(a, b) {
  return a - b;
}

// metodo POST
app.post('/subtracao', function (req, res) {
  var body = req.body;
  var resultado = subtracao(body.a, body.b);

  res.send(`O resultado da subtracao de ${body.a} - ${body.b} = ${resultado}`);
});

// Função multiplicacao
function multiplicacao(a, b) {
  return a * b;
}

// metodo POST
app.post('/multiplicacao', function (req, res) {
  var body = req.body;
  var resultado = multiplicacao(body.a, body.b);

  res.send(`O resultado da multiplicacao de ${body.a} * ${body.b} = ${resultado}`);
});

// Função divisao
function divisao(a, b) {  
  return a / b;
}

// metodo POST
app.post('/divisao', function (req, res) {
  var body = req.body;
  var resultado = divisao(body.a, body.b);

  res.send(`O resultado da divisao de ${body.a} / ${body.b} = ${resultado}`);

});