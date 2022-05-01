module.exports = (sequelize, dataType) => {

    let alias = 'Producto';
    let cols = {
        idModelo: {
            type: dataType.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        descripcion:{
            type: dataType.TEXT
        },
        nombreModelo: {
            type: dataType.STRING(500)
        },
        imgProducto: {
            type: dataType.STRING(500)
        },
        deliveryEstimado: {
            type: dataType.INTEGER(10) 
        },
        precio: {
            type: dataType.INTEGER(10)
        },
        autonomia: {
            type: dataType.INTEGER(10)
        },
        velocidadMaxima: {
            type: dataType.INTEGER(10)
        },
        tiempoDeCeroCien: {
                type: dataType.INTEGER(10)
        },
        ingreso:{
            type: dataType.DATE
        }};
    let config = {
        tableName: 'modelos_autos',
        timestamps: false
    };

    const Producto = sequelize.define(alias, cols, config)

    return Producto

}