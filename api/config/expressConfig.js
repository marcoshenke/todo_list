import express from 'express'
import bodyParser from 'body-parser'
import { routeTest } from '../src/Routes/Routes'
import config from 'config'

export const expressConfig = () => {
  const app = express()

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'))

  // MIDDLEWARES
  app.use(bodyParser.json())

  //Routes
  routeTest(app)

  return app
}
