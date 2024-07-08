import styles from '../Experience.module.scss';

function SocialWorkerContent() {
  const contents = [
    {
      item: "個案工作",
      details: ["個案每月家訪，評估並追蹤個案情形，建立個案資料檔案"]
    },
    {
      item: "課服員專案",
      details: ["招募課服員", "舉辦團督暨在職訓練", "協助媒合課服員與個案家庭"]
    },
    {
      item: "行政企劃",
      details: ["撰寫每一年度計畫書和成果報告書", "撰寫協會相關網站的貼文和訊息"]
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

export default function SocialWorker() {
  return (
    <div className={styles.job}>
      <div className={styles.title}>
        <p>工作經歷 | 台北市智障者家長協會</p>
        <p>專案社工</p>
        <span>2018.10－2019.02</span>
      </div>
      <SocialWorkerContent/>
    </div>
  )
}