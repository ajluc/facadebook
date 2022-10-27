import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReviewCard from '../components/ReviewCard'
import AddReview from '../components/AddReview'

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
    <div className="large-card-container">
      <div className="card large-card">
        {buildingDetails ? (
          <div>
            <section className="details">
              <h3>{buildingDetails.architect}</h3>
              <div className="flex-row">
                <p>{buildingDetails.building} </p>
                <p>&nbsp; &bull; &nbsp;</p>
                <p> Built: {buildingDetails.dateCompleted}</p>
              </div>
              <p>Description: {buildingDetails.description}</p>
            </section>
            <section className="image-container">
              <img
                src={buildingDetails.img}
                alt="building"
                className="large-img"
              />
            </section>
            <div className="review-container">
              {buildingDetails.reviews?.map((review, index) => (
                <ReviewCard
                  key={review._id}
                  id={review._id}
                  pseudonym={review.pseudonym}
                  rating={review.rating}
                  message={review.message}
                  buildingDetails={buildingDetails}
                  setBuildingDetails={setBuildingDetails}
                  getBuildingDetails={getBuildingDetails}
                  index={index}
                />
              ))}
              <AddReview
                buildingDetails={buildingDetails}
                setBuildingDetails={setBuildingDetails}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Building
