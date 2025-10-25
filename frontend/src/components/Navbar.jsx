import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Admin Dashboard
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">Dashboard</Link>
          </li>
          <li>
            <Link to="/metrics" className="navbar-link">Metrics</Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
