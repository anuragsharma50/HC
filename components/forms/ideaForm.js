import { useRouter } from "next/router"
import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import SelectSearch from 'react-select-search'
import axios from 'axios'
import relations from '../relations/relations'

import Styles from './idea.module.scss'

function IdeaForm({from,user,setDisableState,setModelState,setOutput}) {

    const router = useRouter()

    const initialValues = {
        budget: from === 'wish' ? 50 : 10,
        relation: 'friend',
        age: '',
        ocassion: 'birthday',
        gender: 'male'
    }
    
    const onSubmit = values => {
        // setDisableState(true)
        // if(!user){
        //     router.push('/signin')
        // }
        // console.log('Form values',values)
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${from}/count?ocassion=${values.ocassion}&relation=${values.relation}&age=${values.age}&gender=${values.gender}&budget=${values.budget+10}`,
        {withCredentials:true}).then((res) => {
            // console.log(res.data)
            if(res.data.ideasCount === 0) {
                setOutput({ count: res.data.ideasCount,values,from })
                setModelState(true)
            }else{
                router.push({pathname: '/idea',
                query: { ...values,from }})
                // axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/payment`,{withCredentials:true}).then((res) => {
                //     // console.log(res.data)
                // }).catch((e) => {
                //     router.push('/pricing')
                //     // console.log(e.response)
                //     // console.log(e)
                //     // if (e.response && e.response.data) {
                //     //     // console.log(e.response)
                //     //     // setErrorMessage(e.response.data.message)
                //     // }
                // })
            }
            setDisableState(false)
        }).catch((e) => {
            // console.log(e.response)
            // console.log(e)
            // if (e.response && e.response.data) {
            //     // console.log(e.response)
            //     // setErrorMessage(e.response.data.message)
            // }
        })
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
                <Form className={`${Styles.formInput} form-input`} id='idea-form'>

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

export default IdeaForm
