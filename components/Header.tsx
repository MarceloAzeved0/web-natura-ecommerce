import {
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import UserModal from './Modals/User'
import { useState } from 'react'

const Header = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <header className='flex w-full justify-center border-b'>
      <div className='container flex w-full items-center justify-between py-3'>
        <div className='hidden text-xl font-bold text-gray-800 sm:flex'>
          <b>Cosméticos&Co</b>
        </div>

        <div className='relative mx-20 w-full'>
          <input
            type='text'
            placeholder='O que está buscando hoje?'
            className='w-full rounded-full bg-gray-100 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <SearchIcon className='absolute left-3 top-2 h-5 w-5 text-gray-500' />
        </div>

        <div className='flex items-center'>
          <Link href='/carrinho' className='text-gray-800 hover:text-gray-600'>
            <ShoppingCartIcon className='h-6 w-6' />
          </Link>

          <button
            type='button'
            onClick={() => setOpenModal(true)}
            className='text-gray-800 hover:text-gray-600'
          >
            <UserIcon className='h-6 w-6' />
          </button>

          <UserModal open={openModal} setClosed={() => setOpenModal(false)} />
        </div>
      </div>
    </header>
  )
}

export default Header
