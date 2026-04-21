import { useEffect, useRef } from 'react'
import './Skills.css'

const Skills = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      icon: '💬',
      title: 'Counseling & Interpersonal',
      color: 'maroon1',
      skills: [
        'Active listening and empathy',
        'Basic counseling skills',
        'Confidentiality and ethical awareness',
        'Rapport building'
      ]
    },
    {
      icon: '👥',
      title: 'Communication & Leadership',
      color: 'maroon2',
      skills: [
        'Effective communication',
        'Leadership and coordination',
        'Conflict resolution'
      ]
    },
    {
      icon: '🎨',
      title: 'Digital & Creative',
      color: 'maroon3',
      skills: [
        'Content creation (YouTube – CatechLifestyle)',
        'Graphic design (self-taught)',
        'Digital communication'
      ]
    }
  ]

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">Professional Skills</h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`skill-card skill-${category.color}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="card-icon">
                <span>{category.icon}</span>
                <div className="icon-glow"></div>
              </div>
              
              <h3 className="card-title">{category.title}</h3>
              
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <span className="skill-check">✦</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              <div className="card-decoration-circle"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
