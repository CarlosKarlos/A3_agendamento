// models/Cancelamento.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Cancelamento = sequelize.define('Cancelamento', {
    id_cancelamento: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exame_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Exames',
        key: 'id_exame',
      },
    },
  });

  Cancelamento.associate = (models) => {
    Cancelamento.belongsTo(models.Exame, { foreignKey: 'exame_id' });
  };

  return Cancelamento;
};
