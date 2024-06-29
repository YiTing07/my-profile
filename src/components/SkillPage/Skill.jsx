import styles from './Skill.module.scss';
import codeIcon from '../../assets/icons/code.png';
import toolIcon from '../../assets/icons/tool.png';

export default function Skill() {
  return (
    <section id='Skill' className={styles.skillPage}>
      <div className={styles.container}>
        <div className={styles.skill}>
          <h2>SKILL</h2>
          <div className={styles.skillCards}>
            <div className={`${styles.skillCard} professional`}>
              <div className={styles.icon}>
                <img src={codeIcon} alt="codeIcon" />
              </div>
              <div className={styles.skillContent}>
                <h3>基礎語言與前端框架</h3>
                <div className={styles.skillList}>
                  <ul>
                    <li>擁有 HTML、CSS、JavaScript 知識功底</li>
                    <li>熟悉 CSS 進階排版 (Flexbox、Grid)</li>
                    <li>熟悉 Bootstrap 框架應用</li>
                    <li>熟悉 SASS / SCSS 框架應用</li>
                  </ul>
                  <ul>
                    <li>熟悉 RWD 響應式網頁設計</li>
                    <li>熟悉 React.js 開發框架</li>
                    <li>了解 Git 版本控制</li>
                    <li>了解 Node.js、Express.js</li>
                  </ul>
                </div>
                
              </div>
            </div>
            <div className={`${styles.skillCard} tool`}>
              <div className={styles.icon}>
                <img src={toolIcon} alt="toolIcon" />
              </div>
              <div className={styles.skillContent}>
                <h3>工具使用</h3>
                <div className={styles.skillList}>
                  <ul>
                    <li>Figma</li>
                    <li>Canva</li>
                    <li>Photoshop</li>
                  </ul>
                  <ul>
                    <li>Trello</li>
                    <li>Asana</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}