import axios from "axios";
import { useState } from "react";

const AddBuildingForm = (props) => {
  const initialState = {
    building: '',
    dateCompleted: '',
    architect: '',
    description: '',
    img: '',
    archStyle: '',
    reviews: []
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await axios.post(`/building/new`, formState)
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
            <input type='text' placeholder="Architect" id='architect' onChange={handleChange} value={formState.architect} />
            <input type='text' placeholder="Building Title or Address" id='building' onChange={handleChange} value={formState.building} />
            <select id="archStyle" onChange={handleChange} value={formState.archStyle} >
              <option value='' disabled>- Architectural Style -</option>
              <option value='63569d7fa129087b76c99a54'>Modern</option>
              <option value='63569d7fa129087b76c99a55'>Post-Modern</option>
              <option value='63569d7fa129087b76c99a56'>Neoclassical</option>
              <option value='63569d7fa129087b76c99a57'>Classical</option>
              <option value='63569d7fa129087b76c99a58'>Parametric</option>
            </select>
            <input type='text' placeholder="Date Completed" id="dateCompleted" onChange={handleChange} value={formState.dateCompleted} />
            <input type='text' placeholder="Image URL" id="img" onChange={handleChange} value={formState.img} />
            <textarea
              id="description"
              placeholder="Description..."
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formState.description}
            ></textarea>
            <div className="align-end">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddBuildingForm