import { useRouter } from "next/router"
import Head from 'next/head'
import { useState,useEffect } from 'react'
import Styles from '../styles/pageStyles/referral.module.scss'
import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader"
import ReferButtons from "../components/referButtons/referButtons"


function Referral({user,loading}) {

    const router = useRouter()
    const [serverError, setServerError] = useState('')
    const [disableState, setDisableState] = useState(false)

    const initialValues = {
        code: '',
    }

    const validationSchema = Yup.object({
        code: Yup.string().required('Please enter your referral code').length(6,'Invalid code')
        .matches(/^[a-zA-Z0-9]+$/, 'Invalid code'),
    })
    
    const onSubmit = values => {
        setDisableState(true)
        // console.log(values)
        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/referral`,{ referralcode : values.code },
            {withCredentials:true}).then((res) => {
            // console.log(res)
            setDisableState(false)
        }).catch((e) => {
            // console.log(e)
            if (e.response && e.response.data) {
                // console.log(e.response.data.message)
                setServerError(e.response.data.message)
            }
        })
    }

    const removeServerError = (props,e) => {
        setServerError('')
        props.setFieldValue('code', e.target.value)
        setDisableState(false)
    }

    useEffect(() => {
        if(!user && !loading) {
            router.push('/signin')
        }
    }, [user,loading])

    if(loading) {
        return (
            <div className={`${Styles.container} container`}>
                <div className="loading">
                    <ClipLoader color="#0677c1" loading={loading} size={50} />
                </div>
            </div>
        )
    }

    if(user && user.referralcode) {
        return (
            <div className={`${Styles.container} container`}>
                <div className="sub-container">
                    <div className="heading">
                        <h2>Referral</h2>
                    </div>

                    <div className={Styles.referralCode}>{user.referralcode}</div>
                    
                    <ReferButtons code={user && user.referralcode} />

                    <div className={Styles.details}>
                        Send this code to your friend and when they use this code, you both will get one more free idea.
                    </div>
                    <div className={Styles.details}>
                        Note: They have to enter referral code before using their free idea.
                    </div>

                </div>
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>Referral | Happie Celebrations</title>
                <meta name="description" content="refer to user friend and you both will get a free idea set" />
            </Head>

            <div className={`${Styles.container} container`}>
                <div className="sub-container">
                    <div className="heading">
                        <h2>Referral</h2>
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
                                        <button type="submit" className={Styles.btn} disabled={disableState}>Submit</button>
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

                    <div className={Styles.details}>
                        Enter your friend&apos;s referral code and you both will get one more free attempt.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Referral
