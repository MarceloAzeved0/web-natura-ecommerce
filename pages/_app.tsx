import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layout'
import UserContext from '@/contexts/user'
import OrderContext from '@/contexts/order'
import ProductContext from '@/contexts/product'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductContext>
      <OrderContext>
        <UserContext>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserContext>
      </OrderContext>
    </ProductContext>
  )
}
