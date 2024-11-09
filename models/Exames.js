// models/Exame.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Exame = sequelize.define('Exame', {
    idExame: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Tipo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Prontuario: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    cpfUsuario: {
      type: DataTypes.STRING(14),
      references: {
        model: 'Usuarios',
        key: 'cpf',
      },
    },
  });

  Exame.associate = (models) => {
    Exame.belongsTo(models.Usuario, { foreignKey: 'cpfUsuario' });
    Exame.hasMany(models.Fila, { foreignKey: 'exameId' });
    Exame.hasMany(models.Cancelamento, { foreignKey: 'exameId' });
    Exame.hasMany(models.Realizado, { foreignKey: 'exameId' });
  };

  return Exame;
};
