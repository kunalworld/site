import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Message sent! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(''), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <span className="section-tag">Get Started</span>
        <h2 className="section-title">Let's Begin Your Trading Journey</h2>
        <p className="section-description">
          Ready to take your trading to the next level? Reach out to discuss how I can help you achieve your goals
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email</h3>
            <p>contact@kunalworld.in</p>
          </div>

          <div className="info-card">
            <div className="info-icon">💬</div>
            <h3>WhatsApp</h3>
            <p>Available for quick queries</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📱</div>
            <h3>Social Media</h3>
            <p>Connect on trading platforms</p>
          </div>

          <div className="cta-box">
            <h3>Why Choose Me?</h3>
            <ul>
              <li>✓ Proven track record</li>
              <li>✓ Personalized mentorship</li>
              <li>✓ Practical strategies</li>
              <li>✓ Continuous support</li>
            </ul>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell me about your trading goals and how I can help..."
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>

          {status && <div className="form-status">{status}</div>}
        </form>
      </div>
    </section>
  )
}

export default Contact
