// models/Medico.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Medico = sequelize.define('Medico', {
    idMedico: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    especialidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuarioCpf: {
      type: DataTypes.STRING(14),
      references: {
        model: 'Usuarios',
        key: 'cpf',
      },
      allowNull: false,
      unique: true,
    },
  });

  Medico.associate = (models) => {
    Medico.belongsTo(models.Usuario, { foreignKey: 'usuarioCpf' });
    Medico.hasMany(models.Horarios, { foreignKey: 'medicoId' });
  };

  return Medico;
};

