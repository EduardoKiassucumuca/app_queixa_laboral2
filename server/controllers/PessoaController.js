const Conta = require("../models/Conta");
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
      nome,
      sobrenome,
      bairro,
      rua,
      casaEdificio,
      telefone_principal,
      telefone_alternativo,
      numeroBI,
      emitidoEm,
      validoAte,
      naturalidade,
      altura,
      estado_civil,
      data_nascimento,
      genero,
      cargo,
      departamento,
      email,
      provincia,
      biID,
      pessoaID,
      enderecoID,
      trabalhadorID,
      contaID,
    } = req.body;
    const fileBI = req.files["fileBI"][0].path.split("/")[1];

    await Pessoa.update(
      {
        nome: nome,
        sobrenome: sobrenome,
        altura: altura,
        naturalidade: naturalidade,
        sexo: genero,
        estado_civil: estado_civil,
        data_nascimento: data_nascimento,
        naturalidade: naturalidade,
      },
      {
        where: {
          id: pessoaID,
        },
      }
    );
    await BI.update(
      {
        numeroBI: numeroBI,
        emitido_em: emitidoEm,
        valido_ate: validoAte,
      },
      {
        where: {
          id: biID,
        },
      }
    );
    await Endereco.update(
      {
        bairro: bairro,
        rua: rua,
        casa: casaEdificio,
        provincia: provincia,
        telefone_principal: telefone_principal,
        telefone_alternativo: telefone_alternativo,
      },
      {
        where: {
          id: enderecoID,
        },
      }
    );
    await Trabalhador.update(
      {
        cargo: cargo,
        area_departamento: departamento,
      },
      {
        where: {
          id: trabalhadorID,
        },
      }
    );
    await Conta.update(
      {
        email: email,
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
};
