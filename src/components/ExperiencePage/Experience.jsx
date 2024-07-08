import styles from './Experience.module.scss';
import SocialWorker from './Job/SocialWorker';
import Clerk from './Job/Clerk';
import Assistant from './Job/Assistant';
import ECommerceCourse from './Job/ECommerceCourse';
import FrontEndCourse from './Job/FrontEndCourse';
import { useState } from 'react';


export default function Experience() {
  const years = ['2018', '2019', '2020', '2021', '2023']
  const [currentYear, setCurrentYear] = useState('2018');

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
      <div className={styles.container}>
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

            {renderJobComponent()}

          </div>
        </div>
      </div>
    </section>
  )
}