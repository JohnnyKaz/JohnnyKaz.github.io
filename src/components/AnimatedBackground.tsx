import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
}

interface AnimatedBackgroundProps {
  theme: 'light' | 'dark';
}

export function AnimatedBackground({ theme }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const scrollOffsetRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const calculateNodeCount = () => {
      const area = canvas.width * canvas.height;
      const screenWidth = window.innerWidth;
      
      // Adjust density based on screen size
      let density;
      if (screenWidth < 640) {
        // Mobile: very sparse
        density = 25000;
      } else if (screenWidth < 1024) {
        // Tablet: moderately sparse
        density = 20000;
      } else {
        // Desktop: normal density
        density = 15000;
      }
      
      return Math.floor(area / density);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recalculate nodes on resize
      const newNodeCount = calculateNodeCount();
      const currentNodeCount = nodesRef.current.length;
      
      if (newNodeCount > currentNodeCount) {
        // Add more nodes
        const nodesToAdd = newNodeCount - currentNodeCount;
        const newNodes = Array.from({ length: nodesToAdd }, () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          targetX: Math.random() * canvas.width,
          targetY: Math.random() * canvas.height,
        }));
        nodesRef.current = [...nodesRef.current, ...newNodes];
      } else if (newNodeCount < currentNodeCount) {
        // Remove excess nodes
        nodesRef.current = nodesRef.current.slice(0, newNodeCount);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes
    const nodeCount = calculateNodeCount();
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      targetX: Math.random() * canvas.width,
      targetY: Math.random() * canvas.height,
    }));

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    // Scroll handler
    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodesRef.current.forEach((node, i) => {
        // Move towards target with some randomness
        const dx = node.targetX - node.x;
        const dy = node.targetY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 10) {
          node.targetX = Math.random() * canvas.width;
          node.targetY = Math.random() * canvas.height;
        }

        node.vx += (dx / dist) * 0.01;
        node.vy += (dy / dist) * 0.01;

        // Apply mouse influence
        if (mouseRef.current.active) {
          const mouseDx = mouseRef.current.x - node.x;
          const mouseDy = mouseRef.current.y - node.y;
          const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

          if (mouseDist < 200) {
            const force = (200 - mouseDist) / 200;
            node.vx += (mouseDx / mouseDist) * force * 0.5;
            node.vy += (mouseDy / mouseDist) * force * 0.5;
          }
        }

        // Apply scroll influence
        node.vy += scrollOffsetRef.current * 0.0001;

        // Damping
        node.vx *= 0.95;
        node.vy *= 0.95;

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around edges
        if (node.x < 0) node.x = canvas.width;
        if (node.x > canvas.width) node.x = 0;
        if (node.y < 0) node.y = canvas.height;
        if (node.y > canvas.height) node.y = 0;

        // Draw connections
        nodesRef.current.forEach((otherNode, j) => {
          if (i >= j) return;

          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3;
            // Use lighter orange for both themes
            const color = theme === 'light' 
              ? `rgba(255, 140, 90, ${opacity})`
              : `rgba(255, 153, 102, ${opacity})`;
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });

        // Draw node with lighter orange
        ctx.fillStyle = theme === 'light' ? '#ff6b35' : '#ff8c42';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
