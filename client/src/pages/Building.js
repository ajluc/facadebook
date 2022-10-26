import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReviewCard from '../components/ReviewCard'
import AddReview from '../components/AddReview'

const Building = () => {
  let { buildingId } = useParams()

  const [buildingDetails, setBuildingDetails] = useState(null)
  const [reviewIds, setReviewIds] = useState('')
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getBuildingDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/building/${buildingId}`
      )
      setBuildingDetails(response.data)

      setReviewIds(response.data.reviews)

      // for (const review of response.data.reviews) {
      //   const res = await axios.get(`http://localhost:3001/review/${review}`)
      //   setReviews(...reviews, res.data)
      // }
    }

    getBuildingDetails()
  }, [buildingId])

  useEffect(() => {
    const getReviews = async () => {
      for (const reviewId of reviewIds) {
        const response = await axios.get(
          `http://localhost:3001/review/${reviewId}`
        )
        setReviews((reviews) => [...reviews, response.data])
      }
    }

    getReviews()
  }, [reviewIds])

  return (
    <div>
      <div className="building-content">
        {buildingDetails ? (
          <div>
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
              {reviews?.map((review) => (
                <ReviewCard
                  key={review._id}
                  pseudonym={review.pseudonym}
                  rating={review.rating}
                  message={review.message}
                />
              ))}
            </div>
            <div className="review-form">
              <AddReview buildingId={buildingId} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Building
