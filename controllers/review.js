const { Review, Building } = require('../models')

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    const building = await Building.findById(req.body.buildingId)
    building.reviews.push(review._id)
    await building.save()
    return res.status(201).json({
      review
    })
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

const getAllReviews = async (req, res) => {
  try {
    const buildings = await Review.find()
    return res.status(200).json({ buildings })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
// What is this ^ one used for? Displaying all reviews of ONE building seems like it'll be different

const getReviewById = async (req, res) => {
  try {
    const { id } = req.params
    const review = await Review.findById(id)
    if (review) {
      return res.status(200).json(review)
    }
    return res.status(404).send('Review with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(review)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteReview = async (req, res) => {
  try {
    const deleted = await Review.findByIdAndDelete(req.params.id)
    const building = await Building.findById(req.body.buildingId)
    building.reviews.splice(req.body.index, 1)
    building.save()
    console.log(req.body)
    if (deleted) {
      return res.status(200).send('Review deleted')
    }
    throw new Error('Review not found.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview
}
