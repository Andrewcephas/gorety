import { useState, useEffect } from 'react'
import './ImageGallery.css'

const ImageGallery = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    // Define your images here since we can't read filesystem from browser
    const imageList = [
      { id: 1, name: 'Profile', url: '../images/profile.jpg', type: 'profile' },
      { id: 2, name: 'Royal G', url: '../images/ROYAL_G_CUT.jpg', type: 'gallery' },
      { id: 3, name: 'TIM 0687', url: '../images/TIM_0687.jpg', type: 'gallery' },
      { id: 4, name: 'TIM 3866', url: '../images/TIM_3866.jpg', type: 'gallery' },
      { id: 5, name: 'Riyan 1', url: '../images/Riyan_1.jpg', type: 'gallery' },
      { id: 6, name: 'Riyan 2', url: '../images/Riyan_2.jpg', type: 'gallery' },
      { id: 7, name: 'Riyan 3', url: '../images/Riyan_3.jpg', type: 'gallery' },
      { id: 8, name: 'Riyan 4', url: '../images/Riyan_4.jpg', type: 'gallery' }
    ]
    setImages(imageList)
  }, [])

  if (images.length === 0) return null

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Gallery</span>
          <h2 className="section-title">Photos</h2>
          <div className="title-underline"></div>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className={`gallery-item ${image.type}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="image-wrapper">
                <img 
                  src={image.url} 
                  alt={image.name}
                  className="gallery-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `
                      <div class="image-error">
                        <span class="error-icon">📷</span>
                        <span class="error-text">${image.name}</span>
                      </div>
                    `
                  }}
                />
                <div className="image-overlay">
                  <span className="image-name">{image.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageGallery

