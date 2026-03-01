import { useState, useEffect } from 'react'
import './Hero.css'

interface PriceData {
  pair: string
  price: number
  change: number
}

const Hero = () => {
  const [prices, setPrices] = useState<PriceData[]>([
    { pair: "EUR/USD", price: 1.0856, change: 0.24 },
    { pair: "GOLD", price: 2024.50, change: 0.68 },
    { pair: "SILVER", price: 23.45, change: -0.12 }
  ])
  const [isLoading, setIsLoading] = useState(true)

  const fetchPrices = async () => {
    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/live-prices`
      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        if (data.success && data.data) {
          const displayPrices = data.data.filter((p: PriceData) =>
            ['EUR/USD', 'GOLD', 'SILVER'].includes(p.pair)
          )
          setPrices(displayPrices)
        }
      }
    } catch (error) {
      console.error('Error fetching live prices:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPrices()
    const interval = setInterval(fetchPrices, 30000)
    return () => clearInterval(interval)
  }, [])

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
            <span className="market-status">{isLoading ? 'Loading...' : 'Market Active'}</span>
            <span className="live-indicator"></span>
          </div>
          <div className="trading-pairs">
            {prices.map((priceData) => (
              <div key={priceData.pair} className="pair">
                <span className="pair-name">{priceData.pair}</span>
                <span className={`pair-value ${priceData.change >= 0 ? 'positive' : 'negative'}`}>
                  {priceData.pair.includes('/')
                    ? priceData.price.toFixed(4)
                    : priceData.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                  } {priceData.change >= 0 ? '+' : ''}{priceData.change}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
