import express from "express";// importa o Express instalado

const app = express();//Cria uma aplicação Express

app.get("/", (req, res) => {
    res.send("Olá, Meu primerio backend!");
});

export default app;//Permite que outros arquivos utilize essa aplicação