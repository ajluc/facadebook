import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import BuildingCard from '../components/BuildingCard'

const ViewBuildingsOfStyle = () => {
  const [buildings, setBuildings] = useState([])

  let navigate = useNavigate()
  let { styleId, styleName } = useParams()

  const getBuildingsByStyle = async () => {
    const response = await axios.get(`/building/style/${styleId}`)
    setBuildings(response.data)
  }

  const viewBuilding = (id) => {
    navigate(`/viewbuilding/${id}`)
  }

  useEffect(() => {
    getBuildingsByStyle()
  }, [styleId])

  return (
    <div className="large-card-container">
      <div className="card large-card">
        <div className="flex-col details">
          <h3>{styleName}</h3>
        </div>
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
      </div>
    </div>
  )
}

export default ViewBuildingsOfStyle
