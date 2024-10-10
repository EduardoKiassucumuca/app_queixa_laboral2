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
          "estado",
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
          "estado",
        ],
        where: { id: id_noticia },
      });
      return res.json(noticia);
    } catch (error) {
      console.log("Error", error);
    }
  },
  async publicar_noticia(req, res) {
    try {
      const _file_noticia = req?.files["_file_noticia"][0]?.path?.split("/")[1];
      const { _titulo, _descricao, _data, _hora, _tipo } = req.body;

      const nova_noticia = await Noticia.create({
        titulo: _titulo,
        descricao: _descricao,
        data: _data,
        hora: _hora,
        tipo: _tipo,
        url_img_noticia: _file_noticia,
        estado: "online",
      });
      return res.status(200).send({
        status: 1,
        message: "Noticia guardada com sucesso!",
      });
    } catch (error) {
      console.log(error);
    }
  },
  async editar_noticia(req, res) {
    try {
      let _file_noticia;
      if (
        req?.files?.["_file_noticia"] &&
        req.files["_file_noticia"][0]?.path
      ) {
        _file_noticia = req.files["_file_noticia"][0].path.split("/")[1];
      } else {
        _file_noticia = null; // ou outro valor que faça sentido para o seu caso
      }
      const { _titulo, _descricao, id_noticia, _data, _hora, _tipo } = req.body;

      const novo_noticia = await Noticia.update(
        {
          titulo: _titulo,
          descricao: _descricao,
          data: _data,
          hora: _hora,
          tipo: _tipo,
          url_img_noticia: _file_noticia,
        },
        {
          where: { id: id_noticia },
        }
      );
      return res.status(200).send({
        status: 1,
        message: "Noticia guardado com sucesso!",
      });
    } catch (error) {
      console.log(error);
    }
  },
  async eliminar_publicacao(req, res) {
    try {
      const { id_noticia } = req.body;

      const publicacao_eliminada = await Noticia.update(
        {
          estado: "offline",
        },
        {
          where: { id: id_noticia },
        }
      );
      return res.status(200).send({
        status: 1,
        message: "Publicação eliminada com sucesso!",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
