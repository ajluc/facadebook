import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import StyleCard from '../components/StyleCard'
import Building from './Building'

const Home = () => {
  const [styles, setStyles] = useState([])
  const [buildings, setBuildings] = useState([])

  const getStyles = async () => {
    const response = await axios.get(`http://localhost:3001/style`)
    setStyles(response.data.buildings)
  }

  const getBuildings = async () => {
    const response = await axios.get(`http://localhost:3001/building`)
    setBuildings(response.data.buildings)
  }

  useEffect(() => {
    getStyles()
    getBuildings()
  }, [])

  let navigate = useNavigate()
  // const showBuilding = (building) => {
  //   navigate(``)
  // }

  const viewStyle = (id, styleName) => {
    navigate(`/style/${id}`, { styleName: styleName })
  }

  const addBuilding = () => {
    navigate(`/add`)
  }

  return (
    <div>
      <div className="large-card-container">
        <div className="card large-card">
          <div className="details">
            <div className="flex-row">
              <img
                src="../../assets/images/blank-avatar.png"
                alt="avatar"
                className="icon-img"
              />
              <div className="grey-rounded" onClick={addBuilding}>
                <p>what's on ur mind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="large-card-container">
        <div className="card large-card">
          <div className="flex-col details">
            <h3>Architectural Styles</h3>
            <div className="flex-row grey">
              <p className="bold">Admin Post</p>
              <p>&nbsp; &bull; &nbsp;</p>
              <p> Oct 8</p>
            </div>
          </div>
          <section className="container-grid">
            {styles?.map((style) => (
              <StyleCard
                key={style._id}
                onClick={viewStyle}
                styleName={style.styleName}
                timeFrame={style.timeFrame}
                exImg={style.exImg}
                id={style._id}
              />
            ))}
          </section>
        </div>
      </div>
      {buildings?.map((building) => (
        <Building key={building._id} buildingId={building._id} />
        // <p>{building._id}</p>
      ))}
    </div>
  )
}

export default Home
