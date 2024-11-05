// config/database.js
const { Sequelize } = require('sequelize');

// Configura o Sequelize com as informações do banco de dados
const sequelize = new Sequelize('agendamento', 'root', '280104', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
