import styles from './page.module.css'
import { getHello, login, logout } from './lib/actions'

export default async function Home () {
  const hello = await getHello()
  console.log({ hello })

  return (
    <main className={styles.main}>
      <form action={login}>
        <button type='submit'>Login</button>
      </form>
      <form action={logout}>
        <button type='submit'>Logout</button>
      </form>
    </main>
  )
}
