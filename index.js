const customExpress = require('./config/customExpress')

const app = customExpress()
app.listen(4776, () => console.log('Servidor rodando na porta 4776...'))