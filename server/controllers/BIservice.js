const BI = require("../models/bi")

module.exports = {
    async store(_numeroBI, _file, _emitidoEm, _validoAte){
        try {
            if(_numeroBI && _file && _emitidoEm && _validoAte){
                const novoBI = await BI.create({
                    emitido_em: _emitidoEm,
                    valido_ate:_validoAte,
                    file: _file,
                    numeroBI: _numeroBI
                })
                return novoBI
            }else{
                return null
            }
            
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar novo BI");
        }
    },
}