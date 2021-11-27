import Image from 'next/image'
import { useState } from 'react'

import styles from '../styles/pageStyles/form-page.module.scss'

import LoginImage from '../assets/images/login.png'
import IdeaForm from '../components/forms/ideaForm'
import WishBudgetExplainer from '../components/modals/wishBudgetExplainer'

function Wish({user}) {

    const [modelState, setModelState] = useState(false)

    return (
        <>
            <WishBudgetExplainer modelState={modelState} setModelState={setModelState} />
            <div className={`${styles.container} container`}>
                <div className="image">
                    <Image src={LoginImage} alt="girl showing laptop" />
                </div>

                <div className="form">
                    <div className="info"><a onClick={() => setModelState(true)}>Click here</a> to understand how to choose budget</div>
                    <div className="heading">
                        <h2>Wish</h2>
                    </div>

                    <h3 className="form-title">Enter details of celebrant</h3>
                    
                    <IdeaForm from={"wish"} user={user} />

                    <div className="submit">
                        <button form="idea-form" type="submit" className="submit-btn">Submit</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Wish
