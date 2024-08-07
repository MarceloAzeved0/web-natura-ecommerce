interface IModal {
  title: string
  body: React.ReactNode
  closeModal: () => void
}

const Modal: React.FC<IModal> = ({ title, body, closeModal }) => {
  return (
    <div className='fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50'>
      <div className='w-96 rounded-md border bg-white p-8 shadow-lg'>
        <div className='text-center'>
          <div className='flex w-full justify-between'>
            <h3 className='text-2xl font-bold text-gray-900'>{title}</h3>
            <button type='button' className='font-bold' onClick={closeModal}>
              X
            </button>
          </div>
          <div className='mt-4 flex w-full flex-col'>{body}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
