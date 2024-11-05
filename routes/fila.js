const express = require('express');
const router = express.Router();

// Rota de exemplo
router.get('/', (req, res) => {
    res.send('Rota da fila');
});

// Exportando o roteador
module.exports = router;
