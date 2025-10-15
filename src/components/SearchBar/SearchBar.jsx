import styles from "./searchbar.module.scss"
import { IconSearch } from "../../assets";
import { useMovieStore } from "../../stores/useMovieStore";

const SearchBar = () => {
    const searchQuery = useMovieStore((s) => s.searchQuery)
    const setSearchQuery = useMovieStore((s) => s.setSearchQuery)

    return (
        <div className={styles.searchBarContainer}>
            <img src={IconSearch} alt="Search Icon" height="24px" width="24px"/>
            <input 
                type="text" placeholder="Search for movies or TV series" 
                className={styles.input}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
    )
}

export default SearchBar;