import styles from './OtherExperience.module.scss';
import { ECommerceCourse } from "./ECommerceCourse";
import { FrontEndCourse } from "./FrontEndCourse";
import { BookActivity } from "./BookActivity";
import { Volunteer } from "./Volunteer";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function OtherExperience () {
  const [ currentIndex, setCurrentIndex ] = useState(0);

  const cards = [  
    <FrontEndCourse />,
    <ECommerceCourse />,
    <Volunteer />,
    <BookActivity />
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => prev === 0 ? cards.length - 1 : prev - 1)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => prev === cards.length - 1 ? 0 : prev + 1)
  }

  return (
    <div className={styles.otherExperience}>
      <div className={styles.container}>
        <h3>其他經驗</h3>
        
        <div className={styles.carousel}>
          <div className={styles.control}>
            <button className="prev" onClick={handlePrev}>◀</button>
            <button className="next" onClick={handleNext}>▶</button>
          </div>

          
          <motion.div
            key={currentIndex}
            initial={{opacity: 0, x: 10}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
          >
            {cards[currentIndex]}
          </motion.div>
          
                  
        </div>
      </div>
    </div>
  )
}