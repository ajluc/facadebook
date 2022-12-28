import axios from "axios"
import { useState } from "react"

const ReviewCard = (props) => {
  const initialState = {
    message: props.message
  } // want initial state to be the current review data - does that prop already pass thru?
  const [formState, setFormState] = useState(initialState)
  const [conditional, setConditional] = useState(true)
  const [edited, setEdited] = useState(props.edited)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = axios.put(`/review/${props.id}`, { message: formState.message, edited: edited})
    console.log(res)
    setConditional(true)
    props.getBuildingDetails()
  }

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  const deleteReview = async () => {
    await axios.delete(`/review/${props.id}`, { data: {
      buildingId: props.buildingDetails._id,
      index: props.index
    }})
    let tempState = {...props.buildingDetails}
    tempState.reviews.splice(props.index, 1)
    props.setBuildingDetails(tempState)
  }

  const editReview = () => {
    setConditional(false)
    setEdited(true)
  }

  const cancelEdit = () => {
    setConditional(true)
  }

  return (
    <div className="card review-card">
      <div className="flex-col">
        <div className="flex-row space-between">
          <div className="flex-row">
            <h4>{props.pseudonym}</h4>
            {edited && <p className="edited grey">&nbsp; &bull; &nbsp;edited</p>}
          </div>
          <div>
            {/* {conditional && <button onClick={editReview}>edit</button>} */}
            <button className="delete grey" onClick={deleteReview}>x</button>
          </div>
        </div>
        <p className="grey">{props.rating} stars</p>
        {conditional ? 
        <p className="review-body" onClick={editReview}>{props.message}</p> :
        <form onSubmit={handleSubmit}>
          <textarea className="edit-review"
            id="message"
            cols="30"
            rows="4"
            onChange={handleChange}
            value={formState.message}
          ></textarea>
          <div className="align-end">
            <button onClick={cancelEdit}>Cancel</button>
            <button type="submit">Send</button>
          </div>
        </form>}
      </div>
    </div>
  )
}

export default ReviewCard