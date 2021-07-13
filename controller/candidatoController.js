const conexao = require('../config/conexaoBD')

exports.listar = (req, res) => {
    const sql = "SELECT * FROM candidato";

    conexao.query(sql, (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            res.json(rows)
        }
    })
}

exports.inserir = (req, res) => {
    //Obter o dado do request - nome e o preco
    const produto = req.body;
    
    //SQL
    const sql = "INSERT INTO candidato(nome, partido, numero) VALUES (?,?)"

    conexao.query(sql, [candidato.nome, candidato.partido, candidato.numero],
        (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            produto.id = rows.insertId;
            res.status(201).json(produto)
        }
    })
}

exports.buscarPorId = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM candidato WHERE id=?";

    conexao.query(sql, [id], (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            if(rows && rows.length > 0){
                res.json(rows[0])
            }
            else{ 
                res.status(404).json({"msg":"Candidato não encontrado"})
            }
        }
    })
}

exports.atualizar = (req, res) => {
    const id = req.params.id;
    const cand = req.body;

    const sql = `UPDATE candidato SET nome=?, partido=?, numero=? WHERE id=?`;
    conexao.query(sql, [cand.nome, cand.partido, cand.numero, id], (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            prod.id = +id; //Sinal de "+" -> converte String para number (ou usar parseInt)
            res.json(prod);
        }
    })
}

exports.deletar = (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM candidato WHERE id=?`;
    conexao.query(sql, [id], (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            if(rows.affectedRows)
            res.json({"msg": `Candidato ${id} removido com sucesso`});
        }
    })
}