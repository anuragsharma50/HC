import Image from 'next/image'
import Faq from 'react-faq-component';

import FAQImage from '../../assets/images/FAQ - illustration.png'
import Styles from './FAQ.module.scss'

function FAQ() {

  const data = {
    title: "FAQ",
    rows: [
      {
        title: "What is happie Celebrations",
        content: <p>A website to find Wishing, celebration, and gifting ideas based on relationship, age, gender, and budget for different ocassions be it birthday,new year,any festival,etc. watch 
          {' '} <a href="https://stackoverflow.com/" rel="noopener noreferrer" target="_blank">this</a> {' '} video to know more 
        </p>
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "What is the package version",
        content: "v1.0.5"
      }]
  }

  return (
    <div className={`${Styles.item} item`}>
      <div className={Styles.faqImg}>
        <Image  src={FAQImage}  alt="FAQ" />
      </div>
      {/* <div className={`${Styles.faq} faq`}> */}
      <div className="faq">
        <Faq data={data} />
      </div>
    </div>
  )
}

export default FAQ
