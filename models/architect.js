const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Architect = new Schema(
  {
    name: { type: String, required: true },
    dates: { type: String, required: true },
    archStyle: { type: Schema.Types.ObjectId, ref: 'Style' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Architect', Architect)
