const { container } = require('./app/container')
const { TOKENS } = require('./app/tokens')

container.get(TOKENS.app).start()