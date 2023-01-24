import { Link } from 'react-router-dom'
// import Search from '../components/Search'

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav-grid'>
        <p className='facadebook bold blue' >facadebook</p>
        <div className='link'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/add">Add Building</Link>
        </div>
        {/* <Search onSumbit={() => console.log('submit')} onChange={() => console.log('change')} value=''/> */}
      </nav>
    </header>
  )
}

export default Header
