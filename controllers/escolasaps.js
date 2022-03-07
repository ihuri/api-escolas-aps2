const EscolasAps = require('../models/escolasaps')

module.exports = app => {
  app.get('/all', (req, res) => {
    EscolasAps.all(res)
  })
}