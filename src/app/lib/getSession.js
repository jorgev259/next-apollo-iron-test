import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'

const sessionOptions = {
  password: 'zt10kkXxjYj7w98EMcE9u82kuzcRPkY2',
  cookieName: 'this_is_a_cookie_name',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
}

const getSession = () => getIronSession(cookies(), sessionOptions)

export default getSession
