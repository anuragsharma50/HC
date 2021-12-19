import Link from 'next/link'
import Head from 'next/head'

function DeleteAccount() {
    return (
        <>
            <Head>
                <title>Delete Account | Happie Celebrations</title>
                <meta name="description" content="Instrutions to delete account" />
            </Head>
            
            <div className="container">
                <div className="sub-container">
                    <div className="heading">
                        <h2>Delete Account</h2>
                    </div>
                    <div style={{padding: '10px'}}>
                        We are working on Account deletion. but if you want to delete your account now, you can send us 
                        a email at <Link href="mailto:support@happiecelebrations.com" passHref={true}>support@happiecelebrations.com</Link> 
                        {' '} from your registered email with title as &#34;Account Deletion&#34;. You can also share the reason of 
                        account deletion, so that we can improve Happie Celebrations.
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteAccount
