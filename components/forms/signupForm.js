import { useRouter } from "next/router"
import { useState } from 'react'
import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import goodEmails from '../emails/goodEmails'
import {num,alphabets} from '../emails/badEmails'

const SignUpForm = ({updateUser,setDisableState}) => {

    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter()

    const initialValues = {
        name: '',
        email: '',
        password: '',
    }
    
    const onSubmit = values => {   
        setErrorMessage("")
        setDisableState(true)

        const emailDomain = values.email.split("@")[1]
        let badEmail = false
        
        if(!goodEmails.includes(emailDomain)){
            badEmail = true
            if(!isNaN(emailDomain)){
                badEmail = num.includes(emailDomain)
            }else{
                badEmail = alphabets[emailDomain[0]].includes(emailDomain)
            }
        }

        if(!badEmail){
            axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`,{
                username : values.name,
                email : values.email,
                password : values.password,
            },{withCredentials:true}).then((res) => {
                // console.log(res.data)
                updateUser()
                router.push('/verify-account')
            }).catch((e) => {
                if (e.response && e.response.data) {
                    // console.log(e.response.data.message)
                    setErrorMessage(e.response.data.message)
                }
                setDisableState(false)
            })
        } else{
            setErrorMessage("Sorry you are not allowed to signup using this email address.")
            setDisableState(false)
        }
    }
    
    const validationSchema = Yup.object({
        name: Yup.string().required('Please your name'),
        email: Yup.string().email('Please enter a valid email address').required('Please provide a Email'),
        password: Yup.string().required('please provide a Password')
        .min(8, 'Password is too short')
        .max(20, 'Password is too long')
        .matches(/[a-zA-Z]/, 'Password must include alphabets'),
    })

    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form className="form-input" id='signup-form'>
                <div className="error-text top-error">{errorMessage}</div>
                <div className="label-error">
                    <label htmlFor="name">Name</label>
                    <ErrorMessage name="name">
                        {
                            (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                        }
                    </ErrorMessage>
                </div>
                <Field type="text" id="name" name="name" placeholder="Enter your name" />

                <div className="label-error">
                    <label htmlFor="email">Email</label>
                    <ErrorMessage name="email">
                        {
                            (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                        }
                    </ErrorMessage>
                </div>
                <Field type="text" id="email" name="email" placeholder="user@gmail.com" />

                <div className="label-error">
                    <label htmlFor="password">Password</label>
                    <ErrorMessage name="password">
                        {
                            (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                        }
                    </ErrorMessage>
                </div>
                <Field type="password" id="password" name="password" placeholder="Password" />
            
            </Form>
        </Formik>
    )
}

export default SignUpForm
