import { ThemeProvider } from './context/ThemeContext'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import ThemeSwitcher from './components/ThemeSwitcher'
import ImageGallery from './components/ImageGallery'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <AnimatedBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ImageGallery />
        <Education />
        <Contact />
        <Footer />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  )
}

export default App
