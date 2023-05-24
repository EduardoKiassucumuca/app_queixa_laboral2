const Sequelize = require("sequelize");

const dbconfig = require("../config/db.js");

const conexao = new Sequelize(dbconfig);


//Pessoa.init(conexao);

try {
    conexao.authenticate();
    console.log("Conexão estabelecida com sucesso.");


} catch (error) {
    console.error("Impossivel conectar a base de dados", error);

}

module.exports = conexao;