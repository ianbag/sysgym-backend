module.exports = (sequelize, Sequelize) => {
    const Cidade = sequelize.define('cidade', {
      id: {
      type: Sequelize.STRING
      },
      nome: {
      type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.INTEGER
      }
    });
    
    return Customer;
  }