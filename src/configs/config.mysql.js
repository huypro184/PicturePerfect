require('dotenv').config();

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.MYSQL_DB_HOST,
        "port": process.env.MYSQL_DB_PORT,
        "dialect": "mysql",
        "define": {
            freezeTableName: true,
        },
        "migrationsPath": "src/databases/migrations"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.MYSQL_DB_HOST,
        "port": process.env.MYSQL_DB_PORT,
        "dialect": "mysql",
        "define": {
            freezeTableName: true,
        }
    },
};
