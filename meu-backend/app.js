import express from "express";// importa o Express instalado

import livrosRouter from "./routes/livros.routes.js";

const app = express();//Cria uma aplicação Express

app.use(express.json());//middleware

app.use(livrosRouter);

app.get("/", (req, res) => {
    res.send("Olá, Meu primerio backend!");
});

export default app;//Permite que outros arquivos utilize essa aplicação

/*
req:

params -> informações presentes na URL
query -> parâmetros de consulta
body -> dados enviados no corpo
*/