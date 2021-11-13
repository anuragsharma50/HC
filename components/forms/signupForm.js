import { useState } from 'react'
import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useRouter } from "next/router";

const SignUpForm = ({updateUser}) => {

    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter()

    const initialValues = {
        name: '',
        email: '',
        password: '',
    }
    
    const onSubmit = values => {    
        axios.post('http://localhost:5500/auth/signup',{
            username : values.name,
            email : values.email,
            password : values.password,
        }).then((res) => {
            console.log(res.data)
            updateUser()
            router.push('/',undefined,{shallow=true})
        }).catch((e) => {
            if (e.response && e.response.data) {
                console.log(e.response.data.message)
                setErrorMessage(e.response.data.message)
            }
        })
    }
    
    const validationSchema = Yup.object({
        name: Yup.string().required('Please your name'),
        email: Yup.string().email('Please enter a valid email address').required('Email Required'),
        password: Yup.string().required('Password Required')
        .min(8, 'Password must be 8 characters or more.')
        .max(20, 'Password must be 20 characters or less.')
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
