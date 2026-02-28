import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">📈</span>
          <span>Professional Trader & Mentor</span>
        </div>

        <h1 className="hero-title">
          Master the Art of
          <span className="gradient-text"> Forex & Commodities Trading</span>
        </h1>

        <p className="hero-description">
          I'm Kunal Kumar, a professional trader with 3+ years of experience in forex and commodities markets.
          I specialize in trading major forex pairs, gold, and silver, and I'm passionate about helping
          beginners pass funded account challenges and achieve their trading goals.
        </p>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-value">3+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat">
            <div className="stat-value">100+</div>
            <div className="stat-label">Students Mentored</div>
          </div>
          <div className="stat">
            <div className="stat-value">5+</div>
            <div className="stat-label">Markets Traded</div>
          </div>
        </div>

        <div className="hero-actions">
          <button className="primary-button" onClick={scrollToContact}>
            Start Your Journey
          </button>
          <button className="secondary-button" onClick={() => {
            const element = document.getElementById('about')
            if (element) element.scrollIntoView({ behavior: 'smooth' })
          }}>
            Learn More
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="trading-card">
          <div className="card-header">
            <span className="market-status">Market Active</span>
            <span className="live-indicator"></span>
          </div>
          <div className="trading-pairs">
            <div className="pair">
              <span className="pair-name">EUR/USD</span>
              <span className="pair-value positive">1.0856 +0.24%</span>
            </div>
            <div className="pair">
              <span className="pair-name">GOLD</span>
              <span className="pair-value positive">2,024.50 +0.68%</span>
            </div>
            <div className="pair">
              <span className="pair-name">SILVER</span>
              <span className="pair-value negative">23.45 -0.12%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
