const express = require('express')
const routes = require('./routes')
// const architectRoutes = require('./routes/architect')
const db = require('./db')

// require() imports and middleware ^^

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())

// app.use() middleware ^^

app.use('/', routes) // can this be blank or something?

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
