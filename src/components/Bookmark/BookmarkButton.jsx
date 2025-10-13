import styles from './bookmark.module.scss'
import { IconBookmarkEmpty, IconBookmarkFull } from "../../assets/index";


const BookmarkButton = ({ isBookmarked, onToggle}) => {
    return (
        <div className={styles.bookmarkContainer}>
            <button 
                className={styles.circle}
                onClick={onToggle}
                >
                <img src={isBookmarked ? IconBookmarkFull : IconBookmarkEmpty} alt="Bookmark Icon" />
            </button>
        </div>
    )
}

export default BookmarkButton;  