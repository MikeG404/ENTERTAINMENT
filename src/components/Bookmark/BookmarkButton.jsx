import styles from './bookmark.module.scss'
import { IconBookmarkEmpty } from "../../assets/index";


const BookmarkButton = () => {

    return (
        <div className={styles.bookmarkContainer}>
            <button className={styles.circle}>
                <img src={IconBookmarkEmpty} alt="Bookmark Icon" />
            </button>
        </div>
    )
}

export default BookmarkButton;