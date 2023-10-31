const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const Inspector = require("./Inspector");

const Testemunha = db.define("Testemunha", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    inspectorID: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'Inspector',
            },
            key: 'id'
        },
        allowNull: false
    },
});

Inspector.hasOne(Testemunha, {
    foreignkey: 'inspectorID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Testemunha.belongsTo(Inspector);

module.exports = Testemunha;