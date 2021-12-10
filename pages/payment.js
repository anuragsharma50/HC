import { useRouter } from "next/router"
import { useState,useEffect } from "react"
import Paypal from "../components/payment/paypal"
import Razorpay from "../components/payment/Razorpay"
import Stripe from "../components/payment/stripe"
import PacmanLoader from "react-spinners/PacmanLoader"
import Styles from '../styles/pageStyles/payment.module.scss'

function Payment({user}) {

    const router = useRouter()
    const [set, setSet] = useState(3)
    const [loading, setLoading] = useState(true)

    const handleChange = (e) => {
        setSet(e.target.value)
    }

    useEffect(() => {
        if(!user) {
            router.push('/signup')
        }
        setLoading(false)
    }, [user])

    if(loading) {
        return (
            <div className={`${Styles.container} container`}>
                <div className="sub-container">
                    <PacmanLoader color="#F8E71C" loading={loading} size={40} />
                </div>
            </div>
        )
    }

    return (
        <div className={`${Styles.container} container`}>
            <div className="sub-container">
                <div className="heading">
                    <h2>Pricing</h2>
                </div>

                <h3>choose number of sets to buy</h3>
                <div className={Styles.set} onChange={(e) => handleChange(e)}>
                    <div className={Styles.input}>
                        <input type="radio" value="1" name="set"/> 1
                    </div>
                    <div className={Styles.input}>
                        <input type="radio" value="3" name="set" defaultChecked={true}/> 3
                    </div>
                    <div className={Styles.input}>
                        <input type="radio" value="5" name="set"/> 5
                    </div>
                    <div className={Styles.input}>
                        <input type="radio" value="10" name="set"/> 10
                    </div>
                </div>

                {
                    user && user.currency === 'INR' ?

                    <>
                        <div className={Styles.total}>
                            <div className={Styles.subTotal}>
                                <p>Total</p> <h3>₹{set*19}</h3>
                            </div>
                        </div>

                        <Razorpay set={set} />
                    </>

                    :

                    <>
                        <div className={Styles.total}>
                            <div className={Styles.subTotal}>
                                <p>Total</p> <h3>${set}</h3>
                            </div>
                        </div>

                        <Stripe set={set} />

                        <div className={Styles.or}>
                            <hr />
                            <span>or</span>
                            <hr />
                        </div>

                        <div className={Styles.total}>
                            <div className={Styles.subTotal}>
                                <p>Price</p> <h3>${set}</h3>
                            </div>
                            <div className={Styles.subTotal}>
                                <p>paypal fees</p> <h3>${set*0.05 + 0.5}</h3>
                            </div>
                            <div className={Styles.subTotal}>
                                <p>Total</p> <h3>${set*1 + set*0.05 + 0.5}</h3>
                            </div>
                        </div>

                        <div className={Styles.paypal}>
                            <Paypal set={set} />
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Payment
