import React, { useEffect, useRef } from "react";
import styles from "../component/css/banner.module.css";

export default function Banner() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const drops = [];
    const numDrops = 200; // More drops for realistic feel

    class Drop {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height - height;
        this.length = 10 + Math.random() * 25;
        this.speed = 2 + Math.random() * 5;
        this.opacity = 0.2 + Math.random() * 0.4; // Transparent
        this.width = 1 + Math.random() * 2;
        this.color = `rgba(34, 211, 238, ${this.opacity})`; // Blueish transparent
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.width;
        ctx.shadowColor = this.color; // Glow effect
        ctx.shadowBlur = 8;
        ctx.stroke();
      }

      update() {
        this.y += this.speed;
        if (this.y > height) {
          this.reset();
          this.y = -this.length;
        }
        this.draw();
      }
    }

    for (let i = 0; i < numDrops; i++) {
      drops.push(new Drop());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0,0,0,0.15)"; // subtle trail effect
      ctx.fillRect(0, 0, width, height);

      drops.forEach(drop => drop.update());
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.banner}>
      <canvas ref={canvasRef} className={styles.glassRain}></canvas>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Freelance Developer & Designer</h1>
          <p className={styles.subtitle}>
            I build modern websites and web apps with stunning UI/UX design. Let's bring your ideas to life! 🚀
          </p>
          <button className={styles.ctaBtn}>Hire Me</button>
        </div>
      </div>
    </section>
  );
}
