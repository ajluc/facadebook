import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import StyleCard from '../components/StyleCard'

const Home = () => {
  const [styles, setStyles] = useState([])

  const getStyles = async () => {
    console.log('axios pinged')
    const response = await axios.get(`http://localhost:3001/style`)
    console.log(response)
    setStyles(response.data.buildings)
  }

  useEffect(() => {
    getStyles()
  }, [])

  return (
    <div>
      <h1>HOME</h1>
      <div className="styles">
        <h2>Architectural Styles</h2>
        <section className="container-grid">
          {styles.map((style) => (
            <StyleCard
              key={style._id}
              onClick={() => {
                console.log(style.styleName)
              }}
              styleName={style.styleName}
              timeFrame={style.timeFrame}
              exImg={style.exImg}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
