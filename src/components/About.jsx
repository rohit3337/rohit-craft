import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="about" id="about">
      <div className="section-header">
        <div className="section-badge">About Me</div>
        <h2 className="section-title">Who I Am</h2>
        <p className="section-subtitle">
          Let me introduce myself and tell you why I'm the right fit for your project.
        </p>
      </div>

      <div className={`about-container ${inView ? 'visible' : ''}`} ref={ref}>
        <div className={`about-image reveal-left ${inView ? 'visible' : ''}`}>
          <div className="about-image-wrapper">
            <img src="/rohit.jpg" alt="Rohit" className="about-avatar-img" />
          </div>
          <div className="about-image-decoration" />
        </div>

        <div className={`about-content reveal-right ${inView ? 'visible' : ''}`}>
          <h2>
            I'm <span style={{ color: '#6c63ff' }}>Rohit</span>, a Developer &amp; Problem Solver
          </h2>
          <p>
            I'm a B.Tech student at <strong>Dayalbagh Educational Institute</strong> (Electrical Engineering 
            specializing in Computer Science) with a strong passion for building web applications, 
            AI-powered tools, and full-stack solutions. Currently maintaining a <strong>8.59 CGPA</strong>.
          </p>
          <p>
            I have hands-on experience with <strong>React, Python, Java, Spring Boot, LangChain, 
            and Django</strong>. I've worked at <strong>Silogis Nanosystems (NXP Semiconductors)</strong> and 
            <strong> Care Health Insurance</strong>, building production-ready systems from dashboards to 
            backend APIs.
          </p>
          <p>
            I'm available to build your web applications according to your specific requirements — 
            whether it's a sleek portfolio, a full-stack platform, an AI-powered application, or anything 
            you can imagine.
          </p>

          <div className="about-details">
            <div className="about-detail">
              <span className="label">Name</span>
              <span className="value">Rohit</span>
            </div>
            <div className="about-detail">
              <span className="label">Education</span>
              <span className="value">B.Tech (CSE), DEI</span>
            </div>
            <div className="about-detail">
              <span className="label">Email</span>
              <span className="value">
                <a href="mailto:3337.rohit64@gmail.com">3337.rohit64@gmail.com</a>
              </span>
            </div>
            <div className="about-detail">
              <span className="label">Phone</span>
              <span className="value">+91 8475043164</span>
            </div>
            <div className="about-detail">
              <span className="label">Location</span>
              <span className="value"><FiMapPin style={{ marginRight: 4 }} />India</span>
            </div>
            <div className="about-detail">
              <span className="label">LinkedIn</span>
              <span className="value">
                <a href="https://www.linkedin.com/in/rohit3337/" target="_blank" rel="noreferrer">
                  <FaLinkedin style={{ marginRight: 4 }} />rohit3337
                </a>
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <a href="https://www.linkedin.com/in/rohit3337/" target="_blank" rel="noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>
              <FaLinkedin /> LinkedIn Profile
            </a>
            <a href="https://github.com/rohit3337" target="_blank" rel="noreferrer" className="btn-secondary" style={{ textDecoration: 'none' }}>
              <FaGithub /> GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
