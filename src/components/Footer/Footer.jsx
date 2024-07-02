import facebook from '../../assets/icons/facebook.png';
import linkedin from '../../assets/icons/linkedin.png';
import email from '../../assets/icons/email.png';
import github from '../../assets/icons/github-sign.png';

import styles from './Footer.module.scss';

function Contact() {
  const links = [
    {
      name: "facebook",
      url: "https://www.facebook.com/hevecandy/",
      icon: facebook
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/yi-ting-hung-a50456201/",
      icon: linkedin
    },
    {
      name: "email",
      url: "mailto:hevecamdy@gmail.com",
      icon: email
    },
    {
      name: "github",
      url: "https://github.com/YiTing07",
      icon: github
    }
  ]

  return (
    <div className={styles.contact}>
      {links.map((item, index) =>
        <a key={index} href={item.url} className={styles.icon} target='_blank' rel="noreferrer">
          <img src={item.icon} alt={item.name} />
        </a>
      )}

    </div>
  )
}

export default function Footer() {
  return (
    <footer>
      <div className={styles.title}>
        <h3>My Profile</h3>
      </div>
      <Contact />
    </footer>
  )
}