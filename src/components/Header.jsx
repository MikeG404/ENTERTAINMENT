import Logo from '../assets/logo.svg'
import Avatar from '../assets/image-avatar.png'
import Nav from './Nav';



const Header = () => {

    return (
        <header>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <Nav />
            <div>
                <img src={Avatar} alt="Avatar" />
            </div>
        </header>
    )
}

export default Header;