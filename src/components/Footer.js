import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <a href="https://github.com/adriatek" rel="noreferrer" target="_blank" className={styles.icon}>
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/adrianhernandez577/" rel="noreferrer" target="_blank" className={styles.icon}>
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="/" rel="noreferrer" target="_blank" className={styles.icon}>
        <i class="fa-brands fa-discord"></i>
      </a>
    </div>
  )
}

export default Footer
