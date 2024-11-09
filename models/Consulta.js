// models/Consulta.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Consulta = sequelize.define('Consulta', {
    idConsulta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pendente',
    },
    usuarioCpf: {
      type: DataTypes.STRING(14),
      references: {
        model: 'Usuarios',
        key: 'cpf',
      },
    },
    horarioId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Permite null até que o médico defina o horário
      references: {
        model: 'Horarios',
        key: 'idHorario',
      },
    },
  });

  Consulta.associate = (models) => {
    Consulta.belongsTo(models.Usuario, { foreignKey: 'usuarioCpf' });
    Consulta.belongsTo(models.Horarios, { foreignKey: 'horarioId' });
  };

  return Consulta;
};

