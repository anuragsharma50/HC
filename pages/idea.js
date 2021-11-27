import Image from 'next/image'
import { withRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from '../styles/pageStyles/idea.module.scss'
import Arrow from "../assets/images/arrow.png"
import LimitedIdeas from '../components/modals/limitedIdeas'
import SaveError from '../components/modals/saveError'

function Idea(props) {

    const [data, setData] = useState([])
    const [index, setIndex] = useState(0)
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
        console.log(query)
        axios.get(`http://localhost:5500/${query.from}?ocassion=${query.ocassion}&relation=${query.relation}&age=${query.age}&gender=${query.gender}&budget=${query.budget+10}&set=${set}`,
        {withCredentials:true}).then((res) => {
            // console.log(res.data)
            if(!data[0]){
                setData(res.data)
            }else{
                setData([...data,...res.data])
            }
        }).catch((e) => {
            console.log(e.response)
        })
    }

    const moreIdeas = () => {
        axios.get(`http://localhost:5500/${query.from}/count?ocassion=${query.ocassion}&relation=${query.relation}&age=${query.age}&gender=${query.gender}&budget=${query.budget+10}&set=${set+1}`,
        {withCredentials:true}).then((res) => {
            console.log(res.data)
            if(res.data.ideasCount < 25) {
                setOutput({ count: res.data.ideasCount,query,set,setSet })
                setModelState(true)
            }else{
                setSet(set + 1)
            }
        }).catch((e) => {
            console.log(e.response)
            console.log(e)
            // if (e.response && e.response.data) {
            //     console.log(e.response)
            //     // setErrorMessage(e.response.data.message)
            // }
        })
    }

    const save = () => {
        if(saved.length == set*3){
            setSaveError({title: "3 ideas already saved",message:"You can save only 3 ideas at a time."})
            setModelState2(true)
        }else{
            console.log(saved)
            console.log(saved.length)
            console.log(set*3)
            axios.get(`http://localhost:5500/${query.from}/save/${data[index]._id}`,
            {withCredentials:true}).then((res) => {
                console.log(res.data)
                if(!saved.length == 0){
                    setSaved([...saved,index])
                } else{
                    setSaved([index])
                }
            }).catch((e) => {
                console.log(e.response.data)
                setSaveError({title: "Already saved",message:"This idea is already saved in your collection."})
                setModelState2(true)
            })
        }
    }

    useEffect(() => {
        fetchIdeas()
    }, [set])

    return (
        <div className={`${styles.container} container`}>
            <LimitedIdeas modelState={modelState} setModelState={setModelState} output={output} />
            <SaveError modelState={modelState2} setModelState={setModelState2} errorTitle={saveError.title} errorMessage={saveError.message} />
            <div className="sub-container">
                {/* {
                    !data[0] && 
                    <>
                        <div className="heading">
                            <h2>Idea title</h2>
                        </div>

                        <div className="idea-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dui, rhoncus, duis quam sit in. 
                            Etiam bibendum tellus aliquam mauris nulla accumsan orci. Lectus eu aliquam quisque mi gravida diam tellus. 
                            Felis purus, sit proin suspendisse non.
                        </div>
                    </>
                } */}
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
                            <div className="more-ideas">More ideas are not avaliable in this catagory. you can again take a look at ideas or 
                                <span><a href="/"> go to homepage.</a></span>
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
