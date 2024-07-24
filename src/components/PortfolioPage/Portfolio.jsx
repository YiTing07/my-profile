import styles from './Portfolio.module.scss';
import todoListImage from '../../assets/images/todoList.png'
import alphaShopImage from '../../assets/images/alphaShop.png';
import restaurantsImage from '../../assets/images/restaurants.png';
import revealCardsImage from '../../assets/images/revealCards.png';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projectContent = [
  {
    name: "Todo List",
    link: "https://yiting07.github.io/todolist-react-starter/",
    image: todoListImage
  },
  {
    name: "Alpha Shop",
    link: "https://yiting07.github.io/alpha-shop/",
    image: alphaShopImage
  },
  {
    name: "Restaurants",
    link: "https://yiting07.github.io/Restaurants/",
    image: restaurantsImage
  },
  {
    name: "Reveal Cards",
    link: "https://yiting07.github.io/revealcards/",
    image: revealCardsImage
  }
]

function Project() {
  return (
    <>
      {projectContent.map((item, index) =>
        <div key={index} className={`${styles.project}`}>
          <a href={item.link} target='_blank' rel='noreferrer'>
            <div className={styles.image}>
              <img src={item.image} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </a>
        </div>
      )}
    </>
  )
}

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  return (
    <section id='Portfolio' className={styles.portfolioPage}>
      <div className={styles.container}>
        <motion.div
          className={styles.portfolio}
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : -20
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.17, 0.55, 0.55, 1]
          }}
        >
          <h2>PORTFOLIO</h2>
          <div className={styles.projectGroup}>
            <Project />
          </div>
        </motion.div>
      </div>
    </section>
  )
}