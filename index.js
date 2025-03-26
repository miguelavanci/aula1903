const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('ola codespaces')
})

app.get('/mensage/:nome', (resquest, response) => {
    response.send('boa tarde' + resquest.params['nome'])
})

app.listen(port, () => {
    console.log("aplicação em execução na porta" +port)
})