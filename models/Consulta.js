// models/Consulta.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Consulta = sequelize.define('Consulta', {
    id_consulta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pendente',
    },
    usuario_cpf: {
      type: DataTypes.STRING(14),
      references: {
        model: 'Usuarios',
        key: 'cpf',
      },
    },
    horario_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Permite null até que o médico defina o horário
      references: {
        model: 'Horarios',
        key: 'id_horario',
      },
    },
  });

  Consulta.associate = (models) => {
    Consulta.belongsTo(models.Usuario, { foreignKey: 'usuario_cpf' });
    Consulta.belongsTo(models.Horarios, { foreignKey: 'horario_id' });
  };

  return Consulta;
};
