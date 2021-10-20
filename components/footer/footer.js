import Image from 'next/image'

import Logo from '../../assets/Logo.png'
import FB from '../../assets/fb-footer.png'
import Insta from '../../assets/insta-footer.png'
import Twitter from '../../assets/twitter-footer.png'

function Footer() {
    return (
        <div className="footer">
        <div className="footer-top">
            <div className="footer-links">
                <ul>
                    <li className="links-heading">Ideas</li>
                    <li>Wish</li>
                    <li>Celebrate</li>
                    <li>Surprise</li>
                </ul>
                <ul>
                    <li className="links-heading">About</li>
                    <li>Our Team</li>
                    <li>Blog</li>
                </ul>
                <ul className="social">
                    <li className="links-heading">Follow Us</li>
                    <li><Image src={FB} alt="facebook-icon" /></li>
                    <li><Image src={Insta} alt="instagram-icon" /></li>
                    <li><Image src={Twitter} alt="twitter-icon" /></li>
                </ul>
            </div>

            <div className="footer-logo">
                <div  className="logo">
                    <Image src={Logo} alt="Logo" />
                </div>
                <p>Make it special</p>
            </div>
        </div>

        <div className="footer-bottom">
            <h3 className="copyright">Copyright © 2021. Happie Celebration. All rights reserved.</h3>
            <div className="terms">
                <h3>Terms & Conditions</h3>
                <h3>Privacy Policy</h3>
            </div>
        </div>
    </div>
    )
}

export default Footer
