const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const routes = require('./routes')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads'))

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URL, {
    'auth': { 'authSource': 'admin' },
    'user': String(process.env.MONGO_USER),
    'pass': process.env.MONGO_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Backend Connected')
}).catch(console.error)

app.use('/api', routes)
app.listen(port, () => console.log(`Server Start at Port ${port}`))
