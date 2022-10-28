import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className='nav-grid'>
        <p className='facadebook' >facadebook</p>
        <div className='link'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/add">Add Building</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
