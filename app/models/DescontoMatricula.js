module.exports = (sequelize, DataTypes) => {
    const DescontoMatriculaModel = sequelize.define('DescontoMatricula', {
       id_desconto_matricula:{
            type: DataTypes.INTEGER,
            required: true,
           // autoIncrement: true,
            allowNull: false
       },
        nome:{
            type: DataTypes.STRING,
            required:true,
            autoIncrement: false,
            max: 80
        },
        descricao:{
            type: DataTypes.STRING,
            required:false,
            max: 255,
        },
        isDeleted:{
            type: DataTypes.TINYINT,
            max:1,
            autoIncrement: false,
            allowNull: false,
            defaultValue:1,
        }
    },
        {
            tableName: 'desconto_matricula',
             timestamps: false
         }
    )
   
    return DescontoMatriculaModel
}
