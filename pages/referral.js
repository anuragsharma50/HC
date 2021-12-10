import { useState } from 'react'
import Styles from '../styles/pageStyles/referral.module.scss'
import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function referral() {

    const [serverError, setServerError] = useState('')
    const [disableState, setDisableState] = useState(false)

    const initialValues = {
        code: '',
    }
    
    const validationSchema = Yup.object({
        code: Yup.string().required('Please enter your referral code').length(6,'Invalid code')
        .matches(/^[a-zA-Z0-9]+$/, 'Invalid code'),
    })
    
    const onSubmit = values => {
        setDisableState(true)
        console.log(values)
        axios.post('http://localhost:5500/users/referral',{ referralcode : values.code },
            {withCredentials:true}).then((res) => {
            console.log(res)
            setDisableState(false)
        }).catch((e) => {
            console.log(e)
            if (e.response && e.response.data) {
                console.log(e.response.data.message)
                setServerError(e.response.data.message)
            }
        })
    }

    const removeServerError = (props,e) => {
        setServerError('')
        props.setFieldValue('code', e.target.value)
        setDisableState(false)
    }

    return (
        <div className={`${Styles.container} container`}>
            <div className="sub-container">
                <div className="heading">
                    <h2>Referral</h2>
                </div>
                    <Formik 
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {props => (
                            <Form className={Styles.referralForm}>
                                <div className={Styles.inputs}>
                                    <Field type="text" id="code" name="code" className={Styles.input} onChange={(e) => removeServerError(props,e)} />
                                    <button type="submit" className={Styles.btn} disabled={disableState}>Submit</button>
                                </div>
                                <ErrorMessage name="code">
                                    {
                                        (ErrorMessage) => <span className={Styles.errorText}>{ErrorMessage}</span>
                                    }
                                </ErrorMessage>
                                {
                                    serverError && <span className={Styles.errorText}>{serverError}</span>
                                }
                            </Form>
                        )}
                    </Formik>

                <div className={Styles.details}>
                    Enter your friend's referral code and you both will get one more free attempt.
                </div>
            </div>
        </div>
    )
}

export default referral
