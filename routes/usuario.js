// routes/usuario.js
const express = require('express');
const router = express.Router();
const { Usuario, Medico } = require('../models');

router.post('/receber-usuario', async (req, res) => {
  const { cpf, Nome, login, tipo_usuario, especialidade } = req.body;

  try {
    // Adiciona ou atualiza o usuário na tabela Usuario
    const [usuario, created] = await Usuario.upsert({
      cpf,
      Nome,
      login,
      tipo_usuario
    });

    // Se o tipo_usuario for "medico", adiciona também na tabela Medico
    if (tipo_usuario.toLowerCase() === 'medico') {
      await Medico.upsert({
        usuario_cpf: cpf,
        especialidade: especialidade || 'A definir',  // Define especialidade ou valor padrão
      });
    }

    res.status(200).json({ message: "Dados do usuário processados com sucesso" });
  } catch (error) {
    res.status(400).json({ error: "Erro ao processar dados do usuário: " + error.message });
  }
});

module.exports = router;

