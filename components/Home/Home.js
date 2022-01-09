import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar'
import AboutMe from '../AboutMe/AboutMe'
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import style from "./Home.module.scss";

export default function Home() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => { setChecked(true) }, 500);
  });

  return (
    <div className={style.root}>
      <div className={style.NavBar}>
        <NavBar />
      </div>
      <Fade in={checked}>
        <Box
          className={style.Title}
          sx={{
            ml: { xs: 'none', sm: '70px', md: '150px', lg: '250px' },
            mr: { xs: 'none', sm: '70px', md: '150px', lg: '250px' }
          }}>
          .About Me
        </Box>
      </Fade>
      <Slide direction="up" in={checked} >
        <Box>
          <AboutMe />
        </Box>
      </Slide>
    </div>
  )
}
