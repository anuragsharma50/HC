import Image from 'next/image'
import  Link from 'next/link'
import Faq from 'react-faq-component';

import FAQImage from '../../assets/images/FAQ - illustration.png'
import Styles from './FAQ.module.scss'

function FAQ() {

  const data = {
    title: "FAQ",
    rows: [
      {
        title: "What is happie Celebrations?",
        content: <p>A website to find Wishing, celebration, and gifting ideas based on relationship, age, gender, and budget for different occasions be it birthday,new year,any festival,etc. watch 
          {' '} <a href="https://www.youtube.com/watch?v=--BWrp0QWK4" rel="noopener noreferrer" target="_blank">this</a> {' '} video to know more 
        </p>
      },
      {
        title: "Where to contact if anything goes wrong?",
        content: <p>you can contact us <Link href="/contact-us">here</Link> </p>
      }]
  }

  return (
    <div className={`${Styles.item} item`} id="faq">
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
