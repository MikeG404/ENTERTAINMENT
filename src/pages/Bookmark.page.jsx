import { Fragment } from "react"
import MediaGallery from "../components/MediaGallery/MediaGallery"
import { useMovieStore } from "../stores/useMovieStore.js"


const BookmarkPage = () => {
    const media = useMovieStore((s) => s.media)
    
    // Filtrer les films bookmarkés par catégorie
    const bookmarkedMovies = media.filter(m => m.isBookmarked && m.category === "Movie")
    const bookmarkedSeries = media.filter(m => m.isBookmarked && m.category === "TV Series")

    return (
        <Fragment>
            <MediaGallery movies={bookmarkedMovies} sectionTitle="Bookmarked Movies"/>
            <MediaGallery movies={bookmarkedSeries} sectionTitle="Bookmarked TV Series"/>
        </Fragment>
    )
}

export default BookmarkPage