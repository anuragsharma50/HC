import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react"
import GiftImage from '../../assets/images/Gift.png'
import Styles from './carousel.module.scss'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination]);

function Carousel() {
    return (
        <>
            <Swiper 
                pagination={{ "dynamicBullets": true }} 
                loop={true} autoplay={{ "delay": 2000, "disableOnInteraction": false  }} 
                className="mySwiper"
            >
                <SwiperSlide>
                <div className={Styles.firstLook}>
                    <div className={Styles.img}> <Image src={GiftImage} alt="Gift on the way" /> </div>
                    <div className={Styles.content}>
                    <h3>SignUp to get your First set of ideas for <br /> <b>Absolutely free</b></h3>
                    <button className={`${Styles.mBtn} btn`}>SignUp Now</button>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide>
            </Swiper>
        </>
    )
}

export default Carousel
