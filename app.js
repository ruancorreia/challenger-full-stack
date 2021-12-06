/*
Importando o modulo express

*/

const express = require("express");
const app = express();
const port = 3003;
const router = require("./src/routes")


//Importando os modulos 
const path = require("path");



// Definindo a view engine e configurando a pasta views
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));  // ( __dirname não é boa pratica pra utilização) 
app.use(express.static(path.resolve('src', 'public'))); 



//Habilitando JSON e configurando recebimento de formulario
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(router)

//Definindo a porta e a msgn do servidor

app.listen(port, ()=>{
    console.log (`O servidor foi iniciado na porta: ${port}...`)
});