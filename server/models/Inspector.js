const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const FuncionarioIGT = require("./FuncionarioIGT");

const Inspector = db.define("Inspector", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    funcionarioIGTID: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'funcionarioigt',
            },
            key: 'id'
        },
        allowNull: false
    },
});

FuncionarioIGT.hasOne(Inspector, {
    foreignkey: 'funcionarioIGTID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Inspector.belongsTo(FuncionarioIGT);

module.exports = Inspector;