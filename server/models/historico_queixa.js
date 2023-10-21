const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");


const historico_queixa = db.define("historico_queixa", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    id_queixa: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
    },
    assunto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    facto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    modo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false,
    },
});

module.exports = historico_queixa;