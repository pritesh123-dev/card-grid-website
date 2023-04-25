import styles from './card.module.css'

const Card = (props) => {
    return(
        <div className={styles.item}>
          <div className={styles.imgSec}>
            <img
              className={styles.image}
              src={props.src}
              alt={props.alt}
            />
          </div>
          <div className={styles.textSec}>
            <div className={styles.title}>
                {props.cardTitle}
              
            </div>
            <div className={styles.author}>
              <span className={styles.edyoda}> {props.cardAuthor}</span>
              <span className={styles.date}> | {props.cardDate}</span>
            </div>
            <div className={styles.text}>
                {props.cardDetails}
            </div>
          </div>
        </div>
    )
}

export default Card;