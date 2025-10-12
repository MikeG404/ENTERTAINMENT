import styles from "./trendingcard.module.scss"

const TrendingCard = ({ image, title }) => {

    return (
        <div className={styles.itemContainer}>
            <img className={styles.image} src={image} alt={title} loading="lazy"/>
        </div>
    )
}

export default TrendingCard;