import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    date: 'April 2025 – August 2025',
    title: 'Client-Based Internship',
    company: 'Silogis Nanosystems – NXP Semiconductors, Bengaluru',
    desc: 'Worked on automated impact analysis of single transistor, bitcell, and memory instances at the circuit level. Designed a dashboard-integrated workflow for data extraction, interpretation, visualization, and reporting.',
  },
  {
    date: 'May 2024 – June 2024',
    title: 'Backend Developer Intern',
    company: 'Care Health Insurance, India',
    desc: 'Gained hands-on experience in Spring Boot, Spring Security, and Spring Data JPA for secure authentication, authorization, and database management. Developed and tested backend components with API development and ORM workflows.',
  },
  
]

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="experience" id="experience">
      <div className="section-header">
        <div className="section-badge">Journey</div>
        <h2 className="section-title">Experience & Training</h2>
        <p className="section-subtitle">
          My professional journey and key learning experiences.
        </p>
      </div>

      <div className="timeline" ref={ref}>
        {experiences.map((exp, i) => (
          <div
            className={`timeline-item reveal ${inView ? 'visible' : ''}`}
            key={i}
            style={{ transitionDelay: `${i * 0.2}s` }}
          >
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-date">{exp.date}</div>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
