const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    pseudonym: { type: String, required: true },
    rating: { type: Number, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Review', Review)
