const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

// router.get('/', (req, res) => res.send('This is building root'))

router.get('/', controllers.buildingController.getAllBuildings)
router.post('/new', controllers.buildingController.createBuilding)
router.get('/:id', controllers.buildingController.getBuildingById)
router.put('/:id', controllers.buildingController.updateBuilding)
router.put(
  '/:id/:review_id',
  controllers.buildingController.addReviewToBuilding
)
router.put(
  '/:id/style/:style_id',
  controllers.buildingController.addStyleToBuilding
)
router.delete('/:id', controllers.buildingController.deleteBuilding)
router.get('/search/:name', controllers.buildingController.searchBuilding)
router.get('/style/:style_id', controllers.buildingController.searchByStyle)

module.exports = router
