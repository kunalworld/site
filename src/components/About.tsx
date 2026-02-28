import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Your Trading Success Partner</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-paragraph">
              With over 3 years of dedicated experience in the forex and commodities markets,
              I've developed a deep understanding of market dynamics and trading psychology.
              My journey has been focused on mastering major forex pairs, gold, and silver trading.
            </p>
            <p className="about-paragraph">
              What sets me apart is my commitment to helping beginners navigate the challenging
              path to becoming successful traders. I specialize in mentoring aspiring traders
              through funded account challenges, providing them with the strategies, discipline,
              and mindset needed to succeed in this competitive field.
            </p>
            <p className="about-paragraph">
              My approach combines technical analysis, risk management, and psychological preparation
              to ensure my students not only pass their challenges but build sustainable trading careers.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">🎯</div>
              <h3>Specialized Expertise</h3>
              <p>Major forex pairs, gold, and silver trading with proven strategies</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">📚</div>
              <h3>Mentorship Focus</h3>
              <p>Dedicated to helping beginners pass funded account challenges</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">💼</div>
              <h3>Real Experience</h3>
              <p>3+ years of active trading in volatile market conditions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
