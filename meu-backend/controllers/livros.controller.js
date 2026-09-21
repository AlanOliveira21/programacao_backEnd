import livros from "../data/livros.js";

function listarLivros(req, res) {
    console.log(req.query);

    res.json(livros);
}

function buscarLivroPorId(req, res) {
    
    const id = Number(req.params.id);

    const livro = livros.find((livro) =>
        livro.id === id
    );

    if(!livro){
        return res.status(404).json({
            msg: "Livro não encontrado."
        });
    }

    res.json(livro);
}

function cadastrarLivro(req, res) {
    const { titulo, publico, qt_paginas} = req.body;

    const novoId = livros.length > 0 ? livros[livros.length -1].id + 1 : 1;

    const novoLivro = {
        id: novoId,
        titulo,
        publico,
        qt_paginas
    }

    livros.push(novoLivro);

    res.send("Livro recebido!");
}

function atualizarLivro(req, res) {
    
    const {titulo, publico, qt_paginas} = req.body;

    const id = Number(req.params.id);

    const livro = livros.find((livro) =>
        livro.id === id
    );

    if(!livro){
        return res.status(404).json({
            msg: "Livro não encontrado."
        });
    }

    livro.titulo = titulo;
    livro.publico = publico;
    livro.qt_paginas = qt_paginas;

    res.send("Livro alterado");
}

function deletarLivro(req, res) {
    const id = Number(req.params.id);

    const livro = livros.findIndex((livro) =>
        livro.id === id
    );

    if(livro === -1){
        return res.status(404).json({
            msg: "Livro não encontrado."
        });
    }

    livros.splice(livro, 1);

    res.send("Livro deletado.");
}

export {
    listarLivros,
    buscarLivroPorId,
    cadastrarLivro,
    atualizarLivro,
    deletarLivro
};
