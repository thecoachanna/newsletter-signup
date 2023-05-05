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
                },
            },
        ]
    }

    const jsonData = JSON.stringify(data)
    const url = `https://.api.mailchimp.com/3.0/lists/f04c0ae617`

    const options = {
        method: "POST",
        auth: `coachanna:${API_KEY}`
    }
    
    const request = https.request(url, options, (response) => {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + '/success.html')
        } else {
            res.send("There was an error with signing up, please try again.")
        }

        response.on("data", (data) => {
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData)
    request.end()
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}!`)
})
