import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router"
import { useEffect,useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader"

import styles from '../styles/pageStyles/signin.module.scss'

import LoginImage from '../assets/images/login.png'
import SignInForm from '../components/forms/signInForm'
import SocialLogins from '../components/social-login/SocialLogins'

function SignIn({updateUser,user,loading}) {

    const router = useRouter()
    const [disableState, setDisableState] = useState(false)
    const [pageloading, setPageLoading] = useState(true)

    useEffect(() => {
        if(user && loading){
            if(user.unverified){
                router.push('/verify-account')
            }else{
                router.push('/')
            }
        }else{
            setPageLoading(false)
        }
        
    }, [user])

    if(loading || pageloading){
        return (
            <div className="container">
                <div className="loading">
                    <ClipLoader color="#0677c1" loading={loading || pageloading} size={50} />
                </div>
            </div>
        )
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

            <SocialLogins />

            <SignInForm user={user} updateUser={updateUser} setDisableState={setDisableState} />

            <div className="reset-password">
                <Link href="/forgot-password">Forgot Password?</Link>
            </div>

            <div className="submit">
                <button form="signin-form" type="submit" className="submit-btn" disabled={disableState}>Submit</button>
            </div>

            <div className="signup-link">
                <p>Don’t have an account yet? </p>
                <Link href="/signup">
                    <a>Create New Account</a>
                </Link>
            </div>

        </div>
    </div>
    )
}

export default SignIn
