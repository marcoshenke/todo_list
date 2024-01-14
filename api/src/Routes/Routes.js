import express from 'express'
import { controllerTest } from '../Controllers/controllerTest'

export const Routes = () => {
  const route = express.Router()

  // rota teste
  route.get('/test', controllerTest)
}
