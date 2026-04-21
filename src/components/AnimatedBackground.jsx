import { useEffect, useRef } from 'react'
import './AnimatedBackground.css'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

     const drawSparkles = () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height)
       
       const sparkles = 25
       
       // Get maroon colors from CSS variables
       const primaryMaroon = getComputedStyle(document.documentElement)
         .getPropertyValue('--primary-maroon').trim() || '#8b4557'
       const lightMaroon = getComputedStyle(document.documentElement)
         .getPropertyValue('--light-maroon').trim() || '#a85c6f'
       
       // Convert hex to rgba
       const hexToRgba = (hex, opacity) => {
         const r = parseInt(hex.slice(1, 3), 16)
         const g = parseInt(hex.slice(3, 5), 16)
         const b = parseInt(hex.slice(5, 7), 16)
         return `rgba(${r}, ${g}, ${b}, ${opacity})`
       }
       
       for (let i = 0; i < sparkles; i++) {
         const x = (Math.sin(time * 0.001 + i) * 0.5 + 0.5) * canvas.width
         const y = (Math.cos(time * 0.0015 + i * 2) * 0.5 + 0.5) * canvas.height
         const size = (Math.sin(time * 0.002 + i) + 2) * 1.5
         const opacity = (Math.sin(time * 0.001 + i) + 1) * 0.15 + 0.08

         // Maroon gradient colors using CSS variables
         const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3)
         gradient.addColorStop(0, hexToRgba(primaryMaroon, opacity))
         gradient.addColorStop(0.5, hexToRgba(lightMaroon, opacity * 0.6))
         gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

         ctx.fillStyle = gradient
         ctx.fillRect(x - size * 3, y - size * 3, size * 6, size * 6)
       }

       time += 16
       animationFrameId = requestAnimationFrame(drawSparkles)
     }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    drawSparkles()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="animated-background">
      <canvas ref={canvasRef} className="sparkle-canvas"></canvas>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  )
}

export default AnimatedBackground
