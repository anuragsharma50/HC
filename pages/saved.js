import Image from 'next/image'
import { useEffect,useState } from 'react'
import axios from 'axios'

import Styles from '../styles/pageStyles/saved.module.scss'
import TrashIcon from '../assets/images/trash.png'

function Saved() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5500/users/saved`,{withCredentials:true}).then((res) => {
            console.log(res.data)
            setData(res.data)
        }).catch((e) => {
            console.log(e.response)
        })
    }, [])

    const deleteIdea = (item) => {
        axios.get(`http://localhost:5500/users/unsave/${item._id}`,{withCredentials:true}).then((res) => {
            console.log(res.data)
            let newData = data.filter(data => {
                return data._id != item._id;
            });
            setData(newData)
        }).catch((e) => {
            console.log(e.response)
        })
    }

    return (
        <div className={`${Styles.container} container`}>
            
            <div className={Styles.bottomHeader}>
                <h2>Saved Ideas</h2>
            </div>

            {
                data.length ?
                data.map(item => (
                    <div key={item._id} className={`${Styles.subContainer} sub-container`}>
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
                <h1>Loading Data</h1>
            }

        </div>
    )
}

export default Saved
