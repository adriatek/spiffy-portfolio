import React from 'react'
import styles from './experience.module.css'
import SectionIntroduction from './SectionIntroduction'
import ListEntry from './ListEntry'



const Experience = () => {
  return (
    <section id="experience">
      <div className={styles.wrapper}>

        <SectionIntroduction dark={true}>EXPERIENCE</SectionIntroduction>


        <div className={styles.sectionContent}>
          <ListEntry title="AET Student Technology Consultant" date="Aug 2025 - Present">
            <li>Provided IT Support to over 200 classrooms on campus</li>
            <li>Assisted in the creation and resolution of over 100 technical support tickets</li>
          </ListEntry>

          <ListEntry title="Web Designer - EH&S" date="Aug 2023 - Feb 2025">
            <li>Added over 20 pages of new content to university's website</li>
            <li>Collaborated with designs on Canva including newsletters, flyers, and social media graphics</li>
          </ListEntry>

          <ListEntry title="Software Developer Intern" date="Jun 2024 - Sept 2024">
            <li>Interned at a local software company where I learned React.js, Git, and Express.</li>
          </ListEntry>

        </div>

      </div>
    </section>
  )
}

export default Experience
