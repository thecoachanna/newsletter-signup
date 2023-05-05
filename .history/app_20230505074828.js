const express = require('express')
const https = require('node:https')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send()
})


app.listen(port, () => {
    console.log(`Listening on port: ${port}!`)
})

