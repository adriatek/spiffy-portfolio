import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
          <h1 className={styles.headerText}>Adrian Hernandez</h1>
          <div className={styles.navItems}>
            <a href="#about-me" className={styles.anchor}>
                  <i className={`fa-solid fa-user-astronaut ${styles.icons}`}></i>
                </a>
            <a href="#experience" className={styles.anchor}>
                  <i className={`fa-solid fa-graduation-cap ${styles.icons}`}></i>
                </a>
            <a href="#projects" className={styles.anchor}>
              <i className={`fa-solid fa-diagram-project ${styles.icons}`}></i>
            </a>

          </div>
    </header>
  )
}

export default Header
