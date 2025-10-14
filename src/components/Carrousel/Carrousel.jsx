import styles from './carrousel.module.scss'
import TrendingCard from '../Trending/TrendingCard/TrendingCard';
import { useMovieStore } from '../../stores/useMovieStore';

const Carrousel = () => {
    const movies = useMovieStore((s) => s.movies)

    return (
        <div className={styles.carrousel}>
            { movies.map((elem) => {
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