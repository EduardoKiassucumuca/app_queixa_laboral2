const Pessoa = require('../models/pessoa');
const Endereco = require('../models/endereco');
const Trabalhador = require('../models/Trabalhador');
const Conta = require('../models/Conta');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { password } = require('../config/db');
const funcionarioIGT = require('../models/FuncionarioIGT');
const Inspector = require('../models/Inspector');

module.exports = {
    async index(req, res) {

        try {
           const funcionarios = await Trabalhador.findAll({

                attributes: ['id', 'cargo', 'area_departamento', 'localizacao_office', 'tipo', 'pessoaID', 'contaID'],
                required: true,
                where:{tipo:"igt"},
                        include: [
                          
                            {
                                association: 'Pessoa',
                                required: true,
                                include: [
                          
                                    {
                                        association: 'Endereco',
                                        required: true,
                                        
                                    },
                                   
                                ],
                            },
                           
                        ],
            });
            res.status(200).json({ funcionarios });
        } catch (error) {

            console.log("Error", error);

        }
    },
    async get_funcionario(req, res) {

        try {
            const {id} = req.query;
           const funcionarios = await Trabalhador.findAll({

                attributes: ['id', 'cargo', 'area_departamento', 'localizacao_office', 'tipo', 'pessoaID', 'contaID'],
                required: true,
                where:{id: id},
                        include: [
                          
                            {
                                association: 'Pessoa',
                                required: true,
                                include: [
                          
                                    {
                                        association: 'Endereco',
                                        required: true,
                                        
                                    },
                                   
                                ],
                                
                            },
                           
                        ],
            });
            res.status(200).json({ funcionarios });
        } catch (error) {

            console.log("Error", error);

        }
    },
    async store(req, res) {
try{
        //Endereco
        const {telefone_principal} = req.body;
        const {telefone_alternativo} = req.body;

        const novoEndereco = await Endereco.create({
            telefone_principal: telefone_principal,
            telefone_alternativo:telefone_alternativo
        });

   //Registrar Pessoa
        const {_nome} = req.body;
        const {_sobrenome} = req.body;
        const novaPessoa = await Pessoa.create({
            nome: _nome,
            sobrenome:_sobrenome,
            enderecoID: novoEndereco.id
        });
        //Registrar Conta
        const {_email} = req.body;
        const {_senha} = req.body;
        const {_privilegio} = req.body
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(_senha, salt);
        const novaConta = await Conta.create({
            email: _email,
            senha:passwordHash,
            tentativa:0,
            privilegio: _privilegio
       
        });
           //Registrar Trabalhador
           const {_cargo} = req.body;
           const {_departamento} = req.body;
           const {provincia} = req.body;
            const tipo_func = "igt"
           const novoTrabalhador = await Trabalhador.create({
               cargo: _cargo,
               area_departamento:_departamento,
               localizacao_office: provincia,
               tipo: tipo_func,
               pessoaID: novaPessoa.id,
               contaID: novaConta.id
           });
              //Registrar FuncionarioIGT
              
              const novoFuncionarioIGT = await funcionarioIGT.create({
                  trabalhadorID: novoTrabalhador.id,
                  tipo:_cargo
              });
              if(_cargo === "Inspector")
              {
                const novoInspector = await Inspector.create({
                    trabalhadorID: novoTrabalhador.id,
                   
                });
              }

         
        return res.status(200).send({
            status: 1,
            message: 'Funcionario Registrado com sucesso!',
         
        });
    }catch(error){
        console.log("error", error)
        }
    },
    async update(req, res) {

        const {enderecoID} = req.body.params;
        const {telefone1} = req.body.params;
        const {telefone2} = req.body.params;
        
        const endereco = await Endereco.update({
            telefone_principal:telefone1,
            telefone_alternativo:telefone2
        }, {
            where: {
                id: enderecoID
            }
        });
        const {_nome} = req.body.params;
        const {_sobrenome} = req.body.params;
        const {pessoaID} = req.body.params;

        await Pessoa.update({
            nome:_nome,
            sobrenome:_sobrenome
        }, {
            where: {
                id: pessoaID
            }
        });
        const {_id_funcionario} = req.body.params;
        const {office_location} = req.body.params;
        const {_cargo} = req.body.params;
        const {_departamento} = req.body.params;

        await Trabalhador.update({
            cargo:_cargo,
            area_departamento:_departamento,
            localizacao_office: office_location
        }, {
            where: {
                id: _id_funcionario
            }
        });
      
        await funcionarioIGT.update({
            tipo:_cargo,
        }, {
            where: {
                trabalhadorID: _id_funcionario
            }
        });


        return res.status(200).send({
            status:1,
            message: 'Dados atualizados com sucesso!',

        });

    },
    async delete(req, res) {
        const {_id_funcionario} = req.query;
        const {pessoaID} = req.query;
        const {enderecoID} = req.query;

        await funcionarioIGT.destroy({
            where: {
                trabalhadorID: _id_funcionario
            }
        });
        const trabalhador = await Trabalhador.findOne({ where: { id: _id_funcionario } });

        await Trabalhador.destroy({
            where: {
                id: _id_funcionario
            }
        });
        
        await Pessoa.destroy({
            where: {
                id: pessoaID
            }
        });
        await Conta.destroy({
            where: {
                id: trabalhador.contaID
            }
        });
        await Endereco.destroy({
            where: {
                id: enderecoID
            }
        });
          return res.status(200).send({
            status:1,
            message: 'Funcionario apagado com sucesso!',

        });

    }
};