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
    
    // Update CSS variables
    const root = document.documentElement
    Object.entries(theme).forEach(([key, value]) => {
      const cssVar = `--${key}`
      // Only set CSS variables that are color values
      if (typeof value === 'string' && value.startsWith('#')) {
        root.style.setProperty(cssVar, value)
      }
    })
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
