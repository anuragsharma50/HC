import Image from 'next/image'

import GoogleIcon from '../../assets/images/google-icon.png'
import AmazonIcon from '../../assets/images/amazon-icon.png'
import FbIcon from '../../assets/images/facebook-icon.png'

import Styles from './social-logins.module.scss'

const SocialLogins = () => {

    const googleLogin = () => {
        window.open("/api/authGoogle", "_self");
        // href="/api/authGoogle"
    }

    const facebookLogin = () => {
        window.open(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/facebook`, "_self");
    }

    const amazonLogin = () => {
        window.open(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/amazon`, "_self");
    }

    return ( 
        <>
            <ul className={Styles.socialLogin}>
                <li onClick={googleLogin}><Image src={GoogleIcon} alt="google" /></li>
                <li onClick={amazonLogin}><Image src={AmazonIcon} alt="amazon" /></li>
                <li onClick={facebookLogin}><Image src={FbIcon} alt="facebook" /></li>
            </ul>

            <div className={Styles.or}>
                <hr />
                <span>or</span>
                <hr />
            </div>
        </>
    )
}

export default SocialLogins
