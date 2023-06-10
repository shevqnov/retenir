const { injected } = require("brandi")
const { TOKENS } = require("../tokens")


class DeckService {
    constructor(deckRepository) {
        this.deckRepository = deckRepository
    }

    getAllDecks() {
        return this.deckRepository.findAll()
    }
}

injected(DeckService, TOKENS.deckRepository)

module.exports = {
    DeckService
}