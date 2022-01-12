import Head from 'next/head'
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Skills from './components/Skills'
import Box from '@mui/material/Box';
import Separator from './components/Separator'
import Certifications from './components/Certifications'
import Fade from '@mui/material/Fade';

export default function App() {
  const [upper, setUpper] = useState(false);
  useEffect(() => {
    setTimeout(() => setUpper(true), 300);
  });
  return (
    <Box display="inline-block">
      <Head>
        <title>Omar Minaya | Portfolio</title>
        <meta name="description" content="An example of a meta description. These show up in search engine results."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Fade in={upper}>
        <div name='Home'>
          <Separator text='FULLSTACK DEVELOPER' mt={25} mb={5} mobilemt={20} mobilemb={-1} />
        </div>
      </Fade>
      <Home />
      <div name='Skills'>
        <Separator
          text='RELEVANT SKILLS' mt={15} mb={15} mobilemt={12} mobilemb={10}
        />
      </div>
      <Skills />
      <div name='Certifications'>
        <Separator
          text='BADGES / CERTIFICATIONS' mt={15} mb={15} mobilemt={28} mobilemb={5}
        />
      </div>
      <Certifications />
    </Box>
  )
}