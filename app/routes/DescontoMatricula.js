const express = require('express')
const route = express.Router()

const DescontoMatriculaController = require('../controllers/DescontoMatricula')
//const DescontoMatriculaController = require('D:\TRALHAS\Projeto\sysgym-backend\app\controllers\DescontoMatricula');
route.get('/DescontoMatricula', DescontoMatriculaController.get)
route.get('/DescontoMatricula/:id', DescontoMatriculaController.getById)
route.post('/DescontoMatricula', DescontoMatriculaController.create)
route.put('/DescontoMatricula/:id', DescontoMatriculaController.update)
route.delete('/DescontoMatricula/:id', DescontoMatriculaController.delete)

module.exports = route