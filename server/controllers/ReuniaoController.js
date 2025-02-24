const Empresa = require("../models/Empresa");
const Pessoa = require("../models/pessoa");
const Reuniao = require("../models/reuniao");
const { where } = require("sequelize");
const { Op } = require("sequelize");
const Trabalhador = require("../models/Trabalhador");

const twilio = require("twilio");

const accountSid = "";
const authToken = "";

const client = twilio(accountSid, authToken);

async function enviarSMS(numeroDestino, mensagem) {
  try {
    const message = await client.messages.create({
      body: mensagem,
      from: twilioPhoneNumber, // Número do Twilio
      to: numeroDestino, // Número do destinatário (com DDD e código do país)
    });

    console.log("SMS enviado com sucesso! SID:", message.sid);
  } catch (erro) {
    console.error("Erro ao enviar SMS:", erro.message);
  }
}
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
  async getReunieoes(req, res) {
    try {
      const { id_queixa } = req.query;
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
        where: { queixaID: id_queixa },
      });
      res.status(200).json({ reunioes });
    } catch (error) {
      console.log("Error", error);
    }
  },
  async store(req, res) {
    console.log("Iniciando agendamento de reunião...");

    const {
      _assunto,
      _local,
      _data,
      _hora,
      _obs,
      fk_queixa,
      fk_trabalhador,
      fk_empresa,
    } = req.body;

    // Buscar empresa e trabalhador simultaneamente para melhor desempenho
    const [empresa, trabalhador] = await Promise.all([
      Empresa.findOne({
        attributes: ["id", "nome_empresa", "email"],
        where: { id: fk_empresa },
      }),
      Trabalhador.findOne({
        attributes: ["id", "contaID", "pessoaID"],
        include: [
          {
            association: "Pessoa",
            required: true,
            attributes: ["nome", "sobrenome"],
          },
        ],
        where: { id: fk_trabalhador },
      }),
    ]);

    if (!trabalhador) {
      return res
        .status(404)
        .json({ status: 0, message: "Trabalhador não encontrado." });
    }

    if (!empresa) {
      return res
        .status(404)
        .json({ status: 0, message: "Empresa não encontrada." });
    }

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
      empresaID: fk_empresa,
    });

    if (!reuniao) {
      return res
        .status(500)
        .json({ status: 0, message: "Erro ao criar reunião." });
    }


    // Enviar SMS após a criação da reunião
    enviarSMS(
      "+244930340539",
      `Prezado(a) ${trabalhador.Pessoa.nome} ${trabalhador.Pessoa.sobrenome} e ${empresa.nome_empresa},\n\n` +
        `Informamos que uma reunião foi agendada para discutir o assunto: ${_assunto}.\n\n` +
        `📅 Data: ${_data}\n⏰ Horário: ${_hora}\n📍 Local: ${_local}\n\n` +
        `OBS: ${_obs}\n\nAtenciosamente,\nInspecção Geral do Trabalho`
    );

    // Simulação do envio de e-mail (descomentar se necessário)
    // const mailOptions = {
    //     from: "marciocristiano105@gmail.com",
    //     to: [trabalhador.Conta.email, empresa.email, "kiassucristiano@hotmail.com"],
    //     subject: "IGT | Agendamento de Reunião",
    //     text: `Prezado(a) ${trabalhador.Pessoa.nome} ${trabalhador.Pessoa.sobrenome} e ${empresa.nome_empresa},\n\n` +
    //           `Informamos que uma reunião foi agendada para discutir o assunto: ${_assunto}.\n\n` +
    //           `📅 Data: ${_data}\n⏰ Horário: ${_hora}\n📍 Local: ${_local}\n\n` +
    //           `OBS: ${_obs}\n\nAtenciosamente,\nInspecção Geral do Trabalho`,
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.error("Erro ao enviar e-mail:", error);
    //     } else {
    //         console.log("E-mail enviado com sucesso:", info.response);
    //     }
    // });

    return res
      .status(200)
      .json({ status: 1, message: "Reunião agendada com sucesso!" });
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
      _assunto,
      _data,
      _hora,
      _local,
      // estado,
      trabalhadorID,
      empresaID,
    } = req.body;

    const [empresa, trabalhador] = await Promise.all([
      Empresa.findOne({
        attributes: ["id", "nome_empresa", "email"],
        where: { id: empresaID },
      }),
      Trabalhador.findOne({
        attributes: ["id", "contaID", "pessoaID"],
        include: [
          {
            association: "Pessoa",
            required: true,
            attributes: ["nome", "sobrenome"],
          },
        ],
        where: { id: trabalhadorID },
      }),
    ]);

    if (!trabalhador) {
      return res
        .status(404)
        .json({ status: 0, message: "Trabalhador não encontrado." });
    }

    if (!empresa) {
      return res
        .status(404)
        .json({ status: 0, message: "Empresa não encontrada." });
    }
   const reuniao = await Reuniao.update(
      {
        assunto: _assunto,
        queixaID: queixaID,
        data: _data,
        hora: _hora,
        local: _local,
        // estado: estado,
        empresaID: empresaID,
        trabalhadorID: trabalhadorID,
      },
      {
        where: {
          id: reuniaoID,
        },
      }
    );
    if (!reuniao) {
      return res
        .status(500)
        .json({ status: 0, message: "Erro ao criar reunião." });
    }


    // Enviar SMS após a criação da reunião
    enviarSMS(
      "+244930340539",
      `Prezado(a) ${trabalhador.Pessoa.nome} ${trabalhador.Pessoa.sobrenome} e ${empresa.nome_empresa},\n\n` +
        `Informamos que houve uma alteração na reunião agendada para discutir o assunto sobre: ${_assunto}.\n\n` +
        `📅 Data: ${_data}\n⏰ Horário: ${_hora}\n📍 Local: ${_local}\n\n` +
        `OBS: ${_obs}\n\nAtenciosamente,\nInspecção Geral do Trabalho`
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
