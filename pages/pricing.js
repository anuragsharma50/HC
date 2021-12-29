import { useRouter } from "next/router"
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import CurrencyModal from '../components/modals/currency'
import styles from '../styles/pageStyles/pricing.module.scss'

function Pricing({user,updateUser}) {

    const router = useRouter()
    const [modelState, setModelState] = useState(true)
    const [currency, setCurrency] = useState( user && user.currency ? user.currency : "INR")

    useEffect(() => {
        if(user && user.currency){
            setModelState(false)
        }
    }, [user])

    const goToPayment = () => {
        if(user){
            router.push('/payment')
        }else{
            router.push('/signin')
        }
    }

    return (
        <>
            <Head>
                <title>Pricing | Happie Celebrations</title>
                <meta name="description" content="prices to get an idea set" />
            </Head>

            <div className={`${styles.container} container`}>
            <CurrencyModal modelState={modelState} setModelState={setModelState} 
            user={user} updateUser={updateUser} 
            currency={currency} setCurrency={setCurrency}
            />
            <div className="sub-container">
                <div className="heading">
                    <h2>Pricing</h2>
                </div>

                <div className="lists">

                    <div className="details">
                        <div className="detail-title">
                            <h2>Get free ideas</h2>
                            <h1>Free</h1>
                        </div>

                        <ul>
                            <li>Good ideas for free</li>
                            <li><Link href="/referral">Refer a friend</Link> and you both will get a free idea set.</li>
                            <li><Link href="/write">Write an idea</Link> and after approval get one free idea set and ₹ 1</li>
                        </ul>

                        <div className="btn">
                            <button style={{backgroundColor: '#a30062'}} className="submit-btn" onClick={() => router.push('/write')} >Write Now</button>
                        </div>
                    </div>

                    <div className="details">
                        <div className="detail-title">
                            <h2>Watch ADs</h2>
                            <h1>Free</h1>
                        </div>
        
                        <ul>
                            <li>Ads will also be avaliable while watching ideas.</li>
                            <li>Ideas can&apos;t be saved</li>
                        </ul>
        
                        <div className="btn">
                            <button style={{backgroundColor: '#0762b5'}} className="submit-btn" onClick={() => router.push('/form-with-ads')} >View Ideas</button>
                        </div>
                    </div>

                    <div className="details">
                        <div className="detail-title">
                            <h2>Good Ideas</h2>
                            <div className="amount">
                                {
                                    currency === 'INR' ?
                                        <>
                                            <span>₹</span><h1>9</h1>
                                        </>
                                    :
                                        <>
                                            <span>$</span><h1>0.25</h1>
                                        </>
                                }
                            </div>
                        </div>
        
                        <ul>
                            <li>Get good ideas in any one catatory.</li>
                            <li>15 Ideas without intruption</li>
                            <li>Save up to 3 ideas</li>
                        </ul>
        
                        <div className="btn">
                            <button className="submit-btn" onClick={goToPayment} >Choose Plan</button>
                        </div>
                    </div>

                    {/* <div className="details">
                        <div className="detail-title">
                            <h2>Premium Ideas</h2>
                            <div className="amount">
                                {
                                    currency === 'INR' ?
                                        <>
                                            <span>₹</span><h1>19</h1>
                                        </>
                                    :
                                        <>
                                            <span>$</span><h1>0.5</h1>
                                        </>
                                }
                            </div>
                        </div>
        
                        <ul>
                            <li>Get ideas in any one catatory.</li>
                            <li>25 Ideas without intruption</li>
                            <li>Save up to 4 ideas</li>
                        </ul>
        
                        <div className="btn">
                            <button className="submit-btn" onClick={goToPayment} disabled={true}>Choose Plan</button>
                        </div>
                    </div> */}
        
                </div>
            </div>
        </div>
    </>
    )
}

export default Pricing
