import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts'
import UserContext from '@/contexts/user'
import OrderContext from '@/contexts/order'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OrderContext>
      <UserContext>
        <ToastContainer position='bottom-right' autoClose={2000} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext>
    </OrderContext>
  )
}
