import Image from 'next/image'
import { useState } from 'react'
import IdeaForm from '../components/forms/ideaForm'
import styles from '../styles/pageStyles/form-page.module.scss'

import SurpriseImage from '../assets/images/Surprise.png'

function Gift({user}) {

    const [disableState, setDisableState] = useState(false)

    return (
        <>
            <div className={`${styles.container} container`}>
                <div className="image">
                    <div className="img">
                        <Image src={SurpriseImage} alt="gift" />
                    </div>
                </div>

                <div className="form">
                    <div className="info"><a onClick={() => setModelState(true)}>Click here</a> to understand how to choose budget</div>
                    <div className="heading">
                        <h2>Gift</h2>
                    </div>

                    <h3 className="form-title">Enter details</h3>
                    
                    <IdeaForm from={"gift"} user={user} setDisableState={setDisableState} />

                    <div className="submit">
                        <button form="idea-form" type="submit" className="submit-btn" disabled={disableState}>Submit</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Gift
