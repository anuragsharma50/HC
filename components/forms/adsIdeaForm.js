import { useRouter } from "next/router"
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import SelectSearch from 'react-select-search'
import relations from '../relations/relations'

import Styles from './idea.module.scss'

function AdsIdeaForm({user,setDisableState}) {

    const router = useRouter()

    const initialValues = {
        catagory: 'wish',
        budget: 10,
        relation: 'friend',
        age: '',
        ocassion: 'birthday',
        gender: 'male'
    }
    
    const onSubmit = values => {
        setDisableState(true)
        if(!user){
            router.push('/signin')
        } else{
            router.push({pathname: '/idea-with-ads', query: { ...values }})
        }
    }
    
    const validationSchema = Yup.object({
        age: Yup.number().required('Please enter age').min(0,'Age can not be negative').max(120,'Age must me maximum of 120 years'),
    })

    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                props => (
                <Form className={`${Styles.formInput} form-input`} id='ads-idea-form'>

                    <div className="radio-container">
                        <label>Select Catagory to write idea</label>
                        <div className="radio-buttons" role="group" aria-labelledby="my-radio-group">
                            <div className="radio-item">
                                <Field type="radio" id="wish" name="catagory" value="wish" />
                                <label htmlFor="wish">Wish</label>
                            </div>
                            <div className="radio-item">
                                <Field type="radio" id="celebration" name="catagory" value="celebration" />
                                <label htmlFor="celebration">Celebration</label>
                            </div>
                            <div className="radio-item">
                                <Field type="radio" id="gift" name="catagory" value="gift" />
                                <label htmlFor="gift">Gift</label>
                            </div>
                        </div>
                    </div>

                    <div className="radio-container">
                        <label>Select Gender</label>
                        <div className="radio-buttons" role="group" aria-labelledby="my-radio-group">
                            <div className="radio-item">
                                <Field type="radio" id="male" name="gender" value="male" />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div className="radio-item">
                                <Field type="radio" id="female" name="gender" value="female" />
                                <label htmlFor="female">Female</label>
                            </div>
                            <div className="radio-item">
                                <Field type="radio" id="other" name="gender" value="other" />
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>
                    </div>

                    <label htmlFor="budget">Enter your maximum budget</label>
                    <div className="slider-container">
                        <Field type="range" value={props.values.budget} className="budget-slider" id="budget" />
                        <ul>
                            <li>Low</li>
                            <li>Medium</li>
                            <li>High</li>
                        </ul>
                    </div>

                    <div className="relation-age">
                        <div className="select-container">
                            <label htmlFor="relation">He/She is your</label>
                            <SelectSearch  
                                className='select-search'
                                name="relation"
                                id="relation"
                                // closeOnSelect={false}
                                printOptions="on-focus"
                                placeholder="Select Relation"
                                options={relations}
                                value={props.values.relation}
                                onChange={(e) => props.setFieldValue('relation', e)}
                            />
                        </div>

                        <div className="age-container">
                            <label htmlFor="age">Age</label><br />
                            <Field type="number" min="1" id="age" name="age" />
                        </div>
                    </div>

                    <ErrorMessage name="age">
                        {
                            (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                        }
                    </ErrorMessage>

                    <div className="select-container">
                        <label htmlFor="ocassion">Ocassion Name</label><br />
                        <SelectSearch  
                            className='select-search'
                            name="ocassion"
                            id="ocassion"
                            // closeOnSelect={false}
                            printOptions="on-focus"
                            placeholder="Select Ocassion"
                            options={[
                                { value: 'new year', name: 'New Year' },
                                { value: 'birthday', name: 'Birthday' },
                                { value: 'christmas', name: 'Christmas' },
                                { value: 'marriage anniversary', name: 'Marriage Anniversary' },
                                { value: "valentine's day", name: "Valentine's Day" },
                                { value: "propose", name: "Propose" },
                                { value: "propose-marriage", name: "Propose - Marriage" },
                            ]}
                            value={props.values.ocassion}
                            onChange={(e) => props.setFieldValue('ocassion', e)}
                        />  
                    </div>           
                </Form>
                )
            }
        </Formik>
    )
}

export default AdsIdeaForm
