const { DependencyModule } = require("brandi")
const { TOKENS } = require("../tokens")
const databaseConfig = require("./database.config")
const { DatabaseService } = require("./database.service")

const databaseModule = new DependencyModule()

databaseModule.bind(TOKENS.databaseConfig).toConstant(databaseConfig)
databaseModule.bind(TOKENS.databaseService).toInstance(DatabaseService).inSingletonScope()

module.exports = {
    databaseModule
}