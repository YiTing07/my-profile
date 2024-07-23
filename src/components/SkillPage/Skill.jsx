import styles from './Skill.module.scss';
import codeIcon from '../../assets/icons/code.png';
import toolIcon from '../../assets/icons/tool.png';

const professional = [
  "擁有 HTML、CSS、JavaScript 知識功底",
  "熟悉 CSS 進階排版 (Flexbox、Grid)",
  "熟悉 Bootstrap 框架應用",
  "熟悉 SASS / SCSS 框架應用",
  "熟悉 RWD 響應式網頁設計",
  "熟悉 React.js 開發框架",
  "了解 Git 版本控制",
  "了解 Node.js、Express.js"
]

const tools = [
  "Figma：製作框線稿、邏輯流程等",
  "Canva：製作與編輯文宣",
  "Photoshop：編輯相片、設計文宣",
  "Trello：利用看板列出目前所需完成的任務項目",
  "Asana：使用專案清單、甘特圖、看板等模式，完成個人網站的任務目標"
]

function Professional() {
  return (
    <div className={`${styles.skillCard} professional`}>
      <div className={styles.icon}>
        <img src={codeIcon} alt="codeIcon" />
      </div>
      <div className={styles.skillContent}>
        <h3>基礎語言與前端框架</h3>
        <div className={styles.skillList}>
          <ul>
            {professional.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>

      </div>
    </div>
  )
}

function Tools() {
  return (
    <div className={`${styles.skillCard} tool`}>
      <div className={styles.icon}>
        <img src={toolIcon} alt="toolIcon" />
      </div>
      <div className={styles.skillContent}>
        <h3>工具使用</h3>
        <div className={styles.skillList}>
          <ul>
            {tools.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Skill() {
  return (
    <section id='Skill' className={styles.skillPage}>
      <div className={styles.container}>
        <div className={styles.skill}>
          <h2>SKILL</h2>
          <div className={styles.skillCards}>
            <Professional />
            <Tools/>
          </div>
        </div>
      </div>
    </section>
  )
}