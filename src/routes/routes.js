const router = require('express').Router()

const carroController = require('./../controllers/carroController')

//router.get('/carros', carroController.buscarTodos)

router
    .route('/carros')
    .get((req, res) => carroController.buscarTodos(req, res))

router
    .route('/carros/:codigo')
    .get((req, res) => carroController.buscarUm(req, res))

router
    .route('/carro')
    .post((req, res) => carroController.inserir(req, res))

router
    .route('/carro/:codigo')
    .put((req, res) => carroController.alterarUm(req, res))

router
    .route('/carro/:codigo')
    .delete(carroController.deletarUm)

module.exports = router