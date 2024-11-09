const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const { sequelize, Usuario } = require('./models/index'); 
const apiController = require('./controllers/apiController');
const configurarCronJob = require('./cronJobs/importarDadosAPI');
const usuarioRoutes = require('./routes/usuario');
const examesRoutes = require('./routes/exames');
const filaRoutes = require('./routes/fila');
const cancelamentoRoutes = require('./routes/cancelamento');
const realizadoRoutes = require('./routes/realizado');
const apiRoutes = require('./routes/apiRoutes');

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
app.use('/api', apiRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/exames', examesRoutes);
app.use('/fila', filaRoutes);
app.use('/cancelamento', cancelamentoRoutes);
app.use('/realizado', realizadoRoutes);

// Chama a função de importação de dados ao iniciar o servidor
async function importarDadosAoIniciar() {
  try {
    console.log('Iniciando a importação de dados da API...');
    await apiController.importarDadosAPI(); // Chama a função para importar os dados
    console.log('Importação de dados concluída com sucesso!');
  } catch (error) {
    console.error('Erro ao importar dados no início:', error);
  }
}

importarDadosAoIniciar();  // Chama a função de importação quando o servidor for iniciado

configurarCronJob();


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});