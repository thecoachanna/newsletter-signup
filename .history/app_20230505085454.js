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
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data)
    const url = `https://us21.api.mailchimp.com/3.0/lists/f04c0ae617`
    
    https.request(url, options, (response) => {

    })

    console.log(firstName,lastName,email)
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}!`)
})

// API Key f9e4624cb98aa032f1f0823fda935159-us21
// Audience ID f04c0ae617