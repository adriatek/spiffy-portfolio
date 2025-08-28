import React from 'react'
import styles from './aboutme.module.css'

const Aboutme = () => {
  return (
      <section id="about-me" className={styles.aboutMe}>
          <div className={styles.wrapper}>
              
              <div className={styles.headerText}>
                  <div className={styles.line}></div>
                  <h1 className={styles.text}>About Me</h1>
                  <div className={styles.line}></div>
              </div>

              <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>I am a <strong>Full Stack developer</strong> with a passion for designing beautiful websites with amazing functionality. </p>
                  <p className={styles.paragraph}>I enjoy working across both front-end and back-end technologies, building applications that are not only visually appealing but also highly efficient and reliable.</p>
                  <p className={styles.paragraph}>My experience includes creating dynamic web apps, developing APIs, and implementing responsive designs that adapt seamlessly to any device. </p>
                  <p className={styles.paragraph}>Beyond coding, I focus on delivering user-centered solutions by combining clean design, smooth interactions, and strong technical foundations. </p>
              </div>

              <div className={styles.icon}>
                  <i class="fa-solid fa-dragon"></i>
                  <i class="fa-solid fa-chess-bishop"></i>
                  <i class="fa-solid fa-atom"></i>
                  <i class="fa-solid fa-jedi"></i>
              </div>

          </div>

      </section>
  )
}

export default Aboutme
