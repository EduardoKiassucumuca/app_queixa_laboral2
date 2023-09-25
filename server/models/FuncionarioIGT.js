const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const Trabalhador = require("./Trabalhador.js");

const funcionarioIGT = db.define("funcionarioigt", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    trabalhadorID: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'Trabalhador',
            },
            key: 'id'
        },
        allowNull: false
    },
});

Trabalhador.hasOne(funcionarioIGT, {
    foreignkey: 'trabalhadorID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

funcionarioIGT.belongsTo(Trabalhador);


module.exports = funcionarioIGT;