import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const fullText = "Counseling Psychology Student"
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let index = 0
    let isDeleting = false

    const typeWriter = () => {
      if (isDeleting) {
        setCurrentText(fullText.substring(0, index - 1))
        index--
      } else {
        setCurrentText(fullText.substring(0, index + 1))
        index++
      }

      let typeSpeed = isDeleting ? 30 : 100

      if (!isDeleting && index === fullText.length) {
        typeSpeed = 2000
        isDeleting = true
      } else if (isDeleting && index === 0) {
        isDeleting = false
        typeSpeed = 500
      }

      setTimeout(typeWriter, typeSpeed)
    }

    typeWriter()
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-sparkles"></div>
      <div className="hero-blush"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-wrapper animate-slide-up">
            <div className="greeting-badge">
              <span className="heart-icon">♥</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 className="hero-name">
              <span className="name-first">Gorety</span>
              <span className="name-last">Adhiambo Ogutu</span>
            </h1>
            
            <h2 className="hero-title">
              <span className="typing-text">{currentText}</span>
              <span className="typing-cursor">|</span>
            </h2>
            
            <p className="hero-description">
              A committed and ethically grounded Counseling Psychology student with a 
              strong interest in mental health support, interpersonal communication, 
              and community-based counseling.
            </p>

            <div className="hero-contact-info">
              <a href="tel:0748063488" className="contact-chip animate-slide-up delay-1">
                <span className="chip-icon">📱</span>
                <span>0748 063 488</span>
              </a>
              <a href="mailto:marygorety2006@gmail.com" className="contact-chip animate-slide-up delay-2">
                <span className="chip-icon">✉️</span>
                <span>marygorety2006@gmail.com</span>
              </a>
            </div>

            <div className="hero-buttons animate-slide-up delay-3">
              <a href="#contact" className="btn-primary">
                <span>Get In Touch</span>
                <span className="btn-heart">♥</span>
              </a>
              <a href="#experience" className="btn-secondary">
                View Experience
              </a>
            </div>
          </div>

          <div className="hero-profile animate-float delay-4">
            <div className="profile-glow"></div>
            <div className="profile-frame">
              <img 
                src="../images/profile.jpg" 
                alt="Gorety Adhiambo Ogutu" 
                className="profile-photo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.parentElement.innerHTML = '<div class="profile-initials"><span>G</span><span class="heart-decoration">♥</span><span>O</span></div>';
                }}
              />
              <div className="profile-ring"></div>
            </div>
            <div className="floating-hearts">
              <span className="heart h1">♥</span>
              <span className="heart h2">♥</span>
              <span className="heart h3">♥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator animate-fade-in delay-5">
        <span>Scroll Down</span>
        <div className="scroll-arrow">
          <span>↓</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
