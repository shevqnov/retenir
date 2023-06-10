const { Container } = require('brandi')
const { App } = require('./app')
const { databaseModule } = require('./database/database.module')
const { deckModule } = require('./deck/deck.module')
const { TOKENS } = require('./tokens')

const container = new Container()

container.use(TOKENS.databaseService).from(databaseModule)
container.use(TOKENS.deckController).from(deckModule)
container.bind(TOKENS.app).toInstance(App).inSingletonScope()

module.exports = {
    container
}