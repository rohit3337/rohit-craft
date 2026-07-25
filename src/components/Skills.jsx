import { useInView } from 'react-intersection-observer'
import { FaReact, FaPython, FaJava, FaGitAlt, FaLinux, FaGithub, FaNodeJs } from 'react-icons/fa'
import { SiSpringboot, SiDjango, SiJavascript, SiMysql, SiPostgresql } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { FiCode, FiServer, FiCpu, FiDatabase } from 'react-icons/fi'

const topSkills = [
  { icon: <FaPython />, name: 'Python', level: 'Intermediate' },
  { icon: <FaJava />, name: 'Java', level: 'Advanced' },
  { icon: <FiCode />, name: 'C++', level: 'Advanced' },
  { icon: <SiJavascript />, name: 'JavaScript', level: 'Intermediate' },
  { icon: <FaReact />, name: 'React', level: 'Familiar' },
  { icon: <FaNodeJs />, name: 'Node.js', level: 'Intermediate' },
  { icon: <SiDjango />, name: 'Django', level: 'Intermediate' },
  { icon: <SiSpringboot />, name: 'Spring Boot', level: 'Intermediate' },
  { icon: <SiPostgresql />, name: 'PostgreSQL', level: 'Intermediate' },
  { icon: <SiMysql />, name: 'MySQL', level: 'Intermediate' },
  { icon: <FaGitAlt />, name: 'Git', level: 'Intermediate' },
  { icon: <FaGithub />, name: 'GitHub', level: 'Intermediate' },
  { icon: <VscCode />, name: 'VS Code', level: 'Proficient' },
  { icon: <FaLinux />, name: 'Linux', level: 'Intermediate' },
]

const categories = [
  {
    icon: <FiCode />,
    title: 'Programming Languages',
    skills: [
      { name: 'Python', pct: 90 },
      { name: 'Java', pct: 85 },
      { name: 'C++', pct: 88 },
      { name: 'JavaScript', pct: 85 },
    ],
  },
  {
    icon: <FiServer />,
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', pct: 88 },
      { name: 'Node.js', pct: 80 },
      { name: 'Spring Boot / JPA', pct: 78 },
      { name: 'Django', pct: 75 },
    ],
  },
  {
    icon: <FiDatabase />,
    title: 'Databases & Tools',
    skills: [
      { name: 'PostgreSQL', pct: 80 },
      { name: 'MySQL', pct: 80 },
      { name: 'Git / GitHub', pct: 92 },
      { name: 'VS Code / Linux', pct: 90 },
    ],
  },
  {
    icon: <FiCpu />,
    title: 'AI & Agentic Skills',
    skills: [
      { name: 'LangChain / LLMs', pct: 82 },
      { name: 'OpenAI / Gemini API', pct: 80 },
      { name: 'Gradio', pct: 78 },
      { name: 'LangSmith / Autogen', pct: 70 },
    ],
  },
]

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <div className="section-badge">My Stack</div>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build impactful projects.
        </p>
      </div>

      <div className="skills-container">
        <div className={`skills-grid stagger-children ${inView ? 'visible' : ''}`} ref={ref}>
          {topSkills.map((sk, i) => (
            <div className="skill-card" key={i}>
              <span className="skill-icon">{sk.icon}</span>
              <h4>{sk.name}</h4>
              <div className="skill-level">{sk.level}</div>
            </div>
          ))}
        </div>

        <div className="skill-categories" ref={ref2}>
          {categories.map((cat, ci) => (
            <div className={`skill-category reveal ${inView2 ? 'visible' : ''}`} key={ci} style={{ transitionDelay: `${ci * 0.15}s` }}>
              <h3>{cat.icon} {cat.title}</h3>
              <div className="skill-bars">
                {cat.skills.map((sk, si) => (
                  <div className="skill-bar" key={si}>
                    <div className="skill-bar-header">
                      <span>{sk.name}</span>
                      <span>{sk.pct}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: inView2 ? `${sk.pct}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
