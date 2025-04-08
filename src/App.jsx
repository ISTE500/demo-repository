// File: src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Clients from './pages/Clients';
import Drivers from './pages/Drivers';
import Rides from './pages/Rides';
import Reports from './pages/Reports';
import Schedule from './pages/Schedule';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/rides" element={<Rides />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1 style={{ padding: '2rem' }}>404 - Page not found</h1>} />
    </Routes>
  );
}
