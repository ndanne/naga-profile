import React from 'react';
import styles from './index.module.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and TypeScript, featuring modern design and smooth animations.",
    technologies: ["React", "TypeScript", "Sass", "Vite"],
    githubUrl: "https://github.com/ndanne/naga-profile",
    liveUrl: "https://ndanne.github.io/naga-profile"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A full-stack task management application with user authentication, real-time updates, and collaborative features.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/yourusername/task-manager"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with shopping cart functionality, payment integration, and admin dashboard.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform"
  }
];

const Projects: React.FC = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.subtitle}>
          Here are some of the projects I've worked on. Each project represents a unique challenge and learning opportunity.
        </p>
        
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder}>
                  <span>Project Image</span>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>{tech}</span>
                  ))}
                </div>
                
                <div className={styles.projectLinks}>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <span>View Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${styles.link} ${styles.primary}`}
                    >
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.moreProjects}>
          <p>More projects coming soon! Stay tuned for updates.</p>
          <a 
            href="https://github.com/ndanne" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
