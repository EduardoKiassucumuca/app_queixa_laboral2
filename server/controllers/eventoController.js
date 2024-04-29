const Evento = require("../models/evento");

module.exports = {
  async index(req, res) {
    try {
      const eventos = await eventos.findAll({
        attributes: ["id", "tema", "descricao", "url_img", "data", "hora"],
      });
      return res.json(eventos);
    } catch (error) {
      console.log("Error", error);
    }
  },
};
