
const { Sequelize, DataTypes } = require("sequelize");
const db = require("../models/UserModel");

const Pessoa = db.define("Pessoa", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
   bairro: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
   descricao_casa: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
   rua: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  provincia: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  nbi: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  data_nascimento: {
    type: DataTypes.DATE,
    allowNull: true,
    unique: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    unique: false,
  },
   updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    unique: false,
  },
},{});

module.exports = Pessoa;
console.log(Pessoa === db.models.Pessoa);