'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dados_pessoais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dados_pessoais.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    bairro: DataTypes.STRING,
    rua: DataTypes.STRING,
    descricao_casa: DataTypes.STRING,
    provincia: DataTypes.STRING,
    nBI: DataTypes.STRING,
    data_nascimento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'dados_pessoais',
  });
  return dados_pessoais;
};