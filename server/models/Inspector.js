const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const Trabalhador = require("./Trabalhador");

const Inspector = db.define("Inspector", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    trabalhadorID: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'trabalhador',
            },
            key: 'id'
        },
        allowNull: false
    },
});

Trabalhador.hasOne(Inspector, {
    foreignkey: 'trabalhadorID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Inspector.belongsTo(Trabalhador);

module.exports = Inspector;