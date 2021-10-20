import { Formik,Form,Field} from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: '',
    relation: 'friend',
    age: '',
    ocassion: 'birthday'
}

const onSubmit = values => {
    console.log('Form values',values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    age: Yup.number().required('Required').min(3),
})

function WishForm() {
    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form className="form-input" id='wish-form'>
                <div className="label-error">
                <label htmlFor="name">Nick name/Pet Name/ What you call them.</label>
                    {/* <ErrorMessage name="email">
                        {
                            (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                        }
                    </ErrorMessage> */}
                </div>
                <Field type="text" id="name" name="name" placeholder="Enter name of celebrant" />

                <div className="relation-age">
                    <div className="relation-container">
                        <label htmlFor="relation">Your Relation with them</label>
                        <Field as="select" name="relation" id="relation">
                            <option value="friend">Friend</option>
                            <option value="sibling">Sibling</option>
                            <option value="father">Father</option>
                            <option value="mother">Mother</option>
                        </Field>
                    </div>

                    <div className="age-container">
                        <label htmlFor="age">Age</label><br />
                        <Field type="number" min="3" id="age" name="age" />
                    </div>
                </div>

                <label htmlFor="ocassion">Ocassion Name</label><br />
                <Field as="select" name="ocassion" id="ocassion">
                    <option value="Birthday">Birthday</option>
                    <option value="New Year">New Year</option>
                    <option value="Diwali">Diwali</option>
                    <option value="Christmas">Christmas</option>
                </Field>

                

            </Form>
        </Formik>
    )
}

export default WishForm
