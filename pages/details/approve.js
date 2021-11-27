import Image from 'next/image'
import { useRouter } from "next/router"
import axios from 'axios'
import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Styles from '../../styles/details/approve.module.scss'

import GiftImage from '../../assets/images/Gift.png'
import { useEffect, useState } from 'react'

function Approve({user}) {

    const router = useRouter()

    const [status, setStatus] = useState('')
    const [serverError, setServerError] = useState('')

    console.log(status)

    const initialValues = {
        code: '',
    }
    
    const validationSchema = Yup.object({
        code: Yup.string().required('Please enter your Secret code').length(6,'Invalid code')
        .matches(/^[a-zA-Z0-9]+$/, 'Invalid code'),
    })
    
    const onSubmit = values => {
        console.log(values)
        axios.post('http://localhost:5500/approver/verify',{ uniqueCode : values.code },
            {withCredentials:true}).then((res) => {
            console.log(res)
            router.push('/details/approve-rules')
        }).catch((e) => {
            console.log(e)
            if (e.response && e.response.data) {
                console.log(e.response.data.message)
                setServerError(e.response.data.message)
            }
        })
    }

    const removeServerError = (props,e) => {
        setServerError('')
        props.setFieldValue('code', e.target.value)
    }

    const becomeApprover = () => {
        axios.get("http://localhost:5500/approver/" ,{withCredentials:true}).then((res) => {
            checkStatus()
        }).catch((e) => {
            console.log(e.response)
        })
    }

    const checkStatus = () => {
        axios.get("http://localhost:5500/approver/status" ,{withCredentials:true}).then((res) => {
            console.log(res.data)
            router.push('/details/approve-rules')
        }).catch((e) => {
            if (e.response && e.response.data) {
                console.log(e.response.data)
                setStatus(e.response.data.error)
            }
        })
    }

    useEffect(() => {
        if(!user){
            router.push('/signin')
        }
        checkStatus()
    }, [])

    return (
        <div className={`${Styles.container} container`}>
            { status === 'User not found' ?
                <div className={Styles.firstLook}>
                    <div className={Styles.img}> <Image src={GiftImage} alt="approver" /> </div>
                    <div className={Styles.content}>
                    <h3>Become an approver</h3>
                    <button onClick={becomeApprover} className={`${Styles.mBtn} btn`}>Click here</button>
                    </div>
                </div>

                :
                
                <div className="sub-container">
                    <div className="heading">
                        <h2>Secret Code</h2>
                    </div>
                    <Formik 
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {props => (
                            <Form className={Styles.referralForm}>
                                <div className={Styles.inputs}>
                                    <Field type="text" id="code" name="code" className={Styles.input} onChange={(e) => removeServerError(props,e)} />
                                    <button type="submit" className={Styles.btn}>Submit</button>
                                </div>
                                <ErrorMessage name="code">
                                    {
                                        (ErrorMessage) => <span className={Styles.errorText}>{ErrorMessage}</span>
                                    }
                                </ErrorMessage>
                                {
                                    serverError && <span className={Styles.errorText}>{serverError}</span>
                                }
                            </Form>
                        )}
                    </Formik>
                </div>
            }
        </div>
    )
}

export default Approve
