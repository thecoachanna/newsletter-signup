const express = require('express')
const https = require('node:https')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
})

app.post('/', (req, res) => {

    const firstName = req.body.fName
    const lastName = req.body.lName
    const email = req.body.email

    var data = {
        members:
    }

    console.log(firstName,lastName,email)
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}!`)
})

// API Key f9e4624cb98aa032f1f0823fda935159-us21
// Audience ID f04c0ae617