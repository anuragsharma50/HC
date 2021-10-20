import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

const initialValues = {
    email: '',
    password: '',
    cpassword: ''
}

const onSubmit = values => {
    console.log('Form values',values)
}

const validationSchema = Yup.object({
    email: Yup.string().email('Please enter a valid email address').required('Email Required'),
    password: Yup.string().required('Password Required')
    .min(8, 'Password must be 8 characters or more.')
    .max(20, 'Password must be 20 characters or less.')
    .matches(/[a-zA-Z]/, 'Password must include alphabets'),
    cpassword: Yup.string().required('Confirm Password Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must be same')
})

function SignUpForm() {
    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form className="form-input" id='signup-form'>
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

                <div className="label-error">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <ErrorMessage name="cpassword">
                        {
                            (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                        }
                    </ErrorMessage>
                </div>
                <Field type="password" id="cpassword" name="cpassword" placeholder="Enter your password again" />
            </Form>
        </Formik>
    )
}

export default SignUpForm
