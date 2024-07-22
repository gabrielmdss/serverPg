const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv');
const knex = require('./client')

dotenv.config();

const app = express();

app.use(cors())
app.use(express.json())

app.listen(3000, console.log('Servidor rodando na porta 3000...'))

app.get('/notas',  async (req,res)=>{
    try {
        const notas = await knex('notas').returning('*').debug();
        return res.status(200).json({notas});
    } catch (error) {
        return res.status(500).json({mensagem: 'falhou'})
    }
});

app.post('/notas', async (req,res) => {

    const {titulo, conteudo} = req.body;

    try {

        const notas = {
            titulo,
            conteudo
        };

        const notaCriada = await knex('notas').insert({titulo: titulo, conteudo: conteudo}).returning('*');

        return res.status(200).json({notaCriada});

        
    } catch (error) {
        return res.status(500).json({mensagem: 'falhou'})
    }
})


