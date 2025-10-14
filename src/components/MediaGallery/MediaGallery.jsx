import styles from './mediagallery.module.scss'
import MediaCard from "./MediaCard/MediaCard";

const MediaGallery = ({movies, sectionTitle}) => {
    return (
        <section>
            <h2 className="text-preset-m1" style={{paddingBlock: "var(--spacing-200)", paddingInline: "var(--spacing-200)"}}>{sectionTitle}</h2>
            <div className={styles.mediaGalleryContainer}>
                {movies.map((movie) => {
                    return <MediaCard
                        key={movie.id}
                        id={movie.id} 
                        image={movie.image}
                        title={movie.title}
                        year={movie.year}
                        />
                })}
            </div>
        </section>
    )
}

export default MediaGallery;