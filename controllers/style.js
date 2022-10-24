const { Style } = require('../models')

const getAllStyles = async (req, res) => {
  try {
    const buildings = await Style.find()
    return res.status(200).json({ buildings })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllStyles
}
