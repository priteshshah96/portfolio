import React, { useEffect, useRef } from 'react';

export const FloatingParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const colors = [
      'rgba(59, 130, 246, 0.6)',  // Blue
      'rgba(99, 102, 241, 0.6)',  // Indigo
      'rgba(139, 92, 246, 0.6)',  // Purple
      'rgba(236, 72, 153, 0.6)',  // Pink
      'rgba(239, 68, 68, 0.6)',   // Red
    ];

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 1 + 0.5;
        this.spin = Math.random() * 0.2 - 0.1;
        this.rotation = Math.random() * Math.PI * 2;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.wobble = {
          amplitude: Math.random() * 2 + 1,
          frequency: Math.random() * 0.02 + 0.01,
          offset: Math.random() * Math.PI * 2
        };
      }

      update() {
        this.x += this.speedX + Math.sin(Date.now() * this.wobble.frequency + this.wobble.offset) * this.wobble.amplitude;
        this.y += this.speedY;
        this.rotation += this.spin;

        // Adjust opacity based on position
        this.opacity = Math.min(0.8, Math.max(0.2, 1 - (this.y / canvas.height)));

        if (this.y > canvas.height + 10 || this.x < -10 || this.x > canvas.width + 10) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 2);
        const colorStart = this.color.replace(/[\d.]+\)$/g, `${this.opacity})`);
        const colorEnd = this.color.replace(/[\d.]+\)$/g, '0)');
        
        gradient.addColorStop(0, colorStart);
        gradient.addColorStop(1, colorEnd);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        
        // Draw star shape
        for (let i = 0; i < 5; i++) {
          const angle = (i * Math.PI * 2) / 5;
          const x1 = Math.cos(angle) * this.size;
          const y1 = Math.sin(angle) * this.size;
          const x2 = Math.cos(angle + Math.PI / 5) * (this.size * 0.4);
          const y2 = Math.sin(angle + Math.PI / 5) * (this.size * 0.4);
          
          if (i === 0) {
            ctx.moveTo(x1, y1);
          } else {
            ctx.lineTo(x1, y1);
          }
          ctx.lineTo(x2, y2);
        }
        
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    const initParticles = () => {
      particles = Array.from({ length: 50 }, () => new Particle());
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};