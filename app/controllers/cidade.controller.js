const db = require('../models/index.js');
const Cidade = db.cidades; //fiquei em dúvida aqui, nem sei se tá certo

exports.create = (req, res) => {  
  Cidade.create({  
    id: req.params.id,
    nome: req.body.nome,
    estado: req.body.estado,
    isDeleted: req.params.isDeleted
  }).then(cidade => {    
    res.send(cidade);
  });
};
 
exports.findAll = (req, res) => {
  Cidade.findAll().then(cidades => {
    res.send(cidades);
  });
};
 
exports.findById = (req, res) => {  
  Cidade.findById(req.params.cidadeId).then(cidade => {
    res.send(cidade);
  })
};
 

exports.update = (req, res) => {
  const id = req.params.cidadeId;
  Cidade.update( { 
    nome: req.body.nome,
    estado: req.body.estado
    }, 
    { where: {id: req.params.cidadeId} }
    ).then(() => {
        res.status(200).send("Cidade atualizada com sucesso! id: " + id);
    });
};
 
// AQUI DEVE SER FEITO A REMOÇÃO LÓGICA...NÃO?
exports.delete = (req, res) => {
  const id = req.params.cidadeId;
  Cidade.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('Cidade removida com sucesso! id: ' + id);
  });
};