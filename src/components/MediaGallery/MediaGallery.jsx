import styles from './mediagallery.module.scss'
import MediaCard from "./MediaCard/MediaCard";

const MediaGallery = ({movies}) => {
    return (
        <section className={styles.mediaGalleryContainer}>
            {movies.map((movie) => {
                return <MediaCard
                    key={movie.id}
                    id={movie.id} 
                    image={movie.image}
                    title={movie.title}
                    year={movie.year}
                    />
            })}
        </section>
    )
}

export default MediaGallery;