module.exports = (sequelize, Sequelize) => {
    const Cidade = sequelize.define('cidade', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      isDeleted: {
        type: Sequelize.INTEGER, //Sequelize.ENUM
        allowNull: true,
        defaultValue: 0
      }
    });
    
    return Customer;
  }