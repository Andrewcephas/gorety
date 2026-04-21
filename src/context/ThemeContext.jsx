import { createContext, useContext, useState, useEffect } from 'react'
import { colorThemes } from '../config/themes'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('gorety-theme')
    return saved || 'maroon'
  })

  const theme = colorThemes[currentTheme] || colorThemes.maroon

  useEffect(() => {
    localStorage.setItem('gorety-theme', currentTheme)
    
    const root = document.documentElement
    root.classList.add('theme-transitioning')
    
    root.style.setProperty('--primary-maroon', theme.primary)
    root.style.setProperty('--dark-maroon', theme.dark)
    root.style.setProperty('--light-maroon', theme.light)
    root.style.setProperty('--darker-maroon', theme.dark)
    root.style.setProperty('--white', theme.white)
    root.style.setProperty('--off-white', theme.offWhite)
    root.style.setProperty('--light-gray', theme.lightGray)
    root.style.setProperty('--text-dark', theme.textDark)
    root.style.setProperty('--text-medium', theme.textMedium)
    
    setTimeout(() => {
      root.classList.remove('theme-transitioning')
    }, 600)
  }, [currentTheme, theme])

  const switchTheme = (themeName) => {
    if (colorThemes[themeName]) {
      setCurrentTheme(themeName)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
