// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header-container">
    <div className="wave-header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-image"
      />
      <p className="wave-name">Wave</p>
    </div>

    <ul className="nav-menu">
      <li className="list-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="list-item">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li className="list-item">
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
