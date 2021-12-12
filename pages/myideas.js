import Image from 'next/image'
import Link from 'next/link' 
import { useEffect,useState } from 'react'
import axios from 'axios'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Styles from '../styles/pageStyles/saved.module.scss'
import TrashIcon from '../assets/images/trash.png'

function MyIdeas() {

    const [data, setData] = useState([])
    const [serverError, setServerError] = useState('')

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/myideas`,{withCredentials:true}).then((res) => {
            // console.log(res.data)
            setData(res.data)
        }).catch((e) => {
            if (e.response && e.response.data) {
                // console.log(e.response.data.message)
                setServerError(e.response.data.message)
            }
        })
    }, [])

    const deleteIdea = (item) => {
        // axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/unsave/${item._id}`,{withCredentials:true}).then((res) => {
        //     // console.log(res.data)
        //     let newData = data.filter(data => {
        //         return data._id != item._id;
        //     });
        //     setData(newData)
        // }).catch((e) => {
        //     // console.log(e.response)
        // })
        // console.log("Attempt to delete")
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
        <div className={`${Styles.container} container`}>
            
            <div className={Styles.bottomHeader}>
                <h2>My Ideas</h2>
            </div>

            {
                data.length ?
                data.map(item => (
                    <div key={item._id} className={`${Styles.subContainer} sub-container`}>
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
                        <div className={Styles.headingContainer}>
                            <h3 className="heading">{item.title}</h3>
                            <div className={Styles.delete} onClick={() => deleteIdea(item)}>
                                <Image src={TrashIcon} alt="delete" />
                            </div>
                        </div>
                        <div className={Styles.ideaDescription}>{item.description}</div>
                    </div>
                ))
                :
                <div className={`${Styles.subContainer} sub-container`}>
                    <div className={`${Styles.unApproved} ${Styles.approvalStatus}`}><Skeleton height={20} /></div>
                    <div className={Styles.headingContainer}>
                    <div className={Styles.headingSkeleton}><Skeleton height={40} /></div>
                    </div>
                    <div className={Styles.ideaDescription}><Skeleton count={5} height={25} className={Styles.skeleton} /></div>
                </div>
            }

        </div>
    )
}

export default MyIdeas
