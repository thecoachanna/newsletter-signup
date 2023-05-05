const express = require('express')
const https = require('node:https')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
})


app.listen(port, () => {
    console.log(`Listening on port: ${port}!`)
})

