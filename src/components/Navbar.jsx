import { BookOpen, Heart, Search } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <div className="logo-icon">
          <BookOpen size={22} />
        </div>

        <span>Bookly</span>
      </Link>

      <div className="nav-links">

        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
        >
          Home
        </Link>

        <Link
          to="/search"
          className={location.pathname === '/search' ? 'active' : ''}
        >
          <Search size={16} />
          Discover
        </Link>

        <Link
          to="/library"
          className={location.pathname === '/library' ? 'active' : ''}
        >
          <Heart size={16} />
          My Library
        </Link>

      </div>

    </nav>
  )
}

export default Navbar