const { DescontoMatriculaModel} = require('../models')
class DescontoMatricula{
    get(req,res){
        DescontoMatriculaModel.findAll({
            raw:true,
            where:{isDeleted:1}
        })
            .then(DescontoMatricula=>res.json(DescontoMatricula))
            .catch(error=> res.json(error))
    }
    getById(req, res) {
        DescontoMatriculaModel.findOne({
            where: {
                id_desconto_matricula: req.params.id
            }
        })
        .then(DescontoMatricula=>res.json(DescontoMatricula))
        .catch(error=> res.json(error))
    }
    getByName(req,res){
        DescontoMatriculaModel.findOne({
            where:{
                nome: req.params.nome,
                preco: req.params.preco
            }
        })
    }
    create(req, res) {
        DescontoMatriculaModel.create(req.body)
        .then(DescontoMatricula=>res.json(DescontoMatricula))
        .catch(error=> res.json(error))
    }

    update(req, res) {
        DescontoMatriculaModel.update(req.body, {
            where: {
                id_desconto_matricula: req.params.id,
                isDeleted: 1
            }
        })
        .then(DescontoMatricula=>res.json(DescontoMatricula))
        .catch(error=> res.json(error))
    }

    delete(req, res) {
        DescontoMatriculaModel.update({STATUS: 0}, {
            where: {
                id_desconto_matricula: req.params.id,
                isDeleted: 1
            }
        })
        .then(DescontoMatricula=>res.json(DescontoMatricula))
        .catch(error=> res.json(error))
    }
}

module.exports= new DescontoMatricula();
