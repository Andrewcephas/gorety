import { useEffect, useRef } from 'react'
import './ImageGallery.css'

const ImageGallery = () => {
  const sectionRef = useRef(null)
  const images = [
    { id: 1, src: '/images/TIM_3866.jpeg', alt: 'TIM 3866' },
    { id: 2, src: '/images/ROYAL_G_CUT.jpg', alt: 'Royal G Cut' },
    { id: 3, src: '/images/TIM_0687.jpg', alt: 'TIM 0687' },
    { id: 4, src: '/images/riyan1.jpeg', alt: 'Riyan 1' },
    { id: 5, src: '/images/riyan3.jpeg', alt: 'Riyan 3' },
    { id: 6, src: '/images/riyan4.jpeg', alt: 'Riyan 4' }
  ]

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
    <section id="gallery" className="gallery-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Gallery</span>
          <h2 className="section-title">Photos</h2>
          <div className="title-underline"></div>
        </div>

        <div className="gallery-wrapper">
          <div className="gallery-cluster">
            {images.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-photo"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageGallery