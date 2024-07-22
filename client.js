const knex = require('knex')({
    client: 'pg', // Define o cliente do banco de dados como PostgreSQL
    connection: {
        host: "babar.db.elephantsql.com", // Endereço completo do host do banco de dados PostgreSQL
        port: 5432, // Porta padrão do PostgreSQL
        user: "vxynetcm", // Nome de usuário para autenticação no banco de dados
        password: "VpfjEwVVR3Uhuaz6Qtmi48smkBJX1kmb", // Senha associada ao usuário
        database: "vxynetcm", // Nome do banco de dados PostgreSQL que será utilizado
        ssl: { rejectUnauthorized: false }, // Configuração SSL para conexão segura ao banco de dados (desabilitando a verificação de certificado)
    }
});

module.exports = knex; // Exporta a instância do Knex configurada para ser usada em outros módulos
