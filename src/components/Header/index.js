// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="header-flex">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-logo"
      />
      <h1 className="logo-heading">Wave</h1>
    </div>
    <ul className="unOrder-list">
      <Link to="/" className="nav-link">
        <li className="list-item">Home</li>
      </Link>
      <Link to="/about" className="nav-link">
        <li className="list-item">About</li>
      </Link>
      <Link to="/contact" className="nav-link">
        <li className="list-item">Contact</li>
      </Link>
    </ul>
  </nav>
)

export default Header
