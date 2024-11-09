// models/Fila.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Fila = sequelize.define('Fila', {
    idFila: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.TEXT,
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

  Fila.associate = (models) => {
    Fila.belongsTo(models.Exame, { foreignKey: 'exameId' });
  };

  return Fila;
};


