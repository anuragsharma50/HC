import Image from 'next/image'
import { useRouter } from "next/router"
import Link from 'next/link'
import { useState } from 'react'
import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Styles from '../../styles/forgot-password/email.module.scss'

import Logo from '../../assets/images/Logo.png'

const User = () => {

    const router = useRouter()
    const { id } = router.query
    const [errorMessage, setErrorMessage] = useState('')

    const initialValues = {
        password: ''
    }
    
    const validationSchema = Yup.object({
        password: Yup.string().required('Please enter a password')
        .min(8, 'Password must be 8 characters or more.')
        .max(20, 'Password must be 20 characters or less.')
        .matches(/[a-zA-Z]/, 'Password must include alphabets'),
    })

    const onSubmit = values => {
        console.log(values)
        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/new-password`,{ resetToken:id, password:values.password }).then((res) => {
            // console.log(res)
            // router.push('/check-email')
        }).catch((e) => {
            if (e.response && e.response.data) {
                // console.log(e.response.data.message)
                setErrorMessage(e.response.data.message)
            }
        })
    }

    const removeServerError = (props,e) => {
        setErrorMessage('')
        props.setFieldValue('password', e.target.value)
    }

    return (
        <div className={`${Styles.container} container`}>
        <div className="sub-container">
            <div className={Styles.image}>
                <Image src={Logo}  alt="Happie Celebrations" />
            </div>
            <div className={Styles.card}>
                <div className={Styles.cardDetails}>
                    Please Enter a password
                </div>

                <Formik 
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {
                        props => (
                            <Form className={`${Styles.formInput} form-input`}>
                                <label htmlFor="password">Password</label>
                                <Field type="password" id="password" name="password" placeholder="Password" onChange={(e) => removeServerError(props,e)} />
                                {
                                    errorMessage ?
                                        <span className="error-text">{errorMessage}</span>
                                    :
                                        <ErrorMessage name="password">
                                            {
                                                (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                                            }
                                        </ErrorMessage>
                                }
                                <button className={Styles.btn} type="submit">Submit</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
            <div>
                Remember your password? <Link href="/signin">Sign in</Link>
            </div>
        </div>
    </div>
    )
}

export default User