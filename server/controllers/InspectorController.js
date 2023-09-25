const Inspector = require('../models/Inspector');

module.exports = {
    async index(req, res) {

        try {
            inspectores = await Inspector.findAll({

                attributes: ['id', 'funcionarioIGTID'],
                required: true,

                include: [
                    {
                        association: 'funcionarioigt',
                        attributes: ['id', 'trabalhadorID', 'tipo'],
                        required: true,
                        include: [{
                            association: 'Trabalhador',
                            required: true,
                            include: [
                                {
                                    association: 'Pessoa',
                                    required: true,
                                    include: [{
                                        association: 'BI',
                                        required: true
                                    }],

                                },

                            ],

                        }],

                    },

                ],

            });

            res.status(200).json({ inspectores });
        } catch (error) {

            console.log("Error", error);

        }

    },
    async store(req, res) {
        const { nome } = req.params;
        const { sobrenome } = req.params;
        const pessoa = await Pessoa.create({ nome: 'nome', sobrenome: 'sobrenome', createdAt: '2023-04-05 20:53:50', updatedAt: '2023-04-05 20:53:50' });
        return res.status(200).send({
            status: 1,
            message: 'Pessoa Registrada com sucesso!',
            pessoa
        });
    },
    async update(req, res) {

        const { nome } = req.params;
        const { sobrenome } = req.params;

        const { pessoa_id } = req.params;

        await Pessoa.update({ nome: 'Muka', sobrenome: 'Cristiano' }, {
            where: {
                id: pessoa_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: 'Pessoa atualizada com sucesso!',

        });

    },
    async delete(req, res) {
        const { pessoa_id } = req.params;

        await Pessoa.destroy({
            where: {
                id: pessoa_id
            }
        });
        return res.status(200).send({
            status: 1,
            message: 'Pessoa apagada com sucesso!',

        });

    }
};