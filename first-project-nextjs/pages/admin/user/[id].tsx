import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function AdminUser() {
  const router = useRouter();

  console.log("router : ", router.query.id);

  function handleOnClick() {
    router.push('/login/login')
  }

  return (
    <>
      <h1>Admin -{">"} User Pages {router.query.id}</h1>

      <button onClick={handleOnClick}  >Go to HomePages</button>

      {/* <a href='/login/login'>Go to HomePages</a> */}

      <Link href='/login/login'>
        <a className='active'>Go to HomePages</a>
      </Link>
    </>
  )
}
