import { useTheme } from '../context/ThemeContext'
import './ThemeSwitcher.css'

const ThemeSwitcher = () => {
  const { currentTheme, switchTheme } = useTheme()

  const themes = [
    { id: 'maroon', name: 'Maroon', color: '#8b4557' },
    { id: 'blue', name: 'Blue', color: '#2563eb' },
    { id: 'pink', name: 'Pink', color: '#ec4899' },
    { id: 'purple', name: 'Purple', color: '#9333ea' },
    { id: 'teal', name: 'Teal', color: '#0d9488' }
  ]

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="theme-switcher">
      <button 
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme selector"
      >
        <span className="toggle-icon">🎨</span>
        <span className="current-theme">{currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="theme-dropdown">
          {themes.map((theme) => (
            <button
              key={theme.id}
              className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
              onClick={() => {
                switchTheme(theme.id)
                setIsOpen(false)
              }}
            >
              <div 
                className="color-circle"
                style={{ backgroundColor: theme.color }}
              ></div>
              <span className="theme-name">{theme.name}</span>
              {currentTheme === theme.id && (
                <span className="check-mark">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ThemeSwitcher
