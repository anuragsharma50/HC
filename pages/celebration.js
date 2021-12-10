import Image from 'next/image'
import { useState } from 'react'
import IdeaForm from '../components/forms/ideaForm'
import Styles from '../styles/pageStyles/form-page.module.scss'

import CelebrationImage from '../assets/images/Celebration.png'

function celebration({user}) {
    const [disableState, setDisableState] = useState(false)

    return (
        <>
            <div className={`${Styles.container} container`}>
                <div className="image">
                    <Image src={CelebrationImage} alt="girl celebrating" />
                </div>

                <div className="form">
                    <div className="info"><a onClick={() => setModelState(true)}>Click here</a> to understand how to choose budget</div>
                    <div className="heading">
                        <h2>Celebrate</h2>
                    </div>

                    <h3 className="form-title">Enter details</h3>
                    
                    <IdeaForm from={"celebration"} user={user} setDisableState={setDisableState} />

                    <div className="submit">
                        <button form="idea-form" type="submit" className="submit-btn" disabled={disableState}>Submit</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default celebration
