import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router"
import { useState } from 'react'
import nameInitials from 'name-initials'
import LogoutModal from '../modals/logout'
import Menu from '../phone-menu/Menu'

import Logo from '../../assets/images/Logo.png'
import MenuImg from '../../assets/images/menu-icon.png'

function Header({user,updateUser}) {

    const router = useRouter()

    const [showTippy, setShowTippy] = useState(false)
    const [modelState, setModelState] = useState(false)
    const [menuState, setMenuState] = useState(false)
    let initials = ''

    if(user && user.username){
        initials = nameInitials(user.username);
    }

    const logoutButton = () => {
        setModelState(true)
        setShowTippy(false)
    }

    const goToReferral = () => {
        router.push('/referral')
        setShowTippy(false)
    }

    const goToMyIdeas = () => {
        router.push('/myideas')
        setShowTippy(false)
    }

    const goToSaved = () => {
        router.push('/saved')
        setShowTippy(false)
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

                        <Link href="/celebration">
                            <li>Celebration</li>
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
                        {
                            user && user.isApprover &&
                            <Link href="/details/approve">
                                <li>Approve</li>
                            </Link>
                        }
                    </ul>
                </div>
            </div>

            {/* Logged out state */}
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

            {/* Logged in state */}
            { user &&
                <div className="nav-loggedin">

                    { user.unverified &&
                        <div className="nav-buttons">
                            <div></div>
                            <Link href='/verify-account'>
                                <button className="wide-btn">Verify Account</button>
                            </Link>
                        </div> 
                    } 
                    <div className="logged-in">
                        <button className="user-avatar" onClick={() => setShowTippy(!showTippy)}>{initials}</button>
                        {
                            showTippy &&
                            <div className="tippy">
                                <ul>
                                <li onClick={goToSaved}>Saved Ideas</li>
                                <li onClick={goToMyIdeas}>My Ideas</li>
                                <li onClick={goToReferral}>Referral</li>
                                <li onClick={logoutButton}>Logout</li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            }
            <div className="menu">
                <Image onClick={() => setMenuState(true)} src={MenuImg} alt="menu" />
            </div>

            {/* Mobile Menu */}
            {
                menuState && <Menu setMenuState={setMenuState} user={user} setModelState={setModelState} />
            }

            {/* Logout Modal */}
            <LogoutModal modelState={modelState} setModelState={setModelState} updateUser={updateUser} />
    </div>
    )
}

export default Header
