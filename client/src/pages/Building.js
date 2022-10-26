import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReviewCard from '../components/ReviewCard'

const Building = () => {
  let { buildingId } = useParams()

  const [buildingDetails, setBuildingDetails] = useState(null)
  const [reviews, setReviews] = useState('')

  const getBuildingDetails = async () => {
    const response = await axios.get(
      `http://localhost:3001/building/${buildingId}`
    )
    setBuildingDetails(response.data)
    setReviews(response.data.reviews)
  }

  useEffect(() => {
    getBuildingDetails()
  }, [buildingId])

  // useEffect(() => {
  //   getReview(buildingDetails.reviews[0])
  // }, [buildingDetails])

  // create a function
  // for each buildingDetails.reviews array element (review ID)
  // axios call to get that review
  // push to array called reviews
  // const getReview = async (reviewId) => {
  //   const response = await axios.get(`http://localhost:3001/review/${reviewId}`)
  //   setReviews(...reviews, response.data)
  // }

  // const getAllReviews = (reviewArray) => {
  //   reviewArray.forEach((review) => getReview(review))
  // }

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
            <div className="review-container">
              {/* {reviews?.map((review) => (
                <ReviewCard
                  key={review._id}
                  pseudonym={review.pseudonym}
                  rating={review.rating}
                  message={review.message}
                />
              ))} */}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Building
