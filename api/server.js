import { expressConfig } from './config/expressConfig.js'
import { Routes as routes } from './src/Routes/Routes.js'

export const server = () => {
  const app = expressConfig()
  const port = app.get('port')

  // RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
  })

  app.use(routes)
}

server()
