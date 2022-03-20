const express = require('express')
const cors = require('cors')

const defaultPath = require('./controllers/defaultPath')

const router = express.Router()

router.get('/:id', (req, res) => defaultPath.getController(req, res))
router.post('/', (req, res) => defaultPath.postController(req, res))

module.exports = router