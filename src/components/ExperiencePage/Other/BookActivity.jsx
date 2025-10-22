import styles from './OtherExperience.module.scss';

export function BookActivity() {
  return (
    <div className={`${styles.card} bookActivity`}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h4>活動規劃 | 誠品書店自策展：沉澱吧！停在你的風景裡</h4>
          <p>2020.03.01-2020.03.31</p>
        </div>
        <div className={styles.content}>
          <section className={`${styles.describe} summary`}>
            <p>【策展概念】</p>
            <p>
              從混亂到平靜，從匆忙到從容，從掙扎到成熟 — 透過選書與陳列營造療癒空間，帶動讀者情緒共鳴。
            </p>
          </section>
          <section className={`${styles.describe} work`}>
            <p>【工作內容】</p>
            <ul>
              <li>
                規劃策展內容，包含主題發想、展名撰寫、文案設計、書單挑選、美術設計方向設定與展桌陳列規劃
              </li>
              <li>
                與店長協調執行細節，跨部門協作（採購、美術、行銷企劃），確保書籍調度與宣傳視覺一致
              </li>
              <li>
                負責現場布置與動線安排，並依每日銷售報表進行展桌陳列滾動式調整，提升展售效率
              </li>
              <li>
                策展結束後整理銷售報表，完成活動成效回饋與建議
              </li>
            </ul>
          </section>

          <section className={`${styles.describe} achievement`}>
            <p>【策展成果】</p>
            <ul>
              <li>參展書籍品項：60 項</li>
              <li>展期總銷量：399 本</li>
              <li>銷售金額：110,000 元</li>
              <li>銷售成效最佳類別：J 類書籍(成長與心理相關)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}