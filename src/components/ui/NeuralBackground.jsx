import React, { useEffect, useRef } from 'react';

export const NeuralBackground = ({ isDarkTheme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = { x: undefined, y: undefined, radius: 150 };

    // Updated colors based on theme
    const colors = isDarkTheme ? [
      'rgba(59, 130, 246, 0.5)',  // Blue
      'rgba(99, 102, 241, 0.5)',  // Indigo
      'rgba(139, 92, 246, 0.5)',  // Purple
      'rgba(236, 72, 153, 0.5)',  // Pink
    ] : [
      'rgba(37, 99, 235, 0.5)',   // Darker Blue
      'rgba(76, 29, 149, 0.5)',   // Darker Purple
      'rgba(157, 23, 77, 0.5)',   // Darker Pink
    ];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 30) + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.distance = 100;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0.02 + Math.random() * 0.02;
        this.lastMouse = { x: x, y: y };
        this.glowIntensity = 0;
      }

      draw() {
        // Glow effect
        if (this.glowIntensity > 0) {
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 15 * this.glowIntensity;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Draw connections to nearby particles
        particles.forEach(particle => {
          const dx = this.x - particle.x;
          const dy = this.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;

          if (distance < maxDistance && particle !== this) {
            const alpha = (1 - (distance / maxDistance)) * 0.5;
            const gradient = ctx.createLinearGradient(this.x, this.y, particle.x, particle.y);
            
            gradient.addColorStop(0, this.color.replace(/[\d.]+\)$/g, `${alpha})`));
            gradient.addColorStop(1, particle.color.replace(/[\d.]+\)$/g, `${alpha})`));

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(particle.x, particle.y);
            ctx.stroke();
          }
        });
      }

      update() {
        // Calculate direction to mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Mouse interaction
        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          const moveX = Math.cos(angle) * force * this.density;
          const moveY = Math.sin(angle) * force * this.density;
          
          this.x -= moveX;
          this.y -= moveY;
          this.glowIntensity = force;
        } else {
          this.glowIntensity = Math.max(0, this.glowIntensity - 0.05);
        }

        // Gentle floating motion
        this.angle += this.speed;
        const floatRadius = 1;
        this.x += Math.cos(this.angle) * floatRadius;
        this.y += Math.sin(this.angle) * floatRadius;

        // Return to original position
        const dxBase = this.baseX - this.x;
        const dyBase = this.baseY - this.y;
        this.x += dxBase * 0.05;
        this.y += dyBase * 0.05;

        // Store last mouse position for trail effect
        this.lastMouse.x = mouse.x;
        this.lastMouse.y = mouse.y;
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 9000;
      
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    // Initialize
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 to-slate-900"
    />
  );
};