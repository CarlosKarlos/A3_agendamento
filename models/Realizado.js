const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Realizado = sequelize.define('Realizado', {
    data: {
      type: DataTypes.DATE,
      primaryKey: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    exame: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

//colocar as ligações aqui
  return Realizado;
};

