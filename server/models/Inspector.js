
const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const db = require("./Trabalhador");

const Inspector = db.define("Inspector", {
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

Inspector.hasOne(Trabalhador,{
  foreignkey: 'trabalhadorID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Trabalhador.belongsTo(Inspector);

module.exports = Inspector;
