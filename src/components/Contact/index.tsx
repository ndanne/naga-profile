import React from 'react';
import styles from './index.module.scss';

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.title}>Get In Touch</h1>
        <p className={styles.subtitle}>
          I'm always interested in hearing about new opportunities and connecting with fellow developers.
          Feel free to reach out if you'd like to work together or just want to say hello!
        </p>
        
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h2>Contact Information</h2>
            
            <div className={styles.contactItem}>
              <h3>📧 Email</h3>
              <p>
                <a href="mailto:nagaraju.danne@example.com">nagaraju.danne@example.com</a>
              </p>
            </div>
            
            <div className={styles.contactItem}>
              <h3>💼 LinkedIn</h3>
              <p>
                <a 
                  href="https://linkedin.com/in/nagaraju-danne" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/nagaraju-danne
                </a>
              </p>
            </div>
            
            <div className={styles.contactItem}>
              <h3>🐙 GitHub</h3>
              <p>
                <a 
                  href="https://github.com/ndanne" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  github.com/ndanne
                </a>
              </p>
            </div>
            
            <div className={styles.contactItem}>
              <h3>📱 Phone</h3>
              <p>
                <a href="tel:+1234567890">+1 (234) 567-8900</a>
              </p>
            </div>
            
            <div className={styles.contactItem}>
              <h3>📍 Location</h3>
              <p>Available for remote work worldwide</p>
            </div>
          </div>
          
          <div className={styles.messageForm}>
            <h2>Send a Message</h2>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  placeholder="Tell me about your project or just say hello!"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
            
            <p className={styles.formNote}>
              * This form is for display purposes. Please use the direct contact methods above.
            </p>
          </div>
        </div>
        
        <div className={styles.availability}>
          <div className={styles.availabilityCard}>
            <h3>🚀 Available for Work</h3>
            <p>
              I'm currently open to new opportunities and exciting projects. 
              Whether you're a startup, established company, or fellow developer, 
              I'd love to hear from you!
            </p>
            <div className={styles.responseTime}>
              <span>📅 Typical response time: Within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
