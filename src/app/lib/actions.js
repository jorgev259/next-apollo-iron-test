'use server'
import { getClient } from './ApolloSSRClient'
import getSession from './getSession'
import { gql } from '@apollo/client'

export async function login (formData) {
  try {
    const session = await getSession()
    const client = await getClient()

    session.username = 'username'
    await session.save()
    client.resetStore()

    return { ok: true }
  } catch (err) {
    return { ok: false, message: err.message }
  }
}

export async function logout () {
  const session = await getSession()
  const client = await getClient()

  await session.destroy()
  client.resetStore()
}

const helloQuery = gql`
  query getHello{
    hello
  }
`

export async function getHello () {
  const client = await getClient()
  const { data } = await client.query({ query: helloQuery })

  return data
}
