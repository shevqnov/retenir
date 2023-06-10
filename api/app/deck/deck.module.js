const { DependencyModule } = require("brandi");
const { TOKENS } = require("../tokens");
const { DeckController } = require("./deck.controller");
const { DeckRepository } = require("./deck.repository");
const { DeckService } = require("./deck.service");

const deckModule = new DependencyModule()
deckModule.bind(TOKENS.deckController).toInstance(DeckController).inTransientScope()
deckModule.bind(TOKENS.deckRepository).toInstance(DeckRepository).inSingletonScope()
deckModule.bind(TOKENS.deckService).toInstance(DeckService).inTransientScope()

module.exports = {
    deckModule
}