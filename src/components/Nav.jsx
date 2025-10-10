import { NavLink } from 'react-router-dom';
import { IconNavMovies, IconNavHome, IconNavBookmark, IconNavTvSeries } from '../assets/index';

const navigation = [
    {
        src: IconNavHome,
        alt: "Home Page",
        route: "/"
    },
    {
        src: IconNavMovies,
        alt: "Movies Page",
        route: "/movies"
    },
    {
        src: IconNavTvSeries,
        alt: "Series Page",
        route: "/series"
    },
    {
        src: IconNavBookmark,
        alt: "Bookmarks Page",
        route: "/bookmarks"
    }

]

const Nav = () => {


    return (
        <nav>
            {navigation.map((elem, idx) => (
                <NavLink key={idx} to={elem.route} end>
                    <img src={elem.src} alt={elem.alt} />
                </NavLink>
            ))}
        </nav>
    )
}

export default Nav;