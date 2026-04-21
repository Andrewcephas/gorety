import { useEffect, useRef } from 'react'
import './Experience.css'

const Experience = () => {
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

  const experiences = [
    {
      id: 'committee',
      icon: '🎓',
      title: 'Committee Head – Christian Union (CU)',
      organization: 'Kisii University',
      color: 'purple',
      points: [
        'Leadership and coordination of student activities',
        'Organized programs promoting well-being'
      ]
    },
    {
      id: 'class-rep',
      icon: '🏫',
      title: 'Class Representative',
      organization: 'Oyugi Ogango Girls High School',
      color: 'maroon',
      points: [
        'Represented students',
        'Assisted in conflict resolution'
      ]
    },
    {
      id: 'content',
      icon: '🎥',
      title: 'Content Creator',
      organization: 'CatechLifestyle (YouTube)',
      color: 'pink',
      points: [
        'Created lifestyle and personal development content',
        'Built audience engagement'
      ]
    },
    {
      id: 'design',
      icon: '🎨',
      title: 'Independent Graphic Designer',
      organization: 'Freelance',
      color: 'lavender',
      points: [
        'Designed visual content',
        'Developed branding and communication materials'
      ]
    }
  ]

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">Experience & Leadership</h2>
          <div className="title-underline"></div>
        </div>

        <div className="experience-content">
          <div className="experience-photo-wrapper">
            <div className="photo-frame">
              <img 
                src="../images/riyan2.jpeg" 
                alt="Gorety - Experience" 
                className="section-photo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '../images/riyan3.jpeg';
                }}
              />
              <div className="photo-shine"></div>
              <div className="photo-glow"></div>
            </div>
            <div className="photo-hearts">
              <span className="fh fh1">♥</span>
              <span className="fh fh2">♥</span>
            </div>
          </div>

          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`experience-card card-${exp.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-number">0{index + 1}</div>
                
                <div className="exp-icon-wrapper">
                  {exp.id === 'class-rep' ? (
                    <img 
                      src="../images/TIM_0687.jpg" 
                      alt={exp.title} 
                      className="exp-photo"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '../images/tim_0687.jpg';
                      }}
                    />
                  ) : (
                    <span className="exp-icon">{exp.icon}</span>
                  )}
                  <div className="icon-pulse"></div>
                </div>

                <div className="exp-content">
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-organization">{exp.organization}</p>

                  <ul className="exp-points">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="exp-point">
                        <span className="point-bullet">✦</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-shine"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
