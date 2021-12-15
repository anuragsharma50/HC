import Image from "next/image"
import Styles from '../styles/pageStyles/aboutus.module.scss'

import FamilyImage from '../assets/images/family.png'

function AboutUs() {
    return (
        <div className={`${Styles.container} container`}>
            <div className="sub-container">
                <div className="heading">
                    <h2>About Us</h2>
                </div>

                <div className={Styles.about}>
                    <div className={Styles.img}>
                        <Image src={FamilyImage} alt="happy family" />
                    </div>
                    <div className={Styles.text}>
                        <p>
                            &#34;We at happie Celebrations believe that doing things in the same way, every time can 
                            make them boring. so, if we should try some creative ways to celebrate festivals or 
                            birthdays. as celebrating occasions in a different way will make them more exciting, and we 
                            also need some stories to tell our grandchildren. so, why not try some weird, crazy ideas 
                            that make our festivals or birthdays unforgettable.&#34;
                        </p>

                        <p style={{fontStyle:"normal"}}>
                            We also believe in Equality. so, if you find anything on our website that feels against this, 
                            please share it with us either through contact us or by messaging us on social media. and 
                            if any idea shows inequality of any kind then please note and share the title of the idea 
                            too.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
