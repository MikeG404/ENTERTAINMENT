import styles from "./mainlayout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";

const MainLayout = () => {

    return (
        <div className={styles.mainLayout}>
            <Header />
            <div>
                <SearchBar />     
                <main>
                    <Outlet />
                </main>

            </div>
        </div>
    )
}

export default MainLayout;