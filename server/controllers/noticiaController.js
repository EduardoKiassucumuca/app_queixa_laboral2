const Noticia = require("../models/noticia");

module.exports = {
  async index(req, res) {
    try {
      const noticias = await Noticia.findAll({
        attributes: [
          "id",
          "titulo",
          "descricao",
          "url_img_noticia",
          "data",
          "hora",
          "tipo",
        ],
      });
      return res.json(noticias);
    } catch (error) {
      console.log("Error", error);
    }
  },
};
