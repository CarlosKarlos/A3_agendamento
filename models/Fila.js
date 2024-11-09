// models/Fila.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Fila = sequelize.define('Fila', {
    id_fila: {
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
    exame_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Exames',
        key: 'id_exame',
      },
    },
  });

  Fila.associate = (models) => {
    Fila.belongsTo(models.Exame, { foreignKey: 'exame_id' });
  };

  return Fila;
};


