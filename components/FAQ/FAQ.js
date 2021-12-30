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
          {' '} <a href="https://www.youtube.com/watch?v=sxD5E3h9AbA" rel="noopener noreferrer" target="_blank">this</a> {' '} video to know more 
        </p>
      },
      {
        title: "How to get free ideas?",
        content: <p>Write ideas - You will get one free idea set for every idea that gets approved.
          or Refer a friend - you can refer to your friend and you both will get a free idea set.
        </p>
      },
      {
        title: "Where is my referral code?",
        content: <p>To get a referral code you need to view ideas in the free idea set that you get. After that you can check your referral code <Link href="/referral">here</Link></p>
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
