const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

app.listen(3000, () => console.log('Server running'))

// STUFF THAT SHOULD BE IN A STATIC WEBSERVER

app.get('/', (req, res) => res.sendFile('public/html/index.html'))

// END OF STUFF THAT SHOULD BE IN A STATIC WEBSERVER

// DEFINE EVENTS API

// TODO: Add mutable, persistent state

// EVENTS STATE
let events = {
  'evs': [
    {
      'name': "Jade's Birthday",
      'date': new Date('November 14, 2020')
    },
    {
      'name': 'Wine and Cheese',
      'date': new Date('November 20, 2020')
    }
  ]
}

// Event get endpoint
app.get('api/events', (req, res) => {
  res.send(JSON.stringify(events))
})
