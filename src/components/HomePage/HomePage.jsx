import styles from './HomePage.module.scss'

export default function HomePage() {
  return (
    <section id='home' className={styles.homePage}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Hello! I'm</h1>
          <h1>Eve Hung.</h1>
        </div>
      </div>
    </section>
  )
}