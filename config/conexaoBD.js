/*const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"pg123456admin",
    database: "politica"
});

module.exports = conexao*/

const { Pool } = require('pg')
const pool = new Pool({
  user: '{root}',
  host: '{host}',
  database: '{politica}',
  password: '{pg123456admin}',
  port: {5432},
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res) 
  pool.end() 
})

/*const { Conexao } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const conexao = new Conexao({
  connectionString: process.env.DATABASE_URL
});

conexao.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => conexao.query(text, params),
};*/