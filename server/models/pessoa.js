const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const Endereco = require('./endereco');
const BI = require('./bi');

const Pessoa = db.define("Pessoa", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sobrenome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    nome_pai: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nome_mae: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    naturalidade: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    altura: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    estado_civil: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    biID: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'BI',
            },
            key: 'id'
        },
        allowNull: true
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
});

BI.hasOne(Pessoa, {
    foreignkey: 'biID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Pessoa.hasOne(Endereco, {
    foreignkey: 'enderecoID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Pessoa.belongsTo(BI);
Endereco.belongsTo(Pessoa);

module.exports = Pessoa;