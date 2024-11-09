// models/Realizado.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Realizado = sequelize.define('Realizado', {
    idRealizado: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    data: {
      type: DataTypes.DATE,
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
        key: 'idExame',
      },
    },
  });

  Realizado.associate = (models) => {
    Realizado.belongsTo(models.Exame, { foreignKey: 'exameId' });
  };

  return Realizado;
};


