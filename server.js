const express = require('express')
const app = express()

const PORT = 3000
app.listen(PORT, () => console.log('Server running'))

// STUFF THAT SHOULD BE IN A STATIC WEBSERVER

app.get('/', (req, res) => res.sendfile('static/html/index.html'))
app.use('/a', express.static('static'))

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
app.get('/api/events', (req, res) => {
  res.send(JSON.stringify(events))
})
