import styles from './HomePage.module.scss'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function HomePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  const variants = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 50,
        mass: 3,
        duration: 0.6,
        delay: 1.5
      }
    }
  }

  return (
    <section id='home' className={styles.homePage}>
      <motion.div
        className={styles.container}
        ref={ref}
        initial={{ opacity: 0.1 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{
          duration: 3,
          delay: 0.5,
          ease: [0.17, 0.55, 0.55, 1]
        }}
      >
        <motion.div
          className={styles.title}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
        >
          <h1>Hello! I'm</h1>
          <h1>Eve Hung.</h1>
        </motion.div>
      </motion.div>
    </section>
  )
}