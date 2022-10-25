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
    setBuildings(response.data)
  }

  const viewBuilding = (id) => {
    navigate(`/building/${id}`)
  }

  useEffect(() => {
    getBuildingsByStyle()
  }, [styleId])

  return (
    <div className="container-grid">
      {buildings?.map((building) => (
        <BuildingCard
          key={building._id}
          id={building._id}
          building={building.building}
          img={building.img}
          architect={building.architect}
          onClick={viewBuilding}
        />
      ))}
    </div>
  )
}

export default ViewBuildingsOfStyle
