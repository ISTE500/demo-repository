import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Navigation</h3>
      <ul>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/drivers">Drivers</Link></li>
        <li><Link to="/rides">Rides</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </aside>
  );
}