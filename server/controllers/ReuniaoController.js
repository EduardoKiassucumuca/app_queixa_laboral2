const Pessoa = require("../models/pessoa");
const Reuniao = require("../models/reuniao");
const { where } = require("sequelize");
const { Op } = require("sequelize");
module.exports = {
  async index(req, res) {
    try {
      const { fk_inspector } = req.query;
      const reunioes = await Reuniao.findAll({
        attributes: [
          "id",
          "assunto",
          "local",
          "data",
          "hora",
          "estado",
          "queixaID",
          "trabalhadorID",
          "obs",
        ],

        include: [
          {
            association: "Queixa",
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
          "$Queixa.Inspector.trabalhadorID$": fk_inspector,
        },
      });
      res.status(200).json({ reunioes });
    } catch (error) {
      console.log("Error", error);
    }
  },
  async getReuniaoEmpregadores(req, res) {
    try {
      const { fk_inspector } = req.query;
      const reunioes = await Reuniao.findAll({
        attributes: [
          "id",
          "assunto",
          "local",
          "data",
          "hora",
          "estado",
          "queixaID",
          "empresaID",
          "obs",
        ],

        include: [
          {
            association: "Queixa",
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
            association: "Empresa",
            required: true,
          },
        ],

        where: {
          "$Queixa.Inspector.trabalhadorID$": fk_inspector,
        },
      });
      res.status(200).json({ reunioes });
    } catch (error) {
      console.log("Error", error);
    }
  },
  async getReuniaoQueixoso(req, res) {
    try {
      const { _queixosoID } = req.query;
      const reunioes = await Reuniao.findAll({
        attributes: [
          "id",
          "assunto",
          "local",
          "data",
          "hora",
          "estado",
          "queixaID",
          "queixosoID",
          "obs",
        ],
        where: { queixosoID: _queixosoID },
      });
      res.status(200).json({ reunioes });
    } catch (error) {
      console.log("Error", error);
    }
  },
  async store(req, res) {
    const { _assunto } = req.body;
    const { _local } = req.body;
    const { _data } = req.body;
    const { _hora } = req.body;
    const { _obs } = req.body;
    const { fk_queixa } = req.body;
    const { fk_trabalhador } = req.body;

    const reuniao = await Reuniao.create({
      assunto: _assunto,
      local: _local,
      data: _data,
      hora: _hora,
      estado: "1",
      obs: _obs,
      queixaID: fk_queixa,
      trabalhadorID: fk_trabalhador,
      queixosoID: fk_trabalhador,
    });
    return res.status(200).send({
      status: 1,
      message: "Reunião agendada com sucesso!",
    });
  },
  async nova_reuniao_empregador(req, res) {
    const { _assunto } = req.body;
    const { _local } = req.body;
    const { _data } = req.body;
    const { _hora } = req.body;
    const { _obs } = req.body;
    const { fk_queixa } = req.body;
    const { fk_empregador } = req.body;

    const reuniao = await Reuniao.create({
      assunto: _assunto,
      local: _local,
      data: _data,
      hora: _hora,
      estado: "1",
      obs: _obs,
      queixaID: fk_queixa,
      empresaID: fk_empregador,
      queixosoID: fk_empregador,
    });
    return res.status(200).send({
      status: 1,
      message: "Reunião agendada com sucesso!",
    });
  },
  async update(req, res) {
    const {
      reuniaoID,
      queixaID,
      assunto,
      data,
      hora,
      local,
      estado,
      trabalhadorID,
    } = req.body;

    await Reuniao.update(
      {
        assunto: assunto,
        queixaID: queixaID,
        data: data,
        hora: hora,
        local: local,
        estado: estado,
        trabalhadorID: trabalhadorID,
      },
      {
        where: {
          id: reuniaoID,
        },
      }
    );

    return res.status(200).send({
      status: 1,
      message: "Reuniao atualizada com sucesso!",
    });
  },
  async update_empregadores(req, res) {
    const {
      reuniaoID,
      queixaID,
      assunto,
      data,
      hora,
      local,
      estado,
      empresaID,
    } = req.body;

    await Reuniao.update(
      {
        assunto: assunto,
        queixaID: queixaID,
        data: data,
        hora: hora,
        local: local,
        estado: estado,
        empresaID: empresaID,
      },
      {
        where: {
          id: reuniaoID,
        },
      }
    );

    return res.status(200).send({
      status: 1,
      message: "Reuniao atualizada com sucesso!",
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
