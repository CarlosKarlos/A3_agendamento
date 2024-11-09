// models/Horarios.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Horarios = sequelize.define('Horarios', {
    idHorario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    data_hora: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    medicoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Medicos',
        key: 'idMedico',
      },
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Disponível',
    },
  });

  Horarios.associate = (models) => {
    Horarios.belongsTo(models.Medico, { foreignKey: 'medicoId' });
    Horarios.hasMany(models.Consulta, { foreignKey: 'horarioId' });
  };

  return Horarios;
};
