import { Link } from 'react-router-dom'
import './Auth.css'

const ResetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle password reset logic here
    alert('Password reset instructions sent to your email!')
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Reset Password</h1>
        <p className="reset-description">
          Enter your email and we'll send you password reset instructions
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Send Instructions
          </button>
        </form>
        <p className="auth-footer">
          <Link to="/login">Return to Log In</Link>
        </p>
      </div>
    </div>
  )
}

export default ResetPassword
