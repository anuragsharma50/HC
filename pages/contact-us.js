import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from "framer-motion"
import menuItems from '../components/animations/raising'
import styles from '../styles/pageStyles/form-page.module.scss'

import ContactUsImage from '../assets/images/support.png'
import ContactForm from '../components/forms/contactForm'

function ContactUs({user}) {

    const [disableState, setDisableState] = useState(true)
    const [modelState, setModelState] = useState(false)
    const [output, setOutput] = useState({
        count: 0,
        values: {}
    })

    return (
        <>
            {/* <LimitedIdeas modelState={modelState} setModelState={setModelState} output={output} /> */}
            <motion.div 
                className={`${styles.container} container`}
                variants={menuItems}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="image">
                    <div className="img">
                        <Image src={ContactUsImage} alt="contact us" />
                    </div>
                </div>

                <div className="form">
                    <div className="info">Contact us form is not working yet please mail us at <Link href="mailto:support@happiecelebrations.com" passHref={true}>support@happiecelebrations.com</Link></div>
                    <div className="heading">
                        <h2>Gift</h2>
                    </div>

                    <h3 className="form-title">Enter details</h3>
                    
                    <ContactForm user={user} setDisableState={setDisableState} setModelState={setModelState} setOutput={setOutput} />

                    <div className="submit">
                        <button form="contact-form" type="submit" className="submit-btn" disabled={disableState}>Submit</button>
                    </div>

                </div>
            </motion.div>
        </>
    )
}

export default ContactUs
