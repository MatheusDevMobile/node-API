const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.get('/', (req, res) =>{
    res.status(200).send('Back End')
})

app.listen(3000, () =>{
    console.log('BackEnd executando...')
})