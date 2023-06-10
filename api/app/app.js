const fastify = require('fastify')({ logger: true })
const cors = require('@fastify/cors')
const { injected } = require('brandi')
const { TOKENS } = require('./tokens')

const {
    CLIENT_ORIGIN,
    NODE_HOST,
    NODE_PORT
} = process.env

class App {
    constructor(deckController) {
        this.deckController = deckController
    }

    init() {
        fastify.register(cors, {
            origin: [new RegExp(CLIENT_ORIGIN)]
        })
    }

    registerControllers() {
        /**
         * @todo register controllers
         */
        fastify.register(this.deckController.routes, { prefix: 'deck' })
        fastify.get('/', (_, res) => {
            res.status(200).send()
        })
    }

    async start() {
        try {
            this.init()
            this.registerControllers()
            fastify.listen({ host: NODE_HOST, port: NODE_PORT })
        } catch (err) {
            fastify.log.error(err)
            process.exit(1)
        }
    }
}

injected(App, TOKENS.deckController)

module.exports = {
    App
}