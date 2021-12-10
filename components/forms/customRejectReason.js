import { useState } from 'react'
import Styles from '../../styles/pageStyles/referral.module.scss'
import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function CustomRejectReason({data,disableState2,setDisableState2,setDisableState,setData,fetchUnApprovedIdeas}) {

    const [serverError, setServerError] = useState('')

    const initialValues = {
        customMessage: '',
    }
    
    const validationSchema = Yup.object({
        customMessage: Yup.string().required('Please enter a message').min(6,'Message is too small')
        .max(35,'Message is too large'),
    })
    
    const onSubmit = values => {
        console.log(values.customMessage)
        axios.patch('http://localhost:5500/approver/rejectIdea',
        {_id:data._id,catagory: data.catagory,reason:values.customMessage},
        {withCredentials:true}).then((res) => {
            console.log(res.data)
            setData([])
            fetchUnApprovedIdeas()
            setDisableState2(false)
        }).catch((e) => {
            if (e.response && e.response.data) {
                console.log(e.response.data.error)
                setServerError(e.response.data.error)
            }
        })
    }

    const removeServerError = (props,e) => {
        setServerError('')
        props.setFieldValue('customMessage', e.target.value)
        setDisableState2(false)
        setDisableState(true)
    }

    return (
        <div>
            <Formik 
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {props => (
                    <Form className={Styles.referralForm}>
                        <div className={Styles.inputs}>
                            <Field type="text" id="customMessage" name="customMessage" className={Styles.input} onChange={(e) => removeServerError(props,e)} />
                            <button type="submit" className={Styles.btn} disabled={disableState2}>Send</button>
                        </div>
                        {
                            !disableState2 &&
                            <>
                                <ErrorMessage name="customMessage">
                                    {
                                        (ErrorMessage) => <span className={Styles.errorText}>{ErrorMessage}</span>
                                    }
                                </ErrorMessage>
                                {
                                    serverError && <span className={Styles.errorText}>{serverError}</span>
                                }
                            </>
                        }
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CustomRejectReason
