const express = require('express');
const cors    = require('cors');
const morgan  = require('morgan');
const dotenv  = require('dotenv').config();
const logger  = require('./utils/logger');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.post('/cart', (req, res)=>{
    logger.info('Recebendo dados de carrinho abandonado ...');
    console.log(req.body);
});

app.post('/recommendation', (req, res)=>{
    logger.info('Recebendo retorno de dados ...');
    console.log(req.body);
});

module.exports = app;