// src/pages/Clients.jsx
import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './Clients.css';

export default function Clients() {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      status: 'active',
      avatar: '/assets/client1.jpg', // use placeholder image if not available
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleAddClient = () => {
    const name = prompt('Enter client name:');
    const email = prompt('Enter client email:');
    if (name && email) {
      const newClient = {
        id: clients.length + 1,
        name,
        email,
        status: 'active',
        avatar: '/assets/default-avatar.png',
      };
      setClients([...clients, newClient]);
    }
  };

  const handleView = (client) => {
    alert(`Viewing client:\nName: ${client.name}\nEmail: ${client.email}`);
  };

  const handleDelete = (id) => {
    const confirmDelete = confirm('Are you sure you want to delete this client?');
    if (confirmDelete) {
      setClients(clients.filter((c) => c.id !== id));
    }
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main>
        <div className="dashboard">
          <Sidebar />
          <div className="content">
            <div className="content-header">
              <h2>Clients</h2>
              <button className="btn btn-primary" onClick={handleAddClient}>
                Add New
              </button>
            </div>

            <div className="search-filter">
              <div className="search-box">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Search clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="filter-dropdown">
                <select>
                  <option>Status: All</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.length > 0 ? (
                  filteredClients.map((client) => (
                    <tr key={client.id}>
                      <td className="client-info">
                        <img className="client-avatar" src={client.avatar} alt="Avatar" />
                        <span className="client-name">{client.name}</span>
                      </td>
                      <td className="client-email">{client.email}</td>
                      <td>
                        <span className={`status ${client.status}`}>{client.status.charAt(0).toUpperCase() + client.status.slice(1)}</span>
                      </td>
                      <td className="action-buttons">
                        <button className="btn btn-secondary" onClick={() => handleView(client)}>
                          View
                        </button>
                        <button className="btn btn-danger" onClick={() => handleDelete(client.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No clients found.</td>
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