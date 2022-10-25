import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import StyleCard from '../components/StyleCard'

const Home = () => {
  const [styles, setStyles] = useState([])

  const getStyles = async () => {
    const response = await axios.get(`http://localhost:3001/style`)
    setStyles(response.data.buildings)
  }

  useEffect(() => {
    getStyles()
  }, [])

  let navigate = useNavigate()
  // const showBuilding = (building) => {
  //   navigate(``)
  // }

  const viewStyle = (id) => {
    navigate(`/style/${id}`)
  }

  return (
    <div>
      <h1>HOME</h1>
      <div className="styles">
        <h2>Architectural Styles</h2>
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
  )
}

export default Home
