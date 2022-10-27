const { Building } = require('../models')

const createBuilding = async (req, res) => {
  try {
    const building = await new Building(req.body)
    await building.save()
    return res.status(201).json({
      building
    })
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

const getAllBuildings = async (req, res) => {
  try {
    const buildings = await Building.find()
    return res.status(200).json({ buildings })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const searchBuilding = async (req, res) => {
  try {
    const { name } = req.params
    const building = await Building.find({
      building: { $regex: name, $options: 'i' }
    })
    if (building) {
      return res.status(200).json(building)
    }
    return res.status(404).send('Building with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBuildingById = async (req, res) => {
  try {
    const { id } = req.params
    const building = await Building.findById(id).populate('reviews')
    if (building) {
      return res.status(200).json(building)
    }
    return res.status(404).send('Building with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateBuilding = async (req, res) => {
  try {
    const building = await Building.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(building)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteBuilding = async (req, res) => {
  try {
    const deleted = await Building.findByIdAndDelete(req.params.id)
    if (deleted) {
      return res.status(200).send('Building deleted')
    }
    throw new Error('Building not found.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addReviewToBuilding = async (req, res) => {
  try {
    const building = await Building.findByIdAndUpdate(req.params.id, {
      $push: { reviews: req.params.review_id }
    })
    res.status(200).json(building)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addStyleToBuilding = async (req, res) => {
  try {
    const building = await Building.findByIdAndUpdate(req.params.id, {
      archStyle: req.params.style_id
    })
    res.status(200).json(building)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const searchByStyle = async (req, res) => {
  try {
    const building = await Building.find({
      archStyle: req.params.style_id
    })
    res.status(200).json(building)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createBuilding,
  getAllBuildings,
  searchBuilding,
  getBuildingById,
  updateBuilding,
  deleteBuilding,
  addReviewToBuilding,
  addStyleToBuilding,
  searchByStyle
}
