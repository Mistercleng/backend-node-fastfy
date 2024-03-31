import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database';
import { transactionsRoutes } from './routes/transactions';

const app = fastify()

app.register(transactionsRoutes,{
  prefix: 'transactions',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Http server is running 🚀')
  })
