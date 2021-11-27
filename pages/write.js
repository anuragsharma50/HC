import WriteForm from '../components/forms/writeForm'
import styles from '../styles/pageStyles/write.module.scss'
import styles2 from '../styles/pageStyles/form-page.module.scss'

function Idea({user}) {
    return (
        <div className={`${styles.container} ${styles2.container} container`}>
            <div className="form">

                <WriteForm user={user} />

                <div className="submit">
                    <button form="write-form" type="submit" className="submit-btn">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Idea
