const { Schema } = require('mongoose')

const Architect = new Schema(
  {
    name: { type: String, required: true },
    dates: { type: String, required: true },
    archStyle: { type: Schema.Types.ObjectId, ref: 'Style' }
  },
  { timestamps: true }
)

module.exports = Architect
