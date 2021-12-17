import Script from 'next/script'
import { useState } from 'react'
import axios from 'axios'
import Styles from './razorpay.module.scss'

function Razorpay({set}) {
    const [disableState, setDisableState] = useState(false)

    const displayRazorpay = async () => {

        setDisableState(true)
        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/razorpay`,{ set },
        {withCredentials:true}).then(res => {

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
                currency: res.data.currency,
                amount: res.data.amount.toString(),
                order_id: res.data.id,
                name: 'Happie Celebrations Payment',
                description: "Let's make it special",
                image: `${process.env.NEXT_PUBLIC_BACKEND_URL}/logo.png`,
                handler: function (response) {
                    // alert(response.razorpay_payment_id)
                    // alert(response.razorpay_order_id)
                    // alert(response.razorpay_signature)
                    // console.log(response)
                    // router.push('/')
                    window.location = '/'
                }
            }
            const paymentObject = new window.Razorpay(options)
            paymentObject.open()
            setDisableState(false)
        }).catch((err) => {
            // console.log(err)
        })
	}

    return (
        <div className={Styles.razorpay}>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />
            <button className={Styles.button} onClick={displayRazorpay} rel="noopener noreferrer" disabled={disableState}>Pay now</button>
        </div>
    )
}

export default Razorpay
