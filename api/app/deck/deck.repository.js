const { injected } = require('brandi');
const { Repository } = require('../lib/repository');
const { TOKENS } = require('../tokens');


class DeckRepository {
    constructor(databaseService) {
        this.databaseService = databaseService
    }

    findAll() {
        return this.databaseService.connection.raw(`--sql
            select id, name, cover, description, upvotes from deck;
        `)
    }
}

injected(DeckRepository, TOKENS.databaseService)


module.exports = {
    DeckRepository
}