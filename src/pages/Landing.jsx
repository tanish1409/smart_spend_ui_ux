import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">SmartSpend</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Take Control of Your Student Spending</h1>
            <p className="hero-subtitle">
              SmartSpend helps students track expenses, stay within budget, and gain financial 
              clarity all in one simple dashboard
            </p>
            <Link to="/create-account" className="btn-get-started">
              Get Started
            </Link>
          </div>
          <div className="hero-image">
            <img 
              src="https://www.figma.com/api/mcp/asset/1469243a-7b3d-4c8e-86dc-0619c7744d7b" 
              alt="SmartSpend Dashboard Preview" 
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2>Features built for students</h2>
        <div className="features-grid">
          <div className="feature-card feature-card-primary">
            <div className="feature-icon">
              <img 
                src="https://www.figma.com/api/mcp/asset/c28cb892-8dec-49d4-8f76-62a502e0967d" 
                alt="Track expenses icon" 
              />
            </div>
            <h4>Track every expense</h4>
            <p>Log your expenses instantly with a clean and easy interface</p>
          </div>
          <div className="feature-card feature-card-secondary">
            <div className="feature-icon">
              <img 
                src="https://www.figma.com/api/mcp/asset/78dbaef6-b513-4214-850d-57515050d73d" 
                alt="Monthly insights icon" 
              />
            </div>
            <h4>Monthly Insights</h4>
            <p>This dashboard helps you understand where your money goes</p>
          </div>
          <div className="feature-card feature-card-primary">
            <div className="feature-icon">
              <img 
                src="https://www.figma.com/api/mcp/asset/28c2a614-c79f-42eb-b748-d833b0764d23" 
                alt="Smart categories icon" 
              />
            </div>
            <h4>Smart Categories</h4>
            <p>Automatically organized into food, rent, transport etc.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h3>About SmartSpend</h3>
        <p className="about-description">
          SmartSpend helps students track monthly expenses, categorize spending, and understand 
          their financial habits using a clean and intuitive interface designed for campus life. 
          The best part is that it's completely free!
        </p>
        
        <div className="partner-logos">
          <div className="partner-logo">
            <img src="https://www.figma.com/api/mcp/asset/7ba49461-2feb-4b18-8d38-87909579be27" alt="Partner 1" />
          </div>
          <div className="partner-logo">
            <img src="https://www.figma.com/api/mcp/asset/db4c6b6a-1527-4b29-8119-8d8030dfccd2" alt="Partner 2" />
          </div>
          <div className="partner-logo">
            <img src="https://www.figma.com/api/mcp/asset/c4276e52-5e36-44df-8473-aeaf19be0a1e" alt="Partner 3" />
          </div>
          <div className="partner-logo">
            <img src="https://www.figma.com/api/mcp/asset/2f376ad7-40c6-4fbc-ba25-eb03229dd663" alt="Partner 4" />
          </div>
        </div>

        {/* Testimonial */}
        <div className="testimonial-card">
          <img 
            src="https://www.figma.com/api/mcp/asset/53d2d40f-15ed-4982-bd68-0961cf673365" 
            alt="Kunal Pandya" 
            className="testimonial-avatar"
          />
          <div className="testimonial-content">
            <h4>Kunal Pandya</h4>
            <p className="testimonial-role">Student, OTU</p>
            <p className="testimonial-quote">
              "SmartSpend completely changed how I manage my monthly budget. I never realized 
              how much I was overspending on food."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Learn</h4>
            <p>Blog</p>
            <p>Guides</p>
          </div>
          <div className="footer-column">
            <h4>Helpful links</h4>
            <p>Help center</p>
            <p>FAQs</p>
            <p>Schedule a demo</p>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <p>News</p>
            <p>Leadership</p>
            <p>Careers</p>
          </div>
          <div className="footer-column">
            <h4>Connect</h4>
            <p>Support request</p>
            <p>Contact us</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
