import Image from 'next/image'
import { useEffect } from 'react'

function success() {
    useEffect(() => {
        window.close();
    }, [])

    return (
        <div className="container" >
            <div className="sub-container">
                {/* <div className={Styles.imageContainer}>
                    <Image width={200} height={200} src={SuccessImage} />
                </div>
                <h2>Payment Successful</h2>
                <br />
                <p>Page will automatically close in few seconds</p> */}
            </div>
        </div>
    )
}

export default success
