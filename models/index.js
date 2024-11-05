// models/index.js
const sequelize = require('../config/database');
const UsuarioModel = require('./Usuario');
const ExamesModel = require('./Exames');
const FilaModel = require('./Fila');
const CancelamentoModel = require('./Cancelamento');
const RealizadoModel = require('./Realizado');

// Inicializando os modelos
const Usuario = UsuarioModel(sequelize);
const Exames = ExamesModel(sequelize);
const Fila = FilaModel(sequelize);
const Cancelamento = CancelamentoModel(sequelize);
const Realizado = RealizadoModel(sequelize);


// Sincronizando o banco de dados
sequelize.sync({ force: true }) // use { force: false } em produção
    .then(() => console.log('Banco de dados sincronizado com sucesso.'))
    .catch(error => console.error('Erro ao sincronizar o banco de dados:', error));

// Exportando os modelos e a conexão
module.exports = {
    sequelize,
    Usuario,
    Exames,
    Fila,
    Cancelamento,
    Realizado,
};


