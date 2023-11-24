const carroService = require('./../services/carroService')

module.exports = {
    
    buscarTodos: async (req, res) =>{
        let json = {error: '', result:[]};

        let carros = await carroService.buscarTodos();

        for(let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            })
        }

        res.json(json);
    },

    buscarUm: async(req, res) =>{
        let json = {error: '', result:{}}
        
        let codigo = req.params.codigo

        let carro = await carroService.buscarUm(codigo);

        if(carro) json.result = carro;

        res.status(200).json(json)
    },

    inserir: async(req, res)=>{
        let json = {error: '', result:{}}

        let {modelo, placa} = req.body

        if(modelo && placa){
            let carroCodigo = await carroService.inserir(modelo, placa);
            json.result = {
                codigo: carroCodigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados'
        }

        res.json(json)
    },

    alterarUm: async (req, res) =>{
        let json = {error: '', result:{}}

        let codigo = req.params.codigo

        let {modelo, placa} = req.body

        if(codigo && modelo && placa){
            await carroService.alterarUm(codigo, modelo, placa)

            json.result = {
                codigo,
                modelo,
                placa
            }
        }else{
            json.error = 'Campos não enviados'
        }

        res.json(json)
    },

    deletarUm: async(req,res) =>{
        let json = {error: '', result: {msg:''}}

        let codigo = req.params.codigo

        if(codigo){
            await carroService.deletarUm(codigo)
            json.result.msg = 'Campo deletado com sucesso'
        }else{
            json.error = 'Campos não enviados'
        }

        res.json(json)
    }
}