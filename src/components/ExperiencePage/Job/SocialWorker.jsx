import styles from '../Experience.module.scss';

function SocialWorkerContent() {
  const contents = [
    {
      item: "個案追蹤與資料管理",
      details: "每月定期家訪，進行個案評估與記錄，建立個案資料庫，並持續追蹤其變化與需求。"
    },
    {
      item: "專案規劃與執行",
      details: "招募並培訓課後服務人員（課服員），舉辦團督與在職訓練，協助媒合課服員與個案家庭，有效協調多方需求與資源。"
    },
    {
      item: "行政與報告撰寫",
      details: "撰寫年度計畫書與成果報告，並負責協會網站資訊公告與貼文更新，具備基礎文案能力與網站內容管理經驗。"
    },
  ]

  return (
    <div className={styles.description}>
      {contents.map((content, index) =>
        <div key={index} className={styles.item}>
          <p>{content.item}</p>
          <ul>
            <li>{content.details}</li>
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
        <h4>台北市智障者家長協會 | 專案社工</h4>
        <p>2018.10－2019.02</p>
      </div>
      <SocialWorkerContent />
    </div>
  )
}