import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layout'
import UserContext from '@/contexts/user'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext>
  )
}
