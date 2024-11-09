// models/Cancelamento.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Cancelamento = sequelize.define('Cancelamento', {
    idCancelamento: {
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
    exameId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Exames',
        key: 'id_exame',
      },
    },
  });

  Cancelamento.associate = (models) => {
    Cancelamento.belongsTo(models.Exame, { foreignKey: 'exameId' });
  };

  return Cancelamento;
};
