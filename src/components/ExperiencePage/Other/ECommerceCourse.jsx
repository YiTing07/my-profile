import styles from './OtherExperience.module.scss'

export function ECommerceCourse() {
  return (
    <div className={`${styles.card} eCommerce`}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h4>進修課程 | 國立台灣科技大學推廣教育中心 電子商務行銷課程</h4>
          <p>2020.11-2021.02</p>
        </div>
        <div className={styles.content}>
          <section className={`${styles.describe} summary`}>
            <p>【課程說明】</p>
            <p>
              深入了解電子商務與網路行銷運作模式，透過講授與實作練習，掌握新媒體策略、商品行銷手法、物流基礎與數位內容製作。課程涵蓋行銷規劃、內容創作、影像製作與數據分析等主題。
            </p>
          </section>
          <section className={`${styles.describe} skills`}>
            <p>【習得技能】</p>
            <ul>
              <li>
                攝影與後製：操作數位單眼相機進行商品攝影，搭配 Photoshop 進行相片後製與基本編修
              </li>
              <li>
                數位行銷實作：操作 GA（Google Analytics）、Google Ads、Facebook 廣告與 LINE 官方帳號行銷模組，實際投放與成效分析
              </li>
              <li>
                網路社群文案寫作：撰寫針對不同受眾與平台的推廣文案，提升點擊率與互動率
              </li>
              <li>
                物流與電商運作模式：認識電商後端物流流程、倉儲管理與貨運整合
              </li>
            </ul>
          </section>
          
        </div>
      </div>
    </div>
  )
}

