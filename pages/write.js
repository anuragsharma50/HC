import WriteForm from '../components/forms/writeForm'
import styles from '../styles/pageStyles/write.module.scss'
import styles2 from '../styles/pageStyles/celebrate.module.scss'

function Idea() {
    return (
        <div className={`${styles.container} ${styles2.container} container`}>
            <div className="form">
                {/* <form className="form-input">
                    <input type="text" id="idea-title" name="idea-title" placeholder="Idea Title" />
                    <textarea id="description" name="description" placeholder="Description"></textarea>
                </form> */}

                <WriteForm />

                <div className="submit">
                    <button form="write-form" type="submit" className="submit-btn">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Idea
