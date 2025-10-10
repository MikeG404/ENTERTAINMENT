import Logo from '../assets/logo.svg'
import Nav from './Nav';



const Header = () => {

    return (
        <header>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <Nav />
            <div>
                <img src="" alt="" />
            </div>
        </header>
    )
}

export default Header;