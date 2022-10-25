import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReviewCard from '../components/ReviewCard'

const Building = () => {
  let { buildingId } = useParams()

  const [buildingDetails, setBuildingDetails] = useState(null)

  const getBuildingDetails = async () => {
    const response = await axios.get(
      `http://localhost:3001/building/${buildingId}`
    )
    setBuildingDetails(response.data)
  }

  useEffect(() => {
    getBuildingDetails()
  }, [buildingId])

  return (
    <div>
      <div className="building-content">
        {buildingDetails ? (
          <div>
            <h1>{buildingDetails.building}</h1>
            <section className="image-container">
              <img src={buildingDetails.img} alt="building image" />
            </section>
            <section className="details">
              <div className="flex-row building-details">
                <div className="detail">
                  <p>Architect: {buildingDetails.architect}</p>
                </div>
                <div className="detail">
                  <p>Built: {buildingDetails.dateCompleted}</p>
                </div>
                <div className="detail">
                  <p>Description: {buildingDetails.description}</p>
                </div>
              </div>
            </section>
          </div>
        ) : null}
        {/* <div className="review-container">
          {reviews.map((review) => (
            <ReviewCard key={review._id} />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Building
