import styles from './carrousel.module.scss'
import TrendingCard from '../Trending/TrendingCard/TrendingCard';
import { useMovieStore } from '../../stores/useMovieStore';

const Carrousel = () => {
    const media = useMovieStore((s) => s.media)

    const trendingMovie = media.filter((elem) => elem.category === "Movie")

    return (
        <div className={styles.carrousel}>
            { trendingMovie.map((elem) => {
                return <TrendingCard 
                    key={elem.id} 
                    id={elem.id} 
                    image={elem.image} 
                    title={elem.title}
                    year={elem.year} />
            })}
        </div>
    )
}

export default Carrousel;