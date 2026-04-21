import { useEffect, useRef } from 'react'
import './Education.css'

const Education = () => {
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

  const education = [
    {
      year: '2025 – Present',
      degree: 'Bachelor of Counseling Psychology',
      institution: 'Kisii University',
      status: 'Ongoing',
      color: 'maroon1'
    },
    {
      year: '',
      degree: 'Kenya Certificate of Secondary Education (KCSE)',
      institution: 'Oyugi Ogango Girls Secondary School',
      status: null,
      color: 'maroon2'
    },
    {
      year: '',
      degree: 'Kenya Certificate of Primary Education (KCPE)',
      institution: 'Ngeri Primary School',
      status: null,
      color: 'maroon3'
    }
  ]

  const attributes = [
    { icon: '🔐', text: 'Integrity and confidentiality' },
    { icon: '💝', text: 'Empathy and emotional awareness' },
    { icon: '⭐', text: 'Self-motivated and disciplined' },
    { icon: '🌱', text: 'Strong willingness to learn' }
  ]

  return (
    <section id="education" className="education-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag light">Background</span>
          <h2 className="section-title light">Education & Attributes</h2>
          <div className="title-underline light"></div>
        </div>

        <div className="education-container">
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`edu-item edu-${edu.color}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="edu-year">{edu.year}</div>
                <div className="edu-content">
                  <div className="edu-connector"></div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-school">{edu.institution}</p>
                  {edu.status && (
                    <span className={`status-badge status-${edu.color}`}>
                      {edu.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="attributes-section">
            <h3 className="attributes-title">
              <span className="title-heart">♥</span>
              Personal Attributes
            </h3>
            
            <div className="attributes-grid">
              {attributes.map((attr, index) => (
                <div 
                  key={index} 
                  className="attribute-card"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <span className="attr-icon">{attr.icon}</span>
                  <span className="attr-text">{attr.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
