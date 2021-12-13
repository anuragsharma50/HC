import Link from 'next/link'
import Styles from '../styles/pageStyles/privacy-policy.module.scss'

function RefundPolicy() {
    return (
        <div className={`${Styles.container} container`}>
            <div className={`${Styles.subContainer} sub-container`}>
                <h1>Refund and Cancellation Policy</h1>
                <p>Amount once paid through the payment gateway shall not be refunded other than in the
                    following circumstances:
                </p>
                <p>Multiple times debiting of Customer’s Card/Bank Account/UPI/wallets due to technical error OR Customer&apos;s
                    account being debited with excess amount in a single transaction due to technical error. In such
                    cases, excess amount excluding Payment Gateway charges would be refunded to the Customer.
                </p>
                <p>Due to technical error, payment being charged on the Customer’s Card/Bank Account/UPI/wallets but not 
                    displayed on user dashboard. in such case amount will be updated on your profile at no 
                    extra cost.However, if in such cases, Customer wishes to seek refund of the amount, he/she 
                    would be refunded net the amount, after deduction of Payment Gateway charges or any other charges.
                </p>
                <p>The Customer will have to send a email to for refund along with the phone number or email (or both) which is used for payment.</p>
                <p>The Customer can also add details if there is a change in refund email/phone number or if they want refund or payment update on dashboard.</p>
                <p>The email should be sent to <Link href="mailto:support@happiecelebrations.com" passHref={true}>support@happiecelebrations.com</Link></p>
                <p>The application will be processed manually and after verification, if the claim is found valid, 
                    the amount received in excess will be refunded(or dashboard will be updated based on user preference).
                    and confirmation sent to the mailing address given in the email. It will take 1-2 days for 
                    the money to show in your bank account depending on your bank’s policy.
                </p>
                <p>Company assumes no responsibility and shall incur no liability if it is unable to affect any
                    Payment Instruction(s) on the Payment Date owing to any one or more of the following
                    circumstances:
                </p>
                <ul>
                    <li>If the Payment Instruction(s) issued by you is/are incomplete, inaccurate, and invalid and
                        delayed.
                    </li>
                    <li>If the Payment Account has insufficient funds/limits to cover for the amount as mentioned
                        in the Payment Instruction(s)
                    </li>
                    <li>
                        If the funds available in the Payment Account are under any encumbrance or charge.
                    </li>
                    <li>
                        Circumstances beyond the control of Company (including, but not limited to, fire, flood,
                        natural disasters, bank strikes, power failure, systems failure like computer or telephone
                        lines breakdown due to an unforeseeable cause or interference from an outside force)
                    </li>
                    <li>
                        In case the payment is not effected for any reason, you will be intimated about the failed
                        payment by an e-mail
                    </li>
                </ul>
                <p>User agrees that Company, in its sole discretion, and without penalty, may
                    suspend or terminate user&apos;s account for voilation of any privacy policy or terms and conditions of use. 
                </p>
                <p>
                    Company may elect to resolve any dispute, controversy or claim arising out of or relating to this
                    Agreement or Service provided in connection with this Agreement by binding arbitration in
                    accordance with the provisions of the Indian Arbitration &amp; Conciliation Act, 1996. Any such
                    dispute, controversy or claim shall be arbitrated on an individual basis and shall not be
                    consolidated in any arbitration with any claim or controversy of any other party.
                </p>
            </div>
        </div>
    )
}

export default RefundPolicy
