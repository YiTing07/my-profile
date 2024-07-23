import styles from './Portfolio.module.scss';
import todoListImage from '../../assets/images/todoList.png'
import alphaShopImage from '../../assets/images/alphaShop.png';
import restaurantsImage from '../../assets/images/restaurants.png';
import revealCardsImage from '../../assets/images/revealCards.png';

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
  return (
    <section id='Portfolio' className={styles.portfolioPage}>
      <div className={styles.container}>
        <div className={styles.portfolio}>
          <h2>PORTFOLIO</h2>
          <div className={styles.projectGroup}>
            <Project/>
          </div>
        </div>
      </div>
    </section>
  )
}