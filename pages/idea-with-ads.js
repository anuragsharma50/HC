import Head from 'next/head'
import Image from 'next/image'
import { withRouter } from 'next/router'
// import Script from 'next/script'
import { useEffect, useState } from 'react'
import axios from 'axios'
import GoogleAd from '../components/GoogleAd/GoogleAd'

import Styles from '../styles/pageStyles/idea.module.scss'
import Arrow from "../assets/images/arrow.png"

function ideaWithAds(props) {

    const query = props.router.query
    const [data, setData] = useState({title: '', description: '',_id: '' })
    const [disableVote, setDisableVote] = useState(false)
    const [error, setError] = useState('')
    const [sameCount, setSameCount] = useState(0)

    const getIdea = () => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${query.catagory}/one-idea/?ocassion=${query.ocassion}&relation=${query.relation}&age=${query.age}&gender=${query.gender}&budget=${parseInt(query.budget)+5}`,
        {withCredentials:true}).then((res) => {
            console.log(res.data)
            if(res.data){
                setData(res.data)
                setDisableVote(false)
            }else{
                setData({title: '', description: '' }) 
            }
        }).catch((e) => {
            // console.log(e.response)
        })
    }

    const goodIdea = () => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${query.catagory}/good-idea/${data._id}`,
        {withCredentials:true}).then((res) => {
            setDisableVote(true)
        }).catch((e) => {
            // console.log(e.response)
        })
    }

    const badIdea = () => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${query.catagory}/bad-idea/${data._id}`,
        {withCredentials:true}).then((res) => {
            setDisableVote(true)
        }).catch((e) => {
            // console.log(e.response)
        })
    }

    useEffect(() => {
        getIdea()
        
    }, [])

    // useEffect(()=> {
    //     // if(typeof window !== 'undefined'){
    //     //     (window.adsbygoogle = window.adsbygoogle || []).push({})
    //     // }
    // }, [])

    return (
        <>
            <Head>
                <script data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <title>Ideas with Ads Page | Happie Celebrations</title>
                <meta name="description" content="View ideas" />
            </Head>

            <div className={`${Styles.container} container`}>
                <div className='sub-container'>
                    <div className="heading">
                        <h2>{data && data.title}</h2>
                    </div>

                    {/* <GoogleAd adSlot={"1394339153"} /> */}

                    <span className="idea-description">
                        {data && data.description}
                    </span>

                    <div className="idea-buttons">

                        <button className="red-btn btn" onClick={badIdea} disabled={disableVote}>
                            <div className="img">
                                <Image src={Arrow} alt="arrow" />
                            </div>
                            <span>Bad Idea</span>
                        </button>

                        <button className="btn" onClick={getIdea}>
                            Next
                        </button>

                        <button className="green-btn btn" onClick={goodIdea} disabled={disableVote}>
                            <span>Good Idea</span>
                            <div className="img">
                                <Image src={Arrow} alt="arrow" />
                            </div>
                        </button>
                    </div>

                    <GoogleAd adSlot={"1394339153"} />
                </div>
            </div>
        </>
    )
}

export default withRouter(ideaWithAds)
