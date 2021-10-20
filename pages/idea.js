import Image from 'next/image'
import styles from '../styles/pageStyles/idea.module.scss'

import Arrow from "../assets/arrow.png"

function Idea() {
    return (
        <div className={`${styles.container} container`}>
            <div className="sub-container">
                <div className="heading">
                    <h2>Idea title</h2>
                </div>

                <div className="idea-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dui, rhoncus, duis quam sit in. 
                    Etiam bibendum tellus aliquam mauris nulla accumsan orci. Lectus eu aliquam quisque mi gravida diam tellus. 
                    Felis purus, sit proin suspendisse non.
                </div>

                <div className="idea-buttons">
                    <button className="sec-btn btn">
                        <div className="img reverse">
                            <Image src={Arrow} alt="arrow" /> 
                        </div>
                        <span>Previous</span>
                    </button>
                    <button className="btn">Save & Share</button>
                    <button className="sec-btn btn">
                        <span>Next</span>
                        <div className="img">
                            <Image src={Arrow} alt="arrow" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Idea
