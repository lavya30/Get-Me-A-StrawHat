"use client";
import React, { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Particle configuration
    const particles = []
    const particleCount = 80
    const maxDistance = 150

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.8  // Velocity X
        this.vy = (Math.random() - 0.5) * 0.8  // Velocity Y
        this.radius = Math.random() * 2 + 1

        // Pirate-themed colors
        const colors = ['#f59e0b', '#eab308', '#fbbf24', '#f97316', '#dc2626', '#ffffff']
        this.color = colors[Math.floor(Math.random() * colors.length)]

        this.opacity = Math.random() * 0.8 + 0.2
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulse = 0
      }

      update() {
        // Move particle
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) {
          this.vx = -this.vx
          this.x = Math.max(0, Math.min(canvas.width, this.x))
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy = -this.vy
          this.y = Math.max(0, Math.min(canvas.height, this.y))
        }

        // Pulsing effect
        this.pulse += this.pulseSpeed
        this.currentRadius = this.radius + Math.sin(this.pulse) * 0.5
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2)
        ctx.fillStyle = `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`
        ctx.fill()

        // Add glow effect
        ctx.shadowColor = this.color
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    // Draw connections between nearby particles
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.4

            // Gradient line for pirate theme
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            )
            gradient.addColorStop(0, `rgba(245, 158, 11, ${opacity})`) // Amber
            gradient.addColorStop(0.5, `rgba(220, 38, 38, ${opacity})`) // Red
            gradient.addColorStop(1, `rgba(245, 158, 11, ${opacity})`) // Amber

            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with dark background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      drawConnections()

      animationId = requestAnimationFrame(animate)
    }

    // Mouse interaction
    const handleMouseMove = (event) => {
      const mouseX = event.clientX
      const mouseY = event.clientY

      particles.forEach(particle => {
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const force = (100 - distance) / 100
          particle.vx += (dx / distance) * force * 0.01
          particle.vy += (dy / distance) * force * 0.01
        }
      })
    }

    // Initialize
    resizeCanvas()
    initParticles()
    animate()

    // Event listeners
    window.addEventListener('resize', () => {
      resizeCanvas()
      initParticles()
    })
    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)'
      }}
    />
  )
}

export default AnimatedBackground
