import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: '📱', label: 'Call', action: 'tel:0748063488' },
    { icon: '✉️', label: 'Email', action: 'mailto:marygorety2006@gmail.com' },
    { icon: '📺', label: 'YouTube', action: '#' },
    { icon: '🎨', label: 'Portfolio', action: '#' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Side Icons - Left */}
        <div className="footer-side-icons left">
          {socialLinks.slice(0, 2).map((link, index) => (
            <a 
              key={index}
              href={link.action}
              className="side-icon"
              title={link.label}
              target="_blank"
            >
              <span className="icon">{link.icon}</span>
            </a>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="footer-main-wrapper">
          <div className="footer-main">
            <div className="footer-brand">
              <h2 className="footer-logo">
                <span>G</span>
                <span className="logo-heart">♥</span>
                <span>O</span>
              </h2>
              <p className="footer-tagline">
                Counseling Psychology Student
              </p>
              <p className="footer-role">
                Mental Health Advocate
              </p>
            </div>

            <div className="footer-links">
              <div className="links-group">
                <h4>Navigation</h4>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
              </div>

              <div className="links-group">
                <h4>Connect</h4>
                <a href="tel:0748063488">
                  <span className="link-icon">📱</span> 0748 063 488
                </a>
                <a href="mailto:marygorety2006@gmail.com">
                  <span className="link-icon">✉️</span> marygorety2006@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-hearts">
              <span className="floating-heart">♥</span>
              <span className="floating-heart delay-1">♥</span>
              <span className="floating-heart delay-2">♥</span>
            </div>
            
            <p className="copyright">
              © {currentYear} Gorety Adhiambo Ogutu. All rights reserved.
            </p>
            
            <p className="footer-motto">
              Made with <span className="motto-heart">♥</span> and dedication
            </p>
          </div>
        </div>

        {/* Side Icons - Right */}
        <div className="footer-side-icons right">
          {socialLinks.slice(2, 4).map((link, index) => (
            <a 
              key={index}
              href={link.action}
              className="side-icon"
              title={link.label}
              target="_blank"
            >
              <span className="icon">{link.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

