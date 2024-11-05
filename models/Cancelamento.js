const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Cancelamento = sequelize.define('Cancelamento', {
    data: {
      type: DataTypes.DATE,
      primaryKey: true,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
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
  return Cancelamento;
};
