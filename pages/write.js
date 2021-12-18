import Head from 'next/head'
import { useState } from 'react'
import WriteForm from '../components/forms/writeForm'
import IdeaSubmitted from '../components/modals/ideaSubmitted'
import styles from '../styles/pageStyles/write.module.scss'
import styles2 from '../styles/pageStyles/form-page.module.scss'

function Idea({user}) {

    const [disableState, setDisableState] = useState(false)
    const [modelState, setModelState] = useState(false)

    return (
        <>
            <Head>
                <title>Write Ideas | Happie Celebrations</title>
                <meta name="description" content="write ideas and earn money" />
            </Head>

            <IdeaSubmitted modelState={modelState} setModelState={setModelState} />
            <div className={`${styles.container} ${styles2.container} container`}>
                <div className="form">
                    <div className="heading">
                        <h2>Write</h2>
                    </div>

                    <WriteForm user={user} setDisableState={setDisableState} setModelState={setModelState} />

                    <div className="submit">
                        <button form="write-form" type="submit" className="submit-btn" disabled={disableState}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Idea
