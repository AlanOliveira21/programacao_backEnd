import express from "express";

import {
    listarLivros, 
    buscarLivroPorId, 
    cadastrarLivro,
    atualizarLivro,
    deletarLivro
} from "../controllers/livros.controller.js";

const router = express.Router();

router.get("/livros", listarLivros);

router.get("/livros/:id", buscarLivroPorId);

router.post("/livros", cadastrarLivro);

router.put("/livros/:id", atualizarLivro);

router.delete("/livro/:id", deletarLivro);

export default router;