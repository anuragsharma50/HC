import styles from '../styles/pageStyles/pricing.module.scss'

function Pricing() {
    return (
        <div className={`${styles.container} container`}>
        <div className="sub-container">
            <div className="heading">
                <h2>Pricing</h2>
            </div>

            <div className="lists">
                <div className="details">
                    <div className="detail-title">
                        <h2>Watch AD</h2>
                        <h1>Free</h1>
                    </div>
    
                    <ul>
                        <li>Watch an AD and get one idea for free.</li>
                        <li>No choice of idea, Again watch AD to get idea.</li>
                        <li>Ideas can`&apos;`t be saved</li>
                    </ul>
    
                    <div className="btn">
                        <button className="submit-btn">Watch Now</button>
                    </div>
                </div>
    
                <div className="details">
                    <div className="detail-title">
                        <h2>One Time</h2>
                        <div className="amount">
                            <span>₹</span><h1>9</h1>
                        </div>
                    </div>
    
                    <ul>
                        <li>Get idea in any one catatory.</li>
                        <li>30 Ideas without intruption</li>
                        <li>Save up to 3 ideas</li>
                    </ul>
    
                    <div className="btn">
                        <button className="submit-btn">Choose Plan</button>
                    </div>
                </div>
    
                <div className="details">
                    <div className="detail-title">
                        <h2>12 Ideas</h2>
                        <div className="amount">
                            <span>₹</span><h1>99</h1>
                        </div>
                    </div>
    
                    <ul>
                        <li>Save Yourself by Paying everytime</li>
                        <li>save ₹9</li>
                        <li>Includes all feature from one time pay</li>
                    </ul>
    
                    <div className="btn">
                        <button className="submit-btn" disabled>Not Avaliable</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Pricing
