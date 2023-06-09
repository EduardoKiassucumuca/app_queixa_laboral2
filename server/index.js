const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const QueixaController = require('./controllers/QueixaController');
require('./config/conexao.js')
const { generateKey } = require("crypto");
const multer = require("multer");
var upload = require("./config/configMulter");


/*const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "edkiassu",
    database: "bd_queixa_laboral",
})*/


app.use(cors());
app.use(express.json());

var cpUpload = upload.fields([{ name: 'fileContrato' }, { name: 'fileBI' }])

app.post('/guardar_queixa', cpUpload, (req, res) => {
    console.log(req.files);

});


/*app.post('/login', (req, res) => {
    const { username } = req.body;
    const { senha } = req.body;

    console.log(username)
    sql_login = "SELECT * From utilizador where username=? AND senha=?";
    db.query(sql_login, [username, senha], function(err, result) {
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
})*/



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

app.listen(3001, () => {
    console.log("Rodando Servidor");
});