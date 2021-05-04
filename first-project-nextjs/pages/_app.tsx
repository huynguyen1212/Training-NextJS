import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="root-app">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/global.css" />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}