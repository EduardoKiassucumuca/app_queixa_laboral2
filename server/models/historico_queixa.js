const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const Queixa = require("./Queixa.js");
const moment = require("moment");

const historico_queixa = db.define("historico_queixa", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  assunto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  facto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  modo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data: {
    type: Sequelize.DATEONLY,
    get: function () {
      return moment.utc(this.getDataValue("data")).format("YYYY-MM-DD H:M");
    },
  },
  queixaID: {
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: "Queixa",
      },
      key: "id",
    },
    allowNull: true,
  },
  file3: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  url_file_contrato: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  file4: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  file5: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  file6: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

Queixa.hasOne(historico_queixa, {
  foreignkey: "queixaID",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

historico_queixa.belongsTo(Queixa);

module.exports = historico_queixa;
