const { Sequelize } = require("sequelize");
const db = require("../config/conexao.js");

const Endereco = db.define("Endereco", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    rua: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    edificio: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    casa: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    provincia: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone_principal: {
        type: Sequelize.INTEGER(9),
        allowNull: false,
    },
    telefone_alternativo: {
        type: Sequelize.INTEGER(9),
        allowNull: true,
    },
});

module.exports = Endereco;