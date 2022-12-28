import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import ReviewCard from '../components/ReviewCard'
import AddReview from '../components/AddReview'

const Building = (props) => {
  let { buildingId } = useParams()
  if (!buildingId) {
    buildingId = props.buildingId
  }

  const [buildingDetails, setBuildingDetails] = useState(null)

  const getBuildingDetails = async () => {
    const response = await axios.get(`/building/${buildingId}`)
    await setBuildingDetails(response.data)
  }

  useEffect(() => {
    getBuildingDetails()
  }, [buildingId])

  let navigate = useNavigate()
  const viewStyle = (id) => {
    navigate(`/viewstyle/${id.target.id}`)
  }

  return (
    <div className="large-card-container">
      <div className="card large-card">
        {buildingDetails?.archStyle ? (
          <div>
            <section className="details flex-col">
              <div className="flex-row">
                <img
                  src={buildingDetails.archStyle.exImg}
                  alt="style"
                  className="icon-img"
                  id={buildingDetails.archStyle._id}
                  onClick={viewStyle}
                />
                <div className="title-info flex-col">
                  <h3>{buildingDetails.architect}</h3>
                  <div className="flex-row grey">
                    <p className="bold">{buildingDetails.building} </p>
                    <p>&nbsp; &bull; &nbsp;</p>
                    <p> Built: {buildingDetails.dateCompleted}</p>
                  </div>
                </div>
              </div>
              <p className="description">{buildingDetails.description}</p>
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
                  edited={review.edited}
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
