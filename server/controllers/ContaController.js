const Conta = require('../models/Conta');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Trabalhador = require('../models/Trabalhador');
const Pessoa = require('../models/pessoa');
const Queixa = require('../models/Queixa');
const Empresa = require('../models/Empresa');
const funcionarioIGT = require('../models/FuncionarioIGT');
const speakeasy = require('speakeasy');
var nodemailer = require('nodemailer');

module.exports = {
    async logar(req, res) {
        try {
            let trabalhador = '';
            let pessoa = '';
            let igt_funcionario = '';
            let empresa = '';
            const { email } = req.body;
            const senha = "12345";
            console.log("email:", email);

            const conta = await Conta.findOne({
                attributes: ['id', 'email', 'senha', 'user_logado'],
                where: { email: email }
            });
            //conta.user_logado = true;
            //console.log(conta.id);
            //console.log(conta);
            if (conta) {
                trabalhador = await Trabalhador.findOne({
                    attributes: ['id', 'cargo', 'localizacao_office', 'tipo', 'pessoaID'],
                    where: { contaID: conta.id }
                });
                empresa = await Empresa.findOne({
                    attributes: ['id', 'nome_empresa'],
                    where: { fk_conta: conta.id }
                });
                console.log("entrei1");
            }
            //console.log(trabalhador);
            if (trabalhador) {
                pessoa = await Pessoa.findOne({
                    attributes: ['id', 'nome', 'sobrenome'],
                    where: { id: trabalhador.pessoaID }
                });

                igt_funcionario = await funcionarioIGT.findOne({
                    attributes: ['id', 'trabalhadorID', 'tipo'],
                    where: { trabalhadorID: trabalhador.id }
                });

                /*queixa = await Queixa.findOne({
                    attributes: ['id', 'facto', 'estado', 'empresaID', 'url_file_contrato'],
                    where: { trabalhadorID: trabalhador.id }
                });
                empresa = await Empresa.findOne({
                    attributes: ['id', 'nome_empresa'],
                    where: { id: queixa.empresaID }
                });*/
            }
            if (!conta) {
                return res.status(404).json({ msg: 'Conta não encontrada!' });
            }

            // check password

            const checkPassword = await bcrypt.compare(senha, conta.senha);

            if (!checkPassword) {

                return res.status(422).json({ msg: 'Senha Inválida!' });
            }
            // Generate a secret key with a length
            // of 20 characters
            const secret = speakeasy.generateSecret({ length: 20 });

            // Generate a TOTP code using the secret key
            const code = speakeasy.totp({

                // Use the Base32 encoding of the secret key
                secret: secret.base32,

                // Tell Speakeasy to use the Base32 
                // encoding format for the secret key
                encoding: 'base32'
            });

            // Log the secret key and TOTP code
            // to the console
            console.log('Secret: ', secret.base32);
            console.log('Code: ', code);
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'marciocristiano105@gmail.com',
                    pass: 'opmnzjabkdexosfe'
                }
            });

            var mailOptions = {
                from: 'marciocristiano105@gmail.com',
                to: 'kiassucristiano@hotmail.com',
                subject: 'IGT | Queixa laboral',
                text: 'Olá aqui tens o teu codigo de acesso:' + code
            };


            const _secret = "275dfdfsdjskdjkdjsj!djdskdjkjsdk$@g6767";
            //console.log(secret);
            const token = jwt.sign({
                id: conta._id,
            },
                _secret,
            )
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    res.status(200).json({ msg: "Olá foi enviado um codigo de verificação para o seu email, por favor verifique!", token, conta, code, trabalhador, pessoa, igt_funcionario, empresa });
                }
            });
        } catch (error) {
            console.log(error),
                res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde!" });
        }
    },
    async store(req, res) {
        try {
            const { email } = req.query;
            //const senha = Math.random().toString(36).slice(-10);
            const senha = "12345";
            /*const userExist = await Conta.findOne({ where: { email: email } });
            console.log(userExist);
            if (userExist) {
                return res.status(422).json({ msg: 'Por favor, utilize outro email' });
            }*/
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(senha, salt);
            const conta = await Conta.create({ email: email, senha: passwordHash });
            const novaConta = { conta, senha };
            return res.status(200).json({ msg: 'Conta criada com sucesso!', novaConta })
        } catch (error) {
            console.log(error);
        }
    },
    async update(req, res) {


    },
    async delete(req, res) {


    }
};