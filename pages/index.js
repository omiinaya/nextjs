import Head from 'next/head'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Skills from '../components/Skills'
import Box from '@mui/material/Box';
import Separator from '../components/Separator'

export default function App() {
  //const [tab, setTab] = useState(false)
  return (
    <Box>
      <Head>
        <title>Omar Minaya | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Separator text='FULLSTACK DEVELOPER' mt={20} mb={-1} mobilemt={20} mobilemb={-1} />
      <Home />
      <Separator text='RELEVANT SKILLS' mt={15} mb={15} mobilemt={5} mobilemb={5} />
      <Skills />
    </Box>
  )
}