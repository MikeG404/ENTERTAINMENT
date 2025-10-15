import { Fragment } from "react"
import MediaGallery from "../components/MediaGallery/MediaGallery"
import { useMovieStore } from "../stores/useMovieStore.js"


const BookmarkPage = () => {
    const getBookmarkedMedia = useMovieStore((s) => s.getBookmarkedMedia)
    const bookMarkedMedia = getBookmarkedMedia()

    const bookmarkedMovies = bookMarkedMedia.filter(m => m.category === "Movie")
    const bookmarkedSeries = bookMarkedMedia.filter(m => m.category === "TV Series")

    return (
        <Fragment>
            <MediaGallery movies={bookmarkedMovies} sectionTitle="Bookmarked Movies"/>
            <MediaGallery movies={bookmarkedSeries} sectionTitle="Bookmarked TV Series"/>
        </Fragment>
    )
}

export default BookmarkPage