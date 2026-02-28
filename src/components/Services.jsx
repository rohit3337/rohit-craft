import { useInView } from 'react-intersection-observer'
import { FiCode, FiLayout, FiDatabase, FiSmartphone, FiCpu, FiTrendingUp } from 'react-icons/fi'

const services = [
  {
    icon: <FiLayout />,
    title: 'Custom Web Applications',
    desc: 'I build responsive, modern web applications from scratch tailored to your specific business needs using React, Next.js, and modern frontend technologies.',
  },
  {
    icon: <FiDatabase />,
    title: 'Full-Stack Development',
    desc: 'End-to-end application development with robust backends using Spring Boot, Django, or Node.js with database integration (MySQL, MongoDB, PostgreSQL).',
  },
  {
    icon: <FiCpu />,
    title: 'AI-Powered Applications',
    desc: 'Intelligent applications using LangChain, OpenAI, and Gradio — from AI tutors to conversational agents and automated workflows.',
  },
  {
    icon: <FiCode />,
    title: 'API Development & Integration',
    desc: 'RESTful API design and development with secure authentication, authorization, and seamless third-party integrations.',
  },
  {
    icon: <FiSmartphone />,
    title: 'Responsive UI/UX Design',
    desc: 'Pixel-perfect, mobile-first designs with smooth animations, accessibility best practices, and exceptional user experiences.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Dashboard & Data Visualization',
    desc: 'Interactive dashboards with real-time data visualization, reporting tools, and analytics platforms for data-driven decisions.',
  },
]

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="services" id="services">
      <div className="section-header">
        <div className="section-badge">What I Offer</div>
        <h2 className="section-title">Services I Provide</h2>
        <p className="section-subtitle">
          I'm ready to build your web applications according to your requirements. Here's what I can do for you.
        </p>
      </div>

      <div className={`services-grid stagger-children ${inView ? 'visible' : ''}`} ref={ref}>
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
