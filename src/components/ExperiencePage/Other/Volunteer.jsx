import styles from './OtherExperience.module.scss'

export function Volunteer() {
  return (
    <div className={`${styles.card} volunteer`}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h4>志工經驗 | 社團法人中華民國兒童慈善協會 長期志工</h4>
          <p>2024.04-迄今</p>
        </div>
        <div className={styles.content}>
          <section className={`${styles.describe} summary`}>
            <p>【協會簡介】</p>
            <p>
              中華民國兒童慈善協會關懷16歲以下弱勢兒童，提供生活、教育、醫療補助，並推動聽損兒童音樂課程及表達性藝術療育，幫助孩子在困境中獲得支持與成長機會，勇敢追求夢想，迎向更好的未來。
            </p>
          </section>

          <section className={`${styles.describe} services`}>
            <p>【服務經歷】</p>
            <ul>
              <li>
                長期參與協會志工服務，支援音樂會、夏令營、園遊會等大型活動執行，協助現場支援與團隊協作。
              </li>
              <li>
                擔任團體活動帶領人，共設計並執行 4 次主題活動，包含戶外步道挑戰、桌遊團體及自我探索活動。
              </li>
              <li>
                獨立規劃活動流程與遊戲內容，並根據參與者狀況靈活調整，引導成員互動以促進團體凝聚力。
              </li>
              <li>
                培養活動設計、溝通協作與即時應變能力，延伸應用於前端開發中，以使用者需求為核心思考介面體驗與互動設計。
              </li>
            </ul>
          </section>
          
        </div>
      </div>
    </div>
  )
}