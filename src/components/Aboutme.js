import React from 'react'
import styles from './aboutme.module.css'
import SectionIntroduction from './SectionIntroduction'
import * as motion from "motion/react-client"


const Aboutme = () => {
  return (
      <section id="about-me" className={styles.aboutMe}>
          <div className={styles.wrapper}>
              
              <SectionIntroduction>ABOUT ME</SectionIntroduction>

              <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>I am currently a senior at <strong>Univeristy of California, Merced</strong> majoring in Computer Science and Engineering (2026). </p>
                  <p className={styles.paragraph}>I have strong <strong>Full Stack Developer</strong> experience with a passion for designing innovative websites with amazing aesthetics. </p>
                  <p className={styles.paragraph}>During summer 2025, I was sponsored by UROC to perform research in <strong>AI for Education</strong> to build an AI-powered web app for analyzing and interpreting student feedback.</p>
                  <p className={styles.paragraph}>My current position as an AET STC @UC Merced involves troubleshooting and providing <strong>IT support</strong> to audio/visual equipment in classrooms for faculty.</p>
                  <p className={styles.paragraph}>Beyond coding, I enjoy the great outdoors and exploring different parts of California. </p>
              </div>

              <div className={styles.icons}>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}> <i class="fa-solid fa-dragon"></i></motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><i class="fa-solid fa-gamepad"></i></motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><i class="fa-solid fa-atom"></i></motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><i class="fa-solid fa-jedi"></i></motion.div>

              </div>

          </div>

      </section>
  )
}

export default Aboutme
