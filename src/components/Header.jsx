import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <i className="fas fa-car-side" />
        Tech Savvy Rides
      </div>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/clients">Clients</Link></li>
          <li><Link to="/drivers">Drivers</Link></li>
          <li><Link to="/rides">Rides</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </nav>
      <div className="user-info">
        <img src="/assets/user.png" alt="User" />
        <span>Admin</span>
      </div>
    </header>
  );
}
