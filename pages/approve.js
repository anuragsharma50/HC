import Head from 'next/head'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CustomRejectReason from '../components/forms/customRejectReason'
import Styles from '../styles/pageStyles/approve.module.scss'

const reasonList = [
    {id:1,reason:"Please don't use bad words"},
    {id:2,reason:"Idea already exists"},
    {id:3,reason:"Idea is not making sense"},
    {id:4,reason:"Ages are not appropriate"},
    {id:5,reason:"Budget is not appropriate"},
    {id:6,reason:"Gender is not appropriate"},
    {id:7,reason:"Relation is not appropriate"},
    {id:8,reason:"Ocassion is not appropriate"},
    {id:9,reason:"Relations are not appropriate"},
    {id:10,reason:"Ocassions are not appropriate"}
]

function Approve() {
    const [showReason, setShowReason] = useState(false)
    const [reasonId, setReasonId] = useState(0)
    const [data, setData] = useState([])
    const [serverError, setServerError] = useState('')
    const [disableState, setDisableState] = useState(true)
    const [disableState2, setDisableState2] = useState(true)

    const approveIdea = () => {
        axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/approver/approveIdea`,{_id:data._id,catagory: data.catagory},
        {withCredentials:true}).then((res) => {
            // console.log(res.data)
            setData([])
            fetchUnApprovedIdeas()
        }).catch((e) => {
            if (e.response && e.response.data) {
                // console.log(e.response.data.error)
                setServerError(e.response.data.error)
            }
        })
        window.scrollTo({top:0,left:0,behaviour: 'smooth'})
    }

    const rejectIdea = () => {
        setDisableState(true)
        axios.patch(`${process.NEXT_PUBLIC_BACKEND_URL}/approver/rejectIdea`,
        {_id:data._id,catagory: data.catagory,reason:reasonList[reasonId-1].reason},
        {withCredentials:true}).then((res) => {
            // console.log(res.data)
            setData([])
            fetchUnApprovedIdeas()
            setDisableState(false)
        }).catch((e) => {
            if (e.response && e.response.data) {
                // console.log(e.response.data.error)
                setServerError(e.response.data.error)
            }
        })
        window.scrollTo({top:0,left:0,behaviour: 'smooth'})
    }

    const chooseReason = (id) => {
        setReasonId(id)
        setDisableState(false)
        setDisableState2(true)
    }

    const fetchUnApprovedIdeas = () => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/approver/unapprovedIdea`,{withCredentials:true}).then((res) => {
            // console.log(res.data)
            if(!res.data.gender){
                res.data.gender = 'All'
            }
            setData(res.data)
        }).catch((e) => {
            // console.log(e.response)
            if (e.response && e.response.data) {
                // console.log(e.response.data.error)
                setServerError(e.response.data.error)
            }
        })
    }

    useEffect(() => {
        fetchUnApprovedIdeas()
    }, [])

    if(serverError) {
        return (
            <div className={`${Styles.container} container`}>
                <div className="sub-container">
                    {serverError}
                </div>
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>Approve Ideas | Happie Celebrations</title>
                <meta name="description" content="Approve ideas to make they avaliable for everyone" />
            </Head>

            <div className={`${Styles.container} container`}>
                {
                    serverError ? 
                    <div className="sub-container">
                        {serverError}
                    </div>

                    :

                    <div className="sub-container">
                        <div className="heading">
                            <h2>Approve Ideas</h2>
                        </div>

                        <div className={Styles.values} >
                            <div className={Styles.value}>
                                <h5>Catagory</h5>
                                <p>{data.catagory || <Skeleton height={20} />}</p>
                            </div>
                            <div className={Styles.value}>
                                <h5>Gender</h5>
                                <p>{data.gender || <Skeleton height={20} />}</p>
                            </div>
                            <div className={Styles.value}>
                                <h5>Budget</h5>
                                <p>{data.budget || 0 }</p>
                            </div>
                            <div className={Styles.value}>
                                <h5>Min Age</h5>
                                <p>{data.minAge || <Skeleton height={20} />}</p>
                            </div>
                            <div className={Styles.value}>
                                <h5>Max Age</h5>
                                <p>{data.maxAge || <Skeleton height={20} />}</p>
                            </div>
                            <div className={Styles.value}>
                                <h5>Relation</h5>
                                <div className={Styles.multiple}>
                                    <p>Grandfather</p>
                                </div>
                            </div>
                            <div className={Styles.value}>
                                <h5>Ocassion</h5>
                                <div className={Styles.multiple}>
                                    <p>New Year</p>
                                </div>
                            </div>
                        </div>

                        <div className={`${Styles.heading} heading`}>
                            <h2>{data.title || <Skeleton height={40} />}</h2>
                        </div>

                        <div className="idea-description">
                            {data.description || <Skeleton count={5} />}
                        </div>
                        {/* <div className="nocopy"></div> */}

                        {
                            !showReason ?

                            <div className={Styles.buttons}>
                                <button onClick={() => setShowReason(true)} className={`${Styles.btn} ${Styles.discard}`}>Reject</button>
                                <button onClick={approveIdea} className={`${Styles.btn} ${Styles.accept}`}>Accept</button>
                                <button className={`${Styles.btn} ${Styles.skip}`}>Skip</button>
                            </div>

                            :

                            <div className={Styles.reasons}>
                                <h2>Send Reason</h2>
                                <div className={Styles.reasonList}>
                                    {
                                        reasonList.map((item) => 
                                            <h3 onClick={() => chooseReason(item.id)} key={item.id} className={`${reasonId == item.id && Styles.clicked}`}>
                                                {item.reason}
                                            </h3>
                                        )
                                    }
                                </div>

                                <div className={Styles.reasonButtons}>
                                    <button onClick={() => setShowReason(false)} className={`${Styles.btn} ${Styles.secBtn}`}>Cancel</button>
                                    <button onClick={rejectIdea} className={Styles.btn} disabled={disableState}>Send</button>
                                </div>

                                <br />
                                <h3>Send Other Reason</h3>
                                <CustomRejectReason fetchUnApprovedIdeas={fetchUnApprovedIdeas} data={data} setData={setData} disableState2={disableState2} setDisableState2={setDisableState2} setDisableState={setDisableState} />
                            </div>
                        }
                    </div>
                }  
            </div>
        </>
    )
}

export default Approve
