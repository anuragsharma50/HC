import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader"

import Styles from '../styles/pageStyles/dashboard.module.scss'

function Dashboard({user,loading}) {

    const router = useRouter()

    useEffect(() => {
        if(!user && !loading) {
            router.push('/signin')
        }
    }, [user,loading])

    if(loading) {
        return (
            <div className={`${Styles.container} container`}>
                <div className="loading">
                    <ClipLoader color="#0677c1" loading={loading} size={50} />
                </div>
            </div>
        )
    }

    return (
        <>

            <Head>
                <title>Dashboard | Happie Celebrations</title>
                <meta name="description" content="view your details here" />
            </Head>

            <div className={`${Styles.container} container`}>
                <div className={Styles.bottomHeader}>
                    <h2>Your Dashboard</h2>
                </div>

                <div className={Styles.dashboardContent}>
            
                    <div className={Styles.userDetails}>
                        <h1 className={Styles.name}>Hello, {user && user.name}</h1>
                        <p>{user && user.email}</p>
                    </div>

                    <div className={Styles.userDetails}>
                        <h1>{user && user.prePayment || 0 }</h1>
                        <p>Good Ideas Avaliable</p>
                    </div>

                    <div className={Styles.userDetails}>
                        <h1>{user && user.currency || 'Not set yet'}</h1>
                        <p>Currency</p>
                    </div>

                    { user && user.referralcode ?
                        <div className={Styles.userDetails}>
                            <h1>XZZ2CW</h1>
                            <p>Your referral code</p>
                        </div>

                        :
                        <div className={Styles.userDetails}>
                            <p>Try your first free idea and get your referral code</p>
                        </div>
                    }

                    <div className={Styles.userDetails}>
                        <h1>₹{' '}{ user && user.earning || 0 }</h1>
                        <p>Your earnings</p>
                        <br />
                        <p>Earn money by writing ideas</p>
                        <button onClick={() => router.push('/write')}>Write Now</button>
                    </div>

                    <div className={Styles.userDetails}>
                        <h1>{ user && user.free }</h1>
                        <p>Free Ideas Avaliable</p>
                        <br />
                        <p>Get more free ideas by :</p>
                        <button onClick={() => router.push('/referral')}>Referring a friend</button>
                        <p className={Styles.or}>or</p>
                        <button onClick={() => router.push('/write')}>Writing idea</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard
