import { useEffect, useRef } from 'react'
import './Contact.css'

const Contact = () => {
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

  const references = [
    {
      name: 'Kennedy Owino',
      title: 'Pastor',
      phone: '0723 871 852',
      icon: '🙏'
    },
    {
      name: 'Andrew Ngumbau',
      title: 'CEO, Catech Solutions and Graphics',
      phone: '0793 614 592',
      icon: '💼'
    }
  ]

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-card animate-slide-up">
            <h3 className="card-heading">
              <span className="heart-emoji">♥</span>
              Contact Information
            </h3>

            <div className="contact-items">
              <a href="tel:0748063488" className="contact-item">
                <div className="item-icon phone-icon">
                  <span>📱</span>
                  <div className="icon-ring"></div>
                </div>
                <div className="item-details">
                  <span className="item-label">Phone</span>
                  <span className="item-value">0748 063 488</span>
                </div>
              </a>

              <a href="mailto:marygorety2006@gmail.com" className="contact-item">
                <div className="item-icon email-icon">
                  <span>✉️</span>
                  <div className="icon-ring"></div>
                </div>
                <div className="item-details">
                  <span className="item-label">Email</span>
                  <span className="item-value">marygorety2006@gmail.com</span>
                </div>
              </a>
            </div>

            <div className="contact-decorations">
              <div className="decoration-circle"></div>
              <div className="decoration-heart">♥</div>
            </div>
          </div>

          <div className="references-section animate-slide-up delay-2">
            <h3 className="references-title">Professional References</h3>
            
            <div className="references-grid">
              {references.map((ref, index) => (
                <div key={index} className={`reference-card ref-${index + 1}`}>
                  <div className="ref-avatar">
                    <span className="avatar-icon">{ref.icon}</span>
                  </div>
                  
                  <div className="ref-info">
                    <h4 className="ref-name">{ref.name}</h4>
                    <p className="ref-title">{ref.title}</p>
                    <a href={`tel:${ref.phone.replace(/\s/g, '')}`} className="ref-phone">
                      {ref.phone}
                    </a>
                  </div>

                  <button className="call-btn">
                    <span>Call</span>
                    <span className="btn-heart">♥</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
