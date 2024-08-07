import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layout'
import UserContext from '@/contexts/user'
import OrderContext from '@/contexts/order'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OrderContext>
      <UserContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext>
    </OrderContext>
  )
}
