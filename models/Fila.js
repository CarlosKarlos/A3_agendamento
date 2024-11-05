const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Fila = sequelize.define('Fila', {
    Id_fila: {
      type: DataTypes.STRING(11),
      primaryKey: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    exame: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  });

//colocar as ligações aqui

  return Fila;
};

