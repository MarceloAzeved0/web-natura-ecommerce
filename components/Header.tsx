import {
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/outline'

const Header = ({ productSearch, setProductSearch }) => {
  return (
    <header className='flex w-full justify-center border-b'>
      <div className='container flex w-full items-center justify-between py-3'>
        <div className='hidden text-xl font-bold text-gray-800 sm:flex'>
          <b>Cosméticos&Co</b>
        </div>

        <div className='relative mx-20 w-full'>
          <input
            value={productSearch}
            onChange={setProductSearch}
            type='text'
            placeholder='O que está buscando hoje?'
            className='w-full rounded-full bg-gray-100 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <SearchIcon className='absolute left-3 top-2 h-5 w-5 text-gray-500' />
        </div>

        <div className='flex items-center space-x-4'>
          <a href='/cart' className='text-gray-800 hover:text-gray-600'>
            <ShoppingCartIcon className='h-6 w-6' />
          </a>

          <a href='/account' className='text-gray-800 hover:text-gray-600'>
            <UserIcon className='h-6 w-6' />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
