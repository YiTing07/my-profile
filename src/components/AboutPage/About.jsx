import styles from './About.module.scss';
import myImage from '../../assets/images/my-image.jpg';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 50,
        mass: 5,
        duration: 0.9,
        delay: 1.5
      }
    }
  }

  return (
    <section id='About' className={styles.aboutPage}>
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
        <div className={styles.about}>
          <h2>ABOUT</h2>
          <div className={styles.description}>
            <p>
              我是洪怡婷，喜歡攝影和旅行，有輕度的聽覺障礙，不過只要音量大聲  、口齒清晰、語速不快，便能與人輕鬆對談。若有聽不清楚的情況，也會在當下向對方釐清內容和語意。
            </p>
            <p>
              目前於生醫產業協會擔任專案助理，負責政府計畫執行與研討會籌辦，具備專案管理、跨部門協調與問題解決能力。2023 年開始接觸前端，熟悉 HTML、CSS、JavaScript、React 等技術，並透過 AlphaCamp 課程與自學完成多項實作專案，如餐廳收藏清單、Landing Page 與個人作品集網站。也持續透過 MDN、FreeCodeCamp 等資源精進，練習響應式切版與重構作品集。
            </p>
            <p>
              擅長有系統地安排時程、追蹤進度，能與不同角色有效合作。期望結合實作能力與溝通協調經驗，成為能與團隊共創價值的前端工程師。
            </p>
            <span>
              #HTML #CSS #JavaScript(ES6) #React
            </span>
          </div>
        </div>
        <motion.div
          className={styles.myImage}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
        >
          <img src={myImage} alt="myImage" />
        </motion.div>
      </motion.div>
    </section>
  )
}

