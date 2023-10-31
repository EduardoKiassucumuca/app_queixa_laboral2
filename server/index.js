const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const QueixaController = require('./controllers/QueixaController');
require('./config/conexao.js')
const { generateKey } = require("crypto");
const multer = require("multer");
var upload = require("./config/configMulter");

const ContaController = require('./controllers/ContaController');
const InspectorController = require("./controllers/InspectorController");

const http = require('http');
const socketIo = require('socket.io');
const FuncionarioController = require("./controllers/FuncionarioController");

const server = http.createServer(app);
const io = socketIo(server,{cors:{origin:'http://localhost:3000'}});

io.on('connection', (socket) => {
  console.log('A user connected',socket.user);

  socket.on('message', (message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

/*const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "edkiassu",
    database: "bd_queixa_laboral",
})*/


app.use(cors());
app.use(express.json());

var cpUpload = upload.fields([{ name: 'fileContrato' }, { name: 'fileBI' }])
var cpUpload2 = upload.fields([{ name: 'fileContrato' }])

app.post('/guardar_queixa', cpUpload, QueixaController.store);
app.post('/registar/conta', ContaController.store);
app.post('/auth', ContaController.logar);
app.get('/queixas', QueixaController.index);
app.get('/queixas_do_queixoso', QueixaController.queixas_do_queixoso);
app.post('/queixar_mesma_empresa', QueixaController.queixar_mesma_empresa);
app.post('/queixar_outra_empresa', QueixaController.queixar_outra_empresa);
app.get('/ler_queixa', QueixaController.ler_queixa);
app.post('/validar_BI', QueixaController.validarBI);
app.get('/empresas', QueixaController.getEmpresas);
app.post('/add_queixa', cpUpload, QueixaController.add_queixa);
app.post('/add_empresa_queixa', cpUpload, QueixaController.add_empresa_queixa);
app.post('/validar_NIF', QueixaController.validarNIF);
app.get('/trabalhadores', QueixaController.getTrabalhadores);
app.get('/inspectores', InspectorController.index);
app.get('/queixas_inspectores', InspectorController.getQueixasInspector);
app.put('/nomear_inspector', QueixaController.update)
app.put('/atribuir_testemunhas', QueixaController.update_testemunha);
app.post('/add_empregador_queixa', cpUpload2, QueixaController.add_empregador_queixa);
app.put('/atualizarStatusConta', ContaController.update_tentativa)
app.post('/historico_queixa', QueixaController.criar_historico)
app.put('/editar_queixa', QueixaController.update_queixa)
app.post('/novo_funcionario', FuncionarioController.store)
app.get('/funcionarios_igt', FuncionarioController.index);
app.get('/ver_funcionario', FuncionarioController.get_funcionario);
app.put('/editar_funcionario', FuncionarioController.update)
app.delete('/apagar_funcionario', FuncionarioController.delete);
app.get('/queixas_inspectores2', InspectorController.getQueixasInspector2);
app.get('/mais_detalhes', QueixaController.mais_detalhes);

/*app.post('/login', (req, res) => {
    const { username } = req.body;
    const { senha } = req.body;

    console.log(username)
    sql_login = "SELECT * From utilizador where username=? AND senha=?";
    db.query(sql_login, [username, senha], function (err, result) {
        if (err) {
            res.status(500).send(err)
        } else {
            if (result.length > 0) {
                res.status(200).send(result[0])
            } else {
                res.status(400).send("Usuário não existe");
            }
        }
    })
})



/*app.post("/queixar", (req, res) => {
    
        const { nome } = req.body;
        const { sobrenome } = req.body;
        const { bairro } = req.body;
        const { rua } = req.body;
        const { estado_civil } = req.body;
        const { BI } = req.body;
        const { data_nascimento } = req.body;

        // dados empresariais
        const { empresa } = req.body;
        const { provincia_empresa } = req.body;
        const { rua_empresa } = req.body;
        const { website_empresa } = req.body;
        const { email_empresa } = req.body;

        // dados queixa
        const { descricao_queixa } = req.body;
        let sql_queixa = "INSERT INTO Queixa(fk_trabalhador,fk_empregador,descr_queixa)VALUES(?,?,?)";
        let sql_empregador = "INSERT INTO Empregador(nome_empresa,rua_empresa,provincia_empresa,email,website)VALUES(?,?,?,?,?)";
        let sql_trabalhador = "INSERT INTO Trabalhador(nome,sobrenome,estado_civil,nBI,data_nascimento)VALUES(?,?,?,?,?)";

        db.query(sql_trabalhador, [nome, sobrenome, estado_civil, BI, data_nascimento], function(err, results) {
            if (err) throw err;
            var result_trabalhador = results.insertId;

            db.query(sql_empregador, [empresa, rua_empresa, provincia_empresa, email_empresa, website_empresa], function(err, results) {
                if (err) throw err;
                var result_empregador = results.insertId;

                db.query(sql_queixa, [result_trabalhador, result_empregador, descricao_queixa], function(err, result_queixa) {
                    if (err) throw err;
                    console.log("Queixa enviada com sucesso!");
                });
            });
        });

        console.log(nome);
        console.log(empresa);
        console.log(descricao_queixa);
});*/

server.listen(3001, () => {
    console.log("Rodando Servidor");
});