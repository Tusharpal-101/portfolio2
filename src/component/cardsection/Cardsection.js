import React from 'react';
import styles from '../cardsection/cardsection.module.css';

export default function Cardsection() {
  return (
    <div className={styles['trade-section']}>
      <div className={styles['trade-grid']}>

        {/* Big top card - Showcase main skill */}
        <div className={`${styles.card} ${styles['card-large']}`}>
          <div className={styles['card-text']}>
            <h2>UI/UX & Web Development</h2>
            <p>Designing visually stunning and responsive websites using ReactJS and modern UI/UX principles.</p>
            <button className={styles.ctaBtn}>View My Work</button>
            <a href="#" className={styles.learnMore}>Learn more &gt;</a>
          </div>
          <div className={styles['card-image']}>
            <img src="/your-image-path/uiux-demo.png" alt="UI/UX design demo" />
          </div>
        </div>

        {/* Small card 1 - Graphic Designing */}
        <div className={`${styles.card} ${styles['card-small']}`}>
          <h3>Graphic Designing</h3>
          <p>Creating logos, banners, social media visuals, and branding materials.</p>
          <img src="/your-image-path/graphic-design.png" alt="Graphic design icon" />
          <a href="#" className={styles.learnMore}>See Designs &gt;</a>
        </div>

        {/* Small card 2 - UI/UX Projects */}
        <div className={`${styles.card} ${styles['card-small']}`}>
          <h3>UI/UX Projects</h3>
          <p>Designing interactive interfaces and seamless user experiences.</p>
          <img src="/your-image-path/uiux.png" alt="UI/UX icon" />
          <a href="#" className={styles.learnMore}>View Projects &gt;</a>
        </div>

        {/* Small card 3 - Web Development */}
        <div className={`${styles.card} ${styles['card-small']}`}>
          <h3>Web Development</h3>
          <p>Building responsive websites and web apps using ReactJS, JavaScript, and modern frameworks.</p>
          <img src="/your-image-path/web-dev.png" alt="Web development icon" />
          <a href="#" className={styles.learnMore}>View Work &gt;</a>
        </div>

        {/* Small card 4 - Hire Me / Collaboration */}
        <div className={`${styles.card} ${styles['card-small']}`}>
          <h3>Hire Me</h3>
          <p>Looking for a designer or developer? Let’s create something amazing together.</p>
          <img src="/your-image-path/hire.png" alt="Hire me icon" />
          <a href="#" className={styles.learnMore}>Contact Me &gt;</a>
        </div>

      </div>
    </div>
  );
}
