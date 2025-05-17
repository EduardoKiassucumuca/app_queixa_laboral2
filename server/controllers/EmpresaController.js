const Empresa = require("../models/Empresa");

module.exports = {
  async store(
    _nome_empresa,
    _nif,
    _designacao,
    _email,
    _url_website,
    _enderecoID,
    _fk_conta,
    _tipo
  ) {
    try {
      if (
        _nome_empresa &&
        _nif &&
        _designacao &&
        _email &&
        _url_website &&
        _enderecoID &&
        _fk_conta &&
        _tipo
      ) {
        const empresaCriada = await Empresa.create({
          nome_empresa: _nome_empresa,
          nif: _nif,
          designacao: _designacao,
          email: _email_empresa,
          url_website: _website_empresa,
          enderecoID: novoEnderecoEmp.id,
          fk_conta: _fk_conta,
          tipo: _tipo,
        });
        return empresaCriada;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao registrar a Empresa/Empregador");
    }
  },
};
