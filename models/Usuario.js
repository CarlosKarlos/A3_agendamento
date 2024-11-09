// models/Usuario.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Usuario = sequelize.define('Usuario', {
    cpf: {
      type: DataTypes.STRING(14),
      primaryKey: true,
      allowNull: false,
    },
    Nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    login: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
    },
    Senha: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    tipoUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Usuario.associate = (models) => {
    Usuario.hasOne(models.Medico, { foreignKey: 'usuarioCpf' });
  };

  return Usuario;
};
