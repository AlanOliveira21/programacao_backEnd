import livros from "../data/livros.js";

function listarLivros(req, res) {
    console.log(req.query);

    const publico = req.query.publico;
    const maxPaginas = req.query.qt_paginas;

    const livrosPorPublico = publico
        ? livros.filter((livro) => livro.publico === publico)
        : livros;

    const livrosFiltrados = livros.filter((livro) =>
         livro.publico === publico && livro.qt_paginas <= maxPaginas);

    res.json(livrosFiltrados);
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

    if(typeof(qt_paginas) !== "number" || qt_paginas <= 0) {
        return res.status(400).json({
            msg: "A quantidade de páginas deve ser um número maior que zero."
        })
    }

    if(!titulo || !publico){
        return res.status(400).json({
            msg: "Todos os campos devem ser preechido"
        });
    }

    const novoId = livros.length > 0 ? livros[livros.length -1].id + 1 : 1;

    const novoLivro = {
        id: novoId,
        titulo,
        publico,
        qt_paginas
    }

    livros.push(novoLivro);

    res.status(201).json(novoLivro);
}

function atualizarLivro(req, res) {

    const id = Number(req.params.id);

    const livro = livros.find((livro) =>
        livro.id === id
    );

    if(!livro){
        return res.status(404).json({
            msg: "Livro não encontrado."
        });
    }

    const {titulo, publico, qt_paginas} = req.body;

    livro.titulo = titulo;
    livro.publico = publico;
    livro.qt_paginas = qt_paginas;

    res.status(200).json({
        msg: "Livro alterado"
    });
}

function deletarLivro(req, res) {
    const id = Number(req.params.id);

    const indiceLivro = livros.findIndex((livro) =>
        livro.id === id
    );

    if(indiceLivro === -1){
        return res.status(404).json({
            msg: "Livro não encontrado."
        });
    }

    livros.splice(indiceLivro, 1);

    res.send("Livro deletado.");
}

export {
    listarLivros,
    buscarLivroPorId,
    cadastrarLivro,
    atualizarLivro,
    deletarLivro
};
