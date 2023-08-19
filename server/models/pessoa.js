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
        allowNull: false,
    },
    nome_mae: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    naturalidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    altura: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado_civil: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    biID: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'BI',
            },
            key: 'id'
        },
        allowNull: false
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