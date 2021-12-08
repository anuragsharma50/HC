import { useRouter } from "next/router"
import { useState } from 'react'
import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const SignInForm = ({user,updateUser}) => {
    
    const router = useRouter()
    const [errorMessage, setErrorMessage] = useState('')

    const initialValues = {
        email: '',
        password: ''
    }
    
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Format').required('Required'),
        password: Yup.string().required('Required'),
    })

    const onSubmit = values => {
        axios.post('http://localhost:5500/auth/signin',{
            email : values.email,
            password : values.password,
        }).then((res) => {
            console.log(res)
            updateUser()
            if(user.unverified){
                router.push('/verify-account')
            }else{
                router.push('/')
            }
        }).catch((e) => {
            if (e.response && e.response.data) {
                console.log(e.response.data.message)
                setErrorMessage(e.response.data.message)
            }
        })
    }

    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form className="form-input" id='signin-form'>
                <div className="error-text top-error">{errorMessage}</div>
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

export default SignInForm
