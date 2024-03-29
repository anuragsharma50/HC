import Image from 'next/image'
import { withRouter } from 'next/router'
import Head from 'next/head'
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
import SignIn from '../components/modals/signIn'

function Idea(props) {

    const [data, setData] = useState([])
    const [index, setIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const [set, setSet] = useState(1)
    const [saved, setSaved] = useState([])
    const [modelState, setModelState] = useState(false)
    const [modelState2, setModelState2] = useState(false)
    const [signInModel, setSignInModel] = useState(false)
    const [saveError, setSaveError] = useState({})
    const [disableVote, setDisableVote] = useState(false)
    const [output, setOutput] = useState({
        count: 0,
        values: {},
    })
    const query = props.router.query

    const goodIdea = () => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${query.from}/good-idea/${data[index]._id}`,
        {withCredentials:true}).then((res) => {
            setDisableVote(true)
        }).catch((e) => {
            // console.log(e.response)
        })
    }

    const badIdea = () => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${query.from}/bad-idea/${data[index]._id}`,
        {withCredentials:true}).then((res) => {
            setDisableVote(true)
        }).catch((e) => {
            // console.log(e.response)
        })
    }

    const fetchIdeas = () => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${query.from}?ocassion=${query.ocassion}&relation=${query.relation}&age=${query.age}&gender=${query.gender}&budget=${parseInt(query.budget)+10}&set=${set}`,
        {withCredentials:true}).then((res) => {
            // // console.log(res.data)
            if(!data[0]){
                setData(res.data)
            }else{
                setData([...data,...res.data])
            }
            setLoading(false)
        }).catch((e) => {
            // console.log(e.response)
            setLoading(false)
        })
    }

    const moreIdeas = () => {
        setLoading(true)
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${query.from}/count?ocassion=${query.ocassion}&relation=${query.relation}&age=${query.age}&gender=${query.gender}&budget=${query.budget+10}&set=${set+1}`,
        {withCredentials:true}).then((res) => {
            // console.log(res.data)
            if(res.data.ideasCount === 0) {
                setOutput({ count: res.data.ideasCount,query,set,setSet,user:props.user })
                setModelState(true)
            }else{
                setSet(set + 1)
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
        if(!props.user){
            setSignInModel(true)
        }
        else{
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
                    setSaveError({title: "Already saved",message:"This idea is already saved in your collection."})
                    setModelState2(true)
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
        <>
            <Head>
                <title>Idea Page | Happie Celebrations</title>
                <meta name="description" content="View and save ideas" />
            </Head>

            <div className={`${Styles.container} container`}>
                <LimitedIdeas modelState={modelState} setModelState={setModelState} output={output} />
                <SaveError modelState={modelState2} setModelState={setModelState2} errorTitle={saveError.title} errorMessage={saveError.message} />
                <SignIn modelState={signInModel} setModelState={setSignInModel} />
                <div className="sub-container">
                    { data[index] && 
                        <>
                            <div className="heading">
                                <h2>{data[index].title || <Skeleton height={30} />}</h2>
                            </div>

                            <span className="idea-description">
                                {data[index].description || <Skeleton count={5} />}
                            </span>
                        </>
                    }

                    {
                        !data[index] && 
                            (
                                (index == 15*set  && index > 0) ?
                                <div className="more-ideas"><a onClick={moreIdeas}>Get more ideas</a></div>   :
                                <div className="more-ideas"><div>More ideas are not avaliable in this catagory. you can again take a look at previous ideas or 
                                    <span style={{paddingLeft:'3px'}}><Link href="/"> go to homepage.</Link></span></div>
                                </div> 
                            )
                    }

                    {
                        data[index] && 
                        <div className="idea-buttons show-btn-text">
                            <button className="red-btn btn" onClick={badIdea} disabled={disableVote}>
                                <div className="img">
                                    <Image src={Arrow} alt="arrow" />
                                </div>
                                <span>Bad Idea</span>
                            </button>

                            <button className="green-btn btn" onClick={goodIdea} disabled={disableVote}>
                                <span>Good Idea</span>
                                <div className="img">
                                    <Image src={Arrow} alt="arrow" />
                                </div>
                            </button>
                        </div>
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
        </>
    )
}

export default withRouter(Idea)
