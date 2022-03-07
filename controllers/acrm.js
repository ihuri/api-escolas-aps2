const ACRM = require('../models/acrm')

module.exports = app => {
    app.get('/acrm/eacf', (req, res) => {
        ACRM.eacf(res)
    })
    app.get('/acrm/cacli', (req, res) => {
        ACRM.cacli(res)
    })
    app.get('/acrm/caegw', (req, res) => {
        ACRM.caegw(res)
    })
    app.get('/acrm/caea', (req, res) => {
        ACRM.caea(res)
    })
    app.get('/acrm/eatw', (req, res) => {
        ACRM.eatw(res)
    })
    app.get('/acrm/car', (req, res) => {
        ACRM.car(res)
    })
    app.get('/acrm/cais', (req, res) => {
        ACRM.cais(res)
    })
    app.get('/acrm/cats', (req, res) => {
        ACRM.cats(res)
    })
    app.get('/acrm/eaa', (req, res) => {
        ACRM.eaa(res)
    })
    app.get('/acrm/eajl', (req, res) => {
        ACRM.eajl(res)
    })
    app.get('/acrm/eajp', (req, res) => {
        ACRM.eajp(res)
    })
    app.get('/acrm/eap', (req, res) => {
        ACRM.eap(res)
    })
    app.get('/acrm/cap', (req, res) => {
        ACRM.cap(res)
    })
    app.get('/acrm/eavb', (req, res) => {
        ACRM.eavb(res)
    })
}