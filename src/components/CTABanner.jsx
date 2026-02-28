import { FiArrowRight } from 'react-icons/fi'

export default function CTABanner() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="cta-banner">
      <div className="cta-bg" />
      <div className="cta-content">
        <h2>
          Ready to Build Your{' '}
          <span style={{
            background: 'linear-gradient(135deg, #6c63ff, #00d4aa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Dream Project
          </span>?
        </h2>
        <p>
          I'm currently available for freelance work. Whether you need a web app, a full-stack 
          platform, or an AI-powered tool — let's make it happen.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => scrollTo('#contact')}>
            Start a Project <FiArrowRight />
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('#services')}>
            Explore Services
          </button>
        </div>
      </div>
    </section>
  )
}
