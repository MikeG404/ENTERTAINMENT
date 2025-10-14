import { Fragment } from "react"
import MediaGallery from "../components/MediaGallery/MediaGallery"
import { useMovieStore } from "../stores/useMovieStore.js"


const BookmarkPage = () => {
    const movies = useMovieStore((s) => s.movies)
    
    // Filtrer les films bookmarkés par catégorie
    // const bookmarkedMovies = movies.filter(m => m.isBookmarked && m.category === "Movie")
    // const bookmarkedSeries = movies.filter(m => m.isBookmarked && m.category === "TV Series")

    return (
        <Fragment>
            <MediaGallery movies={movies} sectionTitle="Bookmarked Movies"/>
            <MediaGallery movies={movies} sectionTitle="Bookmarked TV Series"/>
        </Fragment>
    )
}

export default BookmarkPage