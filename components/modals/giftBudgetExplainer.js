import React,{ useState } from 'react'
import Modal from 'react-modal';
import { useRouter } from "next/router";

import Styles from './modal.module.scss'

function GiftBudgetExplainer({modelState,setModelState}) {

    const router = useRouter()

    return (
        <Modal isOpen={modelState} className={Styles.modal}>
            <h2 className={Styles.modalTitle}>How to choose budget in Gift form</h2>
            <div className={Styles.modalContent}> 
                <p>Your idea is submitted successfully for manual checking,you will be notified when your 
                    idea will be accepted or rejected. </p> 
                <br/ >
                <p>Do you Understand?</p>
            </div>
            <div className={Styles.modalButtons}>
                <button className={`${Styles.secondry} ${Styles.btn}`} onClick={() => router.push('/')}>Watch Video</button>
                <button className={Styles.btn} onClick={() => setModelState(false)}>Understand</button>
            </div>
        </Modal>
    )
}

export default GiftBudgetExplainer
