import styles from '../Experience.module.scss';

function AssistantContent() {
  const contents = [
    {
      item: "美編文宣",
      details: ["使用 Canva 製作活動電子文宣", "使用 Photoshop 製作紙本海報"]
    },
    {
      item: "官網和社群平台經營與管理",
      details: ["編輯或更新網站、社群平台內容與排版", "發布最新訊息，如活動資訊、法規異動等", "定期看有無使用者投遞問題或建議"]
    },
    {
      item: "會員經營",
      details: ["向會員寄發活動資訊、節日賀卡"]
    },
    {
      item: "協助活動辦理",
      details: ["向會員寄發活動資訊、節日賀卡活動前：文宣製作與宣傳、報名相關事務、收據開立與寄發", "活動後：整理滿意度調查、活動影片、相片和文件之歸檔、課程證書寄發"]
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

export default function Assistant() {
  return (
    <div className={styles.job}>
      <div className={styles.title}>
        <p>工作經歷 | 社團法人台灣生醫品質保證協會</p>
        <p>專案助理</p>
        <span>2021.04－迄今</span>
      </div>
      <AssistantContent/>
    </div>
  )
}