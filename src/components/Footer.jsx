import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2 className="footer-logo">
            <span className="logo-text">gorety ogutu</span>
            <span className="logo-heart">♥</span>
          </h2>
          <p className="footer-tagline">
            Counseling Psychology Student
          </p>
        </div>

        <div className="footer-contact-info">
          <a href="tel:0748063488" className="contact-link">
            <span className="link-icon">📱</span>
            <span>0748 063 488</span>
          </a>
          <a href="mailto:marygorety2006@gmail.com" className="contact-link">
            <span className="link-icon">✉️</span>
            <span>marygorety2006@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © {currentYear} Gorety Adhiambo Ogutu
        </p>
        <p className="footer-watermark">
          powered by <a href="https://catech.co.ke" target="_blank" rel="noopener noreferrer" className="watermark-link">catech solutions</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer

