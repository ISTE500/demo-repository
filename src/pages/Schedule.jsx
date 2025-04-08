import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './Schedule.css';

export default function Schedule() {
  const [currentMonth] = useState('April 2025');
  const days = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    events: i % 5 === 0 ? ['Pickup at 10AM'] : [],
  }));

  return (
    <>
      <Header />
      <main>
        <div className="dashboard">
          <Sidebar />
          <div className="content">
            <div className="content-header">
              <h2>Schedule</h2>
            </div>

            <div className="schedule-controls">
              <div className="date-navigation">
                <button className="btn">&lt;</button>
                <div className="current-date">{currentMonth}</div>
                <button className="btn">&gt;</button>
              </div>

              <div className="view-options">
                <button className="view-option active">Month</button>
                <button className="view-option">List</button>
              </div>
            </div>

            <div className="calendar-header">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="calendar-grid">
              {days.map(({ day, events }) => (
                <div className="calendar-day" key={day}>
                  <div className="day-header">
                    <span className="day-number">{day}</span>
                  </div>
                  <div className="day-events">
                    {events.map((e, i) => (
                      <div key={i} className="event pickup">{e}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}