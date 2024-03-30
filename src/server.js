'use strict'
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const fastify_1 = __importDefault(require('fastify'))
const database_1 = require('./database')
const app = (0, fastify_1.default)()
app.get('/hello', async () => {
  const tables = await (0, database_1.knex)('sqlite_schema').select('*')
  return tables
})
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Http server is running 🚀')
  })
