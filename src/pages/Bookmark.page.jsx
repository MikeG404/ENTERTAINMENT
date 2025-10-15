import { Fragment, useMemo } from "react"
import MediaGallery from "../components/MediaGallery/MediaGallery"
import { useMovieStore } from "../stores/useMovieStore.js"

const BookmarkPage = () => {
  const media = useMovieStore(s => s.media)
  const searchQuery = useMovieStore(s => s.searchQuery)
  const bookmarks = useMovieStore(s => s.bookmarks)

  const bookMarkedMedia = useMemo(
    () => media.filter(item => bookmarks.includes(item.id)),
    [media, bookmarks]
  )

  const bookmarkedMovies = bookMarkedMedia.filter(m => m.category === "Movie")
  const bookmarkedSeries = bookMarkedMedia.filter(m => m.category === "TV Series")

  const filteredMediaMovies = useMemo(() => {
    if (!searchQuery) return bookmarkedMovies;
    
    return bookmarkedMovies.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
}, [bookmarkedMovies  , searchQuery]);

  const filteredMediaSeries = useMemo(() => {
    if (!searchQuery) return bookmarkedSeries;
    
    return bookmarkedSeries.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [bookmarkedSeries, searchQuery]);

  return (
    <Fragment>
      <MediaGallery movies={filteredMediaMovies} sectionTitle="Bookmarked Movies" />
      <MediaGallery movies={filteredMediaSeries} sectionTitle="Bookmarked TV Series" />
    </Fragment>
  )
}

export default BookmarkPage
