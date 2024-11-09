// models/Exame.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Exame = sequelize.define('Exame', {
    id_exame: {
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
    cpf_usuario: {
      type: DataTypes.STRING(14),
      references: {
        model: 'Usuarios',
        key: 'cpf',
      },
    },
  });

  Exame.associate = (models) => {
    Exame.belongsTo(models.Usuario, { foreignKey: 'cpf_usuario' });
    Exame.hasMany(models.Fila, { foreignKey: 'exame_id' });
    Exame.hasMany(models.Cancelamento, { foreignKey: 'exame_id' });
    Exame.hasMany(models.Realizado, { foreignKey: 'exame_id' });
  };

  return Exame;
};
