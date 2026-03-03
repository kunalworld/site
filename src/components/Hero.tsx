import { useState, useEffect, useRef } from 'react'
import './Hero.css'

interface PriceData {
  pair: string
  price: number
  change: number
}

interface AnimatedPriceData extends PriceData {
  displayPrice: number
  priceDirection: 'up' | 'down' | 'none'
}

const Hero = () => {
  const [prices, setPrices] = useState<AnimatedPriceData[]>([
    { pair: "EUR/USD", price: 1.0856, change: 0.24, displayPrice: 1.0856, priceDirection: 'none' },
    { pair: "GOLD", price: 2024.50, change: 0.68, displayPrice: 2024.50, priceDirection: 'none' },
    { pair: "SILVER", price: 23.45, change: -0.12, displayPrice: 23.45, priceDirection: 'none' }
  ])
  const [isLoading, setIsLoading] = useState(true)
  const [prevPrices, setPrevPrices] = useState<{ [key: string]: number }>({})
  const animationFrames = useRef<{ [key: string]: number }>({})

  const animatePrice = (pair: string, fromValue: number, toValue: number, direction: 'up' | 'down') => {
    const duration = 500
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentValue = fromValue + (toValue - fromValue) * easeOutCubic

      setPrices(prev => prev.map(p =>
        p.pair === pair
          ? { ...p, displayPrice: currentValue, priceDirection: progress < 1 ? direction : 'none' }
          : p
      ))

      if (progress < 1) {
        animationFrames.current[pair] = requestAnimationFrame(animate)
      }
    }

    if (animationFrames.current[pair]) {
      cancelAnimationFrame(animationFrames.current[pair])
    }

    animate()
  }

  const fetchPrices = async () => {
    try {
      const response = await fetch('https://kunalworld.in/api/prices')

      if (response.ok) {
        const data = await response.json()

        const newPricesData = [
          {
            pair: "EUR/USD",
            price: data.eurusd,
            change: prevPrices['EUR/USD']
              ? parseFloat(((data.eurusd - prevPrices['EUR/USD']) / prevPrices['EUR/USD'] * 100).toFixed(2))
              : 0.24
          },
          {
            pair: "GOLD",
            price: data.gold,
            change: prevPrices['GOLD']
              ? parseFloat(((data.gold - prevPrices['GOLD']) / prevPrices['GOLD'] * 100).toFixed(2))
              : 0.68
          },
          {
            pair: "SILVER",
            price: data.silver,
            change: prevPrices['SILVER']
              ? parseFloat(((data.silver - prevPrices['SILVER']) / prevPrices['SILVER'] * 100).toFixed(2))
              : -0.12
          }
        ]

        setPrevPrices({
          'EUR/USD': data.eurusd,
          'GOLD': data.gold,
          'SILVER': data.silver
        })

        setPrices(prevPrices => {
          return newPricesData.map(newPrice => {
            const oldPrice = prevPrices.find(p => p.pair === newPrice.pair)
            const oldValue = oldPrice?.displayPrice || newPrice.price

            if (oldValue !== newPrice.price) {
              const direction = newPrice.price > oldValue ? 'up' : 'down'
              animatePrice(newPrice.pair, oldValue, newPrice.price, direction)
              return {
                ...newPrice,
                displayPrice: oldValue,
                priceDirection: direction
              }
            }

            return {
              ...newPrice,
              displayPrice: newPrice.price,
              priceDirection: 'none' as const
            }
          })
        })
      }
    } catch (error) {
      console.error('Error fetching live prices:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPrices()
    const interval = setInterval(fetchPrices, 10000)
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
                <span
                  className={`pair-value ${priceData.change >= 0 ? 'positive' : 'negative'} ${priceData.priceDirection !== 'none' ? `price-${priceData.priceDirection}` : ''}`}
                >
                  {priceData.pair.includes('/')
                    ? priceData.displayPrice.toFixed(4)
                    : priceData.displayPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
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
