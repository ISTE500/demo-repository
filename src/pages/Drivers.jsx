// src/pages/Drivers.jsx
import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './Drivers.css';

export default function Drivers() {
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: 'Jane Smith',
      email: 'jane@driver.com',
      status: 'on-duty',
      avatar: '/assets/driver1.jpg',
      rating: 4.7,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleAddDriver = () => {
    const name = prompt('Enter driver name:');
    const email = prompt('Enter driver email:');
    if (name && email) {
      const newDriver = {
        id: drivers.length + 1,
        name,
        email,
        status: 'off-duty',
        avatar: '/assets/default-avatar.png',
        rating: 5.0,
      };
      setDrivers([...drivers, newDriver]);
    }
  };

  const handleView = (driver) => {
    alert(`Viewing driver:\nName: ${driver.name}\nEmail: ${driver.email}`);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this driver?')) {
      setDrivers(drivers.filter((d) => d.id !== id));
    }
  };

  const filteredDrivers = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main>
        <div className="dashboard">
          <Sidebar />
          <div className="content">
            <div className="content-header">
              <h2>Drivers</h2>
              <button className="btn btn-primary" onClick={handleAddDriver}>
                Add New
              </button>
            </div>

            <div className="search-filter">
              <div className="search-box">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Search drivers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="filter-dropdown">
                <select>
                  <option>Status: All</option>
                  <option>On Duty</option>
                  <option>Off Duty</option>
                </select>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Driver</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDrivers.length > 0 ? (
                  filteredDrivers.map((driver) => (
                    <tr key={driver.id}>
                      <td className="driver-info">
                        <img className="driver-avatar" src={driver.avatar} alt="Driver" />
                        <span className="driver-name">{driver.name}</span>
                      </td>
                      <td className="driver-email">{driver.email}</td>
                      <td>
                        <span className={`status ${driver.status}`}>
                          {driver.status.replace('-', ' ')}
                        </span>
                      </td>
                      <td>
                        <div className="rating">
                          {Array.from({ length: Math.floor(driver.rating) }, (_, i) => (
                            <i className="fas fa-star" key={i}></i>
                          ))}
                          <span>{driver.rating}</span>
                        </div>
                      </td>
                      <td className="action-buttons">
                        <button className="btn btn-secondary" onClick={() => handleView(driver)}>
                          View
                        </button>
                        <button className="btn btn-danger" onClick={() => handleDelete(driver.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No drivers found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}