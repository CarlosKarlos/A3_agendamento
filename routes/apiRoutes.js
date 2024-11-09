const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Definindo a rota para importar os dados da API externa
router.get('/importar-dados', apiController.importarDadosAPI);

module.exports = router;
