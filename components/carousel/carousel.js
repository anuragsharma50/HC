import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router"
import { Swiper, SwiperSlide } from "swiper/react"
import Styles from './carousel.module.scss'
import GiftImage from '../../assets/images/Gift.png'
import HalloweenImage from '../../assets/images/halloween.png'
import ShareImage from '../../assets/images/share.png'
import SocialMediaImage from '../../assets/images/social-media.png'
import WalletImage from '../../assets/images/wallet.png'
import WriteImage from '../../assets/images/write.png'
import YTImage from '../../assets/images/youtube.png'
import FAQImage from '../../assets/images/FAQ - illustration.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination]);

function Carousel({user,loading}) {

    const router = useRouter()

    return (
        <>
            <Swiper 
                pagination={{ "dynamicBullets": true }} 
                loop={true} autoplay={{ "delay": 5000, "disableOnInteraction": false  }} 
                className="mySwiper"
            >
                {
                    !loading && user && user.referral ?
                    <SwiperSlide>
                        <div className={Styles.firstLook}>
                            <div className={`${Styles.img} ${Styles.squareImg}`}> <Image src={YTImage} alt="youtube video" priority /> </div>
                            <div className={Styles.content}>
                            <h3>Watch video on youtube to know more about <br/> <b>Happie Celebrations</b></h3>
                            <button className={`${Styles.mBtn} btn`} onClick={() => window.open("https://www.youtube.com/watch?v=--BWrp0QWK4",'_blank')}>Watch Now</button>
                            <button className={`${Styles.mBtn} btn`} onClick={() => window.open("https://www.youtube.com/watch?v=bRhi8tsPBjw",'_blank')}>हिंदी में देखें</button>
                            </div>
                        </div>
                    </SwiperSlide>

                    :

                    <SwiperSlide>
                        <div className={Styles.firstLook}>
                            <div className={`${Styles.img} ${Styles.squareImg}`}> <Image src={YTImage} alt="youtube video" priority /> </div>
                            <div className={Styles.content}>
                            <h3>What is <br/> <b>Happie Celebrations ?</b></h3>
                            <button className={`${Styles.mBtn} btn`} onClick={() => window.open("https://www.youtube.com/watch?v=--BWrp0QWK4",'_blank')}>Watch Now</button>
                            <button className={`${Styles.mBtn} btn`} onClick={() => window.open("https://www.youtube.com/watch?v=bRhi8tsPBjw",'_blank')}>हिंदी में देखें</button>
                            </div>
                        </div>
                    </SwiperSlide>
                }
                { !user && !loading &&
                    <SwiperSlide>
                        <div className={Styles.firstLook}>
                            <div className={Styles.img}> <Image src={GiftImage} alt="Gift on the way" priority /> </div>
                            <div className={Styles.content}>
                            <h3>SignUp to view ideas for <br /> <b>Absolutely free</b></h3>
                            <button className={`${Styles.mBtn} btn`} onClick={() => router.push('/signup')}>SignUp Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                }
                {   !loading && user && user.free > 0  &&
                    <SwiperSlide>
                        <div className={Styles.firstLook}>
                            <div className={Styles.img}> <Image src={HalloweenImage} alt="halloween" /> </div>
                            <div className={Styles.content}>
                            <h3>find some <br /> <b>Amazing </b> wishing ideas</h3>
                            <button className={`${Styles.mBtn} btn`} onClick={() => router.push('/wish')}>View Ideas</button>
                            </div>
                        </div>
                    </SwiperSlide>
                }
                {
                    user && !loading &&
                    <SwiperSlide>
                        <div className={Styles.firstLook}>
                            <div style={{padding:20}} className={Styles.img}> <Image src={WriteImage} alt="write" /> </div>
                            <div className={Styles.content}>
                            <h3>Got a great idea? <br /> <b> Share </b> it with us</h3>
                            <button className={`${Styles.mBtn} btn`} onClick={() => router.push('/write')}>Write now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                }
                <SwiperSlide>
                    <div className={Styles.firstLook}>
                        <div style={{padding:20}} className={Styles.img}> <Image src={SocialMediaImage} alt="social media" /> </div>
                        <div className={Styles.content}>
                        <h3>Follow us on social media to get <br /> <b> More Updates </b></h3>
                        <button className={`${Styles.mBtn} btn`} onClick={() => router.push('')}>View All</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.firstLook}>
                        <div style={{padding:20}} className={`${Styles.img} ${Styles.squareImg}`}> <Image src={FAQImage} alt="faq" /> </div>
                        <div className={Styles.content}>
                        <h3>View FAQ to get answers to some of your <br /> <b> Questions</b></h3>
                        <Link href="#faq">
                            <button className={`${Styles.mBtn} btn`}>View FAQ</button>
                        </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Carousel
