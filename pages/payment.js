import { useState } from "react"
import Paypal from "../components/payment/paypal"
import Styles from '../styles/pageStyles/payment.module.scss'

function Payment({user}) {

    const [set, setSet] = useState(3)
    // const [total, setTotal] = useState(3.65)

    const handleChange = (e) => {
        setSet(e.target.value)
        // setTotal(e.target.value*1 + e.target.value*0.05 + 0.5)
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

                <div className={Styles.total}>
                    <div className={Styles.subTotal}>
                        <p>{set} set price ($1 per set)</p> <h3>${set}</h3>
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
                {/* {
                    user && user.currency === 'INR' ?
                    // component for paytm
                    :
                    //component for paypal
                    //component for stripe
                } */}
            </div>
        </div>
    )
}

export default Payment
