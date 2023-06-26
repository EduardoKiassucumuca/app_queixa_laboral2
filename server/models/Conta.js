const { Sequelize } = require("sequelize");
const db = require("../config/conexao.js");
const Trabalhador = require("./Trabalhador.js");

const Conta = db.define("Conta", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
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

Conta.hasOne(Trabalhador, {
    foreignkey: 'fk_trabalhador',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Trabalhador.belongsTo(Conta);


module.exports = Conta;