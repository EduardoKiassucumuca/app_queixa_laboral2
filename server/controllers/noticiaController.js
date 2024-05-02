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
  async getMaisDetalhes(req, res) {
    try {
      const { id_noticia } = req.query;
      const noticia = await Noticia.findOne({
        attributes: [
          "id",
          "titulo",
          "descricao",
          "url_img_noticia",
          "data",
          "hora",
          "tipo",
        ],
        where: { id: id_noticia },
      });
      return res.json(noticia);
    } catch (error) {
      console.log("Error", error);
    }
  },
};
