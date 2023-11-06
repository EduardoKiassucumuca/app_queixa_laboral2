const Nota = require('../models/nota');
const Pessoa = require('../models/pessoa');

module.exports = {
    async index(req, res) {

        try {
           const  {fk_queixa} = req.query;
            const notas = await Nota.findAll({
                attributes: ['id','queixaID','nota'],
                where:{queixaID: fk_queixa}
            });
            return res.json(notas);
        } catch (error) {

            console.log("Error", error);

        }

    },
    async store(req, res) {
        const {_nota} = req.body;
        const {fk_queixa} = req.body;
        const nota = await Nota.create({
            queixaID: fk_queixa, 
            nota:_nota
        });
        return res.status(200).send({
            status: 1,
            message: 'Nota Registrada com sucesso!',
        
        });
    },
    async update(req, res) {

        const {nome} = req.params;
        const {sobrenome} = req.params;

        const {pessoa_id} = req.params;

        await Pessoa.update({nome:'Muka', sobrenome:'Cristiano'}, {
            where: {
                id: pessoa_id
            }
        });

        return res.status(200).send({
            status:1,
            message: 'Pessoa atualizada com sucesso!',

        });

    },
    async delete(req, res) {
        const {pessoa_id} = req.params;

        await Pessoa.destroy({
            where: {
                id: pessoa_id
            }
        });
          return res.status(200).send({
            status:1,
            message: 'Pessoa apagada com sucesso!',

        });

    }
};