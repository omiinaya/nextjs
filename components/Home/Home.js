import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar'
import Avatar from '@mui/material/Avatar';
import AboutMe from '../AboutMe/AboutMe'
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import style from "./Home.module.scss";

export default function Home() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => { setChecked(true) }, 300);
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
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          mt: "90px"
        }}
      >
        <Avatar
          sx={{
            height: '250px',
            width: '250px'
          }}
          variant="rounded"
        />
      </Box>

    </div>
  )
}
