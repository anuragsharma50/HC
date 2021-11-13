import Image from 'next/image'

import GoogleIcon from '../../assets/images/google-icon.png'
import AmazonIcon from '../../assets/images/amazon-icon.png'
import FbIcon from '../../assets/images/facebook-icon.png'

const SocialLogins = () => {

    const googleLogin = () => {
        window.open("http://localhost:5500/auth/google", "_self");
    }

    const facebookLogin = () => {
        window.open("http://localhost:5500/auth/facebook", "_self");
    }

    const amazonLogin = () => {
        window.open("http://localhost:5500/auth/amazon", "_self");
    }

    return ( 
        <ul className="social-login">
            <li onClick={googleLogin}><Image src={GoogleIcon} alt="google" /></li>
            <li onClick={amazonLogin}><Image src={AmazonIcon} alt="amazon" /></li>
            <li onClick={facebookLogin}><Image src={FbIcon} alt="facebook" /></li>
        </ul>
    )
}

export default SocialLogins
