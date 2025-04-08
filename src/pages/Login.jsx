import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@demo.com' && password === 'password') {
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-header">
          <h2>Tech Savvy Rides</h2>
          <p>Login to your account</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="admin@demo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="password-group">
              <input
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i
                className={`fas ${show ? 'fa-eye-slash' : 'fa-eye'}`}
                onClick={() => setShow(!show)}
              ></i>
            </div>
          </div>
          <div className="form-actions">
            <button className="btn btn-primary" type="submit">Login</button>
          </div>
        </form>
        <div className="login-footer">
          <small>Use <strong>admin@demo.com / password</strong> to log in</small>
        </div>
      </div>
    </div>
  );
}