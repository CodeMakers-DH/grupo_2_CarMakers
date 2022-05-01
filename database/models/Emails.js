module.exports = (sequelize, dataType) => {

    let alias = 'Emails';
    let cols = {
        idEmail: {
            type: dataType.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataType.STRING(100)
        }
    };

    let config = {
        tableName: 'emails',
        timestamps: false
    };

    const Emails = sequelize.define(alias, cols, config)

    return Emails

}