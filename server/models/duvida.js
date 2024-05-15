const { Sequelize } = require("sequelize");
const db = require("../config/conexao.js");

const Duvida = db.define("Duvida", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  assunto: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  resposta: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Duvida;
