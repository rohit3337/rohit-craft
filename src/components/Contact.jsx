import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../emailjs.config'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const formRef = useRef()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields!')
      return
    }

    setSending(true)

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || 'No Subject',
          message: form.message,
          to_email: '3337.rohit64@gmail.com',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      toast.success('Message sent successfully! I\'ll get back to you soon. 🚀')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      toast.error('Failed to send message. Please try again or email me directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <div className="section-badge">Get In Touch</div>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">
          Have a project in mind? I'd love to hear about it. Let's build something great together.
        </p>
      </div>

      <div className={`contact-container ${inView ? 'visible' : ''}`} ref={ref}>
        <div className={`contact-info reveal-left ${inView ? 'visible' : ''}`}>
          <h3>Contact Information</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision. Feel free to reach out through any of the channels below.
          </p>

          <div className="contact-methods">
            <a href="mailto:3337.rohit64@gmail.com" className="contact-method">
              <div className="contact-method-icon"><FiMail /></div>
              <div className="contact-method-info">
                <h4>Email</h4>
                <p>3337.rohit64@gmail.com</p>
              </div>
            </a>

            <a href="tel:+918475043164" className="contact-method">
              <div className="contact-method-icon"><FiPhone /></div>
              <div className="contact-method-info">
                <h4>Phone</h4>
                <p>+91 8475043164</p>
              </div>
            </a>

            <div className="contact-method">
              <div className="contact-method-icon"><FiMapPin /></div>
              <div className="contact-method-info">
                <h4>Location</h4>
                <p>Dayalbagh, Agra, India</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/rohit3337/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/rohit3337"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              title="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className={`contact-form-wrapper reveal-right ${inView ? 'visible' : ''}`}>
          <h3>Send Me a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                placeholder="Tell me about your project requirements..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-primary" disabled={sending}>
              <FiSend /> {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
