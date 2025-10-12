import styles from "./trendingsection.module.scss";
import smallThumb from "../../assets/thumbnails/beyond-earth/trending/small.jpg";


const TrendingSection = () => {

    return (
        <section className={styles.trendingContainer}>
            <h2 className={styles.title}>Trending</h2>
            <div className={styles.carrousel}>
                <img className={styles.item} src={smallThumb} alt="Beyond Earth" height="140" width="240"/>
                <img className={styles.item} src={smallThumb} alt="Beyond Earth" height="140" width="240"/>
                <img className={styles.item} src={smallThumb} alt="Beyond Earth" height="140" width="240"/>
            </div>
        </section>
    )
}

export default TrendingSection;