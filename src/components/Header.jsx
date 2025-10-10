import Logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom';


const Header = () => {

    return (
        <header>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <nav>
				<NavLink to="/" end>Home</NavLink>
				<NavLink to="/movie" end>Movie</NavLink>
				<NavLink to="/serie" end>Serie</NavLink>
				<NavLink to="/bookmark" end>BookMark</NavLink>
			</nav>
            <div>
                <img src="" alt="" />
            </div>
        </header>
    )
}

export default Header;