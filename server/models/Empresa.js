const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const Endereco = require('../models/endereco');
const Conta = require("./Conta.js");

const Empresa = db.define("Empresa", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nif: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    designacao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    url_website: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    enderecoID: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'Endereco',
            },
            key: 'id'
        },
        allowNull: false
    },
    fk_conta: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'Conta',
            },
            key: 'id'
        },
        allowNull: false
    },
});

Endereco.hasOne(Empresa, {
    foreignkey: 'enderecoID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Empresa.hasOne(Conta, {
    foreignkey: 'fk_conta',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Empresa.belongsTo(Endereco);

module.exports = Empresa;