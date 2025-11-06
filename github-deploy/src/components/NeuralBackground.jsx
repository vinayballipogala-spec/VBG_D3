import { useEffect, useRef } from 'react';

const NeuralBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const connectionsRef = useRef([]);
  const clustersRef = useRef([]);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const parallaxRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX / window.innerWidth - 0.5;
      mouseRef.current.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Particle class (small, subtle, clustered)
    class Particle {
      constructor(clusterIndex, cluster) {
        this.clusterIndex = clusterIndex;
        this.cluster = cluster;
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * cluster.radius;
        this.offsetX = Math.cos(angle) * dist;
        this.offsetY = Math.sin(angle) * dist;
        this.vx = (Math.random() - 0.5) * 0.15;
        this.vy = (Math.random() - 0.5) * 0.15;
        this.radius = Math.random() * 0.6 + 1.0;
        this.opacity = Math.random() * 0.35 + 0.25;
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.offsetX += this.vx;
        this.offsetY += this.vy;
        this.pulse += 0.02;
        // keep near cluster center
        const distFromCenter = Math.hypot(this.offsetX, this.offsetY);
        if (distFromCenter > this.cluster.radius) {
          this.offsetX *= 0.98;
          this.offsetY *= 0.98;
        }
      }

      draw() {
        const pulseOpacity = this.opacity + Math.sin(this.pulse) * 0.2;
        const x = this.cluster.x + this.offsetX;
        const y = this.cluster.y + this.offsetY;
        
        ctx.save();
        ctx.globalAlpha = Math.max(0, pulseOpacity);
        
        // Subtle bluish glow
        const gradient = ctx.createRadialGradient(
          x, y, 0,
          x, y, this.radius * 2
        );
        gradient.addColorStop(0, 'rgba(99, 179, 237, 0.95)');
        gradient.addColorStop(1, 'rgba(99, 179, 237, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, this.radius * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Core particle (small, blue)
        ctx.fillStyle = 'rgba(59, 130, 246, 0.95)';
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Connection class
    class Connection {
      constructor(particle1, particle2) {
        this.particle1 = particle1;
        this.particle2 = particle2;
        this.opacity = 0;
        this.maxOpacity = 0.3;
      }

      update() {
        const x1 = this.particle1.cluster.x + this.particle1.offsetX;
        const y1 = this.particle1.cluster.y + this.particle1.offsetY;
        const x2 = this.particle2.cluster.x + this.particle2.offsetX;
        const y2 = this.particle2.cluster.y + this.particle2.offsetY;
        const dx = x1 - x2;
        const dy = y1 - y2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 140) {
          this.opacity = this.maxOpacity * (1 - distance / 140);
        } else {
          this.opacity = 0;
        }
      }

      draw() {
        if (this.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = this.opacity;
          const grad = ctx.createLinearGradient(
            this.particle1.cluster.x + this.particle1.offsetX,
            this.particle1.cluster.y + this.particle1.offsetY,
            this.particle2.cluster.x + this.particle2.offsetX,
            this.particle2.cluster.y + this.particle2.offsetY
          );
          grad.addColorStop(0, 'rgba(59, 130, 246, 0.9)');
          grad.addColorStop(1, 'rgba(147, 51, 234, 0.8)');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.moveTo(this.particle1.cluster.x + this.particle1.offsetX, this.particle1.cluster.y + this.particle1.offsetY);
          ctx.lineTo(this.particle2.cluster.x + this.particle2.offsetX, this.particle2.cluster.y + this.particle2.offsetY);
          ctx.stroke();
          
          ctx.restore();
        }
      }
    }

    // Initialize clusters (small floating neural clusters)
    const initClusters = () => {
      clustersRef.current = [];
      const clusterCount = 7;
      for (let i = 0; i < clusterCount; i++) {
        clustersRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: 90 + Math.random() * 50
        });
      }
    };

    const updateClusters = () => {
      clustersRef.current.forEach(c => {
        c.x += c.vx;
        c.y += c.vy;
        // wrap-around so clusters traverse the screen continuously
        if (c.x < -c.radius) c.x = canvas.width + c.radius;
        if (c.x > canvas.width + c.radius) c.x = -c.radius;
        if (c.y < -c.radius) c.y = canvas.height + c.radius;
        if (c.y > canvas.height + c.radius) c.y = -c.radius;
      });
    };

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const perCluster = 22;
      clustersRef.current.forEach((cluster, clusterIndex) => {
        for (let j = 0; j < perCluster; j++) {
          particlesRef.current.push(new Particle(clusterIndex, cluster));
        }
      });
    };

    // Initialize connections
    const initConnections = () => {
      connectionsRef.current = [];
      const particles = particlesRef.current;
      // connect only within same cluster for a tidy, separate look
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          if (particles[i].clusterIndex === particles[j].clusterIndex) {
            connectionsRef.current.push(new Connection(particles[i], particles[j]));
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      // pitch black backdrop
      ctx.fillStyle = 'rgba(0,0,0,1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      updateClusters();
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Update and draw connections
      connectionsRef.current.forEach(connection => {
        connection.update();
        connection.draw();
      });
      
      // optional very subtle vignette
      const grad = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.5,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        Math.max(canvas.width, canvas.height)
      );
      grad.addColorStop(0, 'rgba(0,0,0,0)');
      grad.addColorStop(1, 'rgba(0,0,0,0.25)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    initClusters();
    initParticles();
    initConnections();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default NeuralBackground;



