const { Sequelize } = require("sequelize");
const db = require("../config/conexao.js");

const BI = db.define("BI", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  emitido_em: {
    type: Sequelize.DATE,
    allowNull: false,
  },
   valido_ate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  file: {
    type: Sequelize.STRING,
    allowNull: false,
  },
   numeroBI: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false,
  },
});

module.exports = BI;
