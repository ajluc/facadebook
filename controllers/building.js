const Building = require('../models/building')

const createBuilding = async (req, res) => {
  try {
    const building = await new Building(req.body)
    await building.save()
    return res.status(201).json({
      building
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createBuilding
}
