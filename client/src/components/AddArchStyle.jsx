import axios from "axios";
import { useState } from "react";

const AddStyleForm
 = (props) => {
  const initialState = {
    styleName: '',
    timeFrame: '',
    exImg: '',
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await axios.post(`/api/style/new`, formState)
    console.log(res.data)
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  return(
    <div className="large-card-container">
      <div className="card large-card">
        <div className="review-container">
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Style" id='styleName' onChange={handleChange} value={formState.styleName} />
            <input type='text' placeholder="Era" id='timeFrame' onChange={handleChange} value={formState.timeFrame} />
            <input type='text' placeholder="Image URL" id="exImg" onChange={handleChange} value={formState.exImg} />
            <div className="align-end">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddStyleForm
