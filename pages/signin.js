import Image from 'next/image'

import styles from '../styles/pageStyles/signin.module.scss'

import LoginImage from '../assets/login.png'
import GoogleIcon from '../assets/google-icon.png'
import AppleIcon from '../assets/apple-icon.png'
import FbIcon from '../assets/facebook-icon.png'
import SignInForm from '../components/forms/signInForm'

function SignIn() {
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
            
            {/* <form className="form-input">
                <div className="label-error">
                    <label htmlFor="email">Email</label>
                    <span className="error-text">Invalid Email</span>
                    </div>
                <input type="text" id="email" name="email" placeholder="user@gmail.com" />
                    <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" id="password" name="password" placeholder="Password" />
            </form> */}

            <SignInForm />

            <div className="reset-password">
                <a href="">Forgot Password?</a>
            </div>

            <div className="submit">
                <button form="signin-form" type="submit" className="submit-btn">Submit</button>
            </div>

            <div className="signup-link">
                <p>Don’t have an account yet? </p><a>Create New Account</a>
            </div>

        </div>
    </div>
    )
}

export default SignIn
