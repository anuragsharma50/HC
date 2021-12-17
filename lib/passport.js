import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
// import axios from 'axios'

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    passReqToCallback: true,
  },   
  async (req, accessToken, refreshToken, profile, done) => {

    // axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/social-login`,{
    //   username: profile.displayName,
    //   email: profile.emails[0].value,
    //   social_id: profile.id,
    //   social_provider: profile.provider
    // }
    // ).then((response) => {
    //     console.log(response)
        
    // }).catch((err) => {
    //   // console.log("Error" ,err.response)
    // }) 

    return done(null,profile)
  }
))

export default passport