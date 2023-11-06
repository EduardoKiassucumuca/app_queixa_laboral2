const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const Queixa = require("./Queixa");

const Nota = db.define("nota", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    queixaID: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'Queixa',
            },
            key: 'id'
        },
        allowNull: false
    },
    nota: {
        type: Sequelize.STRING,
        allowNull: false,
      },
});

Queixa.hasOne(Nota, {
    foreignkey: 'queixaID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Nota.belongsTo(Queixa);

module.exports = Nota;