import styles from "./trendingcard.module.scss"
import { IconCategoryMovie } from "../../../assets/index"
import BookmarkButton from "../../Bookmark/BookmarkButton";

const TrendingCard = ({ image, title }) => {

    return (
        <div className={styles.itemContainer}>
            <BookmarkButton />
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