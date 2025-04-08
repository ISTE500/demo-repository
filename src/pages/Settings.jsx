import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './Settings.css';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  const users = [
    { id: 1, name: 'Adhel Siddique', role: 'admin', avatar: '/assets/user.png' },
    { id: 2, name: 'Aisha Tester', role: 'dispatcher', avatar: '/assets/user.png' },
    { id: 3, name: 'Driver Dan', role: 'driver', avatar: '/assets/user.png' },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="dashboard">
          <Sidebar />
          <div className="content">
            <div className="content-header">
              <h2>Settings</h2>
            </div>

            <div className="settings-tabs">
              <div
                className={`settings-tab ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </div>
              <div
                className={`settings-tab ${activeTab === 'security' ? 'active' : ''}`}
                onClick={() => setActiveTab('security')}
              >
                Security
              </div>
              <div
                className={`settings-tab ${activeTab === 'users' ? 'active' : ''}`}
                onClick={() => setActiveTab('users')}
              >
                Users
              </div>
            </div>

            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="settings-section active">
                <h3>Edit Profile</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="form-actions">
                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="settings-section active">
                <h3>Change Password</h3>
                <div className="form-group">
                  <label>Old Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-actions">
                  <button className="btn btn-primary">Update Password</button>
                </div>
              </div>
            )}

            {/* Users Management */}
            {activeTab === 'users' && (
              <div className="settings-section active">
                <h3>Manage Users</h3>
                <table className="user-list">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="user-info-cell">
                          <img src={user.avatar} className="user-avatar" />
                          {user.name}
                        </td>
                        <td>
                          <span className={`role-badge role-${user.role}`}>{user.role}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}