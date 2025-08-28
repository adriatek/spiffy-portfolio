import React from 'react'
import styles from './sectionIntroduction.module.css'
const SectionIntroduction = () => {
  return (
      <div className={styles.headerText}>
          <div className={styles.line}></div>
          <h1 className={styles.text}>About Me</h1>
          <div className={styles.line}></div>
      </div>
  )
}

export default SectionIntroduction
