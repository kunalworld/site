import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🎓',
      title: 'One-on-One Mentorship',
      description: 'Personalized guidance tailored to your trading goals and experience level. Get direct access to proven strategies and real-time feedback.',
      features: ['Custom trading plans', 'Live trading sessions', 'Progress tracking']
    },
    {
      icon: '🏆',
      title: 'Funded Challenge Prep',
      description: 'Comprehensive preparation program designed specifically to help you pass funded account challenges with confidence.',
      features: ['Challenge strategies', 'Risk management', 'Psychology training']
    },
    {
      icon: '📊',
      title: 'Market Analysis',
      description: 'In-depth analysis of major forex pairs, gold, and silver markets with actionable trading insights and setups.',
      features: ['Daily market updates', 'Trading opportunities', 'Technical analysis']
    },
    {
      icon: '💡',
      title: 'Strategy Development',
      description: 'Learn to develop and refine your own trading strategies based on proven principles and market conditions.',
      features: ['Custom strategy building', 'Backtesting methods', 'Optimization techniques']
    }
  ]

  return (
    <section id="services" className="services">
      <div className="section-header">
        <span className="section-tag">Services</span>
        <h2 className="section-title">How I Can Help You Succeed</h2>
        <p className="section-description">
          Comprehensive mentorship and training programs designed to transform beginners into confident, profitable traders
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="feature-check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
