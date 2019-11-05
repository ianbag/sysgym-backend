module.exports = function(app) {
 
    const cidade = require('../controller/cidade.controller.js');
 
    // Criar uma nova cidade
    app.post('/api/cidade', cidade.create);
 
    // Listar todas as cidades cadastradas
    app.get('/api/cidade', cidade.findAll);
 
    // Listar cidade pelo Id
    app.get('/api/cidade/:cidadeId', cidade.findById);
 
    // Editar uma cidade existente
    app.put('/api/cidade/:cidadeId', cidade.update);
 
    // Remover uma cidade
    app.delete('/api/cidade/:cidadeId', cidade.delete);
}

/* NÃO SEI SE OS CAMINHOS SERÃO EXATAMENTE ASSIM, MAS QUIS QUE FOSSEM ASSIM POR ENQUANTO */