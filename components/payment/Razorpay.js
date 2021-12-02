import Script from 'next/script'
import { useRouter } from "next/router";
import axios from 'axios'
import Styles from './razorpay.module.scss'

function Razorpay({set}) {

    const router = useRouter()
    const displayRazorpay = async () => {

        axios.post('http://localhost:5500/razorpay',{ set },
        {withCredentials:true}).then(res => {

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
                currency: res.data.currency,
                amount: res.data.amount.toString(),
                order_id: res.data.id,
                name: 'Happie Celebrations Payment',
                description: 'Thank you for using Happie celebrations, hope you get some good ideas',
                image: 'http://localhost:5500/logo.png',
                handler: function (response) {
                    // alert(response.razorpay_payment_id)
                    // alert(response.razorpay_order_id)
                    // alert(response.razorpay_signature)
                    console.log(response)
                    router.push('/')
                },
                prefill: {
                    name: 'Aana K',
                    email: 'sdfdsjfh2@ndsfdf.com',
                    phone_number: '+919876543210'
                }
            }
            const paymentObject = new window.Razorpay(options)
            paymentObject.open()

        }).catch((err) => {
            console.log(err)
        })
		
	}

    return (
        <div className={Styles.razorpay}>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />
            <button className={Styles.button} onClick={displayRazorpay} rel="noopener noreferrer" >Pay now</button>
        </div>
    )
}

export default Razorpay
