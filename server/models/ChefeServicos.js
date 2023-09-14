const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const Trabalhador = require("./Trabalhador");

const ChefeServicos = db.define("ChefeServicos", {
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
                tableName: 'Trabalhador',
            },
            key: 'id'
        },
        allowNull: false
    },
});

/*ChefeServicos.hasOne(Trabalhador, {
    foreignkey: 'trabalhadorID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Trabalhador.belongsTo(ChefeServicos);
*/
module.exports = ChefeServicos;