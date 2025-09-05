import React from 'react';
import styles from './index.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Nagaraju Danne</span>
          </h1>
          <h2 className={styles.subtitle}>Software Developer</h2>
          <p className={styles.description}>
            Passionate about creating innovative solutions and building scalable applications.
            I specialize in full-stack development with expertise in modern web technologies.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryButton}>
              View My Work
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Get In Touch
            </a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.placeholder}>
            <span>Your Photo Here</span>
          </div>
        </div>
      </div>
      
      <section className={styles.quickOverview}>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>
          <div className={styles.stat}>
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>
          <div className={styles.stat}>
            <h3>5+</h3>
            <p>Technologies</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
