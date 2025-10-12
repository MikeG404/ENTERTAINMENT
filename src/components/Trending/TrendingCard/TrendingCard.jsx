import styles from "./trendingcard.module.scss"
import smallThumb from "../../../assets/thumbnails/beyond-earth/trending/small.jpg";

const TrendingCard = () => {

    return (
        <div>
            <img className={styles.item} src={smallThumb} alt="Beyond Earth" height="140" width="240" />
        </div>
    )
}

export default TrendingCard;