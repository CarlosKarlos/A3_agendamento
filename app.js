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

app.get('/usuarios/cadastrado', (req, res)=>{
  res.render('cadastrado');
});

// Processar o cadastro
app.post('/usuarios/cadastrar', (req, res) => {
  const { cpf, Nome, login, Senha, tipo_usuario } = req.body;

  Usuario.create({
      cpf: cpf,
      Nome: Nome,
      login: login,
      Senha: Senha,
      tipo_usuario: tipo_usuario
  })
  .then(() => {
     // Após o cadastro, buscar todos os usuários
    return Usuario.findAll(); 
  })
  
  .then((usuarios) => {
    // Renderizar a página com a mensagem de sucesso e os usuários
    res.render('formulario', {
        message: 'Cadastrado com sucesso!',
        usuarios: usuarios // Passa os usuários para a view
    });
  
  })


  .catch((erro) => {
      console.error('Erro ao cadastrar usuário:', erro);
      res.send("Erro ao cadastrar o usuário: " + erro); // Retorna erro caso ocorra
  });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});