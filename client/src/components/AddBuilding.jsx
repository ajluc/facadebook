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
    let res = await axios.post(`http://localhost:3001/building/new`, formState)
    console.log(res.data)
    setFormState(initialState)
    // props.getIssues() function that got all our issues so we can instantly post them on the submit
  }

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="archStyle">Architectural Style:</label>
      <select id="archStyle" onChange={handleChange} value={formState.archStyle} >
        <option value='' disabled>- Select Style -</option>
        <option value='63569d7fa129087b76c99a54'>Modern</option>
        <option value='63569d7fa129087b76c99a55'>Post-Modern</option>
        <option value='63569d7fa129087b76c99a56'>Neoclassical</option>
        <option value='63569d7fa129087b76c99a57'>Classical</option>
        <option value='63569d7fa129087b76c99a58'>Parametric</option>
      </select>
      <label htmlFor="building">Building Title</label>
      <input type='text' id='building' onChange={handleChange} value={formState.building} />
      <label htmlFor="architect">Architect</label>
      <input type='text' id='architect' onChange={handleChange} value={formState.architect} />
      <label htmlFor="dateCompleted">Date Completed</label>
      <input type='text' id="dateCompleted" onChange={handleChange} value={formState.dateCompleted} />
      <label htmlFor="img">Image URL</label>
      <input type='text' id="img" onChange={handleChange} value={formState.img} />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={formState.description}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  )
}

export default AddBuildingForm