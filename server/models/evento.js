const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");

const Evento = db.define("evento", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tema: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  url_img: {
    type: Sequelize.STRING,
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
});

module.exports = Evento;
