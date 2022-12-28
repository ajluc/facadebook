import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import ViewBuildingsOfStyle from './pages/ViewBuildingsOfStyle'
import Building from './pages/Building'
import AddBldg from './pages/AddBldg'
import AddStyleForm from './components/AddArchStyle'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddBldg />} />
          <Route path="/addStyle" element={<AddStyleForm />} />
          <Route path="/style/:styleId" element={<ViewBuildingsOfStyle />} />
          <Route path="/building/:buildingId" element={<Building />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
