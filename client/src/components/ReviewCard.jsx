import axios from "axios"
import { useState } from "react"

const ReviewCard = (props) => {
  const initialState = {
    message: props.message
  } // want initial state to be the current review data - does that prop already pass thru?
  const [formState, setFormState] = useState(initialState)
  const [conditional, setConditional] = useState(true)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = axios.put(`http://localhost:3001/review/${props.id}`, { message: formState.message})
    console.log(res)
    setConditional(true)
    props.getBuildingDetails()
  }

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  const deleteReview = async () => {
    await axios.delete(`http://localhost:3001/review/${props.id}`, { data: {
      buildingId: props.buildingDetails._id,
      index: props.index
    }})
    let tempState = {...props.buildingDetails}
    tempState.reviews.splice(props.index, 1)
    props.setBuildingDetails(tempState)
  }

  const editReview = () => {
    setConditional(false)
  }

  const cancelEdit = () => {
    setConditional(true)
  }

  return (
    <div className="card review-card">
      <div className="flex-col">
        <p className="bold">{props.pseudonym}</p>
        <p>{props.rating}</p>
        {conditional ? 
        <div>
          <p>{props.message}</p>
          <button onClick={deleteReview}>x</button>
          <button onClick={editReview}>edit</button>
        </div> :
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="message">Message</label> */}
          <textarea
            id="message"
            cols="30"
            rows="4"
            onChange={handleChange}
            value={formState.message}
          ></textarea>
          <button type="submit">Send</button>
          <button onClick={cancelEdit}>Cancel</button>
        </form>}
      </div>
    </div>
  )
}

export default ReviewCard