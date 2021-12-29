import { useRouter } from "next/router"
import Head from 'next/head'
import Styles from '../../styles/details/write.module.scss'

function Write() {

    const router = useRouter()

    return (
        <>
            <Head>
                <title>Write Instructions | Happie Celebrations</title>
                <meta name="description" content="Instructions for writing ideas" />
            </Head>

            <div className={`${Styles.container} container`}>
                <div className="sub-container">
                    <div className="heading">
                        <h2>Details for writing ideas</h2>
                    </div>

                    <div className={Styles.content}>
                        <h3>Get <b>₹1</b><b>( $0.013 )</b> if your idea gets approved.</h3>
                        <h3>and Every time someone saves your idea you will get <b>₹2</b><b>( $0.026 ).</b></h3>
                        
                        <div className={Styles.list}>
                            <p>Process Of idea Submission</p>
                            <ol>
                                <li>You write an idea</li>
                                <li>Manual checking of idea</li>
                                <li>You will get a notification on your registered email</li>
                                <li>someone save your idea</li>
                                <li>Your earnings will be updated</li>
                            </ol>
                        </div>

                        <div className={Styles.list}>
                            <p>Rules of writing idea</p>
                            <ul>
                                <li>Language must be simple and easy to understand.</li>
                                <li>There must not have any bad words else your idea will get rejected.</li>
                                <li>Choose fields appropriately.</li>
                                <li>The idea should not harm any person, animal, environment, or feelings by any kind.</li>
                            </ul>
                        </div>

                        <div className={`${Styles.submit} submit`}>
                            <button onClick={() => router.push('/write')} className="submit-btn">Start Writing</button>
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default Write
