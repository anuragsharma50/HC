import { useState } from 'react'

import WriteForm from '../components/forms/writeForm'
import styles from '../styles/pageStyles/write.module.scss'
import styles2 from '../styles/pageStyles/form-page.module.scss'

function Idea({user}) {

    const [disableState, setDisableState] = useState(false)

    return (
        <div className={`${styles.container} ${styles2.container} container`}>
            <div className="form">
                <div className="heading">
                    <h2>Write</h2>
                </div>

                <WriteForm user={user} setDisableState={setDisableState} />

                <div className="submit">
                    <button form="write-form" type="submit" className="submit-btn" disabled={disableState}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Idea
