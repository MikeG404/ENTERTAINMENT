import styles from "./trendingsection.module.scss";
import Carrousel from "../Carrousel/Carrousel";


const TrendingSection = () => {

    return (
        <section className={styles.trendingContainer}>
            <h2 className={styles.title}>Trending</h2>
            <Carrousel />
        </section>
    )
}

export default TrendingSection;