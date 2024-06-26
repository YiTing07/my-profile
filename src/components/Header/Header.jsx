import styles from './Header.module.scss';

function Navbar() {
  const navItems = ['About', 'Experience', 'Skill', 'Portfolio']

  return (
    <ul className={styles.navbar}>
      {navItems.map((item, index) =>
        <li key={index} className={styles.navItem}>
          <a href={item} rel='navItem'>{item}</a>
        </li>
      )}
    </ul>
  )
}

export default function Header() {
  return (
    <header>
      <div className={styles.title}>
        <h2>My Profile</h2>
      </div>

      <input type="checkbox" className={styles.navbarToggle} id='navbarToggle' />

      <Navbar/>

      <label className={styles.navbarToggleLabel} htmlFor="navbarToggle">
        <span className={styles.hamburger}></span>
      </label>
    </header>
  )
}