import Link from 'next/link'

interface IModal {
  title: string
  body: React.ReactNode
}

const Modal: React.FC<IModal> = ({ title, body }) => {
  return (
    <div className='fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50'>
      <div className='w-96 rounded-md border bg-white p-8 shadow-lg'>
        <div className='text-center'>
          <h3 className='text-2xl font-bold text-gray-900'>{title}</h3>
          <div className='mt-2 px-7 py-3'>{body}</div>
          <div className='mt-4 flex justify-center'>
            <Link
              href='/'
              className='rounded-md bg-orange-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300'
            >
              Fechar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
