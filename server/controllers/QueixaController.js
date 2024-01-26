const BI = require("../models/bi");
const Endereco = require("../models/endereco");
const Pessoa = require("../models/pessoa");
const Trabalhador = require("../models/Trabalhador");
const Empresa = require("../models/Empresa");
const Queixa = require("../models/Queixa");
const historico_queixa = require("../models/historico_queixa");
const Conta = require("../models/Conta");
const ContaController = require("./ContaController");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { where } = require("sequelize");
const { Op } = require("sequelize");
const path = require("path");
const Inspector = require("../models/Inspector");
const Testemunha = require("../models/testemunha");
const tentativa = 0;

module.exports = {
  async index(req, res) {
    let queixas = [];
    let queixa1 = "";
    let queixa2 = "";
    let queixas_emp = [];
    let queixas_trab = [];
    try {
      queixas = await Queixa.findAll({
        attributes: [
          "id",
          "assunto",
          "facto",
          "provincia",
          "estado",
          "empresaID",
          "trabalhadorID",
          "url_file_contrato",
          "nota",
        ],
        required: true,
        include: [
          {
            association: "Empresa",
            required: true,
            attributes: [
              "id",
              "nome_empresa",
              "nif",
              "designacao",
              "url_website",
              "email",
              "tipo",
            ],
          },

          {
            association: "Trabalhador",
            required: true,

            include: [
              {
                association: "Pessoa",
                required: true,
                include: [
                  {
                    association: "BI",
                    required: true,
                  },
                ],
              },
            ],
          },
        ],

        where: {
          [Op.or]: [
            { "$Trabalhador.tipo$": "queixoso" },
            { "$Empresa.tipo$": "queixoso" },
          ],
        },
      });

      res.status(200).json({ queixas });
    } catch (error) {
      console.log("Error", error);
    }
  },
  async getHistorico(req, res) {
    try {
      const { fk_queixa } = req.query;
      const historico = await historico_queixa.findAll({
        attributes: [
          "id",
          "queixaID",
          "assunto",
          "facto",
          "data",
          "modo",
          "url_file_contrato",
        ],
        where: { queixaID: fk_queixa },

        include: [
          {
            association: "Queixa",
            attributes: [
              "id",
              "assunto",
              "facto",
              "provincia",
              "estado",
              "empresaID",
              "trabalhadorID",
              "url_file_contrato",
              "nota",
            ],
            required: true,
            include: [
              {
                association: "Trabalhador",
                required: true,
                include: [
                  {
                    association: "Pessoa",
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
      });
      res.status(200).json({ historico });
    } catch (error) {
      console.log("Error", error);
    }
  },

  async queixas_do_queixoso(req, res) {
    const { queixosoID } = req.query;

    try {
      const queixas = await Queixa.findAll({
        attributes: [
          "id",
          "assunto",
          "facto",
          "provincia",
          "estado",
          "url_file_contrato",
        ],
        where: { queixosoID: queixosoID },
      });
      //console.log(queixas);
      res.status(200).json({ queixas });
    } catch (error) {
      console.log("Error", error);
    }
  },

  async ler_queixa(req, res) {
    try {
      const { id_queixa } = req.query;
      console.log("id_queixa");

      const queixas = await Queixa.findAll({
        attributes: [
          "id",
          "assunto",
          "facto",
          "provincia",
          "estado",
          "url_file_contrato",
          "modo",
        ],
        where: { id: id_queixa },
      });

      //const serverPath = path.join(__dirname, 'uploads', queixas[0].url_file_contrato);
      const serverPath = path.resolve(queixas[0].url_file_contrato);
      //console.log('Server path:', serverPath);
      const normalizePath = path.normalize(serverPath);
      console.log(normalizePath);
      res.status(200).json({ queixas, normalizePath });
    } catch (error) {
      console.log("Error", error);
    }
  },
  async mais_detalhes(req, res) {
    const { id_queixa } = req.query;

    try {
      const queixas = await Queixa.findAll({
        attributes: [
          "id",
          "assunto",
          "facto",
          "provincia",
          "estado",
          "url_file_contrato",
          "modo",
          "url_file_acta",
        ],
        where: {
          id: id_queixa,
        },
        include: [
          {
            association: "Empresa",
            required: true,
            attributes: [
              "id",
              "nome_empresa",
              "nif",
              "designacao",
              "url_website",
              "email",
              "tipo",
            ],
          },
          {
            association: "Testemunha",
            required: true,
            attributes: ["id", "inspectorID"],
            include: [
              {
                association: "Inspector",
                required: true,
                attributes: ["id", "trabalhadorID"],

                include: [
                  {
                    association: "Trabalhador",
                    required: true,
                    include: [
                      {
                        association: "Pessoa",
                        required: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            association: "Inspector",
            required: true,
            attributes: ["id", "trabalhadorID"],
          },
          {
            association: "Trabalhador",
            required: true,

            include: [
              {
                association: "Pessoa",
                required: true,
                include: [
                  {
                    association: "BI",
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
      });

      //const serverPath = path.join(__dirname, 'uploads', queixas[0].url_file_contrato);
      const serverPath = path.resolve(queixas[0].url_file_contrato);
      //console.log('Server path:', serverPath);
      //console.log(pathFile);
      res.status(200).json({ queixas, serverPath });
    } catch (error) {
      console.log("Error", error);
    }
  },
  async store(req, res) {
    //console.log(req.files['fileContrato'][0].path);
    //console.log(req.files['fileBI'][0].path);
    //console.log(req.body);
    let queixosoID,
      queixanteID = 0;

    try {
      //dados do bilhete de identidade
      const { _emitidoEm } = req.body;

      const { _validoAte } = req.body;
      const _fileBI = req.files["fileBI"][0].path;
      const { _nBI } = req.body;

      const novoBI = await BI.create({
        emitido_em: _emitidoEm,
        valido_ate: _validoAte,
        file: _fileBI,
        numeroBI: _nBI,
      });

      // Dados da residência do trabalhador

      const { _bairro } = req.body;
      const { _rua } = req.body;
      const { _casaEdificio } = req.body;
      const { _provincia } = req.body;
      const { _contacto_principal } = req.body;
      const { _contacto_alternativo } = req.body;

      const novoEndereco = await Endereco.create({
        bairro: _bairro,
        rua: _rua,
        casa: _casaEdificio,
        provincia: _provincia,
        telefone_principal: _contacto_principal,
        telefone_alternativo: _contacto_alternativo,
      });

      // dados da pessoa

      const { _nome } = req.body;
      const { _sobrenome } = req.body;
      const { _nomePai } = req.body;
      const { _nomeMae } = req.body;
      const { _naturalidade } = req.body;
      const { _altura } = req.body;
      const { _estado_civil } = req.body;
      const { _data_nascimento } = req.body;
      const { _sexo } = req.body;

      const novaPessoa = await Pessoa.create({
        nome: _nome,
        sobrenome: _sobrenome,
        nome_pai: _nomePai,
        nome_mae: _nomeMae,
        naturalidade: _naturalidade,
        altura: _altura,
        estado_civil: _estado_civil,
        data_nascimento: _data_nascimento,
        sexo: _sexo,
        biID: novoBI.id,
        enderecoID: novoEndereco.id,
      });
      // dados da conta

      //const senha = Math.random().toString(36).slice(-10);

      /*const userExist = await Conta.findOne({ where: { email: email } });
            console.log(userExist);
            if (userExist) {
                return res.status(422).json({ msg: 'Por favor, utilize outro email' });
            }*/

      //dados do trabalhador

      const { queixante } = req.body;
      const { queixoso } = req.body;
      let _email = "";
      let _senha = "";
      let _tipoE = "";
      let _tipoT = "";

      const { _cargo } = req.body;
      const { _area_departamento } = req.body;
      const { _provincia_empresa } = req.body;

      // endereço da empresa

      const { _bairroEmp } = req.body;
      const { _ruaEmp } = req.body;
      const { _edificio } = req.body;
      const { _contacto_empresa } = req.body;

      const novoEnderecoEmp = await Endereco.create({
        bairro: _bairroEmp,
        rua: _ruaEmp,
        edificio: _edificio,
        provincia: _provincia_empresa,
        telefone_principal: _contacto_empresa,
      });

      //dados da empresa
      const { _empresa } = req.body;
      const { _nif } = req.body;
      const { _designacao } = req.body;
      const { _email_empresa } = req.body;
      const { _website_empresa } = req.body;

      let novoTrabalhador = "";
      let novaEmpresa = "";
      let novaConta = "";

      if (queixoso === "Trabalhador") {
        _tipoT = "queixoso";
        _tipoE = "queixante";
        const { _email_pessoal } = req.body;
        const { senha } = req.body;

        _email = _email_pessoal;
        //console.log(_email);

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(senha, salt);
        const conta = await Conta.create({
          email: _email,
          senha: passwordHash,
        });
        novaConta = { conta, senha };

        novoTrabalhador = await Trabalhador.create({
          cargo: _cargo,
          area_departamento: _area_departamento,
          localizacao_office: _provincia_empresa,
          tipo: _tipoT,
          pessoaID: novaPessoa.id,
          contaID: conta.id,
        });
        novaEmpresa = await Empresa.create({
          nome_empresa: _empresa,
          nif: _nif,
          designacao: _designacao,
          email: _email_empresa,
          url_website: _website_empresa,
          enderecoID: novoEnderecoEmp.id,
          fk_conta: 0,
          tipo: _tipoE,
        });
      } else if (queixoso === "Empregador") {
        _tipoE = "queixoso";
        _tipoT = "queixante";
        const { _email_empresa } = req.body;
        _email = _email_empresa;
        const { senha } = req.body;

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(senha, salt);
        const conta = await Conta.create({
          email: _email,
          senha: passwordHash,
          tentativa: tentativa,
        });
        novaConta = { conta, senha };
        console.log("conta_empresa: " + conta.id);
        novoTrabalhador = await Trabalhador.create({
          cargo: _cargo,
          area_departamento: _area_departamento,
          localizacao_office: _provincia_empresa,
          tipo: _tipoT,
          pessoaID: novaPessoa.id,
          contaID: 0,
        });
        novaEmpresa = await Empresa.create({
          nome_empresa: _empresa,
          nif: _nif,
          designacao: _designacao,
          email: _email_empresa,
          url_website: _website_empresa,
          enderecoID: novoEnderecoEmp.id,
          fk_conta: conta.id,
          tipo: _tipoE,
        });
      }

      // dados da queixa
      const { _assunto_queixa } = req.body;
      const { _descricao_queixa } = req.body;
      const { _modo } = req.body;

      const data_queixa = new Date();
      const data_alteracao_queixa = new Date();
      const _fileContrato = req.files["fileContrato"][0].path.split("/")[1];

      if (queixante === "Trabalhador") {
        queixanteID = novoTrabalhador.id;
        queixosoID = novaEmpresa.id;
      } else if (queixante == "Empregador") {
        queixanteID = novaEmpresa.id;
        queixosoID = novoTrabalhador.id;
      }
      const novaQueixa = await Queixa.create({
        assunto: _assunto_queixa,
        facto: _descricao_queixa,
        created_at: data_queixa,
        updated_at: data_alteracao_queixa,
        queixosoID: queixosoID,
        queixanteID: queixanteID,
        empresaID: novaEmpresa.id,
        trabalhadorID: novoTrabalhador.id,
        url_file_contrato: _fileContrato,
        provincia: _provincia_empresa,
        modo: _modo,
        inspectorID: 14,
        testemunhaID: 4,
      });
      return res.status(200).send({
        status: 1,
        message:
          "Hi, note que a sua queixa foi enviada para IGT. Deste modo terá que aguardar a guardar a ligação dos nossos Inspectores ou clique ok para entrar no nosso portal!",
        Queixa,
        novaConta,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async queixar_mesma_empresa(req, res) {
    const { desc_queixa } = req.body;
    const { assunto_queixa } = req.body;
    const { trabalhadorID } = req.body;
    const { empresaID } = req.body;
    const { url_file_contrato } = req.body;
    const { localizacao_queixa } = req.body;
    const data_queixa = new Date();
    const data_alteracao_queixa = new Date();
    const queixoso = trabalhadorID;
    const queixante = empresaID;

    const novaQueixa = await Queixa.create({
      assunto: assunto_queixa,
      facto: desc_queixa,
      created_at: data_queixa,
      updated_at: data_alteracao_queixa,
      queixosoID: queixoso,
      queixanteID: queixante,
      empresaID: empresaID,
      trabalhadorID: trabalhadorID,
      url_file_contrato: url_file_contrato,
      provincia: localizacao_queixa,
    });
    return res.status(200).send({
      status: 1,
      message:
        "Hi, note que a sua queixa foi enviada para IGT. Deste modo terá que aguardar a guardar a ligação dos nossos Inspectores!",
      Queixa,
    });
  },
  async queixar_outra_empresa(req, res) {
    //dados do trabalhador

    const { _cargo } = req.body;

    const { _area_departamento } = req.body;
    const { _localizacaoEmp } = req.body;
    const _tipoT = "queixoso";
    const _tipoE = "queixante";
    const { contaID } = req.body;
    const { pessoaID } = req.body;

    const novoTrabalhador = await Trabalhador.create({
      cargo: _cargo,
      area_departamento: _area_departamento,
      localizacao_office: _localizacaoEmp,
      tipo: _tipoT,
      pessoaID: pessoaID,
      contaID: contaID,
    });

    // endereço da empresa

    const { _bairroEmp } = req.body;
    const { _ruaEmp } = req.body;
    const { _edificio } = req.body;
    const { _contacto_empresa } = req.body;

    const novoEnderecoEmp = await Endereco.create({
      bairro: _bairroEmp,
      rua: _ruaEmp,
      edificio: _edificio,
      provincia: _localizacaoEmp,
      telefone_principal: _contacto_empresa,
    });

    //dados da empresa
    const { _empresa } = req.body;
    const { _nif } = req.body;
    const { _designacao } = req.body;
    const { _email_empresa } = req.body;
    const { _website_empresa } = req.body;

    const novaEmpresa = await Empresa.create({
      nome_empresa: _empresa,
      nif: _nif,
      designacao: _designacao,
      email: _email_empresa,
      url_website: _website_empresa,
      enderecoID: novoEnderecoEmp.id,
      tipo: _tipoE,
    });

    // dados da queixa
    const { assunto_queixa } = req.body;
    const { _descricao_queixa } = req.body;
    const { modo } = req.body;
    const { queixante } = req.body;
    const { queixoso } = req.body;
    const data_queixa = new Date();
    const data_alteracao_queixa = new Date();
    const _fileContrato = req.files["fileContrato"][0].path.split("/")[1];
    console.log(_descricao_queixa);
    if (queixante === "Trabalhador") {
      queixanteID = novoTrabalhador.id;
      queixosoID = novaEmpresa.id;
    } else if (queixante == "Empregador") {
      queixanteID = novaEmpresa.id;
      queixosoID = novoTrabalhador.id;
    }

    const novaQueixa = await Queixa.create({
      facto: desc_queixa,
      created_at: data_queixa,
      updated_at: data_alteracao_queixa,
      queixosoID: queixoso,
      queixanteID: queixante,
      empresaID: empresaID,
      trabalhadorID: trabalhadorID,
      url_file_contrato: url_file_contrato,
      provincia: localizacao_queixa,
      modo: _modo,
    });
    return res.status(200).send({
      status: 1,
      message:
        "Hi, note que a sua queixa foi enviada para IGT. Deste modo terá que aguardar a guardar a ligação dos nossos Inspectores!",
      Queixa,
    });
  },
  async validarBI(req, res) {
    const { nBilhete } = req.body;

    try {
      const checkBI = await BI.findOne({
        attributes: ["id", "emitido_em", "valido_ate", "file", "numeroBI"],
        where: { numeroBI: nBilhete },
      });

      const checkPessoa = await Pessoa.findOne({
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "nome_pai",
          "nome_mae",
          "naturalidade",
          "altura",
          "estado_civil",
          "sexo",
          "data_nascimento",
          "biID",
          "enderecoID",
        ],
        where: { biID: checkBI.id },
      });

      const checkEndereco = await Endereco.findOne({
        attributes: [
          "id",
          "bairro",
          "rua",
          "edificio",
          "casa",
          "provincia",
          "telefone_principal",
          "telefone_alternativo",
        ],
        where: { id: checkPessoa.enderecoID },
      });
      const checkTrabalhador = await Trabalhador.findOne({
        attributes: [
          "id",
          "cargo",
          "area_departamento",
          "localizacao_office",
          "pessoaID",
          "contaID",
        ],
        where: { pessoaID: checkPessoa.id },
      });
      const queixoso = {
        BI: checkBI,
        Pessoa: checkPessoa,
        Endereco: checkEndereco,
        Trabalhador: checkTrabalhador,
      };

      res.status(200).json({ msg: "Queixoso já existe!", queixoso });
    } catch (error) {
      res.status(404).json({ msg: "Queixoso não encontrado!" });
    }
  },
  async validarNIF(req, res) {
    const { _nif } = req.body;

    try {
      const checkNIF = await Empresa.findOne({
        attributes: [
          "id",
          "nome_empresa",
          "nif",
          "designacao",
          "email",
          "url_website",
          "enderecoID",
        ],
        where: { nif: _nif },
      });
      //console.log(checkNIF);

      const checkEndereco = await Endereco.findOne({
        attributes: [
          "id",
          "bairro",
          "rua",
          "edificio",
          "casa",
          "provincia",
          "telefone_principal",
          "telefone_alternativo",
        ],
        where: { id: checkNIF.enderecoID },
      });

      const empregador = {
        NIF: checkNIF,
        Endereco: checkEndereco,
      };

      res.status(200).json({ msg: "Queixoso já existe!", empregador });
    } catch (error) {
      res.status(404).json({ msg: "Queixoso não encontrado!" });
    }
  },

  async add_queixa(req, res) {
    try {
      const { _assunto_queixa } = req.body;
      const { _descricao_queixa } = req.body;
      const { _modo } = req.body;
      const { queixante } = req.body;
      const { queixoso } = req.body;
      const data_queixa = new Date();
      const data_alteracao_queixa = new Date();
      const _fileContrato = req.files["fileContrato"][0].path.split("/")[1];
      const { _trabalhadorID } = req.body;
      const { _empresa } = req.body;
      const { _provincia } = req.body;
      let queixosoID = 0;
      let queixanteID = 0;
      if (queixoso === "Trabalhador") {
        let _nome_empresa = _empresa.split(" ")[0];
        const empresaEncontrada = await Empresa.findOne({
          attributes: ["id", "nome_empresa", "enderecoID"],
          where: { nome_empresa: _nome_empresa },
        });
        const enderecoEncontrado = await Endereco.findOne({
          attributes: ["id", "provincia"],
          where: { id: empresaEncontrada.enderecoID },
        });

        queixosoID = _trabalhadorID;
        queixanteID = empresaEncontrada.id;
        const novaQueixa = await Queixa.create({
          assunto: _assunto_queixa,
          facto: _descricao_queixa,
          created_at: data_queixa,
          updated_at: data_alteracao_queixa,
          queixosoID: queixosoID,
          queixanteID: queixanteID,
          empresaID: empresaEncontrada.id,
          trabalhadorID: _trabalhadorID,
          url_file_contrato: _fileContrato,
          provincia: enderecoEncontrado.provincia,
          modo: _modo,
          inspectorID: 14,
          testemunhaID: 4,
        });
        return res.status(200).send({
          status: 1,
          message:
            "Hi, note que a sua queixa foi enviada para IGT. Deste modo terá que aguardar a guardar a ligação dos nossos Inspectores ou clique ok para entrar no nosso portal!",
          Queixa,
        });
      } else if (queixoso === "Empregador") {
        queixosoID = _empresa;
        queixanteID = _trabalhadorID;

        const novaQueixa = await Queixa.create({
          assunto: _assunto_queixa,
          facto: _descricao_queixa,
          created_at: data_queixa,
          updated_at: data_alteracao_queixa,
          queixosoID: queixosoID,
          queixanteID: queixanteID,
          empresaID: _empresa,
          trabalhadorID: _trabalhadorID,
          url_file_contrato: _fileContrato,
          provincia: _provincia,
          modo: _modo,
        });
        //console.log(novaQueixa)
        return res.status(200).send({
          status: 1,
          message:
            "Hi, note que a sua queixa foi enviada para IGT. Deste modo terá que aguardar a guardar a ligação dos nossos Inspectores ou clicar no botão abaixo para entrar no nosso portal!",
          Queixa,
        });
      }
    } catch (error) {
      res.status(404).json({ msg: "Queixa não enviada!" });
    }
  },
  async add_queixoso_queixa(req, res) {
    let queixosoID,
      queixanteID = 0;

    try {
      const { queixante } = req.body;
      const { queixoso } = req.body;

      //dados do bilhete de identidade
      const { _emitidoEm } = req.body;
      let fileBI = "";
      const { _validoAte } = req.body;
      if (queixoso === "Trabalhador") {
        fileBI = req.files["fileBI"][0].path;
      }
      const { _nBI } = req.body;

      const novoBI = await BI.create({
        emitido_em: _emitidoEm,
        valido_ate: _validoAte,
        file: fileBI,
        numeroBI: _nBI,
      });

      // Dados da residência do trabalhador

      const { _bairro } = req.body;
      const { _rua } = req.body;
      const { _casaEdificio } = req.body;
      const { _provincia } = req.body;
      const { _contacto_principal } = req.body;
      const { _contacto_alternativo } = req.body;

      const novoEndereco = await Endereco.create({
        bairro: _bairro,
        rua: _rua,
        casa: _casaEdificio,
        provincia: _provincia,
        telefone_principal: _contacto_principal,
        telefone_alternativo: _contacto_alternativo,
      });

      // dados da pessoa

      const { _nome } = req.body;
      const { _sobrenome } = req.body;
      const { _nomePai } = req.body;
      const { _nomeMae } = req.body;
      const { _naturalidade } = req.body;
      const { _altura } = req.body;
      const { _estado_civil } = req.body;
      const { _data_nascimento } = req.body;
      const { _sexo } = req.body;

      const novaPessoa = await Pessoa.create({
        nome: _nome,
        sobrenome: _sobrenome,
        nome_pai: _nomePai,
        nome_mae: _nomeMae,
        naturalidade: _naturalidade,
        altura: _altura,
        estado_civil: _estado_civil,
        data_nascimento: _data_nascimento,
        sexo: _sexo,
        biID: novoBI.id,
        enderecoID: novoEndereco.id,
      });
      // dados da conta

      //const senha = Math.random().toString(36).slice(-10);

      /*const userExist = await Conta.findOne({ where: { email: email } });
            console.log(userExist);
            if (userExist) {
                return res.status(422).json({ msg: 'Por favor, utilize outro email' });
            }*/

      //dados do trabalhador

      let _email = "";
      let _senha = "";
      let _tipoE = "";
      let _tipoT = "";

      const { _cargo } = req.body;
      const { _area_departamento } = req.body;
      const { _provincia_empresa } = req.body;

      // endereço da empresa

      //dados da empresa
      const { _empresa } = req.body;

      let novoTrabalhador = "";
      let _nome_empresa = "";
      let novaConta = "";
      let empresaEncontrada = {};
      let enderecoEncontrado = {};

      if (queixoso === "Trabalhador") {
        _tipoT = "queixoso";
        _tipoE = "queixante";
        const { _email_pessoal } = req.body;
        const { senha } = req.body;

        _email = _email_pessoal;

        _nome_empresa = _empresa.split(" ")[0];
        empresaEncontrada = await Empresa.findOne({
          attributes: ["id", "nome_empresa", "enderecoID"],
          where: { nome_empresa: _nome_empresa },
        });
        enderecoEncontrado = await Endereco.findOne({
          attributes: ["id", "provincia"],
          where: { id: empresaEncontrada.enderecoID },
        });

        //console.log(_email);

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(senha, salt);
        const conta = await Conta.create({
          email: _email,
          senha: passwordHash,
          tentativa: tentativa,
        });
        novaConta = { conta, senha };

        novoTrabalhador = await Trabalhador.create({
          cargo: _cargo,
          area_departamento: _area_departamento,
          localizacao_office: enderecoEncontrado.provincia,
          tipo: _tipoT,
          pessoaID: novaPessoa.id,
          contaID: conta.id,
        });
        queixosoID = novoTrabalhador.id;
        queixanteID = empresaEncontrada.id;
      } else if (queixoso === "Empregador") {
        _tipoE = "queixoso";
        _tipoT = "queixante";
        const { _trabalhadorID } = req.body;
        const { _email_empresa } = req.body;
        _email = _email_empresa;
        const { senha } = req.body;

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(senha, salt);
        const conta = await Conta.create({
          email: _email,
          senha: passwordHash,
          tentativa: tentativa,
        });
        novaConta = { conta, senha };

        // novo Enderceo empresa
        const { _bairroEmp } = req.body;
        const { _ruaEmp } = req.body;
        const { _edificio } = req.body;
        const { _contacto_empresa } = req.body;

        const novoEnderecoEmp = await Endereco.create({
          bairro: _bairroEmp,
          rua: _ruaEmp,
          edificio: _edificio,
          provincia: _localizacaoEmp,
          telefone_principal: _contacto_empresa,
        });

        novaEmpresa = await Empresa.create({
          nome_empresa: _empresa,
          nif: _nif,
          designacao: _designacao,
          email: _email_empresa,
          url_website: _website_empresa,
          enderecoID: novoEnderecoEmp.id,
          fk_conta: conta.id,
          tipo: _tipoE,
        });
      }

      // dados da queixa
      const { _assunto_queixa } = req.body;
      const { _descricao_queixa } = req.body;
      const { _modo } = req.body;

      const data_queixa = new Date();
      const data_alteracao_queixa = new Date();
      const _fileContrato = req.files["fileContrato"][0].path.split("/")[1];
      if (queixante === "Trabalhador") {
        queixanteID = _trabalhadorID;
        queixosoID = novaEmpresa.id;
      } else if (queixante === "Empregador") {
        queixanteID = novaEmpresa.id;
        queixosoID = novoTrabalhador.id;
      }
      const novaQueixa = await Queixa.create({
        assunto: _assunto_queixa,
        facto: _descricao_queixa,
        created_at: data_queixa,
        updated_at: data_alteracao_queixa,
        queixosoID: queixosoID,
        queixanteID: queixanteID,
        empresaID: empresaEncontrada.id,
        trabalhadorID: novoTrabalhador.id,
        url_file_contrato: _fileContrato,
        provincia: enderecoEncontrado.provincia,
        modo: _modo,
        inspectorID: 14,
        testemunhaID: 4,
      });
      return res.status(200).send({
        status: 1,
        message:
          "Hi, note que a sua queixa foi enviada para IGT. Deste modo terá que aguardar a guardar a ligação dos nossos Inspectores ou clique ok para entrar no nosso portal!",
        Queixa,
        novaConta,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async add_empregador_queixa(req, res) {
    let queixosoID,
      queixanteID = 0;
    try {
      console.log(req);

      let _email = "";
      let _senha = "";
      let _tipoE = "";

      let novoTrabalhador = "";
      let _nome_empresa = "";
      let novaConta = "";
      let empresaEncontrada = {};
      let enderecoEncontrado = {};

      _tipoE = "queixoso";
      _tipoT = "queixante";
      const { trabalhadorID } = req.body;
      const { email_empresa } = req.body;
      _email = email_empresa;
      const { senha } = req.body;

      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(senha, salt);
      const conta = await Conta.create({
        email: _email,
        senha: passwordHash,
        tentativa: tentativa,
      });
      novaConta = { conta, senha };

      // novo Enderceo empresa

      const { _bairroEmp } = req.body;
      const { _ruaEmp } = req.body;
      const { _edificio } = req.body;
      const { _contacto_empresa } = req.body;
      const { _provincia_empresa } = req.body;

      const novoEnderecoEmp = await Endereco.create({
        bairro: _bairroEmp,
        rua: _ruaEmp,
        edificio: _edificio,
        provincia: _provincia_empresa,
        telefone_principal: _contacto_empresa,
      });
      const { _empresa } = req.body;
      const { _nif } = req.body;
      const { _designacao } = req.body;
      const { _website_empresa } = req.body;

      novaEmpresa = await Empresa.create({
        nome_empresa: _empresa,
        nif: _nif,
        designacao: _designacao,
        email: email_empresa,
        url_website: _website_empresa,
        enderecoID: novoEnderecoEmp.id,
        fk_conta: conta.id,
        tipo: _tipoE,
      });

      // dados da queixa
      const { _assunto_queixa } = req.body;
      const { _descricao_queixa } = req.body;
      const { _modo } = req.body;

      const data_queixa = new Date();
      const data_alteracao_queixa = new Date();
      const _fileContrato = req.files["fileContrato"][0].path.split("/")[1];

      queixanteID = trabalhadorID;
      queixosoID = novaEmpresa.id;

      const novaQueixa = await Queixa.create({
        assunto: _assunto_queixa,
        facto: _descricao_queixa,
        created_at: data_queixa,
        updated_at: data_alteracao_queixa,
        queixosoID: queixosoID,
        queixanteID: queixanteID,
        empresaID: novaEmpresa.id,
        trabalhadorID: trabalhadorID,
        url_file_contrato: _fileContrato,
        provincia: novoEnderecoEmp.provincia,
        modo: _modo,
        inspectorID: 14,
        testemunhaID: 4,
      });
      return res.status(200).send({
        status: 1,
        message:
          "Hi, note que a sua queixa foi enviada para IGT. Deste modo terá que aguardar a guardar a ligação dos nossos Inspectores ou clique ok para entrar no nosso portal!",
        Queixa,
        novaConta,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async add_empresa_queixa(req, res) {
    try {
      const { queixante } = req.body;
      const { queixoso } = req.body;
      //const { _provincia } = req.body;

      if (queixoso === "Trabalhador") {
        const { _bairroEmp } = req.body;
        const { _ruaEmp } = req.body;
        const { _edificio } = req.body;
        const { _contacto_empresa } = req.body;
        const { _provincia_empresa } = req.body;
        //const { _empresa } = req.body;
        let_tipoT = "queixoso";
        let _tipoE = "queixante";
        const novoEnderecoEmp = await Endereco.create({
          bairro: _bairroEmp,
          rua: _ruaEmp,
          edificio: _edificio,
          provincia: _provincia_empresa,
          telefone_principal: _contacto_empresa,
        });

        //dados da empresa
        const { nome_empresa } = req.body;
        const { _nif } = req.body;
        const { _designacao } = req.body;
        const { _email_empresa } = req.body;
        const { _website_empresa } = req.body;

        const { _assunto_queixa } = req.body;
        const { _descricao_queixa } = req.body;
        const { _modo } = req.body;

        const data_queixa = new Date();
        const data_alteracao_queixa = new Date();
        const _fileContrato = req.files["fileContrato"][0].path.split("/")[1];
        const { _trabalhadorID } = req.body;
        let queixosoID = 0;
        let queixanteID = 0;
        //let _nome_empresa = _empresa.split(" ")[0];
        let conta = 0;
        let novaEmpresa = "";

        novaEmpresa = await Empresa.create({
          nome_empresa: nome_empresa,
          nif: _nif,
          designacao: _designacao,
          email: _email_empresa,
          url_website: _website_empresa,
          enderecoID: novoEnderecoEmp.id,
          fk_conta: 0,
          tipo: _tipoE,
        });
        queixosoID = _trabalhadorID;
        queixanteID = novaEmpresa.id;

        const novaQueixa = await Queixa.create({
          assunto: _assunto_queixa,
          facto: _descricao_queixa,
          created_at: data_queixa,
          updated_at: data_alteracao_queixa,
          queixosoID: queixosoID,
          queixanteID: queixanteID,
          empresaID: novaEmpresa.id,
          trabalhadorID: _trabalhadorID,
          url_file_contrato: _fileContrato,
          provincia: _provincia_empresa,
          modo: _modo,
          inspectorID: 14,
          testemunhaID: 4,
        });
        return res.status(200).send({
          status: 1,
          message:
            "Hi, note que a sua queixa foi enviada para IGT. Deste modo terá que aguardar a guardar a ligação dos nossos Inspectores ou acompanhar a queixa no nosso portal!",
          Queixa,
        });
      } else if (queixoso === "Empregador") {
        //dados da queixa
        _tipoE = "queixoso";
        // dados Bilhete de identidade
        const { _emitidoEm } = req.body;

        const { _validoAte } = req.body;
        const fileBI = req.files["fileBI"][0].path.split("/")[1];
        const { _nBI } = req.body;

        const novoBI = await BI.create({
          emitido_em: _emitidoEm,
          valido_ate: _validoAte,
          file: fileBI,
          numeroBI: _nBI,
        });

        // Dados da residência do trabalhador

        const { _bairro } = req.body;
        const { _rua } = req.body;
        const { _casaEdificio } = req.body;
        const { _provincia } = req.body;
        const { _contacto_principal } = req.body;
        const { _contacto_alternativo } = req.body;

        const novoEndereco = await Endereco.create({
          bairro: _bairro,
          rua: _rua,
          casa: _casaEdificio,
          provincia: _provincia,
          telefone_principal: _contacto_principal,
          telefone_alternativo: _contacto_alternativo,
        });

        // dados da pessoa

        const { _nome } = req.body;
        const { _sobrenome } = req.body;
        const { _nomePai } = req.body;
        const { _nomeMae } = req.body;
        const { _naturalidade } = req.body;
        const { _altura } = req.body;
        const { _estado_civil } = req.body;
        const { _data_nascimento } = req.body;
        const { _sexo } = req.body;

        const novaPessoa = await Pessoa.create({
          nome: _nome,
          sobrenome: _sobrenome,
          nome_pai: _nomePai,
          nome_mae: _nomeMae,
          naturalidade: _naturalidade,
          altura: _altura,
          estado_civil: _estado_civil,
          data_nascimento: _data_nascimento,
          sexo: _sexo,
          biID: novoBI.id,
          enderecoID: novoEndereco.id,
        });

        //dados empresarias do trabalhador
        const { _provinciaEmp } = req.body;
        const { _cargo } = req.body;
        const { _area_departamento } = req.body;
        const _tipoT = "queixANTE";
        const novoTrabalhador = await Trabalhador.create({
          cargo: _cargo,
          area_departamento: _area_departamento,
          localizacao_office: _provinciaEmp,
          tipo: _tipoT,
          pessoaID: novaPessoa.id,
          contaID: 0,
        });
        // dados da queixa
        const { _empresa } = req.body;
        const _fileContrato = req.files["fileContrato"][0].path.split("/")[1];

        const { _assunto_queixa } = req.body;
        const { _descricao_queixa } = req.body;
        const { _modo } = req.body;

        const data_queixa = new Date();
        const data_alteracao_queixa = new Date();
        const _queixosoID = _empresa;

        const novaQueixa = await Queixa.create({
          assunto: _assunto_queixa,
          facto: _descricao_queixa,
          created_at: data_queixa,
          updated_at: data_alteracao_queixa,
          queixosoID: _queixosoID,
          queixanteID: novoTrabalhador.id,
          empresaID: _empresa,
          trabalhadorID: novoTrabalhador.id,
          url_file_contrato: _fileContrato,
          provincia: _provinciaEmp,
          modo: _modo,
          inspectorID: 14,
          testemunhaID: 4,
        });
        return res.status(200).send({
          status: 1,
          message:
            "Hi, note que a sua queixa foi enviada para IGT. Deste modo terá que aguardar a guardar a ligação dos nossos Inspectores ou clique no botão para entrar no nosso portal!",
          Queixa,
        });
      }
    } catch (error) {
      res.status(404).json({ msg: "Queixa não submetida!" });
    }
  },
  async getEmpresas(req, res) {
    try {
      Empresa.findAll({
        include: [
          {
            association: "Endereco",
            required: true,
            attributes: ["id", "bairro", "rua", "provincia"],
          },
        ],
      }).then((empresas) => {
        res.status(200).json({ empresas });
      });
    } catch (error) {
      // console.log("Error", error);
    }
  },
  async getTrabalhadores(req, res) {
    try {
      Trabalhador.findAll({
        attributes: [
          "id",
          "cargo",
          "area_departamento",
          "localizacao_office",
          "tipo",
          "pessoaID",
          "contaID",
        ],

        include: [
          {
            association: "Pessoa",
            include: [
              {
                association: "BI",
                required: true,
              },
            ],
          },
        ],
      }).then((trabalhadores) => {
        res.status(200).json({ trabalhadores });
      });
    } catch (error) {
      // console.log("Error", error);
    }
  },
  async criar_historico(req, res) {
    try {
      const { id_queixa } = req.body;
      const { assunto } = req.body;
      const { facto } = req.body;
      const { _modo } = req.body;
      const data_queixa = new Date();
      const fileContrato = req.files["fileContrato"][0].path;
      const filename = fileContrato.split("\\").pop();

      const novoHistorico = await historico_queixa.create({
        queixaID: id_queixa,
        assunto: assunto,
        facto: facto,
        data: data_queixa,
        modo: _modo,
        url_file_contrato: filename,
      });
      return res.status(200).send({
        status: 1,
        message: "Hi, note que a sua queixa foi editada",
        novoHistorico,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async anexa_acta(req, res) {
    try {
      const _fileActa = req.files["fileActa"][0].path;
      const { id_queixa } = req.body;

      const novo_anexo = await Queixa.update(
        {
          url_file_acta: _fileActa,
        },
        {
          where: {
            id: id_queixa,
          },
        }
      );
      return res.status(200).send({
        status: 1,
        message: "Acta anexada com sucesso!",
      });
    } catch {
      console.log("Error!");
    }
  },
  async update_queixa(req, res) {
    const { id_queixa } = req.body;
    const { assunto } = req.body;
    const { facto } = req.body;
    const { _modo } = req.body;
    const fileContrato = req.files["fileContrato"][0].path;
    const filename = fileContrato.split("\\").pop();

    await Queixa.update(
      {
        assunto: assunto,
        facto: facto,
        modo: _modo,
        url_file_contrato: filename,
      },
      {
        where: {
          id: id_queixa,
        },
      }
    );

    return res.status(200).send({
      status: 1,
      message: "Queixa editada com sucesso!",
    });
  },
  async update(req, res) {
    try {
      const { id_inspector } = req.body.params;
      const { id_queixa } = req.body.params;

      const updated_queixa = await Queixa.update(
        { inspectorID: id_inspector },
        {
          where: {
            id: id_queixa,
          },
        }
      );

      return res.status(200).send({
        status: 1,
        message: "Inspector nomeado com sucesso!",
        updated_queixa,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async update_testemunha(req, res) {
    const { id_inspector } = req.body.params;
    const { id_queixa } = req.body.params;
    const { id_trabalhador } = req.body.params;

    const find_testemunha = await Testemunha.findOne({
      attributes: ["id", "inspectorID"],
      where: { inspectorID: id_inspector },
    });

    let inspector = "";
    if (!find_testemunha) {
      const testemunha = await Testemunha.create({
        inspectorID: id_inspector,
      });
      await Queixa.update(
        { testemunhaID: testemunha.id },
        {
          where: {
            id: id_queixa,
          },
        }
      );
    } else {
      await Queixa.update(
        { testemunhaID: find_testemunha.id },
        {
          where: {
            id: id_queixa,
          },
        }
      );
    }

    return res.status(200).send({
      status: 1,
      message: "Testemunha nomeada com sucesso!",
    });
  },
  async download_contrato(req, res) {
    const { _filenameContrato } = req.query;

    const filePath = path.resolve("uploads", _filenameContrato);

    //const filePath = path.join(__dirname, 'uploads');
    console.log(filePath);
    res.download(filePath, function (erro) {
      if (erro) console.log(erro);
      else console.log("good");
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
