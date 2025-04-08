import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './Rides.css';

export default function Rides() {
  const [rides, setRides] = useState([
    {
      id: 1,
      client: 'John Doe',
      avatar: '/assets/client1.jpg',
      status: 'pending',
      pickup: '123 Main St',
      dropoff: '456 Oak Ave',
    },
  ]);

  const [search, setSearch] = useState('');
  const filteredRides = rides.filter((r) =>
    r.client.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <main>
        <div className="dashboard">
          <Sidebar />
          <div className="content">
            <div className="content-header">
              <h2>Ride Requests</h2>
            </div>

            <div className="request-filters">
              <div className="search-box">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Search rides..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="filter-dropdown">
                <select>
                  <option>Status: All</option>
                  <option>Pending</option>
                  <option>Assigned</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>

            <div className="status-tabs">
              <div className="status-tab active">All <span className="request-count">1</span></div>
              <div className="status-tab">Pending</div>
              <div className="status-tab">Completed</div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Pickup</th>
                  <th>Dropoff</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRides.map((ride) => (
                  <tr key={ride.id}>
                    <td className="client-info">
                      <img className="client-avatar" src={ride.avatar} alt="Client" />
                      {ride.client}
                    </td>
                    <td>{ride.pickup}</td>
                    <td>{ride.dropoff}</td>
                    <td>
                      <span className={`status ${ride.status}`}>{ride.status}</span>
                    </td>
                    <td className="action-buttons">
                      <button className="btn btn-secondary">View</button>
                      <button className="btn btn-danger">Cancel</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}