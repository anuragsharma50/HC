import Image from 'next/image'

import Styles from '../../styles/details/budget.module.scss'

import Low from '../../assets/images/low-budget.png'
import LowMedium from '../../assets/images/low-medium-budget.png'
import Medium from '../../assets/images/medium-budget.png'
import HighMedium from '../../assets/images/medium-high-budget.png'
import High from '../../assets/images/high-budget.png'

function budget() {
    return (
        <div className={`${Styles.container} container`}>
            <div className="sub-container">
                <div className="heading">
                    <h2>How to choose Budget?</h2>
                </div>

                <div className={Styles.item}>
                    <h3>Low</h3>
                    <div className={Styles.img}>
                        <Image src={Low} alt='low-budget' />
                    </div>
                    <div className={Styles.text}>
                        For wish is between ₹(0-100) or $(0-1.5)
                    </div>
                    <div className={Styles.text}>
                        For celebration is between ₹(0-500) or $(0-1.5)
                    </div>
                    <div className={Styles.text}>
                        For wish is between ₹(0-800) or $(0-1.5)
                    </div>
                </div>
                <div className={Styles.item}>
                    <h3>Low-medium</h3>
                    <div className={Styles.img}>
                        <Image src={LowMedium} alt='low-budget' />
                    </div>
                    <div className={Styles.text}>
                        For wish is between ₹(200-400) or $(3-6)
                    </div>
                    <div className={Styles.text}>
                        For celebration is between ₹(1,000-3,000) or $(15-45)
                    </div>
                    <div className={Styles.text}>
                        For wish is between ₹(3,000-5,000) or $(60-120)
                    </div>
                </div>
                <div className={Styles.item}>
                    <h3>Medium</h3>
                    <div className={Styles.img}>
                        <Image src={Medium} alt='low-budget' />
                    </div>
                    <div className={Styles.text}>
                        For wish is between ₹(500-650) or $(8-10)
                    </div>
                    <div className={Styles.text}>
                        For celebration is between ₹(5,000-7,000) or $(75-100)
                    </div>
                    <div className={Styles.text}>
                        For wish is between ₹(10,000-15,000) or $(150-225)
                    </div>
                </div>
                <div className={Styles.item}>
                    <h3>Medium-high</h3>
                    <div className={Styles.img}>
                        <Image src={HighMedium} alt='low-budget' />
                    </div>
                    <div className={Styles.text}>
                        For wish is between ₹(700-850) or $(10-12)
                    </div>
                    <div className={Styles.text}>
                        For celebration is between ₹(10,000-12,000) or $(150-180)
                    </div>
                    <div className={Styles.text}>
                        For wish is between ₹(25,000-30,000) or $(370-450)
                    </div>
                </div>

                <div className={Styles.item}>
                    <h3>High</h3>
                    <div className={Styles.img}>
                        <Image src={High} alt='high-budget' />
                    </div>
                    <div className={Styles.text}>
                        For wish is ₹1000+ or $15+
                    </div>
                    <div className={Styles.text}>
                        For celebration is ₹20,000+ or $350+
                    </div>
                    <div className={Styles.text}>
                        For wish is ₹50,000+ or $750+
                    </div>
                </div>
            </div>
        </div>
    )
}

export default budget
