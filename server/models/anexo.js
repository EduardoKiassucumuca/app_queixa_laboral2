const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const Queixa = require("../models/Queixa.js");

const Anexo = db.define("Anexo", {
  id_anexo: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  filename: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  path: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  extensao: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  fk_queixa: {
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: "queixa",
      },
      key: "id",
    },
    allowNull: false,
  },
});

Queixa.hasOne(Anexo, {
  foreignkey: "fk_queixa",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Anexo.belongsTo(Queixa);

module.exports = Anexo;
