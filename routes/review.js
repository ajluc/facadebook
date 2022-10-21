const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', controllers.reviewController.getAllReviews)
router.post('/new', controllers.reviewController.createReview)
router.get('/:id', controllers.reviewController.getReviewById)
router.put('/:id', controllers.reviewController.updateReview)
router.delete('/:id', controllers.reviewController.deleteReview)

module.exports = router
