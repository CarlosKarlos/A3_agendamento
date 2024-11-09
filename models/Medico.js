// models/Medico.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Medico = sequelize.define('Medico', {
    id_medico: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    especialidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario_cpf: {
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
    Medico.belongsTo(models.Usuario, { foreignKey: 'usuario_cpf' });
    Medico.hasMany(models.Horarios, { foreignKey: 'medico_id' });
  };

  return Medico;
};

