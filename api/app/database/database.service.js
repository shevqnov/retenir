const { injected } = require('brandi')
const knex = require('knex')
const { TOKENS } = require('../tokens')

class DatabaseService {
    constructor(config) {
        this.connection = knex(config)
    }
}

injected(DatabaseService, TOKENS.databaseConfig)

module.exports = {
    DatabaseService
}