const { Schema } = require('mongoose')

const Review = new Schema(
  {
    pseudonym: { type: String, required: true },
    rating: { type: Number, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Review
