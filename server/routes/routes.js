const express = require('express');

const router = express.Router();

const PessoaController = require('../controllers/PessoaController');
/*router.get('/', (request, response) => {
    return response.send("Bem Vindo");
});*/

router.get('/pessoas', PessoaController.index);
router.post('/guardar_pessoas', PessoaController.store);
router.put('/pessoas/:pessoa_id', PessoaController.update);
router.delete('/pessoas/:pessoa_id', PessoaController.delete);

module.exports = router;