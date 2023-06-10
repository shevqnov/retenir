const {
    POSTGRES_PASSWORD,
    POSTGRES_USER,
    POSTGRES_DB,
    POSTGRES_PORT,
    POSTGRES_HOST
} = process.env

module.exports = {
    client: 'pg',
    connection: {
        port: POSTGRES_PORT,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        database: POSTGRES_DB,
        host: POSTGRES_HOST
    },
    migrations: {
        directory: '../migrations'
    }
}