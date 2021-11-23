import Image from 'next/image'
import Styles from '../styles/Homepage.module.css'

import GiftImage from '../assets/images/Gift.png'
import WishImage from '../assets/images/Wish.png'
import CelebrationImage from '../assets/images/Celebration.png'
import SurpriseImage from '../assets/images/Surprise.png'
import IdeaImage from '../assets/images/idea.png'
import FAQImage from '../assets/images/FAQ - illustration.png'
import AngleIcon from '../assets/images/angle.png'

export default function Home() {
  return (
    <div className={`${Styles.container} container`}>
      <div className="first-look">
        {/* <div></div> */}
        <Image src={GiftImage} alt="Gift on the way" />
        {/* <img src="./assets/Gift.png" alt="Gift on the way"> */}
        <div className="content">
          <h3>SignUp to get your First idea for <br /> <b>Absolutely free</b></h3>
          <button className="btn m-btn">SignUp Now</button>
        </div>
      </div>

      <div className="home-links">
        <div className="item">
          <Image src={WishImage} alt="idea" />
          {/* <img src="./assets/Wish.png" alt="idea"> */}
          <div className="text">
            <h3>Wish</h3>
            <p>Wish your Friends, Family, Acquintance in a way they never expect.</p>
            <button className="btn">Wish Now</button>
          </div>
        </div>
        <div className="item">
          <Image src={CelebrationImage} alt="Celebration" />
          {/* <img src="./assets/Celebration.png" alt="Celebrate"> */}
          <div className="text">
            <h3>Celebrate</h3>
            <p>Celebrate Ocassions in a way no one will forget by converting a normal occassion to something special.</p>
            <button className="btn">Get idea</button>
          </div>
        </div>
        <div className="item">
          <Image src={SurpriseImage} alt="surprise" />
          {/* <img src="./assets/surprise.png" alt="surprise"> */}
          <div className="text">
            <h3>Gift</h3>
            <p>Plan a gift and make your special person fall in love with your gift.</p>
            <button className="btn">Plan Now</button>
          </div>
        </div>

        <div className="write-item">
          <h3>Got a celebration Idea? Share it with us</h3>
          <div className="content">
            <Image src={IdeaImage} alt="surprise" />
            {/* <img src="./assets/idea.png" alt="surprise"> */}
            <div className="text">
              <p>If you have a great idea for the celebration of any festival, wishing someone or
                    planning a surprise gift. then you can share it with us and get Money rewards.</p>
              <button className="btn">Know more</button>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="faq-img">
            <Image src={FAQImage}  alt="FAQ" />
          </div>
          {/* <img className="faq-img" src="./assets/FAQ - illustration.png" alt="FAQ"> */}
          <div className="faq">
            <h3>FAQ</h3>
            <div className="ques">
              <div className="q">
                <h4>This is Question one? What is the Answer?</h4>
                <Image src={AngleIcon} alt="toggle-icon" />
                {/* <img src="./assets/angle.png" alt=""> */}
              </div>
              <p>No, You will get only one free idea that you can use to get idea for wish or celebration or Surprise. 
                  so, use that carefully.</p>
            </div>
            <div className="ques">
              <div className="q">
                <h4>This is Question two? What is the Answer?</h4>
                <Image src={AngleIcon} alt="toggle-icon" />
                {/* <img src="./assets/angle.png" alt=""> */}
              </div>
            </div>
            <div className="ques">
              <div className="q">
                <h4>This is Question three? What is the Answer?</h4>
                <Image src={AngleIcon} alt="toggle-icon" />
                {/* <img src="./assets/angle.png" alt=""> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
