import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="logo">Rohit.craft</span>
          <p>
            Passionate developer building modern web applications tailored to your needs. 
            Let's bring your vision to life with clean code and stunning design.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/rohit3337/" target="_blank" rel="noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com/rohit3337" target="_blank" rel="noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="social-link">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><a onClick={() => scrollTo('#home')}>Home</a></li>
            <li><a onClick={() => scrollTo('#about')}>About</a></li>
            <li><a onClick={() => scrollTo('#services')}>Services</a></li>
            <li><a onClick={() => scrollTo('#projects')}>Projects</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>More</h4>
          <ul>
            <li><a onClick={() => scrollTo('#skills')}>Skills</a></li>
            <li><a onClick={() => scrollTo('#experience')}>Experience</a></li>
            <li><a onClick={() => scrollTo('#feedback')}>Testimonials</a></li>
            <li><a onClick={() => scrollTo('#contact')}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:3337.rohit64@gmail.com">3337.rohit64@gmail.com</a></li>
            <li><a href="tel:+918475043164">+91 8475043164</a></li>
            <li><a href="https://www.linkedin.com/in/rohit3337/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rohit. All rights reserved. Built with React &amp; ❤️</p>
      </div>
    </footer>
  )
}
