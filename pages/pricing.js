import { useRouter } from "next/router"
import Head from 'next/head'
import Script from 'next/script'
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

            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4545307603353405"
                crossorigin="anonymous">

            </Script>

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
                            <h2>Per ideas set</h2>
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
                            <li>Save up to 3 ideas</li>
                        </ul>
        
                        <div className="btn">
                            <button className="submit-btn" onClick={goToPayment}>Choose Plan</button>
                        </div>
                    </div>

                    <div className="details">
                        <div className="detail-title">
                            <h2>Watch AD</h2>
                            <h1>Free</h1>
                        </div>
        
                        <ul>
                            <li>Watch an AD and get one idea for free.</li>
                            <li>No choice of idea, Again watch AD to get idea.</li>
                            <li>Ideas can&apos;t be saved</li>
                        </ul>
        
                        <div className="btn">
                            <button title="Unavaliable" className="submit-btn" onClick={() => router.push('/idea-with-ads')} >Watch Now</button>
                        </div>
                    </div>
        
                </div>

            </div>
        </div>
    </>
    )
}

export default Pricing
