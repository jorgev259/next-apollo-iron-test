'use server'
import { HttpLink } from '@apollo/client'
import { NextSSRInMemoryCache, NextSSRApolloClient } from '@apollo/experimental-nextjs-app-support/ssr'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
// import { SchemaLink } from '@apollo/client/link/schema'

// import { schema } from './graphql'

const httpLink = new HttpLink({ uri: 'http://localhost:3000/api/graphql', credentials: 'same-origin' })
// const schemaLink = new SchemaLink({ schema })

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: httpLink
  })
})
