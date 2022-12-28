const { Style } = require('../models')

const getAllStyles = async (req, res) => {
  try {
    const buildings = await Style.find()
    return res.status(200).json({ buildings })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createStyle = async (req, res) => {
  try {
    const style = await new Style(req.body)
    await style.save()
    return res.status(201).json({
      style
    })
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = {
  getAllStyles,
  createStyle
}
