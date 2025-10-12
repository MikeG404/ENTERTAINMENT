import styles from './carrousel.module.scss'
import smallThumb from "../../assets/thumbnails/beyond-earth/trending/small.jpg";

const Carrousel = () => {

    return (
        <div className={styles.carrousel}>
            <img className={styles.item} src={smallThumb} alt="Beyond Earth" height="140" width="240" />
            <img className={styles.item} src={smallThumb} alt="Beyond Earth" height="140" width="240" />
            <img className={styles.item} src={smallThumb} alt="Beyond Earth" height="140" width="240" />
        </div>
    )
}

export default Carrousel;