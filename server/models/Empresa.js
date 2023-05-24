
const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");

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
});

Empresa.hasOne(Endereco,{
  foreignkey: 'enderecoID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Endereco.belongsTo(Empresa);

module.exports = Pessoa;
