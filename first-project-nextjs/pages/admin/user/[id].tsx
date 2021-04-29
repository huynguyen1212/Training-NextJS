import Head from 'next/head'
import { useRouter } from 'next/router'

export default function AdminUser() {
  const router = useRouter();

  console.log("router : ", router);

  return (
    <>
      <Head>
        <title>Admin User</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <h1>Admin -{">"} User</h1>
    </>
  )
}
