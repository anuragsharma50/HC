import Image from 'next/image'
import Faq from 'react-faq-component';

import FAQImage from '../../assets/images/FAQ - illustration.png'
import Styles from './FAQ.module.scss'

const data = {
  title: "FAQ",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
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

function FAQ() {
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
