import Image from 'next/image'
import Link from 'next/link'
import navStyles from '../styles/NavStyles/Nav.module.css'

const Nav = () => {
    return ( 
        <div className={navStyles.container}>
            <nav className={navStyles.nav}>
                <div>
                    <Image src='/nextlogo.png'
                    width={90}
                    height={50}
                    alt='logo'
                    />
                </div>
                <ul className={navStyles.list}>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Nav;