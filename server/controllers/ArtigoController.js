const Artigo = require("../models/artigo");

module.exports = {
  async index(req, res) {
    try {
      const artigos = await Artigo.findAll({
        attributes: ["id", "titulo", "descricao", "url_artigo"],
      });
      return res.json(artigos);
    } catch (error) {
      console.log("Error", error);
    }
  },
};
