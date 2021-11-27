import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router"
import nameInitials from 'name-initials'

import Logo from '../../assets/images/Logo.png'
import Menu from '../../assets/images/menu-icon.png'
import { useState } from 'react'
import LogoutModal from '../modals/logout'

function Header({user,updateUser}) {

    const router = useRouter()

    const [showTippy, setShowTippy] = useState(false)
    const [modelState, setModelState] = useState(false)
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
                        <Link href="/details/approve">
                            <li>Approve</li>
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
            }
            <div className="menu">
                <Image src={Menu} alt="menu" />
            </div>

            <LogoutModal modelState={modelState} setModelState={setModelState} updateUser={updateUser} />
    </div>
    )
}

export default Header
