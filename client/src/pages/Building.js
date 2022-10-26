import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReviewCard from '../components/ReviewCard'
import AddReview from '../components/AddReview'

const Building = () => {
  let { buildingId } = useParams()

  const [buildingDetails, setBuildingDetails] = useState(null)
  // const [reviewIds, setReviewIds] = useState('')
  // const [reviews, setReviews] = useState([])

  // const getReviews = async () => {
  //   for (const reviewId of reviewIds) {
  //     const response = await axios.get(
  //       `http://localhost:3001/review/${reviewId}`
  //     )
  //     setReviews((reviews) => [...reviews, response.data])
  //   }
  // }

  const getBuildingDetails = async () => {
    const response = await axios.get(
      `http://localhost:3001/building/${buildingId}`
    )
    setBuildingDetails(response.data)

    // setReviewIds(response.data.reviews)

    // getReviews()
  }

  useEffect(() => {
    getBuildingDetails()
  }, [buildingId])

  return (
    <div>
      <div className="card large-card">
        {buildingDetails ? (
          <div className="building-content">
            <h1>{buildingDetails.building}</h1>
            <section className="image-container">
              <img src={buildingDetails.img} alt="building" />
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
                  index={index}
                />
              ))}
            </div>
            <div className="review-form">
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
