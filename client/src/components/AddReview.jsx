import axios from "axios";
import { useState, useEffect } from "react";

const AddReview = (props) => {
  const initialState = {
    pseudonym: '',
    rating: '',
    message: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [reviewId, setReviewId] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await axios.post(`http://localhost:3001/review/new`, formState)
    setReviewId(res.data.review._id)
    setFormState(initialState)
    // props.getIssues() function that got all our issues so we can instantly post them on the submit
  }

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  const pushReview = async () => {
    const res = await axios.put(`http://localhost:3001/building/${props.buildingId}/${reviewId}`)
  }

  useEffect (() => {
    pushReview()
  }, [reviewId])

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="pseudonym">Your Pseudonym</label>
      <input type='text' id='pseudonym' onChange={handleChange} value={formState.pseudonym} />
      <label htmlFor="rating">Architectural Style:</label>
      <select id="rating" onChange={handleChange} value={formState.rating} >
        <option value='' disabled>- Select Stars -</option>
        <option value={0}>0 Stars</option>
        <option value={1}>1 Star</option>
        <option value={2}>2 Stars</option>
        <option value={3}>3 Stars</option>
        <option value={4}>4 Stars</option>
        <option value={5}>5 Stars</option>
      </select>
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={formState.message}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  )
}

export default AddReview