import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-brand">Kunal Kumar</h3>
          <p className="footer-tagline">
            Professional Forex & Commodities Trading Mentor
          </p>
          <p className="footer-description">
            Empowering traders with knowledge, strategies, and mentorship to succeed in the financial markets.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('services')}>Services</button></li>
            <li><button onClick={() => scrollToSection('expertise')}>Expertise</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Trading Markets</h4>
          <ul className="footer-links">
            <li>Major Forex Pairs</li>
            <li>Gold (XAU/USD)</li>
            <li>Silver (XAG/USD)</li>
            <li>EUR/USD</li>
            <li>GBP/USD</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Connect</h4>
          <ul className="footer-links">
            <li>Email: contact@kunalworld.in</li>
            <li>Trading Community</li>
            <li>Educational Resources</li>
            <li>Market Updates</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Kunal Kumar. All rights reserved.</p>
          <p className="footer-disclaimer">
            Trading involves risk. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
