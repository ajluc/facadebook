const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Style = new Schema(
  {
    styleName: { type: String, required: true },
    timeFrame: { type: String, required: true },
    exImg: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Style', Style)
