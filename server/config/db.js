const env = process.env.NODE_ENV || 'development';

const config = {
    development:{
        host: "localhost",
        dialect: 'mysql',
        username: 'root',
        password: 'edkiassu',
        database: 'bd_queixa_laboral2',
        logging: false,
        define: {
            timestamps: false,
            underscored: false,
            freezeTableName: true
        },
    },
    test:{
        host: "localhost",
        dialect: 'mysql',
        username: 'root',
        password: 'edkiassu',
        database: 'bd_queixa_laboral_teste',
        logging: false,
        define: {
            timestamps: false,
            underscored: false,
            freezeTableName: true
        },
    }
};

module.exports = config[env];
