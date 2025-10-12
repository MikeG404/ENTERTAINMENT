import styles from "./searchbar.module.scss"
import { IconSearch } from "../../assets";

const SearchBar = () => {

    return (
        <div className={styles.searchBarContainer}>
            <img src={IconSearch} alt="Search Icon" height="24px" width="24px"/>
            <input type="text" placeholder="Search for movies or TV series" className={styles.input} />
        </div>
    )
}

export default SearchBar;