const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const Queixa = require('./Queixa.js');
const Trabalhador = require("./Trabalhador.js");
const Empresa = require("./Empresa.js");

const Reuniao = db.define("reuniao", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    assunto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    local: {
        type: DataTypes.STRING,
        allowNull: false,
       
    },
    data: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    obs: {
        type: DataTypes.STRING,
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
        allowNull: true
    },
    trabalhadorID: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'Trabalhador',
            },
            key: 'id'
        },
        allowNull: true
    },
    empresaID: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'Empresa',
            },
            key: 'id'
        },
        allowNull: true
    },
});

Queixa.hasOne(Reuniao, {
    foreignkey: 'queixaID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Trabalhador.hasOne(Reuniao, {
    foreignkey: 'trabalhadorID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Empresa.hasOne(Reuniao, {
    foreignkey: 'empresaID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Reuniao.belongsTo(Queixa);
Reuniao.belongsTo(Trabalhador);
Reuniao.belongsTo(Empresa);

module.exports = Reuniao;