import styles from './Header.module.scss';

import { Link } from 'react-scroll';

function Navbar() {
  const navItems = ['About', 'Experience', 'Skill', 'Portfolio']

  return (
    <ul className={styles.navbar}>
      {navItems.map((item, index) =>
        <li key={index} className={styles.navItem}>
          <Link className='navItemLink' activeClass='active' smooth spy to={item}>
            {item}
          </Link>
        </li>
      )}
    </ul>
  )
}

export default function Header() {
  return (
    <header>
      <div className={styles.title}>
        <h2>
          <Link activeClass='active' smooth spy to='home'>
            My Profile
          </Link>
        </h2>
      </div>

      <input type="checkbox" className={styles.navbarToggle} id='navbarToggle' />

      <Navbar/>

      <label className={styles.navbarToggleLabel} htmlFor="navbarToggle">
        <span className={styles.hamburger}></span>
      </label>
    </header>
  )
}