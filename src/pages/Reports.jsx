import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './Reports.css';

export default function Reports() {
  const [filter, setFilter] = useState('This Month');

  const reports = [
    { id: 1, title: 'Total Rides', value: 1245, change: '+5.2%', positive: true },
    { id: 2, title: 'Cancelled Rides', value: 75, change: '-1.3%', positive: false },
    { id: 3, title: 'Completed Rides', value: 1160, change: '+4.8%', positive: true },
  ];

  const rideData = [
    { id: 1, client: 'Sarah James', driver: 'John Smith', date: '2025-04-01', status: 'completed' },
    { id: 2, client: 'Mike Liu', driver: 'Jane Doe', date: '2025-04-02', status: 'cancelled' },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="dashboard">
          <Sidebar />
          <div className="content">
            <div className="content-header">
              <h2>Reports</h2>
              <select className="filter-control" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
            </div>

            <div className="report-cards">
              {reports.map((report) => (
                <div className="report-card" key={report.id}>
                  <h3>{report.title}</h3>
                  <div className="report-value">{report.value}</div>
                  <div className={`report-change ${report.positive ? '' : 'negative'}`}>
                    {report.change}
                  </div>
                </div>
              ))}
            </div>

            <div className="chart-container">
              <div className="chart-placeholder">[Chart Placeholder]</div>
            </div>

            <div className="report-section">
              <h3>Ride Summary</h3>
              <table>
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Driver</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rideData.map((ride) => (
                    <tr key={ride.id}>
                      <td>{ride.client}</td>
                      <td>{ride.driver}</td>
                      <td>{ride.date}</td>
                      <td>
                        <span className={`status ${ride.status}`}>
                          {ride.status.charAt(0).toUpperCase() + ride.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}