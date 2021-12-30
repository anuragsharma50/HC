import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router"
import { useState } from 'react'
import nameInitials from 'name-initials'
import { motion } from "framer-motion"
import { navButtons,navLinks } from '../animations/nav'
import LogoutModal from '../modals/logout'
import Menu from '../phone-menu/Menu'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Logo from '../../assets/images/Logo.png'
import MenuImg from '../../assets/images/menu-icon.png'

function Header({user,updateUser,loading}) {

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

    const goTo = (url) => {
        router.push(`/${url}`)
        setShowTippy(false)
    }

    return (
        <div className="nav">
            <div className="nav-start">
                <Link passHref href='/'>
                    <div className="logo">
                        <Image src={Logo} alt="logo" layout="fill" />
                    </div>
                </Link>
                <motion.div 
                    className="nav-links"
                    variants={navLinks}
                    initial="hidden"
                    animate="visible"    
                >
                    <ul>
                        <Link passHref href="/wish">
                            <li>Wish</li>
                        </Link>

                        <Link passHref href="/celebration">
                            <li>Celebration</li>
                        </Link>
                        <Link passHref href="/gift">
                            <li>Gift</li>
                        </Link>
                        <Link passHref href="/write">
                            <li>Write</li>
                        </Link>
                        {
                            user && user.isApprover &&
                            <Link passHref href="/details/approve">
                                <li>Approve</li>
                            </Link>
                        }
                    </ul>
                </motion.div>
            </div>

            {/* check if loading is true */}
            {
                loading ?
                <div className="nav-buttons">
                    <div className="skeleton-container">
                        <Skeleton height={30} />
                    </div>
                </div>

                :

                !user ?
                <motion.div 
                    className="nav-buttons"
                    variants={navButtons}
                    initial="hidden"
                    animate="visible"
                >
                    <Link passHref href='/signin'>
                        <button className="secondry btn">Sign In</button>
                    </Link>
                    <Link passHref href='/signup'>
                        <button className="btn">Sign Up</button>
                    </Link>
                </motion.div> 

                :

                user &&
                <motion.div 
                    className="nav-loggedin"
                    variants={navButtons}
                    initial="hidden"
                    animate="visible"
                >

                    { user.unverified &&
                        <div className="nav-buttons">
                            <div></div>
                            <Link passHref href='/verify-account'>
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
                                <li onClick={() => goTo('saved')}>Saved Ideas</li>
                                <li onClick={() => goTo('myideas')}>My Ideas</li>
                                <li onClick={logoutButton}>Logout</li>
                                </ul>
                            </div>
                        }
                    </div>
                </motion.div>
            }
            
            <div className="menu">
                <Image onClick={() => setMenuState(true)} src={MenuImg} alt="menu" />
            </div>

            {/* Mobile Menu */}
            {
                menuState && <Menu setMenuState={setMenuState} user={user} setModelState={setModelState} initials={initials} />
            }

            {/* Logout Modal */}
            <LogoutModal modelState={modelState} setModelState={setModelState} updateUser={updateUser} />
    </div>
    )
}

export default Header
