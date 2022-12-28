import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import ViewBuildingsOfStyle from './pages/ViewBuildingsOfStyle'
import Building from './pages/Building'
import AddBldg from './pages/AddBldg'
import AddStyleForm from './components/AddArchStyle'
import AddBuildingForm from './components/AddBuilding'

const App = () => {
  const [styles, setStyles] = useState([])

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home styles={styles} setStyles={setStyles} />}
          />
          <Route path="/about" element={<About />} />
          {/* <Route path="/add" element={<AddBldg styles={styles} />} /> */}
          <Route path="/add" element={<AddBuildingForm styles={styles} />} />
          <Route path="/addStyle" element={<AddStyleForm />} />
          <Route
            path="/viewstyle/:styleId"
            element={<ViewBuildingsOfStyle />}
          />
          <Route path="/viewbuilding/:buildingId" element={<Building />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
