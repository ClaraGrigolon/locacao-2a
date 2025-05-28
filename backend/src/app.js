const express = require('express');
const http = require('http');

//inicializar aplicação Express
const app = express();
const server = http.createServer(app);

//inicializar conexões
const inicializar = async () => {
    try{
        const PORT = 3000;
        server.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao inicializar o Servidor', error);
    }
};

//executar o inicializar
inicializar();

//exportar os modelos app, server
module.exports = {app, server};