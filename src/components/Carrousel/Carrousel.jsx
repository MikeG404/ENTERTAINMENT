import styles from './carrousel.module.scss'
import TrendingCard from '../Trending/TrendingCard/TrendingCard';
import { useMovieStore } from '../../stores/useMovieStore';

const Carrousel = () => {
    const movies = useMovieStore((s) => s.movies)

    return (
        <div className={styles.carrousel}>
            { movies.map(({id, ...movie}) => {
                return <TrendingCard key={id} {...movie}/>
            })}
        </div>
    )
}

export default Carrousel;