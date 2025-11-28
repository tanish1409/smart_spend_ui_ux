import { Link } from 'react-router-dom'
import './Auth.css'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    window.location.href = '/dashboard'
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Log In
          </button>
        </form>
        <p className="auth-footer">
          <Link to="/reset-password">Forgot Password? Reset Password</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
