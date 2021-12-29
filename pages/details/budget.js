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
                    {/* <div className={Styles.table}>
                        <div>
                            <p className={Styles.tableHeading}>wish</p>
                            <p>₹(0-100) or $(0-1.5)</p>
                        </div>
                        <div>
                            <p className={Styles.tableHeading}>celebration</p>
                            <p>₹(0-500) or $(0-7.5)</p>
                        </div>
                        <div>
                            <p className={Styles.tableHeading}>Gift</p>
                            <p>₹(0-800) or $(0-10)</p>
                        </div>
                    </div> */}

                    <table>
                        <tbody>
                            <tr>
                                <th>wish</th>
                                <th>celebration</th>
                                <th>Gift</th>
                            </tr>
                            <tr>
                                <td>₹(0-100) or $(0-1.5)</td>
                                <td>₹(0-500) or $(0-1.5)</td>
                                <td>₹(0-800) or $(0-1.5)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={Styles.item}>
                    <h3>Low-medium</h3>
                    <div className={Styles.img}>
                        <Image src={LowMedium} alt='low-budget' />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>wish</th>
                                <th>celebration</th>
                                <th>Gift</th>
                            </tr>
                            <tr>
                                <td>₹(200-400) or $(3-6)</td>
                                <td>₹(1,000-3,000) or $(15-45)</td>
                                <td>₹(3,000-5,000) or $(60-120)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={Styles.item}>
                    <h3>Medium</h3>
                    <div className={Styles.img}>
                        <Image src={Medium} alt='low-budget' />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>wish</th>
                                <th>celebration</th>
                                <th>Gift</th>
                            </tr>
                            <tr>
                                <td>₹(500-650) or $(8-10)</td>
                                <td>₹(5,000-7,000) or $(75-100)</td>
                                <td>₹(10,000-15,000) or $(150-225)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={Styles.item}>
                    <h3>Medium-high</h3>
                    <div className={Styles.img}>
                        <Image src={HighMedium} alt='low-budget' />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>wish</th>
                                <th>celebration</th>
                                <th>Gift</th>
                            </tr>
                            <tr>
                                <td>₹(700-850) or $(10-12)</td>
                                <td>₹(10,000-12,000) or $(150-180)</td>
                                <td>₹(25,000-30,000) or $(370-450)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={Styles.item}>
                    <h3>High</h3>
                    <div className={Styles.img}>
                        <Image src={High} alt='high-budget' />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>wish</th>
                                <th>celebration</th>
                                <th>Gift</th>
                            </tr>
                            <tr>
                                <td>₹1000+ or $15+</td>
                                <td>₹20,000+ or $350+</td>
                                <td>₹50,000+ or $750+</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default budget
