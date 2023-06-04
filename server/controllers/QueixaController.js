const BI = require('../models/bi');
const Endereco = require('../models/endereco');
const Pessoa = require('../models/pessoa');
const Trabalhador = require('../models/Trabalhador');
const Empresa = require('../models/Empresa');
const Queixa = require('../models/Queixa');


module.exports = {
    async index(req, res) {

        try {
            const pessoas = await Pessoa.findAll({
                attributes: ['id', 'nome', 'sobrenome', 'bairro', 'descricao_casa', 'rua', 'nbi', 'provincia', 'data_nascimento']
            });
            return res.json(pessoas);
        } catch (error) {

            console.log("Error", error);

        }

    },
    async store(req, res) {
        try {

            // dados do bilhete de identidade
            const { _emitidoEm } = req.body;
            const { _validoAte } = req.body;
            const _file = "/BI.pdf";
            const { _nBI } = req.body;

            const novoBI = await BI.create({
                emitido_em: _emitidoEm,
                valido_ate: _validoAte,
                file: _file,
                numeroBI: _nBI
            });

            // Dados da residência do trabalhador

            const { _bairro } = req.body;
            const { _rua } = req.body;
            const { _casaEdificio } = req.body;
            const { _provincia } = req.body;

            const novoEndereco = await Endereco.create({
                bairro: _bairro,
                rua: _rua,
                casa: _casaEdificio,
                provincia: _provincia
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

            const novaPessoa = await Pessoa.create({
                nome: _nome,
                sobrenome: _sobrenome,
                nome_pai: _nomePai,
                nome_mae: _nomeMae,
                naturalidade: _naturalidade,
                altura: _altura,
                estado_civil: _estado_civil,
                data_nascimento: _data_nascimento,
                biID: novoBI.id,
                enderecoID: novoEndereco.id
            });

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
                pessoaID: novaPessoa.id
            });

            // endereço da empresa

            const { _bairroEmp } = req.body;
            const { _ruaEmp } = req.body;
            const { _edificio } = req.body;

            const novoEnderecoEmp = await Endereco.create({
                bairro: _bairroEmp,
                rua: _ruaEmp,
                edificio: _edificio,
                provincia: _provincia_empresa
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
            const { _descricao_queixa } = req.body;
            const data_queixa = new Date();
            const data_alteracao_queixa = new Date();

            const novaQueixa = await Queixa.create({
                facto: _descricao_queixa,
                created_at: data_queixa,
                updated_at: data_alteracao_queixa,
                queixosoID: novoTrabalhador.id,
                queixanteID: novaEmpresa.id,
                empresaID: novaEmpresa.id,
                trabalhadorID: novoTrabalhador.id
            })
            return res.status(200).send({
                status: 1,
                message: 'Queixa Registrada com sucesso!',
                Queixa
            });
        } catch (error) {
            console.log(error);
        }

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