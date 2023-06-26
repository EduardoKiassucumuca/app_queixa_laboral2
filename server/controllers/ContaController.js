const Conta = require('../models/Conta');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
    async logar(req, res) {
        const { email, senha } = req.body;

        const conta = await Conta.findOne({ where: { email: email } });
        console.log(conta);
        if (!conta) {
            return res.status(404).json({ msg: 'Conta não encontrada!' });
        }

        // check password
        const checkPassword = await bcrypt.compare(senha, conta.senha);

        if (!checkPassword) {
            return res.status(422).json({ msg: 'Senha Inválida!' });
        }
        try {
            const secret = "275dfdfsdjskdjkdjsj!djdskdjkjsdk$@g6767";
            //console.log(secret);
            const token = jwt.sign({
                    id: conta._id,
                },
                secret,
            )
            res.status(200).json({ msg: "Autenticação realizada com suceeso!", token });
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
            const conta = await Conta.create({ email: email, senha: passwordHash, trabalhadorID: 55 });
            res.status(200).json({ msg: 'Conta criada com sucesso!' })
        } catch (error) {
            console.log(error);
        }
    },
    async update(req, res) {


    },
    async delete(req, res) {


    },
};