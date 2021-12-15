import { useRouter } from "next/router";
import { useState } from 'react';
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'

import SelectSearch from 'react-select-search';
import axios from 'axios'
import IdeaSubmitted from '../modals/ideaSubmitted';

function WriteForm({user,setDisableState,setModelState}) {

    const router = useRouter()

    const initialValues = {
        budget: 0,
        relation: ['friend'],
        minAge: '',
        maxAge: '',
        ocassion: ['new year'],
        title: '',
        description: '',
        gender: 'male',
        catagory: 'wish',
        gendercheckbox: true,
        budgetcheckbox: true,
    }
    
    const onSubmit = (values,{resetForm}) => {
        setDisableState(true)
        if(!user){
            router.push('/signin')
        }
        if(!values.gendercheckbox) {
            delete values.gender
        }
        if(!values.budgetcheckbox) {
            delete values.budget
        }
        delete values.gendercheckbox
        delete values.budgetcheckbox
        // console.log('Form values',values)
        resetForm(initialValues)
        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${values.catagory}/`,{ ...values },{withCredentials:true}).then((res) => {
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
        minAge: Yup.number().required('Please enter min age').min(0,'Age can not be negative').max(120,'Age must me maximum of 120 years'),
        maxAge: Yup.number().required('Please enter max age').min(0,'Age can not be negative').max(120,'Age must me maximum of 120 years'),
        title: Yup.string().required('Please enter a title').max(80,'You have exceeded the maximum character limit'),
        description: Yup.string().required('Please enter a description'),
        relation: Yup.array().min(1, 'Choose atleast one relation'),
        ocassion: Yup.array().min(1, 'Choose atleast one ocassion'),
    })

    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                (props) => (
                    <Form className="form-input" id='write-form'>

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

                        <div className="relation-ocassion">
                            <div className="select-container">
                                <label htmlFor="relation">Your Relation with them</label>
                                <SelectSearch  
                                    className='select-search'
                                    name="relation"
                                    id="relation"
                                    // closeOnSelect={false}
                                    printOptions="on-focus"
                                    multiple
                                    placeholder="Select Relation"
                                    options={[
                                        { value: 'friend', name: 'Friend' },
                                        { value: 'husband', name: 'Husband' },
                                        { value: 'teacher', name: 'Teacher' },
                                        { value: 'grandfather', name: 'Grandfather' },
                                        { value: 'brother', name: 'Brother' },
                                        { value: 'father', name: 'Father' },
                                        { value: 'mother', name: 'Mother' },
                                        { value: 'sister', name: 'Sister' },
                                    ]}
                                    value={props.values.relation}
                                    onChange={(e) => props.setFieldValue('relation', e)}
                                />  
                                <ErrorMessage name="relation">
                                    {
                                        (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                                    }
                                </ErrorMessage>
                            </div>

                            <div className="select-container">
                                <label htmlFor="ocassion">Ocassion Name</label><br />
                                <SelectSearch  
                                    className='select-search'
                                    name="ocassion"
                                    id="ocassion"
                                    // closeOnSelect={false}
                                    printOptions="on-focus"
                                    multiple
                                    placeholder="Select Ocassion"
                                    options={[
                                        { value: 'new year', name: 'New Year' },
                                        { value: 'birthday', name: 'Birthday' },
                                        { value: 'christmas', name: 'Christmas' },
                                    ]}
                                    value={props.values.ocassion}
                                    onChange={(e) => props.setFieldValue('ocassion', e)}
                                />  
                                <ErrorMessage name="ocassion">
                                    {
                                        (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                                    }
                                </ErrorMessage>
                            </div>
                        </div>

                        <div className="multi-inputs">
                            <div className="age-gender">
                                <div className="ages">
                                    <div className="age-container">
                                        <label htmlFor="minAge">Min Age</label><br />
                                        <Field type="number" min="1" max="120" name="minAge" />
                                    </div>
                                    <div className="age-container">
                                        <label htmlFor="maxAge">Max Age</label><br />
                                        <Field type="number" min="1" max="120" name="maxAge" />
                                    </div>
                                </div>
            
                                <div className="radio-container">
                                    <div>
                                        <Field type="checkbox" name="gendercheckbox" id="gendercheckbox" className="checkbox" />
                                        <label htmlFor="gender-radio" className={(!props.values.gendercheckbox ? 'disable' : undefined )}>Gender</label>
                                    </div>
                                    <div id="gender-radio" className="radio-buttons" role="group" aria-labelledby="my-radio-group">
                                        <div className="radio-item">
                                            <Field type="radio" id="male" name="gender" value="male" disabled={!props.values.gendercheckbox} />
                                            <label htmlFor="male" className={(!props.values.gendercheckbox ? 'disable' : undefined )}>Male</label>
                                        </div>
                                        <div className="radio-item">
                                            <Field type="radio" id="female" name="gender" value="female" disabled={!props.values.gendercheckbox} />
                                            <label htmlFor="female" className={(!props.values.gendercheckbox ? 'disable' : undefined )}>Female</label>
                                        </div>
                                        <div className="radio-item">
                                            <Field type="radio" id="other" name="gender" value="other" disabled={!props.values.gendercheckbox} />
                                            <label htmlFor="other" className={(!props.values.gendercheckbox? 'disable' : undefined )}>Other</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="slider-container">
                                <div>
                                    <Field type="checkbox" name="budgetcheckbox" id="budgetcheckbox"  className="checkbox" />
                                    <label htmlFor="budget" className={(!props.values.budgetcheckbox ? 'disable' : undefined )}>Enter your maximum budget</label>
                                </div>
                                <div className="slider">
                                <Field type="range" value={props.values.budget} 
                                    id="budget" 
                                    className={`budget-slider ${!props.values.budgetcheckbox ? 'slider-disable' : undefined }`}
                                    disabled={!props.values.budgetcheckbox} 
                                />
                                    <ul className={(!props.values.budgetcheckbox ? 'disable' : undefined )}>
                                        <li>Low</li>
                                        <li>Medium</li>
                                        <li>High</li>
                                    </ul>
                                </div>
                            </div>
                        </div>        

                        <ErrorMessage name="minAge">
                            {
                                (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                            }
                        </ErrorMessage>
                        <ErrorMessage name="maxAge">
                            {
                                (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                            }
                        </ErrorMessage>

                        <Field type="text" id="idea-title" name="title" placeholder="Idea Title" />

                        <ErrorMessage name="title">
                            {
                                (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                            }
                        </ErrorMessage>

                        <Field as="textarea" id="description" name="description" placeholder="Description" /> 

                        <ErrorMessage name="description">
                            {
                                (ErrorMessage) => <span className="error-text">{ErrorMessage}</span>
                            }
                        </ErrorMessage>
                    </Form>
                )
            }
        </Formik>
    )
}

export default WriteForm
