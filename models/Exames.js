const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Exames = sequelize.define('Exames', {
    data: {
      type: DataTypes.DATE,
      primaryKey: true,
      allowNull: false,
    },
    Tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Prontuario: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
  });
//colocar as ligações aqui

  return Exames;
};

