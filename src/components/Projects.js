import React from 'react'
import styles from './projects.module.css'
import SectionIntroduction from './SectionIntroduction'
import ImgOverlay from './ImgOverlay'
import studentEnrollmentAppImg from '../assets/student-enrollment-app.png'
import ThematicAppImg from '../assets/thematic.png'
import NASAReactApp from '../assets/nasa-react-app.png'

const Projects = () => {
  return (
    <section id="projects">
      <div className={styles.wrapper}>

        <SectionIntroduction dark={false}>PROJECTS</SectionIntroduction>
        <div className={styles.sectionContent}>
            <ImgOverlay
              imgSrc={ThematicAppImg}
              title="Thematic"
              githubLink="https://github.com/pyEdTools/thematic"
              projectLink="https://www.loom.com/share/85f92d54508f4468b32b4a5cadecb829?sid=fe846517-9ab2-4534-a1fb-b94fefb009b9"
            >
              Thematic: An AI-based web-app for automating thematic analysis in educational research. 
          </ImgOverlay>
          
          <ImgOverlay
            imgSrc={NASAReactApp}
            title="NASA React App"
            githubLink="https://github.com/adriatek/NASA-react-app"
            projectLink="https://nasa-react-app-adr.netlify.app/"
          >
            A React app that fetches and displays NASA's Astronomy Picture of the Day (APOD) using NASA's public API.
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

