import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import SignUpForm from '../components/forms/signUpForm'
import SocialLogins from '../components/social-login/SocialLogins'
import styles from '../styles/pageStyles/signup.module.scss'

import DancingImage from '../assets/images/Dancing.png'

const SignUp = ({updateUser}) => {

    const [checked, setChecked] = useState(true)

    const handleChecked = e => {
        console.log(e.target.checked)
        setChecked(e.target.checked)
    }

    return (
        <div className={`${styles.container} container`}>
            <div className="image">
                <Image src={DancingImage} alt="dancing" />
            </div>

        <div className="form">
            <div className="heading">
                <h2>SignUp</h2>
            </div>

            <SocialLogins />

            <SignUpForm updateUser={updateUser} />

            <div className="t-and-c">
                <input 
                    defaultChecked
                    onClick={e => handleChecked(e)} 
                    type="checkbox" name="tc-checkbox" 
                    value="tc-checkbox" 
                    className="tc-checkbox" 
                />
                <label htmlFor="tc-checkbox">I agree with</label>
                <a href="">Terms and conditions</a>
            </div>

            <div className="submit">
                <button disabled={!checked} form="signup-form" type="submit" className="submit-btn">Submit</button>
            </div>

            <div className="signup-link">
                <p>Already have an account?</p>            
                <Link href="/signin">
                    <a>Login</a>
                </Link>
            </div>

        </div>
    </div>
    )
}

export default SignUp
