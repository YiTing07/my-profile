import styles from './Skill.module.scss';
import codeIcon from '../../assets/icons/code.png';
import toolIcon from '../../assets/icons/tool.png';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const expertise = [
  {
    title: "HTML/CSS/Javascript",
    describe: "具備前端開發基礎，能獨立撰寫靜態頁面與互動效果"
  },
  {
    title: "CSS 排版技巧",
    describe: "熟悉 Flexbox 與 Grid 等進階排版技術"
  },
  {
    title: "RWD 響應式設計",
    describe: "能製作適用於不同裝置的響應式頁面"
  },
  {
    title: "SASS/SCSS",
    describe: "了解 CSS 預處理器語法，提升樣式撰寫效率與可維護性"
  },
  {
    title: "Bootstrap",
    describe: "熟悉其元件與網格模式，可快速建立一致性 UI"
  },
  {
    title: "Tailwind CSS",
    describe: "熟悉實用原子化工具類別(Utility Classes)，能快速開發高度客製化的介面"
  },
  {
    title: "Material UI(MUI)",
    describe: "了解常用 React UI 元件庫的使用方式，加速介面開發流程"
  },
  {
    title: "React.js",
    describe: "熟悉元件化開發與基礎狀態管理(Hooks)，可進行 SPA 架構開發"
  },
  {
    title: "Git/GitHub",
    describe: "了解版本控制工具的基本操作與分支管理流程，能使用GitHub Pages 部署靜態網站與作品集"
  },
  {
    title: "Node.js/Express.js",
    describe: "具備基礎後端概念與簡單 API 建立經驗"
  }
]

const tools = [
  {
    title: "Figma",
    describe: "製作線框圖(Wireframe)、頁面流程圖、UI 元件排版等視覺規劃"
  },
  {
    title: "Canva",
    describe: "設計與編輯活動宣傳圖、社群貼文、簡報等圖像內容"
  },
  {
    title: "Photoshop",
    describe: "進行相片編修、文宣設計與基本版面排版"
  },
  {
    title: "Trello",
    describe: "使用看板方式追蹤任務進度，協助個人專案流程管理"
  },
]

function Expertise() {
  return (
    <div className={`${styles.skillCards} expertise`}>     
      {expertise.map((item, index) => (
        <div key={index} className={styles.card}>
          <h4>{item.title}</h4>
          <p>{item.describe}</p>
        </div>
      ))}     
    </div>
  )
}

function Tools() {
  return (
    <div className={`${styles.skillCards} tool`}>
      {tools.map((item, index) => (
        <div key={index} className={styles.card}>
          <h4>{item.title}</h4>
          <p>{item.describe}</p>
        </div>
      ))}
    </div>
  )
}

export default function Skill() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  return (
    <section id='Skill' className={styles.skillPage}>
      <div className={styles.container}>
        <motion.div
          className={styles.skill}
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.17, 0.55, 0.55, 1]
          }}
        >
          <h2>SKILL</h2>
          <div className={styles.skills}>
            <div className={`${styles.skillItem} expertise`}>
              <div className={styles.title}>
                <div className={styles.icon}>
                  <img src={codeIcon} alt="codeIcon" />
                </div>
                <h3>基礎語言與前端框架</h3>
              </div>
              <Expertise />
            </div>
            
            <div className={`${styles.skillItem} tool`}>
              <div className={styles.title}>
                <div className={styles.icon}>
                  <img src={toolIcon} alt="toolIcon" />
                </div>
                <h3>工具使用</h3>
              </div>
              <Tools />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}