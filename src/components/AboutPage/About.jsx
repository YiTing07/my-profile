import styles from './About.module.scss';
import myImage from '../../assets/images/my-image.jpg';

export default function About() {
  return (
    <section id='About'className={styles.aboutPage}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h2>ABOUT</h2>
          <div className={styles.description}>
            <p>
              我是洪怡婷，喜歡攝影和旅行，有輕度的聽覺障礙，不過只要音量大聲  、口齒清晰、語速不快，便能與人輕鬆對談。若有聽不清楚的情況，也會在當下向對方釐清內容和語意。
            </p>
            <p>
              目前於社團法人台灣生醫品質保證協會擔任專案助理，由於在過去職訓課程與現職的過程中，初探到前端網頁設計，引起我的興趣，並且為穩定工作、培養自己的專業技術，進而報名 ALPHACamp 的全端網頁開發課程，正式踏上了成為前端工程師的道路。
            </p>
            <p>
              雖非本科轉職的前端工程師，未來一定會面對更多的挑戰，但只要透過精進的練習和經驗的累積，就能使自己成長。目前著重持續學習 React 框架、增強 debug 技巧，保持學習的動力，吸收新知並閱讀技術文章，期望自己能成為技術熟練的前端工程師，並幫助公司解決問題。
            </p>
            <span>
              #HTML #CSS #JavaScript(ES6) #React
            </span>
          </div>
        </div>
        <div className={styles.myImage}>
          <img src={myImage} alt="myImage" />
        </div>
      </div>
    </section>
  )
}

