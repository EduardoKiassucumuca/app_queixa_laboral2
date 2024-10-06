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
  async publicar_artigo(req, res) {
    try {
      const _file_artigo = req.files["_file_artigo"][0].path.split("/")[1];
      const { _titulo, _descricao } = req.body;

      const novo_artigo = await Artigo.create({
        titulo: _titulo,
        descricao: _descricao,
        url_artigo: _file_artigo,
      });
      return res.status(200).send({
        status: 1,
        message: "Artigo guardado com sucesso!",
      });
    } catch (error) {
      console.log(error);
    }
  },
  async editar_artigo(req, res) {
    try {
      const _file_artigo = req.files["_file_artigo"][0].path.split("/")[1];
      const { _titulo, _descricao, id_artigo } = req.body;

      const novo_artigo = await Artigo.update(
        {
          titulo: _titulo,
          descricao: _descricao,
          url_artigo: _file_artigo,
        },
        {
          where: { id: id_artigo },
        }
      );
      return res.status(200).send({
        status: 1,
        message: "Artigo guardado com sucesso!",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
