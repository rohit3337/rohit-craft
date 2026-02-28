import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { FaRobot, FaBrain, FaCalendarAlt, FaComments, FaMicrochip, FaGlobe } from 'react-icons/fa'

const projects = [
  {
    title: 'Enigma-ML: Agentic AI Tutor',
    desc: 'An agent-driven ML tutoring system using LangChain and Gradio with autonomous reasoning agents, adaptive quizzes based on Bloom\'s Taxonomy, and progress tracking dashboards.',
    tags: ['Python', 'LangChain', 'Gradio', 'LLMs', 'SQLite'],
    category: 'ai',
    icon: <FaBrain />,
    gradient: 'linear-gradient(135deg, #6c63ff33, #a855f733)',
    github: '#',
    live: '#',
  },
  {
    title: 'Career Conversation AI Agent',
    desc: 'A career-conversation web agent using OpenAI and Gradio, enabling personalized user interactions with automatic detail capture, PDF/text parsing, and real-time Pushover notifications.',
    tags: ['Python', 'Gradio', 'Pushover API', 'Gemini API'],
    category: 'ai',
    icon: <FaComments />,
    gradient: 'linear-gradient(135deg, #00d4aa33, #6c63ff33)',
    github: '#',
    live: '#',
  },
  {
    title: 'Sidekick: Agentic Co-Worker',
    desc: 'An agentic personal co-worker application using LangChain with multi-step reasoning, success-criteria evaluation, and conversational state management via Gradio interface.',
    tags: ['Python', 'LangChain', 'Gradio', 'Async I/O'],
    category: 'ai',
    icon: <FaRobot />,
    gradient: 'linear-gradient(135deg, #a855f733, #ff6b6b33)',
    github: '#',
    live: '#',
  },
  {
    title: 'Event Management System',
    desc: 'A full-stack event management platform with event listing, participant registration, secure authentication, REST APIs using Spring Boot, and MySQL backend.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS/JS'],
    category: 'fullstack',
    icon: <FaCalendarAlt />,
    gradient: 'linear-gradient(135deg, #ff6b6b33, #ffa50233)',
    github: '#',
    live: '#',
  },
  {
    title: 'Microgrid Energy Simulator',
    desc: 'A time-based simulation of a microgrid with daily energy scheduling strategy that minimizes energy usage and operational cost with interactive visualization.',
    tags: ['Python', 'Simulation', 'Data Viz'],
    category: 'fullstack',
    icon: <FaMicrochip />,
    gradient: 'linear-gradient(135deg, #ffa50233, #00d4aa33)',
    github: '#',
    live: '#',
  },
  {
    title: 'Portfolio Website (This Site!)',
    desc: 'A modern, responsive portfolio website built with React featuring smooth animations, particle effects, cursor glow, feedback system, and contact automation.',
    tags: ['React', 'Framer Motion', 'Responsive'],
    category: 'web',
    icon: <FaGlobe />,
    gradient: 'linear-gradient(135deg, #6c63ff33, #00d4aa33)',
    github: '#',
    live: '#',
  },
]

const filters = ['All', 'AI', 'Full-Stack', 'Web']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter.toLowerCase().replace('-', ''))

  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <div className="section-badge">Portfolio</div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects showcasing my skills and expertise. Each built to solve real problems.
        </p>
      </div>

      <div className="projects-container">
        <div className="projects-filter">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={`projects-grid stagger-children ${inView ? 'visible' : ''}`} ref={ref}>
          {filtered.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-image" style={{ background: p.gradient }}>
                {p.icon}
                <div className="project-overlay">
                  <a href={p.github} target="_blank" rel="noreferrer" title="GitHub">
                    <FiGithub />
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" title="Live Demo">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {p.tags.map((t, ti) => (
                    <span className="project-tag" key={ti}>{t}</span>
                  ))}
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
