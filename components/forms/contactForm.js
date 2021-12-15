import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function ContactForm({user,setDisableState,setModelState}) {

    const initialValues = {
        name: user && user.username,
        email: user && user.email,
        message: ''
    }
    
    const onSubmit = (values) => {
        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contactus/`,{ ...values },{withCredentials:true}).then((res) => {
            // console.log(res.data)
            // router.push('/')
            setModelState(true)
            setDisableState(false)
        }).catch((e) => {
            // console.log(e.response)
            // if (e.response && e.response.data) {
            //     // console.log(e.response)
            //     // setErrorMessage(e.response.data.message)
            // }
        })
    }
    
    const validationSchema = Yup.object({
        name: Yup.string().required('Please enter your name'),
        email: Yup.string().required('Please enter your email').email('Invalid Email format'),
        message: Yup.string().required('Please enter a message'),
    })

    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form className="form-input" id='write-form'>
                <Field type="text" id="name" name="name" placeholder="Full Name" />
                <ErrorMessage name="name">
                    {
                        (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                    }
                </ErrorMessage>

                <Field type="text" id="idea-title" name="email" placeholder="Email" />
                <ErrorMessage name="email">
                    {
                        (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                    }
                </ErrorMessage>

                <Field style={{height: '200px',resize: 'unset'}} as="textarea" id="message" name="message" placeholder="Type your Message..." /> 
                <ErrorMessage name="message">
                    {
                        (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                    }
                </ErrorMessage>
            </Form>
        </Formik>
    )
}

export default ContactForm
