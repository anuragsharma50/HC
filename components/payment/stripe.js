import { useRouter } from "next/router"
import Image from "next/image"
import { useState } from 'react'
import axios from 'axios'
import Styles from './razorpay.module.scss'

import CardIcon from '../../assets/images/card.png'

function stripe({set}) {

    const router = useRouter()
    const [disableState, setDisableState] = useState(false)

    const goToStripePage = () => {
        setDisableState(true)
        axios.post('http://localhost:5500/stripe',{ set },{withCredentials:true}).then(res => {

            window.open(res.data.url,'noopener,noreferrer')
            router.push('/')

        }).catch((err) => {
            console.log(err)
        })
        setDisableState(false)
    }

    return (
        <div className={Styles.stripe}>
            <button className={Styles.button} onClick={goToStripePage} disabled={disableState}>
                Pay with Card <Image src={CardIcon} width={30} height={25} />
            </button>
        </div>
    )
}

export default stripe
