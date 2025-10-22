import styles from '../Experience.module.scss';

function AssistantContent() {
  const contents = [
    {
      item: "網站後臺管理",
      details: "使用第三方 CMS 管理網站內容，包括首頁公告與活動資訊，確保內容即時且版面清晰，並協助基礎視覺排版與結構調整。"
    },
    {
      item: "視覺設計與行銷素材製作",
      details: "使用 Canva、Photoshop 製作活動用 Banner、社群貼文與紙本海報，配合活動主題設計明瞭視覺，提升資訊傳遞效率"
    },
    {
      item: "社群與會員經營",
      details: "管理 Facebook和官網平台，發布活動訊息；定期寄送電子報與節日賀卡，維護會員關係與活躍度"
    },
    {
      item: "會務執行與活動支援",
      details: "規劃與執行年度會員大會、理監事會議、研討會與專家會議等實體/線上活動，負責會錢準備、現場執行會後整理，活動人數數十人不等。"
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

export default function Assistant() {
  return (
    <div className={styles.job}>
      <div className={styles.title}>
        <h4>社團法人台灣生醫品質保證協會 | 專案助理</h4>
        <p>2021.04－迄今</p>
      </div>
      <AssistantContent />
    </div>
  )
}