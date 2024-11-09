const axios = require('axios');
const { Usuario, Medico } = require('../models'); // Importando os modelos Usuario e Medico

// Função que lida com a importação de dados da API externa
async function importarDadosAPI(req, res) {
  try {
    // Fazendo a requisição para a API externa
    const response = await axios.get('https://api.externa.com/usuarios');
    
    if (!response.data || !Array.isArray(response.data)) {
      // Verificando se os dados retornados são válidos
      return res.status(400).json({ error: 'A API não retornou os dados corretamente' });
    }

    const dadosAPI = response.data; // Supondo que seja um array de usuários

    // Iterando sobre os dados e inserindo no banco de dados
    for (const usuarioData of dadosAPI) {
      const { cpf, nome, login, senha, tipo_usuario, especialidade } = usuarioData;

      // Verificando se os dados essenciais estão presentes
      if (!cpf || !nome || !login || !senha || !tipo_usuario) {
        console.log(`Dados incompletos para o usuário ${nome}, pulando.`);
        continue; // Pula a inserção do usuário se os dados estiverem incompletos
      }

      // Verificando se o usuário já existe no banco de dados
      const usuarioExistente = await Usuario.findOne({ where: { cpf } });

      if (!usuarioExistente) {
        // Inserindo o usuário no banco de dados
        await Usuario.create({
          cpf,
          nome,
          login,
          senha, // A senha já protegida pela API externa
          tipo_usuario,
        });
        console.log(`Usuário ${nome} inserido com sucesso!`);
      } else {
        console.log(`Usuário ${nome} já existe, pulando inserção.`);
      }

      // Se o tipo_usuario for "medico", também atualiza a tabela Medico
      if (tipo_usuario.toLowerCase() === 'medico') {
        // Verificando se já existe um médico com o mesmo CPF
        const medicoExistente = await Medico.findOne({ where: { usuario_cpf: cpf } });

        if (!medicoExistente) {
          // Se o médico não existir, inserimos o novo registro
          await Medico.create({
            usuario_cpf: cpf,
            especialidade: especialidade || 'A definir', // A especialidade virá da API externa
          });
          console.log(`Médico com CPF ${cpf} inserido com sucesso!`);
        } else {
          console.log(`Médico com CPF ${cpf} já existe, pulando inserção.`);
        }
      }
    }

    // Enviando resposta de sucesso para o cliente
    res.status(200).json({ message: 'Dados importados com sucesso!' });
  } catch (error) {
    console.error('Erro ao importar dados da API:', error.message);
    res.status(500).json({ error: 'Erro ao importar dados da API externa. ' + error.message });
  }
}

// Exportando as funções do controlador
module.exports = {
  importarDadosAPI,
};
