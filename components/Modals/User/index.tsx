import { useForm, SubmitHandler } from 'react-hook-form'
import Modal from '../Base'
import { useContext } from 'react'
import { UserContext } from '@/contexts/user'
import { IUser } from '@/services/user/interfaces'

interface Inputs {
  name: string
  email: string
}

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const { user, setUser, getOrCreateUser } = useContext(UserContext)
  const onSubmit: SubmitHandler<Inputs> = (data) => getOrCreateUser(data)

  return user?.id ? (
    <div>
      <h4>Olá {user.name}!</h4>
      <button
        onClick={() => setUser({} as IUser)}
        type='button'
        className='my-4 rounded-full bg-orange-500 px-6 py-3 text-white hover:opacity-80'
      >
        Alterar
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='my-2 flex'>
        <label className='mr-2' htmlFor='name'>
          Nome:
        </label>
        <input
          id='name'
          className='border-b-2 outline-none hover:border-b-2 hover:border-orange-500'
          {...register('name')}
        />
        {errors.name && <p>Nome é obrigatório.</p>}
      </div>
      <div className='my-2 flex'>
        <label htmlFor='email' className='mr-2'>
          Email:
        </label>
        <input
          className='border-b-2 outline-none hover:border-b-2 hover:border-orange-500'
          id='email'
          type='email'
          {...register('email', {
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
        />
        {errors.email && <p>Por favor adicione um email válido.</p>}
      </div>
      <button
        type='submit'
        className='my-4 rounded-full bg-orange-500 px-6 py-3 text-white hover:opacity-80'
      >
        Enviar
      </button>
    </form>
  )
}

interface IUserModal {
  open: boolean
  setClosed: () => void
}

const UserModal: React.FC<IUserModal> = ({ open, setClosed }) => {
  return (
    open && (
      <Modal
        title='Informações do usuário'
        body={<UserForm />}
        closeModal={() => setClosed()}
      />
    )
  )
}

export default UserModal
