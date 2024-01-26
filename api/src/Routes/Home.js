const router = require('express').Router()

const passport = require('passport')

module.exports = (app) => {
  router.route('/').get((req, res) => res.json({ message: 'Home Route' }))

  // middleware de autenticação que utiliza a estratégia JWT
  app.use(
    '/todo-list/home',
    passport.authenticate('jwt', { session: false }),
    router
  )
}
