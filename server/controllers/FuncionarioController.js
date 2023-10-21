const Pessoa = require('../models/pessoa');
const Endereco = require('../models/endereco');
const Trabalhador = require('../models/Trabalhador');
const Conta = require('../models/Conta');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { password } = require('../config/db');
const funcionarioIGT = require('../models/FuncionarioIGT');

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

         
        return res.status(200).send({
            status: 1,
            message: 'Funcionario Registrado com sucesso!',
         
        });
    }catch(error){
        console.log("error", error)
        }
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