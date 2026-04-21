import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
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

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Career Objective</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-card">
            <p className="about-text animate-text">
              A committed and ethically grounded Counseling Psychology student 
              currently pursuing a Bachelor's degree, with a strong interest in 
              mental health support, interpersonal communication, and 
              community-based counseling. I aim to develop practical counseling 
              competencies while contributing meaningfully to individual and 
              group well-being within a professional setting.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <span>Ethically Grounded</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💬</span>
                <span>Strong Interpersonal Skills</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🤝</span>
                <span>Community Focus</span>
              </div>
            </div>
          </div>

          <div className="about-photo-wrapper">
            <div className="photo-frame">
              <img 
                src="../images/ROYAL_G_CUT.jpg" 
                alt="Gorety - Royal G Cut" 
                className="section-photo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '../images/TIM_0687.jpg';
                }}
              />
              <div className="photo-shine"></div>
              <div className="photo-glow"></div>
            </div>
            <div className="photo-hearts">
              <span className="fh fh1">♥</span>
              <span className="fh fh2">♥</span>
              <span className="fh fh3">♥</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
