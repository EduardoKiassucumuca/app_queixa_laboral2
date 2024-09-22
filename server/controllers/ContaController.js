const Conta = require("../models/Conta");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Trabalhador = require("../models/Trabalhador");
const Pessoa = require("../models/pessoa");
const Queixa = require("../models/Queixa");
const Empresa = require("../models/Empresa");
const funcionarioIGT = require("../models/FuncionarioIGT");
const speakeasy = require("speakeasy");
var nodemailer = require("nodemailer");
const BI = require("../models/bi");
const Endereco = require("../models/endereco");
const { v4: uuidv4 } = require("uuid");

function gerarSenha(tamanho = 8) {
  const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
  const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";
  const caracteresEspeciais = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  const todosCaracteres =
    letrasMinusculas + letrasMaiusculas + numeros + caracteresEspeciais;

  // Garantir pelo menos um de cada tipo de caractere
  let senha = "";
  senha +=
    letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)];
  senha += numeros[Math.floor(Math.random() * numeros.length)];
  senha +=
    caracteresEspeciais[Math.floor(Math.random() * caracteresEspeciais.length)];

  // Completar o restante da senha
  for (let i = senha.length; i < tamanho; i++) {
    senha +=
      todosCaracteres[Math.floor(Math.random() * todosCaracteres.length)];
  }

  // Embaralhar a senha para evitar uma ordem previsível
  return senha
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
}

module.exports = {
  async logar(req, res) {
    try {
      let trabalhador = "";
      let pessoa = "";
      let igt_funcionario = "";
      let empresa = "";
      let bi = "";
      let endereco = "";
      const { email } = req.body;
      const { senha } = req.body;
      console.log("email:", email);

      const conta = await Conta.findOne({
        attributes: ["id", "email", "senha", "user_logado", "tentativa"],
        where: { email: email },
      });
      //conta.user_logado = true;
      //console.log(conta.id);
      //console.log(conta);
      if (conta) {
        trabalhador = await Trabalhador.findOne({
          attributes: [
            "id",
            "cargo",
            "localizacao_office",
            "tipo",
            "pessoaID",
            "area_departamento",
          ],
          where: { contaID: conta.id },
        });
        empresa = await Empresa.findOne({
          attributes: [
            "id",
            "nome_empresa",
            "tipo",
            "nif",
            "enderecoID",
            "email",
            "url_website",
            "designacao",
          ],
          where: { fk_conta: conta.id },
        });
        if (empresa) {
          endereco = await Endereco.findOne({
            attributes: [
              "id",
              "provincia",
              "bairro",
              "rua",
              "edificio",
              "telefone_principal",
            ],
            where: { id: empresa.enderecoID },
          });
        }
      }
      //console.log(trabalhador);
      if (trabalhador) {
        pessoa = await Pessoa.findOne({
          attributes: [
            "id",
            "nome",
            "sobrenome",
            "biID",
            "enderecoID",
            "naturalidade",
            "estado_civil",
            "altura",
            "sexo",
            "data_nascimento",
          ],
          where: { id: trabalhador.pessoaID },
        });
        bi = await BI.findOne({
          attributes: ["id", "numeroBI", "file", "emitido_em", "valido_ate"],
          where: { id: pessoa.biID },
        });
        endereco_pessoa = await Endereco.findOne({
          attributes: [
            "id",
            "bairro",
            "rua",
            "casa",
            "edificio",
            "provincia",
            "telefone_principal",
            "telefone_alternativo",
          ],
          where: { id: pessoa.enderecoID },
        });
        /*queixa = await Queixa.findOne({
                    attributes: ['id', 'facto', 'estado', 'empresaID', 'url_file_contrato'],
                    where: { trabalhadorID: trabalhador.id }
                });
                empresa = await Empresa.findOne({
                    attributes: ['id', 'nome_empresa'],
                    where: { id: queixa.empresaID }
                });*/
        console.log(trabalhador);
      }
      if (!conta) {
        return res.status(404).json({ msg: "Conta não encontrada!" });
      }

      // check password

      const checkPassword = await bcrypt.compare(senha, conta.senha);

      if (!checkPassword) {
        return res.status(422).json({ msg: "Senha Inválida!" });
      }
      try {
        const secret = speakeasy.generateSecret({ length: 20 });

        // Generate a TOTP code using the secret key
        const code = speakeasy.totp({
          // Use the Base32 encoding of the secret key
          secret: secret.base32,

          // Tell Speakeasy to use the Base32
          // encoding format for the secret key
          encoding: "base32",
        });

        // Log the secret key and TOTP code
        // to the console

        const _secret = uuidv4();
        console.log(_secret);
        const token = jwt.sign({ id: conta.id }, _secret, {
          expiresIn: 3600, // expira em 1 hora
        });

        console.log("Secret: ", secret.base32);
        console.log("Code: ", code);
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "marciocristiano105@gmail.com",
            pass: "opmnzjabkdexosfe",
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        var mailOptions = {
          from: "marciocristiano105@gmail.com",
          to: email,
          subject: "IGT | Queixa laboral",
          text: "Olá aqui tens o teu codigo de acesso:" + code,
        };

        //res.status(200).send({ auth: true, token });
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            res.json({
              msg: "Falha, Verifique sua conexao com a internet",
            });
          } else {
            res.status(200).json({
              sucesso:
                "Olá foi enviado um codigo de verificação para o seu email, por favor verifique!",
              token,
              conta,
              code,
              trabalhador,
              pessoa,
              endereco,
              endereco_pessoa,
              bi,
              igt_funcionario,
              empresa,
            });
          }
        });
      } catch (error) {
        res.json({
          error: "Falha, Verifique sua conexao com a internet",
        });
      }
      // Generate a secret key with a length
      // of 20 characters
    } catch (error) {
      console.log(error),
        res.status(500).json({
          msg: "Aconteceu um erro no servidor, tente novamente mais tarde!",
        });
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
      return res
        .status(200)
        .json({ msg: "Conta criada com sucesso!", novaConta });
    } catch (error) {
      console.log(error);
    }
  },
  async update_tentativa(req, res) {
    const { id_conta } = req.body.params;

    await Conta.update(
      { tentativa: 1 },
      {
        where: {
          id: id_conta,
        },
      }
    );

    return res.status(200).send({
      status: 1,
      message: "Alterado com sucesso!",
    });
  },
  async getEmail(req, res) {
    try {
      const { contaID } = req.query;

      const conta = await Conta.findOne({
        attributes: ["id", "email"],
        where: { id: contaID },
      });
      //console.log(comentarios);
      res.status(200).json({ email: conta.email });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  async alterarSenha(req, res) {
    try {
      const {
        senha_antiga_reg,
        senha_antiga_dig,
        nova_senha,
        nova_senha_confirmada,
        contaID,
      } = req.body;

      // Comparando a senha antiga fornecida com a registrada
      const result = await bcrypt.compare(senha_antiga_dig, senha_antiga_reg);

      if (!result) {
        throw new Error("A Senha antiga não existe");
      }

      // Verificando se as novas senhas coincidem
      if (nova_senha !== nova_senha_confirmada) {
        throw new Error("As senhas não combinam");
      }

      // Gerando novo hash para a nova senha
      const salt = await bcrypt.genSalt(12);
      const passwordHashNovo = await bcrypt.hash(nova_senha, salt);

      // Atualizando a senha no banco de dados
      await Conta.update(
        { senha: passwordHashNovo },
        {
          where: {
            id: contaID,
          },
        }
      );

      // Resposta de sucesso
      res
        .status(200)
        .json({ msg: "A palavra-passe foi atualizada com sucesso" });
    } catch (error) {
      console.error("Error:", error.message);

      // Enviando a mensagem de erro personalizada ao client
      res.status(400).json({ error: error.message });
    }
  },
  async recuperarSenha(req, res) {
    try {
      const { _email } = req.body;

      const conta = await Conta.findOne({
        attributes: ["id", "email"],
        where: { email: _email },
      });
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "marciocristiano105@gmail.com",
          pass: "opmnzjabkdexosfe",
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      const novaSenha = gerarSenha(8);
      const salt = await bcrypt.genSalt(12);
      const passwordHashNovo = await bcrypt.hash(novaSenha, salt);

      // Atualizando a senha no banco de dados
      await Conta.update(
        { senha: passwordHashNovo },
        {
          where: {
            id: conta.id,
          },
        }
      );
      var mailOptions = {
        from: "marciocristiano105@gmail.com",
        to: _email,
        subject: "IGT | Queixa laboral",
        text: "Olá aqui tens a tua nova palavra-passe:" + novaSenha,
      };
      console.log(novaSenha);
      //res.status(200).send({ auth: true, token });
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          res.json({
            msg: "Falha, Verifique sua conexao com a internet",
          });
        } else {
          res.status(200).json({
            sucesso:
              "Olá foi enviado a nova palavra-passe para o seu email, por favor verifique!",
            nova_senha: novaSenha,
          });
        }
      });
    } catch (error) {
      res.json({
        error: "Falha, Verifique sua conexao com a internet",
      });
    }
  },
  async update(req, res) {},
  async delete(req, res) {},
};
