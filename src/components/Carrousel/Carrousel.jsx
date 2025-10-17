import styles from './carrousel.module.scss'
import TrendingCard from '../Trending/TrendingCard/TrendingCard';
import { useMovieStore } from '../../stores/useMovieStore';
import { useEffect } from 'react';

const Carrousel = () => {
    const trending = useMovieStore((s) => s.trending)
    const fetchTrending = useMovieStore((s) => s.fetchTrending)

    useEffect(() => {
        fetchTrending();
    },[fetchTrending])

    return (
        <div className={styles.carrousel}>
            { trending.map((elem) => {
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