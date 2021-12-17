import Image from 'next/image'
import { useRouter } from "next/router"

import FAQ from '../components/FAQ/FAQ'
import Carousel from '../components/carousel/carousel'
import { motion } from "framer-motion"
import menuItems from '../components/animations/raising'
import Styles from '../styles/pageStyles/homepage.module.scss'

import WishImage from '../assets/images/Wish.png'
import CelebrationImage from '../assets/images/Celebration.png'
import SurpriseImage from '../assets/images/Surprise.png'
import IdeaImage from '../assets/images/idea.png'

export default function Home({user,loading}) {

  const router = useRouter()

  return (
    <div className={`${Styles.container} container`}>

      <Carousel user={user} loading={loading} />

      <div className={`${Styles.homeLinks} home-links`}>
        <div className={Styles.item}>
        <div className={Styles.img}> <Image src={WishImage} alt="idea" /> </div>
          <motion.div 
            className={Styles.text}
            variants={menuItems}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h3>Wish</h3>
            <p>Wish your Friends, Family, Acquintance in a way they never expect.</p>
            <button className="btn" onClick={() => router.push('/wish')}>Wish Now</button>
          </motion.div>
        </div>
        <div className={Styles.item}>
        <div className={Styles.img}> <Image src={CelebrationImage} alt="Celebration" /> </div>
          <div className={Styles.text}>
            <h3>Celebrate</h3>
            <p>Celebrate ocassions that no one will forget.</p>
            <button className="btn" onClick={() => router.push('/celebration')}>Get idea</button>
          </div>
        </div>
        <div className={Styles.item}>
          <div className={Styles.img}> <Image src={SurpriseImage} alt="surprise" /> </div>
          <div className={Styles.text}>
            <h3>Gift</h3>
            <p>Plan a gift and make your special person fall in love with your gift.</p>
            <button className="btn" onClick={() => router.push('/gift')}>Plan Now</button>
          </div>
        </div>
        {/* <div className={Styles.item}>
          <div className={Styles.img}> <Image src={IdeaImage} alt="write idea" /> </div>
          <div className={Styles.text}>
            <h3>Share your idea</h3>
            <p>If you have a great idea then you can share it with us and get Money rewards.</p>
            <button className="btn">Know more</button>
          </div>
        </div> */}

        <div className={Styles.writeItem}>
          <h3>Got a celebration Idea? Share it with us</h3>
          <div className={Styles.content}>
            <div className={Styles.img}> <Image src={IdeaImage} alt="surprise" /> </div>
            <div className={Styles.text}>
              <p>If you have a great idea for the celebration of any festival, wishing someone or
                    planning a surprise gift. then you can share it with us and get Money rewards.</p>
              <button className="btn" onClick={() => router.push('/write')}>Know more</button>
            </div>
          </div>
        </div>

        <FAQ />

      </div>
    </div>
  )
}