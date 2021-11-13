import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

import Logo from '../../assets/images/Logo.png'
import Menu from '../../assets/images/menu-icon.png'

function Header({user,updateUser}) {
    
    const signOut = () => {
        axios.get('http://localhost:5500/auth/signout',{withCredentials:true}).then((res) => {
            console.log(res.data)
            updateUser()
        }).catch((e) => {
            if (e.response && e.response.data) {
                console.log(e.response)
            }
        })
    }

    return (
        <div className="nav">
            <div className="nav-start">
                <Link href='/'>
                    <div className="logo">
                        <Image src={Logo} alt="logo" layout="fill" />
                    </div>
                </Link>
                <div className="nav-links">
                    <ul>
                        <Link href="/wish">
                            <li>Wish</li>
                        </Link>

                        <Link href="/celebrate">
                            <li>Celebrate</li>
                        </Link>
                        <Link href="/gift">
                            <li>Gift</li>
                        </Link>
                        <Link href="/write">
                            <li>Write</li>
                        </Link>
                        <Link href="/pricing">
                            <li>Pricing</li>
                        </Link>
                    </ul>
                </div>
            </div>
            { !user && 
                <div className="nav-buttons">
                    <Link href='/signin'>
                        <button className="secondry btn">Sign In</button>
                    </Link>
                    <Link href='/signup'>
                        <button className="btn">Sign Up</button>
                    </Link>
                </div> 
            }

            { user && 
                <button className="btn"  onClick={signOut} >SignOut</button>
            }
            <div className="menu">
                <Image src={Menu} alt="menu" />
            </div>
    </div>
    )
}

export default Header
