import { useState } from 'react';
import styles from './Header.module.scss';

import { Link } from 'react-scroll';

function Navbar({onItemClick}) {
  const navItems = ['About', 'Skill', 'Experience', 'Portfolio']

  const handleLinkClick = () => setTimeout(onItemClick, 100);

  return (
    <ul className={styles.navbar}>
      {navItems.map((item, index) =>
        <li key={index} className={styles.navItem}>
          <Link
            className='navItemLink'
            activeClass='active'
            onClick={handleLinkClick}
            smooth
            spy
            to={item}
            >
            {item}
          </Link>
        </li>
      )}
    </ul>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbarToggle = () => setIsOpen(!isOpen);
  const handleNavItemClick = () => setIsOpen(false);

  return (
    <header>
      <div className={styles.title}>
        <h2>
          <Link activeClass='active' smooth spy to='home'>
            My Profile
          </Link>
        </h2>
      </div>

      <input
        type="checkbox" 
        className={styles.navbarToggle} 
        id='navbarToggle'
        checked={isOpen}
        onChange={handleNavbarToggle}
        />

      <Navbar onItemClick={handleNavItemClick} />

      <label className={styles.navbarToggleLabel} htmlFor="navbarToggle">
        <span className={styles.hamburger}></span>
      </label>
    </header>
  )
}