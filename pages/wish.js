import Image from 'next/image'

import styles from '../styles/pageStyles/wish.module.scss'

import LoginImage from '../assets/images/login.png'
import WishForm from '../components/forms/wishForm'

function Wish() {
    return (
        <div className={`${styles.container} container`}>
        <div className="image">
            <Image src={LoginImage} alt="girl showing laptop" />
        </div>

        <div className="form">
            <div className="heading">
                <h2>Wish</h2>
            </div>

            <h3 className="form-title">Enter details of celebrant</h3>
            
            <WishForm/>

            <div className="submit">
                <button form="wish-form" type="submit" className="submit-btn">Submit</button>
            </div>

        </div>
    </div>
    )
}

export default Wish
