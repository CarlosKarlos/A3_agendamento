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
    tipo_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Usuario.associate = (models) => {
    Usuario.hasOne(models.Medico, { foreignKey: 'usuario_cpf' });
  };

  // Hook para verificar e adicionar à tabela Medico se tipo_usuario for "medico"
  Usuario.afterCreate(async (usuario, options) => {
    const { tipo_usuario, cpf } = usuario;
    if (tipo_usuario.toLowerCase() === 'medico') {
      await sequelize.models.Medico.create({
        usuario_cpf: cpf,
        especialidade: 'A definir', // Defina um valor padrão ou obtenha do `usuario` se necessário
      });
    }
  });

  return Usuario;
};
