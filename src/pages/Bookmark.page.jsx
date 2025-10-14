import { Fragment } from "react"
import MediaGallery from "../components/MediaGallery/MediaGalleryLayout"

const BookmarkPage = () => {

    return (
        <Fragment>
            <h2 className="text-preset-m1" style={{paddingBlock: "var(--spacing-200)", paddingInline: "var(--spacing-200)"}}>Bookmarked Movies</h2>
            <MediaGallery />
            <h2 className="text-preset-m1" style={{paddingBlock: "var(--spacing-200)", paddingInline: "var(--spacing-200)"}}>Bookmarked Series</h2>
        </Fragment>
    )
}

export default BookmarkPage