const BI = require('../models/bi');
const Endereco = require('../models/endereco');
const Pessoa = require('../models/pessoa');
const Trabalhador = require('../models/Trabalhador');
const Empresa = require('../models/Empresa');
const Queixa = require('../models/Queixa');
const Conta = require('../models/Conta');
const ContaController = require('./ContaController');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    async index(req, res) {

        try {
            const queixas = await Queixa.findAll({
                attributes: ['id', 'assunto', 'facto', 'provincia', 'estado']
            });
            res.status(200).json({ queixas });
        } catch (error) {

            console.log("Error", error);

        }

    },

    async queixas_do_queixoso(req, res) {
        const { trabalhadorID } = req.query;

        try {
            const queixas = await Queixa.findAll({
                attributes: ['id', 'assunto', 'facto', 'provincia', 'estado'],
                where: { trabalhadorID: trabalhadorID }
            });
            //console.log(queixas);
            res.status(200).json({ queixas });
        } catch (error) {

            console.log("Error", error);

        }

    },
    async ler_queixa(req, res) {
        const { id_queixa } = req.query;
        console.log(id_queixa);

        try {
            const queixas = await Queixa.findAll({
                attributes: ['id', 'assunto', 'facto', 'provincia', 'estado'],
                where: { id: id_queixa }
            });
            //console.log(queixas);
            res.status(200).json({ queixas });
        } catch (error) {

            console.log("Error", error);

        }

    },
    async store(req, res) {

        //console.log(req.files['fileContrato'][0].path);
        //console.log(req.files['fileBI'][0].path);
        //console.log(req.body);
        let queixosoID, queixanteID = 0;


        try {

            //dados do bilhete de identidade
            const { _emitidoEm } = req.body;
            console.log(_emitidoEm);
            const { _validoAte } = req.body;
            const _fileBI = req.files['fileBI'][0].path;
            const { _nBI } = req.body;

            const novoBI = await BI.create({
                emitido_em: _emitidoEm,
                valido_ate: _validoAte,
                file: _fileBI,
                numeroBI: _nBI
            });

            // Dados da residência do trabalhador

            const { _bairro } = req.body;
            const { _rua } = req.body;
            const { _casaEdificio } = req.body;
            const { _provincia } = req.body;
            const { _contacto_principal } = req.body;
            const { _contacto_alternativo } = req.body;

            const novoEndereco = await Endereco.create({
                bairro: _bairro,
                rua: _rua,
                casa: _casaEdificio,
                provincia: _provincia,
                telefone_principal: _contacto_principal,
                telefone_alternativo: _contacto_alternativo
            });

            // dados da pessoa

            const { _nome } = req.body;
            const { _sobrenome } = req.body;
            const { _nomePai } = req.body;
            const { _nomeMae } = req.body;
            const { _naturalidade } = req.body;
            const { _altura } = req.body;
            const { _estado_civil } = req.body;
            const { _data_nascimento } = req.body;
            const { _sexo } = req.body;

            const novaPessoa = await Pessoa.create({
                nome: _nome,
                sobrenome: _sobrenome,
                nome_pai: _nomePai,
                nome_mae: _nomeMae,
                naturalidade: _naturalidade,
                altura: _altura,
                estado_civil: _estado_civil,
                data_nascimento: _data_nascimento,
                sexo: _sexo,
                biID: novoBI.id,
                enderecoID: novoEndereco.id
            });
            const { queixante } = req.body;
            const { queixoso } = req.body;
            let _email = "";
            if (queixoso === "Trabalhador") {
                const { _email_pessoal } = req.body;
                _email = _email_pessoal;
                console.log(_email);
            } else if (queixoso === "Empregador") {
                const { _email_empresa } = req.body;
                _email = _email_empresa;
                console.log(_email);

            }
            // dados da conta

            //const senha = Math.random().toString(36).slice(-10);
            const senha = "12345";
            /*const userExist = await Conta.findOne({ where: { email: email } });
            console.log(userExist);
            if (userExist) {
                return res.status(422).json({ msg: 'Por favor, utilize outro email' });
            }*/
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(senha, salt);
            const conta = await Conta.create({ email: _email, senha: passwordHash });
            const novaConta = { conta, senha };

            //dados do trabalhador

            const { _cargo } = req.body;
            const { _area_departamento } = req.body;
            const { _provincia_empresa } = req.body;
            const _tipo = "Normal";

            const novoTrabalhador = await Trabalhador.create({
                cargo: _cargo,
                area_departamento: _area_departamento,
                localizacao_office: _provincia_empresa,
                tipo: _tipo,
                pessoaID: novaPessoa.id,
                contaID: conta.id
            });


            // endereço da empresa

            const { _bairroEmp } = req.body;
            const { _ruaEmp } = req.body;
            const { _edificio } = req.body;
            const { _contacto_empresa } = req.body;

            const novoEnderecoEmp = await Endereco.create({
                bairro: _bairroEmp,
                rua: _ruaEmp,
                edificio: _edificio,
                provincia: _provincia_empresa,
                telefone_principal: _contacto_empresa
            });

            //dados da empresa
            const { _empresa } = req.body;
            const { _nif } = req.body;
            const { _designacao } = req.body;
            const { _email_empresa } = req.body;
            const { _website_empresa } = req.body;

            const novaEmpresa = await Empresa.create({
                nome_empresa: _empresa,
                nif: _nif,
                designacao: _designacao,
                email: _email_empresa,
                url_website: _website_empresa,
                enderecoID: novoEnderecoEmp.id
            })

            // dados da queixa
            const { _assunto_queixa } = req.body;
            const { _descricao_queixa } = req.body;
            const { _modo } = req.body;

            const data_queixa = new Date();
            const data_alteracao_queixa = new Date();
            const _fileContrato = req.files['fileContrato'][0].path;

            if (queixante === "Trabalhador") {
                queixanteID = novoTrabalhador.id;
                queixosoID = novaEmpresa.id;
            } else if (queixante == "Empregador") {
                queixanteID = novaEmpresa.id;
                queixosoID = novoTrabalhador.id;
            }
            const novaQueixa = await Queixa.create({
                assunto: _assunto_queixa,
                facto: _descricao_queixa,
                created_at: data_queixa,
                updated_at: data_alteracao_queixa,
                queixosoID: queixosoID,
                queixanteID: queixanteID,
                empresaID: novaEmpresa.id,
                trabalhadorID: novoTrabalhador.id,
                url_file_contrato: _fileContrato,
                provincia: _provincia_empresa,
                modo: _modo
            })
            return res.status(200).send({
                status: 1,
                message: 'Hi, note que a sua queixa foi enviada para IGT. Deste modo terá que aguardar a guardar a ligação dos nossos Inspectores!',
                Queixa,
                novaConta
            });
        } catch (error) {
            console.log(error);
        }

    },
    async queixar_mesma_empresa(req, res) {

        const { desc_queixa } = req.body;
        const { assunto_queixa } = req.body;
        const { trabalhadorID } = req.body;
        const { empresaID } = req.body;
        const { url_file_contrato } = req.body;
        const { localizacao_queixa } = req.body;
        const data_queixa = new Date();
        const data_alteracao_queixa = new Date();
        const queixoso = trabalhadorID;
        const queixante = empresaID;

        const novaQueixa = await Queixa.create({
            assunto: assunto_queixa,
            facto: desc_queixa,
            created_at: data_queixa,
            updated_at: data_alteracao_queixa,
            queixosoID: queixoso,
            queixanteID: queixante,
            empresaID: empresaID,
            trabalhadorID: trabalhadorID,
            url_file_contrato: url_file_contrato,
            provincia: localizacao_queixa
        })
        return res.status(200).send({
            status: 1,
            message: 'Hi, note que a sua queixa foi enviada para IGT. Deste modo terá que aguardar a guardar a ligação dos nossos Inspectores!',
            Queixa,
        });

    },
    async queixar_outra_empresa(req, res) {


        //dados do trabalhador

        const { _cargo } = req.body;
        console.log(_cargo);
        const { _area_departamento } = req.body;
        const { _localizacaoEmp } = req.body;
        const _tipo = "Normal";
        const { contaID } = req.body;
        const { pessoaID } = req.body;

        const novoTrabalhador = await Trabalhador.create({
            cargo: _cargo,
            area_departamento: _area_departamento,
            localizacao_office: _localizacaoEmp,
            tipo: _tipo,
            pessoaID: pessoaID,
            contaID: contaID
        });


        // endereço da empresa

        const { _bairroEmp } = req.body;
        const { _ruaEmp } = req.body;
        const { _edificio } = req.body;
        const { _contacto_empresa } = req.body;

        const novoEnderecoEmp = await Endereco.create({
            bairro: _bairroEmp,
            rua: _ruaEmp,
            edificio: _edificio,
            provincia: _localizacaoEmp,
            telefone_principal: _contacto_empresa
        });

        //dados da empresa
        const { _empresa } = req.body;
        const { _nif } = req.body;
        const { _designacao } = req.body;
        const { _email_empresa } = req.body;
        const { _website_empresa } = req.body;

        const novaEmpresa = await Empresa.create({
            nome_empresa: _empresa,
            nif: _nif,
            designacao: _designacao,
            email: _email_empresa,
            url_website: _website_empresa,
            enderecoID: novoEnderecoEmp.id
        })

        // dados da queixa
        const { assunto_queixa } = req.body;
        const { _descricao_queixa } = req.body;
        const { modo } = req.body;
        const { queixante } = req.body;
        const { queixoso } = req.body;
        const data_queixa = new Date();
        const data_alteracao_queixa = new Date();
        const _fileContrato = req.files['fileContrato'][0].path;
        console.log(_descricao_queixa);
        if (queixante === "Trabalhador") {
            queixanteID = novoTrabalhador.id;
            queixosoID = novaEmpresa.id;
        } else if (queixante == "Empregador") {
            queixanteID = novaEmpresa.id;
            queixosoID = novoTrabalhador.id;
        }


        const novaQueixa = await Queixa.create({

            facto: desc_queixa,
            created_at: data_queixa,
            updated_at: data_alteracao_queixa,
            queixosoID: queixoso,
            queixanteID: queixante,
            empresaID: empresaID,
            trabalhadorID: trabalhadorID,
            url_file_contrato: url_file_contrato,
            provincia: localizacao_queixa,
            modo: _modo
        })
        return res.status(200).send({
            status: 1,
            message: 'Hi, note que a sua queixa foi enviada para IGT. Deste modo terá que aguardar a guardar a ligação dos nossos Inspectores!',
            Queixa,
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