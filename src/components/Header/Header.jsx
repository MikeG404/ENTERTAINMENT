import styles from './header.module.scss'
import Logo from '../../assets/logo.svg'
import Avatar from '../../assets/image-avatar.png'
import Nav from '../Nav/Nav';



const Header = () => {

    return (
        <header className={styles.headerContainer}>
            <div id='logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <Nav />
            <div className={styles.avatar}>
                <img src={Avatar} alt="Avatar" />
            </div>
        </header>
    )
}

export default Header;