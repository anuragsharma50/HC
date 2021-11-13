import Image from 'next/image'
import CelebrateForm from '../components/forms/celebrateForm'
import styles from '../styles/pageStyles/celebrate.module.scss'
import LoginImage from '../assets/images/login.png'

function Gift() {
    return (
        <div className={`${styles.container} container`}>
        <div className="image">
            <Image src={LoginImage} alt="girl showing laptop" />
        </div>

        <div className="form">
            <div className="heading">
                <h2>Gift</h2>
            </div>

            <h3 className="form-title">Enter details</h3>
            
            <CelebrateForm />

            <div className="submit">
                <button form="celebrate-form" type="submit" className="submit-btn">Submit</button>
            </div>

        </div>
    </div>
    )
}

export default Gift
