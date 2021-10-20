import Image from 'next/image'

import Logo from '../../assets/Logo.png'
import Menu from '../../assets/menu-icon.png'

function Header() {
    return (
        <div className="nav">
            <div className="nav-start">
                <div className="logo">
                <Image src={Logo} alt="logo" layout="fill" 
                />
                </div>
                <div className="nav-links">
                    <ul>
                        <li>Wish</li>
                        <li>Celebrate</li>
                        <li>Surprise</li>
                        <li>Write</li>
                        <li>Pricing</li>
                    </ul>
                </div>
            </div>
            <div className="nav-buttons">
                <button className="secondry btn">Sign In</button>
                <button className="btn">Sign Up</button>
            </div>
            <div className="menu">
                <Image src={Menu} alt="menu" />
            </div>
    </div>
    )
}

export default Header
