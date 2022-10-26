import axios from "axios"

const ReviewCard = (props) => {
  
  const deleteReview = async () => {
    await axios.delete(`http://localhost:3001/review/${props.id}`, { data: {
      buildingId: props.buildingDetails._id,
      index: props.index
    }})
    let tempState = {...props.buildingDetails}
    tempState.reviews.splice(props.index, 1)
    props.setBuildingDetails(tempState)
  }

  return (
    <div className="card review-card">
      <div className="flex-col">
        <p>{props.pseudonym}</p>
        <p>{props.rating}</p>
        <p>{props.message}</p>
        <button onClick={deleteReview}>x</button>
      </div>
    </div>
  )
}

export default ReviewCard