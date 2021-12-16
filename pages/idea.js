import Image from 'next/image'
import { withRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Styles from '../styles/pageStyles/idea.module.scss'
import Arrow from "../assets/images/arrow.png"
import LimitedIdeas from '../components/modals/limitedIdeas'
import SaveError from '../components/modals/saveError'

function Idea(props) {

    const [data, setData] = useState([])
    const [index, setIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const [set, setSet] = useState(1)
    const [saved, setSaved] = useState([])
    const [modelState, setModelState] = useState(false)
    const [modelState2, setModelState2] = useState(false)
    const [saveError, setSaveError] = useState({})
    const [output, setOutput] = useState({
        count: 0,
        values: {},
    })
    const query = props.router.query

    const fetchIdeas = () => {
        // console.log(query)
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${query.from}?ocassion=${query.ocassion}&relation=${query.relation}&age=${query.age}&gender=${query.gender}&budget=${query.budget+10}&set=${set}`,
        {withCredentials:true}).then((res) => {
            // // console.log(res.data)
            if(!data[0]){
                setData(res.data)
            }else{
                setData([...data,...res.data])
            }
        }).catch((e) => {
            // console.log(e.response)
        })
        setLoading(false)
    }

    const moreIdeas = () => {
        setLoading(true)
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${query.from}/count?ocassion=${query.ocassion}&relation=${query.relation}&age=${query.age}&gender=${query.gender}&budget=${query.budget+10}&set=${set+1}`,
        {withCredentials:true}).then((res) => {
            // console.log(res.data)
            if(res.data.ideasCount < 25) {
                setOutput({ count: res.data.ideasCount,query,set,setSet,user:props.user })
                setModelState(true)
            }else{
                axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/payment`,{withCredentials:true}).then((res) => {
                    // console.log(res.data)
                    setSet(set + 1)
                }).catch((e) => {
                    if(props.user.currency){
                        window.open("/payment",'_blank')
                    }else{
                        window.open("/pricing",'_blank')
                    }
                    // console.log(e.response)
                    // console.log(e)
                    // if (e.response && e.response.data) {
                    //     // console.log(e.response)
                    //     // setErrorMessage(e.response.data.message)
                    // }
                })
            }
        }).catch((e) => {
            // console.log(e.response)
            // console.log(e)
            // if (e.response && e.response.data) {
            //     // console.log(e.response)
            //     // setErrorMessage(e.response.data.message)
            // }
        })
        setLoading(false)
    }

    const save = () => {
        if(saved.length == set*3){
            setSaveError({title: "3 ideas already saved",message:"You can save only 3 ideas at a time."})
            setModelState2(true)
        }else{
            axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${query.from}/save/${data[index]._id}`,
            {withCredentials:true}).then((res) => {
                // console.log(res.data)
                if(!saved.length == 0){
                    setSaved([...saved,index])
                } else{
                    setSaved([index])
                }
            }).catch((e) => {
                if (e.response && e.response.data) {
                    console.log(e.response)
                    if(e.response.data.message === "Unpaid Ideas"){
                        setSaveError({title: "Free Ideas",message:"You need to make payment to save ideas."})
                        setModelState2(true)
                    }else{
                        setSaveError({title: "Already saved",message:"This idea is already saved in your collection."})
                        setModelState2(true)
                    }
                }
                // console.log(e.response.data)
            })
        }
    }

    useEffect(() => {
        fetchIdeas()
    }, [set])

    if(loading) {
        return (
            <div className={`${Styles.container} container`}>
                <div className="sub-container">
                    <div className="loading">
                        <ClipLoader color="#0677c1" loading={loading} size={50} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`${Styles.container} container`}>
            <LimitedIdeas modelState={modelState} setModelState={setModelState} output={output} />
            <SaveError modelState={modelState2} setModelState={setModelState2} errorTitle={saveError.title} errorMessage={saveError.message} />
            <div className="sub-container">
                { data[index] && 
                    <>
                        <div className="heading">
                            <h2>{data[index].title || <Skeleton height={30} />}</h2>
                        </div>

                        <div className="idea-description">
                            {data[index].description || <Skeleton count={5} />}
                        </div>
                    </>
                }

                {
                    !data[index] && 
                        (
                            (index == 25*set  && index > 0) ?
                            <div className="more-ideas"><a onClick={moreIdeas}>Get more ideas</a></div>   :
                            <div className="more-ideas">More ideas are not avaliable in this catagory. you can again take a look at previous ideas or 
                                <span style={{paddingLeft:'3px'}}><Link href="/"> go to homepage.</Link></span>
                            </div> 
                        )
                }

                <div className="idea-buttons">
                    <button className="sec-btn btn" onClick={() => setIndex(index - 1)} disabled={index == 0}>
                        <div className="img reverse">
                            <Image src={Arrow} alt="arrow" /> 
                        </div>
                        <span>Previous</span>
                    </button>
                    {
                        data[index] && 
                        <>
                            <button disabled={saved.includes(index)} className="btn" onClick={save}>Save</button>
                            <button className="sec-btn btn" onClick={() => setIndex(index + 1)}>
                                <span>Next</span>
                                <div className="img">
                                    <Image src={Arrow} alt="arrow" />
                                </div>
                            </button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(Idea)
