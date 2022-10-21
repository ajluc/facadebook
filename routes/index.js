const { Router } = require('express')
const buildingRouter = require('./building')
const router = Router()

router.get('/', (req, res) => res.send('This is root'))
router.use('/building', buildingRouter)

module.exports = router
