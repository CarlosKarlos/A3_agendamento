# A3 Agendamento

Este projeto é uma aplicação de agendamento que utiliza Node.js, Express e Sequelize para gerenciar usuários, exames, filas, cancelamentos e registros de exames realizados.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados MySQL.
- **Handlebars**: Motor de templates para renderizar HTML dinâmico.
- **Axios busca dados de uma API**: externa e os traz para o seu sistema, onde são manipulados e armazenados no banco de dados.
- **Cron Job**: mantém o sistema atualizado periodicamente, executando tarefas como importar dados da API externa a cada intervalo configurado.

## Pré-requisitos

Antes de executar o projeto, verifique se você tem as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (recomendado a versão LTS)
- [MySQL](https://www.mysql.com/) ou [XAMPP](https://www.apachefriends.org/index.html) (para um ambiente local de banco de dados)
- XAMP(não testado)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/CarlosKarlos/A3_agendamento.git

  ## Navegue até o diretório do projeto:


- navegar até o arquivo usando CMD
- cd A3_agendamento

  ## instale dependencias

  - npm install exemplo

  ## Inicie o servidor:


-Para iniciar sua aplicação normalmente, use:
- **npm start**


**Para desenvolvimento, onde o servidor reinicia automaticamente em caso de alterações, use** : npm run dev

