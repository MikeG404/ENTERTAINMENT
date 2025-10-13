import styles from "./trendingcard.module.scss"
import { IconCategoryMovie } from "../../../assets/index"
import BookmarkButton from "../../Bookmark/BookmarkButton";
import { useMovieStore } from "../../../stores/useMovieStore";

const TrendingCard = ({id, image, title }) => {
    const isBookmarked = useMovieStore((s) => s.isBookmarked(id))
    const toggleBookmark = useMovieStore((s) => s.toggleBookmark)

    return (
        <div className={styles.itemContainer}>
            <BookmarkButton isBookmarked={isBookmarked} onToggle={() => toggleBookmark(id)}/>
            <div className={styles.cardInfos}>
                <div className={styles.upperCardInfos}>
                    <p>2019</p>
                    <span>.</span>
                    <div className={styles.category}>
                        <img src={IconCategoryMovie} alt="" />
                        <p>Movie</p>
                    </div>
                    <span>.</span>
                    <p>PG</p>
                </div>
                <p className={styles.title}>{ title }</p>
            </div>
            <img className={styles.image} src={image} alt={title} loading="lazy"/>
        </div>
    )
}

export default TrendingCard;