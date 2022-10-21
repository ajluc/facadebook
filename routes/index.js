const { Router } = require('express')
const buildingRouter = require('./building')
const reviewRouter = require('./review')
const router = Router()

router.get('/', (req, res) => res.send('This is root'))
router.use('/building', buildingRouter)
router.use('/review', reviewRouter)

module.exports = router
