const express = require('express');
const router = express.Router();

// Importando o modelo Usuario
const { Usuario } = require('../models/index');


// Rota para exibir o formulário de login
router.get('/login', (req, res) => {
  res.render('login');
});

// Rota para processar o login
router.post('/login', async (req, res) => {
  try {
    const { login, Senha } = req.body;

    // Verificar se o usuário existe
    const usuario = await Usuario.findOne({ where: { login } });

    if (usuario && usuario.Senha === Senha) {
      // Login bem-sucedido
      res.send('Login realizado com sucesso!');
    } else {
      // Dados inválidos
      res.status(401).send('Login ou senha incorretos.');
    }
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    res.status(500).send('Erro ao realizar o login.');
  }
});

// Exportando o roteador
module.exports = router;

