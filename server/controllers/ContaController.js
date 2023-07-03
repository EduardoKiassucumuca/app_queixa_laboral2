const Conta = require('../models/Conta');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Trabalhador = require('../models/Trabalhador');
const Pessoa = require('../models/pessoa');
const funcionarioIGT = require('../models/FuncionarioIGT');


module.exports = {
    async logar(req, res) {
        try {
            var trabalhador = '';
            var pessoa = '';
            var igt_funcionario = '';

            const { email, senha } = req.body;

            const conta = await Conta.findOne({
                attributes: ['id', 'email', 'senha', 'user_logado'],
                where: { email: email }
            });
            //conta.user_logado = true;
            //console.log(conta.id);
            if (conta) {
                trabalhador = await Trabalhador.findOne({
                    attributes: ['id', 'cargo', 'localizacao_office', 'pessoaID'],
                    where: { contaID: conta.id }
                });
            }
            // console.log(trabalhador.id);
            if (trabalhador) {
                pessoa = await Pessoa.findOne({
                    attributes: ['id', 'nome', 'sobrenome'],
                    where: { id: trabalhador.pessoaID }
                });

                igt_funcionario = await funcionarioIGT.findOne({
                    attributes: ['id', 'trabalhadorID', 'tipo'],
                    where: { trabalhadorID: trabalhador.id }
                });
            }
            if (!conta) {
                return res.status(404).json({ msg: 'Conta não encontrada!' });
            }

            // check password
            const checkPassword = await bcrypt.compare(senha, conta.senha);

            if (!checkPassword) {
                return res.status(422).json({ msg: 'Senha Inválida!' });
            }

            const secret = "275dfdfsdjskdjkdjsj!djdskdjkjsdk$@g6767";
            //console.log(secret);
            const token = jwt.sign({
                    id: conta._id,
                },
                secret,
            )
            res.status(200).json({ msg: "Autenticação realizada com suceeso!", token, conta, trabalhador, pessoa, igt_funcionario });
        } catch (error) {
            console.log(error),
                res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde!" });
        }
    },
    async store(req, res) {
        try {
            const email = 'cristiano@hotmail.com';
            const senha = 'cris1226@';
            console.log(email);
            const userExist = await Conta.findOne({ where: { email: email } })
            console.log(userExist);
            if (userExist) {
                return res.status(422).json({ msg: 'Por favor, utilize outro email' });
            }
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(senha, salt);
            const conta = await Conta.create({ email: email, senha: passwordHash });
            res.status(200).json({ msg: 'Conta criada com sucesso!' })
        } catch (error) {
            console.log(error);
        }
    },
    async update(req, res) {


    },
    async delete(req, res) {


    }
};