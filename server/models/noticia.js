const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");

const Noticia = db.define("noticia", {
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
  url_img_noticia: {
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
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Noticia;
