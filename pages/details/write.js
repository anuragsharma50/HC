import { useRouter } from "next/router"
import Styles from '../../styles/details/write.module.scss'

function Write() {

    const router = useRouter()

    return (
        <div className={`${Styles.container} container`}>
            <div className="sub-container">
                <div className="heading">
                    <h2>Details for writing ideas</h2>
                </div>

                <div className={Styles.content}>
                    <h3>Everytime someone save your idea you will get <b>₹3</b> or <b>$0.04</b> based on currency you choose.</h3>
                    
                    <div className={Styles.list}>
                        <p>Process Of idea Submission</p>
                        <ol>
                            <li>You write an idea</li>
                            <li>Mannual checking of idea</li>
                            <li>You will get a notification on registered email</li>
                            <li>someone save your idea</li>
                            <li>amount will be updated</li>
                        </ol>
                    </div>

                    <div className={Styles.list}>
                        <p>Rules of writing idea</p>
                        <ul>
                            <li>There must not have any bad word else your idea will get rejected</li>
                            <li>Choose fields appropriately</li>
                            <li>Idea should not harm any person,animal or environment by any kind</li>
                        </ul>
                    </div>

                    <div className={`${Styles.submit} submit`}>
                        <button onClick={() => router.push('/write')} className="submit-btn">Start Writing</button>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Write
