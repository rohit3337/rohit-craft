import { useInView } from 'react-intersection-observer'
import { FaReact, FaPython, FaJava, FaGitAlt, FaLinux, FaDatabase } from 'react-icons/fa'
import { SiSpringboot, SiDjango, SiJavascript, SiMysql, SiMongodb, SiDocker } from 'react-icons/si'
import { FiCode, FiServer, FiTool, FiCpu } from 'react-icons/fi'

const topSkills = [
  { icon: <FaReact />, name: 'React', level: 'Familiar' },
  { icon: <FaPython />, name: 'Python', level: 'Intermediate' },
  { icon: <FaJava />, name: 'Java', level: 'Advanced' },
  { icon: <SiSpringboot />, name: 'Spring Boot', level: 'Intermediate' },
  { icon: <SiDjango />, name: 'Django', level: 'Intermediate' },
  { icon: <SiJavascript />, name: 'JavaScript', level: 'Intermediate' },
  { icon: <FaGitAlt />, name: 'Git/GitHub', level: 'Intermediate' },
  { icon: <FaLinux />, name: 'Linux', level: 'Intermediate' },
]

const categories = [
  {
    icon: <FiCode />,
    title: 'Programming Languages',
    skills: [
      { name: 'Python', pct: 90 },
      { name: 'Java', pct: 85 },
      { name: 'C', pct: 80 },
      { name: 'JavaScript', pct: 85 },
    ],
  },
  {
    icon: <FiServer />,
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', pct: 88 },
      { name: 'Spring Boot / JPA', pct: 78 },
      { name: 'Django', pct: 75 },
      { name: 'LangChain', pct: 82 },
    ],
  },
  {
    icon: <FaDatabase />,
    title: 'Databases & Tools',
    skills: [
      { name: 'MySQL', pct: 80 },
      { name: 'Git / GitHub', pct: 92 },
      { name: 'Pandas / NumPy', pct: 85 },
      { name: 'REST APIs', pct: 88 },
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
          Technologies and tools I use to bring your ideas to life.
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
