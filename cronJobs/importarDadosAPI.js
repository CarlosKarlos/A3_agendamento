// cronJobs/importarDadosAPI.js
const cron = require('node-cron');
const apiController = require('../controllers/apiController'); // Importando o controlador

// Função para configurar o cron job
function configurarCronJob() {
  // Agendando a execução do cron job para rodar a toda meia hora
  cron.schedule('*/30 * * * *', async () => {
    console.log('Iniciando a importação de dados da API...');

    // Chama a função de importação de dados no controlador
    try {
      await apiController.importarDadosAPI();
      console.log('Importação de dados concluída com sucesso!');
    } catch (error) {
      console.error('Erro ao importar dados:', error);
    }
  });
}

// Exportando a função de configuração do cron job
module.exports = configurarCronJob;
