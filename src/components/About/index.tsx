import React from 'react';
import styles from './index.module.scss';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        
        <div className={styles.content}>
          <div className={styles.bio}>
            <h2>Who I Am</h2>
            <p>
              I'm a passionate software developer with a strong foundation in full-stack development.
              I enjoy solving complex problems and creating user-friendly applications that make a difference.
              My journey in software development has been driven by curiosity and a constant desire to learn new technologies.
            </p>
            <p>
              With experience in both frontend and backend development, I strive to create seamless
              user experiences while maintaining robust and scalable backend systems.
            </p>
          </div>
          
          <div className={styles.skills}>
            <h2>Skills & Technologies</h2>
            <div className={styles.skillGrid}>
              <div className={styles.skillCategory}>
                <h3>Frontend</h3>
                <ul>
                  <li>React.js</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>HTML5 & CSS3</li>
                  <li>Sass/SCSS</li>
                </ul>
              </div>
              
              <div className={styles.skillCategory}>
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python</li>
                  <li>RESTful APIs</li>
                  <li>Database Design</li>
                </ul>
              </div>
              
              <div className={styles.skillCategory}>
                <h3>Tools & Others</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>AWS/Cloud</li>
                  <li>CI/CD</li>
                  <li>Agile/Scrum</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.interests}>
            <h2>When I'm Not Coding</h2>
            <p>
              I enjoy staying up-to-date with the latest technology trends, contributing to open-source projects,
              and exploring new programming languages and frameworks. In my free time, I like to read tech blogs,
              watch educational videos, and work on personal projects that challenge my skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
