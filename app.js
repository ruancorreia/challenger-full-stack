/*
Importando e inicializando o modulo express
e definindo as variaveis necessarias
*/

const express = require("express");
const app = express();
const port = 3003;
const router = require("./routes")


//Importando os modulos 
const path = require("path");
const logger = require("morgan");


// Definindo a view engine e configurando a pasta views
app.set("view engine", "ejs");
app.set("view", path.resolve("src", "views"));  // ( __dirname não é boa pratica pra utilização) 

//Habilitando e adicionando Middlewares

// Habilitando log 
app.use(logger("dev"));

//Habilitando JSON e configurando recebimento de formulario
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(router)

//Definindo a porta e a msgn de criação

app.listen(port, ()=>{
    console.log (`O servidor foi iniciado na porta: ${port}...`)
});