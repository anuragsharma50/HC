import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

const initialValues = {
    email: '',
    password: ''
}

const onSubmit = values => {
    console.log('Form values',values)
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),
    password: Yup.string().required('Required'),
})

function SignInForm() {
    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form className="form-input" id='signin-form'>
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
