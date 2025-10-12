import styles from "./trendingcard.module.scss"
import smallThumb from "../../../assets/thumbnails/beyond-earth/trending/small.jpg";

const TrendingCard = () => {

    return (
        <div className={styles.itemContainer}>
            <img className={styles.image} src={smallThumb} alt="Beyond Earth" />
        </div>
    )
}

export default TrendingCard;