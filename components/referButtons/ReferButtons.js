import { FacebookShareButton, FacebookIcon,TwitterShareButton,TwitterIcon,WhatsappShareButton,WhatsappIcon,
    LinkedinShareButton,LinkedinIcon,EmailShareButton,EmailIcon, } from 'next-share'

import Styles from './refer-buttons.module.scss'


function ReferButtons({code}) {

    const quote = `Join me on Happie Celebrations to view wishing, celebrating and gifting ideas. Get free ideas one more time by entering my referral code: ${code}`
    const url = 'https://www.happiecelebrations.com/signup'

    return (
        <div className={Styles.buttons}>
            <FacebookShareButton url={url} hashtag={'#happiecelebrations'}
                quote={quote}
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton url={url}
                title={quote}
                hashtags={['happiecelebrations']}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>

            <WhatsappShareButton
                url={url}
                title={quote}
                separator=" : "
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <LinkedinShareButton url={url} title={'Get free ideas using my referral code'} summary={quote} >
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            <EmailShareButton
                url={url}
                subject={'Get free ideas using my referral code'}
                body={quote}
            >
                <EmailIcon size={32} round />
            </EmailShareButton>
        </div>
    )
}

export default ReferButtons
