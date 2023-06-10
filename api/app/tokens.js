const { token } = require('brandi')

const TOKENS = {
    app: token('App'),
    databaseService: token('Database Service'),
    databaseConfig: token('Database Config'),
    deckService: token('Deck service'),
    deckRepository: token('Deck Repository'),
    deckController: token('Deck controller')
}

module.exports = {
    TOKENS
}