const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");

const Artigo = db.define("artigo", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  url_artigo: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  estado: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Artigo;
