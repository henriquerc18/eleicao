const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"pg123456admin",
    database: "politica"
});

module.exports = conexao