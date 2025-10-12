import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";

const MainLayout = () => {

    return (
        <>
            <Header />
            <SearchBar />     
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout;