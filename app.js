const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const { sequelize, Usuario } = require('./models/index'); // Certifique-se de que isso esteja correto
const usuarioRoutes = require('./routes/usuario');
const examesRoutes = require('./routes/exames');
const filaRoutes = require('./routes/fila');
const cancelamentoRoutes = require('./routes/cancelamento');
const realizadoRoutes = require('./routes/realizado');

const app = express();

// Configurações do Handlebars
app.engine('handlebars', handlebars.engine({
  defaultLayout: 'main',
  runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
  },
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware para tratar dados do formulário
app.use(express.urlencoded({ extended: true }));

// Usando rotas
app.use('/usuarios', usuarioRoutes);
app.use('/exames', examesRoutes);
app.use('/fila', filaRoutes);
app.use('/cancelamento', cancelamentoRoutes);
app.use('/realizado', realizadoRoutes);

// Exibir o formulário de cadastro
app.get('/usuarios/cadastrar', (req, res) => {
  res.render('formulario');
});



// Processar o cadastro
app.post('/usuarios/cadastrar', (req, res) => {
  const { cpf, Nome, login, Senha, tipo_usuario } = req.body;

  Usuario.create({
    cpf,
    Nome,
    login,
    Senha,
    tipo_usuario
  })
  .then(() => {
    return Usuario.findAll();
  })
  .then((usuarios) => {
    res.render('formulario', {
      message: 'Usuário cadastrado com sucesso!',
      usuarios: usuarios
    });
  })
  .catch((erro) => {
    console.error('Erro ao cadastrar usuário:', erro);
    res.render('formulario', {
      error: 'Erro ao cadastrar o usuário: ' + erro
    });
  });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});