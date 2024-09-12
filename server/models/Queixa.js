const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/conexao.js");
const Empresa = require("./Empresa.js");
const Trabalhador = require("./Trabalhador.js");
const Inspector = require("./Inspector.js");
const Recepcionista = require("./recepcionista.js");
const ChefeServicos = require("./ChefeServicos.js");
const Testemunha = require("./testemunha.js");
const funcionarioIGT = require("./FuncionarioIGT.js");

const Queixa = db.define("Queixa", {
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
  created_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  provincia: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  queixosoID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  queixanteID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  empresaID: {
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: "Empresa",
      },
      key: "id",
    },
    allowNull: false,
  },
  trabalhadorID: {
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: "Trabalhador",
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
  recepcionistaID: {
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: "Recepcionista",
      },
      key: "id",
    },
    allowNull: true,
  },
  funcionarioigtID: {
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: "funcionarioigt",
      },
      key: "id",
    },
    allowNull: true,
  },
  url_file_contrato: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  provincia: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  modo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  obs: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  url_file_acta: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  estado: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  multa: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  testemunhaID: {
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: "Testemunha",
      },
      key: "id",
    },
    allowNull: true,
  },
  file3: {
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

Empresa.hasMany(Queixa, {
  foreignkey: "empresaID",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Trabalhador.hasMany(Queixa, {
  foreignkey: "trabalhadorID",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Inspector.hasMany(Queixa, {
  foreignkey: "inspectorID",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Recepcionista.hasMany(Queixa, {
  foreignkey: "recepcionistaID",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

funcionarioIGT.hasMany(Queixa, {
  foreignkey: "funcionarioigtID",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Testemunha.hasMany(Queixa, {
  foreignkey: "testemunhaID",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Queixa.belongsTo(Empresa);
Queixa.belongsTo(Trabalhador);
Queixa.belongsTo(Inspector);
Queixa.belongsTo(Recepcionista);
Queixa.belongsTo(funcionarioIGT);
Queixa.belongsTo(Testemunha);

module.exports = Queixa;
