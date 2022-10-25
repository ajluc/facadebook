import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import BuildingCard from '../components/BuildingCard'

const ViewBuildingsOfStyle = () => {
  const [buildings, setBuildings] = useState([])

  let navigate = useNavigate()
  let { styleId } = useParams()

  const getBuildingsByStyle = async () => {
    const response = await axios.get(
      `http://localhost:3001/building/style/${styleId}`
    )
    setBuildings(response.data.buildings)
    console.log(styleId)
  }

  useEffect(() => {
    getBuildingsByStyle()
  }, [styleId])

  return (
    <div>
      <h3>please work</h3>
    </div>
  )
}

export default ViewBuildingsOfStyle
