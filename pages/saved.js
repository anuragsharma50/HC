import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect,useState } from 'react'
import axios from 'axios'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ClipLoader from "react-spinners/ClipLoader"

import Styles from '../styles/pageStyles/saved.module.scss'
import TrashIcon from '../assets/images/trash.png'

function Saved({loading,user}) {

    const router = useRouter()
    const [data, setData] = useState([])
    const [serverError, setServerError] = useState('')

    useEffect(() => {
        if(!user && !loading) {
            router.push('/signin')
        }

        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/saved`,{withCredentials:true}).then((res) => {
            // console.log(res.data)
            setData(res.data)
        }).catch((e) => {
            if (e.response && e.response.data) {
                // console.log(e.response.data.message)
                setServerError(e.response.data.message)
            }
        })
    }, [user,loading])

    const deleteIdea = (item) => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/unsave/${item._id}`,{withCredentials:true}).then((res) => {
            // console.log(res.data)
            let newData = data.filter(data => {
                return data._id != item._id;
            });
            setData(newData)
        }).catch((e) => {
            // console.log(e.response)
        })
    }

    if(loading) {
        return (
            <div className={`${Styles.container} container`}>
                <div className="loading">
                    <ClipLoader color="#0677c1" loading={loading} size={50} />
                </div>
            </div>
        )
    }

    if(serverError) {
        return (
            <div className={`${Styles.container} container`}>
                <div className={Styles.bottomHeader}>
                    <h2>Saved Ideas</h2>
                </div>
                <div className={Styles.noSave}>{serverError}</div>
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>Saved Ideas | Happie Celebrations</title>
                <meta name="description" content="Saved ideas to View Later" />
            </Head>

            <div className={`${Styles.container} container`}>

                <div className={Styles.bottomHeader}>
                    <h2>Saved Ideas</h2>
                </div>

                {   data.length ?
                        data.map(item => (
                            <div key={item._id} className={`${Styles.subContainer} sub-container`}>
                                <div className={Styles.headingContainer}>
                                    <h3 className="heading">{item.title}</h3>
                                    <div className={Styles.delete} onClick={() => deleteIdea(item)}>
                                        <Image src={TrashIcon} alt="delete" />
                                    </div>
                                </div>
                                <span className={Styles.ideaDescription}>{item.description}</span>
                            </div>
                        ))

                        :
                        <>
                            <div className={`${Styles.subContainer} sub-container`}>
                                <div className={Styles.headingContainer}>
                                    <div className={Styles.headingSkeleton}><Skeleton height={40} /></div>
                                </div>
                                <div className={Styles.ideaDescription}><Skeleton count={5} height={25} className={Styles.skeleton} /></div>
                            </div>
                        </>
                }

            </div>
        </>
    )
}

export default Saved
