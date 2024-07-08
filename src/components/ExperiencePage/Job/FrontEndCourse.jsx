import styles from '../Experience.module.scss';

function FrontEndCourseContent() {
  const contents = [
    {
      item: "課程說明",
      details: [
        "零基礎開始學習網頁開發的一系列課程",
        "初期：HTML、CSS 打造靜態網頁，使用 JavaScript 建立前端互動體驗實作",
        "中期：後端的資料處裡與伺服器開發有初步的理解與操作，最後自行決定自己的走向：前端或後端",
        "後期：學習 React 框架的開發和訓練，並攻略 CRUD功能、API 串接、身分驗證與付費流程"
      ]
    },
    {
      item: "專業技術",
      details: ["HTML、CSS、Bootstrap", "JavaScript(ES6)", "API 串接、AJAX", "Node JS、Express", "HTTP & RESTful APIs", "Git", "React.js"]
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

export default function FrontEndCourse() {
  return (
    <div className={styles.job}>
      <div className={styles.title}>
        <p>進修學習 | ALPHACamp</p>
        <p>全端網頁工程師</p>
        <span>2023.05－2023.12</span>
      </div>
      <FrontEndCourseContent />
    </div>
  )
}