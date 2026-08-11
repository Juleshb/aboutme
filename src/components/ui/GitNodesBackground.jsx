import { useEffect, useRef } from "react";

const NODE_COUNT = 60;
const CONNECT_DISTANCE = 150;
const MAX_SPEED = 0.4;

function createNodes(width, height) {
  return Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * MAX_SPEED,
    vy: (Math.random() - 0.5) * MAX_SPEED,
    radius: Math.random() * 2.2 + 2,
    pulse: Math.random() * Math.PI * 2,
  }));
}

function getThemeColors() {
  const style = getComputedStyle(document.documentElement);
  return {
    accent: style.getPropertyValue("--color-accent").trim(),
    node: style.getPropertyValue("--color-node").trim(),
    line: style.getPropertyValue("--color-node-line").trim(),
  };
}

export default function GitNodesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let nodes = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = createNodes(window.innerWidth, window.innerHeight);
    };

    const draw = () => {
      const { accent, node, line } = getThemeColors();
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < CONNECT_DISTANCE) {
            const alpha = (1 - dist / CONNECT_DISTANCE) * 0.45;
            ctx.beginPath();
            ctx.strokeStyle = line;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        n.pulse += 0.025;
        const glow = 0.55 + Math.sin(n.pulse) * 0.25;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + 4, 0, Math.PI * 2);
        ctx.strokeStyle = accent;
        ctx.globalAlpha = glow * 0.18;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = node;
        ctx.globalAlpha = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.globalAlpha = glow * 0.85;
        ctx.fill();
      });

      ctx.globalAlpha = 1;

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x <= 0 || n.x >= width) n.vx *= -1;
        if (n.y <= 0 || n.y >= height) n.vy *= -1;

        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="git-nodes-bg fixed inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
}
