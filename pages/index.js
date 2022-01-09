import Head from 'next/head'
import Home from '../components/Home/Home'

export default function App() {
  return (
    <div>
      <Head>
        <title>Omar Minaya | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  )
}
