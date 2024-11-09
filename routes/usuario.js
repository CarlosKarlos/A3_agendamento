// routes/usuario.js
const express = require('express');
const router = express.Router();
const { Usuario } = require('../models');

router.post('/cadastrar', async (req, res) => {
  const { cpf, Nome, login, Senha, tipo_usuario } = req.body;

  try {
    // Cria o usuário na tabela Usuario
    const novoUsuario = await Usuario.create({
      cpf,
      Nome,
      login,
      Senha,
      tipo_usuario
    });

    res.render('formulario', { message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    res.render('formulario', { error: "Erro ao cadastrar usuário: " + error.message });
  }
});

module.exports = router;

