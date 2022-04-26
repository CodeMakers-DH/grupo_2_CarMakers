module.exports = (sequelize, dataType) => {

    let alias = 'Usuario';
    let cols = {
        idUsuario: {
            type: dataType.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        nombres: {
            type: dataType.STRING(100)
        },
        apellidos: {
            type: dataType.STRING(100)
        },
        email: {
            type: dataType.STRING(100)
        },
        password: {
            type: dataType.STRING(100)
        },
        imgPerfil: {
            type: dataType.STRING(100)
        }};

    let config = {
        tableName: 'usuarios',
        timestamps: false
    };

    const Usuario = sequelize.define(alias, cols, config)

    return Usuario

}