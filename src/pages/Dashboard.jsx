import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';

export default function Dashboard() {
  const stats = [
    { id: 1, label: 'Total Clients', value: 224, icon: 'fa-users' },
    { id: 2, label: 'Total Drivers', value: 48, icon: 'fa-id-badge' },
    { id: 3, label: 'Scheduled Rides', value: 76, icon: 'fa-calendar-check' },
    { id: 4, label: 'Reports Pending', value: 5, icon: 'fa-exclamation-circle' },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="dashboard">
          <Sidebar />
          <div className="content">
            <div className="content-header">
              <h2>Admin Dashboard</h2>
            </div>

            <div className="stat-grid">
              {stats.map((s) => (
                <div className="stat-card" key={s.id}>
                  <div className="icon">
                    <i className={`fas ${s.icon}`}></i>
                  </div>
                  <div className="details">
                    <div className="label">{s.label}</div>
                    <div className="value">{s.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="dashboard-section">
              <h3>Activity Overview</h3>
              <div className="chart-placeholder">[Charts Coming Soon]</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}