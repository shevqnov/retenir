const { injected } = require('brandi')
const { TOKENS } = require('../tokens')

class DeckController {
    constructor(deckService) {
        this.deckService = deckService
    }
    routes = async (fastify, options) => {
        fastify.get('/', async () => await this.deckService.getAllDecks())
    }
}

injected(DeckController, TOKENS.deckService)

module.exports = {
    DeckController
}