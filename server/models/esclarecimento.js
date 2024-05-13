const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const Duvida = require("./duvida.js");
const Inspector = require("./Inspector.js");

const Esclarecimento = db.define("Esclarecimento", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  resposta: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  inquietacao: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  duvidaID: {
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: "duvida",
      },
      key: "id",
    },
    allowNull: false,
  },

  inspectorID: {
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: "Inspector",
      },
      key: "id",
    },
    allowNull: true,
  },
});

Duvida.hasMany(Esclarecimento, {
  foreignkey: "duvidaID",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Inspector.hasMany(Esclarecimento, {
  foreignkey: "inspectorID",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Esclarecimento.belongsTo(Inspector);
Esclarecimento.belongsTo(Duvida);

module.exports = Esclarecimento;
