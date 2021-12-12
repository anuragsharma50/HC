import { useRouter } from "next/router"
import OtpInput from 'react-otp-input'
import { useState,useEffect } from 'react'
import Countdown from 'react-countdown'
import axios from 'axios'

import Styles from '../styles/pageStyles/otp.module.scss'

function OTP({user,updateUser}) {

    const router = useRouter()
    const [otp, setOtp] = useState('')
    const [date, setDate] = useState(Date.now() + 59000)
    const [timeIndex, setTimeIndex] = useState(0)
    const [serverError, setServerError] = useState('')
    const [isServerError, setIsServerError] = useState(false)

    useEffect(() => {
        if(user && !user.unverified){
            router.push('/')
        }
    }, [user])

    const handleChange = (otp) => {
        setOtp(otp)
    }

    const submitOTP = () => {
        // console.log(otp)
        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verifyotp`,{otp},{withCredentials:true}).then(res => {
            // console.log(res)
            router.push('/')
            updateUser()
        }).catch((e) => {
            // console.log(e)
            if (e.response && e.response.data) {
                // console.log(e.response.data.message)
                setServerError(e.response.data.message)
                setIsServerError(true)
            }
        })
    }

    const resend = () => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/send-otp-again`,{withCredentials:true}).then(res => {
            // console.log(res)
        }).catch((err) => {
            // console.log(err)
        })
        setDate(Date.now() + 59000)
        setTimeIndex(timeIndex + 1)
    }

    const renderer = ({completed,formatted}) => {
        if (completed && timeIndex < 3) {
            // Render a completed state
            return <span onClick={resend} className={Styles.resend}>Resend verification code</span>
        } else if(completed && timeIndex == 3){
            return <span>Please try again later</span>
        } else {
            // Render a countdown
            return <span>Resend in <b>{formatted.seconds}s </b></span>
        }
    };

    return (
        <div className={`${Styles.container} container`}>
            <div className="sub-container">
                <div className="heading">
                    <h2>Email Verification</h2>
                </div>

                <div className={Styles.otpcontent}>
                    <h4>Please check your Email for verification code</h4>
                    <OtpInput
                        className={Styles.OtpContainer}
                        inputStyle={Styles.inputStyle}
                        value={otp}
                        onChange={handleChange}
                        numInputs={6}
                        // hasErrored={isServerError}
                        isInputNum={true}
                        shouldAutoFocus={true}
                    />
                    <div className={Styles.error}>{serverError}</div>
                    <button onClick={submitOTP} className={Styles.btn}>Submit</button>
                </div>
                <div className={Styles.resendText}>
                    <span>Didn&apos;t recieve any code? </span>
                    <Countdown key={timeIndex} date={date} renderer={renderer} />
                </div>
            </div>
        </div>
    )
}

export default OTP
