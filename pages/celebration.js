import Image from 'next/image'
import { useState } from 'react'

import Styles from '../styles/pageStyles/form-page.module.scss'
import LoginImage from '../assets/images/login.png'
import IdeaForm from '../components/forms/ideaForm'
import CelebrateBudgetExplainer from '../components/modals/celebrateBudgetExplainer'

function celebration() {

    const [modelState, setModelState] = useState(false)

    return (
        <>
            <CelebrateBudgetExplainer modelState={modelState} setModelState={setModelState} />
            <div className={`${Styles.container} container`}>
                <div className="image">
                    <Image src={LoginImage} alt="girl showing laptop" />
                </div>

                <div className="form">
                    <div className="info"><a onClick={() => setModelState(true)}>Click here</a> to understand how to choose budget</div>
                    <div className="heading">
                        <h2>Celebrate</h2>
                    </div>

                    <h3 className="form-title">Enter celebrant and celebration details</h3>
                    
                    <IdeaForm from={"celebration"} />

                    <div className="submit">
                        <button form="idea-form" type="submit" className="submit-btn">Submit</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default celebration
