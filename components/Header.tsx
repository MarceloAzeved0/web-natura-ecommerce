import {
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import UserModal from './Modals/User'
import { useContext, useEffect, useState } from 'react'
import { OrderContext } from '@/contexts/order'

import { useDebounce } from 'use-debounce'
import { ProductContext } from '@/contexts/product'

const Header = () => {
  const [headerSearch, setHeaderSearch] = useState('')
  const [debounceHeaderSearch] = useDebounce(headerSearch, 1000)

  const [openModal, setOpenModal] = useState<boolean>(false)
  const { orderProducts, cartData } = useContext(OrderContext)

  const { setSearch } = useContext(ProductContext)

  useEffect(() => {
    setSearch(debounceHeaderSearch)
  }, [setSearch, debounceHeaderSearch])

  return (
    <header className='fixed top-0 z-10 flex w-full justify-center border-b bg-white'>
      <div className='container flex w-full items-center justify-between py-3'>
        <Link
          href='/'
          className='hidden text-xl font-bold text-gray-800 sm:flex'
        >
          <b>Cosméticos&Co</b>
        </Link>

        <div className='relative mx-20 w-full'>
          <input
            type='text'
            value={headerSearch}
            onChange={(e) => setHeaderSearch(e.target.value)}
            placeholder='O que está buscando hoje?'
            className='w-full rounded-full bg-gray-100 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <SearchIcon className='absolute left-3 top-2 h-5 w-5 text-gray-500' />
        </div>

        <div className='flex items-center justify-center'>
          <Link
            href='/carrinho'
            className='mr-2 flex flex-col items-center justify-center text-gray-800 hover:text-gray-600'
          >
            {orderProducts.length ? (
              <span className='z-10 -mb-1 -mr-4 h-6 w-6 rounded-xl border bg-orange-500 text-center font-bold text-white'>
                {cartData.quantity}
              </span>
            ) : (
              ''
            )}
            <ShoppingCartIcon className='h-8 w-8' />
          </Link>

          <button
            type='button'
            onClick={() => setOpenModal(true)}
            className='text-gray-800 hover:text-gray-600'
          >
            <UserIcon className='h-8 w-8' />
          </button>

          <UserModal open={openModal} setClosed={() => setOpenModal(false)} />
        </div>
      </div>
    </header>
  )
}

export default Header
