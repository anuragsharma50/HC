import { useRouter } from "next/router"
import Styles from '../../styles/details/approve-rules.module.scss'

function Rules() {

    const router = useRouter()

    return (
        <div className={`${Styles.container} container`}>
            <div className="sub-container">
                <div className="heading">
                    <h2>Rules</h2>
                </div>

                <ul>
                    <li>Make sure there are no bad words either directly or indirectly.</li>
                    <li>Idea must make sense and not just some paragraph from internet.</li>
                    <li>All inputs must be according to idea</li>
                </ul>

                <button className={Styles.btn} onClick={() => router.push('/approve')}>Approve Now</button>
            </div>
        </div>
    )
}

export default Rules
