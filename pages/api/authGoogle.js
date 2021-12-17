import nextConnect from 'next-connect'
// import passport from 'passport'
import passport from '../../lib/passport'

const handler = nextConnect()

handler.get(passport.authenticate("google", {scope: ['profile', 'email']}))

export default handler