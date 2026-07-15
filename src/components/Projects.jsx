import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FiGithub } from 'react-icons/fi'
import { FaBrain, FaCalendarAlt, FaComments, FaGlobe, FaFileArchive, FaRobot, FaMicrochip } from 'react-icons/fa'

const githubProfile = 'https://github.com/rohit3337/'

const projects = [
  {
    title: 'Enginuity-ML - Agentic AI Tutor for Machine Learning Concepts',
    desc: 'An agent-driven ML tutoring platform delivering interactive explanations, step-by-step problem solving, and adaptive quizzes based on Bloom\'s Taxonomy with autonomous reasoning and learner-specific feedback.',
    tags: ['Python', 'LangChain', 'React.js', 'Node.js', 'PostgreSQL'],
    category: 'ai',
    icon: <FaBrain />,
    gradient: 'linear-gradient(135deg, #6c63ff33, #a855f733)',
    github: 'https://github.com/rohit3337/Enginuity-ml_tutor',
  },
  {
    title: 'Nirogaverse - AI-Powered Ayurvedic Health Assistant',
    desc: 'A multi-agent AI consultation system delivering personalized wellness guidance, health-risk assessment, and lifestyle recommendations with knowledge retrieval from classical Ayurvedic texts and voice support.',
    tags: ['Python', 'Multi-Agent AI', 'LLMs', 'Voice Interface'],
    category: 'ai',
    icon: <FaComments />,
    gradient: 'linear-gradient(135deg, #00d4aa33, #6c63ff33)',
    github: 'https://github.com/rohit3337/Nirogaverse-2',
  },
  {
    title: 'Event Management System',
    desc: 'A full-stack event management platform with event listing, participant registration, secure authentication, REST APIs using Spring Boot, and MySQL backend.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
    category: 'fullstack',
    icon: <FaCalendarAlt />,
    gradient: 'linear-gradient(135deg, #ff6b6b33, #ffa50233)',
    github: 'https://github.com/rohit3337/EVENT-MANAGEMENT-SYSTEM',
  },
  {
    title: 'Career Conversation AI Agent',
    desc: 'A career-conversation web agent using OpenAI and Gradio, enabling personalized user interactions with automatic detail capture, PDF/text parsing, and real-time notifications.',
    tags: ['Python', 'Gradio', 'OpenAI', 'Automation'],
    category: 'ai',
    icon: <FaComments />,
    gradient: 'linear-gradient(135deg, #00d4aa33, #6c63ff33)',
    github: githubProfile,
  },
  {
    title: 'Sidekick - Agentic Co-Worker',
    desc: 'An agentic personal co-worker application using LangChain with multi-step reasoning, success-criteria evaluation, and conversational state management through a Gradio interface.',
    tags: ['Python', 'LangChain', 'Gradio', 'Async I/O'],
    category: 'ai',
    icon: <FaRobot />,
    gradient: 'linear-gradient(135deg, #a855f733, #ff6b6b33)',
    github: githubProfile,
  },
  {
    title: 'HuffZip - High-Performance File Compression Engine',
    desc: 'A Huffman Coding-based compression tool using min-heaps, binary trees, and bit manipulation for efficient lossless file compression and accurate recovery.',
    tags: ['C++', 'STL', 'DSA', 'Huffman Coding'],
    category: 'systems',
    icon: <FaFileArchive />,
    gradient: 'linear-gradient(135deg, #4facfe33, #00f2fe33)',
    github: 'https://github.com/rohit3337/Huffzip',
  },
  {
    title: 'Microgrid Energy Simulator',
    desc: 'A time-based simulation of a microgrid with daily energy scheduling strategy that minimizes energy usage and operational cost with interactive visualization.',
    tags: ['Python', 'Simulation', 'Data Viz'],
    category: 'fullstack',
    icon: <FaMicrochip />,
    gradient: 'linear-gradient(135deg, #ffa50233, #00d4aa33)',
    github: githubProfile,
  },
  {
    title: 'Portfolio Website',
    desc: 'A modern, responsive portfolio website built with React featuring smooth animations, a clean light aesthetic, and contact automation.',
    tags: ['React', 'Framer Motion', 'Responsive'],
    category: 'web',
    icon: <FaGlobe />,
    gradient: 'linear-gradient(135deg, #6c63ff33, #00d4aa33)',
    github: githubProfile,
  },
]

const filters = ['All', 'AI', 'Full-Stack', 'Systems', 'Web']

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
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <FiGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
