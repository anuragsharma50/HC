import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import menuItems from '../animations/raising'

import Logo from '../../assets/images/Logo.png'
import Cancel from '../../assets/images/cancel.png'
import WishIcon from '../../assets/images/Wish-icon.png'
import Confetti from '../../assets/images/confetti.png'
import SurpriseBox from '../../assets/images/surprise-box.png'
import Writing from '../../assets/images/writing.png'
import Money from '../../assets/images/money.png'

function Menu({user,setMenuState,setModelState}) {

    const router = useRouter()
    const [showTippy, setShowTippy] = useState(false)

    useEffect(() => {
        if(!user){
            setShowTippy(false)
        }
        
    }, [user])

    const navigate = (route) => {
        router.push(`/${route}`)
        setMenuState(false)
    }

    return (
        <div className="menu-container" >
            <div className="top">
                <div onClick={() => navigate('')} className="logo">
                    <Image src={Logo} alt="logo" />
                </div>
                <div className="cancel" onClick={() => setMenuState(false)}>
                    <Image src={Cancel} alt="cancel" />
                </div>
            </div>

            <motion.div 
                className="mob-nav"
                variants={menuItems}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {
                    !showTippy &&
                    <>
                        <div onClick={() => navigate('wish')} className="item"><Image src={WishIcon} alt="wish" /><span>Wish</span></div>
                        <div onClick={() => navigate('celebration')} className="item"><Image src={Confetti} alt="confetti" /><span>Celebrate</span></div>
                        <div onClick={() => navigate('gift')} className="item"><Image src={SurpriseBox} alt="surprise-box" /><span>Gift</span></div>
                        <div onClick={() => navigate('write')} className="item"><Image src={Writing} alt="writing" /><span>Write</span></div>
                        <div onClick={() => navigate('pricing')} className="item"><Image src={Money} alt="money" /><span>Pricing</span></div>
                    </>
                }
                {
                    showTippy && user && 
                    <>
                        {/* <div onClick={() => navigate('wish')} className="item"><span>Profile</span></div> */}
                        <div onClick={() => navigate('saved')} className="item"><span>Saved Ideas</span></div>
                        <div onClick={() => navigate('myideas')} className="item"><span>My Ideas</span></div>
                        <div onClick={() => navigate('referral')} className="item"><span>Referral</span></div>
                        <div onClick={() => setModelState(true)} className="item"><span>Logout</span></div>
                    </>
                }
            </motion.div>

            <hr/>

            <motion.div 
                className="menu-buttons"
                variants={menuItems}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {
                    !user ?
                    <>
                        <button onClick={() => navigate('signin')} className="sec-btn btn">Sign In</button>
                        <button onClick={() => navigate('signup')} className="btn">Sign Up</button>
                    </>
                    :
                    <div className="menu-user" onClick={() => setShowTippy(!showTippy)}>
                        <button className="user-avatar">AS</button>
                        <div className="user-text">
                            <h3>Anurag Sharma hello aloo lelo</h3>
                            <p>anuragsh868@gmail.com</p>
                        </div>
                    </div>
                }
            </motion.div>
        </div>
    )
}

export default Menu
