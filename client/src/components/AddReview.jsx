import axios from "axios";
import { useState } from "react";

const AddReview = (props) => {
  const initialState = {
    pseudonym: '',
    rating: '',
    message: '',
    edited: false,
    buildingId: props.buildingDetails._id
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await axios.post(`http://localhost:3001/review/new`, formState)
    let tempState = {...props.buildingDetails}
    tempState.reviews.push(res.data.review)
    props.setBuildingDetails(tempState)
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  return(
    <form className="card review-container" onSubmit={handleSubmit}>
      {/* <label htmlFor="pseudonym">Your Pseudonym</label> */}
      <input className="edit-review reviewer" type='text' placeholder='Reviewer' id='pseudonym' onChange={handleChange} value={formState.pseudonym} />
      {/* <label htmlFor="rating">Architectural Style:</label> */}
      <select className="edit-review stars" id="rating" onChange={handleChange} value={formState.rating} >
        <option value='' disabled>- Select Rating -</option>
        <option value={0}>0 Stars</option>
        <option value={1}>1 Star</option>
        <option value={2}>2 Stars</option>
        <option value={3}>3 Stars</option>
        <option value={4}>4 Stars</option>
        <option value={5}>5 Stars</option>
      </select>
      <textarea
        id="message"
        className="edit-review"
        placeholder="Add new review..."
        cols="30"
        rows="4"
        onChange={handleChange}
        value={formState.message}
      ></textarea>
      <div className="align-end">
        <button type="submit">Send</button>
      </div>
    </form>
  )
}

export default AddReview