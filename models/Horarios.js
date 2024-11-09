// models/Horarios.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Horarios = sequelize.define('Horarios', {
    id_horario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    data_hora: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    medico_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Medicos',
        key: 'id_medico',
      },
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Disponível',
    },
  });

  Horarios.associate = (models) => {
    Horarios.belongsTo(models.Medico, { foreignKey: 'medico_id' });
    Horarios.hasMany(models.Consulta, { foreignKey: 'horario_id' });
  };

  return Horarios;
};
