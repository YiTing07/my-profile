import styles from './OtherExperience.module.scss'

export function FrontEndCourse() {
  return (
    <div className={`${styles.card} frontEndCourse`}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h4>進修課程 | ALPHACamp 全端網頁工程師課程</h4>
          <p>2023.05-2023.12</p>
        </div>
        <div className={styles.content}>
          <section className={`${styles.describe} summary`}>
            <p>【課程說明】</p>
            <p>
              從零基礎系統學習網頁開發技能，涵蓋前端與後端技術，並聚焦於 React 前端開發與專題實作。課程強調動手實作與版本控制，逐步建立開發者思維與專案協作能力。
            </p>
          </section>
          <section className={`${styles.describe} skills`}>
            <p>【課程階段與技術學習】</p>

            <div className={styles.skill}>
              <p>基礎前端開發</p>
              <ul>
                <li>使用 HTML / CSS 打造響應式網頁</li>
                <li>熟悉 Bootstrap 框架進行版面設計與 UI 元件應用</li>
              </ul>
            </div>
            
            <div className={styles.skill}>
              <p>Javascript 與前端互動功能</p>
              <ul>
                <li>掌握 ES6 語法與 DOM 操作</li>
                <li>使用 AJAX 與 Fetch 串接公開 API，處理非同步資料</li>
              </ul>
            </div>

            <div className={styles.skill}>
              <p>Git 與版本控制</p>
              <ul>
                <li>熟悉 Git 工作流程（clone / commit / branch / merge）</li>
                <li>使用 GitHub 管理專案</li>
              </ul>
            </div>

            <div className={styles.skill}>
              <p>基礎後端理解</p>
              <ul>
                <li>使用 Node.js + Express 建立簡單伺服器</li>
                <li>認識 HTTP 通訊協定與 RESTful API 架構</li>
              </ul>
            </div>

            <div className={styles.skill}>
              <p>前端框架 React.js</p>
              <ul>
                <li>使使用 React 建立元件化應用，實作 CRUD 功能與資料狀態管理</li>
                <li>操作路由與登入驗證，整合串接 API 資料流程</li>
                <li>熟悉 props、state、useEffect、Router 等核心概念</li>
              </ul>
            </div>

          </section>
        </div>
      </div>
    </div>
  )
}