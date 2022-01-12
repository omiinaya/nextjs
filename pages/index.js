import Head from 'next/head'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Skills from '../components/Skills'
import Box from '@mui/material/Box';
import Separator from '../components/Separator'
import Certifications from '../components/Certifications'
import Projects from '../components/Projects';

export default function App() {
  return (
    <Box display="inline-block">
      <Head>
        <title>Omar Minaya | Portfolio</title>
        <meta name="description" content="An example of a meta description. These show up in search engine results."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div name='Home'>
        <Separator text='FULLSTACK DEVELOPER' mt={25} mb={5} mobilemt={20} mobilemb={-1} />
      </div>
      <Home />
      <div name='Skills'>
        <Separator
          text='RELEVANT SKILLS' mt={15} mb={10} mobilemt={5} mobilemb={5}
        />
      </div>
      <Skills />
      <div name='Certifications'>
        <Separator
          text='BADGES & CERTIFICATIONS' mt={15} mb={5} mobilemt={23.5} mobilemb={1}
        />
      </div>
      <Certifications />
      <div name='Projects'>
        <Separator
          text='PERSONAL PROJECTS' mt={15} mb={5} mobilemt={130} mobilemb={7}
        />
      </div>
      <Projects />
    </Box>
  )
}