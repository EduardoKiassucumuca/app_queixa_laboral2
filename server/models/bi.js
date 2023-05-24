'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BI extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BI.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    numeroBI: DataTypes.STRING,
    naturalidade: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    sexo: DataTypes.STRING,
    altura: DataTypes.FLOAT,
    emitido_em: DataTypes.DATE,
    valido_ate: DataTypes.DATE,
    enderecoID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BI',
  });
  return BI;
};