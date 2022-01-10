import Head from 'next/head'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Skills from '../components/Skills'
import Box from '@mui/material/Box';

export default function App() {
  return (
    <Box>
      <Head>
        <title>Omar Minaya | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Home />
      <Skills />
    </Box>
  )
}