import './Expertise.css'

const Expertise = () => {
  const markets = [
    {
      name: 'Major Forex Pairs',
      icon: '💱',
      pairs: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'USD/CHF', 'AUD/USD'],
      description: 'Deep expertise in trading the most liquid currency pairs'
    },
    {
      name: 'Gold Trading',
      icon: '🥇',
      pairs: ['XAU/USD', 'Gold Futures', 'Gold CFDs'],
      description: 'Specialized strategies for precious metal markets'
    },
    {
      name: 'Silver Trading',
      icon: '🥈',
      pairs: ['XAG/USD', 'Silver Futures', 'Silver CFDs'],
      description: 'Advanced techniques for silver market opportunities'
    }
  ]

  return (
    <section id="expertise" className="expertise">
      <div className="section-header">
        <span className="section-tag">Expertise</span>
        <h2 className="section-title">Markets & Skills</h2>
        <p className="section-description">
          Specialized knowledge across major trading instruments with proven track record
        </p>
      </div>

      <div className="expertise-content">
        <div className="markets-section">
          <h3 className="subsection-title">Trading Markets</h3>
          <div className="markets-grid">
            {markets.map((market, index) => (
              <div key={index} className="market-card">
                <div className="market-icon">{market.icon}</div>
                <h4 className="market-name">{market.name}</h4>
                <p className="market-description">{market.description}</p>
                <div className="market-pairs">
                  {market.pairs.map((pair, idx) => (
                    <span key={idx} className="pair-badge">{pair}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise
