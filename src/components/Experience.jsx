import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    date: 'Nov 2025 – Feb 2026',
    title: 'Machine Learning Project Intern',
    company: 'Virtual Labs Project (MoE NMEICT), DEI - Agra, India',
    desc: 'Developed interactive machine learning virtual lab modules for a national MoE-funded initiative, translating core ML algorithms into hands-on learning components for students across partner institutions. Led testing and debugging cycles, incorporating expert-reviewed feedback to improve module accuracy and usability, contributing to a Top 20/200 national virtual lab hackathon result.',
  },
  {
    date: 'April 2025 – August 2025',
    title: 'CAD Automation Intern',
    company: 'NXP Semiconductors (Contract via SiLogix) - Bengaluru, India',
    desc: 'Automated impact analysis workflows for single transistors, bitcells, and memory instances at the circuit level, reducing manual analysis effort. Designed and implemented a dashboard-integrated pipeline for data extraction, interpretation, and visualization, improving turnaround time on semiconductor design insight reporting.',
  },
  {
    date: 'May 2024 – June 2024',
    title: 'Backend Developer Intern',
    company: 'Care Health Insurance - Gurugram, India',
    desc: 'Built secure REST APIs using Spring Boot, Spring Security, and Spring Data JPA, implementing authentication, authorization, and database management for enterprise workflows. Developed and unit-tested backend components, strengthening ORM data-access patterns and enterprise-level Java application architecture.',
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
