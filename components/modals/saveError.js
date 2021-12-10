import React from 'react'
import Modal from 'react-modal';

import Styles from './modal.module.scss'

function SaveError({modelState,setModelState,errorMessage,errorTitle}) {
    return (
        <Modal isOpen={modelState} overlayClassName={`${Styles.overlay} ReactModal__Overlay`} className={Styles.modal} ariaHideApp={false}>
            <h2 className={Styles.modalTitle}>{errorTitle}</h2>
            <div className={Styles.modalContent}> 
                <p>{errorMessage}</p> 
                {/* <br/ > */}
            </div>
            <div className={Styles.modalButtons}>
                <button className={Styles.btn} onClick={() => setModelState(false)}>Okay</button>
            </div>
        </Modal>
    )
}

export default SaveError
