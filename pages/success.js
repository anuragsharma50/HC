import { useRouter } from "next/router"
import Image from 'next/image'
import axios from 'axios'
import { useEffect } from 'react'
import Styles from '../styles/pageStyles/success.module.scss'

import SuccessImage from '../assets/images/success.jpg'

function Success() {

    const router = useRouter()
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/stripe/savepayment`,{withCredentials:true}).then(res => {

            // console.log(res)

        }).catch((err) => {
            // console.log(err)
        })

        setTimeout(() => {
            router.push('/')
            window.close()
        }, 3000);
    }, [])

    return (
        <div className={`${Styles.container} container`}>
            <div className="sub-container">
                <div className={Styles.imageContainer}>
                    <Image width={200} height={200} src={SuccessImage} />
                </div>
                <h2>Payment Successful</h2>
                <br />
                <p>Page will automatically close in few seconds</p>
            </div>
        </div>
    )
}

export default Success
