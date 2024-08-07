import { useRouter } from 'next/router'

export default function Cart() {
  const router = useRouter()
  return <p>Post: {router.query.id}</p>
}
