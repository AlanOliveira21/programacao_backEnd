const express= require("express");
const app = express();

app.use(express.json());

let Alunos = [
    {id: 1, nome: "Adryan", curso: "BD"},
    {id: 2, nome: "Bruno", curso: "CC"},
    {id: 3, nome: "Bruna", curso: "ADS"},
    {id: 4, nome: "Victoria", curso: "SI"},
];

app.get("/", (req,res)=> {
    res.status(200).json({
        msg: "API funcionando"
    })
})