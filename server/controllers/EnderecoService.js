const Endereco = require("../models/endereco")

module.exports = {
    async store(_bairro, _rua, _casaEdificio, _provincia,_contacto_principal,_contacto_alternativo){
        try {
            if(_bairro && _rua && _casaEdificio && _provincia && _contacto_principal && _contacto_alternativo){
                const novoEndereco = await Endereco.create({
                    bairro: _bairro,
                    rua: _rua,
                    casa: _casaEdificio,
                    provincia: _provincia,
                    telefone_principal: _contacto_principal,
                    telefone_alternativo: _contacto_alternativo,
                })
                return novoEndereco
            }else{
                return null
            }
            
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao registrar o endereco");
        }
    },
}