import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-bg-gradient hero-bg-1" />
      <div className="hero-bg-gradient hero-bg-2" />

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <span className="dot" />
            Available for Freelance Projects
          </div>

          <h1 className="hero-title">
            I Build<br />
            <span className="gradient-text">
              <TypeAnimation
                sequence={[
                  'Web Applications',
                  2000,
                  'React Websites',
                  2000,
                  'Full-Stack Apps',
                  2000,
                  'AI-Powered Tools',
                  2000,
                  'Custom Solutions',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
            <br />For Your Business
          </h1>

          <p className="hero-subtitle">
            Hi, I'm <strong>Rohit</strong> — a passionate developer specializing in building
            modern, responsive web applications tailored to your unique requirements.
            Let's bring your ideas to life.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollTo('#contact')}>
              Let's Work Together <FiArrowRight />
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('#projects')}>
              View My Work <FiDownload />
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="number">5+</div>
              <div className="label">Projects Built</div>
            </div>
            <div className="hero-stat">
              <div className="number">2+</div>
              <div className="label">Years Experience</div>
            </div>
            <div className="hero-stat">
              <div className="number">100%</div>
              <div className="label">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-code-card">
            <div className="code-header">
              <div className="code-dot red" />
              <div className="code-dot yellow" />
              <div className="code-dot green" />
            </div>
            <div className="code-content">
              <div><span className="comment">{'// Building your dream app'}</span></div>
              <div><span className="keyword">const</span> <span className="variable">developer</span> <span className="bracket">=</span> <span className="bracket">{'{'}</span></div>
              <div>{'  '}<span className="property">name</span>: <span className="string">"Rohit"</span>,</div>
              <div>{'  '}<span className="property">role</span>: <span className="string">"Full-Stack Dev"</span>,</div>
              <div>{'  '}<span className="property">skills</span>: <span className="bracket">[</span></div>
              <div>{'    '}<span className="string">"React"</span>, <span className="string">"Python"</span>,</div>
              <div>{'    '}<span className="string">"Spring Boot"</span>,</div>
              <div>{'    '}<span className="string">"LangChain"</span></div>
              <div>{'  '}<span className="bracket">]</span>,</div>
              <div>{'  '}<span className="property">available</span>: <span className="value">true</span>,</div>
              <div>{'  '}<span className="function">buildApp</span>: <span className="bracket">()</span> <span className="keyword">=&gt;</span> <span className="string">"🚀"</span></div>
              <div><span className="bracket">{'}'}</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
