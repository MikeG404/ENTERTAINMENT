import styles from './mediagallery.module.scss'
import MediaCard from "./MediaCard/MediaCard";

const MediaGallery = ({movies, sectionTitle}) => {
    return (
        <section className={styles.mediaGallerySection}>
            <h2 className={styles.heading}>{sectionTitle}</h2>
            <div className={styles.mediaGalleryContainer}>
                {movies.map((movie) => {
                    return <MediaCard
                        key={movie.id}
                        id={movie.id} 
                        image={movie.image}
                        title={movie.title}
                        year={movie.year}
                        category={movie.category}
                        />
                })}
            </div>
        </section>
    )
}

export default MediaGallery;
