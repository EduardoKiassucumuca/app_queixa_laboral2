const funcionarioIGT = require("../models/FuncionarioIGT");
const Inspector = require("../models/Inspector");
const Queixa = require("../models/Queixa");
const { where } = require("sequelize");
const { Op } = require("sequelize");
module.exports = {
  async index(req, res) {
    try {
      const inspectores = await Inspector.findAll({
        attributes: ["id", "trabalhadorID"],
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
      });

      res.status(200).json({ inspectores });
    } catch (error) {
      console.log("Error", error);
    }
  },
  async getQueixasInspector2(req, res) {
    let queixas = [];

    try {
      const { fk_inspector } = req.query;
      queixas = await Queixa.findAll({
        attributes: [
          "id",
          "assunto",
          "facto",
          "provincia",
          "estado",
          "empresaID",
          "trabalhadorID",
          "inspectorID",
          "url_file_contrato",
          "url_file_acta",
          "created_at",
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
            include: [{ association: "Endereco", required: true }],
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
                  {
                    association: "Endereco",
                    required: true,
                  },
                ],
              },
            ],
          },
        ],

        where: {
          "$Inspector.trabalhadorID$": fk_inspector,
        },
      });

      res.status(200).json({ queixas });
    } catch (error) {
      console.log("Error", error);
    }
  },
  async getQueixasInspector(req, res) {
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
          "modo",
          "empresaID",
          "trabalhadorID",
          "inspectorID",
          "testemunhaID",
          "url_file_contrato",
          "url_file_acta",
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
    const { nome } = req.params;
    const { sobrenome } = req.params;

    const { pessoa_id } = req.params;

    await Pessoa.update(
      { nome: "Muka", sobrenome: "Cristiano" },
      {
        where: {
          id: pessoa_id,
        },
      }
    );

    return res.status(200).send({
      status: 1,
      message: "Pessoa atualizada com sucesso!",
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
