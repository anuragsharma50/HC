import { Formik,Form,Field} from 'formik'
import * as Yup from 'yup'

const initialValues = {
    budget: 1,
    relation: 'friend',
    age: '',
    ocassion: 'birthday',
    title: '',
    description: '',
}

const onSubmit = values => {
    console.log('Form values',values)
}

const validationSchema = Yup.object({
    age: Yup.number().required('Required').min(3),
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
})

function WriteForm() {
    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                props => (
                    <Form className="form-input" id='write-form'>
                        <label htmlFor="budget">Choose your budget catagory</label>
                        <div className="slider-container">
                            <Field type="range" min="1" max="5" value={props.values.budget} className="budget-slider" id="budget" />
                            <ul>
                                <li>Low</li>
                                <li>Medium</li>
                                <li>High</li>
                            </ul>
                        </div>

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

                        <Field type="text" id="idea-title" name="title" placeholder="Idea Title" />
                        <Field as="textarea" id="description" name="description" placeholder="Description" /> 
                    </Form>
                )
            }
        </Formik>
    )
}

export default WriteForm
