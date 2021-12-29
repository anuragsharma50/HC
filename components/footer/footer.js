import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../assets/images/Logo.png'
import FB from '../../assets/images/fb-footer.png'
import Insta from '../../assets/images/insta-footer.png'
import Twitter from '../../assets/images/twitter-footer.png'
import Youtube from '../../assets/images/youtube-mini.png'

function Footer() {
    return (
        <div className="footer">
        <div className="footer-top">
            <div className="footer-links">
                <ul>
                    <li className="links-heading">Ideas</li>
                    <li><Link href="/wish">Wish</Link></li>
                    <li><Link href="/celebration">Celebration</Link></li>
                    <li><Link href="/gift">Gift</Link></li>
                </ul>
                <ul>
                    <li className="links-heading">About</li>
                    <li><Link href="/about-us">About Us</Link></li>
                    <li><Link href="/contact-us">Contact Us</Link></li>
                </ul>
                <ul className="social">
                    <li className="links-heading">Follow Us</li>
                    <li><Image src={FB} alt="facebook-icon" /></li>
                    <li><Image src={Insta} alt="instagram-icon" /></li>
                    <li><Image src={Twitter} alt="twitter-icon" /></li>
                    <li><Image src={Youtube} alt="youtube-icon" /></li>
                </ul>
            </div>

            <div className="footer-logo">
                <div className="logo">
                    <Link href="/">
                        <>
                            <Image src={Logo} alt="Logo" />
                        </>
                    </Link>
                </div>
                <p>Make it special</p>
            </div>
        </div>

        <div className="footer-bottom">
            <h3 className="copyright">Copyright © 2021. Happie Celebration. All rights reserved.</h3>
            <div className="terms">
                <h3>
                    <Link href="/terms-and-conditions-of-use">Terms &amp; Conditions</Link>
                </h3>
                <h3>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                </h3>
                <h3>
                    <Link href="/refund-policy">Refund Policy</Link>
                </h3>
            </div>
        </div>
    </div>
    )
}

export default Footer
