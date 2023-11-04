const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const Queixa = require('./Queixa');
const Empresa = require('./Empresa');
const Trabalhador = require("./Trabalhador")


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
    fk_empregador: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'Empresa',
            },
            key: 'id'
        },
        allowNull: true
    },
    fk_trabalhador: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'Trabalhador',
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
    foreignkey: 'fk_trabalhador',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Empresa.hasOne(Reuniao, {
    foreignkey: 'fk_empregador',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Reuniao.belongsTo(Queixa);
Reuniao.belongsTo(Trabalhador);
Reuniao.belongsTo(Empresa);

module.exports = Reuniao;