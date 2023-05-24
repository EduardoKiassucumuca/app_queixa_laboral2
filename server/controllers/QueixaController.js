const Pessoa = require('../models/pessoa');

module.exports = {
    async index(req, res) {

        try {
            const pessoas = await Pessoa.findAll({
                attributes: ['id','nome','sobrenome','bairro','descricao_casa','rua','nbi','provincia','data_nascimento']
            });
            return res.json(pessoas);
        } catch (error) {

            console.log("Error", error);

        }

    },
    async store(req, res) {
        const {nome} = req.params;
        const {sobrenome} = req.params;
        const pessoa = await Pessoa.create({nome: 'nome', sobrenome:'sobrenome',createdAt:'2023-04-05 20:53:50',updatedAt:'2023-04-05 20:53:50'});
        return res.status(200).send({
            status: 1,
            message: 'Pessoa Registrada com sucesso!',
            pessoa
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