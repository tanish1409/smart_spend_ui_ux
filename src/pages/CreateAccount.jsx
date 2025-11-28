import { Link } from 'react-router-dom'
import './Auth.css'

const CreateAccount = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle account creation logic here
    window.location.href = '/dashboard'
  }

  return (
    <div className="auth-page">
      <div className="auth-container auth-container-large">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              placeholder="Enter your name"
              required
            />
          </div>
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
              placeholder="Create a password"
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="form-group">
            <label>University</label>
            <input 
              type="text" 
              placeholder="Enter your university"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Create Account
          </button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  )
}

export default CreateAccount
