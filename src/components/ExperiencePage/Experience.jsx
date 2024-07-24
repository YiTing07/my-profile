import styles from './Experience.module.scss';
import SocialWorker from './Job/SocialWorker';
import Clerk from './Job/Clerk';
import Assistant from './Job/Assistant';
import ECommerceCourse from './Job/ECommerceCourse';
import FrontEndCourse from './Job/FrontEndCourse';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion'


export default function Experience() {
  const years = ['2018', '2019', '2020', '2021', '2023']
  const [currentYear, setCurrentYear] = useState('2018');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  const renderJobComponent = () => {
    switch (currentYear) {
      case '2018':
        return <SocialWorker />;
      case '2019':
        return <Clerk />;
      case '2020':
        return <ECommerceCourse />;
      case '2021':
        return <Assistant />;
      case '2023':
        return <FrontEndCourse />;
      default:
        return <SocialWorker />
    }
  }

  return (
    <section id='Experience' className={styles.experiencePage}>
      <motion.div
        className={styles.container}
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : -200
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.17, 0.55, 0.55, 1]
        }}
      >
        <div className={styles.experience}>
          <h2>EXPERIENCE</h2>
          <div className={styles.content}>
            <div className={styles.timeline}>
              <div className={styles.buttonGroup}>
                {years.map((year) =>
                  <button
                    key={year}
                    onClick={() => setCurrentYear(year)}
                    className={currentYear === year ? styles.active : ''}
                  >
                    {year}
                  </button>
                )}
              </div>
            </div>

            <motion.div
              key={currentYear}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {renderJobComponent()}
            </motion.div>


          </div>
        </div>
      </motion.div>
    </section>
  )
}