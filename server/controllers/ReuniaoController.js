const Pessoa = require('../models/pessoa');
const Reuniao = require('../models/reuniao');

module.exports = {
    async index(req, res) {

        try {
            const {fk_inspector} = req.query;
            const reunioes = await Reuniao.findAll({

                attributes: ['id', 'assunto', 'local', 'data', 'hora', 'queixaID', 'fk_trabalhador','fk_empregador', 'obs'],
                required: true,
             
                include: [
                    {
                        association: 'Queixa',
                        required: true,
                        attributes: ['id', 'inspectorID'],
                        include:[{
                            association: 'Inspector',
                            required: true,
                            attributes: ['id', 'trabalhadorID'],
                         
                            include: [
                                {
                                  
                                   
                                        association: 'Trabalhador',
                                        required: true,
                                        include: [
                                            {
                                                association: 'Pessoa',
                                                required: true,
                                                
    
                                            },
    
                                        ],
    
                                   
    
                                },
    
                            ],
                        },],


                    },
              

                
                ],
          
                where: {
                    '$Inspector.trabalhadorID$': fk_inspector
                
                },
            });
            res.status(200).json({ reunioes });
        } catch (error) {

            console.log("Error", error);

        }

    },
    async store(req, res) {
        const {_assunto} = req.body;
        const {_local} = req.body;
        const {_data} = req.body;
        const {_hora} = req.body;
        const {_obs} = req.body;
        const {fk_queixa} = req.body;
        const {fk_trabalhador} = req.body;


        const reuniao = await Reuniao.create({
            assunto: _assunto,
            local:_local,
           data:_data,
           hora:_hora,
           obs:_obs,
           queixaID: fk_queixa,
           fk_trabalhador: fk_trabalhador
        });
        return res.status(200).send({
            status: 1,
            message: 'Reunião agendada com sucesso!',
        });
    },
    async nova_reuniao_empregador(req, res) {
        const {_assunto} = req.body;
        const {_local} = req.body;
        const {_data} = req.body;
        const {_hora} = req.body;
        const {_obs} = req.body;
        const {fk_queixa} = req.body;
        const {fk_empregador} = req.body;


        const reuniao = await Reuniao.create({
            assunto: _assunto,
            local:_local,
           data:_data,
           hora:_hora,
           obs:_obs,
           queixaID: fk_queixa,
           fk_empregador: fk_empregador
        });
        return res.status(200).send({
            status: 1,
            message: 'Reunião agendada com sucesso!',
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