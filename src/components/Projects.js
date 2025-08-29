import React from 'react'
import styles from './projects.module.css'
import SectionIntroduction from './SectionIntroduction'
import ImgOverlay from './ImgOverlay'
import studentEnrollmentAppImg from '../assets/student-enrollment-app.png'
const Projects = () => {
  return (
    <section id="projects">
      <div className={styles.wrapper}>

        <SectionIntroduction dark={false}>PROJECTS</SectionIntroduction>
        <div className={styles.sectionContent}>
            <ImgOverlay
              imgSrc={studentEnrollmentAppImg}
              title="Student Enrollment App"
              githubLink="#"
              projectLink="#"
            >
              A project showcasing student enrollment full stack app.
          </ImgOverlay>
          
          <ImgOverlay
            imgSrc={studentEnrollmentAppImg}
            title="Student Enrollment App"
            githubLink="#"
            projectLink="#"
          >
            A project showcasing student enrollment full stack app.
          </ImgOverlay>

          <ImgOverlay
            imgSrc={studentEnrollmentAppImg}
            title="Student Enrollment App"
            githubLink="#"
            projectLink="#"
          >
            A project showcasing student enrollment full stack app.
          </ImgOverlay>
        </div>

            

        </div>
    </section>
  )
}

export default Projects

