import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { FiStar, FiSend } from 'react-icons/fi'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../emailjs.config'

const STORAGE_KEY = 'rohit_portfolio_feedback'

const defaultFeedbacks = [
  {
    name: 'Ansh Sengar',
    rating: 5,
    message: 'Rohit built an amazing web application for our team. His attention to detail and code quality is exceptional. Highly recommended!',
    date: '2025-12-15',
  },
  {
    name: 'Priyanshu Kumar',
    rating: 5,
    message: 'Working with Rohit was a great experience. He delivered the project on time with all the features we needed. Very professional.',
    date: '2025-11-20',
  },
  {
    name: 'Mudit Vij',
    rating: 4,
    message: 'Great developer with strong technical skills. Built our event platform with a clean UI and robust backend. Would hire again!',
    date: '2025-10-08',
  },
]

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([])
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [message, setMessage] = useState('')
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      setFeedbacks(JSON.parse(stored))
    } else {
      setFeedbacks(defaultFeedbacks)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultFeedbacks))
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim() || rating === 0) {
      toast.error('Please fill all fields and give a rating!')
      return
    }

    const newFeedback = {
      name: name.trim(),
      rating,
      message: message.trim(),
      date: new Date().toISOString().split('T')[0],
    }

    // Send feedback email to Rohit
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.FEEDBACK_TEMPLATE_ID,
        {
          from_name: name.trim(),
          rating: `${rating}/5`,
          message: message.trim(),
          to_email: '3337.rohit64@gmail.com',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )
    } catch (error) {
      console.error('EmailJS Feedback Error:', error)
      // Still save locally even if email fails
    }

    const updated = [newFeedback, ...feedbacks]
    setFeedbacks(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setName('')
    setRating(0)
    setMessage('')
    toast.success('Thank you for your feedback! 🎉')
  }

  const renderStars = (count) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count)
  }

  return (
    <section className="feedback" id="feedback">
      <div className="section-header">
        <div className="section-badge">Testimonials</div>
        <h2 className="section-title">Client Feedback</h2>
        <p className="section-subtitle">
          What people say about working with me. Share your experience too!
        </p>
      </div>

      <div className={`feedback-container ${inView ? 'visible' : ''}`} ref={ref}>
        <div className={`feedback-form-section reveal-left ${inView ? 'visible' : ''}`}>
          <h3>Share Your Experience</h3>
          <p>Had a project with me? Let others know how it went!</p>

          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Rating</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    type="button"
                    key={star}
                    className={(hoverRating || rating) >= star ? 'filled' : ''}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea
                placeholder="Share your experience working with me..."
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-primary">
              <FiSend /> Submit Feedback
            </button>
          </form>
        </div>

        <div className={`feedback-list reveal-right ${inView ? 'visible' : ''}`}>
          <h3>What People Say</h3>
          {feedbacks.slice(0, 5).map((fb, i) => (
            <div className="feedback-card" key={i}>
              <div className="feedback-card-header">
                <span className="name">{fb.name}</span>
                <span className="stars">{renderStars(fb.rating)}</span>
              </div>
              <p>"{fb.message}"</p>
              <div className="date">{fb.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
