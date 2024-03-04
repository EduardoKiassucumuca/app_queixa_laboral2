const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const Duvida = require("./duvida.js");

const Comentario = db.define("comentario", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  comentario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  id_duvida: {
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: "duvida",
      },
      key: "id",
    },
    allowNull: false,
  },
});

Duvida.hasMany(Comentario, {
  foreignkey: "id_duvida",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Comentario.belongsTo(Duvida);

module.exports = Queixa;
