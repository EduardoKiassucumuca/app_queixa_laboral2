const Conta = require("../models/Conta");
const Empresa = require("../models/Empresa");
const Trabalhador = require("../models/Trabalhador");
const BI = require("../models/bi");
const Endereco = require("../models/endereco");
const Pessoa = require("../models/pessoa");

module.exports = {
  async index(req, res) {
    try {
      const pessoas = await Pessoa.findAll({
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "bairro",
          "descricao_casa",
          "rua",
          "nbi",
          "provincia",
          "data_nascimento",
        ],
      });
      return res.json(pessoas);
    } catch (error) {
      console.log("Error", error);
    }
  },
  async store(req, res) {
    const { nome } = req.params;
    const { sobrenome } = req.params;
    const pessoa = await Pessoa.create({
      nome: "nome",
      sobrenome: "sobrenome",
      createdAt: "2023-04-05 20:53:50",
      updatedAt: "2023-04-05 20:53:50",
    });
    return res.status(200).send({
      status: 1,
      message: "Pessoa Registrada com sucesso!",
      pessoa,
    });
  },
  async update(req, res) {
    const {
      _nome,
      _sobrenome,
      _bairro,
      _rua,
      _casaEdificio,
      _telefone_principal,
      _telefone_alternativo,
      _BI,
      _emitidoEm,
      _validoAte,
      _naturalidade,
      _altura,
      _estado_civil,
      _data_nascimento,
      _genero,
      _cargo,
      _departamento,
      _email,
      _provincia,
      biID,
      pessoaID,
      enderecoID,
      trabalhadorID,
      contaID,
    } = req.body;
    let fileBI;
    if (
      req?.files &&
      req.files["fileBI"] &&
      req.files["fileBI"][0] &&
      req.files["fileBI"][0].path
    ) {
      const filePath = req.files["fileBI"][0].path;
      const pathParts = filePath.split("/");
      if (pathParts.length > 1) {
        fileBI = pathParts[1];
      }
    }
    await Pessoa.update(
      {
        nome: _nome,
        sobrenome: _sobrenome,
        altura: _altura,
        naturalidade: _naturalidade,
        sexo: _genero,
        estado_civil: _estado_civil,
        data_nascimento: _data_nascimento,
        naturalidade: _naturalidade,
      },
      {
        where: {
          id: pessoaID,
        },
      }
    );
    await BI.update(
      {
        numeroBI: _BI,
        emitido_em: _emitidoEm,
        valido_ate: _validoAte,
        file: fileBI,
      },
      {
        where: {
          id: biID,
        },
      }
    );
    await Endereco.update(
      {
        bairro: _bairro,
        rua: _rua,
        casa: _casaEdificio,
        provincia: _provincia,
        telefone_principal: _telefone_principal,
        telefone_alternativo: _telefone_alternativo,
      },
      {
        where: {
          id: enderecoID,
        },
      }
    );
    await Trabalhador.update(
      {
        cargo: _cargo,
        area_departamento: _departamento,
      },
      {
        where: {
          id: trabalhadorID,
        },
      }
    );
    await Conta.update(
      {
        email: _email,
      },
      {
        where: {
          id: contaID,
        },
      }
    );
    return res.status(200).send({
      status: 1,
      message: "Perfil atualizada com sucesso!",
    });
  },
  async delete(req, res) {
    const { pessoa_id } = req.params;

    await Pessoa.destroy({
      where: {
        id: pessoa_id,
      },
    });
    return res.status(200).send({
      status: 1,
      message: "Pessoa apagada com sucesso!",
    });
  },
  async updateEmpresa(req, res) {
    const {
      _nome_empresa,
      _nif,
      _designacao,
      _bairroEmpresa,
      _localizacaoEmpresa,
      _ruaEmpresa,
      _website,
      _telefoneEmpresa,
      _emailEmpresa,
      _enderecoID,
      _empresaID,
      _edificio,
    } = req.body;

    await Endereco.update(
      {
        bairro: _bairroEmpresa,
        rua: _ruaEmpresa,
        telefone_principal: _telefoneEmpresa,
        email: _emailEmpresa,
        provincia: _localizacaoEmpresa,
        edificio: _edificio,
      },
      {
        where: {
          id: _enderecoID,
        },
      }
    );
    await Empresa.update(
      {
        nome_empresa: _nome_empresa,
        nif: _nif,
        designacao: _designacao,
        website: _website,
      },
      {
        where: {
          id: _empresaID,
        },
      }
    );

    return res.status(200).send({
      status: 1,
      message: "Dados da empresa atualizado com sucesso!",
    });
    return;
  },
};
