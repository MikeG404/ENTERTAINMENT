import styles from './carrousel.module.scss'
import TrendingCard from '../Trending/TrendingCard/TrendingCard';

const Carrousel = () => {

    return (
        <div className={styles.carrousel}>
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
        </div>
    )
}

export default Carrousel;