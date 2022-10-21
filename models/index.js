const { model } = require('mongoose')
const BuildingSchema = require('./building')
const StyleSchema = require('./style')
const ArchitectSchema = require('./architect')
const ReviewSchema = require('./review')

const Building = model('Building', BuildingSchema)
const Style = model('Style', StyleSchema)
const Architect = model('Architect', ArchitectSchema)
const Review = model('Review', ReviewSchema)

module.exports = {
  Building,
  Style,
  Architect,
  Review
}
