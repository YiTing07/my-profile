import styles from '../Experience.module.scss';

function ECommerceCourseContent() {
  const contents = [
    {
      item: "課程說明",
      details: [" 了解電子商務的市場，透過老師的講解與實際操作，習得新媒體行銷、口碑及輿情分析、電商與商品行銷、相機操作、物流運作模式等，共470小時"]
    },
    {
      item: "工作技能",
      details: ["攝影：相機操作、商品攝影、相片基本編修", "商品照後製：Photoshop", "社群商務行銷：GA、Google Ads、臉書廣告、Line操作", "網路社群文案寫作"]
    },
  ]

  return (
    <div className={styles.description}>
      {contents.map((content, index) =>
        <div key={index} className={styles.item}>
          <p>{content.item}</p>
          <ul>
            {content.details.map((detail, index) =>
              <li key={index}>{detail}</li>
            )}  
          </ul>     
      </div>
      )}
    </div>
  )
}

export default function ECommerceCourse() {
  return (
    <div className={styles.job}>
      <div className={styles.title}>
        <p>職業訓練 | 國立台灣科技大學</p>
        <p>電子商務行銷課程</p>
        <span>2020.11－2021.02</span>
      </div>
      <ECommerceCourseContent/>
    </div>
  )
}