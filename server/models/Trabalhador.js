
const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");

const Trabalhador = db.define("Trabalhador", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cargo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  area_departamento: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  localizacao_office: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pessoaID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Pessoa',
          },
          key: 'id'
        },
        allowNull: false
      },
});

Trabalhador.hasOne(Pessoa,{
  foreignkey: 'pessoaID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Pessoa.belongsTo(Trabalhador);

module.exports = Pessoa;
