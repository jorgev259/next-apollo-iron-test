import { cookies } from 'next/headers'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { getIronSession } from 'iron-session'
import { gql } from '@apollo/client'

const sessionOptions = {
  password: 'zt10kkXxjYj7w98EMcE9u82kuzcRPkY2',
  cookieName: 'this_is_a_cookie_name',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
}

const resolvers = {
  Query: {
    hello: () => 'world'
  }
}

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const server = new ApolloServer({ resolvers, typeDefs, introspection: process.env.NODE_ENV !== 'production' })

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => {
    // const cookieStore = cookies()
    const session = await getIronSession(req, res, sessionOptions)
    console.log({ session })
    const { username } = session

    return { username, session }
  }
})

export { handler as GET, handler as POST }
