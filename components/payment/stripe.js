import { useRouter } from "next/router"
import Image from "next/image"
import axios from 'axios'
import Styles from './razorpay.module.scss'

import CardIcon from '../../assets/images/card.png'

function stripe({set}) {

    const router = useRouter()
    const goToStripePage = () => {
        axios.post('http://localhost:5500/stripe',{ set },{withCredentials:true}).then(res => {

            window.open(res.data.url,'noopener,noreferrer')
            router.push('/')

        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className={Styles.stripe}>
            <button className={Styles.button} onClick={goToStripePage}>
                Pay with Card <Image src={CardIcon} width={30} height={25} />
            </button>
        </div>
    )
}

export default stripe
