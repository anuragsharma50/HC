import nextConnect from 'next-connect'
import passport from 'passport'
import axios from 'axios'
import cookie from "cookie"

const handler = nextConnect()

handler.get(passport.authenticate("google",{ session: false }), async (req, res) => {
    res.status(302)
    res.setHeader('Location', '/')

    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/social-login`,{
        username: req.user.displayName,
        email: req.user.emails[0].value,
        social_id: req.user.id,
        social_provider: req.user.provider
        }
    )

    res.setHeader(
        "Set-Cookie",
        cookie.serialize("jwt", response.data, {
          httpOnly: true,
          secure: true,
          expires: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
          sameSite: "none",
          path: "/",
        })
    )

    res.end()
})

export default handler