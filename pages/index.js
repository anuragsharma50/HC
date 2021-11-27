import Image from 'next/image'

import FAQ from '../components/FAQ/FAQ'
import Carousel from '../components/carousel/carousel'
import Styles from '../styles/pageStyles/homepage.module.scss'

import WishImage from '../assets/images/Wish.png'
import CelebrationImage from '../assets/images/Celebration.png'
import SurpriseImage from '../assets/images/Surprise.png'
import IdeaImage from '../assets/images/idea.png'

export default function Home() {
  return (
    <div className={`${Styles.container} container`}>

      <Carousel />

      <div className={`${Styles.homeLinks} home-links`}>
        <div className={Styles.item}>
        <div className={Styles.img}> <Image src={WishImage} alt="idea" /> </div>
          <div className={Styles.text}>
            <h3>Wish</h3>
            <p>Wish your Friends, Family, Acquintance in a way they never expect.</p>
            <button className="btn">Wish Now</button>
          </div>
        </div>
        <div className={Styles.item}>
        <div className={Styles.img}> <Image src={CelebrationImage} alt="Celebration" /> </div>
          <div className={Styles.text}>
            <h3>Celebrate</h3>
            <p>Celebrate ocassions in a way no one will forget.</p>
            <button className="btn">Get idea</button>
          </div>
        </div>
        <div className={Styles.item}>
          <div className={Styles.img}> <Image src={SurpriseImage} alt="surprise" /> </div>
          <div className={Styles.text}>
            <h3>Gift</h3>
            <p>Plan a gift and make your special person fall in love with your gift.</p>
            <button className="btn">Plan Now</button>
          </div>
        </div>

        <div className={Styles.writeItem}>
          <h3>Got a celebration Idea? Share it with us</h3>
          <div className={Styles.content}>
            <div className={Styles.img}> <Image src={IdeaImage} alt="surprise" /> </div>
            <div className={Styles.text}>
              <p>If you have a great idea for the celebration of any festival, wishing someone or
                    planning a surprise gift. then you can share it with us and get Money rewards.</p>
              <button className="btn">Know more</button>
            </div>
          </div>
        </div>

        {/* <div className={Styles.item}>
          <div className={Styles.faqImg}>
            <Image src={FAQImage}  alt="FAQ" />
          </div>
          <div className={Styles.faq}>
            <FAQ />
          </div>
        </div> */}

        <FAQ />

      </div>
    </div>
  )
}