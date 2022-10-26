const { Schema } = require('mongoose')

const Review = new Schema(
  {
    pseudonym: { type: String, required: true },
    rating: { type: Number, required: true },
    message: { type: String, required: true },
    buildingId: { type: Schema.Types.ObjectId, ref: 'Building' }
  },
  { timestamps: true }
)

module.exports = Review
