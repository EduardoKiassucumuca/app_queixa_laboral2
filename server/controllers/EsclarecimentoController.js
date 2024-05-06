const Esclarecimento = require("../models/esclarecimento");

module.exports = {
  async store(req, res) {
    const { fk_duvida, inquietacao, data_updated, data_created } = req.body;
    const esclarecimento = await Esclarecimento.create({
      duvidaID: fk_duvida,
      inquietacao: inquietacao,
      created_at: data_created,
      updated_at: data_updated,
    });
    return res.status(200).send({
      status: 1,
      message: "Inquietacao enviada com sucesso com sucesso!",
    });
  },
};
