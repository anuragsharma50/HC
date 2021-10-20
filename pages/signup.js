import Image from 'next/image'

import { useState } from 'react'

import styles from '../styles/pageStyles/signup.module.scss'

import LoginImage from '../assets/login.png'
import GoogleIcon from '../assets/google-icon.png'
import AppleIcon from '../assets/apple-icon.png'
import FbIcon from '../assets/facebook-icon.png'
import SignUpForm from '../components/forms/signUpForm'

function SignUp() {

    const [checked, setChecked] = useState(true)

    const handleChecked = e => {
        console.log(e.target.checked)
        setChecked(e.target.checked)
    }

    return (
        <div className={`${styles.container} container`}>
            <div className="image">
                <Image src={LoginImage} alt="girl showing laptop" />
            </div>

        <div className="form">
            <div className="heading">
                <h2>Sign In</h2>
            </div>

            <ul className="social-login">
                <li><Image src={GoogleIcon} alt="google icon" /></li>
                <li><Image src={AppleIcon} alt="apple icon" /></li>
                <li><Image src={FbIcon} alt="facebook icon" /></li>
            </ul>

            <div className="or">
                <hr />
                <span>or</span>
                <hr />
            </div>

            <SignUpForm />

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
                <p>Don’t have an account yet? </p><a>Create New Account</a>
            </div>

        </div>
    </div>
    )
}

export default SignUp
