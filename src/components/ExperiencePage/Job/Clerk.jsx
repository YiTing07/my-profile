import styles from '../Experience.module.scss';

function ClerkContent() {
  const contents = [
    {
      item: "櫃台服務",
      details: ["收銀結帳、基本帳務處理", "商品查詢", "會員服務"]
    },
    {
      item: "圖書管理",
      details: ["招募課服員責任書區商品上架、組合調整與陳列", "掌握商品銷售狀況、商品庫存管理", "協助行銷企劃活動執行", "支援其他分店"]
    },
    {
      item: "活動成果",
      details: ["【2020.03本店自策展】成果：銷量399本、營收11萬元，以J類商品為居多"]
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

export default function Clerk() {
  return (
    <div className={styles.job}>
      <div className={styles.title}>
        <p>工作經歷 | 誠品股份有限公司</p>
        <p>圖書管理員</p>
        <span>2019.03－2020.05</span>
      </div>
      <ClerkContent/>
    </div>
  )
}