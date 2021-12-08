import Image from 'next/image'
import { useRouter } from "next/router"
import Link from 'next/link'
import { useState } from 'react'
import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Styles from '../../styles/forgot-password/email.module.scss'

import Logo from '../../assets/images/Logo.png'

function ForgotPassword() {

    // const router = useRouter()
    const [errorMessage, setErrorMessage] = useState('')

    const initialValues = {
        email: ''
    }
    
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Format').required('Please enter a email'),
    })

    const onSubmit = values => {
        console.log(values)
        axios.post('http://localhost:5500/users/forgot-password',{ email : values.email }).then((res) => {
            console.log(res)
            // router.push('/check-email')
        }).catch((e) => {
            if (e.response && e.response.data) {
                console.log(e.response.data.message)
                setErrorMessage(e.response.data.message)
            }
        })
    }

    const removeServerError = (props,e) => {
        setErrorMessage('')
        props.setFieldValue('email', e.target.value)
    }

    return (
        <div className={`${Styles.container} container`}>
            <div className="sub-container">
                <div className={Styles.image}>
                    <Image src={Logo}  />
                </div>
                <div className={Styles.card}>
                    <div className={Styles.cardDetails}>
                        Enter the email address associated with your account and we will send you a link to 
                        reset your password.
                    </div>

                    <Formik 
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {
                            props => (
                                <Form className={`${Styles.formInput} form-input`}>
                                    <label htmlFor="email">Email</label>
                                    <Field type="text" id="email" name="email" onChange={(e) => removeServerError(props,e)} />
                                    {
                                        !errorMessage ?
                                            
                                            <ErrorMessage name="email">
                                                {
                                                    (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                                                }
                                            </ErrorMessage>

                                        :

                                            <span className="error-text">{errorMessage}</span>
                                    }
                                    {/* <ErrorMessage name="email">
                                        {
                                            (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                                        }
                                    </ErrorMessage>
                                    <span className="error-text">{errorMessage}</span> */}
                                    <button className={Styles.btn} type="submit">Submit</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
                <div>
                    Don't have an account? <Link href="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
