const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/calcular', (req, res) => {
  const { numeroA, numeroB, operacao } = req.body;
  let resultado;

  switch (operacao) {
    case '+':
      resultado = parseFloat(numeroA) + parseFloat(numeroB);
      break;
    case '-':
      resultado = parseFloat(numeroA) - parseFloat(numeroB);
      break;
    case '*':
      resultado = parseFloat(numeroA) * parseFloat(numeroB);
      break;
    case '/':
      resultado = parseFloat(numeroA) / parseFloat(numeroB);
      break;
    default:
      resultado = 'Operação inválida';
  }

  res.render('index', { resultado });
});

module.exports = router;