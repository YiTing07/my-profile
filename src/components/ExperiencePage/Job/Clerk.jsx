import styles from '../Experience.module.scss';

function ClerkContent() {
  const contents = [
    {
      item: "顧客服務與前台營運",
      details: "處理收銀結帳、會員查詢、帳務核對等日常櫃台作業，具備良好顧客應對與細節處理能力。"
    },
    {
      item: "商品管理與陳列優化",
      details: "負責書籍上架、品類陳列調整，依據銷售數據優化書區展示，提升銷售轉換率並強化使用者導覽體驗。"
    },
    {
      item: "庫存與銷售分析",
      details: "管理書籍庫存，協助進貨與調撥，追蹤暢銷書與低銷書狀況，配合行銷活動進行補貨及資源配置。"
    },
    {
      item: "企劃支援與跨店協助",
      details: "協助執行店內主題行銷活動，自主策展並完成活動檢討；亦支援其他分店陳列與人力支援事務。"
    },
    {
      item: "活動成果亮點",
      details: "【2020.03 自策展】主題書展共售出 399 本，營收達 11 萬元，主打 J 類書籍類別，帶動區域銷售成長。"
    }
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

export default function Clerk() {
  return (
    <div className={styles.job}>
      <div className={styles.title}>
        <h4>誠品股份有限公司 | 圖書管理員</h4>
        <p>2019.03－2020.05</p>
      </div>
      <ClerkContent />
    </div>
  )
}