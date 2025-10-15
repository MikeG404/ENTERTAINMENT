import styles from "./mediacard.module.scss"
import { IconCategoryMovie, IconCategoryTv } from "../../../assets/index"
import BookmarkButton from "../../Bookmark/BookmarkButton";
import { useMovieStore } from "../../../stores/useMovieStore";

const MediaCard = ({id, image, title, year, category }) => {
    const isBookmarked = useMovieStore((s) => s.isBookmarked(id))
    const toggleBookmark = useMovieStore((s) => s.toggleBookmark)

    return (
        <div className={styles.itemContainer}>
            <BookmarkButton isBookmarked={isBookmarked} onToggle={() => toggleBookmark(id)}/>
            <img className={styles.image} src={image} alt={title} loading="lazy"/>
            <div className={styles.cardInfos}>
                <div className={styles.upperCardInfos}>
                    <p>{ year }</p>
                    <span>.</span>
                    <div className={styles.category}>
                        <img src={category === "Movie" ? IconCategoryMovie : IconCategoryTv} alt="" />
                        <p>{ category }</p>
                    </div>
                    <span>.</span>
                    <p>PG</p>
                </div>
                <p className={styles.title}>{ title }</p>
            </div>
        </div>
    )
}

export default MediaCard;