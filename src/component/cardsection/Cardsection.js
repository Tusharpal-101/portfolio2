// src/component/pages/cardsection/CardSectionNav.jsx
import React from 'react';
import styles from '../cardsection/cardsection.module.css';
import { useNavigate } from 'react-router-dom';

export default function CardSectionNav() {
  const navigate = useNavigate();

  const handleNavigation = (type) => {
    switch (type) {
      case 'all':
        navigate('/category/all');
        break;
      case 'design':
        navigate('/category/design');
        break;
      case 'webdev':
        navigate('/category/web development');
        break;
      case 'writing':
        navigate('/category/writing');
        break;
      case 'marketing':
        navigate('/category/marketing');
        break;
      case 'hire':
        navigate('/contact');
        break;
      default:
        navigate('/category/all');
    }
  };

  return (
    <div className={styles['trade-section']}>
      <div className={styles['trade-grid']}>

        {/* Big card - All Projects */}
        <div className={`${styles.card} ${styles['card-large']}`}>
          <div className={styles['card-text']}>
            <h2>All Projects</h2>
            <p>Browse all my work — Web Development, Design, Writing & Marketing.</p>
            <button
              className={styles.ctaBtn}
              onClick={() => handleNavigation('all')}
            >
              View All
            </button>
            <a
              href="#"
              className={styles.learnMore}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('all');
              }}
            >
              Learn more &gt;
            </a>
          </div>
          <div className={styles['card-image']}>
            <img src="/your-image-path/all-projects.png" alt="All projects demo" />
          </div>
        </div>

        {/* Small card 1 - Design */}
        <div className={`${styles.card} ${styles['card-small']}`}>
          <h3>Design Projects</h3>
          <p>UI/UX, branding, logos and creative visuals.</p>
          <img src="/your-image-path/design.png" alt="Design demo" />
          <a
            href="#"
            className={styles.learnMore}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('design');
            }}
          >
            See Designs &gt;
          </a>
        </div>

        {/* Small card 2 - Web Development */}
        <div className={`${styles.card} ${styles['card-small']}`}>
          <h3>Web Development</h3>
          <p>Responsive websites & ReactJS apps.</p>
          <img src="/your-image-path/webdev.png" alt="Web development demo" />
          <a
            href="#"
            className={styles.learnMore}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('webdev');
            }}
          >
            View Work &gt;
          </a>
        </div>

        {/* Small card 3 - Writing */}
        <div className={`${styles.card} ${styles['card-small']}`}>
          <h3>Writing Projects</h3>
          <p>Blogs, guides, and engaging articles.</p>
          <img src="/your-image-path/writing.png" alt="Writing demo" />
          <a
            href="#"
            className={styles.learnMore}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('writing');
            }}
          >
            Read More &gt;
          </a>
        </div>

        {/* Small card 4 - Marketing */}
        <div className={`${styles.card} ${styles['card-small']}`}>
          <h3>Marketing Campaigns</h3>
          <p>Social media, promotions and product launches.</p>
          <img src="/your-image-path/marketing.png" alt="Marketing demo" />
          <a
            href="#"
            className={styles.learnMore}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('marketing');
            }}
          >
            Explore Campaigns &gt;
          </a>
        </div>

        {/* Small card 5 - Hire Me */}
        <div className={`${styles.card} ${styles['card-small']}`}>
          <h3>Hire Me</h3>
          <p>Looking for a developer or designer? Let’s collaborate.</p>
          <img src="/your-image-path/hire.png" alt="Hire me demo" />
          <a
            href="#"
            className={styles.learnMore}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('hire');
            }}
          >
            Contact Me &gt;
          </a>
        </div>

      </div>
    </div>
  );
}
