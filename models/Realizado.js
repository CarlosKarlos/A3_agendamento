// models/Realizado.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Realizado = sequelize.define('Realizado', {
    id_realizado: {
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
    exame_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Exames',
        key: 'id_exame',
      },
    },
  });

  Realizado.associate = (models) => {
    Realizado.belongsTo(models.Exame, { foreignKey: 'exame_id' });
  };

  return Realizado;
};

