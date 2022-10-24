const { Schema } = require('mongoose')

const Style = new Schema(
  {
    styleName: { type: String, required: true },
    timeFrame: { type: String, required: true },
    exImg: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Style
