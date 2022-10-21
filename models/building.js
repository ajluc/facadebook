const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Building = new Schema(
  {
    building: { type: String, required: true },
    dateCompleted: { type: String, required: true },
    architect: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    archStyle: { type: Schema.Types.ObjectId, ref: 'Style' },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Building', Building)
