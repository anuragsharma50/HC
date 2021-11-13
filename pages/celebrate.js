import Image from 'next/image'

import styles from '../styles/pageStyles/celebrate.module.scss'

import LoginImage from '../assets/images/login.png'
import CelebrateForm from '../components/forms/celebrateForm'

function celebrate() {
    return (
        <div className={`${styles.container} container`}>
        <div className="image">
            <Image src={LoginImage} alt="girl showing laptop" />
        </div>

        <div className="form">
            <div className="heading">
                <h2>Celebrate</h2>
            </div>

            <h3 className="form-title">Enter celebrant and celebration details</h3>
            
            <CelebrateForm />

            <div className="submit">
                <button form="celebrate-form" type="submit" className="submit-btn">Submit</button>
            </div>

        </div>
    </div>
    )
}

export default celebrate
