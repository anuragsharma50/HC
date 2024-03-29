import Image from 'next/image'
import Link from 'next/link' 
import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect,useState } from 'react'
import axios from 'axios'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ClipLoader from "react-spinners/ClipLoader"

import Styles from '../styles/pageStyles/saved.module.scss'
import TrashIcon from '../assets/images/trash.png'
import ConfirmDelete from '../components/modals/ConfirmDelete'

function MyIdeas({user,loading}) {

    const router = useRouter()
    const [data, setData] = useState([])
    const [serverError, setServerError] = useState('')
    const [modelState, setModelState] = useState(false)
    const [deleteItem, setDeleteItem] = useState()

    useEffect(() => {
        if(!user && !loading) {
            router.push('/signin')
        }

        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/myideas`,{withCredentials:true}).then((res) => {
            console.log(res.data)
            setData(res.data)
        }).catch((e) => {
            if (e.response && e.response.data) {
                // console.log(e.response.data.message)
                setServerError(e.response.data.message)
            }
        })
    }, [user,loading])

    const deleteConfirmation = (item) => {
        setDeleteItem(item)
        setModelState(true)
    }

    const deleteIdea = () => {
        axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${deleteItem.catagory}/${deleteItem._id}`,{withCredentials:true}).then((res) => {
            // console.log(res.data)
            let newData = data.filter(data => {
                return data._id != deleteItem._id;
            });
            setData(newData)
        }).catch((e) => {
            // console.log(e.response)
        })
        setModelState(false)
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

    if(serverError === "You haven't write any idea") {
        return (
            <div className={`${Styles.container} container`}>
                <div className={Styles.bottomHeader}>
                    <h2>My Ideas</h2>
                </div>
                <div className={Styles.noSave}>
                    You haven&apos;t write any idea <Link href="/write">Write now</Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>My ideas | Happie Celebrations</title>
                <meta name="description" content="View Status of your ideas" />
            </Head>

            <div className={`${Styles.container} container`}>

                <ConfirmDelete modelState={modelState} setModelState={setModelState} deleteIdea={deleteIdea} />
                
                <div className={Styles.bottomHeader}>
                    <h2>My Ideas</h2>
                </div>

                {
                    data.length ?
                    data.map(item => (
                        <div key={item._id} className={`${Styles.subContainer} sub-container`}>
                            <div className={Styles.approvalStatusContainer}>
                            {
                                item.approvalStatus ?
                                <div className={`${item.approvalStatus === 'Approved' ? Styles.approved : Styles.rejected} ${Styles.approvalStatus}`}>
                                    {item.approvalStatus}
                                </div>
                                :
                                <div className={`${Styles.unApproved} ${Styles.approvalStatus}`}>
                                    Not Approved yet
                                </div>

                            }
                            {/* { item.approvalStatus === 'Approved' &&
                                <>
                                    <div className={`${Styles.catagory} ${Styles.extraWide}`}>Good - {item.good || 0}</div>
                                    <div className={`${Styles.catagory} ${Styles.extraWide}`}>Bad - {item.bad || 0}</div>
                                    <div className={`${Styles.catagory} ${Styles.extraWide}`}>Total Save - {item.save || 0}</div>
                                </>
                            } */}
                            <div className={Styles.catagory}>{item.catagory}</div>
                            </div>
                            <div className={Styles.headingContainer}>
                                <h3 className="heading">{item.title}</h3>
                                <div className={Styles.delete} onClick={() => deleteConfirmation(item)}>
                                    <Image src={TrashIcon} alt="delete" />
                                </div>
                            </div>
                            <div className={Styles.ideaDescription}>{item.description}</div>
                        </div>
                    ))
                    :
                    <div className={`${Styles.subContainer} sub-container`}>
                        <div className={Styles.approvalStatusContainer}>
                            <div className={`${Styles.unApproved} ${Styles.approvalStatus}`}>
                                <Skeleton height={20} />
                            </div>
                        </div>
                        <div className={`${Styles.unApproved} ${Styles.approvalStatus}`}><Skeleton height={20} /></div>
                        <div className={Styles.headingContainer}>
                        <div className={Styles.headingSkeleton}><Skeleton height={40} /></div>
                        </div>
                        <div className={Styles.ideaDescription}><Skeleton count={5} height={25} className={Styles.skeleton} /></div>
                    </div>
                }

            </div>
        </>
    )
}

export default MyIdeas
